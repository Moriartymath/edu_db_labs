# Реалізація інформаційного та програмного забезпечення

В рамках проєкту розробляється: 
## SQL-скрипт для створення на початкового наповнення бази даних

```sql
-- -----------------------------------------------------
-- Schema project_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `project_db`;
USE `project_db` ;

-- -----------------------------------------------------
-- Table `project_db`.`roles`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`roles` ;

CREATE TABLE IF NOT EXISTS `project_db`.`roles` (
   `Id` INT NOT NULL AUTO_INCREMENT,
   `Name` VARCHAR(30) NULL DEFAULT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE,
    UNIQUE INDEX `Name` (`Name` ASC) VISIBLE);

-- -----------------------------------------------------
-- Table `project_db`.`users`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`users` ;

CREATE TABLE IF NOT EXISTS `project_db`.`users` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `Login` VARCHAR(45) NOT NULL,
    `Picture` MEDIUMBLOB NOT NULL,
    `Password` BLOB NOT NULL,
    `Email` VARCHAR(50) NOT NULL,
    `Role` VARCHAR(30) NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE,
    UNIQUE INDEX `Login` (`Login` ASC) VISIBLE,
    UNIQUE INDEX `Email` (`Email` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `project_db`.`members`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`members` ;

CREATE TABLE IF NOT EXISTS `project_db`.`members` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `RoleId` INT NOT NULL,
    `UserId` INT NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE,
    INDEX `roleFK_idx` (`RoleId` ASC) VISIBLE,
    INDEX `userFK_idx` (`UserId` ASC) VISIBLE,
    CONSTRAINT `roleFK`
    FOREIGN KEY (`RoleId`)
    REFERENCES `project_db`.`roles` (`Id`),
    CONSTRAINT `userFK`
    FOREIGN KEY (`UserId`)
    REFERENCES `project_db`.`users` (`Id`));

-- -----------------------------------------------------
-- Table `project_db`.`projects`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`projects` ;

CREATE TABLE IF NOT EXISTS `project_db`.`projects` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(50) NOT NULL,
    `Description` VARCHAR(100) NOT NULL,
    `Status` VARCHAR(20) NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE);

-- -----------------------------------------------------
-- Table `project_db`.`payments`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`payments` ;

CREATE TABLE IF NOT EXISTS `project_db`.`payments` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `CardNumber` INT NOT NULL,
    `CardCVV` INT NOT NULL,
    `CardExpireDate` DATETIME NOT NULL,
    `Email` VARCHAR(50) NOT NULL,
    `ProjectId` INT NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE,
    INDEX `ProjectId` (`ProjectId` ASC) VISIBLE,
    CONSTRAINT `payments_ibfk_1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `project_db`.`projects` (`Id`));

-- -----------------------------------------------------
-- Table `project_db`.`permissions`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`permissions` ;

CREATE TABLE IF NOT EXISTS `project_db`.`permissions` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `Permission` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `project_db`.`projects_members`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`projects_members` ;

CREATE TABLE IF NOT EXISTS `project_db`.`projects_members` (
    `MemberId` INT NOT NULL,
    `ProjectId` INT NOT NULL,
    INDEX `ProjectId` (`ProjectId` ASC) VISIBLE,
    INDEX `MemberId` (`MemberId` ASC) VISIBLE,
    CONSTRAINT `projects_members_ibfk_1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `project_db`.`projects` (`Id`),
    CONSTRAINT `projects_members_ibfk_2`
    FOREIGN KEY (`MemberId`)
    REFERENCES `project_db`.`members` (`Id`));

-- -----------------------------------------------------
-- Table `project_db`.`reviews`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`reviews` ;

CREATE TABLE IF NOT EXISTS `project_db`.`reviews` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `Text` VARCHAR(100) NOT NULL,
    `Rate` INT NOT NULL,
    `ProjectId` INT NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE,
    INDEX `ProjectId` (`ProjectId` ASC) VISIBLE,
    CONSTRAINT `reviews_ibfk_1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `project_db`.`projects` (`Id`));

-- -----------------------------------------------------
-- Table `project_db`.`role_grant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `project_db`.`role_grant` ;

CREATE TABLE IF NOT EXISTS `project_db`.`role_grant` (
   `RoleId` INT NOT NULL,
   `PermissionId` INT NOT NULL,
    INDEX `RoleId` (`RoleId` ASC) VISIBLE,
    INDEX `PermissionId` (`PermissionId` ASC) VISIBLE,
    CONSTRAINT `role_grant_ibfk_1`
    FOREIGN KEY (`RoleId`)
    REFERENCES `project_db`.`roles` (`Id`),
    CONSTRAINT `role_grant_ibfk_2`
    FOREIGN KEY (`PermissionId`)
    REFERENCES `project_db`.`permissions` (`Id`));


-- -----------------------------------------------------
-- Table `project_db`.`tasks`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `project_db`.`tasks` ;

CREATE TABLE IF NOT EXISTS `project_db`.`tasks` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(50) NOT NULL,
    `Developer` VARCHAR(45) NOT NULL,
    `Status` VARCHAR(20) NOT NULL,
    `Deadline` DATETIME NOT NULL,
    `ProjectId` INT NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE,
    INDEX `ProjectId` (`ProjectId` ASC) VISIBLE,
    CONSTRAINT `tasks_ibfk_1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `project_db`.`projects` (`Id`));

