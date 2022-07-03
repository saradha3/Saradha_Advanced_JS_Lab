class Weather{
    constructor(city){
        this.apiKey = '6f0fe44027c95b2e22c0281906e3365a';
        this.city = city;
    }

    getWeather(){
        console.log(this.city);
        return new Promise((resolve,reject) => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        }
        );
    }

    changeLocation(city){
        console.log(city);
        this.city = city;
    }
}