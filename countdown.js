var countDownDate = new Date('2017-03-01');

function displayCountDown(displayDiv) {
    setInterval(function () {
        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in an element with id="demo"
        displayDiv.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance<0){
            return;
        }
    }, 1000);
}