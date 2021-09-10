package com.BDDPOM.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.BDDPOM.Base.BaseTest;

public class Homepage extends BaseTest{
	
	@FindBy(xpath="//a[contains(text(),'Hotlines')]")
	WebElement Hotlines;
	
	
	
	
	public Homepage() {
		PageFactory.initElements(driver, this);
	}
	
	public String pagetitle() {
		return driver.getTitle();
	}
	
	public Hotlines gotoHotlines() {
		Hotlines.click();
		
		return new Hotlines();
	}
	
	
}
