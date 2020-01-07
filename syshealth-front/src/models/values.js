
export class Values {
    temperatures = new Array();
    heart_rate = new Array();
    breath = new Array();
    oxygen = new Array();
    position = new Array();

    constructor() {
        this.initValues();
        this.subscribeValues();
    }

    getRandom(min, max) {
        return(Math.floor(Math.random() * (max - min) + min));
    }

    pushValues() {
        this.temperatures.push(this.getRandom(36,39));
        this.heart_rate.push(this.getRandom(35,120));
        this.breath.push(this.getRandom(1,10));
        this.oxygen.push(this.getRandom(10,100));
        this.position.push(this.getRandom(1,4));
    }

    initValues() {
        for(let i=0; i<10; i++) {
            this.pushValues()
        }
    }

    subscribeValues() {
        setInterval( () => { this.pushValues() }, 2000);
    }

    getLastValues() {
        return {
            'temperature' : this.temperatures[this.temperatures.length-1],
            'heart_rate' : this.heart_rate[this.heart_rate.length-1],
            'breath' : this.breath[this.breath.length-1],
            'oxygen' : this.oxygen[this.oxygen.length-1],
            'position' : this.position[this.position.length-1],
        }
    }

    getChartParameters(value) {
        let name = value;
        let selected_data;
        let colors;

        switch(value) {
            case 'temperatures':
                selected_data = this.temperatures.slice(-10);
                colors = ['#cc0000'];
                break;
            case 'heart_rate':
                selected_data = this.heart_rate.slice(-10);
                colors = ['#ffcc00'];
                break;
            case 'breath':
                selected_data = this.breath.slice(-10);
                colors = ['#009933'];
                break;
            case 'oxygen':
                selected_data = this.oxygen.slice(-10);
                colors = ['#0000cc'];
                break;
            case 'position':
                selected_data = this.position.slice(-10);
                colors = ['#996633'];
                break;
            default:
                throw(new Error("Requested Chart Parameters doesnt correspond to any value type !"));
        }

        return {
            chartOptions: {
                chart: {
                    id: name.toUpperCase(),
                },
                xaxis: {
                    type : "timeline"
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
