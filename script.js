function updateClock() {
  const now = new Date();

  // ---- Challenge start date (8 Aug 2025 is day 1) ----
  const startDate = new Date(2025, 7, 8); // months are 0-indexed (7 = August)
  // Difference in ms
  const diffMs = now - startDate;
  // Convert ms → days
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
  // +1 so that 8/8/25 = Day 1
  // Update dayCount
  document.getElementById("dayCount").textContent = `Day${diffDays}`;

  // ---- Get hours, minutes, and seconds ----
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
  ).textContent = `${formattedHours}:${minutes}${ampm}`;
  // ).textContent = `${formattedHours}:${minutes}:${seconds}`;

  // ---- Date ----
  const options = {
    // weekday: "short",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  document.getElementById("date").textContent = now.toLocaleDateString(
    "en-UK",
    options
  );

 // --- Focus/Break Timer ---
  const minute = now.getMinutes();
  const second = now.getSeconds();
  let phase, remainingMins, remainingSecs;

  if (minute < 50) {
    // Focus phase: 00–49:59
    phase = "Focus";
    remainingMins = 49 - minute;
    remainingSecs = 59 - second;
  } else {
    // Break phase: 50–59:59
    phase = "Break";
    remainingMins = 59 - minute;
    remainingSecs = 59 - second;
  }

  // Format remaining time
  const formattedMins = String(remainingMins).padStart(2, "0");
  const formattedSecs = String(remainingSecs).padStart(2, "0");

  document.getElementById("timer").textContent = `${phase} ${formattedMins}:${formattedSecs}`;
}

setInterval(updateClock, 1000);
updateClock();
