var Userdb = require('../model/model')

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty!"})
        return;
    }
    const user = new Userdb({
        name: req.body.name,
        quantity: req.body.quantity
    })
    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/add-user')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured during create operation."
            })
        })
}

exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id
        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({message:"Not found"})
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({message: "Error retrieving"})
            })
    } else {
        Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({message: err.message || "Error occured while retreiving information."})
        })
    }
}

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400)
        .send({message: "Data to update cannot be empty"})
    }
    Userdb.findByIdAndUpdate(req.params.id, req.body)
        .then(data => {
            if (!data) {
                res.status(404).send({message: 'Cannot update'})
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({message: 'Error updating'})
        })
}

exports.delete = (req, res) => {
    Userdb.findByIdAndDelete(req.params.id)
        .then(data => {
            if (!data) {
                res.status(404).send({message: 'Cannot delete'})
            } else {
                res.send({
                    message: "User deleted"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete"
            })
        })
}