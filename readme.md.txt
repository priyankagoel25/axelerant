selenium-cucumber-java-maven

selenium-cucumber : Automation Testing Using Java
selenium-cucumber is a behavior driven development (BDD) approach to write automation test script to test Web. It enables you to write and execute automated acceptance/unit tests. It is cross-platform, open source and free. Automate your test cases with minimal coding. More Details

Pre-requisites
•Java
•Maven
•Eclipse
•Cucumber
•Eclipse plugin – Cucumber plugin, YAML editor.

Framework Architecture
- Gherking Feature file
- Step definitions classes
- Action class
- Base class
- Object Repository
- Configuration file
 

•src/test/FeatureFiles - all the cucumber features files (files .feature ext.) goes here.
•src/test/java/stepDefinitions - you can define step defintion under this package for your feature steps.

Writing a test
The cucumber features goes in the features library and should have the ".feature" extension.
You can extend this feature or make your own features using some of the predefined steps that comes with selenium-cucumber.

Predefined steps
By using predefined steps you can automate your test cases more quickly, more efficiently and without much coding.
The predefined steps are located here

Get the latest Source Code
Open Terminal or command line cd to the desired folder where the test automation source code needs to be checkout
Run command git clone https://github.com/

Running test

Command line -
Go to your project directory from terminal and hit following commands
•mvn test -Dcucumber.options="classpath:features/my_first.feature" to run specific feature.

JUnit
Run as JUnit test from the Testrunner.java file.
