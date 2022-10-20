const express = require('express')
const cors= require('cors')
const app = express()
const port =process.env.PORT || 500
const catagoris=require('./ddts/pakege.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

  app.get('/news-catagoryy', (req, res)=>{
    res.send(catagoris)
  });
  
  app.listen(port, () => {
    console.log('site running', port)
  });