// Store you first name, last name, age, country, city in your browser localStorage
// let key=prompt("enter the key value")
localStorage.setItem("firstname","Abhishek")
localStorage.setItem("lastname","Tewari")
localStorage.setItem("age","20")
localStorage.setItem("country","India")
localStorage.setItem("city","Lucknow")
// Create a student object. The student object will have first name, last name, age, skills, country, 
// enrolled keys and values for the keys. Store the student object in your browser localStorage.


 var student={
    "firstname" : "abhishek" ,
    "lastname" : "tewari",
    age : 20 ,
    "skills": ["html","css","js"]

 }

 localStorage.setItem("student",JSON.stringify(student))

 // create a personAccount object
let personAccount = {
    firstName: "John",
    lastName: "Doe",
    incomes: [
      { description: "salary", amount: 5000 },
      { description: "freelance work", amount: 1000 }
    ],
    expenses: [
      { description: "rent", amount: 1500 },
      { description: "groceries", amount: 500 },
      { description: "utilities", amount: 300 }
    ],
    
    // 
    totalIncome: function() {
      let total = 0;
      for(let income of this.incomes) {
        total += income.amount;
      }
      return total;
    },
    totalExpense: function() {
      let total = 0;
      for(let expense of this.expenses) {
        total += expense.amount;
      }
      return total;
    },
    accountInfo: function() {
      return `Name: ${this.firstName} ${this.lastName}, Income: ${this.totalIncome()}, Expense: ${this.totalExpense()}`;
    },
    addIncome: function(description, amount) {
      this.incomes.push({ description, amount });
    },
    addExpense: function(description, amount) {
      this.expenses.push({ description, amount });
    },
    accountBalance: function() {
      return this.totalIncome() - this.totalExpense();
    }
  };
  
  // store the object in LocalStorage
  localStorage.setItem("personAccount", JSON.stringify(personAccount));