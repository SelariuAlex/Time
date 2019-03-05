// cate ore invat, introduc cate minute invat pe zi
let total = 0;

function timp(minute = 0) {
  total = minute + total;
  console.log('Ai invatat ' + total + ' de minute');
}

timp(5280); // 05.2018
timp(4110); // 06.2018
timp(4300); // 07.2018
timp(4900); // 08.2018
timp(5290); // 09.2018
timp(6310); // 10.2018
timp(5200); // 11.2018
timp(4530); // 12.2018
timp(4350); // 01.2019
timp(3690); // 02.2019  -47960

timp(60); // 03.02.2019  199  15
timp(120); // 04.02.2019
timp(100); // 05.02.2019

let ore = total / 60;

console.log('Ai invatat in jur de ' + Math.round(ore) + ' de ore');
