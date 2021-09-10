package com.BDDPOM.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.BDDPOM.Base.BaseTest;

import cucumber.api.PendingException;

public class LoginPage extends BaseTest {
	
	@FindBy(id="basic_email")
	WebElement username;
	
	@FindBy(id="basic_password")
	WebElement password;
	
	@FindBy(xpath="//span[text()='Sign In']")
	WebElement SignInbtn;	
	
	public LoginPage() {
		PageFactory.initElements(driver, this); // we can put "LoginPage.class" instead of this as well.
		//driver: The driver that will be used to look up the elements
		//page: The object with WebElement and List<WebElement> fields thatshould be proxied.
	}
	
	public String getpagetitle() {
		
		return	driver.getTitle();
	}
	
	public Homepage doLogin () {
		username.sendKeys(prop.getProperty("username"));
		password.sendKeys(prop.getProperty("password"));
		
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		SignInbtn.click();
		return new Homepage();
		 
	}

	 
	
	
	
	
	

}
