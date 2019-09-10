// VIEWS in DJANGO - this is where the logic goes

const Platypus = require("./models");

module.exports = {
    index: function(req, res){
        arr = Platypus.find({}, function(err, platypus){
            res.render('index', {arr: platypus});
        }) 
    },

    platypus_info: function(req, res){
        Platypus.findOne({_id: req.params.id})
            .then((data)=>{
                console.log(data)
                return res.render('platypi_id', {p: data})
            })
            .catch((err)=>{
                return res.redirect('/')
            })
    },

    create_platypus_form: function(req, res){
        res.render('platypi_new')
    },

    create_platypus: function(req, res){
        console.log(Platypus);
        Platypus.create({name: req.body.name, age: req.body.age})
            .then(()=>{
                return res.redirect('/');
            })
            .catch((err)=>{
                return res.render('platypi_new')
            })
    }, 

    edit_platypus_form: function(req, res){
        Platypus.findOne({_id: req.params.id})
        .then((data)=>{
            return res.render('platypi_edit', {p: data})
        })
        .catch((err)=>{
            return res.redirect('/')
        })
    },

    edit_platypus: function (req, res){
        Platypus.update({_id: req.params.id}, {$set: {name: req.body.name, age: req.body.age}}, {runValidators: true})
            .then(()=>{
                return res.redirect('/')
            })
            .catch((err)=>{
                return res.render('platypi_edit')
            })
    },
    
    delete_platypus: function(req, res){
        Platypus.remove({_id: req.params.id})
            .then((data)=>{
                return res.redirect('/')
            })
            .catch((err)=>{
                return res.redirect('platypi_id')
            })
    }
}