Feature: Automating Assignment B

  Scenario Outline: <Description>
    Given I run the GET call and generate the session ID
      | URLExtension | login.htm          |
      | Username     | usernameFromConfig |
      | Password     | passwordFromConfig |
    Then I validate the response code "302"
    Then I create account using POST call
      | URLExtension   | services_proxy/bank/createAccount |
      | customerID     | customerIDFromConfig              |
      | accountType    | <AccountType>                     |
      | fromAccountID  | <FromAccountID>                   |
      | FetchAccountID | <AccountNumberType>               |
    Then I validate the response code "200"
    And I validate the account details using  GET call
      | URLExtension | services_proxy/bank/accounts |
      | id           | <ID>                         |
      | customerID   | customerIDFromConfig         |
      | balance      |                        100.0 |
      | type         | <Type>                       |

    Examples: 
      | Description               | AccountType | FromAccountID | Type     | AccountNumberType     | ResponseCode | ID                               |
      | Create  Checking  Account |           0 |         13344 | CHECKING | CheckingAccountNumber |          200 | CheckingAccountNumberFromHashMap |
      | Create  Savings  Account  |           1 |         13344 | SAVINGS  | SavingAccountNumber   |          200 | SavingAccountNumberFromHashMap   |

  Scenario Outline: <Description>
    Given I run the GET call and generate the session ID
      | URLExtension | login.htm          |
      | Username     | usernameFromConfig |
      | Password     | passwordFromConfig |
    Then I validate the response code "302"
    Then I request bill payment using POST call
      | URLExtension      | services_proxy/bank/billpay |
      | street            | <Street>                    |
      | city              | <City>                      |
      | state             | <State>                     |
      | zipcode           | <Zipcode>                   |
      | name              | <Name>                      |
      | phoneNumber       | <PhoneNumber>               |
      | amount            | <Amount>                    |
      | fromAccountNumber | <FromAccountNumber>         |
      | toAccountNumber   | <ToAccountNumber>           |
    Then I validate the response code "200"
    And I validate the account details using  GET call
      | URLExtension | services_proxy/bank/accounts     |
      | id           | CheckingAccountNumberFromHashMap |
      | customerID   | customerIDFromConfig             |
      | balance      |                            100.0 |
      | type         | CHECKING                         |
    And I validate the account details using  GET call
      | URLExtension | services_proxy/bank/accounts   |
      | id           | SavingAccountNumberFromHashMap |
      | customerID   | customerIDFromConfig           |
      | balance      |                         100.0 |
      | type         | SAVINGS                        |

    Examples: 
      | Description                                                       | Street     | City     | State     | Zipcode | Name     | PhoneNumber | Amount | FromAccountNumber              | ToAccountNumber                  |
      | Bill Pay from Account A to Account B and then validte the details | TestStreet | TestCity | TestState |   10011 | TestUser |  9876598765 | 200.00 | SavingAccountNumberFromHashMap | CheckingAccountNumberFromHashMap |
