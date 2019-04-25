document.addEventListener("DOMContentLoaded", init);

let map;
let LouvainLaNeuve = [50.667656, 4.614325];

function init() {
    map = L.map('mapid').setView(LouvainLaNeuve, 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Made by Group 5',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1Ijoid291dGVycGFyZG9uIiwiYSI6ImNqdXdjM2ZtbzA1MmgzeXBnMzBhMHZiMmMifQ.s1ZmAn_KOd9X3Hlm2b1z_g'
            }).addTo(map);

    let data = [{coords:{lat:50.68, lon:4.62}, datetime:"2019-04-05 10:30"},{coords:{lat:50.59, lon:4.60}, datetime:"2019-04-05 10:25"}]

    displayData(data);
}

function displayData(data) {
    for (let i = data.length; i > 0; i--) {
        marker = addMarker(data[i].coords, "Seen on " + data[i].datetime)
    }

    map.setView(data[0]);
}

function addMarker({lat, lon}, message) {
    let marker = L.marker([lat, lon]).addTo(map);
    marker.bindPopup(message);
}