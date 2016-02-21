function map_canvas() {
 var data_peak = new Array();
 var data_saddle = new Array();
 var polylines = new Array();
data_peak.push({
lat: 26.37433333,
lng: 126.7638889,
cert : false,
missing : false,
content:'U-PL36ji19(315.8m) 26.37433333,126.7638889[315.8m]'
});
data_saddle.push({
lat: 26.59922222,
lng: 127.2401111,
content:'Saddle[ 0.0m]  26.59922222,127.2401111 [315.8m]'
});
data_peak.push({
lat: 26.36011111,
lng: 127.1477778,
cert : true,
missing : false,
content:'Ootake(JA6/ON-043)(177.8m) 26.36011111,127.1477778[177.8m]'
});
data_saddle.push({
lat: 26.34833333,
lng: 127.1464444,
content:'Saddle[ 0.0m]  26.34833333,127.1464444 [177.8m]'
});
data_peak.push({
lat: 26.16733333,
lng: 127.2354444,
cert : true,
missing : false,
content:'JA6/ON-025(JA6/ON-025)(270.8m) 26.16733333,127.2354444[270.8m]'
});
data_saddle.push({
lat: 26.29100000,
lng: 126.8104444,
content:'Saddle[ 0.0m]  26.29100000,126.8104444 [270.8m]'
});
data_peak.push({
lat: 26.21855556,
lng: 127.2457778,
cert : true,
missing : false,
content:'JA6/ON-034(JA6/ON-034)(213.3m) 26.21855556,127.2457778[213.3m]'
});
data_saddle.push({
lat: 26.20811111,
lng: 127.2430000,
content:'Saddle[ 0.0m]  26.20811111,127.2430000 [213.3m]'
});
data_peak.push({
lat: 26.31300000,
lng: 126.7826667,
cert : true,
missing : false,
content:'JA6/ON-023(JA6/ON-023)(286.3m) 26.31300000,126.7826667[257.9m]'
});
data_saddle.push({
lat: 26.33277778,
lng: 126.7856667,
content:'Saddle[28.4m]  26.33277778,126.7856667 [257.9m]'
});
data_peak.push({
lat: 26.37711111,
lng: 126.7701111,
cert : true,
missing : true,
content:'(Missing)JA6/ON-018(JA6/ON-018)(309.1m) 26.37711111,126.7701111[33.8m]'
});
data_saddle.push({
lat: 26.37633333,
lng: 126.7677778,
content:'Saddle(275.3m)  26.37633333,126.7677778 [33.8m]'
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
       north:26.8333,
       south:25.8333,
       east:127.25,
       west:125.75}});
region_rect = new google.maps.Rectangle({
   map: map,
	strokeColor:"#7f0000",
   strokeOpacity:1.0,
	strokeWeight:4,
   fillColor: '000000',
   fillOpacity: 0,
    bounds: {
       north:27,
       south:25.6667,
       east:127.5,
       west:125.5}});
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
