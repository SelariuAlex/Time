// cate ore invat, introduc cate minute invat pe zi
let total = 0;

function timp(minute = 0) {
  total = minute + total;
  console.log("Ai invatat " + total + " de minute");
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
timp(4160); // 07.2019
timp(3810); // 08.2019
timp(4100); // 09.2019
timp(3730); // 10.2019
timp(2830); // 11.2019  -83580

timp(120); // 01.12.2019  207  62
timp(180); // 02.12.2019
timp(120); // 03.12.2019
timp(130); // 04.12.2019
timp(180); // 05.12.2019
timp(80); // 06.12.2019
timp(220); // 07.12.2019
timp(150); // 08.12.2019
timp(90); // 09.12.2019
timp(170); // 10.12.2019
timp(120); // 11.12.2019
timp(80); // 12.12.2019
timp(60); // 13.12.2019
timp(120); // 14.12.2019
timp(140); // 15.12.2019
timp(140); // 16.12.2019
timp(130); // 17.12.2019
timp(180); // 18.12.2019
timp(100); // 19.12.2019
timp(100); // 20.12.2019
timp(80); // 21.12.2019
timp(80); // 22.12.2019
timp(60); // 23.12.2019
timp(60); // 24.12.2019
timp(120); // 25.12.2019
timp(100); // 26.12.2019
timp(80); // 27.12.2019
timp(140); // 28.12.2019
timp(90); // 29.12.2019
timp(40); // 30.12.2019
timp(20); // 31.12.2019

let ore = total / 60;

console.log("Ai invatat in jur de " + Math.round(ore) + " de ore");
