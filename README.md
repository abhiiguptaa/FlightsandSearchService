# Welcome to flights service

## Project SEtup

- clone the project on your local
- execute 'npm install' on the same path as of your root directory of the downloaded project
- Create a '.env ' file in the root directory and add the following environment variable
  - 'port =20000'
- Inside the 'src/config' folder create a new file 'config.json' and then add the following of json

```
{
  "development": {
    "username": "root",
    "password": "abhi",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- Once you've added your db config as listed above, go the src folder from your terminal and execute 'npx sequelize create:db'
