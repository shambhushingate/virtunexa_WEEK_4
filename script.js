// script.js
// Countdown Timer
const eventDate = new Date("2024-01-01T00:00:00").getTime(); // Set your event date here

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerText = "Event has started!";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// RSVP Form Submission
document.getElementById("rsvp-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Simulate form submission
  document.getElementById("rsvp-message").innerText = `Thank you, ${name}! We've received your RSVP.`;
  document.getElementById("rsvp-form").reset();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});