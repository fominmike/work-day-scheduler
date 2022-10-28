var time = moment().format('dddd MMMM Do YYYY, h:mm:ss a');

var currentTime = document.getElementById('currentDay')

currentTime.textContent = time

var currentHour = moment().hour();
var hour9 = document.querySelector('.hour9').textContent
var hour10 = document.querySelector('.hour10').textContent
var hour11 = document.querySelector('.hour11').textContent
var hour12 = document.querySelector('.hour12').textContent
var hour13 = document.querySelector('.hour13').textContent
var hour14 = document.querySelector('.hour14').textContent
var hour15 = document.querySelector('.hour15').textContent
var hour16 = document.querySelector('.hour16').textContent
var hour17 = document.querySelector('.hour17').textContent


var textArea1 = document.getElementById('tx1')
var textArea2 = document.getElementById('tx2')
var textArea3 = document.getElementById('tx3')
var textArea4 = document.getElementById('tx4')
var textArea5 = document.getElementById('tx5')
var textArea6 = document.getElementById('tx6')
var textArea7 = document.getElementById('tx7')
var textArea8 = document.getElementById('tx8')
var textArea9 = document.getElementById('tx9')
 
function setColor1() {
    if(hour9 < currentHour) {
        textArea1.classList.add('past')
    } else if (hour9 == currentHour) {
        textArea1.classList.add('present')
    } else if (hour9 > currentHour) {
        textArea1.classList.add('future')
    }
}

function setColor2() {
    if(hour10 < currentHour) {
        textArea2.classList.add('past')
    } else if (hour10 == currentHour) {
        textArea2.classList.add('present')
    } else if (hour10 > currentHour) {
        textArea2.classList.add('future')
    }
}

function setColor3() {
    if(hour11 < currentHour) {
        textArea3.classList.add('past')
    } else if (hour11 == currentHour) {
        textArea3.classList.add('present')
    } else if (hour12 > currentHour) {
        textArea3.classList.add('future')
    }
}

function setColor4() {
    if(hour12 < currentHour) {
        textArea4.classList.add('past')
    } else if (hour12 == currentHour) {
        textArea4.classList.add('present')
    } else if (hour12 > currentHour) {
        textArea4.classList.add('future')
    }
}

function setColor5() {
    if(hour13 < currentHour) {
        textArea5.classList.add('past')
    } else if (hour13 == currentHour) {
        textArea5.classList.add('present')
    } else if (hour13 > currentHour) {
        textArea5.classList.add('future')
    }
}

function setColor6() {
    if(hour14 < currentHour) {
        textArea6.classList.add('past')
    } else if (hour14 == currentHour) {
        textArea6.classList.add('present')
    } else if (hour14 > currentHour) {
        textArea6.classList.add('future')
    }
}

function setColor7() {
    if(hour15 < currentHour) {
        textArea7.classList.add('past')
    } else if (hour15 == currentHour) {
        textArea7.classList.add('present')
    } else if (hour15 > currentHour) {
        textArea7.classList.add('future')
    }
}

function setColor8() {
    if(hour16 < currentHour) {
        textArea8.classList.add('past')
    } else if (hour16 == currentHour) {
        textArea8.classList.add('present')
    } else if (hour16 > currentHour) {
        textArea8.classList.add('future')
    }
}

function setColor9() {
    if(hour17 < currentHour) {
        textArea9.classList.add('past')
    } else if (hour17 == currentHour) {
        textArea9.classList.add('present')
    } else if (hour17 > currentHour) {
        textArea9.classList.add('future')
    }
}


setColor1()
setColor2()
setColor3()
setColor4()
setColor5()
setColor6()
setColor7()
setColor8()
setColor9()