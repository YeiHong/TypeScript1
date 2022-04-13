import { Serie } from "./serie.js";
import { dataSeries } from "./data.js";

let seriesTbody : HTMLElement = document.getElementById("series")!;
let avgSeasonsElem : HTMLElement = document.getElementById("avg-seasons")!;

cargarSeries(dataSeries);
avgSeasonsElem.innerHTML = `${getAvgSeasons(dataSeries)}`;

function cargarSeries(series: Serie[]): void{
    console.log('Cargando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = 
            `<td>${serie.id}</td>
            <td><a href="${serie.link}">${serie.title}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function getAvgSeasons(series: Serie[]): number{
    let avgSeasons: number = 0;
    series.forEach((serie)=>{
        avgSeasons = avgSeasons + serie.seasons;
    });
    return avgSeasons/series.length;
}
