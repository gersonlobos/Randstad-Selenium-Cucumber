package randstad.test;

import java.io.File;
import java.util.*;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;







import com.whitestratus.randstad.User;

import cucumber.api.java.*;
import cucumber.api.java.en.*;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
//import cucumber.annotation.*;
//import cucumber.annotation.en.*;
//import static org.junit.Assert.assertEquals;


public class PeopleSearchStepDefs {
	//static WebDriver driver;
	private List<User> expectedResults = new ArrayList<User>();
	//public User expectedUser;
	static int checkCount=0;
	static Actions bookmark;
	
	
	@Before()  // this will run before every scenario
	public void setUp() {
		System.out.println("Before Scenario --- opening browser");
		
		
		switch (RunCukesTest.chosebrowser){
		case 1:
			RunCukesTest.driver = new FirefoxDriver();
			break;
		case 2:
			System.setProperty("webdriver.chrome.driver", "chromedriver");
			RunCukesTest.driver = new ChromeDriver();
			break;
		case 3:
			RunCukesTest.driver =new SafariDriver();
			break;
		default:
			RunCukesTest.driver = new FirefoxDriver();
			break;
		
		}
		
	}
	
	@Given("^user is on search page$")
	public void user_is_on_search_page()  throws Throwable{	
	    
		//driver.get("http://driven-fragment-509.appspot.com/#/home");
		RunCukesTest.driver.get(RunCukesTest.jh.getURL());
		System.out.println("In user on search page");
	    
	}
	

	@When("user enters \"([^\"]*)\" in search box")
	public void user_enters_in_search_box(String employeeName) throws Throwable{
	    
	    //WebDriverWait wait = new WebDriverWait(driver, 60); 
	    //wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("home_search_criteria")));
		RunCukesTest.driver.findElement(By.id("home_search_criteria")).sendKeys(employeeName);
		System.out.println("In user enters into search box \""+employeeName+"\"");
	    
	}
	
	@And("^user submits search request$")
	public void user_submits_search_request() throws Throwable{
	    System.out.println("in submits search request");

	    
	    WebElement  webEl = RunCukesTest.driver.findElement(By.id("home-search-button"));
	    webEl.click();
		  
	}

	@Then("^the output should be \"([^\"]*)\"$")
	public void the_output_should_be(String arg1) throws Throwable {
		System.out.println("in the output should be \""+arg1+"\"");
	    // Express the Regexp above with the code you wish you had
		WebElement Element1;
		WebElement Element2;
		WebElement Element3;
		WebElement ElementTotal;
		int TimeOut=70;
		int num=0;
		// Try to get text
				 while (num==0 && TimeOut!=0) {
				   try {
					   
					  ElementTotal = RunCukesTest.driver.findElement(By.id("home_tab_people"));
						//System.out.println(ElementTotal.getText());

					 num= Integer.parseInt( ( ElementTotal.getText()).replaceAll("[\\D]", ""));
					 
					 System.out.println("Waiting.... For elements "+ElementTotal.getText());
				
					 --TimeOut;
					 System.out.println("Timeout="+TimeOut);
				    
				    
				// If there is no text sleep one second and try again
				   } catch (org.openqa.selenium.NoSuchElementException e) {
				     System.out.println("Waiting...");
				     Thread.sleep(1000);
				   }
				   
				 }
				 
				//----------  after waiting
				 System.out.println("After Waiting this is the value of total num "+num +"----------------"+arg1);
				 if(num==0){
					 Assert.assertFalse("Element "+arg1+" not found (Expected Fail)", num==0);
				 }
				 else{
					 for(int i=0;i<num;++i){
							Element1 = RunCukesTest.driver.findElement(By.id("row"+i+"col0"));
						    Element2 = RunCukesTest.driver.findElement(By.id("row"+i+"col1"));
						    Element3 = RunCukesTest.driver.findElement(By.id("row"+i+"col2"));
						    
						    
			   System.out.println("| "+Element1.getText()+"  |  "+Element2.getText()+"  |  "+Element3.getText()+" |");
						    Assert.assertTrue("Element "+i+" not equals", ( arg1.equals(Element1.getText())||arg1.equals(Element2.getText())||arg1.equals(Element3.getText()) ) );
							}
				 }
				
	}// end method the_output_should_be(String arg1)
	
