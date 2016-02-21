#include <iostream>
#include <fstream>
#include <set>
#include <unistd.h>
#include <string.h>
#include <math.h>
extern "C" 
{
#include <tourtre.h>
}

#include "Mesh.h"

#define XMLWIDTH 64
#define XMLHEIGHT 64

using std::cin;
using std::cout;
using std::clog;
using std::cerr;
using std::endl;

double uc_lat,uc_lng;
double lc_lat,lc_lng;
double nw_lat,nw_lng,se_lat,se_lng;
double org_lat,org_lng;
double orgse_lat,orgse_lng;

unsigned int xml_width,xml_height;
unsigned int mesh_width,mesh_height;
unsigned int width,height;
int unknownCount;
string region_name;

#define dless(x,y) (x<y)
#define dequal(x,y,delta) (fabs(y - x)<=delta)


string string_trim(const string& str, const char* delim="\r\n");
string string_trim(const string& str, const char* delim)
{
  const int p1(str.find_first_not_of(delim));
  if(p1 == string::npos){
    return string();
  }
  const int p2(str.find_last_not_of(delim));
  return str.substr(p1, p2 - p1 + 1);
}

class Summit {
public:
  Summit() { this->name = "";}
  Summit(std::string name,double lat, double lng,std::string csv) {
    this->name = name; this->lat = lat; this->lng = lng;
    missing = true;
    csvtxt = string_trim(csv);
  }
  bool operator < (const Summit&left) const {
    return dless(this->lng,left.lng);
  }
  string name;
  mutable bool missing;
  double elevation;
  double lat;
  double lng;
  string csvtxt;
};

std::multiset<Summit> summit_list;

vector<string> split( string &src, string key){
    vector<string> v;
    string str = src;

    int index = 0;
    while(index < (int)str.length()){
        int oldindex = index;
        index = str.find( key, index);
        if(index != string::npos){
            string item = str.substr(oldindex, index - oldindex);
            v.push_back(item);
        }else{
            string item = str.substr(oldindex);
            v.push_back(item);
            break;
        }
        index += key.length();
    }
    return v;
}

void readSummitlist(const char *filename) {
  std::ifstream ifs(filename);
  string str,name;
  vector<string> vec;
  double lat,lng;

  if (ifs.fail()) {
    cerr << "ERR: Couldn't open " << filename << endl;
    exit(EXIT_FAILURE);
  }

  while(getline(ifs,str)) {
    vec = split(str, ",");
    if(vec.size() > 7) {
      sscanf(vec[7].data(),"%lf",&lng);
      sscanf(vec[6].data(),"%lf",&lat);
      name = vec[3]+"("+vec[0]+")";
      summit_list.insert(Summit(name,lng,lat,str));
    }
  }
}
      

bool isCertified(char *name,char *csv, double plat, double plong,double delta) {
  std::set<Summit>::iterator iter = summit_list.lower_bound(Summit("",0,plong-delta,""));
  if(iter != summit_list.end()) {
    do {
      if(dequal(plat,iter->lat,delta)&&dequal(plong,iter->lng,delta)) {
	strcpy(name,iter->name.data());
	strcpy(csv,iter->csvtxt.data());
	//	cout << "Found " << name << " " << plat <<"," << plong <<endl;
	if(iter->missing) {
	  iter->missing = false;
	  return true;
	} else
	  return false;
      }
      iter++;
    } while (((iter->lng - plong) < delta)&& iter != summit_list.end());
  }
  return false;
}


double value ( size_t v, void * d ) {
    Mesh * mesh = reinterpret_cast<Mesh*>(d);
    return mesh->data[v];
}

size_t neighbors48 ( size_t v, size_t * nbrs, void * d ) {
    Mesh * mesh = static_cast<Mesh*>(d);
    static std::vector<size_t> nbrsBuf;
    
    nbrsBuf.clear();
    mesh->getNeighbors48(v,nbrsBuf);
    
    for (uint i = 0; i < nbrsBuf.size(); i++) {
            nbrs[i] = nbrsBuf[i]; 
    }
    return nbrsBuf.size();
}

