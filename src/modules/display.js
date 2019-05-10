import Data from './data.js';

class Display {

    constructor() {
        this.displayData()
    }

    async displayData() {

        let data = await Data.getData();

        if (data) {

            let splitSymbol = data.display_symbol.split('-');
            let crypto = splitSymbol[0];
            let fiat = splitSymbol[1];

            document.querySelector('.crypto').innerHTML = `1 ${crypto} = ${data.ask} ${fiat}`;

            document.querySelector('.timestamp').innerHTML = `Checked at: ${data.display_timestamp}`;
        } else {
            document.querySelector('.crypto').innerHTML = "Currently not available, try another pair.";
        }

    }

}

export default Display;