	@Given("^the following employees exist$")
	public void the_following_employees_exist(List<User> arg1) throws Throwable {
	   System.out.println("Given following employees exist");
	   for(int x=0;x<arg1.size();++x){
			arg1.get(x).displayUserInfo();
		}
		// Express the Regexp above with the code you wish you had
	    // For automatic conversion, change DataTable to List<YourType>
		boolean check =false;
		Assert.assertTrue("emploployees exist..",true);
		
//use it when you have the database
	/*	System.out.println("this is the user coming from cucumber");
		for(int i=0; i<arg1.size();++i){
			
			check = RunCukesTest.dataBase.Search4User(arg1.get(i));
			if(check==true){
				System.out.println("User:"+arg1.get(i).getFirstName()+" "+arg1.get(i).getLasttName()+" was foud.");
			}
			else{
				System.out.println("User:"+arg1.get(i).getFirstName()+" "+arg1.get(i).getLasttName()+" was  not foud.");
				Assert.assertTrue("User "+arg1.get(i).getFirstName()+" "+arg1.get(i).getLasttName()+" not foud", check);
			}
		}
		*/
		
		
		
	}

	@Then("^the output should be$")
	public void the_output_should_be(List<User> arg1) throws Throwable {
		
	    // Express the Regexp above with the code you wish you had
	    // For automatic conversion, change DataTable to List<YourType>
		
		
		System.out.println("in the output should be ");
		RunCukesTest.dataBase.DisplayUsersList(arg1);
	    // Express the Regexp above with the code you wish you had
		WebElement Element1;
		WebElement Element2;
		WebElement Element3;
		WebElement ElementTotal;
		boolean check;
		int TimeOut=70;
		int num=0;
		// Try to get text
				 while (num==0 && TimeOut!=0) {
				   try {
					   
					  ElementTotal = RunCukesTest.driver.findElement(By.id("home_tab_people"));
						//System.out.println(ElementTotal.getText());

					 num= Integer.parseInt( ( ElementTotal.getText()).replaceAll("[\\D]", ""));
					 
					 System.out.println("Waiting.... For elements "+ElementTotal.getText());
				
					 --TimeOut;
					 System.out.println("Timeout="+TimeOut);
				    
				    
				// If there is no text sleep one second and try again
				   } catch (org.openqa.selenium.NoSuchElementException e) {
				     System.out.println("Waiting...");
				     Thread.sleep(1000);
				   }
				   
				   
				 }
				 
					//----------  after waiting
					 System.out.println("After Waiting this is the value of total num "+num +"----------------"+arg1);
					 if(num==0){
						 Assert.assertFalse("Element "+arg1+" not found (Expected Fail)", num==0);
					 }
					 else{
						 for(int i=0;i<num;++i){
								Element1 = RunCukesTest.driver.findElement(By.id("row"+i+"col0"));
							    Element2 = RunCukesTest.driver.findElement(By.id("row"+i+"col1"));
							    Element3 = RunCukesTest.driver.findElement(By.id("row"+i+"col2"));
					
							    User TempUser = new User(Element1.getText(),Element2.getText(),Element3.getText());
							    
							   // check =RunCukesTest.dataBase.SerachUserInList(arg1, TempUser); /// used to  see if user is there not caring for order
							    check =RunCukesTest.dataBase.SerachUserInListWithIndex(arg1, TempUser, i); // i is the index of the user searching. used to compare the order too
							    																			
					
							    if(check==true){
								    System.out.println("| "+Element1.getText()+"  |  "+Element2.getText()+"  |  "+Element3.getText()+" |"+" -------- was found");
							    	//TempUser.displayUserInfo();
							    }
							    else{
								    System.out.println("| "+Element1.getText()+"  |  "+Element2.getText()+"  |  "+Element3.getText()+" |"+" -------- was not found");

							    }
					
							    Assert.assertTrue(TempUser.GetdisplayUserInfo()+"was not fund", check );
						}//end for loop
					 }//end else
		
		
	   // throw new PendingException();
	}// thte output should be, List<Users> arg1
	
	
	@Given("^people scope is checked$")
	public void people_scope_is_checked() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		System.out.println("and people scope is checked$");
		
		WebElement PeopleCheckBox;
		boolean checked;
		
		PeopleCheckBox = RunCukesTest.driver.findElement( By.id("searchType_1") ); 
		checked= PeopleCheckBox.isSelected();
		
		Assert.assertTrue("People checkbox was not Selected", checked );
		
