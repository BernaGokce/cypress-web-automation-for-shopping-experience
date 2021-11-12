Feature: SWAGLABS

    As a SWAGLABS user
    I want to login to the system
    So that I can start shopping

    Scenario: Login with valid user
    Given I am in the login page
    When I type my username "standard_user"
    And I type my password "secret_sauce"
    And I click on submit button
    Then I should be in "Products" page
    And I logged out

    Scenario: Login with invalid user
    Given I am in the login page
    When I type my username "locked_out_user"
    And I type my password "secret_sauce"
    And I click on submit button
    Then I should see error message "Sorry, this user has been locked out."


    Scenario: Success Order Method 1
    Given I login to system with my username "standard_user" and password "secret_sauce"
    Then I should be in "Products" page
    And Products page should list "6" products
    When I click on "Sauce Labs Backpack" product with price "29.99"
    Then "Sauce Labs Backpack" product with price "29.99" detail page should be opened
    When I click on ADD TO CARD button
    Then Shopping Card should have "1" product
    When I click on shopping card
    Then I should see "1" product in shopping card list
    Then I should see "Sauce Labs Backpack" product with price "29.99" with "1" amount
    When I click on CHECKOUT button
    And I fill form with my personal information "Berna", "Gokce", "34182"
    And I click on CONTINUE button
    Then I should see "Sauce Labs Backpack" product with price "29.99" with "1" amount
    And I should see Payment Information as "SauceCard"
    And I should see Shipping Information as "FREE PONY EXPRESS DELIVERY!"
    And Total price should be correct
    And I logged out
    

 Scenario: Success Order Method 2
    Given I login to system with my username "standard_user" and password "secret_sauce"
    Then I should be in "Products" page
    And Products page should list "6" products
    And I select "2" nth product from list
    When I click on ADD TO CARD button
    Then Shopping Card should have "1" product
    When I click on shopping card
    Then I should see "1" product in shopping card list
    And I should see "1" selected product on the list
    When I click on CHECKOUT button
    And I fill form with my personal information "Berna", "Gokce", "34182"
    And I click on CONTINUE button
    Then I should see selected product checkout overview information
    And I should see Payment Information as "SauceCard"
    And I should see Shipping Information as "FREE PONY EXPRESS DELIVERY!"
    And Total price should be correct
    And I click on FINISH button
    Then I complete my order
    And I logged out
  
    Scenario: Remove Order Method 
    Given I login to system with my username "standard_user" and password "secret_sauce"
    Then I should be in "Products" page
    And Products page should list "6" products
    And I select "2" nth product from list
    When I click on ADD TO CARD button
    Then Shopping Card should have "1" product
    When I click on BACK TO PRODUCTS button
    And I select "1" nth product from list
    When I click on ADD TO CARD button
    Then Shopping Card should have "2" product
    When I click on REMOVE button
    Then Shopping Card should have "1" product
    And I logged out
    
    
    

    