size_t neighbors6 ( size_t v, size_t * nbrs, void * d ) {
    Mesh * mesh = static_cast<Mesh*>(d);
    static std::vector<size_t> nbrsBuf;
    
    nbrsBuf.clear();
    mesh->getNeighbors6(v,nbrsBuf);
    
    for (uint i = 0; i < nbrsBuf.size(); i++) {
            nbrs[i] = nbrsBuf[i]; 
    }
    return nbrsBuf.size();
}

bool tolatlng(char *name,char *csv,char *latitude, char *longitude, 
	      unsigned int loc,float *data,bool &border,double delta=0.001) {
  int x,y;
  double plng,plat;
  double dlng,dlat;
  x = loc % width;
  y = loc / width;
  //  cout << loc << "," << x << "," << y << endl;

  dlng = uc_lng - lc_lng;
  dlat = uc_lat - lc_lat;

  plng = org_lng +  
    (dlng*((double)x /(double)mesh_width));
  plat =  org_lat -
    (dlat*((double)y/(double)mesh_height));

  sprintf(longitude,"%3.7f",plng);
  sprintf(latitude,"%2.8f",plat);

  if(plng >= nw_lng && plng <= se_lng && plat >= se_lat && plat <= nw_lat)
    border = false;
  else 
    border = true;

  if(name)
    return isCertified(name, csv, plat, plng, delta);
  else 
    return false;
}

/* Maidenhead Grid Locator in C
   https://ve3nrt.wordpress.com/2010/09/21/maidenhead-grid-locator-in-c
*/
void positionToMaidenhead(char lat[],char lng[], char m[])
{
  const int pairs=4;
  double latitude,longitude;
  const double scaling[]={360.,360./18.,(360./18.)/10.,			\
			  ((360./18.)/10.)/24.,(((360./18.)/10.)/24.)/10., \
			  ((((360./18.)/10.)/24.)/10.)/24.,		\
			  (((((360./18.)/10.)/24.)/10.)/24.)/10.};
 int i;
 int index;

 sscanf(lat,"%lf",&latitude);
 sscanf(lng,"%lf",&longitude);

 for (i=0;i<pairs;i++)
   {
     index = (int)floor(fmod((180.0+longitude),	\
			     scaling[i])/scaling[i+1]);
     m[i*2] = (i&1) ? 0x30+index : (i&2) ? 0x61+index : 0x41+index;
     index = (int)floor(fmod((90.0+latitude),	\
			     (scaling[i]/2))/(scaling[i+1]/2));
     m[i*2+1] = (i&1) ? 0x30+index : (i&2) ? 0x61+index : 0x41+index;
   }
 m[pairs*2]=0;
}

