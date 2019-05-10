import Data from './data.js';

let symbols = [];

class Populate {

    constructor() {
        this.populateSymbol();
    }

    async populate(name, arr) {
        let select = document.querySelector(name);
        let options = arr;
        for (let i = 0; i < options.length; i++) {
            let opt = options[i];
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            select.appendChild(el);
        }
    }

    async populateSymbol() {

        let symbolData = await Data.getSymbols();

        for (let c of Object.keys(symbolData.local.symbols)) {
            let data = symbolData.local.symbols[c];
            symbols.push(data);
        }

        symbols.sort();
        this.populate('.symbolDd', symbols)
    }



}
export default Populate;