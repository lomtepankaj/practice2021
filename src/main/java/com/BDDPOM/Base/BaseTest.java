package com.BDDPOM.Base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.BDDPOM.util.Constants;

public class BaseTest {

	
	public static WebDriver driver;
	public static Properties prop;
	
	public BaseTest() {
		
		prop = new Properties();
		
		try {
			FileInputStream fis = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\BDDPOM\\config\\config.properties");
			
			prop.load(fis);
			
		}  catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	public static void initBrowser() {
		
		String browser = prop.getProperty("browser");
		
		if (browser.equalsIgnoreCase("Chrome")){
			
			System.setProperty("webdriver.chrome.driver", (System.getProperty("user.dir"))+"\\resources\\chromedriver.exe");
			
			driver= new ChromeDriver();			
		}
		else {
			System.out.println("not defined in config");
		}
		
		driver.manage().window().maximize();
//		driver.manage().timeouts().implicitlyWait(Constants.IMPLICITLY_WAIT,TimeUnit.SECONDS);
	//	driver.manage().timeouts().pageLoadTimeout(Constants.PAGE_LOAD_TIMEOUT,TimeUnit.SECONDS);
		
		//String URL = prop.getProperty("applicationUrl");
		
		//driver.get(URL);
	}
	
	
}
