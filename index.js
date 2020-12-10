const { prompt } = require("./db/prompts");
const logo = require("asciiart-logo");
const db = require("./db");

require("console.table");

init();

function init() {
  const logoText = logo({ name: "Employee Manager" }).render();
  console.log(logoText);

  loadMainPropts();
}

async function loadMainPrompts() {
  const { choice } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do? ",
      choices: [
        {
          name: "View all employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "View all employees by Department",
          value: "VIEW_EMPLOYEES_BY_DEPARTMENT",
        },

        {
          name: "View all employees by Manager",
          value: "VIEW_EMPLOYEES_BY_MANAGER",
        },

        {
          name: "Add Employee",
          value: "ADD_EMPLOYEE",
        },

        {
          name: "Remove Employee",
          value: "REMOVE_EMPLOYEE",
        },

        {
          name: "Update Employee Role",
          value: "UPDATE_EMPLOYEE_ROLE",
        },

        {
          name: "Update Employee Manager",
          value: "UPDATE_EMPLOYEE_MANAGER",
        },

        {
          name: "View All Roles",
          value: "VIEW_ROLES",
        },

        {
          name: "Add Role",
          value: "VIEW_ROLES",
        },

        {
          name: "Remove Role",
          value: "REMOVE_ROLE",
        },

        {
          name: "View All Departments",
          value: "VIEW_DEPARTMENTS",
        },

        {
          name: "Add Departments",
          value: "ADD_DEPARTMENT",
        },

        {
          name: "Remove Departments",
          value: "REMOVE_DEPARTMENT",
        },

        {
          name: "Quit",
          value: "QUIT",
        },
      ],
    },
  ]);

  switch (choice) {
    case "VIEW_EMPLOYEES":
      return viewEmployees();
    case "VIEW_EMPLOYEES_BY_DEPARTMENT":
      return viewEmployeesByDepartment();
    case "VIEW_EMPLOYEES_BY_MANAGER":
      return viewEmployeesByManager();
    case "ADD_EMPLOYEE":
      return addEmployee();
    case "REMOVE_EMPLOYEE":
      return removeEmployee();
    case "UPDATE_EMPLOYEE_ROLE":
      return updateEmployeeRole();
    case "UPDATE_EMPLOYEE_MANAGER":
      return updateEmployeeManager();
    case "VIEW_DEPARTMENTS":
      return viewDepartments();
    case "ADD_DEPARTMENT":
      return addDepartments();
    case "REMOVE_DEPARTMENT":
      return removeDepartments();
    case "VIEW_ROLES":
      return viewRoles();
    case "ADD_ROLE":
      return addRole();
    case "REMOVE_ROLE":
      return removeRole();
    default:
      return quit();
  }
}

async function viewEmployees(){
    const employees = await db.findAllEmployees();

    console.log ("\n");
    console.table(employees);

    loadMainPrompts();
}

async function viewEmployeesByDepartment(){
    const departments= await db.findAllDepartments();
    
    const departmentChoices = departments.map(({id, name})=> ({
        name: name,
        value: id
    }));

    const {departmentId} = await prompt([
        {
            type: "list",
            name: "departmentId",
            message: "Which department wpuld you like to see the employees for?",
            choices: departmentChoices


    }]);

    const employees = await db.findAllEmployeesByDepartment (departmentId);
    console.log ("\n");
    console.table(employees);

    loadMainPrompts();
}

