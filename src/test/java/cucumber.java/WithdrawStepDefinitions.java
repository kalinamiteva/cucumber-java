package cucumber.java;

import cucumber.annotation.Before;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import junit.framework.Assert;

/**
 * User: PM
 * Date: 17/09/13
 * Time: 11:03
 */
public class WithdrawStepDefinitions {

    private Account account;
    private User user;

    @Before
    public void initialize(){
        if(account == null){
            account = new Account();
        }
        if(user == null){
            user = new User();
            user.setAccount(account);
        }
    }

    @Given("^a User has £(\\d+) in their account$")
    public void a_User_has_£_in_their_account(int amount) {
        account.depost(amount);
        Assert.assertTrue(account.getBalance() == amount);
    }

    @When("^£(\\d+) is withdrawn from the account$")
    public void £_is_withdrawn_from_the_account(int amount) {
        account.withdraw(amount);
    }

    @Then("^the balance must be £(\\d+)$")
    public void the_balance_should_be_£(int balance) {
        int currentBalance = account.getBalance();
        Assert.assertTrue("The expected balance is " + balance + " and the actual balance is " + currentBalance, balance == currentBalance);
    }

}
