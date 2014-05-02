Feature: People search
    As a regular employee 
    I can search for other employees 
    so that I can find their contact information
    
       @tags
    Scenario: Search by valid last name  
       Given user is on search page
       When user enters "Allen" in search box
       And user submits search request
       Then the output should be "Allen"
       
    @tags1
    Scenario: Search by first and last name  
       Given user is on search page
       When user enters "James Cameron" in search box
       And user submits search request
       Then the output should be "James Cameron"
    @tags   
    Scenario: Search by valid first name
    	Given user is on search page
       When user enters "Addie" in search box
       And user submits search request
       Then the output should be "Addie"
    	
    @tags   
    Scenario: Search by valid email
    	Given user is on search page
       When user enters "Cara.Murphey@whitestratus.com" in search box
       And user submits search request
       Then the output should be "Cara.Murphey@whitestratus.com"
    	
     @tags   
    Scenario: Cheking we are searing for people
    	Given user is on search page
    	And people scope is checked
       When user enters "a" in search box
       And user submits search request
       Then we should see Users first name, last name, and email 
       
       @tags
     Scenario: toggle the direction of the sort
       Given user is on search page
       When user enters "ab" in search box
       And user submits search request
       And user clicks on last name to sort
       Then arrow should be "ngSortButtonDown"
       And user clicks on last name to sort
	   Then arrow should be "ngSortButtonUp"
	   
	   @tags0
	 Scenario: bookmark page and open it
	   Given user is on search page
       When user enters "ab" in search box
       And user bookmarks page
       And user closes browser
       Then user opens the browser
       And clicks one the bookmark
       Then he would be on last page with same results
       
   
       
	   
       #see the curent sort direction
       #check if there is, the other should be hidden
       
       
       
       