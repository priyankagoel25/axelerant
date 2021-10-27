package stepDefinitions;
import actions.actions;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class stepDefinitions {

	actions objActions = new actions();

	@Given("I am on the Login page \"([^\"]*)\" for Parabank$")
	public void setupLogin(String URL) throws Throwable 
	{
		objActions.setup(URL);
	}

	@And("^I click on \"([^\"]*)\"$")
	public void clickOn(String xpath) throws Exception 
	{
		objActions.clickOn(xpath);
	}
	
	@And("^I click on \"([^\"]*)\" with \"([^\"]*)\"$")
	public void clickWithParameter(String xpath, String parameter) throws Exception 
	{
		objActions.clickWithParameter(xpath,parameter);
	}

	
	@And("^I verify \"([^\"]*)\" is visible$")
	public void verifyObject(String xpathKey) throws Exception 
	{
		objActions.verifyObject(xpathKey);
	}
	
		@And("^I enter \"([^\"]*)\" in \"([^\"]*)\"$")
	public void iEnterText(String text, String xpathKey) throws Exception 
	{
		objActions.enterText(text, xpathKey);
	}
	

	@And("^I select \"([^\"]*)\" in \"([^\"]*)\"$")
	public void selectObject(String text, String xpathKey) throws Exception 
	{
		objActions.selectObject(text, xpathKey);
	}
	
		@Then("^I verify \"([^\"]*)\" is visible on \"([^\"]*)\"$")
	public void i_Verify_Text_On_View_Profile_Page(String text, String xpathKey) throws Exception 
	{
		objActions.verifyTextOnObject(text, xpathKey);
	}

	
	@Then("^I fetch \"([^\"]*)\" from \"([^\"]*)\"$")
	public void fetchText(String textFor, String xpathKey) throws Exception 
	{
		objActions.fetchText(textFor, xpathKey);
	}
	
	@And("^I wait for \"([^\"]*)\" seconds$")
	public void waitFor(String seconds) throws Exception 
	{
		objActions.waitForSeconds(seconds);
	}
	
	@Given("^I run the GET call and generate the session ID$")
	public void auhenticateAPI(DataTable data)
	{
		objActions.auhenticateAPI(data);
	}
	
	@Then("^I validate the response code \"([^\"]*)\"$")
	public void validateRespseCode(int statusCode)
	{
		objActions.validateRespseCode(statusCode);
	}


	@Then("^I create account using POST call$")
	public void createAccount(DataTable data)
	{
	objActions.createAccount(data);	
	}

	@Then("^I validate the account details using  GET call$")
	public void validateAccountDetails(DataTable data)
	{
		objActions.validateAccountDetails(data);		
	}

	@Then("^I request bill payment using POST call$")
	public void billPay(DataTable data)
	{
		objActions.billPay(data);		
	}
}

