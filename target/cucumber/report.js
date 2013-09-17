$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumber\java\deposit.feature');
formatter.feature({
  "id": "depositing-money-in-to-a-user-account",
  "description": "",
  "name": "Depositing money in to a User account",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "depositing-money-in-to-a-user-account;depositing-money-in-to-user\u0027s-account-should-add-money-to-the-user\u0027s-current-balance",
  "description": "",
  "name": "Depositing money in to User\u0027s account should add money to the User\u0027s current balance",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "a User has no money in their account",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "£100 is deposited in to the account",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "the balance should be £100",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "DepositStepDefinitions.a_User_has_no_money_in_their_account()"
});
formatter.result({
  "duration": 137823550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 1
    }
  ],
  "location": "DepositStepDefinitions.£_is_deposited_in_to_the_account(int)"
});
formatter.result({
  "duration": 907910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 23
    }
  ],
  "location": "DepositStepDefinitions.the_balance_should_be_£(int)"
});
formatter.result({
  "duration": 115826,
  "status": "passed"
});
formatter.scenario({
  "id": "depositing-money-in-to-a-user-account;withdrawing-money-from-a-user\u0027s-account-should-subtract-money-from-the-user\u0027s-current-balance",
  "description": "",
  "name": "Withdrawing money from a User\u0027s account should subtract money from the User\u0027s current balance",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "a User has £100 in their account",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "£100 is withdrawn from the account",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "the balance must be £0",
  "keyword": "Then ",
  "line": 11
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 12
    }
  ],
  "location": "WithdrawStepDefinitions.a_User_has_£_in_their_account(int)"
});
formatter.result({
  "duration": 66709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 1
    }
  ],
  "location": "WithdrawStepDefinitions.£_is_withdrawn_from_the_account(int)"
});
formatter.result({
  "duration": 55713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 21
    }
  ],
  "location": "WithdrawStepDefinitions.the_balance_should_be_£(int)"
});
formatter.result({
  "duration": 70742,
  "status": "passed"
});
});