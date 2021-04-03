#companies
INSERT INTO 
	`management`.`Companies` (`name`, `contact_name`, `contact_email`, `contact_phone`) 
VALUES 
	('IBM', 'John Deer', 'johndeer@gmail.com', '+45123456'),
	('Hotel DAngleterre', 'Maria Smith', 'mariasmith@gmail.com', '+4512134'),
	('Tesla', 'Elon Musk', 'elonmusk@gmail.com', '+454583456'),
	('Cinema Imperial', 'Anders Lundgaard', 'anderslundgaard@gmail.com', '+451237382'),
    ('Microsoft', 'Bill Gates', 'billgates@gmail.com', '+4523445643'),
	('Amazon', 'Jeff Bezos', 'jeffbezos@gmail.com', '+4512334562'),
    ('Alchemist', 'Alchemist John', 'alchemistjohn@gmail.com', '+454582356');
    
#persons
INSERT INTO 
	`management`.`Persons` (`company_id`, `first_name`, `last_name`, `user_type`, `username`, `password`, `internal_cost`)
VALUES 
	('1', 'Maria', 'West', 'CONTROLLER', 'mariawest', '$2y$12$mQoG41vCy3WX06gkAb1mxOKx2QTp56VGd56RLS09767vul/1kng/i ', '120'),
	('1', 'Steven', 'Altcoin', 'ADMIN', 'stevenrussell', '$2y$12$mQoG41vCy3WX06gkAb1mxOKx2QTp56VGd56RLS09767vul/1kng/i ', '140'),
	('1', 'Daniel', 'Ricciardo', 'ADMIN', 'danielricciardo', '$2y$12$mQoG41vCy3WX06gkAb1mxOKx2QTp56VGd56RLS09767vul/1kng/i ', '95'),
	('1', 'George', 'Russell', 'CONTROLLER', 'georgerussell', '$2y$12$mQoG41vCy3WX06gkAb1mxOKx2QTp56VGd56RLS09767vul/1kng/i ', '150'),
	('2', 'Lewis', 'Hamilton', 'ADMIN', 'lewishamilton', '$2y$12$mQoG41vCy3WX06gkAb1mxOKx2QTp56VGd56RLS09767vul/1kng/i ', '100'),
	('2', 'Niki', 'Lauda', 'CONTROLLER', 'nikilauda', '$2y$12$mQoG41vCy3WX06gkAb1mxOKx2QTp56VGd56RLS09767vul/1kng/i ', '145'),
	('2', 'Lisa', 'Gonsalez', 'ADMIN', 'lisagonsalez', '$2y$12$mQoG41vCy3WX06gkAb1mxOKx2QTp56VGd56RLS09767vul/1kng/i ', '135'),
	('3', 'Henrik', 'Ginger', 'ADMIN', 'henrikginger', '$2y$12$mQoG41vCy3WX06gkAb1mxOKx2QTp56VGd56RLS09767vul/1kng/i ', '110'),
	('3', 'Millie', 'Brown', 'CONTROLLER', 'milliebrown', '$2y$12$mQoG41vCy3WX06gkAb1mxOKx2QTp56VGd56RLS09767vul/1kng/i ', '145'),
	('3', 'Heidi', 'Blue', 'CONTROLLER', 'heidiblue', '$2y$12$mQoG41vCy3WX06gkAb1mxOKx2QTp56VGd56RLS09767vul/1kng/i ', '110'),
	('4', 'Alex', 'Albon', 'ADMIN', 'alexalbon', '$2y$12$mQoG41vCy3WX06gkAb1mxOKx2QTp56VGd56RLS09767vul/1kng/i ', '115'),
	('4', 'Max', 'Verstappen', 'CONTROLLER', 'maxverstappen', '$2y$12$mQoG41vCy3WX06gkAb1mxOKx2QTp56VGd56RLS09767vul/1kng/i ', '135'),
	('4', 'Bella', 'Hadid', 'ADMIN', 'bellahadid', '$2y$12$mQoG41vCy3WX06gkAb1mxOKx2QTp56VGd56RLS09767vul/1kng/i ', '145'),
    ('5', 'John', 'Smith', 'ADMIN', 'johnsmith', '$2y$12$mQoG41vCy3WX06gkAb1mxOKx2QTp56VGd56RLS09767vul/1kng/i ', '200'),
    ('5', 'Jane', 'Doe', 'CONTROLLER', 'janedoe', '$2y$12$mQoG41vCy3WX06gkAb1mxOKx2QTp56VGd56RLS09767vul/1kng/i ', '120'),
    ('5', 'Adam', 'Sandler', 'CONTROLLER', 'adamsandler', '$2y$12$mQoG41vCy3WX06gkAb1mxOKx2QTp56VGd56RLS09767vul/1kng/i ', '160'),
    ('6', 'John', 'Snow', 'ADMIN', 'johnsnow', '$2y$12$mQoG41vCy3WX06gkAb1mxOKx2QTp56VGd56RLS09767vul/1kng/i ', '105'),
    ('6', 'Elena', 'Farago', 'CONTROLLER', 'elenafarago', '$2y$12$mQoG41vCy3WX06gkAb1mxOKx2QTp56VGd56RLS09767vul/1kng/i ', '110'),
    ('6', 'Michelle', 'Obama', 'ADMIN', 'michelleobama', '$2y$12$mQoG41vCy3WX06gkAb1mxOKx2QTp56VGd56RLS09767vul/1kng/i ', '100');

