package com.BDDPOM.TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@CucumberOptions( 
			features = "src\\main\\java\\com\\BDDPOM\\Features\\Anonymoose.feature",
			glue = {"com.BDDPOM.stepDefinitions"},
			monochrome = true,
			dryRun = false,
			plugin = {"pretty", "html:target/cucumber-html-report", "json:target/cucumber-json-report.json"}	
		)
	
	public class TestRunner  {
		
	}