void outputTreeSub(std::ofstream & out, std::ofstream & tout, 
		   ctBranch * b, float * data, 
		   int thresh ) 
{
  int xp,yp,xc,yc;
  double plong,plat,clong,clat;
  char namebuff[128];
  char labuff[128],lobuff[128];
  char hbuff[128],hbuff2[128],dbuff[128],csvbuff[256];
  char maidenheadloc[128];
  bool flag,border;

  if (((data[b->extremum]-data[b->saddle]) > thresh) && 
      (data[b->extremum] > thresh)) {
    flag =  tolatlng(namebuff,csvbuff,labuff,lobuff,b->extremum,data,border);
    sprintf(hbuff,"%4.1f",data[b->extremum]);
    sprintf(hbuff2,"%5.1f",data[b->extremum]*3.2808);
    sprintf(dbuff,"%4.1f",data[b->extremum]-data[b->saddle]);
    if(!flag) {
      positionToMaidenhead(labuff,lobuff,maidenheadloc);
      sprintf(namebuff,"U-%s",maidenheadloc);
    }
    if(!border) {
      if (flag) tout << csvbuff;
      else {
	tout << namebuff << ",";
	tout << "Japan -,," << namebuff << ",";
	tout << hbuff << "," << hbuff2 << "," <<lobuff << ","<< labuff << ",";
	tout << lobuff << "," << labuff << "," << labuff << ",,,,,,,";
      }
      //javascript
      out <<
	"data_peak.push({\n"
	"lat: ";
      out << labuff;
      out << ",\n"
	"lng: ";
      out << lobuff;
      out <<",\n";
      if (flag) {
	out <<"cert : true,\n";
	out <<"missing : false,\n";
      } else {
	out <<"cert : false,\n" <<
	  "missing : false,\n";
	unknownCount++;
      }
      out << 
	"content:'" << namebuff << "(" << hbuff << "m) "<<
	labuff << "," << lobuff << "["<< dbuff << "m]'\n});\n";

      tolatlng(NULL,csvbuff,labuff,lobuff,b->saddle,data,border);
      sprintf(hbuff,"%4.1f",data[b->saddle]);
      sprintf(hbuff2,"%5.1f",data[b->extremum]*3.2808);
      sprintf(dbuff,"%4.1f",data[b->extremum]-data[b->saddle]);
      tout << "Saddle-" << namebuff << ",";
      tout << hbuff <<  "," << dbuff << "," << lobuff << "," << labuff << endl;

      //javascript
      out <<
	"data_saddle.push({\n"
	"lat: ";
      out << labuff;
      out << ",\n"
	"lng: ";
      out << lobuff;
      out <<",\n";
      out << 
	"content:'Saddle[" << hbuff << "m] " <<
	" " << labuff << "," << lobuff <<
	" [" << dbuff << "m]'\n});\n";
    }
  } else
    if (((data[b->extremum]-data[b->saddle]) > (thresh/20) && 
    	 (data[b->extremum] > (thresh/20))))
      {  // missing summit
	flag =  tolatlng(namebuff,csvbuff,labuff,lobuff,
			  b->extremum,data,border);
	sprintf(hbuff,"%4.1f",data[b->extremum]);
	sprintf(hbuff2,"%5.1f",data[b->extremum]*3.2808);
	sprintf(dbuff,"%4.1f",data[b->extremum]-data[b->saddle]);
	if((!border)&&flag) {
	  tout << "(Missing)"<< csvbuff;
	  //javascript
	  out <<
	    "data_peak.push({\n"
	    "lat: ";
	  out << labuff;
	  out << ",\n"
	    "lng: ";
	  out << lobuff;
	  out <<",\n";
	  out <<"cert : true,\n";
	  out <<"missing : true,\n";
	  out << 
	    "content:'(Missing)" << namebuff << "(" << hbuff << "m) "<<
	    labuff << "," << lobuff << "[" << dbuff << "m]'\n});\n";

	  tolatlng(NULL,csvbuff,labuff,lobuff,b->saddle,data,border);
	  sprintf(hbuff,"%4.1f",data[b->saddle]);
	  sprintf(hbuff2,"%5.1f",data[b->extremum]*3.2808);
	  sprintf(dbuff,"%4.1f",data[b->extremum]-data[b->saddle]);
	  tout << "Saddle-" << namebuff << ",";
	  tout << hbuff << "," << dbuff << "," << lobuff << "," << labuff <<endl;

	  //javascript
	  out <<
	    "data_saddle.push({\n"
	    "lat: ";
	  out << labuff;
	  out << ",\n"
	    "lng: ";
	  out << lobuff;
	  out <<",\n";
	  out << 
	    "content:'Saddle(" << hbuff  << "m) " <<
	    " " << labuff << "," <<lobuff<<
	    " ["<< dbuff<< "m]'\n});\n";
	}
      }
  for ( ctBranch * c = b->children.head; c != NULL; c = c->nextChild )
    outputTreeSub( out, tout, c, data, thresh );
}