#teams
INSERT INTO 
	`management`.`Teams` (`name`) 
VALUES 
	('Rainbow Warriors'),
	('Dream Crushers'),
	('Omega Crew'),
	('Little Conquerors'),
	('Mad Foxes'),
	('Horrible Miners'),
	('Flawless Flames'),
	('Dangerous Dolphins'),
    ('Punctual Devs'),
    ('Screaming Ladies');

#teams-persons
INSERT INTO 
	`management`.`Teams_Persons` (`person_id`, `team_id`) 
VALUES 
	('1', '1'),
	('2', '1'),
	('3', '2'),
	('4', '2'),
	('5', '3'),
	('6', '3'),
	('5', '4'),
	('7', '4'),
	('8', '5'),
	('9', '5'),
	('8', '6'),
	('10', '6'),
	('11', '7'),
	('12', '7'),
	('11', '8'),
	('13', '8'),
    ('14', '9'),
    ('15', '9'),
    ('16', '9'),
    ('17', '10'),
    ('18', '10'),
    ('19', '10');

#status_categories
INSERT INTO `management`.`status_categories` (`name`) VALUES ('TODO'), ('INPROGRESS'), ('DONE');

#task_statuses
INSERT INTO 
	`management`.`task_statuses` (`status_category_id`, `name`) 
VALUES 
('1', 'To do'),
('2', 'In progress'),
('2', 'Ready for test'),
('3', 'Done');

#project_statuses
INSERT INTO 
`management`.`project_statuses` (`status_category_id`, `name`)
 VALUES 
 ('1', 'Opportunities'),
 ('1', 'Planning'),
 ('2', 'Running'),
 ('3', 'Done');
 
#projects
INSERT INTO 
	`management`.`projects` (`company_id`, `client_id`, `name`, `description`, `start_date`, `end_date`, `project_status_id`, `billable`) 
VALUES 
	('1', '7', 'System for orders and payments', 'Restaurant Alechemist needs a system for their food orders and payments', '2021-03-10', '2022-03-10', '2', b'1'),
    ('5', '2', 'System for bookings', 'Hotel DAnglatere wants a better system for their accomodation', '2021-04-10', '2022-04-10', '2', b'1'),
    ('6', '4', 'Streaming platform', 'Cinema Imperial needs a straming platform for their movies', '2021-03-20', '2022-03-20', '2', b'1'),
    ('1', '3', 'Improvement of self driving system', 'Review and improve the self driving system of Tesla cars', '2021-02-05', '2022-02-05', '3', b'1'),
    ('5', '5', 'Maintenance of Office package', null, '2020-03-10', null, '3', b'0'),
    ('6', '6', 'Maintenance of Amazon Web Services', null, '2020-03-10', null, '3', b'0');
    
#projects_persons
INSERT INTO 
	`management`.`projects_persons` (`person_id`, `project_id`) 
