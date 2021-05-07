# Here are the steps you should follow for running all the scripts and check out our database design.

1. Have mysql server, any database client and node.js installed. Also have configured a root connection for your mysql server.

2. Configure server's development environment. (using a terminal navigate into `/node` directory).

2.1. Navigate into `/config`, make a copy of `config-template.json` and rename it to `config.json`, then update its content with proper variables.

2.2. Navigate into `/util`, make a copy of both `database-template.js` and `store-template.js`, and rename them into `database.js` and `store.js`, then update their content with proper variables.

2.3. Install all the package dependencies with `npm install`.

3. Configure database

3.1 Open your chosen database client and connect to your mysql server.

3.2 Run script named `init_db.sql`.

4. Update the database structure by executing command `npm run migrate` in the previously opened terminal.

5. Run script named `stored_objects.sql`.

6. Run script named `load_into_db.sql`.

At this point you should meet all the requirements to create invoices and test the invoicing functionality.
To test that out, you can execute the following commands in your database client console:

`select * from management.tasks;`
`select * from management.time_registrations;`

Now you should have access to 2 output tabs. In the tasks table you can see that all records have the field `locked_date` as `null` and all time entries in `time_registrations` table have the field `locked` set to `0`.

7. Run script `insert_invoices.sql;`

8. Rerun the previous 2 SELECT statements and notice the changes.

9. Feel free to start the backend in development mode by executing `npm run start-dev` and test the routes with postman.

Have fun!