-- Inserting data into the roles table
INSERT INTO `project_db`.`roles` (`Name`) VALUES
('Teamlead'),
('Developer'),
('Admin');

-- Inserting data into the users table
INSERT INTO `project_db`.`users` (`Login`, `Picture`, `Password`, `Email`, `Role`) VALUES
('admin_user', 'admin_picture_blob', 'admin_password_blob', 'admin@example.com', 'Teamlead'),
('dev_user1', 'dev_picture_blob1', 'dev_password_blob1', 'dev1@example.com', 'Developer'),
('dev_user2', 'dev_picture_blob2', 'dev_password_blob2', 'dev2@example.com', 'Developer'),
('manager_user', 'manager_picture_blob', 'manager_password_blob', 'manager@example.com', 'Admin');

-- Inserting data into the members table
INSERT INTO `project_db`.`members` (`RoleId`, `UserId`) VALUES
(1, 1),
(2, 2),
(2, 3),
(3, 4);

-- Inserting data into the projects table
INSERT INTO `project_db`.`projects` (`Name`, `Description`, `Status`) VALUES
('Project A', 'Description for Project A', 'Active'),
('Project B', 'Description for Project B', 'Inactive'),
('Project C', 'Description for Project C', 'Pending');

-- Inserting data into the permissions table
INSERT INTO `project_db`.`permissions` (`Permission`) VALUES
('Read'),
('Write'),
('Execute');

-- Inserting data into the role_grant table
INSERT INTO `project_db`.`role_grant` (`RoleId`, `PermissionId`) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 3),
(3, 2),
(3, 3);
-- Inserting data into the payments table
INSERT INTO `project_db`.`payments` (`Id`, `CardNumber`, `CardCVV`, `CardExpireDate`, `Email`, `ProjectId`) VALUES
(1, 123456, 123, '2023-12-31', 'payment1@example.com', 1),
(2, 987654, 456, '2023-11-30', 'payment2@example.com', 2),
(3, 111122, 789, '2023-10-31', 'payment3@example.com', 3);

-- Inserting data into the projects_members table
INSERT INTO `project_db`.`projects_members` (`MemberId`, `ProjectId`) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 3);

-- Inserting data into the reviews table
INSERT INTO `project_db`.`reviews` (`Text`, `Rate`, `ProjectId`) VALUES
('Good project!', 5, 1),
('Could be better', 3, 2),
('Excellent work', 5, 3);

-- Inserting data into the tasks table
INSERT INTO `project_db`.`tasks` (`Name`, `Developer`, `Status`, `Deadline`, `ProjectId`) VALUES
('Task 1', 'dev_user1', 'In Progress', '2023-11-15', 1),
('Task 2', 'dev_user2', 'To Do', '2023-12-01', 2),
('Task 3', 'dev_user1', 'Completed', '2023-10-31', 3);


```


## RESTfull сервіс для управління даними

### Головний файл

```python
from flask import Flask

app = Flask(__name__);
    
from projects_controller import *
from users_controller import *
```

### Projects Controller 

```python
from app import app
from projects_model import Projects
from flask import request

projects = Projects();

@app.route("/projects")
def get_all_projects():
    return projects.get_all_projects();

@app.route("/project/<id>")
def get_project_by_id(id):
    return projects.get_project_by_id(id);

@app.route("/project/add", methods=["POST"])
def add_project():
    return projects.add_project(request.form);

@app.route("/project/update", methods=["PUT"])
def update_project():
    return projects.update_project(request.form);

@app.route("/project/delete/<id>", methods=["DELETE"])
def delete_project(id):
    return projects.delete_project(id);
```

### Projects Model

```py
import json
from flask import make_response
import mysql.connector

