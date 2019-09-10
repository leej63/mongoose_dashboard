const controller = require("./controller")

module.exports = function(app){
    app.get('/', controller.index)
    app.get('/platypi/new', controller.create_platypus_form)
    app.post('/platypi',controller.create_platypus)
    app.get('/platypi/:id', controller.platypus_info)
    app.get('/platypi/edit/:id', controller.edit_platypus_form)
    app.post('/platypi/:id', controller.edit_platypus)
    app.post('/platypi/destroy/:id', controller.delete_platypus)
}


// associate controller with the corresponding function in controller
// any route with a :id needs to go after all other routes