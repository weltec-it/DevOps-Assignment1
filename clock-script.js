document.getElementById('timeBtn').addEventListener('click', function() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('time').innerHTML = 'Current Time: ' + timeString;
});