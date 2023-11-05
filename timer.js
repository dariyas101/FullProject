function startTimer() {
    const durationInput = document.getElementById("durationInput");
    const timerElement = document.getElementById("timer");
    const duration = parseInt(durationInput.value, 10);

    if (isNaN(duration) || duration <= 0) {
        alert("Please enter a valid duration.");
        return;
    }

    let startTime;
    function animate(time) {
        if (!startTime) startTime = time;
        const elapsedTime = time - startTime;
        const secondsRemaining = Math.max(Math.ceil((duration * 1000 - elapsedTime) / 1000), 0);

        timerElement.textContent = secondsRemaining + "s";
        timerElement.style.width = (secondsRemaining / duration * 100) + "%";

        if (elapsedTime < duration * 1000) {
            requestAnimationFrame(animate);
        } else {
            timerElement.textContent = "Time's up!";
            timerElement.style.width = "100%";
        }
    }

    requestAnimationFrame(animate);
}
