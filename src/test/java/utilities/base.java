package utilities;

import java.io.File;
import static io.restassured.RestAssured.*;



import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.apache.commons.lang3.RandomStringUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.yaml.snakeyaml.Yaml;
import com.google.common.io.Files;
import com.google.gson.Gson;
import com.vimalselvam.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import io.restassured.response.Response;

public class base {
	public static WebDriver driver;
	public static HashMap<String, String> configurations;
	public static HashMap<String, String> axelerant = new HashMap<String, String>();
	public static HashMap<String, String> emails = new HashMap<String, String>();
	public static HashMap<String,String> objectRepository;
	public static int counter = 1;
	public Response response;


	@Before
	public void initializeDriver() throws FileNotFoundException, IOException 
	{
		Properties prop = new Properties();
 		String configFilePath = System.getProperty("user.dir")+File.separator+"src"+File.separator+"test"+File.separator+"java"+File.separator+"resources"+File.separator+"Configuration.properties";
 		prop.load(new FileInputStream(configFilePath));
 		configurations = new HashMap(prop);
 		String objectRepositoryFilePath = System.getProperty("user.dir")+File.separator+"src"+File.separator+"test"+File.separator+"java"+File.separator+"resources"+File.separator+"ObjectRepository.yaml";
 		Yaml yaml = new Yaml();
 		objectRepository = (HashMap<String, String>) yaml.load(new FileReader(objectRepositoryFilePath));
		if (configurations.get("Browser").equalsIgnoreCase("chrome")) 
		{
			String downloadFilepath = System.getProperty("user.dir") + File.separator + "target" + File.separator+ "Downloads";
			HashMap<String, Object> chromePrefs = new HashMap<String, Object>();
			chromePrefs.put("profile.default_content_settings.popups", 0);
			chromePrefs.put("download.default_directory", downloadFilepath);
			chromePrefs.put("credentials_enable_service", false);
			chromePrefs.put("profile.password_manager_enabled", false);
			WebDriverManager.chromedriver().setup();
			ChromeOptions options = new ChromeOptions();
			options.addArguments("--start-maximized");
			options.addArguments("--disable-browser-side-navigation");
			options.addArguments("--disable-extensions");
			options.addArguments("disable-infobars");
//			options.setExperimentalOption("useAutomationExtension", false);
			options.setExperimentalOption("excludeSwitches",Collections.singletonList("enable-automation"));
			options.addArguments("--disable-plugins-discovery");
			options.setExperimentalOption("prefs", chromePrefs);
//			options.setExperimentalOption("excludeSwitches", Collections.singletonList("enable-automation"));
//			options.setExperimentalOption("useAutomationExtension", false);
			driver = new ChromeDriver(options);
			
		} 
	}

	@After
	public void quitDriver(Scenario scenario) throws IOException 
	{
		try {
			Thread.sleep(2000);
			if (scenario.isFailed()) 
			{
				byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
				scenario.embed(screenshot, "image/png");
				File sourcePath = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
				String screenshotName = RandomStringUtils.randomAlphabetic(8);
				File destinationPath = new File(System.getProperty("user.dir") + "/target/Extent-Report/" + screenshotName + ".png");
				Files.copy(sourcePath, destinationPath);
				Reporter.addScreenCaptureFromPath(destinationPath.toString());
			}
		} 
		catch (Exception e) 
		{
			System.out.println(e.getMessage());
		} 
		finally 
		{
			driver.quit();
		}
	}

	public void navigateToURL(String URL, String browser, int implicitWait) 
	{
		driver.navigate().to(URL);
		driver.manage().timeouts().implicitlyWait(implicitWait, TimeUnit.SECONDS);
		if (browser.equalsIgnoreCase("ie")) 
		{
			driver.manage().window().maximize();
		}
	}

	public WebDriverWait waitFor() 
	{
		WebDriverWait wait = new WebDriverWait(driver, 30);
		return wait;
	}

	public void iWillWaitToSee(By locator) 
	{
		try 
		{
			waitFor().until(ExpectedConditions.visibilityOfElementLocated(locator));
		} 
		catch (Exception e) 
		{
			e.printStackTrace();
		}
	}
	
	public void clickElement(String locator) 
	{
		iWillWaitToSee(By.xpath(locator));
		scrollIntoViewElement(locator);
		driver.findElement(By.xpath(locator)).click();
	}

	public void enterTextInElement(String text, String locator) 
	{
		iWillWaitToSee(By.xpath(locator));
		driver.findElement(By.xpath(locator)).sendKeys(text);
	}
	public String getTextFromElement(String locator) 
	{
		iWillWaitToSee(By.xpath(locator));
		return driver.findElement(By.xpath(locator)).getText().toString().trim();
	}
	public boolean isElementPresentOnPage(String locator) 
	{
		boolean value = true;
		try 
		{
			driver.findElement(By.xpath(locator));
		} 
		catch (Exception e) 
		{
			value = false;
		}
		return value;
	}
	public void selectByVisibleText(String visibleText, String locator) 
	{
		try
		{
			Select sel = new Select(driver.findElement(By.xpath(locator)));
			sel.selectByVisibleText(visibleText);
		}
		catch(Exception e)
		{
			Select sel = new Select(driver.findElement(By.xpath(locator)));
			sel.selectByValue(visibleText);
		}
	}
	public void scrollIntoViewElement(String locator) 
	{
		iWillWaitToSee(By.xpath(locator));
		WebElement element = driver.findElement(By.xpath(locator));
		((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView({block: \"center\"});", element);
	}
	public void delay(long seconds) throws InterruptedException 
	{
		TimeUnit.SECONDS.sleep(seconds);
	}
	
	public static String generateJson(Object object) {

		Gson gson = new Gson();
		return gson.toJson(object).toString();
    }
	
	public void authenticate(String urlExt)
	{
		response = given()
					.log()
					.all()
					.header("Content-type", "application/JSON")
					.when()
					.redirects().follow(true).redirects().max(100)
					.post(urlExt)
					.then()
					.extract()
					.response();
	}
	
	public void postWithBody(String urlExt, String body)
	{
		String cookie = "JSESSIONID="+axelerant.get("SessionID");
		response = given()
					.log()
					.all()
					.header("Content-type", "application/JSON")
					.header("Cookie", cookie)
					.body(body)
					.when()
					.post(urlExt)
					.then()
					.extract()
					.response();
	}
	
	public void postWithouthBody(String urlExt)
	{
		String cookie = "JSESSIONID="+axelerant.get("SessionID");
		response = given()
					.log()
					.all()
					.header("Content-type", "application/JSON")
					.header("Cookie",cookie)
					.when()
					.post(urlExt)
					.then()
					.extract()
					.response();
	}
	
	public void get(String urlExt)
	{
		String cookie = "JSESSIONID="+axelerant.get("SessionID");
		response = given()
					.log()
					.all()
					.header("Content-type", "application/JSON")
					.header("Cookie", cookie)
					.when()
					.get(urlExt)
					.then()
					.extract()
					.response();
	}
	
	

}
