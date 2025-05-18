let expense_per_category = [0, 0, 0, 0, 0];
let count = 4;

update_sum();

function update_sum() {
    const sumElements = document.querySelectorAll(".sum");
    for (let i = 0; i < sumElements.length; i++) {
        sumElements[i].textContent = ` - ${expense_per_category[i]}Rs. spent`;
    }
}

function add_expense() {
    const amount = document.querySelector('input[name="amount"]').value;
    const categoryDropdown = document.getElementById("category");
    const category = categoryDropdown.selectedIndex;
    const selected = categoryDropdown.options[category].value;
    const date = document.querySelector('input[name="date"]').value;
    const note = document.querySelector('input[name="note"]').value;

    if (amount && date && note && selected) {
        alert("Successfully added expense!");

        const table = document.querySelector(".expense-table");
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${amount}</td>
            <td>${selected}</td>
            <td>${date}</td>
            <td>${note}</td>
        `;
        table.appendChild(newRow);

        expense_per_category[category] = parseInt(expense_per_category[category]) + parseInt(amount);
        update_sum();

        document.querySelector(".add-new-expense").style.display = "none";
    } else {
        alert("Please enter all details!");
    }
}

function add_category() {
    const newCategoryValue = document.querySelector('input[name="new-category"]').value.trim();

    if (newCategoryValue) {
        const dropdown = document.querySelector('select[name="category"]');
        const availableCategories = document.querySelector(".available-categories");

        // Create and append new <option>
        const newOption = document.createElement("option");
        newOption.textContent = newCategoryValue;
        dropdown.appendChild(newOption);

        // Create and append new category display
        count++;
        expense_per_category[count] = 0;
        const newCategorySpan = document.createElement("span");
        newCategorySpan.innerHTML = `${newCategoryValue}<span class="sum"> - 0Rs. spent</span>`;
        availableCategories.appendChild(newCategorySpan);

        document.querySelector(".add-category").style.display = "none";
        update_sum();
    }
}

function add_category_page() {
    const categoryForm = document.querySelector(".add-category");
    categoryForm.style.display = categoryForm.style.display === "block" ? "none" : "block";
}

function add_expense_page() {
    const expenseForm = document.querySelector(".add-new-expense");
    expenseForm.style.display = expenseForm.style.display === "block" ? "none" : "block";
}
