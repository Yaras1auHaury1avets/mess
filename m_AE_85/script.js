const distances = [
    {
        1 : [700, 1600],
        2 : [1100, 2800],
        3 : [1500, 3900],
        4 : [2000, 4900],
        5 : [2400, 6000],
        6 : [2700, 7500],
        7 : [2900, 7500],

    },
    {
700	:   [444, 3.5],
800	:   [474,	3.4], 
900	:   [504,	3.3], 
1000:	[537,	3.1], 
1100:	[571,	3.0], 
1200:	[606,	2.8], 
1300:	[644,	2.7], 
1400:	[687,	2.4], 
1500:	[735,	2.1], 
1600:	[794,	1.8], 
    },

    {
1100: [430,	6.3],	
1200: [446,	6.1],	
1300: [464,	5.8],	
1400: [482,	5.6],	
1500: [500,	5.4],	
1600: [519,	5.4],	
1700: [538,	5.2],	
1800: [558,	5.0],	
1900: [579,	5.0],	
2000: [600,	4.8],	
2100: [623,	4.4],	
2200: [646,	4.3],	
2300: [671,	4.1],	
2400: [697,	3.9],	
2500: [727,	3.4],	
2600: [758,	3.3],	
2700: [795,	2.8],	
2800: [842,	2.3],	
    },
    {
        1500: [427,	8.0],	
1600: [440,	8.0],	
1700: [452,	8.4],	
1800: [465,	7.4],	
1900: [478,	7.7],	
2000: [491,	7.7],	
2100: [505,	7.5],	
2200: [519,	7.2],	
2300: [533,	7.2],	
2400: [547,	6.9],	
2500: [562,	7.0],	
2600: [577,	6.8],	
2700: [592,	6.5],	
2800: [608,	6.5],	
2900: [625,	6.0],	
3000: [642,	6.0],	
3100: [660,	5.5],	
3200: [678,	5.6],	
3300: [699,	5.0],	
3400: [720,	4.9],	
3500: [741,	4.8],	
3600: [766,	4.2],	
3700: [795,	3.8],	
3800: [829,	3.3],	
3900: [879,	2.8],	
    },

    {
        2000: [436,	9.5],	
2100: [446,	9.5],	
2200: [456,	10.6],	
2300: [467,	9.2],	
2400: [477,	10.1],	
2500: [487,	10.1],	
2600: [498,	9.1],	
2700: [508,	9.7],	
2800: [519,	9.2],	
2900: [531,	8.7],	
3000: [542,	9.2],	
3100: [553,	9.2],	
3200: [565,	8.1],	
3300: [577,	8.4],	
3400: [589,	8.6],	
3500: [601,	8.4],	
3600: [615,	7.5],	
3700: [628,	7.5],	
3800: [641,	7.9],	
3900: [655,	7.3],	
4000: [670,	6.8],	
4100: [685,	6.8],	
4200: [702,	6.2],	
4300: [718,	6.5],	
4400: [735,	6.0],	
4500: [755,	5.4],	
4600: [776,	5.0],	
4700: [799,	4.8],	
4800: [826,	4.3],	
4900: [863,	3.7],	
    },
    {
2400: [429,	12.0],	
2500: [437,	12.7],	
2600: [446,	11.8],	
2700: [454,	12.7],	
2800: [462,	12.5],	
2900: [470,	12.1],	
3000: [479,	11.8],	
3100: [487,	12.5],	
3200: [496,	11.3],	
3300: [504,	12.7],	
3400: [513,	11.1],	
3500: [522,	11.7],	
3600: [531,	11.1],	
3700: [540,	11.3],	
3800: [550,	10.1],	
3900: [561,	9.8],	
4000: [568,	14.6],	
4100: [578,	10.1],	
4200: [587,	10.8],	
4300: [598,	9.5],	
4400: [608,	9.7],	
4500: [618,	10.1],	
4600: [630,	8.8],	
4700: [641,	9.4],	
4800: [652,	9.2],	
4900: [664,	8.6],	
5000: [676,	8.6],	
5100: [688,	8.1],	
5200: [701,	8.1],	
5300: [715,	7.5],	
5400: [729,	7.7],	
5500: [745,	6.5],	
5600: [760,	7.2],	
5700: [778,	6.0],	
5800: [796,	5.9],	
5900: [818,	5.5],	
6000: [845,	4.6],	
    },
    {
        2700: [419,	15.5],	
        2800: [426,	15.5],	
        2900: [433,	14.6],	
        3000: [439,	15.5],	
        3100: [446,	15.5],	
        3200: [453,	14.3],	
        3300: [459,	15.5],	
        3400: [466,	14.3],	
        3500: [473,	14.3],	
        3600: [480,	14.3],	
        3700: [488,	13.4],	
        3800: [495,	14.3],	
        3900: [502,	13.4],	
        4000: [509,	14.3],	
        4100: [517,	12.5],	
        4200: [524,	14.3],	
        4300: [532,	13.4],	
        4400: [539,	14.3],	
        4500: [547,	11.8],	
        4600: [555,	13.4],	
        4700: [563,	11.8],	
        4800: [571,	13.4],	
        4900: [580,	11.1],	
        5000: [587,	13.4],	
        5100: [596,	11.8],	
        5200: [605,	11.1],	
        5300: [613,	12.5],	
        5400: [622,	10.6],	
        5500: [631,	11.1],	
        5600: [641,	10.6],	
        5700: [650,	10.6],	
        5800: [660,	10.6],	
        5900: [670,	10.0],	
        6000: [680,	9.5],	
        6100: [691,	9.5],	
        6200: [702,	9.1],	
        6300: [713,	9.2],	
        6400: [725,	8.4],	
        6500: [736,	8.7],	
        6600: [749,	7.7],	
        6700: [763,	7.5],	
        6800: [776,	7.7],	
        6900: [791,	6.5],	
        7000: [807,	6.3],	
        7100: [824,	6.1],	
        7200: [843,	5.2],	
        7300: [864,	4.9],	
        7400: [889,	4.2],	
        7500: [925,	3.1],	
        
    },
    {
        2900: [421,	16.5],	
        3000: [427,	16.7],	
        3100: [433,	15.5],	
        3200: [439,	16.7],	
        3300: [446,	15.5],	
        3400: [452,	16.7],	
        3500: [458,	15.5],	
        3600: [465,	15.5],	
        3700: [472,	13.4],	
        3800: [478,	16.7],	
        3900: [485,	15.5],	
        4000: [492,	14.6],	
        4100: [498,	15.5],	
        4200: [506,	13.4],	
        4300: [512,	15.5],	
        4400: [520,	13.4],	
        4500: [526,	15.5],	
        4600: [534,	13.4],	
        4700: [540,	15.5],	
        4800: [548,	12.5],	
        4900: [555,	15.5],	
        5000: [563,	11.8],	
        5100: [570,	14.3],	
        5200: [579,	11.8],	
        5300: [586,	14.3],	
        5400: [594,	11.8],	
        5500: [602,	13.4],	
        5600: [610,	11.8],	
        5700: [618,	12.7],	
        5800: [627,	11.8],	
        5900: [636,	11.3],	
        6000: [644,	11.8],	
        6100: [653,	11.1],	
        6200: [663,	10.6],	
        6300: [672,	10.6],	
        6400: [681,	11.3],	
        6500: [692,	9.5],	
        6600: [702,	10.0],	
        6700: [712,	9.5],	
        6800: [723,	9.2],	
        6900: [735,	8.7],	
        7000: [746,	9.1],	
        7100: [758,	8.4],	
        7200: [771,	7.4],	
        7300: [784,	7.7],	
        7400: [799,	6.9],	
        7500: [814,	6.5],	
        
    }
];

