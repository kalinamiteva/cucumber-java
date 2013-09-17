package cucumber.java;

import cucumber.annotation.Before;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import cucumber.runtime.PendingException;
import junit.framework.Assert;

/**
 * User: PM
 * Date: 16/09/13
 * Time: 15:00
 */
public class DepositStepDefinitions {

    private Account account;
    private User user;

    @Before
    public void initialize(){
        if(user == null){
            user = new User();
        }
        if (account == null){
            account = new Account();
            user.setAccount(account);
        }
    }

    @Given("^a User has no money in their account$")
    public void a_User_has_no_money_in_their_account() {
        User user = new User();
        account = new Account();
        user.setAccount(account);
        Assert.assertTrue("The balance is zero",account.getBalance() == 0);
    }

    @When("^£(\\d+) is deposited in to the account$")
    public void £_is_deposited_in_to_the_account(int amount) {
        // Express the Regexp above with the code you wish you had
        account.depost(amount);
    }

    @Then("^the balance should be £(\\d+)$")
    public void the_balance_should_be_£(int balance) {

        int currentBalance = account.getBalance();
        Assert.assertTrue("The expected balance is "+balance+" and the actual balance is "+currentBalance, balance == currentBalance);
    }
}


