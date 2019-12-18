$(document).ready(function() {
    $.ajax({
        url: 'https://fantasysports.yahooapis.com/fantasy/v2/game/',
        method: 'GET'
    }),then(
        function(response) {
            console.log(response);
        }
    )
})