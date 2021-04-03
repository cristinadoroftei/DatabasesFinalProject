create database if not exists management;
use management;

CREATE TABLE companies (
  id            int(10) NOT NULL AUTO_INCREMENT, 
  name          varchar(255) NOT NULL, 
  contact_name  varchar(255), 
  contact_email varchar(255) NOT NULL, 
  contact_phone varchar(255), 
  PRIMARY KEY (id));
  
CREATE TABLE projects (
    id INT(10) NOT NULL AUTO_INCREMENT,
    company_id INT(10) NOT NULL,
    client_id INT(10) NOT NULL,
    project_status_id INT(10) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    start_date DATE,
    end_date DATE,
    billable BIT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE invoices (
    id INT(10) NOT NULL AUTO_INCREMENT,
    project_id INT(10) NOT NULL,
    name VARCHAR(255),
    created_date DATE NOT NULL,
    due_date DATE,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status BIT NOT NULL,
    notes TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE persons (
    id INT(10) NOT NULL AUTO_INCREMENT,
    company_id INT(10) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    user_type VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    internal_cost DOUBLE NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE teams_persons (
  id        int(10) NOT NULL AUTO_INCREMENT, 
  person_id int(10) NOT NULL, 
  team_id   int(10) NOT NULL, 
  PRIMARY KEY (id, 
  person_id, 
  team_id));
  
CREATE TABLE teams (
  id   int(10) NOT NULL AUTO_INCREMENT, 
  name varchar(255) NOT NULL, 
  PRIMARY KEY (id));
  
CREATE TABLE tasks (
    id INT(10) NOT NULL AUTO_INCREMENT,
    project_id INT(10) NOT NULL,
    task_status_id INT(10) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description text,
    minutes_estimated INT(10),
    start_date DATE,
    end_date DATE,
    locked_date DATE,
    PRIMARY KEY (id)
);

CREATE TABLE time_registrations (
  id                 int(10) NOT NULL AUTO_INCREMENT, 
  task_id            int(10) NOT NULL, 
  person_id          int(10) NOT NULL, 
  minutes_registered int(10) NOT NULL, 
  notes              text, 
  time_reg_date      date NOT NULL,
  locked 			 bit,
  PRIMARY KEY (id));
  
  CREATE TABLE status_categories (
  id   int(10) NOT NULL AUTO_INCREMENT, 
  name varchar(255) NOT NULL, 
  PRIMARY KEY (id));
  
CREATE TABLE task_statuses (
  id                 int(10) NOT NULL AUTO_INCREMENT, 
  status_category_id int(10) NOT NULL, 
  name               varchar(255) NOT NULL, 
  PRIMARY KEY (id));
  
CREATE TABLE project_statuses (
  id                 int(10) NOT NULL AUTO_INCREMENT, 
  status_category_id int(10) NOT NULL, 
  name               varchar(255) NOT NULL, 
  PRIMARY KEY (id));
  
  CREATE TABLE projects_persons (
  id         int(10) NOT NULL AUTO_INCREMENT, 
  person_id  int(10) NOT NULL, 
  project_id int(10) NOT NULL, 
  PRIMARY KEY (id, person_id, project_id));
  
ALTER TABLE projects ADD CONSTRAINT FKProjects588697 FOREIGN KEY (company_id) REFERENCES companies (id);
ALTER TABLE invoices ADD CONSTRAINT FKInvoices219624 FOREIGN KEY (project_id) REFERENCES projects (id);
ALTER TABLE projects ADD CONSTRAINT FKProjects965566 FOREIGN KEY (client_id) REFERENCES companies (id);
ALTER TABLE persons ADD CONSTRAINT FKPersons678186 FOREIGN KEY (company_id) REFERENCES companies (id);
ALTER TABLE teams_persons ADD CONSTRAINT FKTeams_Pers284365 FOREIGN KEY (person_id) REFERENCES persons (id);
ALTER TABLE teams_persons ADD CONSTRAINT FKTeams_Pers321748 FOREIGN KEY (team_id) REFERENCES teams (id);
ALTER TABLE tasks ADD CONSTRAINT FKTasks528675 FOREIGN KEY (project_id) REFERENCES projects (id);
ALTER TABLE time_registrations ADD CONSTRAINT FKTime_Regis927685 FOREIGN KEY (task_id) REFERENCES tasks (id);
ALTER TABLE time_registrations ADD CONSTRAINT FKTime_Regis835468 FOREIGN KEY (person_id) REFERENCES persons (id);
ALTER TABLE task_statuses ADD CONSTRAINT FKTask_Statu982149 FOREIGN KEY (status_category_id) REFERENCES status_categories (id);
ALTER TABLE tasks ADD CONSTRAINT FKTasks111043 FOREIGN KEY (task_status_id) REFERENCES task_statuses (id);
ALTER TABLE project_statuses ADD CONSTRAINT FKProject_St38885 FOREIGN KEY (status_category_id) REFERENCES status_categories (id);
ALTER TABLE projects ADD CONSTRAINT FKProjects548315 FOREIGN KEY (project_status_id) REFERENCES project_statuses (id);
ALTER TABLE projects_persons ADD CONSTRAINT FKProjects_P978121 FOREIGN KEY (person_id) REFERENCES Persons (id);
ALTER TABLE projects_persons ADD CONSTRAINT FKProjects_P522689 FOREIGN KEY (project_id) REFERENCES Projects (id);