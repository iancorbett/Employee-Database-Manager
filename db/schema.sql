DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

\c employee_db;

CREATE TABLE departments(
    id SERIAL PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles(
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(30) NOT NULL,
    role_department VARCHAR(30) NOT NULL,
    role_salary INTEGER NOT NULL
);

CREATE TABLE employees(
    employee_id SERIAL PRIMARY KEY,
    employee_firstName VARCHAR(30) NOT NULL,
    employee_lastName VARCHAR(30) NOT NULL,
    employee_jobTitle VARCHAR(30) NOT NULL, --FOREIGN KEY REFERS TO ROLE
    
    employee_department VARCHAR(30) NOT NULL,
    employee_salary INTEGER NOT NULL,
    employee_managers VARCHAR(30) NOT NULL --FOREIGN KEY REFERS TO EMPLOYEE TABLE
);
