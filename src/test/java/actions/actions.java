package actions;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;
import java.util.StringTokenizer;
import java.util.TimeZone;

import org.apache.commons.lang.RandomStringUtils;
import utilities.base;
import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.path.json.JsonPath;
import models.address;
import models.billPay;


public class actions 
{

	base objBase = new base();

	public void setup(String URL) throws Exception 
	{
		if (URL.contains("FromConfig")) 
		{
			String appURL = base.configurations.get(URL.substring(0,URL.indexOf("FromConfig")));
			objBase.navigateToURL(appURL, base.configurations.get("Browser"),Integer.parseInt(base.configurations.get("ImplicitWait")));
		} 
		else
		{
			objBase.navigateToURL(URL, base.configurations.get("Browser"),Integer.parseInt(base.configurations.get("ImplicitWait")));
		}
	}

	public String getYamlValue(String key) 
	{
		Map<?, ?> map = null;
		map = objBase.objectRepository;
		StringTokenizer st = new java.util.StringTokenizer(key, ".");
		int tokenCount = st.countTokens();
		for (int i = 1; i < tokenCount; i++) 
		{
			String token = st.nextToken();
			map = (Map<?, ?>) map.get(token);
		}
		return map.get(st.nextToken()).toString();
	}

	public void clickOn(String xpath) throws Exception 
	{
		if (!xpath.equals("")) 
		{
			String locator = getYamlValue(xpath);
			objBase.clickElement(locator);
		}
	}
	
		
	public void clickWithParameter(String xpath, String parameter) throws Exception 
	{
		if (!parameter.equals("")) 
		{
			if(parameter.contains("FromHashMap"))
			{
				parameter = base.axelerant.get(parameter.substring(0, parameter.indexOf("FromHashMap")));
			}
			else if(parameter.contains("FromConfig"))
			{
				parameter = base.configurations.get(parameter.substring(0,parameter.indexOf("FromConfig")));
			}
			String locator = getYamlValue(xpath);
			locator = locator.replace("VARIABLE", parameter);
			objBase.clickElement(locator);
		}
	}

	
	public void enterText(String text, String xpath) 
	{
		if (!xpath.equals("")) 
		{
			if(!text.equals(""))
			{
				String updatedText = null;
				if(text.contains("FromHashMap"))
				{
					text = base.axelerant.get(text.substring(0,text.indexOf("FromHashMap")));
				}
				else if(text.contains("FromConfig"))
				{
					text = base.configurations.get(text.substring(0,text.indexOf("FromConfig")));
				}
				String locator = getYamlValue(xpath);
				objBase.enterTextInElement(text, locator);
			}
		}
	}
	
	

	public void fetchText(String textFor, String xpath) 
	{
		String locator = getYamlValue(xpath);
		String text = objBase.getTextFromElement(locator);
		base.axelerant.put(textFor, text);
		System.out.println(base.axelerant);
	}
	
	
	
	

	public void selectObject(String visibleText, String xpath) 
	{
		if(!visibleText.equals(""))
		{
			if(visibleText.contains("FromHashMap"))
			{
				visibleText = base.axelerant.get(visibleText.substring(0, visibleText.indexOf("FromHashMap")));
			}
			else if(visibleText.contains("FromConfig"))
			{
				visibleText = base.configurations.get(visibleText.substring(0,visibleText.indexOf("FromConfig")));
			}
			String locator = getYamlValue(xpath);
			objBase.selectByVisibleText(visibleText, locator);
		}
	}
	
	

