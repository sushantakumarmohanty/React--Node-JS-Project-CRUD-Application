let Trainee = require('../model/trainee.model')

module.exports.getTrainees = (req,res) =>{
    let trainees = Trainee.map( trainee => trainee);
    res.send(trainees);
}

module.exports.createTrainee = (req,res) =>  {
    let { id,name,degree} = req.body;
    Trainee = [...Trainee,{id,name,degree}];
    res.send('Trainee is created')
}

module.exports.deleteTrainee = (req,res) => {
    let { id } = req.params;
    let restTrainee = Trainee.filter(t => t.id !== id);
    Trainee = restTrainee
    res.send('Trainee is deleted');
}
module.exports.updateTrainee = (req,res) => {
    let { id } = req.params;
    let { name,degree} = req.body;
    let restTrainee = Trainee.filter(t => t.id !== id);
    Trainee = [...restTrainee,{id,name,degree}]
    res.send('Trainee is updated');
}
//router.delete('/delete/:id',TraineeController.deleteTrainee)
//app.use(express.urlencoded({extended:false}));

//router.post('/create',TraineeController.createTrainee);