
export class Values {
    temperatures = new Array();
    heart_rate = new Array();
    breath = new Array();
    oxygen = new Array();
    position = new Array();

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

}
