$(document).ready(function() {
    let paragraph;
    let icon;
    let source;
    $.ajax({
        url: 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams',
        method: 'GET'
    }).then(
        function(response) {
            console.log(response);
            for (let i = 0; i < response.sports[0].leagues[0].teams.length; i++) {
                paragraph = $('<h1>').text(response.sports[0].leagues[0].teams[i].team.displayName);
                $('#teams').append(paragraph);
                source = response.sports[0].leagues[0].teams[i].team.logos[0].href;
                icon = $('<img>').attr('src', source);
                $('#teams').append(icon);
            }
        }
    )
})