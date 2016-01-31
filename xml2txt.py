#!/usr/bin/env python
import codecs
import xml.etree.ElementTree as et
import sys

xml_width = 5
xml_height = 5
mesh_width = 1125
mesh_height = 750

region_name = ["5338-37","5339-30","5339-31","5339-32","5339-33",
               "5338-27","5339-20","5339-21","5339-22","5339-23",
               "5338-17","5339-10","5339-11","5339-12","5339-13",
               "5338-07","5339-00","5339-01","5339-02","5339-02",
               "5238-77","5239-70","5239-71","5239-72","5239-73"]
               

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

outf = open(sys.argv[1],"w")

elementList = []
for y in range(xml_height):
    for x in range(xml_width):
        print "processing " + region_name[y * xml_width+ x]
        f = codecs.open(xmlFile.format(region_name[y * xml_width+ x]),
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

tupleList = []
for y in range(xml_height):
    for x in range(xml_width):
        elem = elementList[y * xml_width + x]
        e = elem.find(".//{http://www.opengis.net/gml/3.2}tupleList")
        b = []
        l = e.text.split("\n")
        print "Found " + str(len(l)) + " nodes\n"
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
    for i in range(mesh_height):
        for x in range(xml_width):
            l = tupleList[y * xml_width + x]    
            for j in range(mesh_width):
                outf.write("{}\n".format(l[i * mesh_width + j]))
                c = c+ 1
outf.close()
print str(c) + " meshes has been processed"




