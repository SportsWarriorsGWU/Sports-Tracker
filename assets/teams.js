$(document).ready(function() {
    let leagueToLoad;
    let paragraph;
    let icon;
    let source;
    let ID;
    let link;
    let newID;
    const init = () => {
        leagueToLoad = JSON.parse(localStorage.getItem('newIDToLoad'));
        if(leagueToLoad === null) {
            console.log('Error');
        } else if(leagueToLoad === 'MLB') {
            $.ajax({
                url: 'https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams',
                method: 'GET'
            }).then(
                function(response) {
                    console.log(response);
                    for (let i = 0; i < response.sports[0].leagues[0].teams.length; i++) {
                        paragraph = $('<h1>').text(response.sports[0].leagues[0].teams[i].team.displayName);
                        $('#teams').append(paragraph);
                        source = response.sports[0].leagues[0].teams[i].team.logos[0].href;
                        ID = response.sports[0].leagues[0].teams[i].team.location;
                        icon = $('<img>').attr('src', source);
                        icon.attr('class', 'team-images');
                        icon.attr('id', ID);
                        link = $('<a>').attr('href', 'stats.html');
                        $(link).append(icon);
                        $('#teams').append(link);
                    }
                }
            )
        } else if (leagueToLoad === 'NBA') {
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
                        ID = response.sports[0].leagues[0].teams[i].team.location;
                        icon = $('<img>').attr('src', source);
                        icon.attr('class', 'team-images');
                        icon.attr('id', ID);
                        link = $('<a>').attr('href', 'stats.html');
                        $(link).append(icon);
                        $('#teams').append(link);
                    }
                }
            )
        } else if (leagueToLoad === 'NFL') {
            $.ajax({
                url: 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams',
                method: 'GET'
            }).then(
                function(response) {
                    console.log(response);
                    for (let i = 0; i < response.sports[0].leagues[0].teams.length; i++) {
                        paragraph = $('<h1>').text(response.sports[0].leagues[0].teams[i].team.displayName);
                        $('#teams').append(paragraph);
                        source = response.sports[0].leagues[0].teams[i].team.logos[0].href;
                        ID = response.sports[0].leagues[0].teams[i].team.location;
                        icon = $('<img>').attr('src', source);
                        icon.attr('class', 'team-images');
                        icon.attr('id', ID);
                        link = $('<a>').attr('href', 'stats.html');
                        $(link).append(icon);
                        $('#teams').append(link);
                    }
                }
            )
        } else if (leagueToLoad === 'NHL') {
            $.ajax({
                url: 'https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams',
                method: 'GET'
            }).then(
                function(response) {
                    console.log(response);
                    for (let i = 0; i < response.sports[0].leagues[0].teams.length; i++) {
                        paragraph = $('<h1>').text(response.sports[0].leagues[0].teams[i].team.displayName);
                        $('#teams').append(paragraph);
                        source = response.sports[0].leagues[0].teams[i].team.logos[0].href;
                        ID = response.sports[0].leagues[0].teams[i].team.location;
                        icon = $('<img>').attr('src', source);
                        icon.attr('class', 'team-images');
                        icon.attr('id', ID);
                        link = $('<a>').attr('href', 'stats.html');
                        $(link).append(icon);
                        $('#teams').append(link);
                    }
                }
            )
        }
    }

    init();

    $('#teams').on('mouseover', '.team-images', function() {
        console.log($(this));
        newID = $(this)[0].id;
        console.log(newID);
    })

    $(window).on('unload', function() {
        localStorage.setItem('teamIDToLoad', JSON.stringify(newID));
    })
})