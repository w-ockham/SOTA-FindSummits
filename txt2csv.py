#!/usr/bin/env python
# -*- coding: utf-8 -*-
import csv
import fnmatch
import json
import os.path
import re
import requests
import sqlite3
import sys


import requests.packages.urllib3
requests.packages.urllib3.disable_warnings()

pref_codes = {
"Aichi":("JA/AC-","Japan - Honshu"),
"Akita":("JA/AT-","Japan - Honshu"),
"Aomori":("JA/AM-","Japan - Honshu"),
"Chiba":("JA/CB-","Japan - Honshu"),
"Ehime":("JA5/EH-","Japan - Shikoku"),
"Fukui":("JA/FI-","Japan - Honshu"),
"Fukuoka":("JA6/FO-","Japan - Kyushu_Okinawa"),
"Fukushima":("JA/FS-","Japan - Honshu"),
"Gifu":("JA/GF-","Japan - Honshu"),
"Gunma":("JA/GM-","Japan - Honshu"),
"Hidaka":("JA8/HD-","Japan - Hokaido"),
"Hiroshima":("JA/HS-","Japan - Honshu"),
"Hiyama":("JA8/HY-","Japan - Hokaido"),
"Hyogo":("JA/HG-","Japan - Honshu"),
"Hyōgo":("JA/HG-","Japan - Honshu"),
"Ibaraki":("JA/IB-","Japan - Honshu"),
"Iburi":("JA8/IR-","Japan - Hokaido"),
"Ishikari":("JA8/IS-","Japan - Hokaido"),
"Ishikawa":("JA/IK-","Japan - Honshu"),
"Iwate":("JA/IT-","Japan - Honshu"),
"Kagawa":("JA5/KA-","Japan - Shikoku"),
"Kagoshima":("JA6/KG-","Japan - Kyushu_Okinawa"),
"Kamikawa":("JA8/KK-","Japan - Hokaido"),
"Kanagawa":("JA/KN-","Japan - Honshu"),
"Kochi":("JA5/KC-","Japan - Shikoku"),
"Kōchi":("JA5/KC-","Japan - Shikoku"),
"Kumamoto":("JA6/KM-","Japan - Kyushu_Okinawa"),
"Kushiro":("JA8/KR-","Japan - Hokaido"),
"Kyoto":("JA/KT-","Japan - Honshu"),
"Kyōto":("JA/KT-","Japan - Honshu"),
"Mie":("JA/ME-","Japan - Honshu"),
"Miyagi":("JA/MG-","Japan - Honshu"),
"Miyazaki":("JA6/MZ-","Japan - Kyushu_Okinawa"),
"Nagano":("JA/NN-","Japan - Honshu"),
"Nagasaki":("JA6/NS-","Japan - Kyushu_Okinawa"),
"Nara":("JA/NR-","Japan - Honshu"),
"Nemuro":("JA8/NM-","Japan - Hokaido"),
"Niigata":("JA/NI-","Japan - Honshu"),
"Oita":("JA6/OT-","Japan - Kyushu_Okinawa"),
"Ōita":("JA6/OT-","Japan - Kyushu_Okinawa"),
"Okayama":("JA/OY-","Japan - Honshu"),
"Okhotsk":("JA8/OH-","Japan - Hokaido"),
"Okinawa":("JA6/ON-","Japan - Kyushu_Okinawa"),
"Osaka":("JA/OS-","Japan - Honshu"),
"Ōsaka":("JA/OS-","Japan - Honshu"),
"Oshima":("JA8/OM-","Japan - Hokaido"),
"Rumoi":("JA8/RM-","Japan - Hokaido"),
"Saga":("JA6/SG-","Japan - Kyushu_Okinawa"),
"Saitama":("JA/ST-","Japan - Honshu"),
"Shiga":("JA/SI-","Japan - Honshu"),
"Shimane":("JA/SN-","Japan - Honshu"),
"Shiribeshi":("JA8/SB-","Japan - Hokaido"),
"Shizuoka":("JA/SO-","Japan - Honshu"),
"Sorachi":("JA8/SC-","Japan - Hokaido"),
"Soya":("JA8/SY-","Japan - Hokaido"),
"Tochigi":("JA/TG-","Japan - Honshu"),
"Tokachi":("JA8/TC-","Japan - Hokaido"),
"Tokushima":("JA5/TS-","Japan - Shikoku"),
"Tokyo":("JA/TK-","Japan - Honshu"),
"Tottori":("JA/TT-","Japan - Honshu"),
"Toyama":("JA/TY-","Japan - Honshu"),
"Wakayama":("JA/WK-","Japan - Honshu"),
"Yamagata":("JA/YM-","Japan - Honshu"),
"Yamaguchi":("JA/YG-","Japan - Honshu"),
"Yamanashi":("JA/YN-","Japan - Honshu")
}

