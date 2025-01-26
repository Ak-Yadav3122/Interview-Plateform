const TimePickerComponent = ({ selectedTime, onTimeChange }) => {
  const handleTimeChange = (time) => {
    // Convert the selected time to 24-hour format
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    onTimeChange(formattedTime);
  };

  return (
    <TimePicker
      value={selectedTime ? new Date(`2000/01/01 ${selectedTime}`) : null}
      onChange={handleTimeChange}
      format="hh:mm a" // Add 'a' to show AM/PM indicator
      use12Hours // Enable 12-hour format with AM/PM
      minuteStep={30} // Optional: Set minute intervals
      className="w-full"
    />
  );
}; 