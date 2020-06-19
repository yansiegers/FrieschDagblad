const days = ['zondag', 'maandag', 'dinsday', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

var today = new Date();
var weekday = days[today.getDay()];
var day = today.getDate();
var month = today.getMonth() + 1;
var month_text = months[month];
var year = today.getFullYear();

var today_text = weekday + ' ' + day + ' ' + month_text + ' ' + year;
var today_datetime = year + '-' + month + '-' + day;

paperDate = document.getElementById("paper-date");
paperDate.innerHTML = today_text;
paperDate.dateTime = today_datetime;