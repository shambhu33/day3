const Role = require('../model/User');

exports.list = (req, res) => {
    res.json(Role.findAll());
}

exports.create = (req, res) => {
    const user = new Role(req.body);
    user.save();
    res.json(user);
}

exports.destroy = (req, res) => {
    Role.deleteById(req.params.id);
    res.send("Role Deleted");
}