Employee Tracker 

Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as **C**ontent **M**anagement **S**ystems. This app is a solution for managing a company's employees using node, inquirer, and MySQL.

## Features

<<<<<<< HEAD

- VIEW ALL departments, roles, and employees
- ADD departments, roles, and employees
- UPDATE employee roles

## Screenshots

![Screen Shot 2020-09-07 at 3 39 38 PM](https://user-images.githubusercontent.com/65512016/92419135-6bea8300-f120-11ea-867f-9d8b10a10c6e.png)



![Database Schema]

- **department**:

  - **id** - INT PRIMARY KEY
  - **name** - VARCHAR(30) to hold department name

- **role**:

  - **id** - INT PRIMARY KEY
  - **title** - VARCHAR(30) to hold role title
  - **salary** - DECIMAL to hold role salary
  - **department_id** - INT to hold reference to department role belongs to

- **employee**:

  - **id** - INT PRIMARY KEY
  - **first_name** - VARCHAR(30) to hold employee first name
  - **last_name** - VARCHAR(30) to hold employee last name
  - **role_id** - INT to hold reference to role employee has
  - **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager

Its a command-line application that at a minimum allows the user to:

- Add departments, roles, employees

- View departments, roles, employees

- Update employee roles

Clients desires:


As a business owner I want to be able to view and manage the departments, roles, and employees in my company So that I can organize and plan my business


![Hnet-image (5)](https://user-images.githubusercontent.com/65620789/101999342-d1ef2500-3c90-11eb-9c61-dcb3801c6ad8.gif)