void outputTree( std::ofstream & out, std::ofstream & tout, ctBranch * b, float * data, int thresh ) {

  //Analyzed area
  tout << region_name << ", "
       << nw_lat << ", " 
       << se_lat << ", " 
       << se_lng << ", " 
       << nw_lng << endl;

  // javascipt main
  out << 
    "function map_canvas() {\n"
    " var data_peak = new Array();\n"
    " var data_saddle = new Array();\n"
    " var polylines = new Array();\n";

  outputTreeSub(out, tout, b, data, thresh); 

  // javascript body
  out <<
    "var latlng = new google.maps.LatLng(data_peak[0].lat, data_peak[0].lng);\n"
    "var opts = {\n"
    "  zoom: 13,\n"
    "  center: latlng,\n"
    "  mapTypeId: google.maps.MapTypeId.TERRAIN\n"
    "};\n"
    "map = new google.maps.Map(document.getElementById(\"map\"), opts);\n"
    "markers_peak = new Array();\n"
    "var markers_saddle = new Array();\n"
    "for (i = 0; i < data_peak.length; i++) {\n"
    "  if(data_peak[i].cert) {\n"
    "   if(data_peak[i].missing) {\n"
    "    markers_peak[i] = new google.maps.Marker({\n"
    "        position: new google.maps.LatLng(data_peak[i].lat, data_peak[i].lng),\n"
    "        icon : 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',\n"
    "        map: map});\n"
    "   } else {\n"
    "    markers_peak[i] = new google.maps.Marker({\n"
    "        position: new google.maps.LatLng(data_peak[i].lat, data_peak[i].lng),\n"
    "        icon : 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',\n"
    "        map: map\n"
    "    });}} else {\n"
    "    markers_peak[i] = new google.maps.Marker({\n"
    "        position: new google.maps.LatLng(data_peak[i].lat, data_peak[i].lng),\n"
    "        map: map\n"
    "    });}\n"
    "    markerInfo(markers_peak[i], data_peak[i].content);\n"
    "}\n"
    "for (i = 0; i < data_saddle.length; i++) {\n"
    "    markers_saddle[i] = new google.maps.Marker({\n"
    "        position: new google.maps.LatLng(data_saddle[i].lat, data_saddle[i].lng),\n"
    "        opacity: 0.2,\n"
    "        map: map\n"
    "    });\n"
    "    markerInfo(markers_saddle[i], data_saddle[i].content);\n"
    "}\n"
    "for (i = 0; i < data_peak.length; i++) {\n"
    "var option= document.createElement('option');\n"
    "if(data_peak[i].cert) {\n"
    "  if(data_peak[i].missing)\n"
    "    option.style.color = 'darkyellow';\n"
    "   else\n"
    "   option.style.color = 'blue';\n"
    "} else\n"
    "	option.style.color = 'red';\n"
    "option.setAttribute('value', i);\n"
    "option.innerHTML = data_peak[i].content;\n"
    "select.appendChild(option);\n"
    "polylines[i] = new google.maps.Polyline({\n"
    "   map: map,\n"
    "	strokeColor:\"#00007f\",\n"
    "    strokeOpacity:0.7,\n"
    "	strokeWeight:2,\n"
    "    path: [\n"
    "	    new google.maps.LatLng(data_peak[i].lat, data_peak[i].lng),\n"
    "	    new google.maps.LatLng(data_saddle[i].lat, data_saddle[i].lng)\n"
    "	    ]\n"
    "});\n"
    "region_rect = new google.maps.Rectangle({\n"
    "   map: map,\n"
    "	strokeColor:\"#00007f\",\n"
    "   strokeOpacity:1.0,\n"
    "	strokeWeight:8,\n"
    "   fillColor: '000000',\n"
    "   fillOpacity: 0,\n"
    "    bounds: {\n"
    "       north:" << nw_lat << ",\n" <<
    "       south:" << se_lat << ",\n" <<
    "       east:" << se_lng << ",\n" <<
    "       west:" << nw_lng << "}" <<
    "});\n"
    "region_rect = new google.maps.Rectangle({\n"
    "   map: map,\n"
    "	strokeColor:\"#7f0000\",\n"
    "   strokeOpacity:1.0,\n"
    "	strokeWeight:4,\n"
    "   fillColor: '000000',\n"
    "   fillOpacity: 0,\n"
    "    bounds: {\n"
    "       north:" << org_lat << ",\n" <<
    "       south:" << orgse_lat << ",\n" <<
    "       east:" << orgse_lng << ",\n" <<
    "       west:" << org_lng << "}" <<
    "});\n"
    "};\n"
    "}\n"
    "function selectSummit(value){\n"
    "map.panTo(markers_peak[value].position);\n"
    "};\n"
    "function markerInfo(marker, name) {\n"
    "google.maps.event.addListener(marker, 'click', function (event) {\n"
    "   new google.maps.InfoWindow({\n"
    "        content: name\n"
    "    }).open(marker.getMap(), marker);\n"
    "});\n"
    "}\n"
    "google.maps.event.addDomListener(window, 'load', map_canvas);\n";
}

