const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST");

  if ("OPTIONS" === req.method) {
    res.send(200);
  } else {
    next();
  }
};

express()
  .use(express.static(path.join(__dirname, "public")))
  .use(allowCrossDomain)
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .post("/api/v1/tostation", (req, res) =>
    res.json({
      kanji: "今日は",
      hira: "こんにちは",
    })
  )
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
