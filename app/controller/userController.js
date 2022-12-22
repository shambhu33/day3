const User = require('../model/User');

exports.list = (req, res) => {
    res.json(User.findAll());
}

exports.create = (req, res) => {
    const user = new User(req.body);
    user.save();
    res.json(user);
}

exports.destroy = (req, res) => {
    User.deleteById(req.params.id);
    res.send("User Deleted");
}