	public void verifyObject(String xpath) 
	{
		if(!xpath.equals(""))
		{
			String locator = getYamlValue(xpath);
			Assert.assertTrue(objBase.isElementPresentOnPage(locator));
		}
	}
	
	
	public void verifyTextOnObject(String text, String xpath) 
	{
		if(!text.equals(""))
		{
			String locator = getYamlValue(xpath);
			if(text.contains("FromHashMap"))
			{
				text = base.axelerant.get(text.substring(0, text.indexOf("FromHashMap")));
			}
			else if(text.contains("TodaysDate"))
			{
					Date todaysDate = new Date();
					SimpleDateFormat sdf = new SimpleDateFormat("MM-dd-yyyy");
					text = sdf.format(todaysDate);
			}
			locator = locator.replace("VARIABLE", text);
			Assert.assertTrue(objBase.isElementPresentOnPage(locator));
		}
		
	}
	public void waitForSeconds(String seconds) throws NumberFormatException, InterruptedException 
	{
		objBase.delay(Long.parseLong(seconds));
	}

	
	public void auhenticateAPI(DataTable data)
	{
		Map<String,String> map = data.asMap(String.class,String.class);
		String username = "";
		String password = "";
		if(map.get("Username").contains("FromConfig"))
		{
			username = base.configurations.get(map.get("Username").substring(0,map.get("Username").indexOf("FromConfig")));
		}
		else
		{
			username = map.get("username");
		}
		if(map.get("Password").contains("FromConfig"))
		{
			password = base.configurations.get(map.get("Password").substring(0,map.get("Password").indexOf("FromConfig")));
		}
		else
		{
			password = map.get("password");
		}
		String url = map.get("URLExtension")+"?username="+username+"&password="+password;
		objBase.authenticate(url);
		JsonPath json = new JsonPath(objBase.response.getBody().asPrettyString());
		objBase.axelerant.put("SessionID",objBase.response.getCookie("JSESSIONID"));	
	}

	public void validateRespseCode(int statusCode)
	{
		Assert.assertEquals(statusCode, objBase.response.getStatusCode());
	}


	public void createAccount(DataTable data)
	{
		Map<String,String> map = data.asMap(String.class,String.class);
		String customerID;
		if(map.get("customerID").contains("FromConfig"))
		{
			customerID = base.configurations.get(map.get("customerID").substring(0,map.get("customerID").indexOf("FromConfig")));
		}
		else
		{
			customerID = map.get("customerID");
		}
		
		String url = map.get("URLExtension")+"?customerId="+customerID+"&newAccountType="+map.get("accountType")+"&fromAccountId="+map.get("fromAccountID");
		objBase.postWithouthBody(url);
		JsonPath json = new JsonPath(objBase.response.getBody().asPrettyString());
		objBase.axelerant.put(map.get("FetchAccountID"), json.get("id").toString());	
	}


	public void validateAccountDetails(DataTable data)
	{
		Map<String,String> map = data.asMap(String.class,String.class);
		String id = null;
		if(map.get("id").contains("FromHashMap"))
		{
			id = objBase.axelerant.get(map.get("id").substring(0, map.get("id").indexOf("FromHashMap")));
		}
		else
		{
			id = map.get("id");
		}
		String url = map.get("URLExtension")+"/"+id;
		objBase.get(url);
		JsonPath json = new JsonPath(objBase.response.getBody().asPrettyString());
		Assert.assertEquals(objBase.axelerant.get(map.get("id").substring(0, map.get("id").indexOf("FromHashMap"))), String.valueOf(json.get("id")));
		Assert.assertEquals(base.configurations.get(map.get("customerID").substring(0,map.get("customerID").indexOf("FromConfig"))), String.valueOf(json.get("customerId")));
		Assert.assertEquals(map.get("balance"), String.valueOf(json.get("balance")));
		Assert.assertEquals(map.get("type"), json.get("type"));
	}


	public void billPay(DataTable data)
	{
		Map<String,String> map = data.asMap(String.class,String.class);
		String fromAccountNumber = null;
		String toAccountNumber = null;
		if(map.get("fromAccountNumber").contains("FromHashMap"))
		{
			fromAccountNumber = objBase.axelerant.get(map.get("fromAccountNumber").substring(0, map.get("fromAccountNumber").indexOf("FromHashMap")));
		}
		else
		{
			fromAccountNumber = map.get("fromAccountNumber");
		}
		
		if(map.get("toAccountNumber").contains("FromHashMap"))
		{
			toAccountNumber = objBase.axelerant.get(map.get("toAccountNumber").substring(0, map.get("toAccountNumber").indexOf("FromHashMap")));
		}
		else
		{
			toAccountNumber = map.get("toAccountNumber");
		}
		address add = new address(map.get("street"),map.get("city"),map.get("state"),map.get("zipcode"));
		billPay bill = new billPay(add, map.get("name"), map.get("phoneNumber"), fromAccountNumber);
		String url = map.get("URLExtension")+"?accountId="+toAccountNumber+"&amount="+map.get("amount");
		String jsonBody = objBase.generateJson(bill);
		objBase.postWithBody(url, jsonBody);
	}
	
		
}
