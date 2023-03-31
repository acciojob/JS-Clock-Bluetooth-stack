//your code here
const hr = document.querySelector(".hour-hand");
const min = document.querySelector(".min-hand");
const sec = document. querySelector(".second-hand");

setInterval(()=>{
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * 6;
	let ss = day.getSeconds() * 6;
	
	hr.style.transform = `rotateZ(${hh+(mm/2)}deg)`;
	min.style.transform = `rotateZ(${mm}deg)`;
	sec.style.transform = `rotateZ(${ss}deg)`;
});


