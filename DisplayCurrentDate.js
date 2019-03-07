// Write a JavaScript program to display the current day and time 
var today = new Date()

var day = today.getDay()
let hours = today.getHours()
if(hours>12){
    let hours = String(hours) + " PM"
}else{
    let hours = String(hours) + " AM"
}
let time = hours + ":" + today.getMinutes() + ":" + today.getSeconds();

days = ["Sunday", "Monday", "Tuesday", "Wednesday", 'Thursday', 'Friday', "Saturday"]
console.log('Today is ', days[day] + ' and the time is ', time)