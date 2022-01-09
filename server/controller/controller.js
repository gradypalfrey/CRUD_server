var User = require("../model/model");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Request cannot be empty" });
    return;
  }
  const user = new User({
    name: req.body.name,
    quantity: req.body.quantity,
  });
  user
    .save(user)
    .then((data) => {
      res.redirect("/add-user");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Creation Error",
      });
    });
};

exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    User.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Error Not found" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Internal Error" });
      });
  } else {
    User.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Internal Error" });
      });
  }
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Request cannot be empty" });
  }
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Internal Error" });
    });
};

exports.delete = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found" });
      } else {
        res.send({ message: "User deleted" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete",
      });
    });
};
