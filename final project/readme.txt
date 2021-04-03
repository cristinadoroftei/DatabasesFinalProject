Here are the steps you should follow for running all the scripts and check out our database design.

1. Have mysql server and workbench installed.

2. Open mysql workbench and connect to your mysql server.

3. Run script named init_db.sql

4. Run script named stored_objects.sql

5. Run script named load_into_db.sql

At this point you should meet all the requirements to create invoices and test the invoicing functionality.
Just to be sure, execute the following commands:

select * from management.tasks;
select * from management.time_registrations;

Now you should have access to 2 output tabs. In the tasks table you can see that all records have the field locked_date as null and all time entries in time_registrations table have the field locked set to 0.

6. Run script insert_invoices.sql;

7. Rerun the previous 2 SELECT statements and notice the changes.

Have fun!
