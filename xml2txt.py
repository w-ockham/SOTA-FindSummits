#!/usr/bin/env python
import codecs
import xml.etree.ElementTree as et
import struct
import sys
import os.path

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
        fname = xmlFile.format(str(lat_l*100+lng_l) + "-" + str(lat_m%8)+str(lng_m %8))
        if os.path.exists(fname):
            region_name.append(fname)
        else:
            region_name.append("NULL")

print "Processing XML file from " + region_name[0] + " to " + region_name[len(region_name)-1]

outf = open(sys.argv[4],"w")
outfb = open(sys.argv[4]+".bin","wb")

outf.write("{} {}\n".format(primary_code,secondary_code))
outf.write("{} {}\n".format(xml_width,xml_height))
outf.write("{} {}\n".format(mesh_width,mesh_height))

for y in range(xml_height):
    elementList = []
    for x in range(xml_width):
        print "reading " + region_name[y * xml_width+ x]
        if region_name[y * xml_width+ x] == "NULL":
            elementList.append([])
        else:
            f = codecs.open(region_name[y * xml_width+ x],
                            'r', 'shift_jis')
            xml = read_except_declaration(f).encode('utf-8')
            elementList.append(et.fromstring(xml))

    for x in range(xml_width):
        elem = elementList[x]
        if len(elem):
            lc= elem.find(".//{http://www.opengis.net/gml/3.2}lowerCorner").text
            outf.write("{}\n".format(lc))
            uc = elem.find(".//{http://www.opengis.net/gml/3.2}upperCorner").text
            outf.write("{}\n".format(uc))
        else:
           outf.write("0.0 0.0\n0.0 0.0\n")

    tupleList = []
    for x in range(xml_width):
        elem = elementList[x]
        if len(elem):
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
        else:
            print "Null region"
            b = []
            for i in range(mesh_width*mesh_height):
                b.append(float(0.0))
            tupleList.append(b)

    c = 0
    print "writing elevation data for " + region_name[y * xml_width ]
    for i in range(mesh_height):
        for x in range(xml_width):
            l = tupleList[x]    
            for j in range(mesh_width):
                outfb.write(struct.pack("f",l[i * mesh_width + j]))
                c = c+ 1
outf.close()
outfb.close()
print str(c) + " meshes has been processed"
