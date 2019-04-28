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
timp(3690); // 02.2019
timp(3780); // 03.2019  -51740

timp(160); // 01.04.2019  207
timp(240); // 02.04.2019
timp(100); // 03.04.2019
timp(130); // 04.04.2019
timp(260); // 05.04.2019
timp(180); // 06.04.2019
timp(160); // 07.04.2019
timp(100); // 08.04.2019
timp(60); // 09.04.2019
timp(140); // 10.04.2019
timp(160); // 11.04.2019
timp(190); // 12.04.2019
timp(160); // 13.04.2019
timp(120); // 14.04.2019
timp(80); // 15.04.2019
timp(80); // 16.04.2019
timp(240); // 17.04.2019
timp(180); // 18.04.2019
timp(220); // 19.04.2019
timp(120); // 20.04.2019
timp(200); // 21.04.2019
timp(80); // 22.04.2019
timp(220); // 23.04.2019
timp(200); // 24.04.2019
timp(90); // 25.04.2019
timp(160); // 26.04.2019
timp(180); // 27.04.2019
timp(120); // 28.04.2019

let ore = total / 60;

console.log('Ai invatat in jur de ' + Math.round(ore) + ' de ore');
