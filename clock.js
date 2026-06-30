function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();

   const period = hours >= 12 ? "PM" : "AM";

  // 2桁表示
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");

  const time = `${period}${hours}:${minutes}`;

  document.getElementById("clock").textContent = time;
}

updateClock();

// 1秒ごと更新
setInterval(updateClock, 1000);