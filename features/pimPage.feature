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

    When click the Edit button
    Then verify checkbox inside a frame

    When click the Edit button
    And click the Back button to return to the previous page

    And search employee first name in search field
    And enter employee first name in search field
    And click the search button

    