//countdown timer
const countDownDate = new Date ("Jan 1, 2020 00:00:00").getTime();
const intervalId = setInterval(function() {
  const now = new Date().getTime();
  let distance = countDownDate - now;
    
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
 
  if (distance <= 0) {
    clearInterval(intervalId);
  }
}, 1000);


