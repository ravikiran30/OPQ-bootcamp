//We want to represent bank account entity
//acct holder name,acct number,ifsc,branch,balance


class BankAccount{
    constructor(name,accnt_num,ifsc,branch_name,balance)
    {
        this.name=name
        this.accnt_num=accnt_num
        this.ifsc=ifsc
        this.branch_name=branch_name
        this.balance=balance
    }
    credit(amount){
        this.balance+=amount
        console.log(`Amount credited ${amount}:: avaliable balance: ${this.balance}`)
    }
    debit(amount){
        if(this.balance>amount){
            this.balance-=amount
            console.log(`Amount debited: ${amount} Available balance: ${this.balance}`)
        }
        else{
            console.log("Insufficient balance")
        }
    }
    check_balance(){
        console.log(`Avaliable balance: ${this.balance}`)
    }
    add_interest(){
        console.log()
        this.balance +=(8/100*this.balance)
    }



}
class SavingAccount extends BankAccount{
    constructor(name,accnt_num,ifsc,branch_name,balance){
        super (name,accnt_num,ifsc,branch_name,balance)
        this.interest = 6
    }

}

let myAccount=new BankAccount("ravi",5112889900,"IFSC456789","jaynagar",500)
let mySavingsAccount= new SavingAccount("kiran",5233343889900,"IFSC456789","bengalurur",6253)
mySavingsAccount.check_balance()


// myAccount.check_balance()
//myAccount.debit(100)    
//myAccount.credit(500)
//myAccount.debit(1000)