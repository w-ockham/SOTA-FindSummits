function map_canvas() {
 var data_peak = new Array();
 var data_saddle = new Array();
 var polylines = new Array();
data_peak.push({
lat: 33.13711111,
lng: 139.7660000,
cert : true,
missing : false,
content:'Nishiyama  (Hachijoufuji)(JA/TK-010)(853.6m) 33.13711111,139.7660000[853.6m]'
});
data_saddle.push({
lat: 33.66666667,
lng: 138.5000000,
content:'Saddle[ 0.0m]  33.66666667,138.5000000 [853.6m]'
});
data_peak.push({
lat: 33.12566667,
lng: 139.6882222,
cert : true,
missing : false,
content:'Taiheizan(JA/TK-017)(613.0m) 33.12566667,139.6882222[613.0m]'
});
data_saddle.push({
lat: 33.11555556,
lng: 139.6988889,
content:'Saddle[ 0.0m]  33.11555556,139.6988889 [613.0m]'
});
data_peak.push({
lat: 33.09211111,
lng: 139.8121111,
cert : true,
missing : false,
content:'Miharayama(JA/TK-016)(700.4m) 33.09211111,139.8121111[625.2m]'
});
data_saddle.push({
lat: 33.11166667,
lng: 139.7936667,
content:'Saddle[75.2m]  33.11166667,139.7936667 [625.2m]'
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
       north:33.5,
       south:32.5,
       east:140.25,
       west:138.75}});
region_rect = new google.maps.Rectangle({
   map: map,
	strokeColor:"#7f0000",
   strokeOpacity:1.0,
	strokeWeight:4,
   fillColor: '000000',
   fillOpacity: 0,
    bounds: {
       north:33.6667,
       south:32.3333,
       east:140.5,
       west:138.5}});
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
