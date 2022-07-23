const dateTime = () => {
  let date = new Date();

  let day = date.getDay();
  let dayNum = date.getDate().toString();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let ids = ["day", "daynum", "month", "year"];

  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let values = [week[day], dayNum, months[month], year];

  if (hour > 12) {
    hour = hour - 12;
  }

  if (hour > 12) {
    document.getElementById("period").innerHTML = "AM";
  } else document.getElementById("period").innerHTML = "PM";

  for (i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }

  document.getElementById("hour").innerHTML = hour;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
};

setInterval(dateTime, 10);
