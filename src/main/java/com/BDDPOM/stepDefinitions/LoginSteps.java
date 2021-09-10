package com.BDDPOM.stepDefinitions;

import com.BDDPOM.Base.BaseTest;
import com.BDDPOM.pages.Homepage;
import com.BDDPOM.pages.LoginPage;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps extends BaseTest{
	
	LoginPage lp;
	Homepage homepage;
	
	@Before
	
	public void openBrowser() {
		
		BaseTest.initBrowser();
		
	}
	
	/*@After
	public void tearDown() {
		driver.close();
	}*/
	
	
	@Given ("^User is on landing page$")
	public void User_launch_url() {
		
		String URL = prop.getProperty("applicationUrl");
		
		driver.get(URL);
		
		 System.out.println("User launched URL");
		
		
	}
	
	@When ("^User enters username and password$")
	public void User_enters_credentials () {

		lp= new LoginPage();
		homepage = lp.doLogin();
		
		
	}
	
	@Then ("^User gets logged in$")
	public void getloginpagetitle() {
		
		
		 
			System.out.println(lp.getpagetitle());
			
			
		
	}
	
	
	

}
