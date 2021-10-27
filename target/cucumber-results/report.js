$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/FeatureFiles/AssignmentB.feature");
formatter.feature({
  "line": 1,
  "name": "Automating Assignment B",
  "description": "",
  "id": "automating-assignment-b",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "\u003cDescription\u003e",
  "description": "",
  "id": "automating-assignment-b;\u003cdescription\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I run the GET call and generate the session ID",
  "rows": [
    {
      "cells": [
        "URLExtension",
        "login.htm"
      ],
      "line": 5
    },
    {
      "cells": [
        "Username",
        "usernameFromConfig"
      ],
      "line": 6
    },
    {
      "cells": [
        "Password",
        "passwordFromConfig"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I validate the response code \"302\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I create account using POST call",
  "rows": [
    {
      "cells": [
        "URLExtension",
        "services_proxy/bank/createAccount"
      ],
      "line": 10
    },
    {
      "cells": [
        "customerID",
        "customerIDFromConfig"
      ],
      "line": 11
    },
    {
      "cells": [
        "accountType",
        "\u003cAccountType\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "fromAccountID",
        "\u003cFromAccountID\u003e"
      ],
      "line": 13
    },
    {
      "cells": [
        "FetchAccountID",
        "\u003cAccountNumberType\u003e"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I validate the response code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I validate the account details using  GET call",
  "rows": [
    {
      "cells": [
        "URLExtension",
        "services_proxy/bank/accounts"
      ],
      "line": 17
    },
    {
      "cells": [
        "id",
        "\u003cID\u003e"
      ],
      "line": 18
    },
    {
      "cells": [
        "customerID",
        "customerIDFromConfig"
      ],
      "line": 19
    },
    {
      "cells": [
        "balance",
        "100.0"
      ],
      "line": 20
    },
    {
      "cells": [
        "type",
        "\u003cType\u003e"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "automating-assignment-b;\u003cdescription\u003e;",
  "rows": [
    {
      "cells": [
        "Description",
        "AccountType",
        "FromAccountID",
        "Type",
        "AccountNumberType",
        "ResponseCode",
        "ID"
      ],
      "line": 24,
      "id": "automating-assignment-b;\u003cdescription\u003e;;1"
    },
    {
      "cells": [
        "Create  Checking  Account",
        "0",
        "13344",
        "CHECKING",
        "CheckingAccountNumber",
        "200",
        "CheckingAccountNumberFromHashMap"
      ],
      "line": 25,
      "id": "automating-assignment-b;\u003cdescription\u003e;;2"
    },
    {
      "cells": [
        "Create  Savings  Account",
        "1",
        "13344",
        "SAVINGS",
        "SavingAccountNumber",
        "200",
        "SavingAccountNumberFromHashMap"
      ],
      "line": 26,
      "id": "automating-assignment-b;\u003cdescription\u003e;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2356596000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Create  Checking  Account",
  "description": "",
  "id": "automating-assignment-b;\u003cdescription\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I run the GET call and generate the session ID",
  "rows": [
    {
      "cells": [
        "URLExtension",
        "login.htm"
      ],
      "line": 5
    },
    {
      "cells": [
        "Username",
        "usernameFromConfig"
      ],
      "line": 6
    },
    {
      "cells": [
        "Password",
        "passwordFromConfig"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I validate the response code \"302\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I create account using POST call",
  "matchedColumns": [
    1,
    2,
    4
  ],
  "rows": [
    {
      "cells": [
        "URLExtension",
        "services_proxy/bank/createAccount"
      ],
      "line": 10
    },
    {
      "cells": [
        "customerID",
        "customerIDFromConfig"
      ],
      "line": 11
    },
    {
      "cells": [
        "accountType",
        "0"
      ],
      "line": 12
    },
    {
      "cells": [
        "fromAccountID",
        "13344"
      ],
      "line": 13
    },
    {
      "cells": [
        "FetchAccountID",
        "CheckingAccountNumber"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I validate the response code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I validate the account details using  GET call",
  "matchedColumns": [
    3,
    6
  ],
  "rows": [
    {
      "cells": [
        "URLExtension",
        "services_proxy/bank/accounts"
      ],
      "line": 17
    },
    {
      "cells": [
        "id",
        "CheckingAccountNumberFromHashMap"
      ],
      "line": 18
    },
    {
      "cells": [
        "customerID",
        "customerIDFromConfig"
      ],
      "line": 19
    },
    {
      "cells": [
        "balance",
        "100.0"
      ],
      "line": 20
    },
    {
      "cells": [
        "type",
        "CHECKING"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.auhenticateAPI(DataTable)"
});
formatter.result({
  "duration": 2811436600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "302",
      "offset": 30
    }
  ],
  "location": "stepDefinitions.validateRespseCode(int)"
});
formatter.result({
  "duration": 4369600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.createAccount(DataTable)"
});
formatter.result({
  "duration": 2024676600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "stepDefinitions.validateRespseCode(int)"
});
formatter.result({
  "duration": 300100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.validateAccountDetails(DataTable)"
});
formatter.result({
  "duration": 1642209700,
  "status": "passed"
});
formatter.after({
  "duration": 2622452500,
  "status": "passed"
});
formatter.before({
  "duration": 1037600100,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Create  Savings  Account",
  "description": "",
  "id": "automating-assignment-b;\u003cdescription\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I run the GET call and generate the session ID",
  "rows": [
    {
      "cells": [
        "URLExtension",
        "login.htm"
      ],
      "line": 5
    },
    {
      "cells": [
        "Username",
        "usernameFromConfig"
      ],
      "line": 6
    },
    {
      "cells": [
        "Password",
        "passwordFromConfig"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I validate the response code \"302\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I create account using POST call",
  "matchedColumns": [
    1,
    2,
    4
  ],
  "rows": [
    {
      "cells": [
        "URLExtension",
        "services_proxy/bank/createAccount"
      ],
      "line": 10
    },
    {
      "cells": [
        "customerID",
        "customerIDFromConfig"
      ],
      "line": 11
    },
    {
      "cells": [
        "accountType",
        "1"
      ],
      "line": 12
    },
    {
      "cells": [
        "fromAccountID",
        "13344"
      ],
      "line": 13
    },
    {
      "cells": [
        "FetchAccountID",
        "SavingAccountNumber"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I validate the response code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I validate the account details using  GET call",
  "matchedColumns": [
    3,
    6
  ],
  "rows": [
    {
      "cells": [
        "URLExtension",
        "services_proxy/bank/accounts"
      ],
      "line": 17
    },
    {
      "cells": [
        "id",
        "SavingAccountNumberFromHashMap"
      ],
      "line": 18
    },
    {
      "cells": [
        "customerID",
        "customerIDFromConfig"
      ],
      "line": 19
    },
    {
      "cells": [
        "balance",
        "100.0"
      ],
      "line": 20
    },
    {
      "cells": [
        "type",
        "SAVINGS"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.auhenticateAPI(DataTable)"
});
formatter.result({
  "duration": 709029100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "302",
      "offset": 30
    }
  ],
  "location": "stepDefinitions.validateRespseCode(int)"
});
formatter.result({
  "duration": 61800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.createAccount(DataTable)"
});
formatter.result({
  "duration": 1320976200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "stepDefinitions.validateRespseCode(int)"
});
formatter.result({
  "duration": 97300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.validateAccountDetails(DataTable)"
});
formatter.result({
  "duration": 1230439500,
  "status": "passed"
});
formatter.after({
  "duration": 2586766000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "\u003cDescription\u003e",
  "description": "",
  "id": "automating-assignment-b;\u003cdescription\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I run the GET call and generate the session ID",
  "rows": [
    {
      "cells": [
        "URLExtension",
        "login.htm"
      ],
      "line": 30
    },
    {
      "cells": [
        "Username",
        "usernameFromConfig"
      ],
      "line": 31
    },
    {
      "cells": [
        "Password",
        "passwordFromConfig"
      ],
      "line": 32
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I validate the response code \"302\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I request bill payment using POST call",
  "rows": [
    {
      "cells": [
        "URLExtension",
        "services_proxy/bank/billpay"
      ],
      "line": 35
    },
    {
      "cells": [
        "street",
        "\u003cStreet\u003e"
      ],
      "line": 36
    },
    {
      "cells": [
        "city",
        "\u003cCity\u003e"
      ],
      "line": 37
    },
    {
      "cells": [
        "state",
        "\u003cState\u003e"
      ],
      "line": 38
    },
    {
      "cells": [
        "zipcode",
        "\u003cZipcode\u003e"
      ],
      "line": 39
    },
    {
      "cells": [
        "name",
        "\u003cName\u003e"
      ],
      "line": 40
    },
    {
      "cells": [
        "phoneNumber",
        "\u003cPhoneNumber\u003e"
      ],
      "line": 41
    },
    {
      "cells": [
        "amount",
        "\u003cAmount\u003e"
      ],
      "line": 42
    },
    {
      "cells": [
        "fromAccountNumber",
        "\u003cFromAccountNumber\u003e"
      ],
      "line": 43
    },
    {
      "cells": [
        "toAccountNumber",
        "\u003cToAccountNumber\u003e"
      ],
      "line": 44
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I validate the response code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I validate the account details using  GET call",
  "rows": [
    {
      "cells": [
        "URLExtension",
        "services_proxy/bank/accounts"
      ],
      "line": 47
    },
    {
      "cells": [
        "id",
        "CheckingAccountNumberFromHashMap"
      ],
      "line": 48
    },
    {
      "cells": [
        "customerID",
        "customerIDFromConfig"
      ],
      "line": 49
    },
    {
      "cells": [
        "balance",
        "100.0"
      ],
      "line": 50
    },
    {
      "cells": [
        "type",
        "CHECKING"
      ],
      "line": 51
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I validate the account details using  GET call",
  "rows": [
    {
      "cells": [
        "URLExtension",
        "services_proxy/bank/accounts"
      ],
      "line": 53
    },
    {
      "cells": [
        "id",
        "SavingAccountNumberFromHashMap"
      ],
      "line": 54
    },
    {
      "cells": [
        "customerID",
        "customerIDFromConfig"
      ],
      "line": 55
    },
    {
      "cells": [
        "balance",
        "100.0"
      ],
      "line": 56
    },
    {
      "cells": [
        "type",
        "SAVINGS"
      ],
      "line": 57
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 59,
  "name": "",
  "description": "",
  "id": "automating-assignment-b;\u003cdescription\u003e;",
  "rows": [
    {
      "cells": [
        "Description",
        "Street",
        "City",
        "State",
        "Zipcode",
        "Name",
        "PhoneNumber",
        "Amount",
        "FromAccountNumber",
        "ToAccountNumber"
      ],
      "line": 60,
      "id": "automating-assignment-b;\u003cdescription\u003e;;1"
    },
    {
      "cells": [
        "Bill Pay from Account A to Account B and then validte the details",
        "TestStreet",
        "TestCity",
        "TestState",
        "10011",
        "TestUser",
        "9876598765",
        "200.00",
        "SavingAccountNumberFromHashMap",
        "CheckingAccountNumberFromHashMap"
      ],
      "line": 61,
      "id": "automating-assignment-b;\u003cdescription\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1029087300,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Bill Pay from Account A to Account B and then validte the details",
  "description": "",
  "id": "automating-assignment-b;\u003cdescription\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I run the GET call and generate the session ID",
  "rows": [
    {
      "cells": [
        "URLExtension",
        "login.htm"
      ],
      "line": 30
    },
    {
      "cells": [
        "Username",
        "usernameFromConfig"
      ],
      "line": 31
    },
    {
      "cells": [
        "Password",
        "passwordFromConfig"
      ],
      "line": 32
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I validate the response code \"302\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I request bill payment using POST call",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "URLExtension",
        "services_proxy/bank/billpay"
      ],
      "line": 35
    },
    {
      "cells": [
        "street",
        "TestStreet"
      ],
      "line": 36
    },
    {
      "cells": [
        "city",
        "TestCity"
      ],
      "line": 37
    },
    {
      "cells": [
        "state",
        "TestState"
      ],
      "line": 38
    },
    {
      "cells": [
        "zipcode",
        "10011"
      ],
      "line": 39
    },
    {
      "cells": [
        "name",
        "TestUser"
      ],
      "line": 40
    },
    {
      "cells": [
        "phoneNumber",
        "9876598765"
      ],
      "line": 41
    },
    {
      "cells": [
        "amount",
        "200.00"
      ],
      "line": 42
    },
    {
      "cells": [
        "fromAccountNumber",
        "SavingAccountNumberFromHashMap"
      ],
      "line": 43
    },
    {
      "cells": [
        "toAccountNumber",
        "CheckingAccountNumberFromHashMap"
      ],
      "line": 44
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I validate the response code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I validate the account details using  GET call",
  "rows": [
    {
      "cells": [
        "URLExtension",
        "services_proxy/bank/accounts"
      ],
      "line": 47
    },
    {
      "cells": [
        "id",
        "CheckingAccountNumberFromHashMap"
      ],
      "line": 48
    },
    {
      "cells": [
        "customerID",
        "customerIDFromConfig"
      ],
      "line": 49
    },
    {
      "cells": [
        "balance",
        "100.0"
      ],
      "line": 50
    },
    {
      "cells": [
        "type",
        "CHECKING"
      ],
      "line": 51
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I validate the account details using  GET call",
  "rows": [
    {
      "cells": [
        "URLExtension",
        "services_proxy/bank/accounts"
      ],
      "line": 53
    },
    {
      "cells": [
        "id",
        "SavingAccountNumberFromHashMap"
      ],
      "line": 54
    },
    {
      "cells": [
        "customerID",
        "customerIDFromConfig"
      ],
      "line": 55
    },
    {
      "cells": [
        "balance",
        "100.0"
      ],
      "line": 56
    },
    {
      "cells": [
        "type",
        "SAVINGS"
      ],
      "line": 57
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.auhenticateAPI(DataTable)"
});
formatter.result({
  "duration": 883088200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "302",
      "offset": 30
    }
  ],
  "location": "stepDefinitions.validateRespseCode(int)"
});
formatter.result({
  "duration": 78700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.billPay(DataTable)"
});
formatter.result({
  "duration": 469371200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "stepDefinitions.validateRespseCode(int)"
});
formatter.result({
  "duration": 69300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.validateAccountDetails(DataTable)"
});
formatter.result({
  "duration": 1237860700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.validateAccountDetails(DataTable)"
});
formatter.result({
  "duration": 1245042700,
  "status": "passed"
});
formatter.after({
  "duration": 2864739600,
  "status": "passed"
});
});