document.getElementById('date').innerHTML = new Date().toDateString();

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function checkMilliTime(i) {
  if (i < 100) {
    i = "00" + i;
  }
  return i;
}


function startTime() {

const date1 = new Date('7/13/2010');
const date2 = new Date('12/15/2010');
const diffTime = Math.abs(date2.getTime() - date1.getTime());
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log(diffDays);

  var today = new Date();
  var dateOfAdmission = new Date(2018,11,25);

  var diff = today-dateOfAdmission;

  diff = diff.toDateString();

  document.getElementById('difference').innerHTML = diff;


  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var n = today.getMilliseconds();

  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  n = checkMilliTime(n);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s + ":" + n + " IST";
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();