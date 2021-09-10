package com.BDDPOM.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.BDDPOM.Base.BaseTest;

public class Hotlines extends BaseTest{
	
	@FindBy(xpath="//span[text()=' Create Hotline']")
	WebElement CreateHotline;
	
	@FindBy(xpath="//div/span[text()='Hotline Name']")
	WebElement sortByName;
	
	public Hotlines() {
		PageFactory.initElements(driver,this);
	}
	
	public String pageTitle() {
		return driver.getTitle();
	}
	
	public void sorting() {
		sortByName.click();
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void gotoCreateHotline() {
		CreateHotline.click();
		System.out.println(driver.getTitle());
		
		
	}
	
	
	
	

}