async function viewEmployeesByManager(){
    const managers = await db.findAllEmployees();

    const managerChoices =  managers.map(({id, first_name, last_name}) =>({
name: '${first_name} ${last_name}',
value: id

    }));

    const{managerId} = await prompt ([
        {
            type: "list",
            name: "managerId",
            message: "Which employee would you like to see direct reports for ?",
            choices: managerChoices
        }
    ]);

    const employees = await db.findAllEmployeesByManager (managerId);
    console.log ("\n");

    if ( employees.length === 0 ) {

        console.log ("The employee has no direct reports");

    }else {
        console.table(employees);
    }
    loadMainPrompts();
        
        


    async function updateEmployeesRole(){
        const employees = await db.findAllEmployees();
    
        const employeeChoices =  employees.map(({id, first_name, last_name}) =>({
    name: '${first_name} ${last_name}',
    value: id
    
        }));
    
        const{employeeId} = await prompt ([
            {
                type: "list",
                name: "employeeId",
                message: "Which employee role would you like to update ?",
                choices: employeeChoices
            }
        ]);
    
const roles = await db.findAllRoles ();
const roleChoices = roles.map(({ id, title })=> ({
name: title,
value: id

}));

const {roleId} = await prompt ([
    {
    type: "list",
    name: "roleId",
    message: "Which role would you like to assign to selected employee?",
    choices: roleChoices
}
]);

await db.updateEmployeeRole (employeeId, roleId);

console.log ("Updated employee role");

loadMainPrompts();
    }


    
 async function updateEmployeesManager(){
        const employees = await db.findAllEmployees();
    
        const employeeChoices =  employees.map(({id, first_name, last_name}) =>({
    name: '${first_name} ${last_name}',
    value: id
    
        }));
    
        const{employeeId} = await prompt ([
            {
                type: "list",
                name: "employeeId",
                message: "Which employee manager would you like to update ?",
                choices: employeeChoices
            }
        ]);
    
const managers = await db.findAllPossibleManagers (employeeId);
const managerChoices = managers.map(({ id, first_name, last_name})=> ({
    type: "list",
    name: "managerId",
    message: "Which employee do you want to set as manager for the selected employee ?",
    choices: managerChoices

}));



await db.updateEmployeeManager (employeeId, managerId);

console.log ("Updated employee manager");

loadMainPrompts();
    }



    async function viewRoles(){
        const roles = await db.findAllRoles();
    
        console.log ("\n");

    
        console.table(roles);
        loadMainPrompts();
    }


    async function addRole(){
        const departments = await db.findAllDepartments();
    
        const departmentChoices = managers.map(({ id, name})=> ({
            
            name: name,
            value: id
        
        }));

        const role= await prompt ([

            {
                name:"title",
                message:"What is the name of the role"
            },

            {
                name:"salary",
                message:"What is the salary of the role"
            },
{
            type: "list",
            name: "departmentId",
            message: "Which department does the role belong to ?",
            choices: departmentChoices
}

        ]);

    await db.createRole(role)

    console.log ('Added ${department.name} to the database');

    loadMainPrompts();
    }

    async function removeDepartment(){
        const departments = await db.findAllDepartments();
    
        const departmentChoices = managers.map(({ id, name})=> ({
            
            name: name,
            value: id
        }));

        const{depatmentId}= await prompt({
            type: "list",
            name: "departmentId",
            message: "Which department would you like to remove. Warning, this will also remove associated roles and employees ",
            choices: departmentChoices

        });

        await db.removeDepartment (departmentId);

        console.log ('Removed department from database');
        loadMainPrompts();



        async function addEmployee(){
            const roles = await db.findAllRoles();
            const employees = await db.findAllEmployees();

            const employee = await prompt ([

        {
                
                name: "first_name",
                message: "What is the employees first name?"
        },

        {
                
            name: "last_name",
            message: "What is the employees last name?"
    },

            
]);
    
const roleChoices =  roles.map (({id, title })=> (
{
name: title,
value: id
}));


const roleId =  await prompt ({

    type: "list",
    name: "roleId",
    message: "What is the employees role?",
    choices: roleChoices
});


    employee.role_id = roleId;

    const managerChoices = employees.map (({id, first_name, last_name}) => ({
        name: '${first_name} ${last_name}',
        value: id
    }));

    managerChoices.unshift({name: "None", value: null});

    const{managerId} = await prompt({

        type: "list",
        name: "managerId",
        message :"Who is the employees manager",
        choices: managerChoices
    });

    employee.manager_Id= managerId;

    await db.createEmployeee (employee)

    console.log (

        'Added ${employee.first_name} ${employee.last_name} to the databse'

    );

    loadMainPrompts();
        }

        function quit(){
            console.log ("GoodBye");
            process.exit();
        }
