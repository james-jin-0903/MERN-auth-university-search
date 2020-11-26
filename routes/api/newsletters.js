const express = require("express");
const router = express.Router();

const Newsletters = require("../../models/Newsletters");

router.post("/add", (req, res) => {
  const newsletters = new Newsletters(req.body);
  newsletters
    .save()
    .then(saveres => {
      res.send("success");
    })
    .catch(error => res.send(false));
});

module.exports = router;
