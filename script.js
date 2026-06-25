function updateClock() {
    const now = new Date();

    // Time
    const time = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    // Day
    const day = now.toLocaleDateString("en-IN", {
        weekday: "long",
        timeZone: "Asia/Kolkata"
    });

    // Date
    const date = now.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Kolkata"
    });

    // Random color every second
    const color =
        "#" + Math.floor(Math.random() * 16777215).toString(16);

    document.getElementById("clock").textContent = time;
    document.getElementById("day").textContent = day;
    document.getElementById("date").textContent = date;

    document.getElementById("clock").style.color = color;
    document.getElementById("day").style.color = color;
    document.getElementById("date").style.color = color;
}

setInterval(updateClock, 1000);
updateClock();
