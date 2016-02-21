function map_canvas() {
 var data_peak = new Array();
 var data_saddle = new Array();
 var polylines = new Array();
data_peak.push({
lat: 28.11988889,
lng: 129.1652222,
cert : false,
missing : false,
content:'U-PL48nc98(151.6m) 28.11988889,129.1652222[151.6m]'
});
data_saddle.push({
lat: 28.10922222,
lng: 129.1737778,
content:'Saddle[ 0.0m]  28.10922222,129.1737778 [151.6m]'
});
data_peak.push({
lat: 27.77877778,
lng: 128.9833333,
cert : true,
missing : false,
content:'Inokawadake(JA6/KG-038)(643.3m) 27.77877778,128.9833333[643.3m]'
});
data_saddle.push({
lat: 28.10877778,
lng: 129.3786667,
content:'Saddle[ 0.0m]  28.10877778,129.3786667 [643.3m]'
});
data_peak.push({
lat: 27.88122222,
lng: 128.2224444,
cert : true,
missing : false,
content:'JA6/ON-035(JA6/ON-035)(211.4m) 27.88122222,128.2224444[211.4m]'
});
data_saddle.push({
lat: 27.86022222,
lng: 128.2342222,
content:'Saddle[ 0.0m]  27.86022222,128.2342222 [211.4m]'
});
data_peak.push({
lat: 27.36666667,
lng: 128.5664444,
cert : false,
missing : false,
content:'U-PL47gi78(244.7m) 27.36666667,128.5664444[244.7m]'
});
data_saddle.push({
lat: 27.32766667,
lng: 128.5663333,
content:'Saddle[ 0.0m]  27.32766667,128.5663333 [244.7m]'
});
data_peak.push({
lat: 28.02922222,
lng: 129.1593333,
cert : true,
missing : false,
content:'JA6/KG-129(JA6/KG-129)(292.4m) 28.02922222,129.1593333[292.4m]'
});
data_saddle.push({
lat: 28.01377778,
lng: 129.1498889,
content:'Saddle[ 0.0m]  28.01377778,129.1498889 [292.4m]'
});
data_peak.push({
lat: 28.08244444,
lng: 129.2206667,
cert : false,
missing : false,
content:'U-PL48ob69(325.8m) 28.08244444,129.2206667[325.8m]'
});
data_saddle.push({
lat: 28.06200000,
lng: 129.3183333,
content:'Saddle[ 0.0m]  28.06200000,129.3183333 [325.8m]'
});
data_peak.push({
lat: 28.16655556,
lng: 129.2025556,
cert : true,
missing : true,
content:'(Missing)JA6/KG-122(JA6/KG-122)(313.9m) 28.16655556,129.2025556[22.5m]'
});
data_saddle.push({
lat: 28.16700000,
lng: 129.2006667,
content:'Saddle(291.4m)  28.16700000,129.2006667 [22.5m]'
});
data_peak.push({
lat: 28.09811111,
lng: 129.2296667,
cert : true,
missing : true,
content:'(Missing)JA6/KG-121(JA6/KG-121)(323.9m) 28.09811111,129.2296667[123.9m]'
});
data_saddle.push({
lat: 28.09111111,
lng: 129.2260000,
content:'Saddle(200.0m)  28.09111111,129.2260000 [123.9m]'
});
data_peak.push({
lat: 28.03744444,
lng: 129.2207778,
cert : true,
missing : false,
content:'JA6/KG-102(JA6/KG-102)(401.9m) 28.03744444,129.2207778[401.9m]'
});
data_saddle.push({
lat: 28.00511111,
lng: 129.2576667,
content:'Saddle[ 0.0m]  28.00511111,129.2576667 [401.9m]'
});
data_peak.push({
lat: 28.02244444,
lng: 129.2437778,
cert : true,
missing : false,
content:'JA6/KG-135(JA6/KG-135)(258.2m) 28.02244444,129.2437778[191.2m]'
});
data_saddle.push({
lat: 28.02477778,
lng: 129.2338889,
content:'Saddle[67.0m]  28.02477778,129.2338889 [191.2m]'
});
data_peak.push({
lat: 27.87055556,
lng: 128.9280000,
cert : true,
missing : false,
content:'JA6/KG-058(JA6/KG-058)(530.9m) 27.87055556,128.9280000[419.6m]'
});
data_saddle.push({
lat: 27.82311111,
lng: 128.9258889,
content:'Saddle[111.3m]  27.82311111,128.9258889 [419.6m]'
});
data_peak.push({
lat: 27.73844444,
lng: 128.9454444,
cert : true,
missing : false,
content:'JA6/KG-097(JA6/KG-097)(412.3m) 27.73844444,128.9454444[203.7m]'
});
data_saddle.push({
lat: 27.73877778,
lng: 128.9677778,
content:'Saddle[208.6m]  27.73877778,128.9677778 [203.7m]'
});
data_peak.push({
lat: 27.79922222,
lng: 128.9417778,
cert : false,
missing : false,
content:'U-PL47lt31(434.5m) 27.79922222,128.9417778[156.7m]'
});
data_saddle.push({
lat: 27.79877778,
lng: 128.9534444,
content:'Saddle[277.8m]  27.79877778,128.9534444 [156.7m]'
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
       north:28.1667,
       south:27.1667,
       east:129.25,
       west:127.75}});
region_rect = new google.maps.Rectangle({
   map: map,
	strokeColor:"#7f0000",
   strokeOpacity:1.0,
	strokeWeight:4,
   fillColor: '000000',
   fillOpacity: 0,
    bounds: {
       north:28.3333,
       south:27,
       east:129.5,
       west:127.5}});
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
