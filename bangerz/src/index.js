 const express = require('express')
 const axios = require('axios')


 const app = express()

 app.get('/', (req, res) => {
     res.send('Spotify API')
 })

 // https://developer.spotify.com/console/get-recommendations/
 app.listen(3000, console.log(`Serving is running on port 3000`))