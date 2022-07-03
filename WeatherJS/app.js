const weather = new Weather('Mumbai');
getWeather();

const weather_report = document.getElementById('weather_report');
const error = document.getElementById('error');

function getWeather(){
    weather.getWeather()
    .then(data => {
        console.log(data);
        if(error.style.display === 'block'){
            error.style.display = 'none';
            weather_report.style.display = 'block';
        }
        document.getElementById('w-location').innerHTML = `${data.name}`;
        document.getElementById('w-desc').innerHTML = `${data.weather[0].main}`;
        document.getElementById('w-string').innerHTML = `${Math.floor(data.main.temp-273.15)}&deg; c`;
        let iconURL = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
        document.getElementById('w-icon').setAttribute('src',iconURL);
        document.getElementById('w-humidity').innerHTML = `Relative Humidity : ${data.main.humidity}%`;
        document.getElementById('w-feels-like').innerHTML = `Feels Like : ${Math.floor(data.main.feels_like - 273.15)}&deg; c`;
        document.getElementById('w-min-max').innerHTML = `Min/Max Temperature : ${Math.floor(data.main.temp_min-273.15)}/${Math.floor(data.main.temp_max-273.15)}&deg; c`;
        let date = new Date(data.dt);
        document.getElementById('w-time').innerHTML = `Date : ${new Date().toDateString()}`;

    })
    .catch(err => {
        console.log(err)
        weather_report.style.display = 'none';
        error.style.display = 'block';
    });
}

const change_city = document.getElementById('change-city');

change_city.addEventListener('input', runEvent);

function runEvent(e){
    console.log(e.target.value);
    weather.changeLocation(e.target.value);
    getWeather();
}

