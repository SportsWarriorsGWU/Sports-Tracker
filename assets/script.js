$(document).ready(function() {
    $.ajax({
        url: 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams',
        method: 'GET'
    }).then(
        function(response) {
            console.log(response);
        }
    )
})