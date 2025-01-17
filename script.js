function getFormvalue(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form element
    const form = document.getElementById('form1');

    // Retrieve the values of 'fname' and 'lname'
    const firstName = form.elements['fname'].value;
    const lastName = form.elements['lname'].value;

    // Display the first and last name in an alert
    alert(`${firstName} ${lastName}`);
}
