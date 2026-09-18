Feature: PIM Page functionality

  Scenario: Verify Add Employee functionality

    Given log in to the application
    Then verify Welcome mvvsrikanth

    When move the mouse to the PIM
    And click on the Add Employee button
    And switch to the iframe

    When enter the first name "mvv"
    When enter the last name "Srikanth"
    When click the Save button to add the new employee

  
  Scenario: Verify Edit Employee
    Given log in to the application
    And switch to the iframe
    And search by Name "Emp. First Name"
    And search for employee "mvv"
    And click on Search Button
    And click on Added Employee
    And click on Contact Details
    And click on Edit Contact
    And select the country from Dropdown "India"
    And enter Street 1 "India"
    And enter Street 2 "India"
    And enter Mobile number "8888888888"
    And click on Save Contact

  Scenario: Verify Delete Employee
   Given log in to the application
   And switch to the iframe
   And search by Name "Emp. First Name"
   And search for employee "mvv"
   And click on Search Button
   When click on select all checkbox
   And click on Delete
   Then Verify successfull message "Successfully Deleted"