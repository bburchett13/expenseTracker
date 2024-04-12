let newExpense;
let expenses = [];
let expenseName = document.querySelector('#expenseName');
let expenseDate = document.querySelector('#expenseDate');
let expenseCategory = document.querySelector('#expenseCategory');
let expenseValue = document.querySelector('#expenseValue');
let expenseDescription = document.querySelector('#expenseDescription');

let submit = document.querySelector("#submit");
submit.addEventListener('click', () => {
    newExpense = new expense(expenseName.value, expenseDate.value, expenseCategory.value, expenseValue.value, expenseDescription.value);
    expenses.push(newExpense);


});

function expense(name, date, category, value, description) {

    this.name = name;
    this.date = date;
    this.category = category;
    this.value = value;
    this.description = description;

}