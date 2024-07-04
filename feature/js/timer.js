// Function to update the countdown
function updateCountdown() {
    const countdownElement = document.querySelector('.countdown');
    const eventTime = new Date(countdownElement.getAttribute('datetime')).getTime();
    const currentTime = new Date().getTime();
    const difference = eventTime - currentTime;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days} d : ${hours} h : ${minutes} m : ${seconds} s`;

    // If the countdown is finished, write some text
    if (difference < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "EXPIRED";
    }
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);