def get_r_geocode(latitude,longitude):
    sensor = 'false'
    base = "https://maps.google.com/maps/api/geocode/json?"
    params = "latlng={lat},{lon}&sensor={sen}&key={key}".format(
        lat=latitude,
        lon=longitude,
        sen=sensor,
        key=''
    )
    url = "{base}{params}".format(base=base, params=params)
    response = requests.get(url,verify=False)
    if response.status_code == 200:
        if response.json()['results']:
            r = response.json()['results'][0]['formatted_address']
            l = r.encode('utf-8').split(',')
            addr = " ".join(l)
            return addr
        else:
            return ""

def search_r_geocode(conn,cur,name,latitude,longitude):
    cur.execute("select * from geocode where name = ?",(name,))
    r = cur.fetchone()
    if r:
        (n,prefix,region,pref,addr,lat,lng) = r
        original = True
        for p in pref_codes:
            if re.findall(str(p)+"-ken",addr):
                pref = p
                (prefix,region) = pref_codes[p]
                original = False
                break
            elif re.findall(str(p)+"-gun",addr):
                pref = p
                (prefix,region) = pref_codes[p]
                original = False
                break
            elif re.findall(str(p)+" Prefecture",addr):
                pref = p
                (prefix,region) = pref_codes[p]
                original = False
                break
            elif re.findall(str(p)+"-fu",addr):
                pref = p
                (prefix,region) = pref_codes[p]
                original = False
                break
        if original:
            region  = "Japan - "
            prefix  = ""
            pref = ""
#        else:
#            t = (n,prefix,region,pref,addr,lat,lng)
#            cur.execute('insert or replace into geocode values (?,?,?,?,?,?,?)',t)
#            conn.commit()
        return (n,prefix,region,pref,addr,lat,lng)
    else:
        addr = get_r_geocode(latitude,longitude)
        original = True
        for p in pref_codes:
            if re.findall(str(p)+"-ken",addr):
                pref = p
                (prefix,region) = pref_codes[p]
                original = False
                break
            elif re.findall(str(p)+"-gun",addr):
                pref = p
                (prefix,region) = pref_codes[p]
                original = False
                break
        if original:
            region  = "Japan - "
            prefix  = ""
            pref = ""
        t = (name,prefix,region,pref,addr,latitude,longitude)
        cur.execute('insert into geocode values (?,?,?,?,?,?,?)',t)
        conn.commit()
        return t

def main():
    f = open (sys.argv[1],'r')
    fo = open (sys.argv[2],'wb')
    conn = sqlite3.connect('./geocode.db')
    conn.text_factory = str
    cur = conn.cursor()
    cur.execute("create table if not exists geocode (name text, prefix text, region text, pref text, address text, lat real, lng real)")
    cur.execute("create index if not exists nameindx on geocode(name)")
    conn.commit()

    reader = csv.reader(f)
    writer = csv.writer(fo)
    writer.writerow(reader.next()) # header

    for row in reader:
        lat = row[7]
        lng = row[6]

        if row[0][0]=='U':
            (n,p,region,pref,addr,lat,lng) = search_r_geocode(conn,cur,row[0],lat,lng)
            row[0] = p + n
            row[1] = region
            row[2] = pref
            row[3] = p + n

        row.append("http://maps.gsi.go.jp/#15/{}/{}".format(lat,lng))
        writer.writerow(row)
    cur.close()
    conn.close()
    fo.close()
    f.close()

#    print get_r_geocode(float(sys.argv[1]),float(sys.argv[2]))
#    g = geocoder.google([38.208646,139.938869], method='reverse')
#    print g
#    if g.ok:
#        print g

if __name__ == '__main__':
    main()


