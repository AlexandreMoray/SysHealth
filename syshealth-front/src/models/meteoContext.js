import axios from "axios"

export class MeteoContext {
    constructor() {}

    getContext() {
        return axios({ method: "GET", "url": "http://api.openweathermap.org/data/2.5/weather?q=Lyon&APPID=95bda451616ad048af85f4a5aba1a554" })
            .then(result => {
                return result.data.main
        }, error => {
            console.error(error);
        })
    }
}
