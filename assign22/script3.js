function personAccount(firstname, lastname) {
    let incomes = [];
    let expenses = [];
  
    function totalIncome() {
      let total = 0;
      for (let income of incomes) {
        total += income.amount;
      }
      return total;
    }
  
    function totalExpense() {
      let total = 0;
      for (let expense of expenses) {
        total += expense.amount;
      }
      return total;
    }
  
    function accountInfo() {
      return (`Account Information\n
      Name: ${firstname} ${lastname}
      Total Income: ${totalIncome()}
      Total Expense: ${totalExpense()}
      Account Balance: ${totalIncome() - totalExpense()}`);
    }
  
    function addIncome(description, amount) {
      incomes.push({ description, amount });
    }
  
    function addExpense(description, amount) {
      expenses.push({ description, amount });
    }
  
    function accountBalance() {
      return totalIncome() - totalExpense();
    }
  
    return {
      accountInfo,
      addIncome,
      addExpense,
      accountBalance,
    };
  }
  
  // Example usage:
  const johnDoeAccount = personAccount('John', 'Doe');
  johnDoeAccount.addIncome('Salary', 5000);
  johnDoeAccount.addIncome('Bonus', 1000);
  johnDoeAccount.addExpense('Rent', 1500);
  johnDoeAccount.addExpense('Groceries', 200);
  console.log(johnDoeAccount.accountInfo());
  console.log('Account Balance:', johnDoeAccount.accountBalance());