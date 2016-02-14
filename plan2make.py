#!/usr/bin/env python
import codecs
import xml.etree.ElementTree as et
import struct
import sys
import os.path

mesh_width = 1125
mesh_height = 750
command = "\t./findsummits -i {} -w {} -h {} -l summitslistJA.csv\n"
htmlformat = "<!DOCTYPE html \"-//W3C//DTD XHTML 1.0 Strict//EN\"\n"\
"  \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n"\
"<html xmlns=\"http://www.w3.org/1999/xhtml\">\n"\
"  <head>"\
"    <meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\"/>\n"\
"    <title> SOTA Summit Candidates in Primary Mesh {} {}W x {}H Area</title>\n"\
"    <script type=\"text/javascript\"\n"\
"      src=\"http://maps.google.com/maps/api/js?sensor=false\"></script>\n"\
"    <script src=\"./{}.js\" type=\"text/javascript\"></script>\n"\
"  </head>\n"\
"  <body> \n"\
"    <p>SOTA Summit Candidates in Primary Mesh {} {}W x {}H Area</p>\n"\
"    <div id=\"map\" style=\"width:80%; height:100%; float:left\"></div>\n"\
"    <div id=\"list\" style=\"width:20%; height:100; float:left\">\n"\
"    <select id=\"select\" onchange=\"selectSummit(value)\" style=\"width:30%px\" size=35></select>\n"\
"    </div>\n"\
"  </body>\n"\
"</html>\n"

javacode_head =\
"function map_canvas() {\n"\
"    var region_data = new Array();\n"\
"    var region = new Array();\n"

javacode_data =\
"    region_data.push({{"\
"	region: \"./{}.html\","\
"	{}\n"

javacode_body = \
"    var latlng = new google.maps.LatLng(region_data[0].bounds.north, region_data[0].bounds.west);"\
"    var opts = {"\
"	zoom: 5,"\
"	center: latlng,"\
"	mapTypeId: google.maps.MapTypeId.TERRAIN"\
"    };"\
"    var map = new google.maps.Map(document.getElementById(\"map\"), opts);"\
"    for(i = 0; i < region_data.length; i++) {"\
"	region[i] = new google.maps.Rectangle({"\
"	    region : region_data[i].region,"\
"	    map : map,"\
"	    strokeColor:\"#00007f\","\
"	    strokeOpacity:1.0,"\
"	    strokeWeight:8,"\
"	    fillColor: '00003f',"\
"	    fillOpacity: 0.1,"\
"	    bounds: {"\
"		north : region_data[i].bounds.north,"\
"		south : region_data[i].bounds.south,"\
"		east : region_data[i].bounds.east,"\
"		west : region_data[i].bounds.west}"\
"	});"\
"	google.maps.event.addListener(region[i],'click',function(event){"\
"	    var newWindow =window.open(this.region)"\
"	    });"\
"    }"\
"}"\
"google.maps.event.addDomListener(window, 'load', map_canvas);"

outf = open("Makefile",'w')
java = open("main.js",'w')
file = open(sys.argv[1],'r')
lf = file.readlines()
missing = False
outf.write("all : ")
for l in lf:
    t = l.split()
    outf.write("{} ".format(t[0]+".csv"))
#    if not os.path.exists("{}".format(t[0]+"-*.pos")):
#        print "File not found:" + t[0]
#        missing = True

if missing:
  sys.exit(1)

outf.write("\n")

def get_rectcoord(name):
    js = open(name+".js",'r')
    count = 0
    coord = ""
    for l in js:
        if "bounds:" in l:
            count = 1
        if count > 0:
            coord += l
            count+=1
            if count == 6:
                count = 0
    return coord

java.write(javacode_head)            

for l in lf:
    t = l.split()
    outf.write("{} : {}\n".format(t[0]+".csv",t[0]+"-0.bin"))
    outf.write(command.format(t[0],t[1],t[2]))
    outf.write("\n")

    html = open(t[0]+".html",'w')
    html.write(htmlformat.format(t[0],t[1],t[2],t[0],t[0],t[1],t[2]))
    html.close()
    print get_rectcoord(t[0])
    java.write(javacode_data.format(t[0],get_rectcoord(t[0])))

java.write(javacode_body)
java.close()
outf.close()
