const axios = require('axios');

async function main() {
            //const currency = process.argv[2].toUpperCase();

        // let currency = 'USD';
        // if(process.argv[2]){
        //     currency = process.argv[2].toUpperCase();
        // } else {
        //     currency = 'USD';
        // }

    const currency = process.argv[2] ? process.argv[2].toUpperCase() : 'USD';

    try {


        const {data} = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');

        if(!data.bpi[currency]){
            throw new Error('Devise inconnue');
        }

        const updatedAt = data.time.updated;
        const rate = data.bpi[currency].rate;
        console.log(`> 1 BTC = ${rate} ${currency} (${updatedAt})`);

    } catch (err) {
        console.log(err.toString());
    }
}

main()
