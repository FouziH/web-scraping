const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const { html } = require('cheerio/lib/api/manipulation');
const express = require('express')

const app = express()


const getScraping = async() => {

    try {
        const response = await axios('https://www.cnn.com/')
        const $ = cheerio.load(response.data)
        const articles = [];
        $('.cd cd--card cd--article cd--idx-0 cd--large cd--vertical cd--has-siblings cd--has-media cd--media__image cd--has-banner', html).each(() =>{
          const title =   $(this).text()
          const url =  $(this).find('a').attr('href')

          articles.push({
              title, 
              url
          })
        })

        console.log('length is',articles.length)
        
        
    } catch (error) {
        console.log(error);
        
    } 
    
}
getScraping()


app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})



