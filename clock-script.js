document.getElementById('timeBtn').addEventListener('click', function() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var period = '';
	
// Need to fix the AM/PM feature below
    if (hours >= 12) {
        period = 'PM';
    } else {
        period = 'AM';
    }

    if (hours == 0) {
        hours = 12;
    } else {
        if (hours > 12) {
            hours = hours - 12;
        }
    }
    
	var timeString = hours + ':' + minutes + '.' + seconds + ' ';
    document.getElementById('time').innerHTML = 'The current time is: ' + timeString;
});