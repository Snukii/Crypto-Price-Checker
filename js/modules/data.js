import GetParameters from './getparameters.js';

let symbol = GetParameters.findGetParameter('symbol');


class Data {

    static getData() {

        if (!symbol) symbol = 'BTCUSD';
        symbol = symbol.toUpperCase();

        return fetch(`https://apiv2.bitcoinaverage.com/indices/global/ticker/${symbol}`)
            .then(
                (response) => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }
                    console.log('Got pair data');
                    return response.json();
                }

            )
            .catch((err) => {
                console.log('Fetch Error :-S', err);
            });
    }

    static getSymbols() {

        return fetch(`https://apiv2.bitcoinaverage.com/symbols/indices/ticker`)
            .then(
                (response) => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return response.status;
                    }
                    console.log('Got symbol data');
                    return response.json();
                }

            )
            .catch((err) => {
                console.log('Fetch Error :-S', err);
            });
    }
}

export default Data;
export {
    symbol
};