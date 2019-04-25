document.addEventListener("DOMContentLoaded", init);
let map;

function init() {
    map = L.map('mapid').setView([50.667656, 4.614325], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Made by Group 5',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1Ijoid291dGVycGFyZG9uIiwiYSI6ImNqdXdjM2ZtbzA1MmgzeXBnMzBhMHZiMmMifQ.s1ZmAn_KOd9X3Hlm2b1z_g'
            }).addTo(map);

    let marker = addMarker({lat:50.667656, lon:4.614325}, "Last known location (2019-04-25 10:15)")
}

function addMarker({lat, lon}, message) {
    let marker = L.marker([lat, lon]).addTo(map);
    marker.bindPopup(message);
}