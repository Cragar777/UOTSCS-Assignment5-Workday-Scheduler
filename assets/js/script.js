var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
var currentDayEl = document.getElementById("currentDay");
currentDayEl.innerHTML = rightNow;

var rightNowHour = moment().format('HH');
rightNowHour = 14;
// rightNowHour = parseInt(rightNowHour);

// var timeBlockColor;
// var i=8;
// for (;i<18;) {
//     if (i<rightNowHour) {
//     timeBlockColor="past";
//     console.log(timeBlockColor);
//     }else if (i=rightNowHour) {
//         timeBlockColor="present";
//         console.log(timeBlockColor);
//         }else if (i>rightNowHour) {
//             timeBlockColor="future";
//             console.log(timeBlockColor);
//         }
// i++;
// }
// console.log(rightNowHour);
// console.log(timeBlockColor);