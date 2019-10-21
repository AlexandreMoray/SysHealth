
export class Values {
    temperatures = new Array();
    heart_rate = new Array();
    breath = new Array();
    oxygen = new Array();
    position = new Array();

    constructor() {
        this.initValues();
    }

    getRandom(min, max) {
        return(Math.random * (max - min) + min);
    }

    pushValues() {
        this.temperatures.push(this.getRandom(30,45));
        this.heart_rate.push(this.getRandom(50,150));
        this.breath.push(this.getRandom(1,10));
        this.oxygen.push(this.getRandom(10,100));
        this.position.push(this.getRandom(1,4));
    }

    initValues() {
        for(let i=0; i<10; i++) {
            this.pushValues()
        }
    }

    getChartParameters(value) {
        let name = value;
        let selected_data;

        switch(value) {
            case 'temperatures':
                selected_data = this.temperatures;
                break;
            case 'heart_rate':
                selected_data = this.heart_rate;
                break;
            case 'breath':
                selected_data = this.breath;
                break;
            case 'oxygen':
                selected_data = this.oxygen;
                break;
            case 'position':
                selected_data = this.position;
                break;
        }

        return {
            chartOptions: {
                chart: {
                    id: name + 'chart',
                },
                xaxis: {
                    type: 'datetime',
                },
            },
            series: [{
                name: name + 'series',
                data: selected_data
            }]
        }
    }

}
