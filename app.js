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

timp(140); // 01.02.2019  199  15
timp(100); // 02.02.2019
timp(120); // 03.02.2019
timp(120); // 04.02.2019
timp(140); // 05.02.2019
timp(120); // 06.02.2019
timp(160); // 07.02.2019
timp(160); // 08.02.2019
timp(180); // 09.02.2019
timp(160); // 10.02.2019
timp(120); // 11.02.2019
timp(120); // 12.02.2019
timp(120); // 13.02.2019
timp(180); // 14.02.2019
timp(120); // 15.02.2019
timp(150); // 16.02.2019
timp(140); // 17.02.2019
timp(200); // 18.02.2019
timp(100); // 19.02.2019
timp(60); // 20.02.2019
timp(200); // 21.02.2019
timp(100); // 22.02.2019
timp(120); // 23.02.2019
timp(120); // 24.02.2019

let ore = total / 60;

console.log('Ai invatat in jur de ' + Math.round(ore) + ' de ore');
