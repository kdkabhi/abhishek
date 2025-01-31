document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventSelected = document.getElementById('event').value;

    // Create a new row
    const newRow = document.createElement('tr');

    // Create cells for the new row
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    newRow.appendChild(nameCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = email;
    newRow.appendChild(emailCell);

    const eventCell = document.createElement('td');
    eventCell.textContent = eventSelected;
    newRow.appendChild(eventCell);

    // Append the new row to the table body
    document.getElementById('eventList').appendChild(newRow);

    // Clear the form
    document.getElementById('eventForm').reset();
});