const handleTimeChange = (time) => {
  setSelectedTime(time);
};

// In your form submission handler
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Make sure the time is properly formatted when sending to the backend
  const formData = {
    // ... other form data ...
    time: selectedTime, // This will now include both AM and PM times
    // ... rest of the form data ...
  };

  // ... rest of the submission code ...
}; 