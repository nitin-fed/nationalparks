/** @format */

const router = require("express").Router();

router.get("/birds", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = router;