		// searchType_1
	   // throw new PendingException();
	}

	
	@Then("^we should see Users first name, last name, and email$")
	public void we_should_see_Users_first_name_last_name_and_email() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		System.out.println("^we should see Users first name, last name, and email$");
		
		
		WebElement Element1 = RunCukesTest.driver.findElement(By.xpath("html/body/div[2]/div[2]/div/div/div/div/div/div[1]/div[2]/div/div[1]/div[2]/div[1]/div[1]"));
		WebElement Element2 = RunCukesTest.driver.findElement(By.xpath("html/body/div[2]/div[2]/div/div/div/div/div/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[1]"));
		WebElement Element3 = RunCukesTest.driver.findElement(By.xpath("html/body/div[2]/div[2]/div/div/div/div/div/div[1]/div[2]/div/div[3]/div[2]/div[1]/div[1]"));
		
		Assert.assertTrue("First Name Table Header not found", ( Element1.getText() ).equals("First Name") );
		Assert.assertTrue("Last Name Table Header not foud ", ( Element2.getText() ).equals("Last Name") );
		Assert.assertTrue("E-mail Table Header not found ", ( Element3.getText() ).equals("E-mail") );
	    //throw new PendingException();
	}
	
	@When("^user clicks on last name to sort$")
	public void user_clicks_on_last_name_to_sort() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		System.out.println("^user clicks on last name to sort$");
		
		WebElement Element = RunCukesTest.driver.findElement(By.xpath("html/body/div[2]/div[2]/div/div/div/div/div/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[1]"));
		//two clicks needed to do the first sort
		Element.click();
		Element.click();
		
		
		int TimeOut=70;
		String CheckText = Element.getText();
		// Try to get text
				 while (CheckText.equals(Element.getText()) && TimeOut!=0) {
					 
					   try {
							   //finding element eveytime
								 Element = RunCukesTest.driver.findElement(By.xpath("html/body/div[2]/div[2]/div/div/div/div/div/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[1]"));
		
								 System.out.println("Waiting.... For element to change "+Element.getText());
								 --TimeOut;
								 System.out.println("Timeout="+TimeOut);
						      
								 // If there is no text sleep one second and try again
					   } catch (org.openqa.selenium.NoSuchElementException e) {
						   System.out.println("Waiting...");
						   Thread.sleep(1000);
						 }    
				 }
		
	    //throw new PendingException();
	}// end user last name sort
	
	@When("^user clicks on First name to sort$")
	public void user_clicks_on_First_name_to_sort() throws Throwable {
	    // Express the Regexp above with the code you wish you had
System.out.println("^user clicks on First name to sort$");
		
		WebElement Element = RunCukesTest.driver.findElement(By.xpath("html/body/div[2]/div[2]/div/div/div/div/div/div[1]/div[2]/div/div[1]/div[2]/div[1]/div[1]"));
		//two clicks needed to do the first sort
		Element.click();
		Element.click();
		
		
		int TimeOut=70;
		String CheckText = Element.getText();
		// Try to get text
				 while (CheckText.equals(Element.getText()) && TimeOut!=0) {
					 
					   try {
							   //finding element eveytime
								 Element = RunCukesTest.driver.findElement(By.xpath("html/body/div[2]/div[2]/div/div/div/div/div/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[1]"));
		
								 System.out.println("Waiting.... For element to change "+Element.getText());
								 --TimeOut;
								 System.out.println("Timeout="+TimeOut);
						      
								 // If there is no text sleep one second and try again
					   } catch (org.openqa.selenium.NoSuchElementException e) {
						   System.out.println("Waiting...");
						   Thread.sleep(1000);
						 }    
				 }
		
	    //throw new PendingException();
	}//end sorting first name

	@When("^user clicks on Email name to sort$")
	public void user_clicks_on_Email_name_to_sort() throws Throwable {
		  // Express the Regexp above with the code you wish you had
		System.out.println("^user clicks on First name to sort$");
				
				WebElement Element = RunCukesTest.driver.findElement(By.xpath("html/body/div[2]/div[2]/div/div/div/div/div/div[1]/div[2]/div/div[3]/div[2]/div[1]/div[1]"));
				//two clicks needed to do the first sort
				Element.click();
				Element.click();
				
				
				int TimeOut=70;
				String CheckText = Element.getText();
				// Try to get text
						 while (CheckText.equals(Element.getText()) && TimeOut!=0) {
							 
							   try {
									   //finding element eveytime
										 Element = RunCukesTest.driver.findElement(By.xpath("html/body/div[2]/div[2]/div/div/div/div/div/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[1]"));
				
										 System.out.println("Waiting.... For element to change "+Element.getText());
										 --TimeOut;
										 System.out.println("Timeout="+TimeOut);
								      
										 // If there is no text sleep one second and try again
							   } catch (org.openqa.selenium.NoSuchElementException e) {
								   System.out.println("Waiting...");
								   Thread.sleep(1000);
								 }    
						 }
				
			    //throw new PendingException();
	}
	
	
	
	@Then("^arrow should be \"([^\"]*)\"$")
	public void arrow_should_be(String arg1) throws Throwable {
	    // Express the Regexp above with the code you wish you had
		WebElement Element1;
		WebElement Element2;
		
		if(checkCount==0){
			 Element1 = RunCukesTest.driver.findElement(By.className(arg1));
			 String check= Element1.getAttribute("class");
			 
			 System.out.println("------------------"+ check);
			 Assert.assertTrue("arrow Ellement ngSortButtonDown doesnt have an atribute ="+"ngSortButtonDown ng-hide", check.equals("ngSortButtonDown ng-hide"));
		++checkCount;
		}
		else if(checkCount==1){
			 Element1 = RunCukesTest.driver.findElement(By.className(arg1));
			 String check= Element1.getAttribute("class");
			 
			 System.out.println("------------------"+ check);
			 Assert.assertTrue("arrow Ellement ngSortButtonUp doesnt have an atribute ="+"ngSortButtonUp ng-hide", check.equals("ngSortButtonUp ng-hide"));
		++checkCount;
		}
		
		
	  //  throw new PendingException();
	}
	//***************************************** bookmarks

