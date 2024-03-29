const router = require("express").Router();
var kafka = require("../kafka/client");

router.get("/userprofile/:email", function (req, res) {
  msg = {};
  msg.path = "userprofile";
  msg.params = req.params;
  kafka.make_request("user", msg, (err, results) => {
    res.status(results.status).send(results.data);
  });
});

router.post("/updateprofile", function (req, res) {
  msg = {};
  msg.path = "updateprofile";
  msg.body = req.body;
  kafka.make_request("user", msg, (err, results) => {
    res.status(results.status).send(results.data);
  });
});

router.get("/ownerdetails/:shopname", function (req, res) {
  msg = {};
  msg.path = "ownerdetails";
  msg.shopname = req.params.shopname;
  kafka.make_request("user", msg, (err, results) => {
    res.status(results.status).send(results.data);
  });
});

module.exports = router;
