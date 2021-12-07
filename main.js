const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const { html } = require('cheerio/lib/api/manipulation');
const express = require('express')

const app = express()


const getScraping = async() => {

    try {
        const response = await axios('https://www.theguardian.com/uk')
        const $ = cheerio.load(response.data)
        $('.fc-item__title', html).each(() =>{
            $(this).text()
        })
        
        
    } catch (error) {
        console.log(error);
        
    } 
    
}
getScraping()


app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})



