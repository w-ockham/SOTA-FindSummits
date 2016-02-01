#!/usr/bin/env python
import codecs
import xml.etree.ElementTree as et
import struct
import sys

xmlFile = "FG-GML-{}-dem10b-20090201.xml"

def read_except_declaration(f):
    line = f.readline()
    end = line.find('?>') 
    if end > 0:
        f.seek(end + 2)
    return f.read()

if len(sys.argv)!=5:
    print "Usage: xml2txt.py <region code> <width> <height> <outputfile>\n"
    sys.exit(1)

primary_code = sys.argv[1][0:4]
secondary_code = sys.argv[1][5:7]
xml_width = int(sys.argv[2])
xml_height =int(sys.argv[3])
mesh_width = 1125
mesh_height = 750

print primary_code
print secondary_code

xml_lat_l = int(primary_code[0:2])
xml_lng_l = int(primary_code[2:4])
xml_lat_m = int(secondary_code[0:1])
xml_lng_m = int(secondary_code[1:2])

region_name = []

for i in range(xml_height):
    lat_m = xml_lat_m - i
    lat_l = xml_lat_l + lat_m / 8
    for j in range(xml_width):
        lng_m = xml_lng_m + j
        lng_l = xml_lng_l + lng_m / 8
        region_name.append(xmlFile.format(str(lat_l*100+lng_l) + "-" + str(lat_m%8)+str(lng_m %8)))

print "Processing XML file from " + region_name[0] + " to " + region_name[len(region_name)-1]

outf = open(sys.argv[4],"w")
outfb = open(sys.argv[4]+".bin","wb")

elementList = []
for y in range(xml_height):
    for x in range(xml_width):
        print "reading " + region_name[y * xml_width+ x]
        f = codecs.open(region_name[y * xml_width+ x],
                        'r', 'shift_jis')
        xml = read_except_declaration(f).encode('utf-8')
        elementList.append(et.fromstring(xml))

outf.write("{} {}\n".format(xml_width,xml_height))
outf.write("{} {}\n".format(mesh_width,mesh_height))

w = xml_width * mesh_width
h = xml_height * mesh_height

for y in range(xml_height):
    for x in range(xml_width):
        elem = elementList[y*xml_width + x]
        lc= elem.find(".//{http://www.opengis.net/gml/3.2}lowerCorner").text
        outf.write("{}\n".format(lc))
        uc = elem.find(".//{http://www.opengis.net/gml/3.2}upperCorner").text
        outf.write("{}\n".format(uc))

outf.close()

tupleList = []
for y in range(xml_height):
    for x in range(xml_width):
        elem = elementList[y * xml_width + x]
        e = elem.find(".//{http://www.opengis.net/gml/3.2}tupleList")
        b = []
        l = e.text.split("\n")
        print region_name[y * xml_width+ x] + " has " + str(len(l)) + " nodes"
        for i in l:
            if i != "" and i.find(',') >= 0:
                try:
                    (m,z) = i.split(",")
                    b.append(float(z))

                except:
                    print "Error [{}]\n".format(i)
        tupleList.append(b)


c = 0
for y in range(xml_height):
    print "wring elevation data for " + region_name[y * xml_width ]
    for i in range(mesh_height):
        for x in range(xml_width):
            l = tupleList[y * xml_width + x]    
            for j in range(mesh_width):
                outfb.write(struct.pack("f",l[i * mesh_width + j]))
#                outf.write("{}\n".format(l[i * mesh_width + j]))
                c = c+ 1

outfb.close()
print str(c) + " meshes has been processed"




