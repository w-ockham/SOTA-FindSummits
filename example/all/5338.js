function map_canvas() {
 var data_peak = new Array();
 var data_saddle = new Array();
 var polylines = new Array();
data_peak.push({
lat: 35.36066667,
lng: 138.7273333,
cert : true,
missing : false,
content:'Fujisan Kengamine(JA/SO-001)(3774.9m) 35.36066667,138.7273333[3774.9m]'
});
data_saddle.push({
lat: 35.68766667,
lng: 139.9446667,
content:'Saddle[ 0.0m]  35.68766667,139.9446667 [3774.9m]'
});
data_peak.push({
lat: 34.52044445,
lng: 139.2792222,
cert : true,
missing : false,
content:'Miyatsukesan(JA/TK-019)(507.0m) 34.52044445,139.2792222[507.0m]'
});
data_saddle.push({
lat: 34.59511112,
lng: 138.2268889,
content:'Saddle[ 0.0m]  34.59511112,138.2268889 [507.0m]'
});
data_peak.push({
lat: 34.72455556,
lng: 139.3942222,
cert : true,
missing : false,
content:'Miharashinsan(JA/TK-015)(755.6m) 34.72455556,139.3942222[755.6m]'
});
data_saddle.push({
lat: 34.67800001,
lng: 139.4344444,
content:'Saddle[ 0.0m]  34.67800001,139.4344444 [755.6m]'
});
data_peak.push({
lat: 35.11488889,
lng: 139.9867778,
cert : true,
missing : false,
content:'Atagoyama(JA/CB-001)(407.3m) 35.11488889,139.9867778[398.0m]'
});
data_saddle.push({
lat: 35.92866667,
lng: 139.9404444,
content:'Saddle[ 9.3m]  35.92866667,139.9404444 [398.0m]'
});
data_peak.push({
lat: 34.93755556,
lng: 139.9404444,
cert : false,
missing : false,
content:'U-PM94xw25(214.7m) 34.93755556,139.9404444[176.4m]'
});
data_saddle.push({
lat: 35.01000000,
lng: 139.9388889,
content:'Saddle[38.3m]  35.01000000,139.9388889 [176.4m]'
});
data_peak.push({
lat: 35.11233334,
lng: 139.8646667,
cert : false,
missing : false,
content:'U-PM95wc36(258.5m) 35.11233334,139.8646667[166.5m]'
});
data_saddle.push({
lat: 35.11066667,
lng: 139.8756667,
content:'Saddle[92.0m]  35.11066667,139.8756667 [166.5m]'
});
data_peak.push({
lat: 35.09888889,
lng: 139.8814444,
cert : true,
missing : false,
content:'Tomisan(JA/CB-005)(348.8m) 35.09888889,139.8814444[250.2m]'
});
data_saddle.push({
lat: 35.09944445,
lng: 139.8977778,
content:'Saddle[98.6m]  35.09944445,139.8977778 [250.2m]'
});
data_peak.push({
lat: 35.31388889,
lng: 140.1135556,
cert : false,
missing : false,
content:'U-QM05bh35(270.7m) 35.31388889,140.1135556[150.7m]'
});
data_saddle.push({
lat: 35.29866667,
lng: 140.1162222,
content:'Saddle[120.0m]  35.29866667,140.1162222 [150.7m]'
});
data_peak.push({
lat: 35.25566667,
lng: 139.9717778,
cert : true,
missing : false,
content:'Shirotori Shrine(JA/CB-002)(378.3m) 35.25566667,139.9717778[257.5m]'
});
data_saddle.push({
lat: 35.24600000,
lng: 139.9765556,
content:'Saddle[120.8m]  35.24600000,139.9765556 [257.5m]'
});
data_peak.push({
lat: 35.26288889,
lng: 140.0245556,
cert : true,
missing : false,
content:'JA/CB-007(JA/CB-007)(313.1m) 35.26288889,140.0245556[176.4m]'
});
data_saddle.push({
lat: 35.25066667,
lng: 140.0294444,
content:'Saddle[136.7m]  35.25066667,140.0294444 [176.4m]'
});
data_peak.push({
lat: 35.16044445,
lng: 139.8407778,
cert : true,
missing : false,
content:'Nokogiriyama(JA/CB-006)(327.3m) 35.16044445,139.8407778[189.9m]'
});
data_saddle.push({
lat: 35.16200000,
lng: 139.8633333,
content:'Saddle[137.4m]  35.16200000,139.8633333 [189.9m]'
});
data_peak.push({
lat: 35.15744445,
lng: 139.8834444,
cert : false,
missing : false,
content:'U-PM95wd67(313.9m) 35.15744445,139.8834444[161.4m]'
});
data_saddle.push({
lat: 35.14122223,
lng: 139.9121111,
content:'Saddle[152.5m]  35.14122223,139.9121111 [161.4m]'
});
data_peak.push({
lat: 35.07400000,
lng: 139.9752222,
cert : false,
missing : false,
content:'U-PM95xb77(310.5m) 35.07400000,139.9752222[153.9m]'
});
data_saddle.push({
lat: 35.09422223,
lng: 139.9930000,
content:'Saddle[156.6m]  35.09422223,139.9930000 [153.9m]'
});
data_peak.push({
lat: 35.08877778,
lng: 139.9477778,
cert : true,
missing : false,
content:'Gotenyama(JA/CB-004)(362.4m) 35.08877778,139.9477778[204.8m]'
});
data_saddle.push({
lat: 35.09822223,
lng: 139.9614444,
content:'Saddle[157.6m]  35.09822223,139.9614444 [204.8m]'
});
data_peak.push({
lat: 35.16233334,
lng: 140.1522222,
cert : true,
missing : false,
content:'Myokensan(JA/CB-003)(375.4m) 35.16233334,140.1522222[208.0m]'
});
data_saddle.push({
lat: 35.14433334,
lng: 139.9308889,
content:'Saddle[167.4m]  35.14433334,139.9308889 [208.0m]'
});
data_peak.push({
lat: 35.15755556,
lng: 140.0202222,
cert : false,
missing : false,
content:'U-QM05ad27(362.5m) 35.15755556,140.0202222[165.9m]'
});
data_saddle.push({
lat: 35.16577778,
lng: 140.0607778,
content:'Saddle[196.6m]  35.16577778,140.0607778 [165.9m]'
});
data_peak.push({
lat: 35.10733334,
lng: 139.9138889,
cert : false,
missing : false,
content:'U-PM95wc95(333.4m) 35.10733334,139.9138889[165.9m]'
});
data_saddle.push({
lat: 35.12177778,
lng: 139.9237778,
content:'Saddle[167.5m]  35.12177778,139.9237778 [165.9m]'
});
data_peak.push({
lat: 35.13900000,
lng: 139.9325556,
cert : false,
missing : false,
content:'U-PM95xd13(323.3m) 35.13900000,139.9325556[151.1m]'
});
data_saddle.push({
lat: 35.12133334,
lng: 139.9505556,
content:'Saddle[172.2m]  35.12133334,139.9505556 [151.1m]'
});
data_peak.push({
lat: 35.10866667,
lng: 140.0223333,
cert : false,
missing : false,
content:'U-QM05ac26(334.1m) 35.10866667,140.0223333[155.7m]'
});
data_saddle.push({
lat: 35.10511111,
lng: 139.9946667,
content:'Saddle[178.4m]  35.10511111,139.9946667 [155.7m]'
});
data_peak.push({
lat: 34.97311112,
lng: 138.4696667,
cert : true,
missing : false,
content:'JA/SO-120(JA/SO-120)(305.7m) 34.97311112,138.4696667[294.7m]'
});
data_saddle.push({
lat: 34.97766667,
lng: 138.4200000,
content:'Saddle[11.0m]  34.97766667,138.4200000 [294.7m]'
});
data_peak.push({
lat: 34.89655556,
lng: 138.2678889,
cert : false,
missing : false,
content:'U-PM94dv25(203.7m) 34.89655556,138.2678889[184.0m]'
});
data_saddle.push({
lat: 34.89400000,
lng: 138.2616667,
content:'Saddle[19.7m]  34.89400000,138.2616667 [184.0m]'
});
data_peak.push({
lat: 35.09233334,
lng: 138.8775556,
cert : false,
missing : false,
content:'U-PM95kc52(192.5m) 35.09233334,138.8775556[165.4m]'
});
data_saddle.push({
lat: 35.08900000,
lng: 138.8850000,
content:'Saddle[27.1m]  35.08900000,138.8850000 [165.4m]'
});
data_peak.push({
lat: 35.05944445,
lng: 138.8938889,
cert : true,
missing : false,
content:'JA/SO-115(JA/SO-115)(391.7m) 35.05944445,138.8938889[349.2m]'
});
data_saddle.push({
lat: 35.04744445,
lng: 138.9084444,
content:'Saddle[42.5m]  35.04744445,138.9084444 [349.2m]'
});
data_peak.push({
lat: 35.04644445,
lng: 138.9257778,
cert : false,
missing : false,
content:'U-PM95lb11(206.5m) 35.04644445,138.9257778[161.3m]'
});
data_saddle.push({
lat: 35.04300000,
lng: 138.9212222,
content:'Saddle[45.2m]  35.04300000,138.9212222 [161.3m]'
});
data_peak.push({
lat: 35.25011111,
lng: 139.6280000,
cert : false,
missing : false,
content:'U-PM95tg50(241.0m) 35.25011111,139.6280000[194.7m]'
});
data_saddle.push({
lat: 35.40033334,
lng: 139.5785556,
content:'Saddle[46.3m]  35.40033334,139.5785556 [194.7m]'
});
data_peak.push({
lat: 35.27522223,
lng: 139.6230000,
cert : false,
missing : false,
content:'U-PM95tg46(212.0m) 35.27522223,139.6230000[150.2m]'
});
data_saddle.push({
lat: 35.26222223,
lng: 139.6363333,
content:'Saddle[61.8m]  35.26222223,139.6363333 [150.2m]'
});
data_peak.push({
lat: 34.65533334,
lng: 138.8975556,
cert : false,
missing : false,
content:'U-PM94kp77(200.2m) 34.65533334,138.8975556[152.4m]'
});
data_saddle.push({
lat: 34.66566667,
lng: 138.9000000,
content:'Saddle[47.8m]  34.66566667,138.9000000 [152.4m]'
});
data_peak.push({
lat: 34.73333334,
lng: 138.0054444,
cert : false,
missing : false,
content:'U-PM94ar06(264.4m) 34.73333334,138.0054444[215.8m]'
});
data_saddle.push({
lat: 34.77133334,
lng: 138.0647778,
content:'Saddle[48.6m]  34.77133334,138.0647778 [215.8m]'
});
data_peak.push({
lat: 34.88588889,
lng: 138.2227778,
cert : false,
missing : false,
content:'U-PM94cv62(244.6m) 34.88588889,138.2227778[156.5m]'
});
data_saddle.push({
lat: 34.89444445,
lng: 138.2262222,
content:'Saddle[88.1m]  34.89444445,138.2262222 [156.5m]'
});
data_peak.push({
lat: 34.67355556,
lng: 138.9265556,
cert : false,
missing : false,
content:'U-PM94lq11(252.0m) 34.67355556,138.9265556[150.9m]'
});
data_saddle.push({
lat: 34.68022223,
lng: 138.9254444,
content:'Saddle[101.1m]  34.68022223,138.9254444 [150.9m]'
});
data_peak.push({
lat: 34.63511112,
lng: 138.8378889,
cert : true,
missing : false,
content:'JA/SO-119(JA/SO-119)(307.9m) 34.63511112,138.8378889[200.6m]'
});
data_saddle.push({
lat: 34.63533334,
lng: 138.8146667,
content:'Saddle[107.3m]  34.63533334,138.8146667 [200.6m]'
});
data_peak.push({
lat: 35.03622223,
lng: 138.9121111,
cert : true,
missing : false,
content:'JA/SO-122(JA/SO-122)(272.4m) 35.03622223,138.9121111[164.7m]'
});
data_saddle.push({
lat: 35.02522223,
lng: 138.9088889,
content:'Saddle[107.7m]  35.02522223,138.9088889 [164.7m]'
});
data_peak.push({
lat: 34.81900000,
lng: 138.7590000,
cert : true,
missing : false,
content:'JA/SO-121(JA/SO-121)(302.1m) 34.81900000,138.7590000[193.3m]'
});
data_saddle.push({
lat: 34.81566667,
lng: 138.7684444,
content:'Saddle[108.8m]  34.81566667,138.7684444 [193.3m]'
});
data_peak.push({
lat: 36.04177778,
lng: 139.2710000,
cert : true,
missing : false,
content:'Sengenyama(JA/ST-021)(298.6m) 36.04177778,139.2710000[171.3m]'
});
data_saddle.push({
lat: 36.03266667,
lng: 139.2621111,
content:'Saddle[127.3m]  36.03266667,139.2621111 [171.3m]'
});
data_peak.push({
lat: 34.91122223,
lng: 138.2126667,
cert : true,
missing : false,
content:'JA/SO-114(JA/SO-114)(390.1m) 34.91122223,138.2126667[227.5m]'
});
data_saddle.push({
lat: 34.91933334,
lng: 138.2140000,
content:'Saddle[162.6m]  34.91933334,138.2140000 [227.5m]'
});
data_peak.push({
lat: 34.93966667,
lng: 139.1313333,
cert : false,
missing : false,
content:'U-PM94nw55(320.9m) 34.93966667,139.1313333[154.1m]'
});
data_saddle.push({
lat: 34.93211112,
lng: 139.1273333,
content:'Saddle[166.8m]  34.93211112,139.1273333 [154.1m]'
});
data_peak.push({
lat: 35.31633334,
lng: 139.1977778,
cert : false,
missing : false,
content:'U-PM95oh35(326.7m) 35.31633334,139.1977778[158.9m]'
});
data_saddle.push({
lat: 35.33966667,
lng: 139.1706667,
content:'Saddle[167.8m]  35.33966667,139.1706667 [158.9m]'
});
data_peak.push({
lat: 35.31833334,
lng: 139.1920000,
cert : true,
missing : true,
content:'(Missing)Near Fudouyama(JA/KN-023)(322.5m) 35.31833334,139.1920000[ 9.7m]'
});
data_saddle.push({
lat: 35.31888889,
lng: 139.1913333,
content:'Saddle(312.8m)  35.31888889,139.1913333 [ 9.7m]'
});
data_peak.push({
lat: 34.90522223,
lng: 138.3188889,
cert : false,
missing : false,
content:'U-PM94dv87(501.1m) 34.90522223,138.3188889[333.1m]'
});
data_saddle.push({
lat: 34.93322223,
lng: 138.3031111,
content:'Saddle[168.0m]  34.93322223,138.3031111 [333.1m]'
});
data_peak.push({
lat: 34.92266667,
lng: 138.3260000,
cert : true,
missing : false,
content:'JA/SO-104(JA/SO-104)(470.5m) 34.92266667,138.3260000[193.0m]'
});
data_saddle.push({
lat: 34.90855556,
lng: 138.3256667,
content:'Saddle[277.5m]  34.90855556,138.3256667 [193.0m]'
});
data_peak.push({
lat: 34.90544445,
lng: 138.3168889,
cert : true,
missing : true,
content:'(Missing)JA/SO-100(JA/SO-100)(500.8m) 34.90544445,138.3168889[17.4m]'
});
data_saddle.push({
lat: 34.90533334,
lng: 138.3176667,
content:'Saddle(483.4m)  34.90533334,138.3176667 [17.4m]'
});
data_peak.push({
lat: 34.96211112,
lng: 138.3407778,
cert : true,
missing : false,
content:'JA/SO-116(JA/SO-116)(374.8m) 34.96211112,138.3407778[204.3m]'
});
data_saddle.push({
lat: 34.96122223,
lng: 138.3343333,
content:'Saddle[170.5m]  34.96122223,138.3343333 [204.3m]'
});
data_peak.push({
lat: 34.70288889,
lng: 138.9552222,
cert : true,
missing : false,
content:'JA/SO-118(JA/SO-118)(342.1m) 34.70288889,138.9552222[165.6m]'
});
data_saddle.push({
lat: 34.72177778,
lng: 138.9675556,
content:'Saddle[176.5m]  34.72177778,138.9675556 [165.6m]'
});
data_peak.push({
lat: 34.73211112,
lng: 138.7695556,
cert : false,
missing : false,
content:'U-PM94jr25(357.7m) 34.73211112,138.7695556[170.0m]'
});
data_saddle.push({
lat: 34.72788889,
lng: 138.7686667,
content:'Saddle[187.7m]  34.72788889,138.7686667 [170.0m]'
});
data_peak.push({
lat: 35.58311111,
lng: 139.2786667,
cert : true,
missing : false,
content:'Shiroyama(JA/KN-022)(374.1m) 35.58311111,139.2786667[176.6m]'
});
data_saddle.push({
lat: 35.58022222,
lng: 139.2727778,
content:'Saddle[197.5m]  35.58022222,139.2727778 [176.6m]'
});
data_peak.push({
lat: 34.67733334,
lng: 138.8102222,
cert : false,
missing : false,
content:'U-PM94jq72(352.9m) 34.67733334,138.8102222[155.0m]'
});
data_saddle.push({
lat: 34.68155556,
lng: 138.7977778,
content:'Saddle[197.9m]  34.68155556,138.7977778 [155.0m]'
});
data_peak.push({
lat: 35.20777778,
lng: 138.5331111,
cert : true,
missing : false,
content:'JA/SO-087(JA/SO-087)(566.8m) 35.20777778,138.5331111[358.6m]'
});
data_saddle.push({
lat: 35.20922223,
lng: 138.5160000,
content:'Saddle[208.2m]  35.20922223,138.5160000 [358.6m]'
});
data_peak.push({
lat: 35.01177778,
lng: 138.9202222,
cert : true,
missing : false,
content:'JA/SO-108(JA/SO-108)(451.0m) 35.01177778,138.9202222[235.1m]'
});
data_saddle.push({
lat: 35.00122223,
lng: 138.8902222,
content:'Saddle[215.9m]  35.00122223,138.8902222 [235.1m]'
});
data_peak.push({
lat: 34.94688889,
lng: 137.8730000,
cert : false,
missing : false,
content:'U-PM84ww47(451.6m) 34.94688889,137.8730000[225.1m]'
});
data_saddle.push({
lat: 34.93611112,
lng: 137.8807778,
content:'Saddle[226.5m]  34.93611112,137.8807778 [225.1m]'
});
data_peak.push({
lat: 36.01700000,
lng: 139.2500000,
cert : true,
missing : false,
content:'Raidenyama(JA/ST-020)(415.6m) 36.01700000,139.2500000[186.8m]'
});
data_saddle.push({
lat: 36.02255556,
lng: 139.2390000,
content:'Saddle[228.8m]  36.02255556,139.2390000 [186.8m]'
});
data_peak.push({
lat: 35.61155556,
lng: 139.1986667,
cert : false,
missing : false,
content:'U-PM95oo36(405.0m) 35.61155556,139.1986667[171.3m]'
});
data_saddle.push({
lat: 35.60111111,
lng: 139.1984444,
content:'Saddle[233.7m]  35.60111111,139.1984444 [171.3m]'
});
data_peak.push({
lat: 35.55666667,
lng: 139.2740000,
cert : true,
missing : false,
content:'JA/KN-021(JA/KN-021)(428.3m) 35.55666667,139.2740000[194.4m]'
});
data_saddle.push({
lat: 35.55311111,
lng: 139.2628889,
content:'Saddle[233.9m]  35.55311111,139.2628889 [194.4m]'
});
data_peak.push({
lat: 34.95322223,
lng: 138.3008889,
cert : true,
missing : false,
content:'JA/SO-103(JA/SO-103)(482.6m) 34.95322223,138.3008889[247.9m]'
});
data_saddle.push({
lat: 34.97633334,
lng: 138.2762222,
content:'Saddle[234.7m]  34.97633334,138.2762222 [247.9m]'
});
data_peak.push({
lat: 34.92300000,
lng: 137.8235556,
cert : false,
missing : false,
content:'U-PM84vw81(392.4m) 34.92300000,137.8235556[154.9m]'
});
data_saddle.push({
lat: 34.92733334,
lng: 137.8448889,
content:'Saddle[237.5m]  34.92733334,137.8448889 [154.9m]'
});
data_peak.push({
lat: 35.09388889,
lng: 138.5015556,
cert : false,
missing : false,
content:'U-PM95gc02(504.1m) 35.09388889,138.5015556[266.3m]'
});
data_saddle.push({
lat: 35.09244445,
lng: 138.4614444,
content:'Saddle[237.8m]  35.09244445,138.4614444 [266.3m]'
});
data_peak.push({
lat: 35.09188889,
lng: 138.4798889,
cert : false,
missing : false,
content:'U-PM95fc72(413.9m) 35.09188889,138.4798889[157.4m]'
});
data_saddle.push({
lat: 35.09344445,
lng: 138.4904444,
content:'Saddle[256.5m]  35.09344445,138.4904444 [157.4m]'
});
data_peak.push({
lat: 35.00622223,
lng: 138.3386667,
cert : true,
missing : false,
content:'JA/SO-110(JA/SO-110)(435.1m) 35.00622223,138.3386667[193.0m]'
});
data_saddle.push({
lat: 35.01244445,
lng: 138.3398889,
content:'Saddle[242.1m]  35.01244445,138.3398889 [193.0m]'
});
data_peak.push({
lat: 34.89244445,
lng: 138.1587778,
cert : true,
missing : false,
content:'JA/SO-101(JA/SO-101)(495.8m) 34.89244445,138.1587778[253.7m]'
});
data_saddle.push({
lat: 34.90833334,
lng: 138.1661111,
content:'Saddle[242.1m]  34.90833334,138.1661111 [253.7m]'
});
data_peak.push({
lat: 34.74266667,
lng: 138.9578889,
cert : false,
missing : false,
content:'U-PM94lr48(454.1m) 34.74266667,138.9578889[211.4m]'
});
data_saddle.push({
lat: 34.75822223,
lng: 138.9651111,
content:'Saddle[242.7m]  34.75822223,138.9651111 [211.4m]'
});
data_peak.push({
lat: 34.74577778,
lng: 138.9591111,
cert : true,
missing : true,
content:'(Missing)JA/SO-107(JA/SO-107)(452.0m) 34.74577778,138.9591111[ 9.6m]'
});
data_saddle.push({
lat: 34.74444445,
lng: 138.9590000,
content:'Saddle(442.4m)  34.74444445,138.9590000 [ 9.6m]'
});
data_peak.push({
lat: 34.92711112,
lng: 137.8582222,
cert : true,
missing : false,
content:'JA/SO-091(JA/SO-091)(551.0m) 34.92711112,137.8582222[304.4m]'
});
data_saddle.push({
lat: 34.92666667,
lng: 137.8786667,
content:'Saddle[246.6m]  34.92666667,137.8786667 [304.4m]'
});
data_peak.push({
lat: 35.12011111,
lng: 138.5334444,
cert : true,
missing : false,
content:'JA/SO-068(JA/SO-068)(705.8m) 35.12011111,138.5334444[448.9m]'
});
data_saddle.push({
lat: 35.14611111,
lng: 138.5217778,
content:'Saddle[256.9m]  35.14611111,138.5217778 [448.9m]'
});
data_peak.push({
lat: 35.14466667,
lng: 138.5893333,
cert : true,
missing : false,
content:'JA/SO-080(JA/SO-080)(597.3m) 35.14466667,138.5893333[240.8m]'
});
data_saddle.push({
lat: 35.15166667,
lng: 138.5435556,
content:'Saddle[356.5m]  35.15166667,138.5435556 [240.8m]'
});
data_peak.push({
lat: 35.16155556,
lng: 138.5540000,
cert : true,
missing : false,
content:'JA/SO-088(JA/SO-088)(563.8m) 35.16155556,138.5540000[186.7m]'
});
data_saddle.push({
lat: 35.15633334,
lng: 138.5681111,
content:'Saddle[377.1m]  35.15633334,138.5681111 [186.7m]'
});
data_peak.push({
lat: 36.06722222,
lng: 139.2007778,
cert : false,
missing : false,
content:'U-PM96ob46(420.9m) 36.06722222,139.2007778[163.7m]'
});
data_saddle.push({
lat: 36.08511111,
lng: 139.1722222,
content:'Saddle[257.2m]  36.08511111,139.1722222 [163.7m]'
});
data_peak.push({
lat: 36.13788889,
lng: 139.0954444,
cert : true,
missing : false,
content:'Fudousan(JA/ST-018)(548.2m) 36.13788889,139.0954444[282.0m]'
});
data_saddle.push({
lat: 36.11022222,
lng: 139.0820000,
content:'Saddle[266.2m]  36.11022222,139.0820000 [282.0m]'
});
data_peak.push({
lat: 34.70711112,
lng: 138.7517778,
cert : true,
missing : false,
content:'JA/SO-097(JA/SO-097)(517.2m) 34.70711112,138.7517778[246.5m]'
});
data_saddle.push({
lat: 34.70711112,
lng: 138.7583333,
content:'Saddle[270.7m]  34.70711112,138.7583333 [246.5m]'
});
data_peak.push({
lat: 36.09311111,
lng: 139.0915556,
cert : true,
missing : false,
content:'Hodosan(JA/ST-019)(495.5m) 36.09311111,139.0915556[219.2m]'
});
data_saddle.push({
lat: 36.11044444,
lng: 139.0786667,
content:'Saddle[276.3m]  36.11044444,139.0786667 [219.2m]'
});
data_peak.push({
lat: 36.05788889,
lng: 139.1126667,
cert : true,
missing : false,
content:'Minoyama(JA/ST-017)(584.9m) 36.05788889,139.1126667[306.9m]'
});
data_saddle.push({
lat: 36.03311111,
lng: 139.1276667,
content:'Saddle[278.0m]  36.03311111,139.1276667 [306.9m]'
});
data_peak.push({
lat: 34.79555556,
lng: 138.7815556,
cert : false,
missing : false,
content:'U-PM94jt30(435.3m) 34.79555556,138.7815556[154.8m]'
});
data_saddle.push({
lat: 34.79811112,
lng: 138.7844444,
content:'Saddle[280.5m]  34.79811112,138.7844444 [154.8m]'
});
data_peak.push({
lat: 35.52066667,
lng: 139.2580000,
cert : true,
missing : false,
content:'Bukkasan(JA/KN-017)(744.8m) 35.52066667,139.2580000[446.9m]'
});
data_saddle.push({
lat: 35.50377778,
lng: 139.2563333,
content:'Saddle[297.9m]  35.50377778,139.2563333 [446.9m]'
});
data_peak.push({
lat: 35.61888889,
lng: 139.0852222,
cert : false,
missing : false,
content:'U-PM95no08(462.1m) 35.61888889,139.0852222[160.8m]'
});
data_saddle.push({
lat: 35.62300000,
lng: 139.0718889,
content:'Saddle[301.3m]  35.62300000,139.0718889 [160.8m]'
});
data_peak.push({
lat: 35.47544445,
lng: 138.4630000,
cert : true,
missing : false,
content:'JA/YN-072(JA/YN-072)(471.2m) 35.47544445,138.4630000[168.6m]'
});
data_saddle.push({
lat: 35.47088889,
lng: 138.4671111,
content:'Saddle[302.6m]  35.47088889,138.4671111 [168.6m]'
});
data_peak.push({
lat: 34.70355556,
lng: 138.8551111,
cert : true,
missing : false,
content:'JA/SO-092(JA/SO-092)(543.1m) 34.70355556,138.8551111[231.1m]'
});
data_saddle.push({
lat: 34.73144445,
lng: 138.8578889,
content:'Saddle[312.0m]  34.73144445,138.8578889 [231.1m]'
});
data_peak.push({
lat: 34.71644445,
lng: 138.7772222,
cert : false,
missing : false,
content:'U-PM94jr31(521.8m) 34.71644445,138.7772222[183.1m]'
});
data_saddle.push({
lat: 34.70500001,
lng: 138.8012222,
content:'Saddle[338.7m]  34.70500001,138.8012222 [183.1m]'
});
data_peak.push({
lat: 34.71344445,
lng: 138.7832222,
cert : true,
missing : true,
content:'(Missing)JA/SO-095(JA/SO-095)(520.1m) 34.71344445,138.7832222[48.5m]'
});
data_saddle.push({
lat: 34.71266667,
lng: 138.7803333,
content:'Saddle(471.6m)  34.71266667,138.7803333 [48.5m]'
});
data_peak.push({
lat: 35.63433333,
lng: 139.1317778,
cert : false,
missing : false,
content:'U-PM95np52(471.6m) 35.63433333,139.1317778[154.7m]'
});
data_saddle.push({
lat: 35.63955556,
lng: 139.1320000,
content:'Saddle[316.9m]  35.63955556,139.1320000 [154.7m]'
});
data_peak.push({
lat: 35.56166667,
lng: 139.2253333,
cert : true,
missing : false,
content:'Sendoujiyama(JA/KN-019)(582.3m) 35.56166667,139.2253333[264.2m]'
});
data_saddle.push({
lat: 35.55511111,
lng: 139.2111111,
content:'Saddle[318.1m]  35.55511111,139.2111111 [264.2m]'
});
data_peak.push({
lat: 35.54577778,
lng: 139.2355556,
cert : true,
missing : false,
content:'JA/KN-020(JA/KN-020)(567.9m) 35.54577778,139.2355556[246.8m]'
});
data_saddle.push({
lat: 35.53822222,
lng: 139.2201111,
content:'Saddle[321.1m]  35.53822222,139.2201111 [246.8m]'
});
data_peak.push({
lat: 34.85777778,
lng: 138.0678889,
cert : true,
missing : false,
content:'JA/SO-081(JA/SO-081)(584.8m) 34.85777778,138.0678889[262.6m]'
});
data_saddle.push({
lat: 34.86055556,
lng: 138.0472222,
content:'Saddle[322.2m]  34.86055556,138.0472222 [262.6m]'
});
data_peak.push({
lat: 35.01733334,
lng: 138.2980000,
cert : true,
missing : false,
content:'JA/SO-102(JA/SO-102)(493.2m) 35.01733334,138.2980000[170.9m]'
});
data_saddle.push({
lat: 35.03611111,
lng: 138.3004444,
content:'Saddle[322.3m]  35.03611111,138.3004444 [170.9m]'
});
data_peak.push({
lat: 35.04355556,
lng: 137.8133333,
cert : true,
missing : false,
content:'JA/SO-042(JA/SO-042)(1057.9m) 35.04355556,137.8133333[735.4m]'
});
data_saddle.push({
lat: 35.02066667,
lng: 137.6955556,
content:'Saddle[322.5m]  35.02066667,137.6955556 [735.4m]'
});
data_peak.push({
lat: 34.96266667,
lng: 137.8138889,
cert : false,
missing : false,
content:'U-PM84vx71(563.2m) 34.96266667,137.8138889[151.8m]'
});
data_saddle.push({
lat: 34.96911112,
lng: 137.7925556,
content:'Saddle[411.4m]  34.96911112,137.7925556 [151.8m]'
});
data_peak.push({
lat: 34.95555556,
lng: 137.7708889,
cert : false,
missing : false,
content:'U-PM84vw29(712.6m) 34.95555556,137.7708889[189.0m]'
});
data_saddle.push({
lat: 34.96633334,
lng: 137.7512222,
content:'Saddle[523.6m]  34.96633334,137.7512222 [189.0m]'
});
data_peak.push({
lat: 34.95611112,
lng: 137.7647778,
cert : true,
missing : true,
content:'(Missing)JA/SO-066(JA/SO-066)(710.7m) 34.95611112,137.7647778[38.1m]'
});
data_saddle.push({
lat: 34.95577778,
lng: 137.7676667,
content:'Saddle(672.6m)  34.95577778,137.7676667 [38.1m]'
});
data_peak.push({
lat: 34.99100000,
lng: 137.8155556,
cert : false,
missing : false,
content:'U-PM84vx77(772.8m) 34.99100000,137.8155556[185.0m]'
});
data_saddle.push({
lat: 35.00333334,
lng: 137.8045556,
content:'Saddle[587.8m]  35.00333334,137.8045556 [185.0m]'
});
data_peak.push({
lat: 34.98233334,
lng: 137.7534444,
cert : false,
missing : false,
content:'U-PM84vx05(840.7m) 34.98233334,137.7534444[192.9m]'
});
data_saddle.push({
lat: 34.98900000,
lng: 137.7557778,
content:'Saddle[647.8m]  34.98900000,137.7557778 [192.9m]'
});
data_peak.push({
lat: 35.01333334,
lng: 137.7721111,
cert : true,
missing : false,
content:'JA/SO-044(JA/SO-044)(1052.6m) 35.01333334,137.7721111[365.5m]'
});
data_saddle.push({
lat: 35.03411111,
lng: 137.7950000,
content:'Saddle[687.1m]  35.03411111,137.7950000 [365.5m]'
});
data_peak.push({
lat: 35.81566667,
lng: 139.2152222,
cert : false,
missing : false,
content:'U-PM95ot55(492.9m) 35.81566667,139.2152222[165.7m]'
});
data_saddle.push({
lat: 35.82100000,
lng: 139.2095556,
content:'Saddle[327.2m]  35.82100000,139.2095556 [165.7m]'
});
data_peak.push({
lat: 34.86422223,
lng: 138.0051111,
cert : true,
missing : false,
content:'JA/SO-098(JA/SO-098)(506.6m) 34.86422223,138.0051111[173.3m]'
});
data_saddle.push({
lat: 34.87566667,
lng: 138.0067778,
content:'Saddle[333.3m]  34.87566667,138.0067778 [173.3m]'
});
data_peak.push({
lat: 35.08011111,
lng: 137.8478889,
cert : false,
missing : false,
content:'U-PM85wb19(539.0m) 35.08011111,137.8478889[202.5m]'
});
data_saddle.push({
lat: 35.08433334,
lng: 137.8437778,
content:'Saddle[336.5m]  35.08433334,137.8437778 [202.5m]'
});
data_peak.push({
lat: 34.90200000,
lng: 137.9193333,
cert : false,
missing : false,
content:'U-PM84xv06(583.9m) 34.90200000,137.9193333[244.7m]'
});
data_saddle.push({
lat: 34.94166667,
lng: 137.9308889,
content:'Saddle[339.2m]  34.94166667,137.9308889 [244.7m]'
});
data_peak.push({
lat: 34.92811112,
lng: 137.9245556,
cert : false,
missing : false,
content:'U-PM84xw02(547.8m) 34.92811112,137.9245556[159.0m]'
});
data_saddle.push({
lat: 34.90866667,
lng: 137.9241111,
content:'Saddle[388.8m]  34.90866667,137.9241111 [159.0m]'
});
data_peak.push({
lat: 34.89744445,
lng: 137.9207778,
cert : true,
missing : true,
content:'(Missing)JA/SO-083(JA/SO-083)(578.5m) 34.89744445,137.9207778[25.7m]'
});
data_saddle.push({
lat: 34.89888889,
lng: 137.9196667,
content:'Saddle(552.8m)  34.89888889,137.9196667 [25.7m]'
});
data_peak.push({
lat: 34.89388889,
lng: 138.1298889,
cert : true,
missing : false,
content:'JA/SO-086(JA/SO-086)(567.7m) 34.89388889,138.1298889[219.9m]'
});
data_saddle.push({
lat: 34.90288889,
lng: 138.1391111,
content:'Saddle[347.8m]  34.90288889,138.1391111 [219.9m]'
});
data_peak.push({
lat: 34.90311112,
lng: 139.0946667,
cert : true,
missing : false,
content:'Oomuroyama(JA/SO-082)(580.0m) 34.90311112,139.0946667[227.9m]'
});
data_saddle.push({
lat: 34.90600000,
lng: 139.0806667,
content:'Saddle[352.1m]  34.90600000,139.0806667 [227.9m]'
});
data_peak.push({
lat: 34.79666667,
lng: 138.8171111,
cert : true,
missing : false,
content:'JA/SO-093(JA/SO-093)(544.8m) 34.79666667,138.8171111[191.9m]'
});
data_saddle.push({
lat: 34.79522223,
lng: 138.8255556,
content:'Saddle[352.9m]  34.79522223,138.8255556 [191.9m]'
});
data_peak.push({
lat: 35.13788889,
lng: 138.1500000,
cert : false,
missing : false,
content:'U-PM95bd73(523.9m) 35.13788889,138.1500000[170.6m]'
});
data_saddle.push({
lat: 35.14155556,
lng: 138.1473333,
content:'Saddle[353.3m]  35.14155556,138.1473333 [170.6m]'
});
data_peak.push({
lat: 35.43744445,
lng: 138.4624444,
cert : true,
missing : false,
content:'JA/YN-070(JA/YN-070)(635.7m) 35.43744445,138.4624444[282.4m]'
});
data_saddle.push({
lat: 35.46455556,
lng: 138.4778889,
content:'Saddle[353.3m]  35.46455556,138.4778889 [282.4m]'
});
data_peak.push({
lat: 34.86288889,
lng: 139.0016667,
cert : true,
missing : false,
content:'Amagisan (Banzaburoudake)(JA/SO-030)(1404.7m) 34.86288889,139.0016667[1046.8m]'
});
data_saddle.push({
lat: 34.95200000,
lng: 139.0535556,
content:'Saddle[357.9m]  34.95200000,139.0535556 [1046.8m]'
});
data_peak.push({
lat: 34.73788889,
lng: 138.8594444,
cert : true,
missing : false,
content:'JA/SO-079(JA/SO-079)(606.8m) 34.73788889,138.8594444[195.1m]'
});
data_saddle.push({
lat: 34.74244445,
lng: 138.8704444,
content:'Saddle[411.7m]  34.74244445,138.8704444 [195.1m]'
});
data_peak.push({
lat: 34.92788889,
lng: 138.9644444,
cert : true,
missing : false,
content:'JA/SO-078(JA/SO-078)(607.5m) 34.92788889,138.9644444[190.0m]'
});
data_saddle.push({
lat: 34.90911112,
lng: 138.9530000,
content:'Saddle[417.5m]  34.90911112,138.9530000 [190.0m]'
});
data_peak.push({
lat: 34.81733334,
lng: 138.7943333,
cert : true,
missing : false,
content:'JA/SO-069(JA/SO-069)(702.6m) 34.81733334,138.7943333[216.3m]'
});
data_saddle.push({
lat: 34.82222223,
lng: 138.8168889,
content:'Saddle[486.3m]  34.82222223,138.8168889 [216.3m]'
});
data_peak.push({
lat: 34.95511112,
lng: 138.8392222,
cert : true,
missing : false,
content:'Darumayama(JA/SO-051)(981.0m) 34.95511112,138.8392222[403.1m]'
});
data_saddle.push({
lat: 34.92211112,
lng: 138.8414444,
content:'Saddle[577.9m]  34.92211112,138.8414444 [403.1m]'
});
data_peak.push({
lat: 34.89488889,
lng: 139.0572222,
cert : false,
missing : false,
content:'U-PM94mv64(815.0m) 34.89488889,139.0572222[153.1m]'
});
data_saddle.push({
lat: 34.89444445,
lng: 139.0534444,
content:'Saddle[661.9m]  34.89444445,139.0534444 [153.1m]'
});
data_peak.push({
lat: 34.78844445,
lng: 138.8680000,
cert : true,
missing : false,
content:'Chyoukurouyama(JA/SO-050)(995.3m) 34.78844445,138.8680000[263.2m]'
});
data_saddle.push({
lat: 34.80766667,
lng: 138.8814444,
content:'Saddle[732.1m]  34.80766667,138.8814444 [263.2m]'
});
data_peak.push({
lat: 34.88455556,
lng: 138.8403333,
cert : false,
missing : false,
content:'U-PM94kv02(932.6m) 34.88455556,138.8403333[160.0m]'
});
data_saddle.push({
lat: 34.87266667,
lng: 138.8348889,
content:'Saddle[772.6m]  34.87266667,138.8348889 [160.0m]'
});
data_peak.push({
lat: 34.85777778,
lng: 138.8636667,
cert : true,
missing : false,
content:'JA/SO-047(JA/SO-047)(1035.5m) 34.85777778,138.8636667[212.9m]'
});
data_saddle.push({
lat: 34.83177778,
lng: 138.9081111,
content:'Saddle[822.6m]  34.83177778,138.9081111 [212.9m]'
});
data_peak.push({
lat: 34.87888889,
lng: 139.0324444,
cert : true,
missing : false,
content:'JA/SO-038(JA/SO-038)(1196.3m) 34.87888889,139.0324444[177.9m]'
});
data_saddle.push({
lat: 34.87455556,
lng: 139.0264444,
content:'Saddle[1018.4m]  34.87455556,139.0264444 [177.9m]'
});
data_peak.push({
lat: 34.99277778,
lng: 138.2724444,
cert : true,
missing : false,
content:'JA/SO-090(JA/SO-090)(561.0m) 34.99277778,138.2724444[198.4m]'
});
data_saddle.push({
lat: 34.99855556,
lng: 138.2647778,
content:'Saddle[362.6m]  34.99855556,138.2647778 [198.4m]'
});
data_peak.push({
lat: 35.51988889,
lng: 138.4731111,
cert : true,
missing : false,
content:'JA/YN-071(JA/YN-071)(551.9m) 35.51988889,138.4731111[189.1m]'
});
data_saddle.push({
lat: 35.51911111,
lng: 138.4832222,
content:'Saddle[362.8m]  35.51911111,138.4832222 [189.1m]'
});
data_peak.push({
lat: 35.58522222,
lng: 139.1906667,
cert : true,
missing : false,
content:'Sekirouzan(JA/KN-018)(701.3m) 35.58522222,139.1906667[329.6m]'
});
data_saddle.push({
lat: 35.56188889,
lng: 139.1512222,
content:'Saddle[371.7m]  35.56188889,139.1512222 [329.6m]'
});
data_peak.push({
lat: 35.57266667,
lng: 139.1693333,
cert : false,
missing : false,
content:'U-PM95on07(577.7m) 35.57266667,139.1693333[165.7m]'
});
data_saddle.push({
lat: 35.57666667,
lng: 139.1765556,
content:'Saddle[412.0m]  35.57666667,139.1765556 [165.7m]'
});
data_peak.push({
lat: 35.12933334,
lng: 138.4893333,
cert : false,
missing : false,
content:'U-PM95fd81(530.8m) 35.12933334,138.4893333[157.5m]'
});
data_saddle.push({
lat: 35.13533334,
lng: 138.4904444,
content:'Saddle[373.3m]  35.13533334,138.4904444 [157.5m]'
});
data_peak.push({
lat: 35.34700000,
lng: 138.4303333,
cert : false,
missing : false,
content:'U-PM95fi13(537.8m) 35.34700000,138.4303333[164.5m]'
});
data_saddle.push({
lat: 35.32933334,
lng: 138.4310000,
content:'Saddle[373.3m]  35.32933334,138.4310000 [164.5m]'
});
data_peak.push({
lat: 35.97622222,
lng: 138.9930000,
cert : true,
missing : false,
content:'JA/ST-016(JA/ST-016)(643.2m) 35.97622222,138.9930000[264.8m]'
});
data_saddle.push({
lat: 35.97911111,
lng: 138.9756667,
content:'Saddle[378.4m]  35.97911111,138.9756667 [264.8m]'
});
data_peak.push({
lat: 35.66022222,
lng: 139.0985556,
cert : false,
missing : false,
content:'U-PM95np18(541.0m) 35.66022222,139.0985556[158.3m]'
});
data_saddle.push({
lat: 35.66588889,
lng: 139.1041111,
content:'Saddle[382.7m]  35.66588889,139.1041111 [158.3m]'
});
data_peak.push({
lat: 35.00477778,
lng: 138.2583333,
cert : true,
missing : false,
content:'JA/SO-085(JA/SO-085)(573.6m) 35.00477778,138.2583333[180.8m]'
});
data_saddle.push({
lat: 35.01211112,
lng: 138.2431111,
content:'Saddle[392.8m]  35.01211112,138.2431111 [180.8m]'
});
data_peak.push({
lat: 35.87100000,
lng: 139.1968889,
cert : false,
missing : false,
content:'U-PM95ou39(552.3m) 35.87100000,139.1968889[151.4m]'
});
data_saddle.push({
lat: 35.87666667,
lng: 139.1966667,
content:'Saddle[400.9m]  35.87666667,139.1966667 [151.4m]'
});
data_peak.push({
lat: 35.13244445,
lng: 138.4234444,
cert : false,
missing : false,
content:'U-PM95fd01(562.9m) 35.13244445,138.4234444[161.7m]'
});
data_saddle.push({
lat: 35.13355556,
lng: 138.4163333,
content:'Saddle[401.2m]  35.13355556,138.4163333 [161.7m]'
});
data_peak.push({
lat: 34.88200000,
lng: 138.0778889,
cert : true,
missing : false,
content:'JA/SO-074(JA/SO-074)(669.5m) 34.88200000,138.0778889[261.6m]'
});
data_saddle.push({
lat: 34.89011112,
lng: 138.0703333,
content:'Saddle[407.9m]  34.89011112,138.0703333 [261.6m]'
});
data_peak.push({
lat: 35.60833333,
lng: 139.0451111,
cert : false,
missing : false,
content:'U-PM95mo55(565.7m) 35.60833333,139.0451111[153.9m]'
});
data_saddle.push({
lat: 35.61500000,
lng: 139.0340000,
content:'Saddle[411.8m]  35.61500000,139.0340000 [153.9m]'
});
data_peak.push({
lat: 35.44700000,
lng: 138.4274444,
cert : true,
missing : false,
content:'JA/YN-069(JA/YN-069)(643.9m) 35.44700000,138.4274444[230.6m]'
});
data_saddle.push({
lat: 35.45677778,
lng: 138.4190000,
content:'Saddle[413.3m]  35.45677778,138.4190000 [230.6m]'
});
data_peak.push({
lat: 34.91577778,
lng: 137.9776667,
cert : true,
missing : false,
content:'JA/SO-077(JA/SO-077)(627.7m) 34.91577778,137.9776667[199.9m]'
});
data_saddle.push({
lat: 34.93955556,
lng: 137.9842222,
content:'Saddle[427.8m]  34.93955556,137.9842222 [199.9m]'
});
data_peak.push({
lat: 34.97177778,
lng: 139.0595556,
cert : false,
missing : false,
content:'U-PM94mx73(593.4m) 34.97177778,139.0595556[161.7m]'
});
data_saddle.push({
lat: 35.01700000,
lng: 139.0453333,
content:'Saddle[431.7m]  35.01700000,139.0453333 [161.7m]'
});
data_peak.push({
lat: 36.13322222,
lng: 139.0603333,
cert : false,
missing : false,
content:'U-PM96md71(592.7m) 36.13322222,139.0603333[160.9m]'
});
data_saddle.push({
lat: 36.12366667,
lng: 139.0528889,
content:'Saddle[431.8m]  36.12366667,139.0528889 [160.9m]'
});
data_peak.push({
lat: 34.95400000,
lng: 138.1828889,
cert : true,
missing : false,
content:'JA/SO-071(JA/SO-071)(690.5m) 34.95400000,138.1828889[257.2m]'
});
data_saddle.push({
lat: 34.97500000,
lng: 138.1950000,
content:'Saddle[433.3m]  34.97500000,138.1950000 [257.2m]'
});
data_peak.push({
lat: 34.94155556,
lng: 138.1602222,
cert : true,
missing : false,
content:'JA/SO-070(JA/SO-070)(690.3m) 34.94155556,138.1602222[212.6m]'
});
data_saddle.push({
lat: 34.94922223,
lng: 138.1716667,
content:'Saddle[477.7m]  34.94922223,138.1716667 [212.6m]'
});
data_peak.push({
lat: 35.23344445,
lng: 139.0207778,
cert : true,
missing : false,
content:'Hakoneyama (Kamiyama)(JA/KN-004)(1437.4m) 35.23344445,139.0207778[991.1m]'
});
data_saddle.push({
lat: 35.29388889,
lng: 138.9408889,
content:'Saddle[446.3m]  35.29388889,138.9408889 [991.1m]'
});
data_peak.push({
lat: 35.08177778,
lng: 139.0280000,
cert : true,
missing : false,
content:'Kurotake(JA/SO-061)(797.3m) 35.08177778,139.0280000[180.3m]'
});
data_saddle.push({
lat: 35.10122223,
lng: 139.0350000,
content:'Saddle[617.0m]  35.10122223,139.0350000 [180.3m]'
});
data_peak.push({
lat: 35.32866667,
lng: 139.0353333,
cert : true,
missing : false,
content:'Yaguradake(JA/KN-016)(869.0m) 35.32866667,139.0353333[217.0m]'
});
data_saddle.push({
lat: 35.33200000,
lng: 139.0282222,
content:'Saddle[652.0m]  35.33200000,139.0282222 [217.0m]'
});
data_peak.push({
lat: 35.28977778,
lng: 139.0047778,
cert : true,
missing : false,
content:'Hakoneyama (Kintokizan)(JA/KN-007)(1212.0m) 35.28977778,139.0047778[423.7m]'
});
data_saddle.push({
lat: 35.20577778,
lng: 139.0356667,
content:'Saddle[788.3m]  35.20577778,139.0356667 [423.7m]'
});
data_peak.push({
lat: 35.19566667,
lng: 139.0360000,
cert : false,
missing : false,
content:'U-PM95me46(948.0m) 35.19566667,139.0360000[159.7m]'
});
data_saddle.push({
lat: 35.18688889,
lng: 139.0321111,
content:'Saddle[788.3m]  35.18688889,139.0321111 [159.7m]'
});
data_peak.push({
lat: 35.18311111,
lng: 139.0461111,
cert : true,
missing : false,
content:'Daikanzan(JA/KN-014)(1011.7m) 35.18311111,139.0461111[164.1m]'
});
data_saddle.push({
lat: 35.18077778,
lng: 139.0136667,
content:'Saddle[847.6m]  35.18077778,139.0136667 [164.1m]'
});
data_peak.push({
lat: 35.21600000,
lng: 138.9838889,
cert : true,
missing : false,
content:'Mikuniyama(JA/KN-010)(1101.6m) 35.21600000,138.9838889[248.5m]'
});
data_saddle.push({
lat: 35.23055556,
lng: 138.9787778,
content:'Saddle[853.1m]  35.23055556,138.9787778 [248.5m]'
});
data_peak.push({
lat: 35.27955556,
lng: 139.0524444,
cert : true,
missing : false,
content:'Myoujingatake(JA/KN-009)(1168.1m) 35.27955556,139.0524444[300.6m]'
});
data_saddle.push({
lat: 35.28233334,
lng: 139.0117778,
content:'Saddle[867.5m]  35.28233334,139.0117778 [300.6m]'
});
data_peak.push({
lat: 35.27044445,
lng: 138.9821111,
cert : false,
missing : false,
content:'U-PM95lg74(1155.0m) 35.27044445,138.9821111[150.7m]'
});
data_saddle.push({
lat: 35.28100000,
lng: 138.9888889,
content:'Saddle[1004.3m]  35.28100000,138.9888889 [150.7m]'
});
data_peak.push({
lat: 35.21477778,
lng: 139.0418889,
cert : true,
missing : false,
content:'Uefutagosan(JA/KN-011)(1099.0m) 35.21477778,139.0418889[221.5m]'
});
data_saddle.push({
lat: 35.21755556,
lng: 139.0386667,
content:'Saddle[877.5m]  35.21755556,139.0386667 [221.5m]'
});
data_peak.push({
lat: 35.05111111,
lng: 138.3178889,
cert : true,
missing : false,
content:'JA/SO-065(JA/SO-065)(717.5m) 35.05111111,138.3178889[266.6m]'
});
data_saddle.push({
lat: 35.05900000,
lng: 138.3070000,
content:'Saddle[450.9m]  35.05900000,138.3070000 [266.6m]'
});
data_peak.push({
lat: 35.14600000,
lng: 138.5060000,
cert : false,
missing : false,
content:'U-PM95gd05(618.6m) 35.14600000,138.5060000[161.4m]'
});
data_saddle.push({
lat: 35.14933334,
lng: 138.4995556,
content:'Saddle[457.2m]  35.14933334,138.4995556 [161.4m]'
});
data_peak.push({
lat: 34.97822223,
lng: 137.9457778,
cert : true,
missing : false,
content:'JA/SO-075(JA/SO-075)(657.5m) 34.97822223,137.9457778[194.9m]'
});
data_saddle.push({
lat: 34.97200000,
lng: 137.9754444,
content:'Saddle[462.6m]  34.97200000,137.9754444 [194.9m]'
});
data_peak.push({
lat: 35.47411111,
lng: 138.5025556,
cert : true,
missing : false,
content:'JA/YN-068(JA/YN-068)(662.0m) 35.47411111,138.5025556[199.2m]'
});
data_saddle.push({
lat: 35.48100000,
lng: 138.5250000,
content:'Saddle[462.8m]  35.48100000,138.5250000 [199.2m]'
});
data_peak.push({
lat: 35.62177778,
lng: 138.9497778,
cert : false,
missing : false,
content:'U-PM95lo39(633.1m) 35.62177778,138.9497778[166.5m]'
});
data_saddle.push({
lat: 35.62288889,
lng: 138.9441111,
content:'Saddle[466.6m]  35.62288889,138.9441111 [166.5m]'
});
data_peak.push({
lat: 36.07477778,
lng: 139.0450000,
cert : false,
missing : false,
content:'U-PM96mb57(651.5m) 36.07477778,139.0450000[179.5m]'
});
data_saddle.push({
lat: 36.07866667,
lng: 139.0350000,
content:'Saddle[472.0m]  36.07866667,139.0350000 [179.5m]'
});
data_peak.push({
lat: 35.26222223,
lng: 138.5142222,
cert : true,
missing : false,
content:'JA/YN-066(JA/YN-066)(811.1m) 35.26222223,138.5142222[329.8m]'
});
data_saddle.push({
lat: 35.27522223,
lng: 138.5202222,
content:'Saddle[481.3m]  35.27522223,138.5202222 [329.8m]'
});
data_peak.push({
lat: 35.90711111,
lng: 139.1850000,
cert : true,
missing : false,
content:'JA/ST-015(JA/ST-015)(661.3m) 35.90711111,139.1850000[172.1m]'
});
data_saddle.push({
lat: 35.91111111,
lng: 139.1763333,
content:'Saddle[489.2m]  35.91111111,139.1763333 [172.1m]'
});
data_peak.push({
lat: 34.94700000,
lng: 137.9611111,
cert : false,
missing : false,
content:'U-PM84xw57(656.9m) 34.94700000,137.9611111[155.5m]'
});
data_saddle.push({
lat: 34.95477778,
lng: 137.9644444,
content:'Saddle[501.4m]  34.95477778,137.9644444 [155.5m]'
});
data_peak.push({
lat: 35.06722223,
lng: 137.8553333,
cert : true,
missing : false,
content:'JA/SO-073(JA/SO-073)(677.0m) 35.06722223,137.8553333[171.7m]'
});
data_saddle.push({
lat: 35.07011111,
lng: 137.8637778,
content:'Saddle[505.3m]  35.07011111,137.8637778 [171.7m]'
});
data_peak.push({
lat: 36.04411111,
lng: 138.9565556,
cert : false,
missing : false,
content:'U-PM96lb40(694.7m) 36.04411111,138.9565556[187.7m]'
});
data_saddle.push({
lat: 36.04611111,
lng: 138.9488889,
content:'Saddle[507.0m]  36.04611111,138.9488889 [187.7m]'
});
data_peak.push({
lat: 34.89700000,
lng: 138.0227778,
cert : false,
missing : false,
content:'U-PM94av25(674.6m) 34.89700000,138.0227778[151.9m]'
});
data_saddle.push({
lat: 34.91011112,
lng: 138.0283333,
content:'Saddle[522.7m]  34.91011112,138.0283333 [151.9m]'
});
data_peak.push({
lat: 35.32300000,
lng: 137.9427778,
cert : true,
missing : false,
content:'JA/NN-193(JA/NN-193)(716.4m) 35.32300000,137.9427778[183.7m]'
});
data_saddle.push({
lat: 35.32344445,
lng: 137.9486667,
content:'Saddle[532.7m]  35.32344445,137.9486667 [183.7m]'
});
data_peak.push({
lat: 35.29322223,
lng: 138.5172222,
cert : true,
missing : false,
content:'JA/SO-063(JA/SO-063)(730.7m) 35.29322223,138.5172222[179.1m]'
});
data_saddle.push({
lat: 35.30488889,
lng: 138.5135556,
content:'Saddle[551.6m]  35.30488889,138.5135556 [179.1m]'
});
data_peak.push({
lat: 34.96477778,
lng: 138.1166667,
cert : true,
missing : false,
content:'JA/SO-064(JA/SO-064)(721.2m) 34.96477778,138.1166667[169.1m]'
});
data_saddle.push({
lat: 34.97255556,
lng: 138.1485556,
content:'Saddle[552.1m]  34.97255556,138.1485556 [169.1m]'
});
data_peak.push({
lat: 34.99600000,
lng: 138.0316667,
cert : true,
missing : false,
content:'JA/SO-049(JA/SO-049)(1008.3m) 34.99600000,138.0316667[450.0m]'
});
data_saddle.push({
lat: 35.01788889,
lng: 138.0278889,
content:'Saddle[558.3m]  35.01788889,138.0278889 [450.0m]'
});
data_peak.push({
lat: 34.93833334,
lng: 138.0060000,
cert : true,
missing : false,
content:'JA/SO-054(JA/SO-054)(880.7m) 34.93833334,138.0060000[304.6m]'
});
data_saddle.push({
lat: 34.95366667,
lng: 138.0147778,
content:'Saddle[576.1m]  34.95366667,138.0147778 [304.6m]'
});
data_peak.push({
lat: 34.90733334,
lng: 138.0568889,
cert : true,
missing : false,
content:'Hakkousan(JA/SO-059)(834.6m) 34.90733334,138.0568889[212.0m]'
});
data_saddle.push({
lat: 34.91655556,
lng: 138.0441111,
content:'Saddle[622.6m]  34.91655556,138.0441111 [212.0m]'
});
data_peak.push({
lat: 34.93444445,
lng: 138.0217778,
cert : true,
missing : true,
content:'(Missing)JA/SO-062(JA/SO-062)(785.2m) 34.93444445,138.0217778[63.5m]'
});
data_saddle.push({
lat: 34.93900000,
lng: 138.0160000,
content:'Saddle(721.7m)  34.93900000,138.0160000 [63.5m]'
});
data_peak.push({
lat: 35.11833334,
lng: 137.8394444,
cert : true,
missing : false,
content:'JA/SO-060(JA/SO-060)(813.4m) 35.11833334,137.8394444[252.2m]'
});
data_saddle.push({
lat: 35.12511111,
lng: 137.8363333,
content:'Saddle[561.2m]  35.12511111,137.8363333 [252.2m]'
});
data_peak.push({
lat: 35.61633333,
lng: 138.9176667,
cert : false,
missing : false,
content:'U-PM95lo07(751.3m) 35.61633333,138.9176667[183.7m]'
});
data_saddle.push({
lat: 35.62055556,
lng: 138.9094444,
content:'Saddle[567.6m]  35.62055556,138.9094444 [183.7m]'
});
data_peak.push({
lat: 36.03444444,
lng: 139.1562222,
cert : true,
missing : false,
content:'Oogiriyama(JA/ST-014)(765.5m) 36.03444444,139.1562222[182.5m]'
});
data_saddle.push({
lat: 36.01844444,
lng: 139.1577778,
content:'Saddle[583.0m]  36.01844444,139.1577778 [182.5m]'
});
data_peak.push({
lat: 35.45133334,
lng: 137.7777778,
cert : true,
missing : false,
content:'JA/NN-192(JA/NN-192)(797.7m) 35.45133334,137.7777778[194.8m]'
});
data_saddle.push({
lat: 35.46466667,
lng: 137.7684444,
content:'Saddle[602.9m]  35.46466667,137.7684444 [194.8m]'
});
data_peak.push({
lat: 35.98866667,
lng: 139.1595556,
cert : true,
missing : false,
content:'Maruyama(JA/ST-012)(960.2m) 35.98866667,139.1595556[351.6m]'
});
data_saddle.push({
lat: 35.93122222,
lng: 139.1521111,
content:'Saddle[608.6m]  35.93122222,139.1521111 [351.6m]'
});
data_peak.push({
lat: 35.92688889,
lng: 139.1605556,
cert : true,
missing : false,
content:'Izugatake(JA/ST-013)(850.6m) 35.92688889,139.1605556[217.9m]'
});
data_saddle.push({
lat: 35.94177778,
lng: 139.1604444,
content:'Saddle[632.7m]  35.94177778,139.1604444 [217.9m]'
});
data_peak.push({
lat: 34.97977778,
lng: 138.1833333,
cert : true,
missing : false,
content:'JA/SO-055(JA/SO-055)(870.6m) 34.97977778,138.1833333[261.9m]'
});
data_saddle.push({
lat: 35.00688889,
lng: 138.1871111,
content:'Saddle[608.7m]  35.00688889,138.1871111 [261.9m]'
});
data_peak.push({
lat: 35.70655556,
lng: 139.1653333,
cert : true,
missing : false,
content:'Usukiyama(JA/TK-012)(841.3m) 35.70655556,139.1653333[220.5m]'
});
data_saddle.push({
lat: 35.69622222,
lng: 139.1724444,
content:'Saddle[620.8m]  35.69622222,139.1724444 [220.5m]'
});
data_peak.push({
lat: 35.59533333,
lng: 138.9517778,
cert : true,
missing : false,
content:'JA/YN-067(JA/YN-067)(795.9m) 35.59533333,138.9517778[168.1m]'
});
data_saddle.push({
lat: 35.58888889,
lng: 138.9492222,
content:'Saddle[627.8m]  35.58888889,138.9492222 [168.1m]'
});
data_peak.push({
lat: 35.00944445,
lng: 138.2008889,
cert : true,
missing : false,
content:'JA/SO-058(JA/SO-058)(833.7m) 35.00944445,138.2008889[205.9m]'
});
data_saddle.push({
lat: 35.01288889,
lng: 138.1934444,
content:'Saddle[627.8m]  35.01288889,138.1934444 [205.9m]'
});
data_peak.push({
lat: 35.58611111,
lng: 138.9018889,
cert : true,
missing : false,
content:'JA/YN-062(JA/YN-062)(975.4m) 35.58611111,138.9018889[343.9m]'
});
data_saddle.push({
lat: 35.57444445,
lng: 138.8627778,
content:'Saddle[631.5m]  35.57444445,138.8627778 [343.9m]'
});
data_peak.push({
lat: 35.48544445,
lng: 139.2361111,
cert : false,
missing : false,
content:'U-PM95ol86(814.8m) 35.48544445,139.2361111[181.4m]'
});
data_saddle.push({
lat: 35.48144445,
lng: 139.2480000,
content:'Saddle[633.4m]  35.48144445,139.2480000 [181.4m]'
});
data_peak.push({
lat: 35.02255556,
lng: 138.1876667,
cert : true,
missing : false,
content:'JA/SO-056(JA/SO-056)(866.3m) 35.02255556,138.1876667[223.7m]'
});
data_saddle.push({
lat: 35.05788889,
lng: 138.2008889,
content:'Saddle[642.6m]  35.05788889,138.2008889 [223.7m]'
});
data_peak.push({
lat: 35.58644445,
lng: 139.0670000,
cert : true,
missing : false,
content:'JA/YN-065(JA/YN-065)(860.1m) 35.58644445,139.0670000[183.1m]'
});
data_saddle.push({
lat: 35.58444445,
lng: 139.0605556,
content:'Saddle[677.0m]  35.58444445,139.0605556 [183.1m]'
});
data_peak.push({
lat: 35.79466667,
lng: 138.3364444,
cert : false,
missing : false,
content:'U-PM95et00(890.6m) 35.79466667,138.3364444[205.3m]'
});
data_saddle.push({
lat: 35.79677778,
lng: 138.3173333,
content:'Saddle[685.3m]  35.79677778,138.3173333 [205.3m]'
});
data_peak.push({
lat: 35.79400000,
lng: 138.3385556,
cert : true,
missing : true,
content:'(Missing)JA/YN-064(JA/YN-064)(886.3m) 35.79400000,138.3385556[13.8m]'
});
data_saddle.push({
lat: 35.79433333,
lng: 138.3372222,
content:'Saddle(872.5m)  35.79433333,138.3372222 [13.8m]'
});
data_peak.push({
lat: 35.65222222,
lng: 139.1664444,
cert : false,
missing : false,
content:'U-PM95np96(853.9m) 35.65222222,139.1664444[162.6m]'
});
data_saddle.push({
lat: 35.65777778,
lng: 139.1681111,
content:'Saddle[691.3m]  35.65777778,139.1681111 [162.6m]'
});
data_peak.push({
lat: 35.39977778,
lng: 139.0031111,
cert : true,
missing : false,
content:'Furousan(JA/KN-015)(927.5m) 35.39977778,139.0031111[220.1m]'
});
data_saddle.push({
lat: 35.40344445,
lng: 138.9933333,
content:'Saddle[707.4m]  35.40344445,138.9933333 [220.1m]'
});
data_peak.push({
lat: 35.57655556,
lng: 138.9511111,
cert : true,
missing : false,
content:'JA/YN-063(JA/YN-063)(968.1m) 35.57655556,138.9511111[250.6m]'
});
data_saddle.push({
lat: 35.57711111,
lng: 138.9836667,
content:'Saddle[717.5m]  35.57711111,138.9836667 [250.6m]'
});
data_peak.push({
lat: 35.17755556,
lng: 138.4780000,
cert : true,
missing : false,
content:'JA/SO-053(JA/SO-053)(943.9m) 35.17755556,138.4780000[222.7m]'
});
data_saddle.push({
lat: 35.17844445,
lng: 138.4641111,
content:'Saddle[721.2m]  35.17844445,138.4641111 [222.7m]'
});
data_peak.push({
lat: 34.99833334,
lng: 138.1156667,
cert : false,
missing : false,
content:'U-PM94bx39(874.8m) 34.99833334,138.1156667[152.7m]'
});
data_saddle.push({
lat: 35.04077778,
lng: 138.1394444,
content:'Saddle[722.1m]  35.04077778,138.1394444 [152.7m]'
});
data_peak.push({
lat: 35.43066667,
lng: 139.0252222,
cert : true,
missing : false,
content:'Gongenyama(JA/KN-012)(1017.7m) 35.43066667,139.0252222[269.8m]'
});
data_saddle.push({
lat: 35.43900000,
lng: 139.0254444,
content:'Saddle[747.9m]  35.43900000,139.0254444 [269.8m]'
});
data_peak.push({
lat: 35.44088889,
lng: 139.2311111,
cert : true,
missing : false,
content:'Ooyama(JA/KN-006)(1251.8m) 35.44088889,139.2311111[500.5m]'
});
data_saddle.push({
lat: 35.42733334,
lng: 139.2078889,
content:'Saddle[751.3m]  35.42733334,139.2078889 [500.5m]'
});
data_peak.push({
lat: 35.13311111,
lng: 137.8270000,
cert : true,
missing : false,
content:'JA/SO-052(JA/SO-052)(954.3m) 35.13311111,137.8270000[202.7m]'
});
data_saddle.push({
lat: 35.14288889,
lng: 137.8367778,
content:'Saddle[751.6m]  35.14288889,137.8367778 [202.7m]'
});
data_peak.push({
lat: 35.12122223,
lng: 137.8138889,
cert : false,
missing : false,
content:'U-PM85vc79(924.8m) 35.12122223,137.8138889[162.9m]'
});
data_saddle.push({
lat: 35.12866667,
lng: 137.8217778,
content:'Saddle[761.9m]  35.12866667,137.8217778 [162.9m]'
});
data_peak.push({
lat: 36.04955556,
lng: 138.9170000,
cert : true,
missing : false,
content:'Shiroishiyama(JA/ST-010)(991.1m) 36.04955556,138.9170000[238.4m]'
});
data_saddle.push({
lat: 36.06177778,
lng: 138.8917778,
content:'Saddle[752.7m]  36.06177778,138.8917778 [238.4m]'
});
data_peak.push({
lat: 36.09766667,
lng: 139.0075556,
cert : true,
missing : false,
content:'Jominesan(JA/ST-009)(1036.1m) 36.09766667,139.0075556[278.2m]'
});
data_saddle.push({
lat: 36.09455556,
lng: 138.9437778,
content:'Saddle[757.9m]  36.09455556,138.9437778 [278.2m]'
});
data_peak.push({
lat: 36.10188889,
lng: 138.9504444,
cert : true,
missing : false,
content:'JA/ST-011(JA/ST-011)(977.0m) 36.10188889,138.9504444[199.5m]'
});
data_saddle.push({
lat: 36.09666667,
lng: 138.9897778,
content:'Saddle[777.5m]  36.09666667,138.9897778 [199.5m]'
});
data_peak.push({
lat: 35.63811111,
lng: 138.9810000,
cert : true,
missing : false,
content:'JA/YN-060(JA/YN-060)(1002.2m) 35.63811111,138.9810000[239.4m]'
});
data_saddle.push({
lat: 35.64200000,
lng: 138.9977778,
content:'Saddle[762.8m]  35.64200000,138.9977778 [239.4m]'
});
data_peak.push({
lat: 35.11333334,
lng: 137.7762222,
cert : true,
missing : false,
content:'JA/AC-012(JA/AC-012)(921.7m) 35.11333334,137.7762222[158.4m]'
});
data_saddle.push({
lat: 35.14111111,
lng: 137.7702222,
content:'Saddle[763.3m]  35.14111111,137.7702222 [158.4m]'
});
data_peak.push({
lat: 35.15977778,
lng: 138.3484444,
cert : true,
missing : false,
content:'JA/SO-045(JA/SO-045)(1046.3m) 35.15977778,138.3484444[261.5m]'
});
data_saddle.push({
lat: 35.17177778,
lng: 138.3410000,
content:'Saddle[784.8m]  35.17177778,138.3410000 [261.5m]'
});
data_peak.push({
lat: 35.17855556,
lng: 138.4378889,
cert : true,
missing : false,
content:'[takadokkyou](JA/SO-040)(1133.0m) 35.17855556,138.4378889[335.6m]'
});
data_saddle.push({
lat: 35.18577778,
lng: 138.4267778,
content:'Saddle[797.4m]  35.18577778,138.4267778 [335.6m]'
});
data_peak.push({
lat: 35.58388889,
lng: 139.0197778,
cert : true,
missing : false,
content:'JA/YN-061(JA/YN-061)(990.0m) 35.58388889,139.0197778[191.8m]'
});
data_saddle.push({
lat: 35.56655556,
lng: 139.0111111,
content:'Saddle[798.2m]  35.56655556,139.0111111 [191.8m]'
});
data_peak.push({
lat: 36.09155556,
lng: 138.9123333,
cert : true,
missing : false,
content:'Near Tetemizuyama(JA/ST-007)(1064.7m) 36.09155556,138.9123333[264.7m]'
});
data_saddle.push({
lat: 36.08544444,
lng: 138.8885556,
content:'Saddle[800.0m]  36.08544444,138.8885556 [264.7m]'
});
data_peak.push({
lat: 35.27166667,
lng: 137.7721111,
cert : true,
missing : false,
content:'JA/NN-174(JA/NN-174)(1131.1m) 35.27166667,137.7721111[313.4m]'
});
data_saddle.push({
lat: 35.27300000,
lng: 137.7604444,
content:'Saddle[817.7m]  35.27300000,137.7604444 [313.4m]'
});
data_peak.push({
lat: 35.67244445,
lng: 139.1364444,
cert : true,
missing : false,
content:'Ifujisan(JA/KN-013)(1016.4m) 35.67244445,139.1364444[194.7m]'
});
data_saddle.push({
lat: 35.69155556,
lng: 139.1033333,
content:'Saddle[821.7m]  35.69155556,139.1033333 [194.7m]'
});
data_peak.push({
lat: 35.09188889,
lng: 138.2896667,
cert : false,
missing : false,
content:'U-PM95dc42(1035.6m) 35.09188889,138.2896667[208.4m]'
});
data_saddle.push({
lat: 35.10377778,
lng: 138.2743333,
content:'Saddle[827.2m]  35.10377778,138.2743333 [208.4m]'
});
data_peak.push({
lat: 35.07844445,
lng: 138.2765556,
cert : true,
missing : false,
content:'JA/SO-048(JA/SO-048)(1021.3m) 35.07844445,138.2765556[193.6m]'
});
data_saddle.push({
lat: 35.08544445,
lng: 138.2770000,
content:'Saddle[827.7m]  35.08544445,138.2770000 [193.6m]'
});
data_peak.push({
lat: 35.09100000,
lng: 138.3060000,
cert : true,
missing : false,
content:'JA/SO-046(JA/SO-046)(1034.1m) 35.09100000,138.3060000[159.4m]'
});
data_saddle.push({
lat: 35.09100000,
lng: 138.2941111,
content:'Saddle[874.7m]  35.09100000,138.2941111 [159.4m]'
});
data_peak.push({
lat: 35.93700000,
lng: 139.1302222,
cert : true,
missing : false,
content:'Takegawadake(JA/ST-008)(1051.6m) 35.93700000,139.1302222[220.0m]'
});
data_saddle.push({
lat: 35.93366667,
lng: 139.1215556,
content:'Saddle[831.6m]  35.93366667,139.1215556 [220.0m]'
});
data_peak.push({
lat: 35.08833334,
lng: 138.4034444,
cert : true,
missing : false,
content:'Ryuusouzan(JA/SO-043)(1050.5m) 35.08833334,138.4034444[218.8m]'
});
data_saddle.push({
lat: 35.10277778,
lng: 138.3973333,
content:'Saddle[831.7m]  35.10277778,138.3973333 [218.8m]'
});
data_peak.push({
lat: 35.29888889,
lng: 138.4908889,
cert : false,
missing : false,
content:'U-PM95fh81(1041.5m) 35.29888889,138.4908889[198.9m]'
});
data_saddle.push({
lat: 35.32233334,
lng: 138.4821111,
content:'Saddle[842.6m]  35.32233334,138.4821111 [198.9m]'
});
data_peak.push({
lat: 36.16333333,
lng: 138.7620000,
cert : true,
missing : false,
content:'JA/GM-065(JA/GM-065)(1086.1m) 36.16333333,138.7620000[239.3m]'
});
data_saddle.push({
lat: 36.15055555,
lng: 138.7650000,
content:'Saddle[846.8m]  36.15055555,138.7650000 [239.3m]'
});
data_peak.push({
lat: 36.14377778,
lng: 138.9800000,
cert : false,
missing : false,
content:'U-PM96ld74(1012.1m) 36.14377778,138.9800000[161.1m]'
});
data_saddle.push({
lat: 36.14511111,
lng: 138.9591111,
content:'Saddle[851.0m]  36.14511111,138.9591111 [161.1m]'
});
data_peak.push({
lat: 35.63722222,
lng: 139.0135556,
cert : true,
missing : false,
content:'Gongenyama (Ougiyama)(JA/YN-059)(1137.4m) 35.63722222,139.0135556[286.3m]'
});
data_saddle.push({
lat: 35.65333333,
lng: 139.0162222,
content:'Saddle[851.1m]  35.65333333,139.0162222 [286.3m]'
});
data_peak.push({
lat: 35.73900000,
lng: 139.0136667,
cert : true,
missing : false,
content:'Mitousan(JA/TK-005)(1530.4m) 35.73900000,139.0136667[658.6m]'
});
data_saddle.push({
lat: 35.73122222,
lng: 138.9767778,
content:'Saddle[871.8m]  35.73122222,138.9767778 [658.6m]'
});
data_peak.push({
lat: 35.77011111,
lng: 139.0805556,
cert : true,
missing : false,
content:'Gozenyama(JA/TK-006)(1404.4m) 35.77011111,139.0805556[422.8m]'
});
data_saddle.push({
lat: 35.75966667,
lng: 139.0513333,
content:'Saddle[981.6m]  35.75966667,139.0513333 [422.8m]'
});
data_peak.push({
lat: 35.76522222,
lng: 139.1303333,
cert : true,
missing : false,
content:'Oodakesan(JA/TK-007)(1264.9m) 35.76522222,139.1303333[274.0m]'
});
data_saddle.push({
lat: 35.77888889,
lng: 139.1028889,
content:'Saddle[990.9m]  35.77888889,139.1028889 [274.0m]'
});
data_peak.push({
lat: 35.74244445,
lng: 139.0347778,
cert : false,
missing : false,
content:'U-PM95mr48(1301.8m) 35.74244445,139.0347778[159.1m]'
});
data_saddle.push({
lat: 35.74233333,
lng: 139.0268889,
content:'Saddle[1142.7m]  35.74233333,139.0268889 [159.1m]'
});
data_peak.push({
lat: 35.06133334,
lng: 138.1497778,
cert : true,
missing : false,
content:'JA/SO-041(JA/SO-041)(1111.9m) 35.06133334,138.1497778[239.6m]'
});
data_saddle.push({
lat: 35.09966667,
lng: 138.1895556,
content:'Saddle[872.3m]  35.09966667,138.1895556 [239.6m]'
});
data_peak.push({
lat: 36.14644444,
lng: 138.6190000,
cert : false,
missing : false,
content:'U-PM96hd45(1031.6m) 36.14644444,138.6190000[154.4m]'
});
data_saddle.push({
lat: 36.14311111,
lng: 138.6188889,
content:'Saddle[877.2m]  36.14311111,138.6188889 [154.4m]'
});
data_peak.push({
lat: 36.07000000,
lng: 138.8632222,
cert : true,
missing : false,
content:'Futagoyama(JA/ST-006)(1164.9m) 36.07000000,138.8632222[286.3m]'
});
data_saddle.push({
lat: 36.06144444,
lng: 138.8453333,
content:'Saddle[878.6m]  36.06144444,138.8453333 [286.3m]'
});
data_peak.push({
lat: 35.15311111,
lng: 137.7668889,
cert : true,
missing : false,
content:'JA/AC-005(JA/AC-005)(1108.7m) 35.15311111,137.7668889[215.6m]'
});
data_saddle.push({
lat: 35.16922223,
lng: 137.7581111,
content:'Saddle[893.1m]  35.16922223,137.7581111 [215.6m]'
});
data_peak.push({
lat: 35.22566667,
lng: 137.7878889,
cert : true,
missing : false,
content:'JA/NN-168(JA/NN-168)(1204.8m) 35.22566667,137.7878889[246.9m]'
});
data_saddle.push({
lat: 35.22233334,
lng: 137.7317778,
content:'Saddle[957.9m]  35.22233334,137.7317778 [246.9m]'
});
data_peak.push({
lat: 36.08422222,
lng: 137.9422222,
cert : false,
missing : false,
content:'U-PM86xc30(1160.5m) 36.08422222,137.9422222[188.3m]'
});
data_saddle.push({
lat: 36.07888889,
lng: 137.9441111,
content:'Saddle[972.2m]  36.07888889,137.9441111 [188.3m]'
});
data_peak.push({
lat: 36.02733333,
lng: 137.9613333,
cert : true,
missing : false,
content:'JA/NN-166(JA/NN-166)(1201.9m) 36.02733333,137.9613333[190.8m]'
});
data_saddle.push({
lat: 36.02744444,
lng: 137.9366667,
content:'Saddle[1011.1m]  36.02744444,137.9366667 [190.8m]'
});
data_peak.push({
lat: 36.03455556,
lng: 137.9044444,
cert : true,
missing : false,
content:'JA/NN-139(JA/NN-139)(1392.2m) 36.03455556,137.9044444[323.7m]'
});
data_saddle.push({
lat: 36.02622222,
lng: 137.9101111,
content:'Saddle[1068.5m]  36.02622222,137.9101111 [323.7m]'
});
data_peak.push({
lat: 35.94166667,
lng: 137.7712222,
cert : true,
missing : false,
content:'JA/NN-152(JA/NN-152)(1316.9m) 35.94166667,137.7712222[257.6m]'
});
data_saddle.push({
lat: 35.96333333,
lng: 137.7510000,
content:'Saddle[1059.3m]  35.96333333,137.7510000 [257.6m]'
});
data_peak.push({
lat: 35.78966667,
lng: 137.8046667,
cert : true,
missing : false,
content:'Komagatake(JA/NN-006)(2954.2m) 35.78966667,137.8046667[1746.6m]'
});
data_saddle.push({
lat: 35.95188889,
lng: 137.7967778,
content:'Saddle[1207.6m]  35.95188889,137.7967778 [1746.6m]'
});
data_peak.push({
lat: 35.54955556,
lng: 137.7837778,
cert : true,
missing : false,
content:'Kazakoshiyama (Gongenyama)(JA/NN-119)(1534.7m) 35.54955556,137.7837778[293.5m]'
});
data_saddle.push({
lat: 35.58633333,
lng: 137.7984444,
content:'Saddle[1241.2m]  35.58633333,137.7984444 [293.5m]'
});
data_peak.push({
lat: 35.91600000,
lng: 137.8056667,
cert : true,
missing : false,
content:'JA/NN-123(JA/NN-123)(1491.5m) 35.91600000,137.8056667[204.6m]'
});
data_saddle.push({
lat: 35.90588889,
lng: 137.8044444,
content:'Saddle[1286.9m]  35.90588889,137.8044444 [204.6m]'
});
data_peak.push({
lat: 35.91288889,
lng: 137.8625556,
cert : true,
missing : false,
content:'Kyougatake(JA/NN-046)(2292.5m) 35.91288889,137.8625556[769.8m]'
});
data_saddle.push({
lat: 35.87244444,
lng: 137.8568889,
content:'Saddle[1522.7m]  35.87244444,137.8568889 [769.8m]'
});
data_peak.push({
lat: 35.93833333,
lng: 137.8288889,
cert : false,
missing : false,
content:'U-PM85vw95(1960.5m) 35.93833333,137.8288889[198.4m]'
});
data_saddle.push({
lat: 35.92966667,
lng: 137.8342222,
content:'Saddle[1762.1m]  35.92966667,137.8342222 [198.4m]'
});
data_peak.push({
lat: 35.94333333,
lng: 137.8296667,
cert : true,
missing : true,
content:'(Missing)JA/NN-073(JA/NN-073)(1960.5m) 35.94333333,137.8296667[47.9m]'
});
data_saddle.push({
lat: 35.94088889,
lng: 137.8293333,
content:'Saddle(1912.6m)  35.94088889,137.8293333 [47.9m]'
});
data_peak.push({
lat: 35.81222222,
lng: 137.7703333,
cert : false,
missing : false,
content:'U-PM85vt24(2176.1m) 35.81222222,137.7703333[152.2m]'
});
data_saddle.push({
lat: 35.80977778,
lng: 137.7734444,
content:'Saddle[2023.9m]  35.80977778,137.7734444 [152.2m]'
});
data_peak.push({
lat: 35.63044445,
lng: 137.7743333,
cert : true,
missing : false,
content:'Anpeijiyama(JA/NN-041)(2362.6m) 35.63044445,137.7743333[280.7m]'
});
data_saddle.push({
lat: 35.64244445,
lng: 137.7890000,
content:'Saddle[2081.9m]  35.64244445,137.7890000 [280.7m]'
});
data_peak.push({
lat: 35.84800000,
lng: 137.8100000,
cert : true,
missing : false,
content:'Oodanairiyama(JA/NN-039)(2373.4m) 35.84800000,137.8100000[260.2m]'
});
data_saddle.push({
lat: 35.83833333,
lng: 137.8076667,
content:'Saddle[2113.2m]  35.83833333,137.8076667 [260.2m]'
});
data_peak.push({
lat: 35.65533333,
lng: 137.8270000,
cert : true,
missing : false,
content:'JA/NN-044(JA/NN-044)(2326.9m) 35.65533333,137.8270000[204.1m]'
});
data_saddle.push({
lat: 35.65111111,
lng: 137.8073333,
content:'Saddle[2122.8m]  35.65111111,137.8073333 [204.1m]'
});
data_peak.push({
lat: 35.71900000,
lng: 137.8170000,
cert : true,
missing : false,
content:'Utsugidake(JA/NN-013)(2862.0m) 35.71900000,137.8170000[368.3m]'
});
data_saddle.push({
lat: 35.72333333,
lng: 137.8078889,
content:'Saddle[2493.7m]  35.72333333,137.8078889 [368.3m]'
});
data_peak.push({
lat: 35.73933333,
lng: 137.8032222,
cert : true,
missing : false,
content:'Kumazawadake(JA/NN-017)(2775.5m) 35.73933333,137.8032222[238.7m]'
});
data_saddle.push({
lat: 35.75722222,
lng: 137.8126667,
content:'Saddle[2536.8m]  35.75722222,137.8126667 [238.7m]'
});
data_peak.push({
lat: 35.76677778,
lng: 137.7940000,
cert : false,
missing : false,
content:'U-PM85vs54(2845.6m) 35.76677778,137.7940000[189.3m]'
});
data_saddle.push({
lat: 35.77211111,
lng: 137.7991111,
content:'Saddle[2656.3m]  35.77211111,137.7991111 [189.3m]'
});
data_peak.push({
lat: 36.08666667,
lng: 137.7547778,
cert : true,
missing : false,
content:'Hachimoriyama(JA/NN-035)(2445.6m) 36.08666667,137.7547778[959.1m]'
});
data_saddle.push({
lat: 36.02544444,
lng: 137.7196667,
content:'Saddle[1486.5m]  36.02544444,137.7196667 [959.1m]'
});
data_peak.push({
lat: 36.01644444,
lng: 137.7904444,
cert : true,
missing : false,
content:'JA/NN-090(JA/NN-090)(1783.0m) 36.01644444,137.7904444[209.8m]'
});
data_saddle.push({
lat: 36.03300000,
lng: 137.8111111,
content:'Saddle[1573.2m]  36.03300000,137.8111111 [209.8m]'
});
data_peak.push({
lat: 36.07322222,
lng: 137.7820000,
cert : false,
missing : false,
content:'U-PM86vb37(2021.2m) 36.07322222,137.7820000[159.3m]'
});
data_saddle.push({
lat: 36.07788889,
lng: 137.7732222,
content:'Saddle[1861.9m]  36.07788889,137.7732222 [159.3m]'
});
data_peak.push({
lat: 35.23811111,
lng: 138.7940000,
cert : true,
missing : false,
content:'Ashitakayama (Echizendake)(JA/SO-027)(1503.1m) 35.23811111,138.7940000[616.1m]'
});
data_saddle.push({
lat: 35.25600000,
lng: 138.7933333,
content:'Saddle[887.0m]  35.25600000,138.7933333 [616.1m]'
});
data_peak.push({
lat: 35.22377778,
lng: 138.8100000,
cert : true,
missing : false,
content:'JA/SO-029(JA/SO-029)(1455.7m) 35.22377778,138.8100000[202.4m]'
});
data_saddle.push({
lat: 35.22722223,
lng: 138.7981111,
content:'Saddle[1253.3m]  35.22722223,138.7981111 [202.4m]'
});
data_peak.push({
lat: 35.83355556,
lng: 138.4568889,
cert : false,
missing : false,
content:'U-PM95fu40(1121.7m) 35.83355556,138.4568889[204.9m]'
});
data_saddle.push({
lat: 35.84422222,
lng: 138.4648889,
content:'Saddle[916.8m]  35.84422222,138.4648889 [204.9m]'
});
data_peak.push({
lat: 35.39755556,
lng: 138.4162222,
cert : true,
missing : false,
content:'Minobusan(JA/YN-058)(1152.2m) 35.39755556,138.4162222[230.2m]'
});
data_saddle.push({
lat: 35.39377778,
lng: 138.4014444,
content:'Saddle[922.0m]  35.39377778,138.4014444 [230.2m]'
});
data_peak.push({
lat: 35.77033333,
lng: 138.9496667,
cert : true,
missing : false,
content:'JA/YN-055(JA/YN-055)(1286.8m) 35.77033333,138.9496667[363.7m]'
});
data_saddle.push({
lat: 35.77477778,
lng: 138.9327778,
content:'Saddle[923.1m]  35.77477778,138.9327778 [363.7m]'
});
data_peak.push({
lat: 36.12900000,
lng: 138.8592222,
cert : false,
missing : false,
content:'U-PM96kd30(1101.6m) 36.12900000,138.8592222[178.4m]'
});
data_saddle.push({
lat: 36.13233333,
lng: 138.8561111,
content:'Saddle[923.2m]  36.13233333,138.8561111 [178.4m]'
});
data_peak.push({
lat: 35.20177778,
lng: 137.9060000,
cert : false,
missing : false,
content:'U-PM85we88(1167.2m) 35.20177778,137.9060000[238.6m]'
});
data_saddle.push({
lat: 35.23044445,
lng: 137.9078889,
content:'Saddle[928.6m]  35.23044445,137.9078889 [238.6m]'
});
data_peak.push({
lat: 35.21400000,
lng: 137.9102222,
cert : true,
missing : true,
content:'(Missing)JA/SO-039(JA/SO-039)(1166.2m) 35.21400000,137.9102222[103.2m]'
});
data_saddle.push({
lat: 35.20977778,
lng: 137.9090000,
content:'Saddle(1063.0m)  35.20977778,137.9090000 [103.2m]'
});
data_peak.push({
lat: 35.95166667,
lng: 139.0977778,
cert : true,
missing : false,
content:'Bukousan(JA/ST-004)(1302.5m) 35.95166667,139.0977778[370.2m]'
});
data_saddle.push({
lat: 35.91222222,
lng: 139.1131111,
content:'Saddle[932.3m]  35.91222222,139.1131111 [370.2m]'
});
data_peak.push({
lat: 35.92855556,
lng: 139.1004444,
cert : true,
missing : false,
content:'Oomochiyama(JA/ST-005)(1293.5m) 35.92855556,139.1004444[230.8m]'
});
data_saddle.push({
lat: 35.94500000,
lng: 139.0962222,
content:'Saddle[1062.7m]  35.94500000,139.0962222 [230.8m]'
});
data_peak.push({
lat: 35.52177778,
lng: 137.9585556,
cert : false,
missing : false,
content:'U-PM85xm55(1134.1m) 35.52177778,137.9585556[186.3m]'
});
data_saddle.push({
lat: 35.51466667,
lng: 137.9618889,
content:'Saddle[947.8m]  35.51466667,137.9618889 [186.3m]'
});
data_peak.push({
lat: 35.67455556,
lng: 138.2387778,
cert : true,
missing : false,
content:'Kitadake(JA/YN-001)(3191.3m) 35.67455556,138.2387778[2236.5m]'
});
data_saddle.push({
lat: 35.91122222,
lng: 138.2198889,
content:'Saddle[954.8m]  35.91122222,138.2198889 [2236.5m]'
});
data_peak.push({
lat: 35.74166667,
lng: 138.3773333,
cert : false,
missing : false,
content:'U-PM95er58(1131.4m) 35.74166667,138.3773333[169.8m]'
});
data_saddle.push({
lat: 35.73722222,
lng: 138.3704444,
content:'Saddle[961.6m]  35.73722222,138.3704444 [169.8m]'
});
data_peak.push({
lat: 35.72844445,
lng: 138.0158889,
cert : false,
missing : false,
content:'U-PM95ar14(1120.1m) 35.72844445,138.0158889[157.8m]'
});
data_saddle.push({
lat: 35.73633333,
lng: 138.0168889,
content:'Saddle[962.3m]  35.73633333,138.0168889 [157.8m]'
});
data_peak.push({
lat: 35.37188889,
lng: 138.3943333,
cert : true,
missing : false,
content:'JA/YN-057(JA/YN-057)(1167.8m) 35.37188889,138.3943333[186.1m]'
});
data_saddle.push({
lat: 35.35655556,
lng: 138.3876667,
content:'Saddle[981.7m]  35.35655556,138.3876667 [186.1m]'
});
data_peak.push({
lat: 35.22000000,
lng: 138.3231111,
cert : true,
missing : false,
content:'JA/SO-037(JA/SO-037)(1206.8m) 35.22000000,138.3231111[220.3m]'
});
data_saddle.push({
lat: 35.22211111,
lng: 138.3126667,
content:'Saddle[986.5m]  35.22211111,138.3126667 [220.3m]'
});
data_peak.push({
lat: 35.83688889,
lng: 138.0823333,
cert : true,
missing : false,
content:'Tsukikurayama(JA/NN-169)(1191.6m) 35.83688889,138.0823333[191.2m]'
});
data_saddle.push({
lat: 35.84544445,
lng: 138.0916667,
content:'Saddle[1000.4m]  35.84544445,138.0916667 [191.2m]'
});
data_peak.push({
lat: 35.20655556,
lng: 138.4178889,
cert : false,
missing : false,
content:'U-PM95fe09(1202.3m) 35.20655556,138.4178889[170.2m]'
});
data_saddle.push({
lat: 35.20177778,
lng: 138.4114444,
content:'Saddle[1032.1m]  35.20177778,138.4114444 [170.2m]'
});
data_peak.push({
lat: 35.06811111,
lng: 137.8822222,
cert : false,
missing : false,
content:'U-PM85wb56(1353.0m) 35.06811111,137.8822222[285.5m]'
});
data_saddle.push({
lat: 35.13555556,
lng: 137.9142222,
content:'Saddle[1067.5m]  35.13555556,137.9142222 [285.5m]'
});
data_peak.push({
lat: 35.12111111,
lng: 137.8966667,
cert : true,
missing : false,
content:'JA/SO-035(JA/SO-035)(1331.4m) 35.12111111,137.8966667[228.5m]'
});
data_saddle.push({
lat: 35.11422223,
lng: 137.8966667,
content:'Saddle[1102.9m]  35.11422223,137.8966667 [228.5m]'
});
data_peak.push({
lat: 35.06933334,
lng: 137.8822222,
cert : true,
missing : true,
content:'(Missing)JA/SO-034(JA/SO-034)(1351.3m) 35.06933334,137.8822222[ 7.6m]'
});
data_saddle.push({
lat: 35.06866667,
lng: 137.8820000,
content:'Saddle(1343.7m)  35.06866667,137.8820000 [ 7.6m]'
});
data_peak.push({
lat: 35.24777778,
lng: 138.4263333,
cert : true,
missing : false,
content:'Shinoisan(JA/YN-052)(1392.7m) 35.24777778,138.4263333[321.5m]'
});
data_saddle.push({
lat: 35.24466667,
lng: 138.4140000,
content:'Saddle[1071.2m]  35.24466667,138.4140000 [321.5m]'
});
data_peak.push({
lat: 35.17777778,
lng: 138.1671111,
cert : true,
missing : false,
content:'JA/SO-036(JA/SO-036)(1293.0m) 35.17777778,138.1671111[209.4m]'
});
data_saddle.push({
lat: 35.18300000,
lng: 138.1646667,
content:'Saddle[1083.6m]  35.18300000,138.1646667 [209.4m]'
});
data_peak.push({
lat: 35.26333334,
lng: 137.8947778,
cert : true,
missing : false,
content:'Kumabushiyama(JA/NN-106)(1652.4m) 35.26333334,137.8947778[565.0m]'
});
data_saddle.push({
lat: 35.25411111,
lng: 137.9107778,
content:'Saddle[1087.4m]  35.25411111,137.9107778 [565.0m]'
});
data_peak.push({
lat: 35.10511111,
lng: 138.0590000,
cert : false,
missing : false,
content:'U-PM95ac75(1380.3m) 35.10511111,138.0590000[237.3m]'
});
data_saddle.push({
lat: 35.11222223,
lng: 138.0486667,
content:'Saddle[1143.0m]  35.11222223,138.0486667 [237.3m]'
});
data_peak.push({
lat: 35.15666667,
lng: 138.2188889,
cert : true,
missing : false,
content:'JA/SO-026(JA/SO-026)(1531.8m) 35.15666667,138.2188889[383.9m]'
});
data_saddle.push({
lat: 35.19011111,
lng: 138.2514444,
content:'Saddle[1147.9m]  35.19011111,138.2514444 [383.9m]'
});
data_peak.push({
lat: 35.13677778,
lng: 138.1842222,
cert : true,
missing : false,
content:'JA/SO-033(JA/SO-033)(1362.1m) 35.13677778,138.1842222[187.8m]'
});
data_saddle.push({
lat: 35.14300000,
lng: 138.1948889,
content:'Saddle[1174.3m]  35.14300000,138.1948889 [187.8m]'
});
data_peak.push({
lat: 35.25455556,
lng: 137.9186667,
cert : true,
missing : false,
content:'JA/SO-032(JA/SO-032)(1366.8m) 35.25455556,137.9186667[213.2m]'
});
data_saddle.push({
lat: 35.27411111,
lng: 137.9291111,
content:'Saddle[1153.6m]  35.27411111,137.9291111 [213.2m]'
});
data_peak.push({
lat: 35.67177778,
lng: 137.9840000,
cert : false,
missing : false,
content:'U-PM85xq81(1444.1m) 35.67177778,137.9840000[276.3m]'
});
data_saddle.push({
lat: 35.67300000,
lng: 138.0141111,
content:'Saddle[1167.8m]  35.67300000,138.0141111 [276.3m]'
});
data_peak.push({
lat: 35.67411111,
lng: 137.9834444,
cert : true,
missing : true,
content:'(Missing)JA/NN-135(JA/NN-135)(1444.0m) 35.67411111,137.9834444[20.4m]'
});
data_saddle.push({
lat: 35.67311111,
lng: 137.9831111,
content:'Saddle(1423.6m)  35.67311111,137.9831111 [20.4m]'
});
data_peak.push({
lat: 35.42033334,
lng: 138.2068889,
cert : false,
missing : false,
content:'U-PM95ck40(1572.3m) 35.42033334,138.2068889[383.3m]'
});
data_saddle.push({
lat: 35.43088889,
lng: 138.2051111,
content:'Saddle[1189.0m]  35.43088889,138.2051111 [383.3m]'
});
data_peak.push({
lat: 35.15822223,
lng: 137.9144444,
cert : false,
missing : false,
content:'U-PM85wd97(1434.4m) 35.15822223,137.9144444[213.1m]'
});
data_saddle.push({
lat: 35.15088889,
lng: 137.9276667,
content:'Saddle[1221.3m]  35.15088889,137.9276667 [213.1m]'
});
data_peak.push({
lat: 35.10611111,
lng: 137.9425556,
cert : false,
missing : false,
content:'U-PM85xc35(1433.5m) 35.10611111,137.9425556[211.4m]'
});
data_saddle.push({
lat: 35.10033334,
lng: 137.9520000,
content:'Saddle[1222.1m]  35.10033334,137.9520000 [211.4m]'
});
data_peak.push({
lat: 35.96755556,
lng: 138.0934444,
cert : true,
missing : false,
content:'Moriyasan(JA/NN-108)(1650.2m) 35.96755556,138.0934444[413.6m]'
});
data_saddle.push({
lat: 35.97011111,
lng: 138.1237778,
content:'Saddle[1236.6m]  35.97011111,138.1237778 [413.6m]'
});
data_peak.push({
lat: 35.91333333,
lng: 138.0604444,
cert : true,
missing : false,
content:'JA/NN-120(JA/NN-120)(1527.4m) 35.91333333,138.0604444[240.2m]'
});
data_saddle.push({
lat: 35.94722222,
lng: 138.0907778,
content:'Saddle[1287.2m]  35.94722222,138.0907778 [240.2m]'
});
data_peak.push({
lat: 35.15644445,
lng: 138.1074444,
cert : false,
missing : false,
content:'U-PM95bd27(1423.9m) 35.15644445,138.1074444[170.6m]'
});
data_saddle.push({
lat: 35.15566667,
lng: 138.0950000,
content:'Saddle[1253.3m]  35.15566667,138.0950000 [170.6m]'
});
data_peak.push({
lat: 35.63244445,
lng: 138.0202222,
cert : false,
missing : false,
content:'U-PM95ap21(1444.3m) 35.63244445,138.0202222[182.0m]'
});
data_saddle.push({
lat: 35.63322222,
lng: 138.0264444,
content:'Saddle[1262.3m]  35.63322222,138.0264444 [182.0m]'
});
data_peak.push({
lat: 35.09600000,
lng: 137.9658889,
cert : false,
missing : false,
content:'U-PM85xc53(1465.1m) 35.09600000,137.9658889[181.8m]'
});
data_saddle.push({
lat: 35.10111111,
lng: 137.9736667,
content:'Saddle[1283.3m]  35.10111111,137.9736667 [181.8m]'
});
data_peak.push({
lat: 35.09988889,
lng: 138.0105556,
cert : true,
missing : false,
content:'JA/SO-028(JA/SO-028)(1501.5m) 35.09988889,138.0105556[208.8m]'
});
data_saddle.push({
lat: 35.10633334,
lng: 138.0088889,
content:'Saddle[1292.7m]  35.10633334,138.0088889 [208.8m]'
});
data_peak.push({
lat: 35.74500000,
lng: 138.0518889,
cert : true,
missing : false,
content:'Tokurayama (Inafuji)(JA/NN-098)(1680.4m) 35.74500000,138.0518889[387.7m]'
});
data_saddle.push({
lat: 35.71555556,
lng: 138.0630000,
content:'Saddle[1292.7m]  35.71555556,138.0630000 [387.7m]'
});
data_peak.push({
lat: 35.49211111,
lng: 137.9901111,
cert : true,
missing : false,
content:'Kimenzan(JA/NN-079)(1887.3m) 35.49211111,137.9901111[589.0m]'
});
data_saddle.push({
lat: 35.48122222,
lng: 138.0115556,
content:'Saddle[1298.3m]  35.48122222,138.0115556 [589.0m]'
});
data_peak.push({
lat: 35.34477778,
lng: 137.9238889,
cert : false,
missing : false,
content:'U-PM85xi02(1473.5m) 35.34477778,137.9238889[161.7m]'
});
data_saddle.push({
lat: 35.35388889,
lng: 137.9236667,
content:'Saddle[1311.8m]  35.35388889,137.9236667 [161.7m]'
});
data_peak.push({
lat: 35.40911111,
lng: 137.9396667,
cert : true,
missing : false,
content:'JA/NN-096(JA/NN-096)(1700.8m) 35.40911111,137.9396667[228.3m]'
});
data_saddle.push({
lat: 35.44355556,
lng: 137.9630000,
content:'Saddle[1472.5m]  35.44355556,137.9630000 [228.3m]'
});
data_peak.push({
lat: 35.48811111,
lng: 138.3698889,
cert : true,
missing : false,
content:'JA/YN-040(JA/YN-040)(1668.8m) 35.48811111,138.3698889[296.3m]'
});
data_saddle.push({
lat: 35.50888889,
lng: 138.3598889,
content:'Saddle[1372.5m]  35.50888889,138.3598889 [296.3m]'
});
data_peak.push({
lat: 35.13744445,
lng: 138.0572222,
cert : false,
missing : false,
content:'U-PM95ad62(1561.6m) 35.13744445,138.0572222[169.5m]'
});
data_saddle.push({
lat: 35.13500000,
lng: 138.0462222,
content:'Saddle[1392.1m]  35.13500000,138.0462222 [169.5m]'
});
data_peak.push({
lat: 35.67477778,
lng: 138.0440000,
cert : true,
missing : false,
content:'JA/NN-093(JA/NN-093)(1741.2m) 35.67477778,138.0440000[329.7m]'
});
data_saddle.push({
lat: 35.69933333,
lng: 138.0667778,
content:'Saddle[1411.5m]  35.69933333,138.0667778 [329.7m]'
});
data_peak.push({
lat: 35.24355556,
lng: 138.3857778,
cert : false,
missing : false,
content:'U-PM95ef68(1732.2m) 35.24355556,138.3857778[308.9m]'
});
data_saddle.push({
lat: 35.31755556,
lng: 138.3580000,
content:'Saddle[1423.3m]  35.31755556,138.3580000 [308.9m]'
});
data_peak.push({
lat: 35.29888889,
lng: 138.3724444,
cert : true,
missing : false,
content:'JA/YN-039(JA/YN-039)(1671.3m) 35.29888889,138.3724444[237.9m]'
});
data_saddle.push({
lat: 35.26833334,
lng: 138.3694444,
content:'Saddle[1433.4m]  35.26833334,138.3694444 [237.9m]'
});
data_peak.push({
lat: 35.12611111,
lng: 138.0346667,
cert : true,
missing : false,
content:'Sobatsubuyama(JA/SO-025)(1623.4m) 35.12611111,138.0346667[191.6m]'
});
data_saddle.push({
lat: 35.12777778,
lng: 138.0242222,
content:'Saddle[1431.8m]  35.12777778,138.0242222 [191.6m]'
});
data_peak.push({
lat: 35.25877778,
lng: 138.0787778,
cert : true,
missing : false,
content:'JA/SO-024(JA/SO-024)(1744.4m) 35.25877778,138.0787778[261.8m]'
});
data_saddle.push({
lat: 35.26677778,
lng: 138.0697778,
content:'Saddle[1482.6m]  35.26677778,138.0697778 [261.8m]'
});
data_peak.push({
lat: 35.19488889,
lng: 137.9854444,
cert : true,
missing : false,
content:'JA/SO-022(JA/SO-022)(1781.0m) 35.19488889,137.9854444[249.4m]'
});
data_saddle.push({
lat: 35.19455556,
lng: 137.9987778,
content:'Saddle[1531.6m]  35.19455556,137.9987778 [249.4m]'
});
data_peak.push({
lat: 35.59088889,
lng: 138.3703333,
cert : false,
missing : false,
content:'U-PM95eo41(2054.7m) 35.59088889,138.3703333[522.0m]'
});
data_saddle.push({
lat: 35.59800000,
lng: 138.3352222,
content:'Saddle[1532.7m]  35.59800000,138.3352222 [522.0m]'
});
data_peak.push({
lat: 35.58766667,
lng: 138.3272222,
cert : false,
missing : false,
content:'U-PM95do91(1800.8m) 35.58766667,138.3272222[163.4m]'
});
data_saddle.push({
lat: 35.58944445,
lng: 138.3330000,
content:'Saddle[1637.4m]  35.58944445,138.3330000 [163.4m]'
});
data_peak.push({
lat: 35.56744445,
lng: 138.3452222,
cert : true,
missing : false,
content:'JA/YN-028(JA/YN-028)(1910.1m) 35.56744445,138.3452222[237.6m]'
});
data_saddle.push({
lat: 35.57000000,
lng: 138.3565556,
content:'Saddle[1672.5m]  35.57000000,138.3565556 [237.6m]'
});
data_peak.push({
lat: 35.55311111,
lng: 138.3624444,
cert : true,
missing : false,
content:'JA/YN-029(JA/YN-029)(1906.4m) 35.55311111,138.3624444[230.3m]'
});
data_saddle.push({
lat: 35.56311111,
lng: 138.3550000,
content:'Saddle[1676.1m]  35.56311111,138.3550000 [230.3m]'
});
data_peak.push({
lat: 35.58677778,
lng: 138.3691111,
cert : true,
missing : true,
content:'(Missing)Kushigatayama(JA/YN-025)(2051.3m) 35.58677778,138.3691111[38.5m]'
});
data_saddle.push({
lat: 35.58855556,
lng: 138.3687778,
content:'Saddle(2012.8m)  35.58855556,138.3687778 [38.5m]'
});
data_peak.push({
lat: 35.24077778,
lng: 138.2174444,
cert : false,
missing : false,
content:'U-PM95cf67(1711.2m) 35.24077778,138.2174444[178.3m]'
});
data_saddle.push({
lat: 35.25722223,
lng: 138.2104444,
content:'Saddle[1532.9m]  35.25722223,138.2104444 [178.3m]'
});
data_peak.push({
lat: 35.26833334,
lng: 138.2764444,
cert : true,
missing : false,
content:'JA/SO-023(JA/SO-023)(1762.4m) 35.26833334,138.2764444[200.7m]'
});
data_saddle.push({
lat: 35.27655556,
lng: 138.2804444,
content:'Saddle[1561.7m]  35.27655556,138.2804444 [200.7m]'
});
data_peak.push({
lat: 35.23544445,
lng: 138.0411111,
cert : true,
missing : false,
content:'Fudougatake(JA/SO-016)(2170.4m) 35.23544445,138.0411111[567.1m]'
});
data_saddle.push({
lat: 35.23988889,
lng: 138.0157778,
content:'Saddle[1603.3m]  35.23988889,138.0157778 [567.1m]'
});
data_peak.push({
lat: 35.18733334,
lng: 138.0703333,
cert : true,
missing : false,
content:'JA/SO-020(JA/SO-020)(1942.1m) 35.18733334,138.0703333[288.4m]'
});
data_saddle.push({
lat: 35.18811111,
lng: 138.0571111,
content:'Saddle[1653.7m]  35.18811111,138.0571111 [288.4m]'
});
data_peak.push({
lat: 35.19611111,
lng: 138.0292222,
cert : true,
missing : false,
content:'Kuroboushigatake(JA/SO-017)(2064.9m) 35.19611111,138.0292222[203.4m]'
});
data_saddle.push({
lat: 35.20366667,
lng: 138.0298889,
content:'Saddle[1861.5m]  35.20366667,138.0298889 [203.4m]'
});
data_peak.push({
lat: 35.20688889,
lng: 138.1322222,
cert : true,
missing : false,
content:'JA/SO-021(JA/SO-021)(1825.5m) 35.20688889,138.1322222[204.6m]'
});
data_saddle.push({
lat: 35.21266667,
lng: 138.1301111,
content:'Saddle[1620.9m]  35.21266667,138.1301111 [204.6m]'
});
data_peak.push({
lat: 35.81288889,
lng: 138.1290000,
cert : false,
missing : false,
content:'U-PM95bt55(1884.7m) 35.81288889,138.1290000[261.2m]'
});
data_saddle.push({
lat: 35.85711111,
lng: 138.1450000,
content:'Saddle[1623.5m]  35.85711111,138.1450000 [261.2m]'
});
data_peak.push({
lat: 35.82633333,
lng: 138.2355556,
cert : true,
missing : false,
content:'JA/YN-026(JA/YN-026)(2035.9m) 35.82633333,138.2355556[353.0m]'
});
data_saddle.push({
lat: 35.81666667,
lng: 138.2384444,
content:'Saddle[1682.9m]  35.81666667,138.2384444 [353.0m]'
});
data_peak.push({
lat: 35.36055556,
lng: 138.3500000,
cert : false,
missing : false,
content:'U-PM95ei26(1992.4m) 35.36055556,138.3500000[261.1m]'
});
data_saddle.push({
lat: 35.33688889,
lng: 138.3412222,
content:'Saddle[1731.3m]  35.33688889,138.3412222 [261.1m]'
});
data_peak.push({
lat: 35.36922222,
lng: 138.3488889,
cert : true,
missing : true,
content:'(Missing)Shichimenzan(JA/YN-027)(1987.4m) 35.36922222,138.3488889[60.1m]'
});
data_saddle.push({
lat: 35.36533334,
lng: 138.3503333,
content:'Saddle(1927.3m)  35.36533334,138.3503333 [60.1m]'
});
data_peak.push({
lat: 35.61611111,
lng: 138.1358889,
cert : false,
missing : false,
content:'U-PM95bo67(1980.2m) 35.61611111,138.1358889[188.1m]'
});
data_saddle.push({
lat: 35.63100000,
lng: 138.1387778,
content:'Saddle[1792.1m]  35.63100000,138.1387778 [188.1m]'
});
data_peak.push({
lat: 35.25600000,
lng: 138.1614444,
cert : true,
missing : false,
content:'Daimugenzan(JA/SO-013)(2328.2m) 35.25600000,138.1614444[535.6m]'
});
data_saddle.push({
lat: 35.28777778,
lng: 138.1308889,
content:'Saddle[1792.6m]  35.28777778,138.1308889 [535.6m]'
});
data_peak.push({
lat: 35.28333334,
lng: 138.1372222,
cert : true,
missing : false,
content:'JA/SO-015(JA/SO-015)(2240.7m) 35.28333334,138.1372222[392.1m]'
});
data_saddle.push({
lat: 35.26833334,
lng: 138.1380000,
content:'Saddle[1848.6m]  35.26833334,138.1380000 [392.1m]'
});
data_peak.push({
lat: 35.56333334,
lng: 138.0933333,
cert : false,
missing : false,
content:'U-PM95bn15(2081.2m) 35.56333334,138.0933333[268.5m]'
});
data_saddle.push({
lat: 35.56222222,
lng: 138.1030000,
content:'Saddle[1812.7m]  35.56222222,138.1030000 [268.5m]'
});
data_peak.push({
lat: 35.30433334,
lng: 138.2852222,
cert : true,
missing : false,
content:'Yanbushi(JA/SO-018)(2013.2m) 35.30433334,138.2852222[190.6m]'
});
data_saddle.push({
lat: 35.30988889,
lng: 138.2755556,
content:'Saddle[1822.6m]  35.30988889,138.2755556 [190.6m]'
});
data_peak.push({
lat: 35.67444445,
lng: 138.3518889,
cert : true,
missing : false,
content:'JA/YN-021(JA/YN-021)(2140.6m) 35.67444445,138.3518889[248.5m]'
});
data_saddle.push({
lat: 35.67300000,
lng: 138.3435556,
content:'Saddle[1892.1m]  35.67300000,138.3435556 [248.5m]'
});
data_peak.push({
lat: 35.28500000,
lng: 138.0425556,
cert : false,
missing : false,
content:'U-PM95ag58(2147.2m) 35.28500000,138.0425556[204.5m]'
});
data_saddle.push({
lat: 35.29077778,
lng: 138.0366667,
content:'Saddle[1942.7m]  35.29077778,138.0366667 [204.5m]'
});
data_peak.push({
lat: 35.81444445,
lng: 138.1746667,
cert : true,
missing : false,
content:'JA/NN-049(JA/NN-049)(2266.8m) 35.81444445,138.1746667[323.7m]'
});
data_saddle.push({
lat: 35.78366667,
lng: 138.1828889,
content:'Saddle[1943.1m]  35.78366667,138.1828889 [323.7m]'
});
data_peak.push({
lat: 35.34877778,
lng: 138.2556667,
cert : true,
missing : false,
content:'JA/YN-020(JA/YN-020)(2204.4m) 35.34877778,138.2556667[251.7m]'
});
data_saddle.push({
lat: 35.36711111,
lng: 138.2468889,
content:'Saddle[1952.7m]  35.36711111,138.2468889 [251.7m]'
});
data_peak.push({
lat: 35.42411111,
lng: 138.2594444,
cert : true,
missing : false,
content:'Zarugatake(JA/YN-011)(2626.5m) 35.42411111,138.2594444[648.9m]'
});
data_saddle.push({
lat: 35.54511111,
lng: 138.2598889,
content:'Saddle[1977.6m]  35.54511111,138.2598889 [648.9m]'
});
data_peak.push({
lat: 35.51388889,
lng: 138.2711111,
cert : true,
missing : false,
content:'JA/YN-019(JA/YN-019)(2224.8m) 35.51388889,138.2711111[240.4m]'
});
data_saddle.push({
lat: 35.50222222,
lng: 138.2597778,
content:'Saddle[1984.4m]  35.50222222,138.2597778 [240.4m]'
});
data_peak.push({
lat: 35.37011111,
lng: 138.2288889,
cert : false,
missing : false,
content:'U-PM95ci78(2406.1m) 35.37011111,138.2288889[373.5m]'
});
data_saddle.push({
lat: 35.39433334,
lng: 138.2472222,
content:'Saddle[2032.6m]  35.39433334,138.2472222 [373.5m]'
});
data_peak.push({
lat: 35.38633334,
lng: 138.2384444,
cert : true,
missing : true,
content:'(Missing)JA/YN-015(JA/YN-015)(2404.3m) 35.38633334,138.2384444[122.0m]'
});
data_saddle.push({
lat: 35.37766667,
lng: 138.2335556,
content:'Saddle(2282.3m)  35.37766667,138.2335556 [122.0m]'
});
data_peak.push({
lat: 35.44611111,
lng: 138.2562222,
cert : true,
missing : false,
content:'JA/YN-014(JA/YN-014)(2545.1m) 35.44611111,138.2562222[223.3m]'
});
data_saddle.push({
lat: 35.43977778,
lng: 138.2555556,
content:'Saddle[2321.8m]  35.43977778,138.2555556 [223.3m]'
});
data_peak.push({
lat: 35.40855556,
lng: 138.2581111,
cert : false,
missing : false,
content:'U-PM95dj08(2582.7m) 35.40855556,138.2581111[164.5m]'
});
data_saddle.push({
lat: 35.41777778,
lng: 138.2581111,
content:'Saddle[2418.2m]  35.41777778,138.2581111 [164.5m]'
});
data_peak.push({
lat: 35.78155556,
lng: 138.1876667,
cert : true,
missing : false,
content:'JA/NN-056(JA/NN-056)(2141.7m) 35.78155556,138.1876667[160.0m]'
});
data_saddle.push({
lat: 35.78211111,
lng: 138.1912222,
content:'Saddle[1981.7m]  35.78211111,138.1912222 [160.0m]'
});
data_peak.push({
lat: 35.64866667,
lng: 138.1025556,
cert : true,
missing : false,
content:'JA/NN-050(JA/NN-050)(2240.6m) 35.64866667,138.1025556[207.9m]'
});
data_saddle.push({
lat: 35.60522222,
lng: 138.1074444,
content:'Saddle[2032.7m]  35.60522222,138.1074444 [207.9m]'
});
data_peak.push({
lat: 35.75800000,
lng: 138.2367778,
cert : true,
missing : false,
content:'Komagatake(JA/YN-005)(2964.4m) 35.75800000,138.2367778[926.0m]'
});
data_saddle.push({
lat: 35.74311111,
lng: 138.2112222,
content:'Saddle[2038.4m]  35.74311111,138.2112222 [926.0m]'
});
data_peak.push({
lat: 35.79433333,
lng: 138.2311111,
cert : true,
missing : false,
content:'JA/YN-016(JA/YN-016)(2317.6m) 35.79433333,138.2311111[164.5m]'
});
data_saddle.push({
lat: 35.79077778,
lng: 138.2312222,
content:'Saddle[2153.1m]  35.79077778,138.2312222 [164.5m]'
});
data_peak.push({
lat: 35.70188889,
lng: 138.3045556,
cert : true,
missing : false,
content:'Kannongadake(JA/YN-007)(2840.2m) 35.70188889,138.3045556[572.6m]'
});
data_saddle.push({
lat: 35.74577778,
lng: 138.2338889,
content:'Saddle[2267.6m]  35.74577778,138.2338889 [572.6m]'
});
data_peak.push({
lat: 35.73177778,
lng: 138.2413333,
cert : true,
missing : false,
content:'Asayomine(JA/YN-008)(2796.7m) 35.73177778,138.2413333[454.0m]'
});
data_saddle.push({
lat: 35.71922222,
lng: 138.2691111,
content:'Saddle[2342.7m]  35.71922222,138.2691111 [454.0m]'
});
data_peak.push({
lat: 35.70977778,
lng: 138.2876667,
cert : false,
missing : false,
content:'U-PM95dr40(2776.3m) 35.70977778,138.2876667[152.3m]'
});
data_saddle.push({
lat: 35.70722222,
lng: 138.3000000,
content:'Saddle[2624.0m]  35.70722222,138.3000000 [152.3m]'
});
data_peak.push({
lat: 35.77911111,
lng: 138.2100000,
cert : true,
missing : false,
content:'Nokogiriyama(JA/YN-010)(2681.0m) 35.77911111,138.2100000[193.8m]'
});
data_saddle.push({
lat: 35.77488889,
lng: 138.2147778,
content:'Saddle[2487.2m]  35.77488889,138.2147778 [193.8m]'
});
data_peak.push({
lat: 35.29433334,
lng: 138.0177778,
cert : true,
missing : false,
content:'JA/SO-014(JA/SO-014)(2292.0m) 35.29433334,138.0177778[221.4m]'
});
data_saddle.push({
lat: 35.32100000,
lng: 138.0274444,
content:'Saddle[2070.6m]  35.32100000,138.0274444 [221.4m]'
});
data_peak.push({
lat: 35.68477778,
lng: 138.1626667,
cert : true,
missing : false,
content:'JA/NN-047(JA/NN-047)(2291.5m) 35.68477778,138.1626667[218.4m]'
});
data_saddle.push({
lat: 35.70144445,
lng: 138.1600000,
content:'Saddle[2073.1m]  35.70144445,138.1600000 [218.4m]'
});
data_peak.push({
lat: 35.30711111,
lng: 138.0983333,
cert : true,
missing : false,
content:'JA/SO-012(JA/SO-012)(2331.6m) 35.30711111,138.0983333[254.2m]'
});
data_saddle.push({
lat: 35.31477778,
lng: 138.0922222,
content:'Saddle[2077.4m]  35.31477778,138.0922222 [254.2m]'
});
data_peak.push({
lat: 35.33022222,
lng: 138.0382222,
cert : true,
missing : false,
content:'Ikeguchidake(JA/SO-011)(2391.2m) 35.33022222,138.0382222[233.8m]'
});
data_saddle.push({
lat: 35.33522222,
lng: 138.0448889,
content:'Saddle[2157.4m]  35.33522222,138.0448889 [233.8m]'
});
data_peak.push({
lat: 35.48500000,
lng: 138.0690000,
cert : true,
missing : false,
content:'Okuchausuyama(JA/NN-033)(2472.7m) 35.48500000,138.0690000[301.9m]'
});
data_saddle.push({
lat: 35.48111111,
lng: 138.0888889,
content:'Saddle[2170.8m]  35.48111111,138.0888889 [301.9m]'
});
data_peak.push({
lat: 35.33822222,
lng: 138.0837778,
cert : true,
missing : false,
content:'Tekaridake(JA/SO-010)(2590.1m) 35.33822222,138.0837778[399.1m]'
});
data_saddle.push({
lat: 35.35155556,
lng: 138.0944444,
content:'Saddle[2191.0m]  35.35155556,138.0944444 [399.1m]'
});
data_peak.push({
lat: 35.34722222,
lng: 138.0612222,
cert : false,
missing : false,
content:'U-PM95ai73(2428.6m) 35.34722222,138.0612222[167.0m]'
});
data_saddle.push({
lat: 35.34433334,
lng: 138.0752222,
content:'Saddle[2261.6m]  35.34433334,138.0752222 [167.0m]'
});
data_peak.push({
lat: 35.47477778,
lng: 138.0946667,
cert : false,
missing : false,
content:'U-PM95bl13(2373.1m) 35.47477778,138.0946667[152.3m]'
});
data_saddle.push({
lat: 35.47333334,
lng: 138.1052222,
content:'Saddle[2220.8m]  35.47333334,138.1052222 [152.3m]'
});
data_peak.push({
lat: 35.38377778,
lng: 138.1744444,
cert : false,
missing : false,
content:'U-PM95cj02(2422.1m) 35.38377778,138.1744444[160.3m]'
});
data_saddle.push({
lat: 35.38533334,
lng: 138.1707778,
content:'Saddle[2261.8m]  35.38533334,138.1707778 [160.3m]'
});
data_peak.push({
lat: 35.38955556,
lng: 138.1526667,
cert : true,
missing : false,
content:'Kamikouchidake(JA/SO-008)(2800.6m) 35.38955556,138.1526667[521.7m]'
});
data_saddle.push({
lat: 35.40600000,
lng: 138.1397778,
content:'Saddle[2278.9m]  35.40600000,138.1397778 [521.7m]'
});
data_peak.push({
lat: 35.72011111,
lng: 138.1835556,
cert : true,
missing : false,
content:'Senjyougatake(JA/YN-004)(3031.6m) 35.72011111,138.1835556[738.7m]'
});
data_saddle.push({
lat: 35.66933333,
lng: 138.1990000,
content:'Saddle[2292.9m]  35.66933333,138.1990000 [738.7m]'
});
data_peak.push({
lat: 35.50077778,
lng: 138.1823333,
cert : true,
missing : false,
content:'Warusawadake(JA/SO-002)(3140.7m) 35.50077778,138.1823333[749.4m]'
});
data_saddle.push({
lat: 35.50366667,
lng: 138.1404444,
content:'Saddle[2391.3m]  35.50366667,138.1404444 [749.4m]'
});
data_peak.push({
lat: 35.42255556,
lng: 138.1395556,
cert : true,
missing : false,
content:'Hijiridake (Maehijiridake)(JA/SO-007)(3010.7m) 35.42255556,138.1395556[468.2m]'
});
data_saddle.push({
lat: 35.45444445,
lng: 138.1282222,
content:'Saddle[2542.5m]  35.45444445,138.1282222 [468.2m]'
});
data_peak.push({
lat: 35.44944445,
lng: 138.1202222,
cert : false,
missing : false,
content:'U-PM95bk47(2823.3m) 35.44944445,138.1202222[211.7m]'
});
data_saddle.push({
lat: 35.42722222,
lng: 138.1282222,
content:'Saddle[2611.6m]  35.42722222,138.1282222 [211.7m]'
});
data_peak.push({
lat: 35.42866667,
lng: 138.1211111,
cert : true,
missing : false,
content:'Usagidake(JA/NN-015)(2815.3m) 35.42866667,138.1211111[182.6m]'
});
data_saddle.push({
lat: 35.43877778,
lng: 138.1230000,
content:'Saddle[2632.7m]  35.43877778,138.1230000 [182.6m]'
});
data_peak.push({
lat: 35.46111111,
lng: 138.1573333,
cert : true,
missing : false,
content:'Akaishidake(JA/SO-003)(3120.0m) 35.46111111,138.1573333[420.5m]'
});
data_saddle.push({
lat: 35.47755556,
lng: 138.1565556,
content:'Saddle[2699.5m]  35.47755556,138.1565556 [420.5m]'
});
data_peak.push({
lat: 35.49666667,
lng: 138.1670000,
cert : true,
missing : false,
content:'Arakawadake (Nakadake)(JA/SO-004)(3080.6m) 35.49666667,138.1670000[159.9m]'
});
data_saddle.push({
lat: 35.49877778,
lng: 138.1758889,
content:'Saddle[2920.7m]  35.49877778,138.1758889 [159.9m]'
});
data_peak.push({
lat: 35.53777778,
lng: 138.1530000,
cert : true,
missing : false,
content:'Kogouchidake(JA/SO-009)(2801.3m) 35.53777778,138.1530000[310.1m]'
});
data_saddle.push({
lat: 35.56522222,
lng: 138.1504444,
content:'Saddle[2491.2m]  35.56522222,138.1504444 [310.1m]'
});
data_peak.push({
lat: 35.57388889,
lng: 138.1831111,
cert : true,
missing : false,
content:'Shiomidake(JA/SO-006)(3042.2m) 35.57388889,138.1831111[501.5m]'
});
data_saddle.push({
lat: 35.59944445,
lng: 138.2003333,
content:'Saddle[2540.7m]  35.59944445,138.2003333 [501.5m]'
});
data_peak.push({
lat: 35.62500000,
lng: 138.2295556,
cert : true,
missing : false,
content:'Noutoridake (Nishinoutoridake)(JA/SO-005)(3053.3m) 35.62500000,138.2295556[266.0m]'
});
data_saddle.push({
lat: 35.63433333,
lng: 138.2302222,
content:'Saddle[2787.3m]  35.63433333,138.2302222 [266.0m]'
});
data_peak.push({
lat: 35.64577778,
lng: 138.2291111,
cert : true,
missing : false,
content:'Ainodake(JA/YN-002)(3181.4m) 35.64577778,138.2291111[293.9m]'
});
data_saddle.push({
lat: 35.66444445,
lng: 138.2326667,
content:'Saddle[2887.5m]  35.66444445,138.2326667 [293.9m]'
});
data_peak.push({
lat: 35.65866667,
lng: 138.2281111,
cert : true,
missing : true,
content:'(Missing)JA/YN-003(JA/YN-003)(3053.4m) 35.65866667,138.2281111[31.0m]'
});
data_saddle.push({
lat: 35.65666667,
lng: 138.2291111,
content:'Saddle(3022.4m)  35.65666667,138.2291111 [31.0m]'
});
data_peak.push({
lat: 35.42600000,
lng: 139.1056667,
cert : false,
missing : false,
content:'U-PM95nk22(1175.9m) 35.42600000,139.1056667[217.3m]'
});
data_saddle.push({
lat: 35.44344445,
lng: 139.1273333,
content:'Saddle[958.6m]  35.44344445,139.1273333 [217.3m]'
});
data_peak.push({
lat: 35.43800000,
lng: 139.1233333,
cert : true,
missing : true,
content:'(Missing)Ameyama(JA/KN-008)(1174.8m) 35.43800000,139.1233333[93.6m]'
});
data_saddle.push({
lat: 35.43444445,
lng: 139.1172222,
content:'Saddle(1081.2m)  35.43444445,139.1172222 [93.6m]'
});
data_peak.push({
lat: 36.09488889,
lng: 138.7833333,
cert : false,
missing : false,
content:'U-PM96jc32(1130.2m) 36.09488889,138.7833333[158.6m]'
});
data_saddle.push({
lat: 36.11055556,
lng: 138.7805556,
content:'Saddle[971.6m]  36.11055556,138.7805556 [158.6m]'
});
data_peak.push({
lat: 35.97088889,
lng: 138.3701111,
cert : true,
missing : false,
content:'Akadake(JA/YN-006)(2894.8m) 35.97088889,138.3701111[1910.5m]'
});
data_saddle.push({
lat: 35.44644445,
lng: 138.6111111,
content:'Saddle[984.3m]  35.44644445,138.6111111 [1910.5m]'
});
data_peak.push({
lat: 35.83000000,
lng: 139.1017778,
cert : true,
missing : false,
content:'Honitayama(JA/TK-008)(1222.6m) 35.83000000,139.1017778[230.0m]'
});
data_saddle.push({
lat: 35.83800000,
lng: 139.1066667,
content:'Saddle[992.6m]  35.83800000,139.1066667 [230.0m]'
});
data_peak.push({
lat: 36.01877778,
lng: 137.9926667,
cert : true,
missing : false,
content:'JA/NN-156(JA/NN-156)(1290.6m) 36.01877778,137.9926667[273.7m]'
});
data_saddle.push({
lat: 36.08622222,
lng: 138.0291111,
content:'Saddle[1016.9m]  36.08622222,138.0291111 [273.7m]'
});
data_peak.push({
lat: 36.14922222,
lng: 138.9414444,
cert : false,
missing : false,
content:'U-PM96ld25(1245.9m) 36.14922222,138.9414444[223.1m]'
});
data_saddle.push({
lat: 36.15100000,
lng: 138.9264444,
content:'Saddle[1022.8m]  36.15100000,138.9264444 [223.1m]'
});
data_peak.push({
lat: 35.54833334,
lng: 138.6155556,
cert : false,
missing : false,
content:'U-PM95hn31(1244.6m) 35.54833334,138.6155556[202.6m]'
});
data_saddle.push({
lat: 35.56033334,
lng: 138.6402222,
content:'Saddle[1042.0m]  35.56033334,138.6402222 [202.6m]'
});
data_peak.push({
lat: 35.66788889,
lng: 139.0213333,
cert : true,
missing : false,
content:'Gongenyama(JA/YN-054)(1311.2m) 35.66788889,139.0213333[268.1m]'
});
data_saddle.push({
lat: 35.69422222,
lng: 138.9802222,
content:'Saddle[1043.1m]  35.69422222,138.9802222 [268.1m]'
});
data_peak.push({
lat: 36.14377778,
lng: 138.8432222,
cert : true,
missing : false,
content:'Akagunayama(JA/GM-030)(1521.8m) 36.14377778,138.8432222[469.2m]'
});
data_saddle.push({
lat: 36.12188889,
lng: 138.7393333,
content:'Saddle[1052.6m]  36.12188889,138.7393333 [469.2m]'
});
data_peak.push({
lat: 36.15233333,
lng: 138.9184444,
cert : true,
missing : false,
content:'Mikaboyama (Nishimikaboyama)(JA/GM-047)(1284.8m) 36.15233333,138.9184444[223.2m]'
});
data_saddle.push({
lat: 36.14633333,
lng: 138.8965556,
content:'Saddle[1061.6m]  36.14633333,138.8965556 [223.2m]'
});
data_peak.push({
lat: 36.13244444,
lng: 138.7717778,
cert : true,
missing : true,
content:'(Missing)JA/GM-038(JA/GM-038)(1404.8m) 36.13244444,138.7717778[143.3m]'
});
data_saddle.push({
lat: 36.13866667,
lng: 138.7750000,
content:'Saddle(1261.5m)  36.13866667,138.7750000 [143.3m]'
});
data_peak.push({
lat: 35.56211111,
lng: 138.6525556,
cert : false,
missing : false,
content:'U-PM95hn84(1235.1m) 35.56211111,138.6525556[167.0m]'
});
data_saddle.push({
lat: 35.56300000,
lng: 138.6765556,
content:'Saddle[1068.1m]  35.56300000,138.6765556 [167.0m]'
});
data_peak.push({
lat: 35.41577778,
lng: 138.5436667,
cert : true,
missing : false,
content:'Kenashiyama(JA/SO-019)(1962.0m) 35.41577778,138.5436667[891.6m]'
});
data_saddle.push({
lat: 35.47600000,
lng: 138.5726667,
content:'Saddle[1070.4m]  35.47600000,138.5726667 [891.6m]'
});
data_peak.push({
lat: 35.34033334,
lng: 138.5220000,
cert : false,
missing : false,
content:'U-PM95gi21(1300.4m) 35.34033334,138.5220000[162.8m]'
});
data_saddle.push({
lat: 35.34400000,
lng: 138.5270000,
content:'Saddle[1137.6m]  35.34400000,138.5270000 [162.8m]'
});
data_peak.push({
lat: 35.44677778,
lng: 138.5835556,
cert : false,
missing : false,
content:'U-PM95hk07(1484.2m) 35.44677778,138.5835556[231.8m]'
});
data_saddle.push({
lat: 35.43966667,
lng: 138.5712222,
content:'Saddle[1252.4m]  35.43966667,138.5712222 [231.8m]'
});
data_peak.push({
lat: 35.38133334,
lng: 138.5125556,
cert : true,
missing : false,
content:'JA/YN-042(JA/YN-042)(1633.5m) 35.38133334,138.5125556[270.6m]'
});
data_saddle.push({
lat: 35.38266667,
lng: 138.5306667,
content:'Saddle[1362.9m]  35.38266667,138.5306667 [270.6m]'
});
data_peak.push({
lat: 35.51900000,
lng: 138.5357778,
cert : true,
missing : false,
content:'JA/YN-056(JA/YN-056)(1272.1m) 35.51900000,138.5357778[183.3m]'
});
data_saddle.push({
lat: 35.51777778,
lng: 138.5855556,
content:'Saddle[1088.8m]  35.51777778,138.5855556 [183.3m]'
});
data_peak.push({
lat: 35.55211111,
lng: 138.7493333,
cert : true,
missing : false,
content:'Kurotake(JA/YN-031)(1792.1m) 35.55211111,138.7493333[693.4m]'
});
data_saddle.push({
lat: 35.61311111,
lng: 138.7800000,
content:'Saddle[1098.7m]  35.61311111,138.7800000 [693.4m]'
});
data_peak.push({
lat: 35.50477778,
lng: 138.6025556,
cert : true,
missing : false,
content:'JA/YN-051(JA/YN-051)(1420.9m) 35.50477778,138.6025556[233.5m]'
});
data_saddle.push({
lat: 35.50400000,
lng: 138.6102222,
content:'Saddle[1187.4m]  35.50400000,138.6102222 [233.5m]'
});
data_peak.push({
lat: 35.58088889,
lng: 138.6997778,
cert : false,
missing : false,
content:'U-PM95in39(1413.5m) 35.58088889,138.6997778[202.7m]'
});
data_saddle.push({
lat: 35.57022222,
lng: 138.7045556,
content:'Saddle[1210.8m]  35.57022222,138.7045556 [202.7m]'
});
data_peak.push({
lat: 35.60588889,
lng: 138.7592222,
cert : true,
missing : false,
content:'JA/YN-046(JA/YN-046)(1485.5m) 35.60588889,138.7592222[198.7m]'
});
data_saddle.push({
lat: 35.59733333,
lng: 138.7712222,
content:'Saddle[1286.8m]  35.59733333,138.7712222 [198.7m]'
});
data_peak.push({
lat: 35.54933334,
lng: 138.8091111,
cert : true,
missing : false,
content:'Mitsutougeyama(JA/YN-032)(1783.7m) 35.54933334,138.8091111[356.1m]'
});
data_saddle.push({
lat: 35.55922222,
lng: 138.7806667,
content:'Saddle[1427.6m]  35.55922222,138.7806667 [356.1m]'
});
data_peak.push({
lat: 35.57488889,
lng: 138.8073333,
cert : true,
missing : false,
content:'JA/YN-043(JA/YN-043)(1630.5m) 35.57488889,138.8073333[177.7m]'
});
data_saddle.push({
lat: 35.56611111,
lng: 138.7992222,
content:'Saddle[1452.8m]  35.56611111,138.7992222 [177.7m]'
});
data_peak.push({
lat: 35.56288889,
lng: 138.7208889,
cert : false,
missing : false,
content:'U-PM95in65(1640.3m) 35.56288889,138.7208889[188.1m]'
});
data_saddle.push({
lat: 35.56177778,
lng: 138.7395556,
content:'Saddle[1452.2m]  35.56177778,138.7395556 [188.1m]'
});
data_peak.push({
lat: 35.52855556,
lng: 138.6833333,
cert : false,
missing : false,
content:'U-PM95im16(1735.4m) 35.52855556,138.6833333[224.3m]'
});
data_saddle.push({
lat: 35.53577778,
lng: 138.7028889,
content:'Saddle[1511.1m]  35.53577778,138.7028889 [224.3m]'
});
data_peak.push({
lat: 35.51977778,
lng: 138.6765556,
cert : true,
missing : true,
content:'(Missing)JA/YN-036(JA/YN-036)(1733.9m) 35.51977778,138.6765556[106.3m]'
});
data_saddle.push({
lat: 35.52244445,
lng: 138.6800000,
content:'Saddle(1627.6m)  35.52244445,138.6800000 [106.3m]'
});
data_peak.push({
lat: 36.13988889,
lng: 138.5931111,
cert : true,
missing : false,
content:'JA/NN-125(JA/NN-125)(1480.2m) 36.13988889,138.5931111[372.8m]'
});
data_saddle.push({
lat: 36.13611111,
lng: 138.6077778,
content:'Saddle[1107.4m]  36.13611111,138.6077778 [372.8m]'
});
data_peak.push({
lat: 35.62211111,
lng: 138.8133333,
cert : true,
missing : false,
content:'JA/YN-050(JA/YN-050)(1433.7m) 35.62211111,138.8133333[303.9m]'
});
data_saddle.push({
lat: 35.62788889,
lng: 138.8187778,
content:'Saddle[1129.8m]  35.62788889,138.8187778 [303.9m]'
});
data_peak.push({
lat: 35.77577778,
lng: 138.5424444,
cert : false,
missing : false,
content:'U-PM95gs56(1321.7m) 35.77577778,138.5424444[159.1m]'
});
data_saddle.push({
lat: 35.78133333,
lng: 138.5443333,
content:'Saddle[1162.6m]  35.78133333,138.5443333 [159.1m]'
});
data_peak.push({
lat: 35.85077778,
lng: 139.1068889,
cert : false,
missing : false,
content:'U-PM95nu24(1362.2m) 35.85077778,139.1068889[185.5m]'
});
data_saddle.push({
lat: 35.85933333,
lng: 139.1018889,
content:'Saddle[1176.7m]  35.85933333,139.1018889 [185.5m]'
});
data_peak.push({
lat: 35.77822222,
lng: 138.5881111,
cert : true,
missing : false,
content:'JA/YN-048(JA/YN-048)(1474.0m) 35.77822222,138.5881111[191.7m]'
});
data_saddle.push({
lat: 35.78300000,
lng: 138.5922222,
content:'Saddle[1282.3m]  35.78300000,138.5922222 [191.7m]'
});
data_peak.push({
lat: 35.76744445,
lng: 138.8881111,
cert : false,
missing : false,
content:'U-PM95ks64(1540.9m) 35.76744445,138.8881111[178.9m]'
});
data_saddle.push({
lat: 35.75988889,
lng: 138.8760000,
content:'Saddle[1362.0m]  35.75988889,138.8760000 [178.9m]'
});
data_peak.push({
lat: 36.02344444,
lng: 138.8412222,
cert : true,
missing : false,
content:'Ryoukamisan(JA/ST-002)(1722.5m) 36.02344444,138.8412222[360.0m]'
});
data_saddle.push({
lat: 36.03388889,
lng: 138.7826667,
content:'Saddle[1362.5m]  36.03388889,138.7826667 [360.0m]'
});
data_peak.push({
lat: 35.75844445,
lng: 138.6047778,
cert : true,
missing : false,
content:'JA/YN-045(JA/YN-045)(1552.8m) 35.75844445,138.6047778[189.4m]'
});
data_saddle.push({
lat: 35.77077778,
lng: 138.6097778,
content:'Saddle[1363.4m]  35.77077778,138.6097778 [189.4m]'
});
data_peak.push({
lat: 35.80322222,
lng: 138.5093333,
cert : true,
missing : false,
content:'JA/YN-035(JA/YN-035)(1763.6m) 35.80322222,138.5093333[391.3m]'
});
data_saddle.push({
lat: 35.80566667,
lng: 138.5238889,
content:'Saddle[1372.3m]  35.80566667,138.5238889 [391.3m]'
});
data_peak.push({
lat: 35.86866667,
lng: 138.6706667,
cert : true,
missing : false,
content:'Kitaokusenjyoudake(JA/YN-012)(2600.7m) 35.86866667,138.6706667[1224.5m]'
});
data_saddle.push({
lat: 35.94477778,
lng: 138.4521111,
content:'Saddle[1376.2m]  35.94477778,138.4521111 [1224.5m]'
});
data_peak.push({
lat: 35.81666667,
lng: 138.8392222,
cert : true,
missing : false,
content:'JA/YN-044(JA/YN-044)(1605.3m) 35.81666667,138.8392222[226.9m]'
});
data_saddle.push({
lat: 35.82277778,
lng: 138.8306667,
content:'Saddle[1378.4m]  35.82277778,138.8306667 [226.9m]'
});
data_peak.push({
lat: 36.01277778,
lng: 138.5865556,
cert : true,
missing : false,
content:'JA/NN-112(JA/NN-112)(1631.8m) 36.01277778,138.5865556[234.9m]'
});
data_saddle.push({
lat: 36.01033333,
lng: 138.6004444,
content:'Saddle[1396.9m]  36.01033333,138.6004444 [234.9m]'
});
data_peak.push({
lat: 35.96155556,
lng: 138.5841111,
cert : true,
missing : false,
content:'JA/NN-104(JA/NN-104)(1662.8m) 35.96155556,138.5841111[231.5m]'
});
data_saddle.push({
lat: 35.95077778,
lng: 138.5851111,
content:'Saddle[1431.3m]  35.95077778,138.5851111 [231.5m]'
});
data_peak.push({
lat: 35.91877778,
lng: 138.5211111,
cert : true,
missing : false,
content:'Yokooyama(JA/YN-030)(1814.4m) 35.91877778,138.5211111[347.5m]'
});
data_saddle.push({
lat: 35.91511111,
lng: 138.5423333,
content:'Saddle[1466.9m]  35.91511111,138.5423333 [347.5m]'
});
data_peak.push({
lat: 35.93855556,
lng: 138.5243333,
cert : false,
missing : false,
content:'U-PM95gw25(1731.5m) 35.93855556,138.5243333[169.7m]'
});
data_saddle.push({
lat: 35.93266667,
lng: 138.5200000,
content:'Saddle[1561.8m]  35.93266667,138.5200000 [169.7m]'
});
data_peak.push({
lat: 36.02400000,
lng: 138.7507778,
cert : false,
missing : false,
content:'U-PM96ja05(1656.6m) 36.02400000,138.7507778[183.4m]'
});
data_saddle.push({
lat: 36.00755556,
lng: 138.7390000,
content:'Saddle[1473.2m]  36.00755556,138.7390000 [183.4m]'
});
data_peak.push({
lat: 36.01677778,
lng: 138.7491111,
cert : true,
missing : true,
content:'(Missing)JA/ST-003(JA/ST-003)(1656.1m) 36.01677778,138.7491111[73.7m]'
});
data_saddle.push({
lat: 36.01911111,
lng: 138.7484444,
content:'Saddle(1582.4m)  36.01911111,138.7484444 [73.7m]'
});
data_peak.push({
lat: 35.74877778,
lng: 138.8454444,
cert : true,
missing : false,
content:'Daibosatsurei(JA/YN-024)(2056.4m) 35.74877778,138.8454444[579.5m]'
});
data_saddle.push({
lat: 35.77711111,
lng: 138.8021111,
content:'Saddle[1476.9m]  35.77711111,138.8021111 [579.5m]'
});
data_peak.push({
lat: 35.78855556,
lng: 138.8355556,
cert : false,
missing : false,
content:'U-PM95ks09(1714.0m) 35.78855556,138.8355556[157.5m]'
});
data_saddle.push({
lat: 35.78733333,
lng: 138.8264444,
content:'Saddle[1556.5m]  35.78733333,138.8264444 [157.5m]'
});
data_peak.push({
lat: 35.68677778,
lng: 138.8847778,
cert : false,
missing : false,
content:'U-PM95kq64(1873.1m) 35.68677778,138.8847778[311.9m]'
});
data_saddle.push({
lat: 35.68711111,
lng: 138.8776667,
content:'Saddle[1561.2m]  35.68711111,138.8776667 [311.9m]'
});
data_peak.push({
lat: 35.81177778,
lng: 138.7831111,
cert : true,
missing : false,
content:'JA/YN-033(JA/YN-033)(1773.6m) 35.81177778,138.7831111[285.7m]'
});
data_saddle.push({
lat: 35.83111111,
lng: 138.7877778,
content:'Saddle[1487.9m]  35.83111111,138.7877778 [285.7m]'
});
data_peak.push({
lat: 36.11188889,
lng: 138.5476667,
cert : true,
missing : false,
content:'JA/NN-094(JA/NN-094)(1716.7m) 36.11188889,138.5476667[212.7m]'
});
data_saddle.push({
lat: 36.06400000,
lng: 138.6424444,
content:'Saddle[1504.0m]  36.06400000,138.6424444 [212.7m]'
});
data_peak.push({
lat: 36.09488889,
lng: 138.6248889,
cert : false,
missing : false,
content:'U-PM96hc42(1683.6m) 36.09488889,138.6248889[150.8m]'
});
data_saddle.push({
lat: 36.09677778,
lng: 138.6063333,
content:'Saddle[1532.8m]  36.09677778,138.6063333 [150.8m]'
});
data_peak.push({
lat: 35.87444444,
lng: 138.5720000,
cert : false,
missing : false,
content:'U-PM95gu89(1703.1m) 35.87444444,138.5720000[185.7m]'
});
data_saddle.push({
lat: 35.87600000,
lng: 138.5781111,
content:'Saddle[1517.4m]  35.87600000,138.5781111 [185.7m]'
});
data_peak.push({
lat: 35.78166667,
lng: 138.6641111,
cert : true,
missing : false,
content:'Konarayama(JA/YN-037)(1712.1m) 35.78166667,138.6641111[183.7m]'
});
data_saddle.push({
lat: 35.79633333,
lng: 138.6488889,
content:'Saddle[1528.4m]  35.79633333,138.6488889 [183.7m]'
});
data_peak.push({
lat: 35.86455556,
lng: 138.9898889,
cert : false,
missing : false,
content:'U-PM95lu87(1722.2m) 35.86455556,138.9898889[180.5m]'
});
data_saddle.push({
lat: 35.87100000,
lng: 138.9838889,
content:'Saddle[1541.7m]  35.87100000,138.9838889 [180.5m]'
});
data_peak.push({
lat: 35.89711111,
lng: 139.0102222,
cert : true,
missing : false,
content:'Toridaniyama(JA/TK-004)(1716.9m) 35.89711111,139.0102222[166.8m]'
});
data_saddle.push({
lat: 35.89100000,
lng: 139.0064444,
content:'Saddle[1550.1m]  35.89100000,139.0064444 [166.8m]'
});
data_peak.push({
lat: 35.82988889,
lng: 139.0123333,
cert : true,
missing : false,
content:'Takanosuyama(JA/TK-003)(1734.7m) 35.82988889,139.0123333[181.6m]'
});
data_saddle.push({
lat: 35.82822222,
lng: 139.0020000,
content:'Saddle[1553.1m]  35.82822222,139.0020000 [181.6m]'
});
data_peak.push({
lat: 35.82877778,
lng: 138.5717778,
cert : true,
missing : false,
content:'JA/YN-034(JA/YN-034)(1773.9m) 35.82877778,138.5717778[181.4m]'
});
data_saddle.push({
lat: 35.82922222,
lng: 138.5805556,
content:'Saddle[1592.5m]  35.82922222,138.5805556 [181.4m]'
});
data_peak.push({
lat: 35.99177778,
lng: 138.5690000,
cert : true,
missing : false,
content:'JA/NN-081(JA/NN-081)(1880.7m) 35.99177778,138.5690000[268.4m]'
});
data_saddle.push({
lat: 35.99144444,
lng: 138.6260000,
content:'Saddle[1612.3m]  35.99144444,138.6260000 [268.4m]'
});
data_peak.push({
lat: 35.99111111,
lng: 138.6010000,
cert : true,
missing : false,
content:'JA/NN-087(JA/NN-087)(1821.5m) 35.99111111,138.6010000[204.4m]'
});
data_saddle.push({
lat: 35.99322222,
lng: 138.5786667,
content:'Saddle[1617.1m]  35.99322222,138.5786667 [204.4m]'
});
data_peak.push({
lat: 35.99388889,
lng: 138.5474444,
cert : false,
missing : false,
content:'U-PM95gx58(1853.5m) 35.99388889,138.5474444[160.8m]'
});
data_saddle.push({
lat: 35.99355556,
lng: 138.5627778,
content:'Saddle[1692.7m]  35.99355556,138.5627778 [160.8m]'
});
data_peak.push({
lat: 35.96066667,
lng: 138.7743333,
cert : false,
missing : false,
content:'U-PM95jx20(1815.9m) 35.96066667,138.7743333[182.8m]'
});
data_saddle.push({
lat: 35.95877778,
lng: 138.7647778,
content:'Saddle[1633.1m]  35.95877778,138.7647778 [182.8m]'
});
data_peak.push({
lat: 36.03388889,
lng: 138.6073333,
cert : true,
missing : false,
content:'Ogurasan(JA/NN-058)(2112.1m) 36.03388889,138.6073333[419.1m]'
});
data_saddle.push({
lat: 36.01655556,
lng: 138.6582222,
content:'Saddle[1693.0m]  36.01655556,138.6582222 [419.1m]'
});
data_peak.push({
lat: 35.87411111,
lng: 138.9542222,
cert : true,
missing : false,
content:'Imotokinodokke(JA/TK-002)(1944.8m) 35.87411111,138.9542222[241.9m]'
});
data_saddle.push({
lat: 35.86622222,
lng: 138.9456667,
content:'Saddle[1702.9m]  35.86622222,138.9456667 [241.9m]'
});
data_peak.push({
lat: 35.99177778,
lng: 138.6888889,
cert : true,
missing : false,
content:'JA/NN-071(JA/NN-071)(1976.8m) 35.99177778,138.6888889[254.9m]'
});
data_saddle.push({
lat: 35.97688889,
lng: 138.7117778,
content:'Saddle[1721.9m]  35.97688889,138.7117778 [254.9m]'
});
data_peak.push({
lat: 35.85555556,
lng: 138.9438889,
cert : true,
missing : false,
content:'Kumotoriyama(JA/TK-001)(2015.7m) 35.85555556,138.9438889[273.5m]'
});
data_saddle.push({
lat: 35.85066667,
lng: 138.9210000,
content:'Saddle[1742.2m]  35.85066667,138.9210000 [273.5m]'
});
data_peak.push({
lat: 35.86777778,
lng: 138.8453333,
cert : true,
missing : false,
content:'Karamatsuoyama(JA/YN-022)(2108.2m) 35.86777778,138.8453333[325.5m]'
});
data_saddle.push({
lat: 35.86477778,
lng: 138.8111111,
content:'Saddle[1782.7m]  35.86477778,138.8111111 [325.5m]'
});
data_peak.push({
lat: 35.83988889,
lng: 138.8922222,
cert : true,
missing : false,
content:'Ooborayama (Hiryuuyama)(JA/YN-023)(2074.3m) 35.83988889,138.8922222[277.2m]'
});
data_saddle.push({
lat: 35.85900000,
lng: 138.8625556,
content:'Saddle[1797.1m]  35.85900000,138.8625556 [277.2m]'
});
data_peak.push({
lat: 35.85500000,
lng: 138.8722222,
cert : false,
missing : false,
content:'U-PM95ku45(2011.0m) 35.85500000,138.8722222[187.9m]'
});
data_saddle.push({
lat: 35.84444445,
lng: 138.8875556,
content:'Saddle[1823.1m]  35.84444445,138.8875556 [187.9m]'
});
data_peak.push({
lat: 35.84133333,
lng: 138.7097778,
cert : true,
missing : false,
content:'JA/YN-018(JA/YN-018)(2231.3m) 35.84133333,138.7097778[268.3m]'
});
data_saddle.push({
lat: 35.83700000,
lng: 138.6970000,
content:'Saddle[1963.0m]  35.83700000,138.6970000 [268.3m]'
});
data_peak.push({
lat: 35.90944444,
lng: 138.6125556,
cert : true,
missing : false,
content:'JA/NN-036(JA/NN-036)(2413.2m) 35.90944444,138.6125556[360.7m]'
});
data_saddle.push({
lat: 35.88644444,
lng: 138.6061111,
content:'Saddle[2052.5m]  35.88644444,138.6061111 [360.7m]'
});
data_peak.push({
lat: 35.90188889,
lng: 138.7586667,
cert : true,
missing : false,
content:'JA/YN-017(JA/YN-017)(2316.7m) 35.90188889,138.7586667[233.8m]'
});
data_saddle.push({
lat: 35.90211111,
lng: 138.7506667,
content:'Saddle[2082.9m]  35.90211111,138.7506667 [233.8m]'
});
data_peak.push({
lat: 35.91788889,
lng: 138.7274444,
cert : true,
missing : false,
content:'Sanpouyama(JA/ST-001)(2483.9m) 35.91788889,138.7274444[332.0m]'
});
data_saddle.push({
lat: 35.88933333,
lng: 138.6845556,
content:'Saddle[2151.9m]  35.88933333,138.6845556 [332.0m]'
});
data_peak.push({
lat: 35.87166667,
lng: 138.6254444,
cert : true,
missing : false,
content:'Kinpusan(JA/YN-013)(2597.9m) 35.87166667,138.6254444[234.9m]'
});
data_saddle.push({
lat: 35.87322222,
lng: 138.6625556,
content:'Saddle[2363.0m]  35.87322222,138.6625556 [234.9m]'
});
data_peak.push({
lat: 36.15855555,
lng: 138.1937778,
cert : true,
missing : false,
content:'JA/NN-101(JA/NN-101)(1671.5m) 36.15855555,138.1937778[214.8m]'
});
data_saddle.push({
lat: 36.15166667,
lng: 138.1873333,
content:'Saddle[1456.7m]  36.15166667,138.1873333 [214.8m]'
});
data_peak.push({
lat: 36.15133333,
lng: 138.2193333,
cert : false,
missing : false,
content:'U-PM96cd66(1657.2m) 36.15133333,138.2193333[176.3m]'
});
data_saddle.push({
lat: 36.15322222,
lng: 138.2096667,
content:'Saddle[1480.9m]  36.15322222,138.2096667 [176.3m]'
});
data_peak.push({
lat: 36.16311111,
lng: 138.0591111,
cert : true,
missing : false,
content:'Hachibuseyama(JA/NN-075)(1928.3m) 36.16311111,138.0591111[415.8m]'
});
data_saddle.push({
lat: 36.16311111,
lng: 138.1000000,
content:'Saddle[1512.5m]  36.16311111,138.1000000 [415.8m]'
});
data_peak.push({
lat: 36.10300000,
lng: 138.1965556,
cert : true,
missing : false,
content:'Kirigamine (Kurumayama)(JA/NN-076)(1924.7m) 36.10300000,138.1965556[408.3m]'
});
data_saddle.push({
lat: 36.14522222,
lng: 138.1438889,
content:'Saddle[1516.4m]  36.14522222,138.1438889 [408.3m]'
});
data_peak.push({
lat: 36.13011111,
lng: 138.1543333,
cert : true,
missing : false,
content:'JA/NN-089(JA/NN-089)(1794.3m) 36.13011111,138.1543333[161.8m]'
});
data_saddle.push({
lat: 36.12200000,
lng: 138.1650000,
content:'Saddle[1632.5m]  36.12200000,138.1650000 [161.8m]'
});
data_peak.push({
lat: 36.16644444,
lng: 138.1280000,
cert : true,
missing : false,
content:'JA/NN-080(JA/NN-080)(1883.3m) 36.16644444,138.1280000[279.3m]'
});
data_saddle.push({
lat: 36.18111111,
lng: 138.1278889,
content:'Saddle[1604.0m]  36.18111111,138.1278889 [279.3m]'
});
data_peak.push({
lat: 36.10377778,
lng: 138.2950000,
cert : true,
missing : false,
content:'Tateshinayama(JA/NN-031)(2530.3m) 36.10377778,138.2950000[443.3m]'
});
data_saddle.push({
lat: 36.11200000,
lng: 138.3192222,
content:'Saddle[2087.0m]  36.11200000,138.3192222 [443.3m]'
});
data_peak.push({
lat: 36.08755556,
lng: 138.3200000,
cert : true,
missing : false,
content:'Yokodake(JA/NN-032)(2481.9m) 36.08755556,138.3200000[362.8m]'
});
data_saddle.push({
lat: 36.05955556,
lng: 138.3467778,
content:'Saddle[2119.1m]  36.05955556,138.3467778 [362.8m]'
});
data_peak.push({
lat: 36.07533333,
lng: 138.3314444,
cert : true,
missing : false,
content:'Shimagareyama(JA/NN-037)(2402.4m) 36.07533333,138.3314444[153.6m]'
});
data_saddle.push({
lat: 36.07933333,
lng: 138.3260000,
content:'Saddle[2248.8m]  36.07933333,138.3260000 [153.6m]'
});
data_peak.push({
lat: 36.01922222,
lng: 138.3554444,
cert : true,
missing : false,
content:'Tengudake(JA/NN-024)(2644.7m) 36.01922222,138.3554444[212.1m]'
});
data_saddle.push({
lat: 36.00644444,
lng: 138.3647778,
content:'Saddle[2432.6m]  36.00644444,138.3647778 [212.1m]'
});
data_peak.push({
lat: 35.94988889,
lng: 138.3596667,
cert : true,
missing : false,
content:'Gongendake(JA/YN-009)(2708.4m) 35.94988889,138.3596667[256.7m]'
});
data_saddle.push({
lat: 35.96400000,
lng: 138.3633333,
content:'Saddle[2451.7m]  35.96400000,138.3633333 [256.7m]'
});
data_peak.push({
lat: 35.97255556,
lng: 138.3586667,
cert : false,
missing : false,
content:'U-PM95ex33(2802.4m) 35.97255556,138.3586667[160.9m]'
});
data_saddle.push({
lat: 35.97200000,
lng: 138.3613333,
content:'Saddle[2641.5m]  35.97200000,138.3613333 [160.9m]'
});
data_peak.push({
lat: 35.49422222,
lng: 138.7075556,
cert : true,
missing : false,
content:'JA/YN-053(JA/YN-053)(1353.9m) 35.49422222,138.7075556[345.6m]'
});
data_saddle.push({
lat: 35.48144445,
lng: 138.6726667,
content:'Saddle[1008.3m]  35.48144445,138.6726667 [345.6m]'
});
data_peak.push({
lat: 35.48700000,
lng: 138.9315556,
cert : true,
missing : false,
content:'Mishoutaiyama(JA/YN-038)(1681.3m) 35.48700000,138.9315556[633.4m]'
});
data_saddle.push({
lat: 35.42833334,
lng: 138.9296667,
content:'Saddle[1047.9m]  35.42833334,138.9296667 [633.4m]'
});
data_peak.push({
lat: 35.48633334,
lng: 139.1388889,
cert : true,
missing : false,
content:'Tanzawasan (Hirugatake)(JA/KN-001)(1672.5m) 35.48633334,139.1388889[611.1m]'
});
data_saddle.push({
lat: 35.49511111,
lng: 139.0773333,
content:'Saddle[1061.4m]  35.49511111,139.0773333 [611.1m]'
});
data_peak.push({
lat: 35.47911111,
lng: 139.1027778,
cert : true,
missing : false,
content:'Hinokiboramaru(JA/KN-002)(1600.7m) 35.47911111,139.1027778[343.6m]'
});
data_saddle.push({
lat: 35.47722222,
lng: 139.1207778,
content:'Saddle[1257.1m]  35.47722222,139.1207778 [343.6m]'
});
data_peak.push({
lat: 35.46588889,
lng: 139.1045556,
cert : false,
missing : false,
content:'U-PM95nl21(1490.6m) 35.46588889,139.1045556[167.9m]'
});
data_saddle.push({
lat: 35.47111111,
lng: 139.1012222,
content:'Saddle[1322.7m]  35.47111111,139.1012222 [167.9m]'
});
data_peak.push({
lat: 35.54433334,
lng: 139.0244444,
cert : false,
missing : false,
content:'U-PM95mn20(1298.2m) 35.54433334,139.0244444[226.0m]'
});
data_saddle.push({
lat: 35.53444445,
lng: 139.0064444,
content:'Saddle[1072.2m]  35.53444445,139.0064444 [226.0m]'
});
data_peak.push({
lat: 35.50811111,
lng: 138.8557778,
cert : false,
missing : false,
content:'U-PM95km21(1254.9m) 35.50811111,138.8557778[162.2m]'
});
data_saddle.push({
lat: 35.49944445,
lng: 138.8567778,
content:'Saddle[1092.7m]  35.49944445,138.8567778 [162.2m]'
});
data_peak.push({
lat: 35.52188889,
lng: 138.9695556,
cert : true,
missing : false,
content:'JA/YN-047(JA/YN-047)(1482.1m) 35.52188889,138.9695556[369.1m]'
});
data_saddle.push({
lat: 35.51000000,
lng: 138.9708889,
content:'Saddle[1113.0m]  35.51000000,138.9708889 [369.1m]'
});
data_peak.push({
lat: 35.51088889,
lng: 139.0683333,
cert : true,
missing : false,
content:'Oomuroyama(JA/KN-003)(1586.4m) 35.51088889,139.0683333[463.6m]'
});
data_saddle.push({
lat: 35.48122222,
lng: 139.0248889,
content:'Saddle[1122.8m]  35.48122222,139.0248889 [463.6m]'
});
data_peak.push({
lat: 35.46377778,
lng: 138.9784444,
cert : true,
missing : false,
content:'Komotsurushiyama(JA/KN-005)(1375.5m) 35.46377778,138.9784444[233.6m]'
});
data_saddle.push({
lat: 35.45188889,
lng: 138.9318889,
content:'Saddle[1141.9m]  35.45188889,138.9318889 [233.6m]'
});
data_peak.push({
lat: 35.48577778,
lng: 138.8762222,
cert : true,
missing : false,
content:'JA/YN-041(JA/YN-041)(1640.2m) 35.48577778,138.8762222[487.5m]'
});
data_saddle.push({
lat: 35.45711111,
lng: 138.8925556,
content:'Saddle[1152.7m]  35.45711111,138.8925556 [487.5m]'
});
data_peak.push({
lat: 35.45300000,
lng: 138.9116667,
cert : true,
missing : true,
content:'(Missing)JA/YN-049(JA/YN-049)(1444.7m) 35.45300000,138.9116667[147.7m]'
});
data_saddle.push({
lat: 35.45800000,
lng: 138.9220000,
content:'Saddle(1297.0m)  35.45800000,138.9220000 [147.7m]'
});
data_peak.push({
lat: 35.38966667,
lng: 138.8917778,
cert : true,
missing : false,
content:'JA/SO-031(JA/SO-031)(1382.8m) 35.38966667,138.8917778[274.7m]'
});
data_saddle.push({
lat: 35.39333334,
lng: 138.8637778,
content:'Saddle[1108.1m]  35.39333334,138.8637778 [274.7m]'
});
data_peak.push({
lat: 35.44088889,
lng: 138.6535556,
cert : false,
missing : false,
content:'U-PM95hk85(1467.6m) 35.44088889,138.6535556[203.5m]'
});
data_saddle.push({
lat: 35.43400000,
lng: 138.6564444,
content:'Saddle[1264.1m]  35.43400000,138.6564444 [203.5m]'
});
var latlng = new google.maps.LatLng(data_peak[0].lat, data_peak[0].lng);
var opts = {
  zoom: 13,
  center: latlng,
  mapTypeId: google.maps.MapTypeId.TERRAIN
};
map = new google.maps.Map(document.getElementById("map"), opts);
markers_peak = new Array();
var markers_saddle = new Array();
for (i = 0; i < data_peak.length; i++) {
  if(data_peak[i].cert) {
   if(data_peak[i].missing) {
    markers_peak[i] = new google.maps.Marker({
        position: new google.maps.LatLng(data_peak[i].lat, data_peak[i].lng),
        icon : 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
        map: map});
   } else {
    markers_peak[i] = new google.maps.Marker({
        position: new google.maps.LatLng(data_peak[i].lat, data_peak[i].lng),
        icon : 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        map: map
    });}} else {
    markers_peak[i] = new google.maps.Marker({
        position: new google.maps.LatLng(data_peak[i].lat, data_peak[i].lng),
        map: map
    });}
    markerInfo(markers_peak[i], data_peak[i].content);
}
for (i = 0; i < data_saddle.length; i++) {
    markers_saddle[i] = new google.maps.Marker({
        position: new google.maps.LatLng(data_saddle[i].lat, data_saddle[i].lng),
        opacity: 0.2,
        map: map
    });
    markerInfo(markers_saddle[i], data_saddle[i].content);
}
for (i = 0; i < data_peak.length; i++) {
var option= document.createElement('option');
if(data_peak[i].cert) {
  if(data_peak[i].missing)
    option.style.color = 'darkyellow';
   else
   option.style.color = 'blue';
} else
	option.style.color = 'red';
option.setAttribute('value', i);
option.innerHTML = data_peak[i].content;
select.appendChild(option);
polylines[i] = new google.maps.Polyline({
   map: map,
	strokeColor:"#00007f",
    strokeOpacity:0.7,
	strokeWeight:2,
    path: [
	    new google.maps.LatLng(data_peak[i].lat, data_peak[i].lng),
	    new google.maps.LatLng(data_saddle[i].lat, data_saddle[i].lng)
	    ]
});
region_rect = new google.maps.Rectangle({
   map: map,
	strokeColor:"#00007f",
   strokeOpacity:1.0,
	strokeWeight:8,
   fillColor: '000000',
   fillOpacity: 0,
    bounds: {
       north:36.1667,
       south:34.5,
       east:140.25,
       west:137.75}});
region_rect = new google.maps.Rectangle({
   map: map,
	strokeColor:"#7f0000",
   strokeOpacity:1.0,
	strokeWeight:4,
   fillColor: '000000',
   fillOpacity: 0,
    bounds: {
       north:36.3333,
       south:34.3333,
       east:140.5,
       west:137.5}});
};
}
function selectSummit(value){
map.panTo(markers_peak[value].position);
};
function markerInfo(marker, name) {
google.maps.event.addListener(marker, 'click', function (event) {
   new google.maps.InfoWindow({
        content: name
    }).open(marker.getMap(), marker);
});
}
google.maps.event.addDomListener(window, 'load', map_canvas);
