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
timp(4660); // 04.2019
timp(4490); // 05.2019
timp(4060); // 06.2019
timp(4160); // 07.2019  -69110

timp(100); // 01.08.2019  207
timp(120); // 02.08.2019
timp(140); // 03.08.2019
timp(180); // 04.08.2019
timp(150); // 05.08.2019
timp(160); // 06.08.2019
timp(100); // 07.08.2019
timp(140); // 08.08.2019
timp(160); // 09.08.2019
timp(100); // 10.08.2019
timp(100); // 11.08.2019
timp(220); // 12.08.2019
timp(140); // 13.08.2019
timp(140); // 14.08.2019
timp(60); // 15.08.2019
timp(90); // 16.08.2019
timp(150); // 17.08.2019
timp(100); // 18.08.2019
timp(120); // 19.08.2019
timp(80); // 20.08.2019
timp(240); // 21.08.2019
timp(80); // 22.08.2019
timp(60); // 23.08.2019
timp(80); // 24.08.2019
timp(60); // 25.08.2019
timp(100); // 26.08.2019
timp(140); // 27.08.2019
timp(100); // 28.08.2019
timp(120); // 29.08.2019
timp(140); // 30.08.2019
timp(140); // 31.08.2019 48

let ore = total / 60;

console.log('Ai invatat in jur de ' + Math.round(ore) + ' de ore');