#define MAXWIDTH 256
void loadMap (int start, int area_width, int area_height, unsigned int &width, unsigned int &height,float **pixels)
{
  std::ifstream ifst[MAXWIDTH];
  std::ifstream ifsb[MAXWIDTH];
  std::string str,fname[MAXWIDTH];
  int fpos,sub_sq;

  if ((area_width+2)*(area_height+2)>MAXWIDTH) {
    cerr << "ERR: Area size exceeds " << MAXWIDTH << endl;
    exit(EXIT_FAILURE);
  }    
  for(int h = -1; h < (area_height + 1); h++) {
    for(int w = -1; w < (area_width + 1); w++) {
      if ( w % 2 == 0) sub_sq = 0; else sub_sq = 1;
      if ( h % 2 != 0) sub_sq += 10;

      fpos = (w+1) + (h+1) * (area_width + 2);
      /*
      cout << "number=" << fpos << endl;
      cout << "w h =" << w << "," << h << endl;
      */
      fname[fpos] = std::to_string(start-100 * int(floor(h/2.0)) + int(floor(w/2.0))) + "-" + std::to_string(sub_sq);
      ifst[fpos].open(fname[fpos]+".pos");
      ifsb[fpos].open(fname[fpos]+".bin",ios::in | ios::binary);
      //      cout << "Reading region:" << fname[fpos] << endl;
      
      if(ifsb[fpos].fail()) {
	//	cout << "Null region:" << fname[fpos] << endl;
	ifsb[fpos] == NULL;
	ifst[fpos] == NULL;
      }
      
      if( h == 0 && w == 0 ){
	getline(ifst[fpos],str);
	cout << "North West region "<< fname[fpos] << ":" << str <<endl;
	getline(ifst[fpos],str);
	sscanf(str.data(),"%d %d",&xml_width,&xml_height);
	getline(ifst[fpos],str);
	sscanf(str.data(),"%d %d",&mesh_width,&mesh_height);
	getline(ifst[fpos],str);
	sscanf(str.data(),"%lf %lf",&lc_lat,&lc_lng);
	getline(ifst[fpos],str);
	sscanf(str.data(),"%lf %lf",&uc_lat,&uc_lng);

	/* Origin Coordinate */
	org_lat = uc_lat + (uc_lat- lc_lat)*xml_height;
	org_lng = lc_lng - (uc_lng- lc_lng)*xml_width;
	orgse_lat = org_lat - 
	  (uc_lat- lc_lat)*(xml_height*2 + (double)xml_height*area_height);
	orgse_lng = org_lng +
	  (uc_lng - lc_lng)*(xml_width*2 + (double)xml_width*area_width);
	/* South East Coordinate */
	se_lat = uc_lat - 
	  (uc_lat- lc_lat)*(double)xml_height*area_height - (uc_lat- lc_lat)*(double)xml_height/2;
	se_lng = lc_lng + 
	  (uc_lng - lc_lng)*(double)xml_width*area_width + (uc_lng - lc_lng)*(double)xml_width/2;
	/* North West Coordinate */
	nw_lat = uc_lat +(uc_lat- lc_lat)*(double)xml_height/2;
	nw_lng = lc_lng - (uc_lng - lc_lng)*(double)xml_width/2; 

	width = xml_width * mesh_width * (area_width + 2);
	height = xml_height * mesh_height * (area_height + 2);

	cout << xml_width << "," << mesh_width << "," << area_width << endl;
	cout << xml_height << "," << mesh_height << "," << area_height << endl;
      }
    }
  }

  int numPixels = width * height;
  cout << "Reading " << width << " * " << height << 
    " = " << numPixels << " meshes\n";

  *pixels = new float[numPixels];
  if (!pixels) {
    cerr << "ERR: Couldn't allocate enough memory" << endl;
    exit(EXIT_FAILURE);
  }

  float minVal =9000, maxVal = 0;
  float b;
  unsigned int count = 0;

  for(int h = -1; h < (area_height + 1) ; h++ ) {
    for(int y = 0; y < mesh_height*xml_height; y++)  {
      for(int w = -1; w < (area_width + 1); w++) {
	fpos = (w+1) + (h+1) * (area_width + 2);
	for(int i = 0; i < mesh_width*xml_width; i++) {
	  if(ifsb[fpos]!=NULL) {
	    ifsb[fpos].read((char *)&b,sizeof(float));
	    if(!ifsb[fpos].fail()) {
	      if (b<0) b =0.0;
	      (*pixels)[count++] = b;
	      minVal = std::min(b,minVal);
	      maxVal = std::max(b,maxVal);
	    } else {
	      cerr << "ERR: Couldn't read " << fname[fpos] << endl;
	      exit(EXIT_FAILURE);
	    }
	  } else {
	    b =0.0;
	    (*pixels)[count++] = 0.0;
	    minVal = std::min(b,minVal);
	    maxVal = std::max(b,maxVal);
	  }
	}
      }
    }
  }
  cout << "Wrote " << count << " meshes." <<endl;
  cout << "Min elevation is " << minVal << " and Max elevation is " << maxVal << endl;
}


