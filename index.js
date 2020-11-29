const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get("/api/v1/data",(req,res)=> res.json({method:" get "}))
  .post("/api/v1/data",(req,res)=> res.json({method:" post "}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
