let user_name = sessionStorage.getItem("username");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");

document.querySelector("span.name").innerHTML = user_name;

document.querySelector("span.time_taken").innerHTML = user_time;

document.querySelector("span.pointss").innerHTML = user_points;

