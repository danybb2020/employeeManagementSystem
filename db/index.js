const connection = require ("./connection");
class DB { 
    constructor (connection){
        this.connection=connection;

    }
//create new employee

createEmployee (employee){
    this. connection.query("INSERT INTO employee SET ?", employee)
}
}

module.exports= new DB (connection);

//other indes filel and write inquirer prompt