$(document).ready(function() {
    // Initialize the date picker
    $('#datepicker').datepicker({
        dateFormat: 'mm/dd/yy'
    });

    // Initialize the time picker
    $('#timepicker').timepicker({
        timeFormat: 'h:mm p',
        interval: 30,
        minTime: '0',
        maxTime: '11:00pm',
        defaultTime: 'now',
        startTime: '0:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });

    // Initialize the select2 plugin for dropdowns
    $('.select2').select2({
        placeholder: "Select an option",
        allowClear: true
    });
});
// Function to handle form submission   
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    var formData = {
        date: $('#datepicker').val(),
        time: $('#timepicker').val(),
        option: $('#select2').val()
    };

    // Perform an AJAX request to submit the form data
    $.ajax({
        url: '/submit-form', // Replace with your server endpoint
        type: 'POST',
        data: formData,
        success: function(response) {
            alert('Form submitted successfully!');
            console.log(response);
        },
        error: function(xhr, status, error) {
            alert('An error occurred while submitting the form.');
            console.error(error);
        }
    });
}