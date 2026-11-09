
let form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;
    let email = document.getElementById("email").value;

    let gender = document.querySelector('input[name="gender"]:checked').value;

    let table = document.getElementById("studentList");

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td><button class="deleteBtn">Delete</button></td>
    `;

    table.appendChild(row);

    // Delete button
    let deleteButton = row.querySelector(".deleteBtn");

    deleteButton.addEventListener("click", function() {
        row.remove();
    });

    
    form.reset();

});
