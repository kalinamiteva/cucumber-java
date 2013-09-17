package cucumber.java;

/**
 * User: PM
 * Date: 16/09/13
 * Time: 17:19
 */
public   class Account{
    private int balance;

    public Account(){
        this.balance =0;
    }

    public void depost(int amount){
        this.balance += amount;
    }

    public void withdraw(int amount){
        this.balance -=amount;
    }

    public int getBalance(){
        return this.balance;
    }
}
