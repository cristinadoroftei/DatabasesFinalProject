#invoices
use management;
INSERT INTO 
	`management`.`invoices` (`project_id`, `name`, `created_date`, `due_date`, `start_date`, `end_date`, `status`, `notes`) 
VALUES 
	('4', 'Requirements Analysis', '2021-03-06', '2021-03-31', '2021-02-01', '2021-02-28', b'0', 'created invoice for project on period february'),
    ('6', 'March Invoice', '2021-03-06', '2021-03-31', '2021-03-01', '2021-03-31', b'0', 'created invoice for project on march');