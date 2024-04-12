let newExpense;
let expenses = [];
let expenseName = document.querySelector('#expenseName');
let expenseDate = document.querySelector('#expenseDate');
let expenseCategory = document.querySelector('#expenseCategory');
let expenseValue = document.querySelector('#expenseValue');
let expenseDescription = document.querySelector('#expenseDescription');
let expenseList = document.querySelector('#expenseList');

let submit = document.querySelector("#submit");
submit.addEventListener('click', () => {
    newExpense = new expense(expenseName.value, expenseDate.value, expenseCategory.value, expenseValue.value, expenseDescription.value);
    expenses.push(newExpense);
    showExpenses(newExpense);


});

function expense(name, date, category, value, description) {

    this.name = name;
    this.date = date;
    this.category = category;
    this.value = value;
    this.description = description;

}
let nodeName;
let nodeDate;
let nodeCategory;
let nodeValue;
let nodeDescription;
function showExpenses(expense) {

    addingExpense = document.createElement('li');

    nodeName = document.createElement('div');
    nodeName.className = 'listItem';
    nodeNameContent = document.createTextNode(expense.name);
    nodeName.appendChild(nodeNameContent);

    nodeDate = document.createElement('div');
    nodeDate.className = 'listItem';
    nodeDateContent = document.createTextNode(expense.date)
    nodeDate.appendChild(nodeDateContent);

    nodeCategory = document.createElement('div');
    nodeCategory.className = 'listItem';
    nodeCategoryContent = document.createTextNode(expense.category)
    nodeCategory.appendChild(nodeCategoryContent);

    nodeValue = document.createElement('div');
    nodeValue.className = 'listItem';
    nodeValueContent = document.createTextNode(expense.value)
    nodeValue.appendChild(nodeValueContent);

    nodeDescription = document.createElement('div');
    nodeDescription.className = 'listItem';
    nodeDescriptionContent = document.createTextNode(expense.description)
    nodeDescription.appendChild(nodeDescriptionContent);


    addingExpense.appendChild(nodeName);
    addingExpense.appendChild(nodeDate);
    addingExpense.appendChild(nodeCategory);
    addingExpense.appendChild(nodeValue);
    addingExpense.appendChild(nodeDescription);

    expenseList.appendChild(addingExpense);
    

}