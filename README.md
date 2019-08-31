# Funny movie

## Install the package.json
```
  npm install
```

## Set up database
**Need to edit the config file for your database in ./config/config.json then run below script:**
```
  sequelize db:migrate
```
Now your BD has been created
## Set up env
To using the youtube api you need to edit it in ./.env file at API_KEY
Also if you want to use another SECRET_KEY for JWT generator you can edit it

## Start project in your local
You need to install nodemon package
```
  npm install -g nodemon
```
then run script:
```
  npm run start
```

## For testing 
Just need to run this script:
```
  npm run test
```