$(document).ready(function() {
    let leagueToLoad;
    let paragraph;
    let icon;
    let source;
    let ID;
    let link;
    let newID;
    let leagueID;
    const init = () => {
        leagueToLoad = JSON.parse(localStorage.getItem('newIDToLoad'));
        if (leagueToLoad === null) {
            console.log('Error');
        } else if (leagueToLoad === 'MLB' || leagueToLoad === 'MLB1') {
            $.ajax({
                url: 'https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams',
                method: 'GET'
            }).then(
                function(response) {
                    console.log(response);
                    for (let i = 0; i < response.sports[0].leagues[0].teams.length; i++) {
                        paragraph = $('<p>').text(response.sports[0].leagues[0].teams[i].team.displayName);
                        paragraph.attr('class', 'col-sm-2');
                        source = response.sports[0].leagues[0].teams[i].team.logos[0].href;
                        ID = response.sports[0].leagues[0].teams[i].team.id;
                        icon = $('<img>').attr('src', source);
                        icon.attr('class', 'team-images');
                        icon.attr('id', ID);
                        link = $('<a>').attr('href', 'stats.html');
                        $(link).append(icon);
                        $(paragraph).append(link);
                        $('#teams').append(paragraph);
                    }
                }
            )
        } else if (leagueToLoad === 'NBA' || leagueToLoad === 'NBA1') {
            $.ajax({
                url: 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams',
                method: 'GET'
            }).then(
                function(response) {
                    console.log(response);
                    for (let i = 0; i < response.sports[0].leagues[0].teams.length; i++) {
                        paragraph = $('<p>').text(response.sports[0].leagues[0].teams[i].team.displayName);
                        paragraph.attr('class', 'col-sm-2');
                        source = response.sports[0].leagues[0].teams[i].team.logos[0].href;
                        ID = response.sports[0].leagues[0].teams[i].team.id;
                        icon = $('<img>').attr('src', source);
                        icon.attr('class', 'team-images');
                        icon.attr('id', ID);
                        link = $('<a>').attr('href', 'stats.html');
                        $(link).append(icon);
                        $(paragraph).append(link);
                        $('#teams').append(paragraph);
                    }
                }
            )
        } else if (leagueToLoad === 'NFL' || leagueToLoad === 'NFL1') {
            $.ajax({
                url: 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams',
                method: 'GET'
            }).then(
                function(response) {
                    console.log(response);
                    for (let i = 0; i < response.sports[0].leagues[0].teams.length; i++) {
                        paragraph = $('<p>').text(response.sports[0].leagues[0].teams[i].team.displayName);
                        paragraph.attr('class', 'col-sm-2');
                        source = response.sports[0].leagues[0].teams[i].team.logos[0].href;
                        ID = response.sports[0].leagues[0].teams[i].team.id;
                        icon = $('<img>').attr('src', source);
                        icon.attr('class', 'team-images');
                        icon.attr('id', ID);
                        link = $('<a>').attr('href', 'stats.html');
                        $(link).append(icon);
                        $(paragraph).append(link);
                        $('#teams').append(paragraph);
                    }
                }
            )
        } else if (leagueToLoad === 'NHL' || leagueToLoad === 'NHL1') {
            $.ajax({
                url: 'https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams',
                method: 'GET'
            }).then(
                function(response) {
                    console.log(response);
                    for (let i = 0; i < response.sports[0].leagues[0].teams.length; i++) {
                        paragraph = $('<p>').text(response.sports[0].leagues[0].teams[i].team.displayName);
                        paragraph.attr('class', 'col-sm-2');
                        source = response.sports[0].leagues[0].teams[i].team.logos[0].href;
                        ID = response.sports[0].leagues[0].teams[i].team.id;
                        icon = $('<img>').attr('src', source);
                        icon.attr('class', 'team-images');
                        icon.attr('id', ID);
                        link = $('<a>').attr('href', 'stats.html');
                        $(link).append(icon);
                        $(paragraph).append(link);
                        $('#teams').append(paragraph);
                    }
                }
            )
        }
    }

    init();

    $('#teams').on('mouseover', '.team-images', '.col-sm-2', function() {
        console.log($(this));
        newID = $(this)[0].id;
        console.log(newID);
    })

    $('.tile-images').mouseover(function() {
        leagueID = $(this)[0].id;
        console.log(leagueID);
    })

    $('.tile-images').mouseout(function() {
        leagueID = '';
        console.log(leagueID);
    })

    $(window).on('unload', function() {
        if (newID !== undefined) {
            localStorage.setItem('teamIDToLoad', JSON.stringify(newID));
        }
        if (leagueID !== undefined && leagueID !== '') {
            localStorage.setItem('newIDToLoad', JSON.stringify(leagueID));
        }
    })
})