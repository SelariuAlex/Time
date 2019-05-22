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
timp(3780); // 03.2019
timp(4660); // 04.2019  -56400

timp(100); // 01.05.2019  207
timp(200); // 02.05.2019
timp(140); // 03.05.2019
timp(120); // 04.05.2019
timp(180); // 05.05.2019
timp(140); // 06.05.2019
timp(220); // 07.05.2019
timp(160); // 08.05.2019
timp(140); // 09.05.2019
timp(150); // 10.05.2019
timp(50); // 11.05.2019
timp(180); // 12.05.2019
timp(160); // 13.05.2019
timp(200); // 14.05.2019
timp(150); // 15.05.2019
timp(160); // 16.05.2019
timp(120); // 17.05.2019
timp(120); // 18.05.2019
timp(100); // 19.05.2019
timp(100); // 20.05.2019
timp(80); // 21.05.2019
timp(180); // 22.05.2019

let ore = total / 60;

console.log('Ai invatat in jur de ' + Math.round(ore) + ' de ore');
