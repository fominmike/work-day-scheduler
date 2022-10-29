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


// buttons
var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')
var btn4 = document.getElementById('btn4')
var btn5 = document.getElementById('btn5')
var btn6 = document.getElementById('btn6')
var btn7 = document.getElementById('btn7')
var btn8 = document.getElementById('btn8')
var btn9 = document.getElementById('btn9')

var clearButton = document.querySelector('.clrBtn')


 
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

function saveInfo1(e) {
    e.preventDefault()

    localStorage.setItem('info1', textArea1.value)
}

function saveInfo2(e) {
    e.preventDefault()

    localStorage.setItem('info2', textArea2.value)
}

function saveInfo3(e) {
    e.preventDefault()

    localStorage.setItem('info3', textArea3.value)
}

function saveInfo4(e) {
    e.preventDefault()

    localStorage.setItem('info4', textArea4.value)
}

function saveInfo5(e) {
    e.preventDefault()

    localStorage.setItem('info5', textArea5.value)
}

function saveInfo6(e) {
    e.preventDefault()

    localStorage.setItem('info6', textArea6.value)
}

function saveInfo7(e) {
    e.preventDefault()

    localStorage.setItem('info7', textArea7.value)
}

function saveInfo8(e) {
    e.preventDefault()

    localStorage.setItem('info8', textArea8.value)
}

function saveInfo9(e) {
    e.preventDefault()

    localStorage.setItem('info9', textArea9.value)
}



function returnSaved() {
    var info1 = localStorage.getItem('info1')
    var info2 = localStorage.getItem('info2')
    var info3 = localStorage.getItem('info3')
    var info4 = localStorage.getItem('info4')
    var info5 = localStorage.getItem('info5')
    var info6 = localStorage.getItem('info6')
    var info7 = localStorage.getItem('info7')
    var info8 = localStorage.getItem('info8')
    var info9 = localStorage.getItem('info9')


    textArea1.textContent = info1
    textArea2.textContent = info2
    textArea3.textContent = info3
    textArea4.textContent = info4
    textArea5.textContent = info5
    textArea6.textContent = info6
    textArea7.textContent = info7
    textArea8.textContent = info8
    textArea9.textContent = info9
}

returnSaved()




setColor1()
setColor2()
setColor3()
setColor4()
setColor5()
setColor6()
setColor7()
setColor8()
setColor9()


// events

btn1.addEventListener('click', saveInfo1)
btn2.addEventListener('click', saveInfo2)
btn3.addEventListener('click', saveInfo3)
btn4.addEventListener('click', saveInfo4)
btn5.addEventListener('click', saveInfo5)
btn6.addEventListener('click', saveInfo6)
btn7.addEventListener('click', saveInfo7)
btn8.addEventListener('click', saveInfo8)
btn9.addEventListener('click', saveInfo9)


clearButton.addEventListener('click', function() {
    localStorage.clear()

    textArea1.textContent = ''
    textArea2.textContent = ''
    textArea3.textContent = ''
    textArea4.textContent = ''
    textArea5.textContent = ''
    textArea6.textContent = ''
    textArea7.textContent = ''
    textArea8.textContent = ''
    textArea9.textContent = ''
})