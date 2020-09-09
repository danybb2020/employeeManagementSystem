USE ems;
INSERT INTO department (name)
VALUES ("Sales department") , ("Legal department") , ("Engineering department");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales person" , 50000, 1) , ("Attorney" , 100000, 2), ("Engineer" , 150000, 3);

INSERT INTO employee (first_name, last_name , role_id , manager_id)
VALUES ("Sara" ,"White", 1, 1) , ("John" , "Marcus", 2, 1), ("Michael" , "Paulson", 3, NULL);


