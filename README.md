### Overview

This is a web app that allows you to search for specific teams and players and view some of their statistics. The app was built using React, Express (MySQL), and Node.js. 

### Running the App

**Setup**

Before running the app, you should download the MySQL database [here](https://www.dropbox.com/s/ai44n0rmno4wary/mysqlconverted.zip?dl=0). Once you've downloaded the database, you can use [MySQL Workbench](https://www.mysql.com/products/workbench/) to locally host the database. Ensure that you've downloaded MySQL already and have set the root password.

Once in MySQL Workbench, choose the default MySQL Connection (local instance 3306). This is the port the app uses to connect to the  database. Enter your password for the MySQL instance. Once you've logged in, you can use `Command + U` (or Database -> Connect to Database) to create a new database. Type **soccer_db** into the "default schema" input field. (*It's important that you name the database properly, since all queries in the app assume this is the db name*). 

Once you've created the schema, you can import data by running the SQL script provided in the link above. Refresh the local instance and you should see all the tables of the database in your `soccer_db` schema. 

**Running the app**

Once you've properly setup your database, you can go to your terminal. Navigate to the top level of this directory and use the command: 

#### `npm start`

to run the app in development mode. You can find the app at http://localhost:3000.


### Questions, Comments, Concerns

Feel free to reach out to me personally at grant.kalasky@berkeley.edu.
