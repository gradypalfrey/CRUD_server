const axios = require('axios')

exports.homeRoutes = (req, res) => {
    axios.get(`${process.env.URL}/api/users`)
        .then(function(response) {
            console.log(response)
            res.render('index', {users: response.data})
        }) 
        .catch(err => {
            res.send(err)
        })
}

exports.add_user = (req, res) => {
    res.render('add_user')
}

exports.update_user = (req, res) => {
    axios.get(`${process.env.URL}/api/users`, {params: {id: req.query.id }})
        .then(function(input) {
            res.render("update_user", {user: input.data})
        })
        .catch(err => {
            res.send(err)
        })
}   