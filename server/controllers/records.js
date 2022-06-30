const models = require("../models/records");

exports.searchRecords = (req, res) => {
  models
    .searchRecords(req.query, req.cookies.userId)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log("searchRecords err", err);
      res.status(404).send(err);
    });
};

exports.addRecord = (req, res) => {
  models
    .addRecord(req.body, req.cookies.userId)
    .then((response) => {
      // console.log("login response", response);
      res.send(response);
    })
    .catch((err) => {
      console.log("updateRecord err", err);
      res.status(405).send(err);
    });
};

exports.updateRecord = (req, res) => {
  models
    .updateRecord(req.body, req.cookies.userId)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log("updateRecord err", err);
      res.status(405).send(err);
    });
};

exports.removeRecord = (req, res) => {
  models
    .removeRecord(req.body, req.cookies.userId, req.params.problem_id ,)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log("removeRecord err", err);
      res.status(406).send(err);
    });
};
