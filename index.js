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
            console.log("Data Inserted")
        })
    }
    else if (answers.showTable === "Add a role") {
        inquirer
        .prompt ([
            {
                type: "input",
                message: "Enter a new role title here",
                name: "roleName"
            },
            {
                type: "input",
                message: "Enter the role's department",
                name: "roleDepartment"
            },
            {
                type: "input",
                message: "Enter the role's salary",
                name: "roleSalary"
            }
        ])
        .then((answers) => {
            if (answers.roleName !== "") {
                console.log(answers.roleName);
                //FIX SO IT ADDS USER INPUT TO ROLES TABLE
                // pool.query('INSERT INTO roles (role_name, role_department, role_salary) VALUES ($1)', [answers.roleName], [answers.roleDepartment], [answers.roleSalary])
            }
            console.log('Data Inserted')
        })
    }
    else if (answers.showTable === "Add an employee") {
        inquirer
        .prompt ([
            {
                type: "input",
                message: "Enter the new employee's first name here",
                name: "employeeFirstName"
            },
            {
                type: "input",
                message: "Enter the new employee's last name here",
                name: "employeeLastName"
            },
            {
                type: "input",
                message: "Enter the new employee's job title here",
                name: "employeeJobTitle"
            },
            {
                type: "input",
                message: "Enter the new employee's department here",
                name: "employeeDepartment"
            },
            {
                type: "input",
                message: "Enter the new employee's salary here",
                name: "employeeSalary"
            },
            {
                type: "input",
                message: "Enter the new employee's manager here",
                name: "employeeManager"
            }
        ])
        .then((answers) => {
            //console.log(answers.employeeName);
            
        //      pool.query('INSERT INTO employees (employee_firstName, employee_lastName, employee_jobTitle, employee_department, employee_salary, employee_manager) VALUES ($1)', [answers.employeeFirstName], [answers.employeeLastName], [answers.employeeJobTitle], [answers.employeeDepartment], [answers.employeeSalary], [answers.employeeManager])
        console.log('Data Inserted');     
    });
        
    }
    else if (answers.showTable === "Update employee role") {
        inquirer.prompt ([
            {
                type: "input",
                message: "What is the employee's name?",
                name: "employeeName"
            },
            {
                type: "input",
                message: "What is the employee's current Position?",
                name: "updateRole"
            },
            {
                type: "input",
                message: "What will the employee's new position be?",
                name: "newRole"
            }
        ])
        .then((answers) => {
            //console.log(answers.employeeName);
            
            //  pool.query('UPDATE employees (employee_role) VALUES ($1)', [answers.newRole])
        console.log('Data Inserted');     
    });
        
    }
    
});
    
}
init();

