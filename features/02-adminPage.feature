Feature:Admin functionality

Scenario:Verify add Company General Information

 Given log in to the application 
 When mouse hover on Admin
 When mouse hover on Company Information
 When click on General
 And switch to the iframe
 Then verify company info "Company Info : General" 
