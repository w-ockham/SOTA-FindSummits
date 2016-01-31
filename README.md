# SOTA-FindSummits
Search SOTA summits candidate from the elevation map provided from Geospatial Information Authority of Japan
Usage:
 1. Extract XML files download from MLIT Database.
 2. Concatnate XML files with xml2txt.py
    o Edit region_name and xml_width and xml_height
    o Run xml2txt.py
      xml2txt.py <elevationdata>
 3. Find SOTA summit candidates from Elevation Map
    o findsummits -i <elevationdata> -p <heights> -o <jsfilname>
      Example:
        % ./findsummits -i kanagawa.txt -p 150 -o code.js
        % firefox map.html

How to Build:
  1. Obtain libtourtre from github
      git clone https://github.com/sedillard/libtourtre
  2. Extract libtourtre.zip to "libtourtre"
  3. cd libtourtre; make
  4. cd ../; make
