# UBDM (user-behaviour-data-management)

This project is inspired on a coding test. It's meant to be a application that does manage user collected data by using tags.

## Useful informations down here

PS: i didn't implemented create user at the client because i had not enough time to do it. sorry.

## Rails API (back-end)
* Ruby version: 2.6.6
* System dependencies: none. it's dockerized.
* Configuration: none needed.
* How to run the automated tests: just `rspec` on root folder.
* Deployment instructions: 
- 1: Set your ruby version to 2.6.6. using ruby version manager (rvm) is easy like that: `rvm use 2.6.6`
- 2: Install dependencies: `bundle install`
- 3: Setup db by running: `rake db:setup`
- 4: Migrate databases: `rake db:migrate db:tests:prepare`
- 5: Seed the database (needed for test since the client is without create user): `rake db:seed`
- 5: Run the server: `rails s` it will start on port 3000 by default.

Ps: Sorry for not having enough time to dockerize it!!

## React Client (front-end)
* React version: latest.
* System dependencies: listed on package.json.
* Configuration: first, `npm install`, then edit config environviment development file if needed. (if the api is running at localhost:3000 then you dont need to change nothing)
* PS: had'nt enough time to create the tests for front-end unfortunately :(
* Deployment instructions: just type `npm start` after configuring the project. It will say that the api is already runing on port 3000 so then just type `Y` and enter it will load up on port 3001.


Things that i would do if had enough time:
- Create front-end unit tests
- Implement OAuth using simple login authentication and set jwt bearer token on requests.
- Implement create new User on client.
- User Tags
... and some more
