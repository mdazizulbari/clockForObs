function updateClock() {
  const now = new Date();

  // Time
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById(
    "time"
  ).textContent = `${hours}:${minutes}:${seconds}`;

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
