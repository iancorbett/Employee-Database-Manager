const inquirer = require('inquirer');

const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;

const pool = new Pool(
    {
        user: 'postgres',
        password: 'Murray1738',
        host: 'localhost',
        database: "employee_db"
    },
    console.log(`Connected to the employees_db database.`)
)
pool.connect();

function init() { 
inquirer
.prompt ([
    {
        type: "list",
        message: "What would you like to do?",
        name: "showTable",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update employee role"]
    }
])
.then((answers) => {
    console.log(answers);
    console.log(answers.showTable);
    if (answers.showTable === "View all departments") {
        console.log("departments");
        pool.query('SELECT * FROM departments', function (err, {rows}) {
    console.log(rows);
});
    }
    else if (answers.showTable === "View all roles") {
        pool.query('SELECT * FROM roles', function (err, {rows}) {
    console.log(rows);
    console.log("roles");
});
    }
    else if (answers.showTable === "View all employees") {
        pool.query('SELECT * FROM employees', function (err, {rows}) {
    console.log(rows);
    console.log("employees");
});
    }
    else if (answers.showTable === "Add a department") {
        inquirer
        .prompt ([
            {
                type: "input",
                message: "Enter new department name",
                name: "departmentName"
            }
        ])
        .then((answers) => {
            if (answers.departmentName !== "") {
                console.log(answers.departmentName);
            
            
             pool.query('INSERT INTO departments (department_name) VALUES ($1)', [answers.departmentName])
            }
            
        })
    }
    else if (answers.showTable === "Add a role") {
        inquirer
        .prompt ([
            {
                type: "input",
                message: "Enter a new role here",
                name: "roleName"
            }
        ])
        .then((answers) => {
            if (answers.roleName !== "") {
                console.log(answers.roleName);
                //FIX SO IT ADDS USER INPUT TO ROLES TABLE
                pool.query()
            }
        })
    }
    else if (answers.showTable === "Add an employee") {
        inquirer
        .prompt ([
            {
                type: "input",
                message: "Enter a new employee here",
                name: "employeeName"
            }
        ])
        .then((answers) => {
            console.log(answers.employeeName);
            //FIX SO IT ADDS USER INPUT TO EMPLOYEES TABLE
            pool.query()
        })
    }
    else if (answers.showTable === "Update an employee role") {
        inquirer.prompt ([
            {
                type: "input",
                message: "Update the employee role here",
                name: "updateRole"
            }
        ])
    }
});
    
}
init();




