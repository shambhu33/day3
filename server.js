const express = require('express');
const app = express();
const PORT = 5000;


const URL ="mongodb+srv://admin:admin@cluster0.sftel4p.mongodb.net/DAY3-EXPRESS?retryWrites=true&w=majority";
//const URL_LOCAL = "mongoosedb://localhost:27017/express";

const mongoose= require('mongoose');
mongoose.connect(URL).then(()=>{
    console.log('connected to mongodb...');
});

mongoose.connection.on('error', (err) => {
    console.log("Error", err.message);
});
// .catch(err =>{
//     console.log('connection error:',err);
//     });


//catch error message only
// mongoose.connection.on('error', (err) => {
//     console.log("Error", err);
// });


app.use(express.json());  //middleware

// require('./route')(app);

app.use('/user',require('./app/route/userRouter'));
app.use('/client',require('./app/route/clientRouter'));
app.use('/role',require('./app/route/RoleRouter'));

// app.get('/test',(req,res)=>{
//     //res.send('test page');
//     console.log("here1");
//     next();
// },(req,res)=>{
//     console.log("here2");
//     res.send("here2");
// });



// app.get('/user/ram',(req,res,next)=>{
//     console.log("Test1");
//     next();
// });
// app.get('/user/ram',(req,res)=>{
//     console.log("Test2");
//     res.send("Completed");
// });


// app.get('/user/ram',(req,res)=>{
//     res.send('hello Ram');
// })
// app.get('/user/:name',$param--)  ///////



const logger = require('./app/middleware/logger');

// let mid = (req,res,next)=>{
//     console.log(req.url,req.method);
//     next();
// }
app.use('/test',logger);

// app.post('/test',mid,(req,res)=>{
    app.post('/test',(req,res)=>{
        console.log("here2");
        res.send(req.body);
    });

app.get('/test1',(req,res)=>{
    console.log("here");
    res.send('hello world!')
})

app.all('*', (req, res) => {
    res.send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`);
});