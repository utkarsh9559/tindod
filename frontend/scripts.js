// Function to handle appointment submission
function submitAppointment() {
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('appointment-date').value;
    const time = document.getElementById('appointment-time').value;
  
    if (doctor && date && time) {
      document.getElementById('appointment-feedback').innerHTML = `
        <div class="alert alert-success">
          Your appointment has been successfully booked with ${doctor} on ${date} at ${time}.
        </div>
      `;
      clearForm();
    } else {
      document.getElementById('appointment-feedback').innerHTML = `
        <div class="alert alert-danger">
          Please fill out all the fields to book an appointment.
        </div>
      `;
    }
  }
  
  // Clear the form after submission
  function clearForm() {
    document.getElementById('appointment-form').reset();
  }
  