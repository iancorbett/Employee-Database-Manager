INSERT INTO departments (department_name)
VALUES ( 'Human Resources'),
       ( 'Housekeeping'),
       ( 'Cafeteria'),
       ( 'Engineering'),
       ( 'Management'),
       ( 'Accounting'),
       ( 'Interns');



INSERT INTO roles (role_id, role_title, role_department, role_salary)
VALUES (1, 'Software Engineer', 'Engineering', 100000),
       (2, 'Accountant', 'Accounting', 90000),
       (3, 'Manager', 'Management', 150000),
       (4, 'Chef', 'Cafeteria', 60000);

INSERT INTO employees (employee_id, employee_firstName, employee_lastName, employee_jobTitle, employee_department, employee_salary, employee_managers)
VALUES (1, 'James', 'Smith', 'Software Engineer', 'Engineering', 100000, 'John'),
       (2, 'Mark', 'Johnson', 'Accountant', 'Accounting', 90000, 'Samuel'),
       (3, 'Justin', 'Walker', 'Manager', 'Management', 150000, 'Robert'),
       (4, 'Michael', 'Williams', 'Chef', 'Cafeteria', 60000, 'Quinton');

SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;