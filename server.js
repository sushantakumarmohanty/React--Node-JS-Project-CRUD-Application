const express=require('express');
const TraineeRoutes=require('./src/route/trainee.route')
const app=express();
app.use(express.urlencoded({extended:false}))
const port=5000;
app.use('/trainee',TraineeRoutes);
app.listen(port);