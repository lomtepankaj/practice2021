package com.BDDPOM.stepDefinitions;

import com.BDDPOM.pages.Homepage;
import com.BDDPOM.pages.Hotlines;
import com.BDDPOM.pages.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class gotoHotlines extends LoginPage  {
	
	LoginPage lp  ;
	Hotlines hotline = new Hotlines() ;
	Homepage hp;
	
	@Given("^User is on Homepage$")
	public void User_on_Homepage() {
		
		lp = new LoginPage();
		lp.getpagetitle();
		
	}
	
	@When("^User cliks on Hotlines$")
	public void Use_clicks_hotlines() {
		hp = new Homepage();
		hotline =  hp.gotoHotlines();
		
	}

	@Then("^User goes to Hotlines directory$")
	public void go_to_hotline_directory() {
		
		lp.getpagetitle();
		
	}
	
}
