// const User = require('./User');

// module.exports = (app) => {
//     app.get('/user', (req, res) => {
//         res.json(User.findAll());
//     });
    
//     app.post('/user', (req, res) => {
//         const user = new User(req.body);
//         user.save();
//         res.json(user);
//     });
    
//     app.delete('/user/:id', (req, res) => {
//         User.deleteById(req.params.id);
//         res.send("User Deleted");
//     });    
// }