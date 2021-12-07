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
        $('.cd', html).each(() =>{
          const title =   $(this).text()
          const url =  $(this).find('a').attr('href')
          const h2 = $(this).attr('h2')

          articles.push({
              title, 
              url, 
              h2
          })
        })

        console.log('length is',articles)
        
        
    } catch (error) {
        console.log(error);
        
    } 
    
}
getScraping()


app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})



