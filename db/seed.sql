USE employee_db;

INSERT INTO department
    (name)
VALUES
    ("Management"),
    ("HR"),
    ("Marketing"),
    ("Engineering");

INSERT INTO role
    (title,salary,department_id)
VALUES
    ("CEO", 1000, 1),
    ("Associate", 70, 2),
    ("Marketer", 50, 3),
    ("Engineer", 100, 4);

INSERT INTO employee
    (first_name,last_name,role_id,manager_id)
VALUES
    ("Jon", "Lanty", 1, null),
    ("James", "Lakes", 2, null),
    ("Jake", "Lawn", 5, 1),
    ("Jenna", "Lam", 6, 1),
    ("Joel", "Lerk", 3, 1),
    ("Jorge", "Lorne", 4, 1),
    ("Jaime", "Lane", 3, 2),
    ("Jerry", "Lake", 4, 2);