@When("^user bookmarks page$")
public void user_bookmarks_page() throws Throwable {
    // Express the Regexp above with the code you wish you had
	System.out.println("^user bookmarks page$");

	 bookmark = new Actions(RunCukesTest.driver ); 

    throw new PendingException();
}

@When("^user closes browser$")
public void user_closes_browser() throws Throwable {
    // Express the Regexp above with the code you wish you had
	
	System.out.println("^user closes browser--- closing the browser");
	   // RunCukesTest.driver.close();
		RunCukesTest.driver.quit();
		
    throw new PendingException();
}

@Then("^user opens the browser$")
public void user_opens_the_browser() throws Throwable {
    // Express the Regexp above with the code you wish you had
	System.out.println("^user opens the browser$--- opening the browser");


	switch (RunCukesTest.chosebrowser){
	case 1:
		RunCukesTest.driver = new FirefoxDriver();
		break;
	case 2:
		System.setProperty("webdriver.chrome.driver", "chromedriver");
		RunCukesTest.driver = new ChromeDriver();
		break;
	case 3:
		RunCukesTest.driver =new SafariDriver();
		break;
	default:
		RunCukesTest.driver = new FirefoxDriver();
		break;
	
	}
    throw new PendingException();
}

@Then("^clicks one the bookmark$")
public void clicks_one_the_bookmark() throws Throwable {
    // Express the Regexp above with the code you wish you had
	
	
	 bookmark.click();

    throw new PendingException();
}

@Then("^he would be on last page with same results$")
public void he_would_be_on_last_page_with_same_results() throws Throwable {
    // Express the Regexp above with the code you wish you had
	WebElement ElementTotal;
	int TimeOut=70;
	int num=0;
	// Try to get text
			 while (num==0 && TimeOut!=0) {
			   try {
				   
				  ElementTotal = RunCukesTest.driver.findElement(By.id("home_tab_people"));
					//System.out.println(ElementTotal.getText());

				 num= Integer.parseInt( ( ElementTotal.getText()).replaceAll("[\\D]", ""));
				 
				 System.out.println("Waiting.... For elements "+ElementTotal.getText());
			
				 --TimeOut;
				 System.out.println("Timeout="+TimeOut);
			    
			    
			// If there is no text sleep one second and try again
			   } catch (org.openqa.selenium.NoSuchElementException e) {
			     System.out.println("Waiting...");
			     Thread.sleep(1000);
			   }
			   
			 }
    throw new PendingException();
}
	//***********************************************************

	
	
	@After()  // this will run after every scenario
	public void cleanUp() {
	    System.out.println("After Scenario --- closing the browser");
	   // RunCukesTest.driver.close();
		RunCukesTest.driver.quit();
		
	}

}
