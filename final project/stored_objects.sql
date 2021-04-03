
-- view for invoices
use management;
DROP VIEW IF EXISTS invoices_amounts; 
CREATE VIEW invoices_amounts AS
	SELECT 
        invoices.id,
		invoices.project_id,
		sum(time_registrations.minutes_registered) as minutes_registered,
		round(sum(time_registrations.minutes_registered / 60 * persons.internal_cost), 2) as total,
		invoices.start_date,
		invoices.end_date
	FROM
		time_registrations
			INNER JOIN tasks ON time_registrations.task_id = tasks.id
            INNER JOIN projects ON tasks.project_id = projects.id
            INNER JOIN invoices ON invoices.project_id = projects.id
            INNER JOIN persons ON persons.id = time_registrations.person_id
	WHERE 
		time_registrations.locked = b'1'
	GROUP BY 
		invoices.id;



-- trigger after invoce insertion
use management;
DELIMITER $$
CREATE TRIGGER after_invoice
AFTER INSERT ON invoices FOR EACH ROW 
BEGIN
	DECLARE inserted BOOLEAN;
    SELECT 1 INTO @inserted 
		FROM 
			invoices 
        WHERE 
			invoices.id = NEW.id;
    IF @inserted = 1 THEN
		UPDATE tasks 
			INNER JOIN projects 
				ON projects.id = tasks.project_id
			INNER JOIN time_registrations
				ON tasks.id = time_registrations.task_id
		SET 
			time_registrations.locked = b'1'
		WHERE  
			projects.id = NEW.project_id 
				AND
			time_registrations.time_reg_date 
				BETWEEN NEW.start_date AND NEW.end_date;
		UPDATE 
			tasks
		SET 
			tasks.locked_date = NEW.end_date
        WHERE 
			tasks.project_id = NEW.project_id;
	END IF;
END $$










