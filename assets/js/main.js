// https://openweathermap.org/guide

const btn = document.getElementById('btnSendUserInput');

btn.addEventListener(('click'), (event)=> {
    event.preventDefault();

    const cityOrCountry = document.getElementById('userInput').value;
    console.log(cityOrCountry);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityOrCountry}&appid=9733f699725f8f0e46844c1dcd6c1394&units=metric`)
    .then((response) => response.json())
    .then((data) => {

    console.log(data);

    const dataName = data.name;
    const dataCountry = data.sys.country;
    const dataDescription = data.weather[0].description;
    const dataTemp = data.main.temp;
    const dataIcon = data.weather[0].icon;
    const dataPressure = data.main.pressure;
    const dataHumidity = data.main.humidity;
    const dataCloudsAll = data.clouds.all;
    const dataWindSpeed = data.wind.speed;
    const dataWindDeg = data.wind.deg;
    const dataDt = data.dt;

    console.log(dataCountry);

    // neues object mit den angeforderten daten
    const newObject = {
        Pressure: `${dataPressure} hpa`,
        Humidity: `${dataHumidity} %`,
        CloudsAll: dataCloudsAll,
        WindSpeed: `${dataWindSpeed} m/s`,
        WindDeg: dataWindDeg
    };

    //elemente kreieren für heading,icon und temperatur
    const headingCity = document.getElementById('city');
    const iconAndTemp = document.getElementById('iconAndTemp');

    const imgIcon = document.createElement('img');
    const pForTemp = document.createElement('p');
    imgIcon.src = `http://openweathermap.org/img/wn/${dataIcon}@2x.png`;
    
    headingCity.innerText = `Weather in ${dataName}`;
    pForTemp.innerText = `${dataTemp} °`;

    iconAndTemp.appendChild(imgIcon);
    iconAndTemp.appendChild(pForTemp);


    //wetterbeschreibung
    const description = document.getElementById('description');
    description.innerText = dataDescription;

    // country
    const country = document.getElementById('country');
    country.innerText = dataCountry;


    // tabelle
    let tableForWeatherApp = document.getElementById('tableForWeatherApp');

    const table = document.createElement('table');

    for (let key in newObject) {

        const tableTr = document.createElement('tr');
        const tableTd = document.createElement('td');
        tableTd.classList.add('tdLeft');
        const tableTd1 = document.createElement('td');
        tableTd1.classList.add('tdRight');

        tableTr.appendChild(tableTd);
        tableTr.appendChild(tableTd1);
        tableTd.innerText = key;
        tableTd1.innerText = newObject[key];
        table.appendChild(tableTr);
    }

    tableForWeatherApp.appendChild(table);
    });
});
