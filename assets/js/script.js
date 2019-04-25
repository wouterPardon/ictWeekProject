document.addEventListener("DOMContentLoaded", init);

function init() {
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1Ijoid291dGVycGFyZG9uIiwiYSI6ImNqdXdjM2ZtbzA1MmgzeXBnMzBhMHZiMmMifQ.s1ZmAn_KOd9X3Hlm2b1z_g'
            }).addTo(mymap);

    var marker = L.marker([51.5, -0.09]).addTo(mymap);
}