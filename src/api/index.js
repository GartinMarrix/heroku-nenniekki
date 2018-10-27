const express = require("express");
const router = express.Router();
const greeting = require("../logic/index");


router.options("/", (req, res) => {
  const options = {
    options: { get: ["/api/greeting", "/api/greeting/{NAME}"] }
  };
  res.status(200).send(options);
});

router.get("/greeting/:name", (req, res) => {
  res.status(200).send({ greeting: greeting(req.params.name) });
});

router.get("/", (req, res) => {
  res.status(200).send('greeting from the API');
});
module.exports = router;
