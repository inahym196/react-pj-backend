const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .post("/api/v1/tostation",(req,res)=> res.json({
    kanji:"今日は",
    hira:"こんにちは"
  }))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
