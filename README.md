# Cypress Web Automation With Cucumber, Mochawesome and Docker

## Introduction
cypress-web-automation-for-shopping-experience is a boiler plate for web automation testing with Cypress.

To reach .feature file check 'cypress>integration'

There are 4 scenarios:
- Login with valid user : To check user successfully logged in
- Login with invalid user: To check user not being able to login
- Success Order Method 1: User journey from login to complete shopping
- Success Order Method 2: Same journey with Success Order Method 1 but with a different script spelling
- Remove Order Method: Checks if the user can successfully delete the product from shopping card

To run specific scenarios add ```@focus``` to the beginning of the scenario.

## Download & Configuration
1. ```npm init``` 
2. ```npm install``` 

## Scripts
To check 'package.json > "scripts"' field
1. ```npm run cy:open```  -> open cypress ui 
2. ```npm run cy:run``` -> run test headless
3. ```npx cypress run --spec cypress/integration/swaglabs.feature``` -> run specific feature file

## Reporting - mochawesome
1. To check 'package.json > "scripts"' field 
```npm run generate:report```  -> create reports 
2. To see reports as HTML 'cypress > reports > full_report.html'
3. To see reports as JSON 'cypress > reports > full_report.json'

## PS: Delete 'import cy from "cypress"' from step_definition file 
https://github.com/TheBrainFamily/cypress-cucumber-preprocessor/issues/555

## Docker run
```docker build -t cypress .``` -> run tests with docker