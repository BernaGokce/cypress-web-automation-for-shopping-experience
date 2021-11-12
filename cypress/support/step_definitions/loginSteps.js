import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from "../pages/loginPage"
import BaseUtils from '../utils/baseUtils';

const loginPage = new LoginPage();
const baseUtils = new BaseUtils();

Given('I am in the login page', ()=> {
    loginPage.visit()
})

Then('I should be in {string} page', title => {
    baseUtils.checkText(title)
}) 

Then('I should see error message {string}', error_message => {
    baseUtils.checkText(error_message)
}) 

And('I click on submit button', ()=> {
    loginPage.submit()
})

When('I type my username {string}', username => {
    loginPage.fillUsername(username)
})
  
When('I type my password {string}', password => {
    loginPage.fillPassword(password)
})

let username = 'username';
let password = 'password';
Given('I login to system with my username {string} and password {string}', (v1, v2) => {
    username = v1;
    password = v2;
    loginPage.visit()
    loginPage.fillUsername(username)
    loginPage.fillPassword(password)
    loginPage.submit()
}) 