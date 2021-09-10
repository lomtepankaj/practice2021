package com.BDDPOM.stepDefinitions;

import com.BDDPOM.pages.Homepage;
import com.BDDPOM.pages.Hotlines;
import com.BDDPOM.pages.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class sortHotlines {
	
	
	LoginPage lp = new LoginPage();
	
	Hotlines hl = new Hotlines();
	
	Homepage hp = new Homepage();
	
	
	@Given ("^User is on Hotlines Directory$")
	public void User_on_HL_DIR() {
		
		lp.getpagetitle();
	}
	
	@When ("^User clicks on Hotline name$")
	public void User_on_Hotlines_Name() {
		hl.sorting();
	}
	
	
	@Then ("^Results are sorted$")
		public void Results_sorted() {
			lp.getpagetitle();
		
	}
	

}