int main( int argc, char ** argv ) 
{
    int errflg = 0;
    int c;
    
    //command line parameters
    string filename;
    int area_width, area_height;
    char switches[256] = "i:h:w:o:l:xp:";
    bool use48 = false;
    int thresh = 150;

    while ( ( c = getopt( argc, argv, switches ) ) != EOF ) {
      switch ( c ) {
        case 'i': 
          filename = optarg;
          break;
        case 'w': 
	  area_width = atoi(optarg);
          break;
        case 'h': 
	  area_height = atoi(optarg);
          break;
        case 'l': 
	  readSummitlist(optarg);
          break;
        case 'x': 
          use48 = true;
          break;
        case 'p':
          thresh = atoi(optarg);
          break;
        case '?':
          errflg++;
      }
    }
            
    if ( errflg || filename[0] == '\0') {
      clog << "usage: " << argv[0] << " <flags> " << endl << endl;
      clog << "flags" << endl;
      clog << "\t -i < filename >  :  elevation data" << endl;
      clog << "\t -o < filename >  :  javascript filename" << endl;
      clog << "\t -s < filename >  :  summits list" << endl;
      clog << "\t -p < threshold > : pruning threshold" << endl;
      clog << "\t -x : use 4/8/checkerboard connectivity" << endl;
      clog << "\t\tdefault is 6 connectivity" << endl;
      clog << endl;
      exit(EXIT_FAILURE);
    }

    unknownCount = 0;
    region_name = filename;

    //Load data
    float * data;
    loadMap(std::stoi(filename),area_width, area_height, width, height, &data);
    //    cout << "size = " << width << "," << height<<endl;

    //Create mesh
    Mesh mesh(data ,width, height);
    std::vector<size_t> totalOrder;
    mesh.createGraph( totalOrder ); //this just sorts the vertices according to data.less()
    
    //init countour tree library
    ctContext * ctx = 
      ct_init(
        width*height, //numVertices
        &(totalOrder.front()), //don't modify totalOrder after this!
        &value,
        use48 ? &neighbors48 : &neighbors6,
        &mesh //data for callbacks. The global functions less, value and 
              //neighbors are just wrappers which call mesh->getNeighbors, etc
    );
    
    //create contour tree
    ct_sweepAndMerge( ctx );
    ctBranch * root = ct_decompose( ctx );
    
    //create branch decomposition
    ctBranch ** map = ct_branchMap(ctx);
    ct_cleanup( ctx );
    
    //output tree
    std::ofstream jout(filename + ".js",std::ios::out);
    std::ofstream tout(filename + ".txt",std::ios::out);
    if (jout) {
      outputTree( jout, tout , root, data, thresh);
    } else {
      cerr << "ERR: couldn't open output file " << filename << ".js" << endl;
    }
}