class Projects:
    def __init__(self):
        try:
            self.con = mysql.connector.connect(host="localhost",user="root",password="db12345!",database='project_db');
            self.cur = self.con.cursor(dictionary=True);
            self.con.autocommit = True;
            print("succesful connection");
        except:
            print("failed");
    

    def get_all_projects(self):
        self.cur.execute("SELECT * FROM projects")

        result = self.cur.fetchall()

        if (self.cur.rowcount == 0):
            result = {"message":"There is no projects", "error": "Not Found", "status code": 404};

        return result;


    def get_project_by_id(self,id):
        if (not str(id).isdigit()):
            return {"message":"Invalid project id", "error": "Bad Request", "status code": 400};
        self.cur.execute(f"SELECT * FROM projects where id={id}");

        result = self.cur.fetchall()

        if (self.cur.rowcount == 0):
            result = {"message":"There is no project with such id", "error": "Not Found", "status code": 404};

        return result;

    def add_project(self,data):
        data = dict(data);

        return_value = ""

        if (len(data) == 3):
            self.cur.execute(f"INSERT INTO projects (Name, Description, Status) VALUES ('{data["Name"]}', '{data["Description"]}', '{data["Status"]}')")

            print(self.cur.rowcount);
            if (self.cur.rowcount != 0):
                return_value = {"message":"Successfully added to database", "status code": 200};
            else:
                return_value = {"message":"Project was not added to database", "error": "Not Acceptable", "status code": 406};
        else:
            return_value = {"message":"Invalid amount of keys", "error": "Bad Request", "status code": 400};


    
        return return_value;

    def delete_project(self,id):
        if(not str(id).isdigit()):
            return {"message":"Invalid project id", "error": "Bad Request", "status code": 400}
        
        self.cur.execute(f"DELETE FROM projects_members WHERE ProjectId={id}");
        self.cur.execute(f"DELETE FROM tasks WHERE ProjectId={id}");
        self.cur.execute(f"DELETE FROM reviews WHERE ProjectId={id}");
        self.cur.execute(f"DELETE FROM payments WHERE ProjectId={id}");
        self.cur.execute(f"DELETE FROM projects WHERE Id={id}");
        
        print(self.cur.rowcount);
        if(self.cur.rowcount > 0):
            return_value = {"message":"Project was successfully deleted", "status code": 204};
        else:
            return_value = {"message":"Nothing to delete", "error": "Not Found", "status code": 404};
        
    
        return return_value;

    def update_project(self,data):
       
        data = dict(data);
        return_value = "";

        if(len(data) == 4):
            if(not str(data["Id"]).isdigit()):
                return {"message":"Invalid project id", "error": "Bad Request", "status code": 400};
        
            self.cur.execute(f"UPDATE projects SET Name='{data["Name"]}', Description='{data["Description"]}', Status='{data["Status"]}' WHERE Id={data["Id"]}");

            print(self.cur.rowcount);

            if(self.cur.rowcount  > 0):
                return_value = {"message":"Updated successfully", "status code": 200};
            else:
                return_value = {"message":"Nothing to update", "error": "Not Found", "status code": 404};
        else:
            return_value =  {"message":"Invalid amount of keys", "error": "Bad Request", "status code": 400};
    
        return return_value;
```

### Users Controller

```py
from app import app
from users_model import Users
from flask import request

users = Users();

@app.route("/users")
def get_all_users():
    return users.get_all_users();

@app.route("/user/<id>")
def get_user_by_id(id):
    return users.get_user_by_id(id);

@app.route("/user/login/<Login>")
def get_user_by_Login(Login):
    return users.get_user_by_Login(Login);

@app.route("/user/add", methods=["POST"])
def add_user():
    return users.add_user(request.form);

@app.route("/user/update", methods=["PUT"])
def update_user():
    return users.update_user(request.form);

@app.route("/user/delete/<id>", methods=["DELETE"])
def delete_user(id):
    return users.delete_user(id);

```

### Users Model

```py
import json
import mysql.connector
import base64

