INSERT INTO departments (department_name)
VALUES ( 'Human Resources'),
       ( 'Housekeeping'),
       ( 'Cafeteria'),
       ( 'Engineering'),
       ( 'Management'),
       ( 'Accounting'),
       ( 'Security'),
       ( 'Interns');



INSERT INTO roles (role_name, role_department, role_salary)
VALUES ( 'Software Engineer', 'Engineering', 100000),
       ( 'Accountant', 'Accounting', 90000),
       ( 'Manager', 'Management', 150000),
       ( 'Chef', 'Cafeteria', 60000),
       ( 'Police Officer', 'Security', 75000);

INSERT INTO employees (employee_firstName, employee_lastName, employee_jobTitle, employee_department, employee_salary, employee_managers)
VALUES ( 'James', 'Smith', 'Software Engineer', 'Engineering', 100000, 'John'),
       ( 'Mark', 'Johnson', 'Accountant', 'Accounting', 90000, 'Samuel'),
       ( 'Justin', 'Walker', 'Manager', 'Management', 150000, 'Robert'),
       ( 'Michael', 'Williams', 'Chef', 'Cafeteria', 60000, 'Quinton'),
       ( 'Jenson', 'Jones', 'HR Specialist', 'Human Resources', 65000, 'Richard');

SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;
