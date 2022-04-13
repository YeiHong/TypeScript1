import { dataSeries } from "./data.js";
var seriesTbody = document.getElementById("series");
var avgSeasonsElem = document.getElementById("avg-seasons");
cargarSeries(dataSeries);
avgSeasonsElem.innerHTML = " " + getAvgSeasons(dataSeries);
function cargarSeries(series) {
    console.log('Cargando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML =
            "<td>" + serie.id + "</td>\n            <td><a href=\"" + serie.link + "\">" + serie.title + "</a></td>\n            <td>" + serie.channel + "</td>\n            <td>" + serie.seasons + "</td>";
        seriesTbody.appendChild(trElement);
    });
}
function getAvgSeasons(series) {
    var avgSeasons = 0;
    series.forEach(function (serie) {
        avgSeasons = avgSeasons + serie.seasons;
    });
    return avgSeasons / series.length;
}
