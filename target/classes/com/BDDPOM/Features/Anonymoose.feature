Feature: Login to AM WebApp

Scenario: User logins to AMWEB
	Given User is on landing page
	When User enters username and password
	Then User gets logged in
	
Scenario: User goes to Hotlines 
	Given User is on Homepage
	When User cliks on Hotlines
	Then User goes to Hotlines directory

Scenario: User sorts the Hotlines
	Given User is on Hotlines Directory
	When User clicks on Hotline name
	Then Results are sorted