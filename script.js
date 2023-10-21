document.getElementById("submitBtn").addEventListener("click", function() {
    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const birthday = document.getElementById("birthday").value;
    const course = document.getElementById("course").value;
    const schoolYear = document.getElementById("schoolYear").value;

    if (
        firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        age.trim() !== "" &&
        gender.trim() !== "" &&
        birthday.trim() !== "" &&
        course.trim() !== "" &&
        schoolYear.trim() !== ""
    ) {
        const tableBody = document.getElementById("tableBody");

        const updatingRow = tableBody.querySelector(".updating");
        if (updatingRow) {
            updatingRow.cells[0].textContent = firstName;
            updatingRow.cells[1].textContent = middleName;
            updatingRow.cells[2].textContent = lastName;
            updatingRow.cells[3].textContent = age;
            updatingRow.cells[4].textContent = gender;
            updatingRow.cells[5].textContent = birthday;
            updatingRow.cells[6].textContent = course;
            updatingRow.cells[7].textContent = schoolYear;

            updatingRow.cells[8].querySelector("button").textContent = "Update";
            updatingRow.classList.remove("updating");

            updatingRow.cells[9].querySelector("button").disabled = false;

            clearInputFields();
        } else {
            const newRow = tableBody.insertRow();

            newRow.insertCell(0).textContent = firstName;
            newRow.insertCell(1).textContent = middleName;
            newRow.insertCell(2).textContent = lastName;
            newRow.insertCell(3).textContent = age;
            newRow.insertCell(4).textContent = gender;
            newRow.insertCell(5).textContent = birthday;
            newRow.insertCell(6).textContent = course;
            newRow.insertCell(7).textContent = schoolYear;

            createUpdateButton(newRow);
            createDeleteButton(newRow);

            clearInputFields();
        }
    } else {
        alert("Please fill in all required fields.");
    }
});

function clearInputFields() {
    document.getElementById("firstName").value = "";
    document.getElementById("middleName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("course").value = "";
    document.getElementById("schoolYear").value = "";
}

function createUpdateButton(row) {
    const cell = row.insertCell(8);
    const updateButton = document.createElement("button");
    updateButton.innerHTML = "Update";
    updateButton.addEventListener("click", function() {
        clearInputFields();

        const cells = row.cells;
        document.getElementById("firstName").value = cells[0].textContent;
        document.getElementById("middleName").value = cells[1].textContent;
        document.getElementById("lastName").value = cells[2].textContent;
        document.getElementById("age").value = cells[3].textContent;
        document.getElementById("gender").value = cells[4].textContent;
        document.getElementById("birthday").value = cells[5].textContent;
        document.getElementById("course").value = cells[6].textContent;
        document.getElementById("schoolYear").value = cells[7].textContent;

        document.getElementById("submitBtn").textContent = "Update";
        row.classList.add("updating");

        row.cells[9].querySelector("button").disabled = true;
    });
    cell.appendChild(updateButton);
}

function createDeleteButton(row) {
    const cell = row.insertCell(9);
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function() {
        if (confirm("Are you sure you want to delete this row?")) {
            row.remove();
        }
    });
    cell.appendChild(deleteButton);
}

document.getElementById("searchInput").addEventListener("input", function() {
    const searchText = this.value.toLowerCase();
    const tableBody = document.getElementById("tableBody");
    const rows = tableBody.getElementsByTagName("tr");

    for (const row of rows) {
        let found = false;

        for (const cell of row.cells) {
            const cellText = cell.textContent.toLowerCase();
            if (cellText.includes(searchText)) {
                found = true;
                break;
            }
        }

        if (found) {
            row.style.display = "table-row";
        } else {
            row.style.display = "none";
        }
    }
});