// cate ore invat, introduc cate minute invat pe zi
let total = 0;

function timp(minute = 0) {
  total = minute + total;
  console.log('Ai invatat ' + total + ' minute');
}

timp(5280); // 05.2018
timp(4110); // 06.2018
timp(4300); // 07.2018
timp(4900); // 08.2018
timp(5290); // 09.2018
timp(6310); // 10.2018
timp(5200); // 11.2018

timp(180); // 01.12.2018
timp(170); // 02.12.2018
timp(120); // 03.12.2018
timp(190); // 04.12.2018
timp(100); // 05.12.2018
timp(140); // 06.12.2018 137
timp(100); // 07.12.2018
timp(180); // 08.12.2018
timp(140); // 09.12.2018
timp(220); // 10.12.2018
timp(100); // 11.12.2018
timp(180); // 12.12.2018
timp(170); // 13.12.2018
timp(140); // 14.12.2018
timp(180); // 15.12.2018
timp(160); // 16.12.2018
timp(100); // 17.12.2018
timp(210); // 18.12.2018
timp(150); // 19.12.2018
timp(140); // 20.12.2018
timp(180); // 21.12.2018
timp(100); // 22.12.2018
timp(140); // 23.12.2018
timp(140); // 24.12.2018
timp(120); // 25.12.2018
timp(120); // 26.12.2018
timp(100); // 27.12.2018

let ore = total / 60;

console.log('Ai invatat in jur de ' + Math.round(ore) + ' ore');