class Users:
    def __init__(self):
        try:
            self.con = mysql.connector.connect(host="localhost",user="root",password="db12345!",database='project_db');
            self.cur = self.con.cursor(dictionary=True);
            self.con.autocommit = True;
            print("succesful connection");
        except:
            print("failed");
    

    def get_all_users(self):
        self.cur.execute("SELECT * FROM users")
        result = self.cur.fetchall();

        if(self.cur.rowcount > 0):
            for i in range(len(result)):
                result[i]["Picture"] = str(base64.b64encode(result[i]["Picture"]));
                result[i]["Password"] = str(base64.b64encode(result[i]["Password"]));
        else:
            result = {"message":"There is no users", "error": "Not Found", "status code": 404}
        
        return result;


    def get_user_by_id(self,id):
        if (not str(id).isdigit()):
            return {"message":"Invalid user id", "error": "Bad Request", "status code": 400};
        self.cur.execute(f"SELECT * FROM users where id={id}");
        result = self.cur.fetchall();

        if(self.cur.rowcount > 0):
            for i in range(len(result)):
                result[i]["Picture"] = str(base64.b64encode(result[i]["Picture"]));
                result[i]["Password"] = str(base64.b64encode(result[i]["Password"]));
        else:
            result = {"message":"There is no user with such id", "error": "Not Found", "status code": 404}
    
        return result;

    def get_user_by_Login(self,Login):
        self.cur.execute(f"SELECT * FROM users WHERE Login='{Login}'")
        result = self.cur.fetchall();

        if(self.cur.rowcount > 0):
            for i in range(len(result)):
                result[i]["Picture"] = str(base64.b64encode(result[i]["Picture"]));
                result[i]["Password"] = str(base64.b64encode(result[i]["Password"]));
        else:
            result = {"message":"There is no user with such Login", "error": "Not Found", "status code": 404}
        
        return result;


    def add_user(self,data):
        data = dict(data);
        return_value = "";
        if (len(data) == 5):
            self.cur.execute("SELECT Name FROM roles");
            result = self.cur.fetchall();
            IsRoleValid = False;

            for i in range(len(result)):
                if(result[i]["Name"] == data["Role"]):
                    IsRoleValid = True;
                    break;

            if (not IsRoleValid):
                return_value = {"message":"Invalid Role", "error": "Not Found", "status code": 404};
            else:
                self.cur.execute(f"SELECT Id FROM roles WHERE Name='{data["Role"]}'");
                RoleId = self.cur.fetchall();
                RoleId = int(RoleId[0]["Id"]);

                try:
                    self.cur.execute(f"INSERT INTO users (Login, Picture, Password, Email, Role) values('{data["Login"]}', '{data["Picture"]}', '{data["Password"]}', '{data["Email"]}', '{data["Role"]}')");

                    self.cur.execute(f"SELECT Id FROM users WHERE Email='{data["Email"]}'");
                    user_id = self.cur.fetchall();
                    user_id = int(user_id[0]["Id"]);

                    self.cur.execute(f"INSERT INTO members (RoleId, UserId) values ({RoleId},{user_id})");
                    return_value = {"message":"Successfully added to database", "status code": 200};
                except:
                    return_value = {"message":"There is already user with such email or login", "error": "Conflict", "status code": 409};
        else:
            return_value = {"message":"Invalid amount of keys", "error": "Bad Request", "status code": 400};
            
        return return_value;

    def update_user(self,data):
        if(len(dict(data)) != 6):
            return {"message":"Invalid amount of keys", "error": "Bad Request", "status code": 400};

        if(not str(dict(data)["Id"]).isdigit()):
            return {"message":"Invalid user id", "error": "Bad Request", "status code": 400};
        self.cur.execute(f"SELECT Name FROM roles");
        all_roles = self.cur.fetchall();
        result = "Invalid data";
        data = dict(data);

        IsValidRole = False;

        for i in range(len(all_roles)):
            if(all_roles[i]["Name"] == data["Role"]):
                IsValidRole = True;
                break;
        
        if (IsValidRole):
            self.cur.execute(f"SELECT Id FROM roles WHERE Name='{data["Role"]}'");
            id_of_Role = self.cur.fetchall();
            id_of_Role = int(id_of_Role[0]["Id"]);
            try:
                self.cur.execute(f"UPDATE members SET RoleId={id_of_Role}");
                self.cur.execute(f"UPDATE users SET Login='{data["Login"]}', Picture='{data["Picture"]}', Password='{data["Password"]}', Email='{data["Email"]}', Role='{data["Role"]}' WHERE Id={data["Id"]}");
                
                if (self.cur.rowcount == 0):
                    result = {"message":"Nothing to update", "error": "Not Found", "status code": 404};
                else:
                    result = {"message":"Updated successfully", "status code": 200};
            except:
                result = {"message":"There is already user with such email or login", "error": "Conflict", "status code": 409};
        else:
            result = {"message":"Invalid Role", "error": "Not Found", "status code": 404}

        return result;


    def delete_user(self,id):

        if(not str(id).isdigit()):
            return {"message":"Invalid user id", "error": "Bad Request", "status code": 400};
    
        self.cur.execute(f"SELECT Id FROM members WHERE UserId={id}");

        result = self.cur.fetchall();

        if(len(result) != 0):
            member_id = int(result[0]["Id"]);
            self.cur.execute(f"DELETE FROM projects_members WHERE MemberId={member_id}");

        self.cur.execute(f"DELETE FROM members WHERE UserId={id}");
        self.cur.execute(f"DELETE FROM users WHERE Id={id}");
        
        if(self.cur.rowcount == 0 ):
            result = {"message":"Nothing to delete", "error": "Not Found", "status code": 404};
        else:
            result = {"message":"User was successfully deleted", "status code": 204};

        return result;
```


