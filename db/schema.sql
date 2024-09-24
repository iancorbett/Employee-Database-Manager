DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

\c employee_db;

CREATE TABLE departments(
    id SERIAL PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles(
    role_id INTEGER NOT NULL,
    role_title VARCHAR(30) NOT NULL,
    role_department VARCHAR(30) NOT NULL,
    role_salary INTEGER NOT NULL
);

CREATE TABLE employees(
    employee_id INTEGER NOT NULL,
    employee_firstName VARCHAR(30) NOT NULL,
    employee_lastName VARCHAR(30) NOT NULL,
    employee_jobTitle VARCHAR(30) NOT NULL,
    employee_department VARCHAR(30) NOT NULL,
    employee_salary INTEGER NOT NULL,
    employee_managers VARCHAR(30) NOT NULL
);