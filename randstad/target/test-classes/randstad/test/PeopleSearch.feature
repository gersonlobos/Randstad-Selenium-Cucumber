Feature: People Tables search
	As a regular employee 
	I can search for other employees 
	so that I can find their contact information, title, or photo		

     
#	Scenario Outline: Search by valid last name
#		Given the input <employeeLastName> exists in the people directory
#		When it is input
#		Then the output should be <outputB>
		
#		Examples:
#		|FirstName  | LasttName | Email                           |
#        | Charles   | Allen     | Charles.Allen@whitestratus.com  |
#        | Allen     | Martinez  | Allen.Martinez@whitestratus.com |


	 
	@tags
	Scenario: Search people by valid name
		Given user is on search page 
		And the following employees exist
		|FirstName  | LastName | Email                             | 
		| Charles   |  Allen    |  Charles.Allen@whitestratus.com  |
		| Allen     |  Martinez |  Allen.Martinez@whitestratus.com |
		| Allen     |  Riordan  |  Allen.Riordan@whitestratus.com  |
		
    	And user enters "Allen" in search box
		When user submits search request
		Then the output should be
		|FirstName  | LastName | Email                             | 
		| Charles   |  Allen    |  Charles.Allen@whitestratus.com  |
		| Allen     |  Martinez |  Allen.Martinez@whitestratus.com |
		| Allen     |  Riordan  |  Allen.Riordan@whitestratus.com  |
		
		@tags
	Scenario: Search people by two letters
		Given user is on search page 
		And the following employees exist
		|FirstName|  LastName    | Email               					| 
        | Manuel  |  Ab          |  Manuel.Ab@whitestratus.com 			|
		| Jacob   |  Abc         |  Jacob.Abc@whitestratus.com			|
		| John    |  Abcd        |  John.Abcd@whitestratus.com 			|
		| Calvin  |  Abcde       |  Calvin.Abcde@whitestratus.com		|
		| David   |  Abcdef      |  David.Abcdef@whitestratus.com 		|
		| Earl    |  Abcdefg     |  Earl.Abcdefg@whitestratus.com       |
		| Barbara |  Abcdefgh    |  Barbara.Abcdefgh@whitestratus.com   |
		| Filip   |  Abcdefghi   |  Filip.Abcdefghi@whitestratus.com    |
		| Patrick |  Abcdefghij  |  Patrick.Abcdefghij@whitestratus.com |
		| Ana     |  Abdullah    |  Ana.Abdullah@whitestratus.com       |
		| Ruby    |  Abercrombie |  Ruby.Abercrombie@whitestratus.com   |
		| Anita   |  Abeyta      |  Anita.Abeyta@whitestratus.com       |
		| Juanita |  Ables       |  Juanita.Ables@whitestratus.com      |
		| Stacy   |  Abram       |  Stacy.Abram@whitestratus.com        |
		| Emma    |  Abramson    |  Emma.Abramson@whitestratus.com      |
		| Abraham |  Cotten      |  Abraham.Cotten@whitestratus.com     |
		| Abel    |  Levasseur   |  Abel.Levasseur@whitestratus.com     |
		| Abigail |  Peden       |  Abigail.Peden@whitestratus.com      |
    	And user enters "ab" in search box
		When user submits search request
		Then the output should be
		|FirstName|  LastName    | Email               					| 
        | Manuel  |  Ab          |  Manuel.Ab@whitestratus.com 			|
		| Jacob   |  Abc         |  Jacob.Abc@whitestratus.com			|
		| John    |  Abcd        |  John.Abcd@whitestratus.com 			|
		| Calvin  |  Abcde       |  Calvin.Abcde@whitestratus.com		|
		| David   |  Abcdef      |  David.Abcdef@whitestratus.com 		|
		| Earl    |  Abcdefg     |  Earl.Abcdefg@whitestratus.com       |
		| Barbara |  Abcdefgh    |  Barbara.Abcdefgh@whitestratus.com   |
		| Filip   |  Abcdefghi   |  Filip.Abcdefghi@whitestratus.com    |
		| Patrick |  Abcdefghij  |  Patrick.Abcdefghij@whitestratus.com |
		| Ana     |  Abdullah    |  Ana.Abdullah@whitestratus.com       |
		| Ruby    |  Abercrombie |  Ruby.Abercrombie@whitestratus.com   |
		| Anita   |  Abeyta      |  Anita.Abeyta@whitestratus.com       |
		| Juanita |  Ables       |  Juanita.Ables@whitestratus.com      |
		| Stacy   |  Abram       |  Stacy.Abram@whitestratus.com        |
		| Emma    |  Abramson    |  Emma.Abramson@whitestratus.com      |
		| Abraham |  Cotten      |  Abraham.Cotten@whitestratus.com     |
		| Abel    |  Levasseur   |  Abel.Levasseur@whitestratus.com     |
		| Abigail |  Peden       |  Abigail.Peden@whitestratus.com      |
	
       
     @tags
     Scenario: Sorting users by last name
    	Given user is on search page
    	And the following employees exist
		|FirstName|  LastName    | Email               					| 
        | Manuel  |  Ab          |  Manuel.Ab@whitestratus.com 			|
		| Jacob   |  Abc         |  Jacob.Abc@whitestratus.com			|
		| John    |  Abcd        |  John.Abcd@whitestratus.com 			|
		| Calvin  |  Abcde       |  Calvin.Abcde@whitestratus.com		|
		| David   |  Abcdef      |  David.Abcdef@whitestratus.com 		|
		| Earl    |  Abcdefg     |  Earl.Abcdefg@whitestratus.com       |
		| Barbara |  Abcdefgh    |  Barbara.Abcdefgh@whitestratus.com   |
		| Filip   |  Abcdefghi   |  Filip.Abcdefghi@whitestratus.com    |
		| Patrick |  Abcdefghij  |  Patrick.Abcdefghij@whitestratus.com |
		| Ana     |  Abdullah    |  Ana.Abdullah@whitestratus.com       |
		| Ruby    |  Abercrombie |  Ruby.Abercrombie@whitestratus.com   |
		| Anita   |  Abeyta      |  Anita.Abeyta@whitestratus.com       |
		| Juanita |  Ables       |  Juanita.Ables@whitestratus.com      |
		| Stacy   |  Abram       |  Stacy.Abram@whitestratus.com        |
		| Emma    |  Abramson    |  Emma.Abramson@whitestratus.com      |
		| Abraham |  Cotten      |  Abraham.Cotten@whitestratus.com     |
		| Abel    |  Levasseur   |  Abel.Levasseur@whitestratus.com     |
		| Abigail |  Peden       |  Abigail.Peden@whitestratus.com      |
       When user enters "ab" in search box
       And user submits search request
       And user clicks on last name to sort
	   Then the output should be
	   	|FirstName|  LastName    | Email               					| 
		| Abigail |  Peden       |  Abigail.Peden@whitestratus.com      |
		| Abel    |  Levasseur   |  Abel.Levasseur@whitestratus.com     |
		| Abraham |  Cotten      |  Abraham.Cotten@whitestratus.com     |
		| Emma    |  Abramson    |  Emma.Abramson@whitestratus.com      |
		| Stacy   |  Abram       |  Stacy.Abram@whitestratus.com        |
		| Juanita |  Ables       |  Juanita.Ables@whitestratus.com      |
		| Anita   |  Abeyta      |  Anita.Abeyta@whitestratus.com       |
		| Ruby    |  Abercrombie |  Ruby.Abercrombie@whitestratus.com   |
		| Ana     |  Abdullah    |  Ana.Abdullah@whitestratus.com       |
		| Patrick |  Abcdefghij  |  Patrick.Abcdefghij@whitestratus.com |
		| Filip   |  Abcdefghi   |  Filip.Abcdefghi@whitestratus.com    |
		| Barbara |  Abcdefgh    |  Barbara.Abcdefgh@whitestratus.com   |
		| Earl    |  Abcdefg     |  Earl.Abcdefg@whitestratus.com       |
		| David   |  Abcdef      |  David.Abcdef@whitestratus.com 		|
		| Calvin  |  Abcde       |  Calvin.Abcde@whitestratus.com		|
		| John    |  Abcd        |  John.Abcd@whitestratus.com 			|
		| Jacob   |  Abc         |  Jacob.Abc@whitestratus.com			|
        | Manuel  |  Ab          |  Manuel.Ab@whitestratus.com 			|
        
         @tags
     Scenario: Sorting users by First name decending order
    	Given user is on search page
    	And the following employees exist
		|FirstName|  LastName    | Email               					| 
        | Manuel  |  Ab          |  Manuel.Ab@whitestratus.com 			|
		| Jacob   |  Abc         |  Jacob.Abc@whitestratus.com			|
		| John    |  Abcd        |  John.Abcd@whitestratus.com 			|
		| Calvin  |  Abcde       |  Calvin.Abcde@whitestratus.com		|
		| David   |  Abcdef      |  David.Abcdef@whitestratus.com 		|
		| Earl    |  Abcdefg     |  Earl.Abcdefg@whitestratus.com       |
		| Barbara |  Abcdefgh    |  Barbara.Abcdefgh@whitestratus.com   |
		| Filip   |  Abcdefghi   |  Filip.Abcdefghi@whitestratus.com    |
		| Patrick |  Abcdefghij  |  Patrick.Abcdefghij@whitestratus.com |
		| Ana     |  Abdullah    |  Ana.Abdullah@whitestratus.com       |
		| Ruby    |  Abercrombie |  Ruby.Abercrombie@whitestratus.com   |
		| Anita   |  Abeyta      |  Anita.Abeyta@whitestratus.com       |
		| Juanita |  Ables       |  Juanita.Ables@whitestratus.com      |
		| Stacy   |  Abram       |  Stacy.Abram@whitestratus.com        |
		| Emma    |  Abramson    |  Emma.Abramson@whitestratus.com      |
		| Abraham |  Cotten      |  Abraham.Cotten@whitestratus.com     |
		| Abel    |  Levasseur   |  Abel.Levasseur@whitestratus.com     |
		| Abigail |  Peden       |  Abigail.Peden@whitestratus.com      |
       When user enters "ab" in search box
       And user submits search request
       And user clicks on First name to sort
	   Then the output should be
	   	|FirstName|  LastName    | Email               					| 
	   	| Stacy   |  Abram       |  Stacy.Abram@whitestratus.com        |
		| Ruby    |  Abercrombie |  Ruby.Abercrombie@whitestratus.com   |
		| Patrick |  Abcdefghij  |  Patrick.Abcdefghij@whitestratus.com |
        | Manuel  |  Ab          |  Manuel.Ab@whitestratus.com 			|
		| Juanita |  Ables       |  Juanita.Ables@whitestratus.com      |
		| John    |  Abcd        |  John.Abcd@whitestratus.com 			|
		| Jacob   |  Abc         |  Jacob.Abc@whitestratus.com			|
		| Filip   |  Abcdefghi   |  Filip.Abcdefghi@whitestratus.com    |
		| Emma    |  Abramson    |  Emma.Abramson@whitestratus.com      |
		| Earl    |  Abcdefg     |  Earl.Abcdefg@whitestratus.com       |
		| David   |  Abcdef      |  David.Abcdef@whitestratus.com 		|
		| Calvin  |  Abcde       |  Calvin.Abcde@whitestratus.com		|
		| Barbara |  Abcdefgh    |  Barbara.Abcdefgh@whitestratus.com   |
		| Anita   |  Abeyta      |  Anita.Abeyta@whitestratus.com       |
		| Ana     |  Abdullah    |  Ana.Abdullah@whitestratus.com       |
		| Abraham |  Cotten      |  Abraham.Cotten@whitestratus.com     |
		| Abigail |  Peden       |  Abigail.Peden@whitestratus.com      |
       	| Abel    |  Levasseur   |  Abel.Levasseur@whitestratus.com     |
       
       
        @tags
     Scenario: Sorting users by Email decending order
    	Given user is on search page
    	And the following employees exist
		|FirstName|  LastName    | Email               					| 
        | Manuel  |  Ab          |  Manuel.Ab@whitestratus.com 			|
		| Jacob   |  Abc         |  Jacob.Abc@whitestratus.com			|
		| John    |  Abcd        |  John.Abcd@whitestratus.com 			|
		| Calvin  |  Abcde       |  Calvin.Abcde@whitestratus.com		|
		| David   |  Abcdef      |  David.Abcdef@whitestratus.com 		|
		| Earl    |  Abcdefg     |  Earl.Abcdefg@whitestratus.com       |
		| Barbara |  Abcdefgh    |  Barbara.Abcdefgh@whitestratus.com   |
		| Filip   |  Abcdefghi   |  Filip.Abcdefghi@whitestratus.com    |
		| Patrick |  Abcdefghij  |  Patrick.Abcdefghij@whitestratus.com |
		| Ana     |  Abdullah    |  Ana.Abdullah@whitestratus.com       |
		| Ruby    |  Abercrombie |  Ruby.Abercrombie@whitestratus.com   |
		| Anita   |  Abeyta      |  Anita.Abeyta@whitestratus.com       |
		| Juanita |  Ables       |  Juanita.Ables@whitestratus.com      |
		| Stacy   |  Abram       |  Stacy.Abram@whitestratus.com        |
		| Emma    |  Abramson    |  Emma.Abramson@whitestratus.com      |
		| Abraham |  Cotten      |  Abraham.Cotten@whitestratus.com     |
		| Abel    |  Levasseur   |  Abel.Levasseur@whitestratus.com     |
		| Abigail |  Peden       |  Abigail.Peden@whitestratus.com      |
       When user enters "ab" in search box
       And user submits search request
       And user clicks on Email name to sort
	   Then the output should be
	   	|FirstName|  LastName    | Email               					| 
	   	| Stacy   |  Abram       |  Stacy.Abram@whitestratus.com        |
		| Ruby    |  Abercrombie |  Ruby.Abercrombie@whitestratus.com   |
		| Patrick |  Abcdefghij  |  Patrick.Abcdefghij@whitestratus.com |
        | Manuel  |  Ab          |  Manuel.Ab@whitestratus.com 			|
		| Juanita |  Ables       |  Juanita.Ables@whitestratus.com      |
		| John    |  Abcd        |  John.Abcd@whitestratus.com 			|
		| Jacob   |  Abc         |  Jacob.Abc@whitestratus.com			|
		| Filip   |  Abcdefghi   |  Filip.Abcdefghi@whitestratus.com    |
		| Emma    |  Abramson    |  Emma.Abramson@whitestratus.com      |
		| Earl    |  Abcdefg     |  Earl.Abcdefg@whitestratus.com       |
		| David   |  Abcdef      |  David.Abcdef@whitestratus.com 		|
		| Calvin  |  Abcde       |  Calvin.Abcde@whitestratus.com		|
		| Barbara |  Abcdefgh    |  Barbara.Abcdefgh@whitestratus.com   |
		| Anita   |  Abeyta      |  Anita.Abeyta@whitestratus.com       |
		| Ana     |  Abdullah    |  Ana.Abdullah@whitestratus.com       |
		| Abraham |  Cotten      |  Abraham.Cotten@whitestratus.com     |
		| Abigail |  Peden       |  Abigail.Peden@whitestratus.com      |
       	| Abel    |  Levasseur   |  Abel.Levasseur@whitestratus.com     |
     
	
	