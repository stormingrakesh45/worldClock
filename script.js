const hr = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const citySelect = document.getElementById('city-select');

function displayTime() {
    const selectedCity = citySelect.value;
    const date = new Date();
    
    // Get the time for the selected city
    const options = { timeZone: selectedCity, hour12: false };
   const timeString = date.toLocaleTimeString('en-US', options);
    const [hh, mm, ss] = timeString.split(':').map(Number);

    const hRotation = 30 * hh + mm / 2;
    const mRotation = 6 * mm;
    const ssRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${ssRotation}deg)`;
}

function updateClock() {
    displayTime();
}

setInterval(displayTime, 1000);
