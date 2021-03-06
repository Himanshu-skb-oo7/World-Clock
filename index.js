/* -- Convert degrees to radians (actually unused here :-) -- */
function deg2rad(d) { return (2 * d / 360) * Math.PI; }
/* -- Progress the clock's hands every once in a while -- */



setInterval(() => {
  let minute = document.getElementsByClassName("minute");
  let hour = document.getElementsByClassName("hour");
  let second = document.getElementsByClassName("second");
  let span = document.getElementsByTagName("span");
  let dateDiv = document.getElementsByClassName("innerDate");
  let timeZoneDiv = document.getElementsByClassName("Date");


  for(var i=0;i<minute.length;i++)
  {



    let newDate= new Date().toLocaleString('en-US', { timeZone: timeZoneDiv[i].innerText }).split(" ")[1].split(":");

     
    let S = new Date().getSeconds() * 6 - 90;
    let M = (parseInt(newDate[1])+ parseInt(newDate[2])/60)* 6 - 90;
    let H = (parseInt(newDate[0])+ parseInt(newDate[1])/60)*30 - 90;
    //console.log(H);
    second[i].style.transform = 'rotate(' + S + 'deg)';
    minute[i].style.transform = 'rotate(' + M + 'deg)';
    hour[i].style.transform = 'rotate(' + H + 'deg)';
    dateDiv[i].innerText= new Date().toLocaleString('en-US', { timeZone: timeZoneDiv[i].innerText });



  }
  
    
}, 10);

function vec2ang(x, y) {
 angleInRadians = Math.atan2(y, x);
 angleInDegrees = (angleInRadians / Math.PI) * 180.0;
 return angleInDegrees;
}

/* -- Let's calculate position and angle of clock's notches-- */
let nc = document.getElementsByClassName("notch-container");
let angle = 0;
let rotate_x = 120;
let rotate_y = 0;
/* -- Calculate the 60 notches for seconds and minutes -- */

for (var j=0;j<nc.length; j++) 
{for (let i = 0; i < 60; i++) {
  let thin = document.createElement("div");
  let x = rotate_x * Math.cos(angle) - rotate_y * Math.cos(angle);
  let y = rotate_y * Math.cos(angle) + rotate_x * Math.sin(angle);
  let r = vec2ang(x, y);
  thin.className = "thin";
  thin.style.left = 122 + x + "px";
  thin.style.top = 127 + y + "px";
  thin.style.transform = "rotate(" + r + "deg)";
  nc[j].appendChild(thin);
  angle +=  (Math.PI / 300) * 10;
}
}
// reset angle parameters

for (var j=0;j<nc.length; j++) 
{


angle = 0; rotate_x = 120; rotate_y = 0;
for (let i = 0; i < 12; i++) {
  let notch = document.createElement("div");
  let x = rotate_x * Math.cos(angle) - rotate_y * Math.cos(angle);
  let y = rotate_y * Math.cos(angle) + rotate_x * Math.sin(angle);
  let r = vec2ang(x, y);
  notch.className = "notch";
  notch.style.left = 122 + x + "px";
  notch.style.top = 127 + y + "px";
  notch.style.transform = "rotate(" + r + "deg)";
  nc[j].appendChild(notch);
  angle +=  (Math.PI / 60) * 10;
}
}