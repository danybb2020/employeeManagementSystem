USE employee_db;

INSERT INTO department
    (name)
VALUES
    ("Management"),
    ("HR"),
    ("Marketing"),
    ("R&D"),
    ("Finance"),
    ("Engineering");


INSERT INTO role
    (title,salary,department_id)
VALUES
    ("CEO", 1100, 1),
    ("CFO", 1000, 1),
    ("Associate", 70, 2),
    ("Senior Associate", 90, 2),
    ("Marketer", 50, 3),
    ("Lead Marketer", 70, 3),
    ("Engineer", 100, 4),
    ("Senior Engineer", 130, 4),
    ("Accountant", 100, 4),
    ("Senior Accountant", 100, 4);

INSERT INTO employee
    (first_name,last_name,role_id,manager_id)
VALUES
    ("Jonathan", "Lanty", 1, null),
    ("Jameson", "Lakeside", 2, null),
    ("Jake", "Lawny", 5, 1),
    ("Jennafer", "Lambert", 6, 1),
    ("Joel", "Lerking", 3, 1),
    ("Jorge", "Lorne", 4, 1),
    ("Jaime", "Lane", 3, 2),
    ("Jerry", "Lakeshore", 4, 2),
    ("Jaimee", "Lorne", 4, 1),
    ("Jair", "Lane", 3, 2),
    ("Kal", "Lake", 4, 2);