function updateUTCTime() {
  const now = new Date();

  // Get individual components
  const hours = String(now.getUTCHours()).padStart(2, "0");
  const minutes = String(now.getUTCMinutes()).padStart(2, "0");
  const seconds = String(now.getUTCSeconds()).padStart(2, "0");

  // Format as HH:MM:SS UTC
  const utcTime = `${hours}:${minutes}:${seconds} UTC`;

  // Update DOM
  document.querySelector('[data-testid="currentTimeUTC"]').textContent =
    utcTime;
}

// Run on page load
window.addEventListener("load", updateUTCTime);
