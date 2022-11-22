// https://openweathermap.org/guide



    fetch(`https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=9733f699725f8f0e46844c1dcd6c1394&units=metric`)
    .then((response) => response.json())
    .then((data) => {

    const dataName = data.name;
    const dataCountry = data.sys.country;
    const dataDescription = data.weather[0].description;
    const dataTemp = data.main.temp;
    const dataIcon = data.weather[0].icon;
    const dataPressure = data.main.pressure;
    const dataHumidity = data.main.humidity;
    const dataWindSpeed = data.wind.speed;
    const dataWindDeg = data.wind.deg;
    const sunrise = data.sys.sunrise;
    const sunset = data.sys.sunset;
    const coordsLon = data.coord.lon;
    const coordsLat = data.coord.lat;

    document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + cityOrCountry + "')"

    // London local time
    const date = new Date();
    const localTime = date.toLocaleTimeString("en-GB", { timeZone: 'Europe/London' });
    const localDateTime = date.toLocaleString("en-GB", { dateStyle: "medium" });

    //Unix timestamp umrechnen für sunrise
    const sunriseCalc = new Date(sunrise * 1000);
    localSunrise = sunriseCalc.toLocaleTimeString("en-GB", { timeZone: 'Europe/London' });
    //Unix timestamp umrechnen für sunrise
    const sunsetCalc = new Date(sunset * 1000);
    localSunset = sunsetCalc.toLocaleTimeString("en-GB", { timeZone: 'Europe/London' });


    // neues object mit den angeforderten daten
        const newObject = {
            localTime: localTime,
            windSpeed: `${dataWindSpeed} m/s, 
            Direction (${dataWindDeg}°)`,
            cloudiness: dataDescription,
            pressure: `${dataPressure} hpa`,
            humidity: `${dataHumidity} %`,
            sunrise: localSunrise,
            sunset: localSunset,
            coords: [`${coordsLat}, ${coordsLon}`]
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
    const localTimeForHtml = document.getElementById('localTime')
    const windSpeed = document.getElementById('windSpeed');
    const cloudiness = document.getElementById('cloudiness');
    const pressure = document.getElementById('pressure');
    const humidity = document.getElementById('humidity');
    const sunriseForHtml = document.getElementById('sunrise');
    const sunsetForHtml = document.getElementById('sunset');
    const geocoords = document.getElementById('geoCoords');
    
    // tabelle beschreiben

    localTimeForHtml.innerText = newObject.localTime;
    windSpeed.innerText = newObject.windSpeed;
    cloudiness.innerText = newObject.cloudiness;
    pressure.innerText = newObject.pressure;
    humidity.innerText = newObject.humidity;
    sunriseForHtml.innerText = newObject.sunrise;
    sunsetForHtml.innerText = newObject.sunset;
    geocoords.innerText = newObject.coords;
    console.log(localTimeForHtml);

    });



const btn = document.getElementById('btnSendUserInput');
let cityOrCountry = "Berlin";
country.innerText = `Weather in ${cityOrCountry}`;

btn.addEventListener(('click'), (event)=> {
    event.preventDefault();

    cityOrCountry = document.getElementById('userInput').value;
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
    const dataWindSpeed = data.wind.speed;
    const dataWindDeg = data.wind.deg;
    const sunrise = data.sys.sunrise;
    const sunset = data.sys.sunset;
    const coordsLon = data.coord.lon;
    const coordsLat = data.coord.lat;

    document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + cityOrCountry + "')"


    // London local time
        const date = new Date();
        const localTime = date.toLocaleTimeString("en-GB", { timeZone: 'Europe/London' });
        const localDateTime = date.toLocaleString("en-GB", { dateStyle: "medium" });

        //Unix timestamp umrechnen für sunrise
        const sunriseCalc = new Date(sunrise * 1000);
        localSunrise = sunriseCalc.toLocaleTimeString("en-GB", { timeZone: 'Europe/London' });
        //Unix timestamp umrechnen für sunrise
        const sunsetCalc = new Date(sunset * 1000);
        localSunset = sunsetCalc.toLocaleTimeString("en-GB", { timeZone: 'Europe/London' });

    // neues object mit den angeforderten daten
        const newObject = {
            localTime: localTime,
            windSpeed: `${dataWindSpeed} m/s, Direction (${dataWindDeg}°)`,
            cloudiness: dataDescription,
            pressure: `${dataPressure} hpa`,
            humidity: `${dataHumidity} %`,
            sunrise: localSunrise,
            sunset: localSunset,
            coords: [`${coordsLat}, ${coordsLon}`]
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
    const localTimeForHtml = document.getElementById('localTime')
    const windSpeed = document.getElementById('windSpeed');
    const cloudiness = document.getElementById('cloudiness');
    const pressure = document.getElementById('pressure');
    const humidity = document.getElementById('humidity');
    const sunriseForHtml = document.getElementById('sunrise');
    const sunsetForHtml = document.getElementById('sunset');
    const geocoords = document.getElementById('geoCoords');
    
    // tabelle beschreiben

    localTimeForHtml.innerText = newObject.localTime;
    windSpeed.innerText = newObject.windSpeed;
    cloudiness.innerText = newObject.cloudiness;
    pressure.innerText = newObject.pressure;
    humidity.innerText = newObject.humidity;
    sunriseForHtml.innerText = newObject.sunrise;
    sunsetForHtml.innerText = newObject.sunset;
    geocoords.innerText = newObject.coords;
    console.log(localTimeForHtml);
    
    });
});
