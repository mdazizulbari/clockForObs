function updateClock() {
  const now = new Date();

  // Get hours, minutes, and seconds
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Determine AM/PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour format to 12-hour format
  hours = hours % 12 || 12; // Converts '0' to '12' for 12 AM

  // Format hours with leading zero
  const formattedHours = String(hours).padStart(2, "0");

  // Update the clock display
  document.getElementById(
    "time"
  // ).textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
  ).textContent = `${formattedHours}:${minutes} ${ampm}`;
  // ).textContent = `${formattedHours}:${minutes}:${seconds}`;

  // Date
  const options = {
    weekday: "short",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  document.getElementById("date").textContent = now.toLocaleDateString(
    "en-UK",
    options
  );
}

setInterval(updateClock, 1000);
updateClock();
