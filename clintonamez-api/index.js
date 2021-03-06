const express = require('express')
const path = require('path')
const fs = require('fs')
const PORT = 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => {
    console.log('API is listening on 5000');

    // Create the app-initialized file to signal to NGINX the api is ready.
    fs.writeFileSync('../tmp/app-initialized');
  })