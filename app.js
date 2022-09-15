let myName = document.getElementById('myName')
let hours = document.getElementsByClassName('hours');
let minutes = document.getElementsByClassName('minutes');
let seconds = document.getElementsByClassName('seconds');
let day= document.getElementsByClassName('day');

let patikaName = prompt("Lütfen İsminizi yazınız...")
myName.innerHTML = patikaName.length>0 ? patikaName : alert("Lütfen bir isim giriniz!")


function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(showTime, 1000);
    
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  showTime()