VALUES 
	('1', '1'),
    ('2', '1'),
    ('3', '1'),
    ('4', '1'),
    ('14', '2'),
    ('15', '2'),
    ('16', '2'),
    ('17', '3'),
    ('18', '3'),
    ('19', '3'),
    ('1', '4'),
    ('2', '4'),
    ('3', '4'),
    ('4', '4'),
    ('14', '5'),
    ('15', '5'),
    ('16', '5'),
    ('17', '6'),
    ('18', '6'),
    ('19', '6');
    
#tasks
INSERT INTO 
	`management`.`tasks` (`project_id`, `name`, `description`, `minutes_estimated`, `task_status_id`, `start_date`, `end_date`) 
VALUES 
	('1', 'Analysis of inital requirements', 'gather the whole team and analise the initial requirements', '60', '1', '2021-03-10', '2021-03-10'),
    ('1', 'Plan database structure', null, '120', '1', '2021-03-10', '2021-03-10'),
	('2', 'Requirements Analysis', 'Have a few meetings with the client to gather the starting requirements', '120', '1', '2021-04-11', '2021-04-20'),
    ('2', 'Build backlog', 'Build backlog based on requirements gathered', '180', '1', '2021-04-20', '2021-04-22'),
    ('2', 'Estimate first sprint', 'Go through backlog and estimate first tasks to work on during first sprint', '120', '1', '2021-04-22', '2021-04-23'),
    ('3', 'Build product backlog', 'the product owner needs to build the product backlog', '60', '1', '2021-03-10', '2021-03-10'),
    ('3', 'Sprint 1 planning', null, '30', '1', '2021-03-10', '2021-03-10'),
    ('4', 'Requirements Analysis', 'Have a few meetings with the client to gather the starting requirements', '120', '4', '2021-02-05', '2021-02-05'),
    ('4', 'Build backlog', 'Build backlog based on requirements gathered', '150', '2', '2021-03-05', '2021-03-20'),
    ('4', 'Estimate first sprint', 'Go through backlog and estimate first tasks to work on during first sprint', '100', '1', '2021-03-22', '2021-03-25'),
	('5', 'Requirements Analysis', 'Have an internal meeting discussing what need to be improved', '150', '4', '2021-02-05', '2021-02-05'),
    ('5', 'Build backlog', 'Build backlog for first iteration', '300', '2', '2021-03-05', '2021-03-20'),
    ('5', 'Estimate first sprint', 'Go through backlog and estimate first tasks to work on during first sprint', '100', '1', '2021-03-22', '2021-03-25'),
    ('6', 'Containerize application and migrate it to EKS', 'We are currently running our services on EC2 machines using Auto Scaling Groups, and are looking to containerize it', '500', '1', '2021-03-11', '2021-03-14'),
    ('6', 'Set up a monitoring stack', 'Those metrics are also going to be used for service capacity planning.', '300', '3', '2021-03-07', '2021-03-20'),
    ('6', 'Migrate to the AWS CI/CD stack.', 'The current CI/CD pipeline is also not reliable, and we are looking to migrate to the AWS CI/CD stack.', '200', '4', '2021-03-04', '2021-03-04');

#time registrations
INSERT INTO 
	`management`.`time_registrations` (`task_id`, `person_id`, `minutes_registered`, `notes`, `time_reg_date`, `locked`) 
VALUES 
	('8', '1', '120', 'gathered a list of requirements', '2021-02-05', b'0'),
    ('9', '2', '90', 'needs refining', '2021-03-06', b'0'),
    ('9', '3', '60', 'refined backlog, waiting for approval', '2021-03-07', b'0'),
    ('9', '4', '60', 'approved', '2021-03-08', b'0'),
    ('11', '14', '180', 'gathered a list of requirements', '2021-02-05', b'0'),
    ('12', '15', '210', 'created backlog', '2021-03-05', b'0'),
    ('12', '16', '60', 'refined backlog', '2021-03-06', b'0'),
    ('15', '17', '120', 'research tooling options', '2021-03-07', b'0'),
    ('15', '18', '300', 'simple stack built', '2021-03-08', b'0'),
    ('15', '19', '120', 'refactored components', '2021-03-09', b'0'),
    ('16', '19', '20', null, '2021-03-04', b'0'),
	('16', '18', '15', 'helped michelle', '2021-03-04', b'0'),
	('16', '17', '100', null, '2021-03-04', b'0');


    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    