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

timp(180); // 01.12.2018   135

let ore = total / 60;

console.log('Ai invatat in jur de ' + Math.round(ore) + ' ore');
