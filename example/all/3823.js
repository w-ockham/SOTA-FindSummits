function map_canvas() {
 var data_peak = new Array();
 var data_saddle = new Array();
 var polylines = new Array();
data_peak.push({
lat: 25.74255556,
lng: 123.4713333,
cert : true,
missing : false,
content:'JA6/ON-012(JA6/ON-012)(361.3m) 25.74255556,123.4713333[361.3m]'
});
data_saddle.push({
lat: 26.33333333,
lng: 122.5000000,
content:'Saddle[ 0.0m]  26.33333333,122.5000000 [361.3m]'
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
       north:26.1667,
       south:25.1667,
       east:124.25,
       west:122.75}});
region_rect = new google.maps.Rectangle({
   map: map,
	strokeColor:"#7f0000",
   strokeOpacity:1.0,
	strokeWeight:4,
   fillColor: '000000',
   fillOpacity: 0,
    bounds: {
       north:26.3333,
       south:25,
       east:124.5,
       west:122.5}});
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
