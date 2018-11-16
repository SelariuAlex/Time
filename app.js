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

timp(180); // 01.11.2018
timp(210); // 02.11.2018
timp(100); // 03.11.2018
timp(160); // 04.11.2018
timp(200); // 05.11.2018
timp(240); // 06.11.2018
timp(200); // 07.11.2018
timp(240); // 08.11.2018
timp(200); // 09.11.2018
timp(140); // 10.11.2018
timp(180); // 11.11.2018
timp(240); // 12.11.2018
timp(120); // 13.11.2018
timp(120); // 14.11.2018
timp(200); // 15.11.2018  83
timp(80); // 16.11.2018

let ore = total / 60;

console.log('Ai invatat in jur de ' + Math.round(ore) + ' ore');
