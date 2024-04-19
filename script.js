// Initial Expense List
let expenseList = [
    {type: 0, name: "rent", amount: 1200},
    {type: 1, name: "income", amount: 1700}

];

// Function to update expense summary
function updateSummary() { 
    let totalIncome = expenseList.reduce((income, expense) => { 
        if (expense.type === 1) income += expense.amount; 
        return income; 
    }, 0); 
    let totalExpense = expenseList.reduce((exp, expense) => { 
        if (expense.type === 0) exp += expense.amount; 
        return exp; 
    }, 0); 
    updatedInc.innerText = totalIncome; 
    updatedExp.innerText = totalExpense; 
    updatedBal.innerText = totalIncome - totalExpense; 
} 

// Function to add row to expense table
function addItem() { 
    let type = itemType.value; 
    let name = document.getElementById("name"); 
    let amount = document.getElementById("amount"); 
  
    // Input validation 
    if (name.value === "" || Number(amount.value) === 0) 
        return alert("Incorrect Input"); 
    if (Number(amount.value) <= 0) 
        return alert( 
            "Incorrect amount! can't add negative"
        ); 
  
    // Push new data 
    expenseList.push({ 
        type: Number(type), 
        name: name.value, 
        amount: Number(amount.value), 
    }); 
  
    updateTable(); 
    name.value = ""; 
    amount.value = 0; 
} 
  
// Function to load all entry in the expense table 
function loadItems(expense, i) { 
    let arrowColor; 
  
    let table = document.getElementById("table"); 
    let row = table.insertRow(i + 1); 
    let cell0 = row.insertCell(0); 
    let cell1 = row.insertCell(1); 
    let cell2 = row.insertCell(2); 
    let cell3 = row.insertCell(3); 
    let cell4 = row.insertCell(4); 
    cell0.innerHTML = i + 1; 
    cell1.innerHTML = expense.name; 
    cell2.innerHTML = expense.amount; 
    cell4.innerHTML = "☒"; 
    cell4.classList.add('delButton');
    cell4.addEventListener("click", () => del(expense)); 
    if (expense.type === 0) { 
        arrowColor = "red"; 
        cell3.innerHTML = "Expense"; 
    } else { 
        arrowColor = "green"; 
        cell3.innerHTML = "Income"; 
    } 
    cell3.style.color = arrowColor; 
} 
  
// Clear the table before updating
function remove() { 
    while (table.rows.length > 1) table.deleteRow(-1); 
} 
  
// Function to delete a specific expense line item
function del(removeExpense) { 
    remove(); 
    expenseList = expenseList.filter( 
        (expense) => expense.name !== removeExpense.name 
    ); 
    expenseList.map((expenses, i) => loadItems(expenses, i)); 
    updateSummary(); 
} 
  
// To update table to show all entries
function updateTable() { 
    remove(); 
    expenseList.map((expenses, i) => { 
        loadItems(expenses, i); 
    }); 
    updateSummary(); 
} 
  
updateTable();

