var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
var currentDayEl = document.getElementById("currentDay");
currentDayEl.innerHTML = rightNow;

var rightNowHour = moment().format('HH');
rightNowHour = parseInt(rightNowHour);

var timeBlockColor;
var i=8;
for (var i =8; i < 18; i++) {
    if (i < rightNowHour) {
    timeBlockColor="past";
    // document.querySelector(i).innerHTML = "past"
    console.log(timeBlockColor);
    }else if (i === rightNowHour) {
        timeBlockColor="present";
        console.log(timeBlockColor);
        }else if (i > rightNowHour) {
            timeBlockColor="future";
            console.log(timeBlockColor);
        }
}
console.log(rightNowHour);

// Local Storage Set and Load Section

// var tasks = [];
// var timeBlockEl=document.getElementById("8");
