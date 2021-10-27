Feature: Automating Assignment A

  Scenario Outline: <Description>
    Given I am on the Login page "URLFromConfig" for Parabank
    And I enter "UsernameFromConfig" in "Login.UserName"
    And I enter "PasswordFromConfig" in "Login.Password"
    Then I click on "Login.LoginButton"
    And I verify "AccountsOverview.Header" is visible
    Then I click on "AccountServices.OpenNewAccount"
    And I wait for "2" seconds
    And I select "<AccountType>" in "OpenNewAccount.AccountType"
    Then I click on "OpenNewAccount.OpenNewAccountButton"
    And I verify "AccountOpened.Header" is visible
    And I fetch "<AccountNumber>" from "AccountOpened.AccountNumber"
    Then I click on "AccountOpened.AccountNumber"
    And I verify "AccountDetails.Header" is visible
    And I verify "<AccountNumber>FromHashMap" is visible on "AccountDetails.AccountNumber"
    And I verify "<AccountType>" is visible on "AccountDetails.AccountType"
    And I verify "$100.00" is visible on "AccountDetails.Balance"
    And I verify "$100.00" is visible on "AccountDetails.Available"
    And I verify "Funds Transfer Received" is visible on "AccountDetails.Transaction"
    And I verify "TodaysDate" is visible on "AccountDetails.Date"
    And I verify "$100.00" is visible on "AccountDetails.Credit"

    Examples: 
      | Description               | AccountType | AccountNumber         |
      | Create a Checking account | CHECKING    | CheckingAccountNumber |
      | Create a Savings account  | SAVINGS     | SavingsAccountNumber  |

  Scenario: Bill pay from 1 account to another and verify details.
    Given I am on the Login page "URLFromConfig" for Parabank
    And I enter "UsernameFromConfig" in "Login.UserName"
    And I enter "PasswordFromConfig" in "Login.Password"
    Then I click on "Login.LoginButton"
    And I verify "AccountsOverview.Header" is visible
    Then I click on "AccountServices.BillPay"
    And I verify "BillPaymentService.Header" is visible
    And I enter "Testuser" in "BillPaymentService.PayeeName"
    And I enter "TestAddress" in "BillPaymentService.Address"
    And I enter "TestCity" in "BillPaymentService.City"
    And I enter "TestState" in "BillPaymentService.State"
    And I enter "12345" in "BillPaymentService.ZipCode"
    And I enter "9876598765" in "BillPaymentService.PhoneNumber"
    And I enter "CheckingAccountNumberFromHashMap" in "BillPaymentService.AccountNumber"
    And I enter "CheckingAccountNumberFromHashMap" in "BillPaymentService.VerifyAccountNumber"
    And I enter "200" in "BillPaymentService.Amount"
    And I select "SavingsAccountNumberFromHashMap" in "BillPaymentService.FromAccountNumber"
    Then I click on "BillPaymentService.SendPaymentButton"
    And I verify "BillPaymentComplete.Header" is visible
    And I verify "Testuser" is visible on "BillPaymentComplete.SuccessMessagePayeeName"
    And I verify "SavingsAccountNumberFromHashMap" is visible on "BillPaymentComplete.SuccessMessageAccount"
    And I verify "$200" is visible on "BillPaymentComplete.SuccessMessageAmount"
    Then I click on "AccountServices.AccountsOverview"
    And I click on "AccountsOverview.AccountNumber" with "SavingsAccountNumberFromHashMap"
    And I verify "AccountDetails.Header" is visible
    #verification
    And I verify "SavingsAccountNumberFromHashMap" is visible on "AccountDetails.AccountNumber"
    And I verify "SAVINGS" is visible on "AccountDetails.AccountType"
    And I verify "-$100.00" is visible on "AccountDetails.Balance"
    And I verify "$0.00" is visible on "AccountDetails.Available"
    And I verify "TodaysDate" is visible on "AccountDetails.Date"
    And I verify "Bill Payment to Testuser" is visible on "AccountDetails.Transaction"
    And I verify "Funds Transfer Received" is visible on "AccountDetails.Transaction"
    And I verify "$100.00" is visible on "AccountDetails.Credit"
    And I verify "$200.00" is visible on "AccountDetails.Debit"
    Then I click on "AccountServices.AccountsOverview"
    And I click on "AccountsOverview.AccountNumber" with "CheckingAccountNumberFromHashMap"
    And I verify "AccountDetails.Header" is visible
    And I verify "CheckingAccountNumberFromHashMap" is visible on "AccountDetails.AccountNumber"
    And I verify "CHECKING" is visible on "AccountDetails.AccountType"
    And I verify "$300.00" is visible on "AccountDetails.Balance"
    And I verify "$300.00" is visible on "AccountDetails.Available"
    And I verify "TodaysDate" is visible on "AccountDetails.Date"
    And I verify "Funds Transfer Received" is visible on "AccountDetails.Transaction"
    And I verify "$100.00" is visible on "AccountDetails.Credit"
    And I verify "Debit" is visible on "AccountDetails.Debit"