const button = document.querySelector("#button");
const distance = document.querySelector("#distance");
const fire = document.querySelector("#fire");
const sight = document.querySelector("#sight");
const delta = document.querySelector("#delta");
const reset = document.querySelector("#reset");

button.onclick = getMortarSight;
reset.onclick = resetValues;


function getMortarSight(){
let fireValue = fire.value;
let distanceValue = distance.value;
if(checkInputValues(distanceValue, fireValue)){
    let sightAndDelta = (fireValue==="") ? getFireAndSight(distanceValue) : getOnlySight(distanceValue, fireValue);
    sight.innerText = sightAndDelta[0];
    delta.innerText = sightAndDelta[1];
    }
}


function checkInputValues(distanceValue, fireValue){
    let distanceInNumber = Number(distanceValue);
    let fireInNumber = fireValue==="" ? 1 : Number(fireValue);
    if(isNaN(distanceInNumber)||distanceInNumber<700) {
        sight.innerText = "ВВЕДИ КОРРЕКТНОЕ ЗНАЧЕНИЕ РАССТОЯНИЯ";
        return false;
    } else if(distanceInNumber>7500){
        sight.innerText = "ТАБЛИЦА ТОЛЬКО ДО 7500м, НА 7 ПОРОХЕ ЭТО ПРИЦЕЛ 814";
        delta.innerText = "6.5";
        return false;
     }
     else if(isNaN(fireInNumber)||fireInNumber<1||fireInNumber>7||Math.floor(fireInNumber)!=fireInNumber){
        sight.innerText = "НЕКОРРЕКТНОЕ ЗНАЧЕНИЕ ПОРОХА. ВВЕДИ ОТ 1 ДО 7 ИЛИ ВООБЩЕ УБЕРИ, ПРОГА САМА ПОСЧИТАЕТ";
        return false;
     }
return true;
}

function getOnlySight(distanceValue, fireValue){
if(checkFire(distanceValue, fireValue)){
    return ["УКАЗАННЫЙ ПОРОХ НЕ ПОДХОДИТ ДЛЯ ТРЕБУЕМОЙ ДИСТАНЦИИ", "-"];
}
if(distanceValue in distances[fireValue]) {
    return distances[fireValue][distanceValue];
}
return getSight(distanceValue, fireValue);
}

function getSight(distanceValue, fireValue){
let nearestLowDistanceValue = distanceValue - distanceValue%100;
let nearestHighDistanceValue = nearestLowDistanceValue + 100;
let addToNearestLowSight = (distances[fireValue][nearestHighDistanceValue][0] - distances[fireValue][nearestLowDistanceValue][0])*(distanceValue%100)/100;
let resultSight = distances[fireValue][nearestLowDistanceValue][0] + Math.floor(addToNearestLowSight);
return [resultSight, distances[fireValue][nearestLowDistanceValue][1]];
}



function checkFire(distanceValue, fireValue){
    return distances[0][fireValue][0]>distanceValue||distances[0][fireValue][1]<distanceValue;
    }

function getFireAndSight(distanceValue){
let validFire = 0;
for (let i=1; i<8;i++){
    if(distanceValue>=distances[0][i][0] && distanceValue<=distances[0][i][1]){
        validFire = i;
        break;
    }
}
document.getElementById("fire").value = validFire;
return getSight(distanceValue, validFire);
}

function resetValues(){
    document.getElementById("distance").value = "";
    document.getElementById("fire").value = "";
    sight.innerText = "-";
    delta.innerText = "-";
}