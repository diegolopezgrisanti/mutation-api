# MUTATION API

This is the API for the MUTATION APP project, an app where you can check mutations.

This project uses a MySQL database and it's developed using NodeJS and Express.

## Installation

Download this repository and run npm install to install the project's dependencies.

```
git clone git@github.com:diegolopezgrisanti/mutation-api.git
cd mutation-api
npm install

```

Then, you need to configure the .env file. Use the .env.example file as an example to create a .env file on the project's root folder

Use the SQL file inside the "database" folder to import the project's database on your local MYSQL server

After you have configured the .env file and imported the database, you are ready to start the server running npm run start:dev on your terminal

```
npm run start:dev
```

The server will be running on http://localhost:3000 (unless you set a different port on your .env file)
