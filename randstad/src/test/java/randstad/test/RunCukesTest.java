package randstad.test;

//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
import java.text.ParseException;
import java.util.Scanner;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

import org.junit.runner.RunWith;
import org.junit.BeforeClass;
import org.junit.AfterClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.whitestratus.randstad.SsJsonHandler;
import com.whitestratus.randstad.UserDataBase;


@RunWith(Cucumber.class)
@CucumberOptions(format = {"pretty", "html:target/cucumber-htmlreport", "json:target/cucumber-report.json"},
                 features ={"src/test/resources/randstad/test/"},
                 tags = "@tags")

public class RunCukesTest {
	
	// these will run only before features specified in paths or tags in CucumberOptions
	//@BeforeClass
	//public static void setUp() {
	//	System.out.println("Ran Before Class");
		
	//}
	
	//@AfterClass
	//public static void teardown() {
	//	System.out.println("Ran After Class");
	//}
	static WebDriver driver;
	//static ChromeDriver driver;
	static SsJsonHandler jh;
	static UserDataBase dataBase;
	static int chosebrowser=0;
	
	
	@BeforeClass
	public static void setUp() throws ParseException {
        // one-time initialization code 
		jh = new SsJsonHandler();
		jh.readJsonFile();	
		
		dataBase= new UserDataBase();
		dataBase.readCSVfile();
		
		System.out.println("What browser do you want to test on? ");
		System.out.println("1: FireFox");
		System.out.println("2: Chrome");
		System.out.println("3: Safary");
		
		while(true){
			Scanner in = new Scanner(System.in);

			chosebrowser = in.nextInt();
			
			if(chosebrowser>3 || chosebrowser<1){
				System.out.println("incorect- use 1,2 or 3.");
			}
			else{
				break;
			}
		}



		
		
    }//end oneTimeSetUp
	
	
	@AfterClass
	public static void tearDown(){
		//driver.close();
	}
}
