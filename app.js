// cate ore invat, introduc cate minute invat pe zi
let total = 0;

function timp(minute = 0) {
  total = minute + total;
  console.log("Ai invatat " + total + " minute");
}

timp(5280); // 05.2018
timp(4110); // 06.2018
timp(4300); // 07.2018
timp(4900); // 08.2018
timp(5290); // 09.2018

timp(300); // 01.10.2018
timp(210); // 02.10.2018
timp(240); // 03.10.2018
timp(200); // 04.10.2018
timp(140); // 05.10.2018
timp(210); // 06.10.2018
timp(200); // 07.10.2018
timp(120); // 08.10.2018
timp(180); // 09.10.2018
timp(210); // 10.10.2018
timp(190); // 11.10.2018
timp(140); // 12.10.2018
timp(240); // 13.10.2018
timp(180); // 14.10.2018
timp(200); // 15.10.2018
timp(170); // 16.10.2018
timp(200); // 17.10.2018
timp(180); // 18.10.2018
timp(260); // 19.10.2018
timp(310); // 20.10.2018
timp(280); // 21.10.2018

let ore = total / 60;

console.log("Ai invatat in jur de " + Math.round(ore) + " ore");
