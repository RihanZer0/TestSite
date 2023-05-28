const pDates = document.querySelectorAll('.Date');
pDates.forEach(element => {
	let d = element.textContent;
	element.textContent = aDate(d);
});
	
function aDate(dat) {
	dat= dat.substring(3,6)+dat.slice(0,3)+dat.substr(-4,4); 
	let date = new Date(dat);
	let wDay = date.toLocaleString('ru',
		{
			weekday: 'long',
		});
	let day = date.getDate();
	let MnY = date.toLocaleString('ru',
		{
			day: '2-digit',
			month: 'long',
			year: 'numeric'
		});

let weekNum;

switch (wDay) {
  case "понедельник":
	if (day==1) {
		weekNum = 1;
	} else if (day>1 && day<=8) {
		weekNum = 2;
	} else if (day>8 && day<=15) {
		weekNum = 3;
	} else if (day>15 && day<=22) {
		weekNum = 4;
	} else if (day>22 && day<=29) {
		weekNum = 5;
	} else {weekNum = 6;}
	break;
  case "вторник":
	if (day<=2) {
		weekNum = 1;
	} else if (day>2 && day<=9) {
		weekNum = 2;
	} else if (day>9 && day<=16) {
		weekNum = 3;
	} else if (day>16 && day<=23) {
		weekNum = 4;
	} else if (day>23 && day<=30) {
		weekNum = 5;
	} else {weekNum = 6;}
	break;
  case "среда":
	if (day<=3) {
		weekNum = 1;
	} else if (day>3 && day<=10) {
		weekNum = 2;
	} else if (day>10 && day<=17) {
		weekNum = 3;
	} else if (day>17 && day<=24) {
		weekNum = 4;
	} else {weekNum = 5;}
	break;
  case "четверг":
	if (day<=4) {
		weekNum = 1;
	} else if (day>4 && day<=11) {
		weekNum = 2;
	} else if (day>11 && day<=18) {
		weekNum = 3;
	} else if (day>18 && day<=25) {
		weekNum = 4;
	} else {weekNum = 5;}
	break;
  case "пятница":
	if (day<=5) {
		weekNum = 1;
	} else if (day>5 && day<=12) {
		weekNum = 2;
	} else if (day>12 && day<=19) {
		weekNum = 3;
	} else if (day>19 && day<=26) {
		weekNum = 4;
	} else {weekNum = 5;}
	break;
  case "суббота":
	if (day<=6) {
		weekNum = 1;
	} else if (day>6 && day<=13) {
		weekNum = 2;
	} else if (day>13 && day<=20) {
		weekNum = 3;
	} else if (day>20 && day<=27) {
		weekNum = 4;
	} else {weekNum = 5;}
	break;
  case "воскресенье":
	if (day<=7) {
		weekNum = 1;
	} else if (day>7 && day<=14) {
		weekNum = 2;
	} else if (day>14 && day<=21) {
		weekNum = 3;
	} else if (day>21 && day<=28) {
		weekNum = 4;
	} else {weekNum = 5;}
	break;
}

wDay = wDay[0].toUpperCase() + wDay.slice(1)
MnY = MnY.slice(3).slice(0, -1);
MnY = MnY[0].toUpperCase() + MnY.slice(1)

return (`${wDay}, ${weekNum}\u00A0неделя ${MnY}ода`);
}
		
up = document.getElementById("up");
window.onscroll = function() {scroll()};
function scroll() {
	if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
		up.style.display = "block";
	} else {
		up.style.display = "none";
	}
}

function onTop() {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
}

function openFormM() {
  document.getElementById("openModal").style.opacity = 1;
  document.getElementById("openModal").style.pointerEvents = "auto";
}

function closeFormM() {
  document.getElementById("openModal").style.opacity = 0;
  document.getElementById("openModal").style.pointerEvents = "none";
}

function openFormD() {
	closeFormM();
  document.getElementById("openDone").style.opacity = 1;
  document.getElementById("openDone").style.pointerEvents = "auto";
  window.setTimeout('document.querySelector("#closeD").click();',5000);
}

function closeFormD() {
  document.getElementById("openDone").style.opacity = 0;
  document.getElementById("openDone").style.pointerEvents = "none";
}

let switchTheme = document.getElementById("switchTheme");

switchTheme.onclick = function() {
	let theme = document.getElementById("theme");
	if (theme.getAttribute("href") == "css/dark.css") {
		theme.href="css/light.css";
	} else {
		theme.href="css/dark.css";
	}
}