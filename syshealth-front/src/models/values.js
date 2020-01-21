import axios from "axios"

export class Values {
    airQuality = new Array();
    humidity = new Array();
    pmTen = new Array();
    pmTwoFive = new Array();
    temp = new Array();

    constructor() {
        this.initApiValues();
        this.subscribeValues();
    }

    initApiValues() {
        axios({ method: "GET", "url": "https://io.adafruit.com/api/v2/StephaneThurneyssen/feeds/airquality/data" })
            .then(result => {
                console.log('init air quality: ');
                console.log(result);
                result.data.forEach(x => {
                    this.airQuality.unshift(x.value);
                })
            })
        axios({ method: "GET", "url": "https://io.adafruit.com/api/v2/StephaneThurneyssen/feeds/humidity/data" })
            .then(result => {
                console.log('init humidity: ');
                console.log(result);
                result.data.forEach(x => {
                    this.humidity.unshift(Math.round(x.value*100)/100);
                })
            })
        axios({ method: "GET", "url": "https://io.adafruit.com/api/v2/StephaneThurneyssen/feeds/pmten/data" })
            .then(result => {
                console.log('init pmTen: ');
                console.log(result);
                result.data.forEach(x => {
                    this.pmTen.unshift(x.value);
                })
            })
        axios({ method: "GET", "url": "https://io.adafruit.com/api/v2/StephaneThurneyssen/feeds/pmtwofive/data" })
            .then(result => {
                console.log('init pmTwoFive: ');
                console.log(result);
                result.data.forEach(x => {
                    this.pmTwoFive.unshift(x.value);
                })
            })
        axios({ method: "GET", "url": "https://io.adafruit.com/api/v2/StephaneThurneyssen/feeds/temp/data" })
            .then(result => {
                console.log('init temp: ');
                console.log(result);
                result.data.forEach(x => {
                    this.temp.unshift(Math.round(x.value*100)/100);
                })
            })
    }

    getRandom(min, max) {
        return(Math.floor(Math.random() * (max - min) + min));
    }

    pushApiValues() {
        axios({ method: "GET", "url": "https://io.adafruit.com/api/v2/StephaneThurneyssen/feeds/airquality/data/retain" })
            .then(result => {
                let x = result.data.split(',')[0]
                console.log('next airQuality: ');
                console.log(x);
                this.airQuality.push(x);
            })
        axios({ method: "GET", "url": "https://io.adafruit.com/api/v2/StephaneThurneyssen/feeds/humidity/data/retain" })
            .then(result => {
                let x = result.data.split(',')[0]
                console.log('next humidity: ');
                console.log(x);
                this.humidity.push((Math.round(x*100)/100));
            })
        axios({ method: "GET", "url": "https://io.adafruit.com/api/v2/StephaneThurneyssen/feeds/pmten/data/retain" })
            .then(result => {
                let x = result.data.split(',')[0]
                console.log('next pmTen: ');
                console.log(x);
                this.pmTen.push(x);
            })
        axios({ method: "GET", "url": "https://io.adafruit.com/api/v2/StephaneThurneyssen/feeds/pmtwofive/data/retain" })
            .then(result => {
                let x = result.data.split(',')[0]
                console.log('next pmTwoFive: ');
                console.log(x);
                this.pmTwoFive.push(x);
            })
        axios({ method: "GET", "url": "https://io.adafruit.com/api/v2/StephaneThurneyssen/feeds/temp/data/retain" })
            .then(result => {
                let x = result.data.split(',')[0]
                console.log('next temp: ');
                console.log(x);
                this.temp.push((Math.round(x*100)/100));
            })

    }

    subscribeValues() {
        setInterval( () => { this.pushApiValues()}, 13000);
    }

    getLastValues() {
        return {
            'airQuality' : this.airQuality[this.airQuality.length-1],
            'humidity' : this.humidity[this.humidity.length-1],
            'pmTen' : this.pmTen[this.pmTen-1],
            'pmTwoFive' : this.pmTwoFive[this.pmTwoFive.length-1],
            'temp' : this.temp[this.temp.length-1],
        }
    }

    getChartParameters(value) {
        let name = value;
        let selected_data;
        let colors;

        switch(value) {
            case 'airQuality':
                selected_data = this.airQuality.slice(-30);
                colors = ['#cc0000'];
                break;
            case 'humidity':
                selected_data = this.humidity.slice(-30);
                colors = ['#ffcc00'];
                break;
            case 'pmTen':
                selected_data = this.pmTen.slice(-30);
                colors = ['#009933'];
                break;
            case 'pmTwoFive':
                selected_data = this.pmTwoFive.slice(-30);
                colors = ['#0000cc'];
                break;
            case 'temp':
                selected_data = this.temp.slice(-30);
                colors = ['#996633'];
                break;
            default:
                throw(new Error("Requested Chart Parameters doesnt correspond to any value type !"));
        }

        return {
            chartOptions: {
                chart: {
                    id: name.toUpperCase(),
                    animations: {
                        enabled: true,
                        easing: 'linear',
                        dynamicAnimation: {
                            speed: 1000
                        }
                    }
                },
                xaxis: {
                    type : "timeline",
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    }
                },
                colors: colors
            },
            series: [{
                name: name + '_series',
                data: selected_data
            }]
        }
    }

}
