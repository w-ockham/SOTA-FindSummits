#!/usr/bin/env python
import codecs
import xml.etree.ElementTree as et
import struct
import sys

#region_name = ["5438-02","5438-03","5438-04","5438-05","5438-06","5438-07","5439-00","5439-01","5439-02","5439-03",
#               "5338-72","5338-73","5338-74","5338-75","5338-76","5338-77","5339-70","5339-71","5339-72","5339-73",
#               "5338-62","5338-63","5338-64","5338-65","5338-66","5338-77","5339-60","5339-61","5339-62","5339-63",
#               "5338-52","5338-53","5338-54","5338-55","5338-56","5338-57","5339-50","5339-51","5339-52","5339-53",
#               "5338-42","5338-43","5338-44","5338-45","5338-46","5338-47","5339-40","5339-41","5339-42","5339-43",
#               "5338-32","5338-33","5338-34","5338-35","5338-36","5338-37","5339-30","5339-31","5339-32","5339-33",
#               "5338-22","5338-23","5338-24","5338-25","5338-26","5338-27","5339-20","5339-21","5339-22","5339-23",
#               "5338-12","5338-13","5338-14","5338-15","5338-16","5338-17","5339-10","5339-11","5339-12","5339-13",
#               "5338-02","5338-03","5338-04","5338-05","5338-06","5338-07","5339-00","5339-01","5339-02","5339-03",
#               "5238-72","5238-73","5238-74","5238-75","5238-76","5238-77","5239-70","5239-71","5239-72","5239-73"]

#region_name = ["5338-37","5339-30","5339-31","5339-32","5339-33",
#               "5338-27","5339-20","5339-21","5339-22","5339-23",
#               "5338-17","5339-10","5339-11","5339-12","5339-13",
#               "5338-07","5339-00","5339-01","5339-02","5339-02",
#               "5238-77","5239-70","5239-71","5239-72","5239-73"]

#region_name =  ["5339-11","5339-12",
#                "5339-01","5339-02"]

#region_name = ["5339-11"]

xmlFile = "FG-GML-{}-dem10b-20090201.xml"

def read_except_declaration(f):
    line = f.readline()
    end = line.find('?>') 
    if end > 0:
        f.seek(end + 2)
    return f.read()

if len(sys.argv)!=4:
    print "Usage: xml2txt.py <region code> <size> <outputfile>\n"
    sys.exit(1)

primary_code = sys.argv[1][0:4]
secondary_code = sys.argv[1][5:7]
xml_width = int(sys.argv[2])
xml_height = xml_width
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

outf = open(sys.argv[3],"w")
outfb = open(sys.argv[3]+".bin","wb")

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




