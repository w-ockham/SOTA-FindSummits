#include <iostream>
#include <fstream>
#include <unistd.h>
#include <string.h>

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

double uc_lat[XMLWIDTH][XMLHEIGHT];
double uc_long[XMLWIDTH][XMLHEIGHT];
double lc_lat[XMLWIDTH][XMLHEIGHT];
double lc_long[XMLWIDTH][XMLHEIGHT];

unsigned int xml_width,xml_height;
unsigned int mesh_width,mesh_height;
unsigned int width,height;

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

void tolatlong(char *latitude, char *longitude, unsigned int loc,float *data) {
  int x,y,px,py,dx,dy;
  double plong,plat;

  x = loc % width;
  y = loc / width;

  px = x / mesh_width;
  py = y / mesh_height;

  dx = x % mesh_width;
  dy = y % mesh_height;


  plong = lc_long[px][py] +  
    ((uc_long[px][py] - lc_long[px][py])*((double)dx /(double)mesh_width));
  plat =  uc_lat[px][py] -
    ((uc_lat[px][py] - lc_lat[px][py])*((double)dy/(double)mesh_height));

  sprintf(longitude,"%.20le",plong);
  sprintf(latitude,"%.20le",plat);
  //  printf("loc=%d, x=%d y=%d px=%d py=%d dx = %d dy = %d ",loc,x,y,px,py,dx,dy);
  //  printf("lat=%s long=%s height = %d\n",latitude,longitude,data[loc]);

}

void outputTreeSub(std::ofstream & out, int depth, ctBranch * b, float * data, 
		   int thresh ) {
  int xp,yp,xc,yc;
  double plong,plat,clong,clat;
  char labuff[128],lobuff[128];

  if (((data[b->extremum]-data[b->saddle]) > thresh) && (data[b->extremum]>thresh)) {
    tolatlong(labuff,lobuff,b->extremum,data);
    out <<
      "var m_latlng"+to_string(depth)+" = new google.maps.LatLng("+labuff+","+lobuff+");\n"+
      "var marker"+to_string(depth)+" = new google.maps.Marker({\n"+
      "  position: m_latlng"+to_string(depth)+",\n"+
      "  title:\""+to_string(data[b->extremum])+","+
                   to_string(data[b->saddle])+","+
                   to_string(data[b->extremum]-data[b->saddle])+"\",\n"+
      "  map: map\n"+
      "});\n";
    
    for ( ctBranch * c = b->children.head; c != NULL; c = c->nextChild ){
      if (((data[c->extremum]-data[c->saddle]) > thresh) && (data[c->extremum]>thresh)) { 
	  //abs(int(data[c->extremum])-int(data[c->saddle])) > thresh ) {
	depth++;
	outputTreeSub( out, depth, c, data, thresh );
      }
    }
  }
} 

void outputTree( std::ofstream & out, ctBranch * b, float * data, int thresh ) {

  char labuff[128],lobuff[128];
  sprintf(lobuff,"%.20le",lc_long[0][0]);
  sprintf(labuff,"%.20le",uc_lat[0][0]);

  out << 
    "function initialize() {\n";
  out <<
    "var latlng = new google.maps.LatLng(";
  out << labuff;
  out << ",";
  out << lobuff;
  out << +");\n";
  out <<
    "var opts = {\n";
  out <<
    "  zoom: 13,\n"
    "  center: latlng,"
    "   mapTypeId: google.maps.MapTypeId.TERRAIN\n"
    "};\n"
    "var map = new google.maps.Map(document.getElementById(\"map_canvas\"), opts);"<< endl;

  outputTreeSub(out, 0, b, data, thresh); 

  out << "}\n";
}

void loadMap (const char * filename, float **pixels)
{
  std::ifstream ifs(filename);
  std::string str;

  if (ifs.fail()) {
    cerr << "ERR: Couldn't open " << filename << endl;
    exit(EXIT_FAILURE);
  }

  getline(ifs,str);
  sscanf(str.data(),"%d %d",&xml_width,&xml_height);

  getline(ifs,str);
  sscanf(str.data(),"%d %d",&mesh_width,&mesh_height);

  width = xml_width * mesh_width;
  height = xml_height * mesh_height;

  for(int h = 0; h < xml_height; h++) 
    for(int w = 0; w < xml_width; w++) {
      getline(ifs,str);
      sscanf(str.data(),"%lf %lf",&lc_lat[w][h],&lc_long[w][h]);
      getline(ifs,str);
      sscanf(str.data(),"%lf %lf",&uc_lat[w][h],&uc_long[w][h]);
      //      printf("file(%d,%d) = (%.20le , %.20le) - (%.20le , %.20le)\n",
      //     w,h,lc_lat[w][h],lc_long[w][h],uc_lat[w][h],uc_long[w][h]);
    }

  int numPixels = width * height;
  printf("Processing %d * %d = %d meshes\n",width, height, numPixels);

  *pixels = new float[numPixels];
  
  if (!pixels) {
    cerr << "ERR: Couldn't allocate enough memory" << endl;
    exit(EXIT_FAILURE);
  }

  float minVal = 8000.0, maxVal = 0;
  float b;

  for (int i = 0; i < numPixels; i++) {
    getline(ifs,str);
    if(!ifs.fail()) {
      b = std::stof(str);
      (*pixels)[i] = b;
      minVal = std::min(b,minVal);
      maxVal = std::max(b,maxVal);
    } else {
      cerr << "ERR: Couldn't read " << filename << endl;
      exit(EXIT_FAILURE);
    }
  }

  cout << "min value is " << minVal << " and max is " << maxVal << endl;

}

int main( int argc, char ** argv ) 
{
    int errflg = 0;
    int c;
    
    //command line parameters
    char filename[1024] = "";
    char outfile[1024] = "";
    char switches[256] = "i:o:xp:";
    bool use48 = false;
    int thresh = 149;

    while ( ( c = getopt( argc, argv, switches ) ) != EOF ) {
      switch ( c ) {
        case 'i': 
          strcpy(filename,optarg);
          break;
        case 'o': 
          strcpy(outfile,optarg);
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
      clog << "\t -i < filename >  :  filename" << endl;
      clog << "\t -o < filename >  :  filename" << endl;
      clog << "\t -p < threshold > : pruning threshold" << endl;
      clog << "\t -x : use 4/8/checkerboard connectivity" << endl;
      clog << "\t\tdefault is 6 connectivity" << endl;
      clog << endl;
      exit(EXIT_FAILURE);
    }

    //Load data
    float * data;
    loadMap( filename, &data);

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
    std::ofstream out(outfile,std::ios::out);
    if (out) {
      outputTree( out, root, data, thresh);
    } else {
            cerr << "ERR: couldn't open output file " << outfile << endl;
    }
	
}
