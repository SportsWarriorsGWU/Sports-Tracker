$(document).ready(function() {
    let newID;
    let MLBFave;
    let NBAFave;
    let NFLFave;
    let NHLFave;
    let newAnchor;
    let newImage;
    let league;
    let team;

    const init = () => {
        MLBFave = JSON.parse(localStorage.getItem('MLBFave'));
        if (MLBFave === null || MLBFave === false) {
            return;
        } else {
            $.ajax({
                url: 'https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams',
                method: 'GET'
            }).then(
                function(response) {
                    newAnchor = $('<a>').attr('href', 'stats.html');
                    newAnchor.attr('class', 'MLB');
                    newImage = $('<img>').attr('id', MLBFave);
                    newImage.attr('class', 'tile-images');
                    for (let i = 0; i < response.sports[0].leagues[0].teams.length; i++) {
                        if (response.sports[0].leagues[0].teams[i].team.id === MLBFave) {
                            source = response.sports[0].leagues[0].teams[i].team.logos[0].href;
                        }
                    }
                    newImage.attr('src', source);
                    newAnchor.append(newImage);
                    $('#MLBTeam').append(newAnchor);
                }
            )
        }

        NBAFave = JSON.parse(localStorage.getItem('NBAFave'));
        if (NBAFave === null || NBAFave === false) {
            return;
        } else {
            $.ajax({
                url: 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams',
                method: 'GET'
            }).then(
                function(response) {
                    newAnchor = $('<a>').attr('href', 'stats.html');
                    newAnchor.attr('class', 'NBA');
                    newImage = $('<img>').attr('id', NBAFave);
                    newImage.attr('class', 'tile-images');
                    for (let i = 0; i < response.sports[0].leagues[0].teams.length; i++) {
                        if (response.sports[0].leagues[0].teams[i].team.id === NBAFave) {
                            source = response.sports[0].leagues[0].teams[i].team.logos[0].href;
                        }
                    }
                    newImage.attr('src', source);
                    newAnchor.append(newImage);
                    $('#NBATeam').append(newAnchor);
                }
            )
        }

        NFLFave = JSON.parse(localStorage.getItem('NFLFave'));
        if (NFLFave === null || NFLFave === false) {
            return;
        } else {
            $.ajax({
                url: 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams',
                method: 'GET'
            }).then(
                function(response) {
                    newAnchor = $('<a>').attr('href', 'stats.html');
                    newAnchor.attr('class', 'NFL');
                    newImage = $('<img>').attr('id', NFLFave);
                    newImage.attr('class', 'tile-images');
                    for (let i = 0; i < response.sports[0].leagues[0].teams.length; i++) {
                        if (response.sports[0].leagues[0].teams[i].team.id === NFLFave) {
                            source = response.sports[0].leagues[0].teams[i].team.logos[0].href;
                        }
                    }
                    newImage.attr('src', source);
                    newAnchor.append(newImage);
                    $('#NFLTeam').append(newAnchor);
                }
            )
        }

        NHLFave = JSON.parse(localStorage.getItem('NHLFave'));
        if (NHLFave === null || NHLFave === false) {
            return;
        } else {
            $.ajax({
                url: 'https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams',
                method: 'GET'
            }).then(
                function(response) {
                    newAnchor = $('<a>').attr('href', 'stats.html');
                    newAnchor.attr('class', 'NHL');
                    newImage = $('<img>').attr('id', NHLFave);
                    newImage.attr('class', 'tile-images');
                    for (let i = 0; i < response.sports[0].leagues[0].teams.length; i++) {
                        if (response.sports[0].leagues[0].teams[i].team.id === NHLFave) {
                            source = response.sports[0].leagues[0].teams[i].team.logos[0].href;
                        }
                    }
                    newImage.attr('src', source);
                    newAnchor.append(newImage);
                    $('#NHLTeam').append(newAnchor);
                }
            )
        }
    }

    init();

    $('.tile-images').mouseover(function() {
        newID = $(this)[0].id;
    })

    $('.tile-images').mouseout(function() {
        newID = '';
    })

    $('#MLBTeam').mouseover(function() {
        league = 'MLB';
        team = $(this).find('img').attr('id');
    })

    $('#NBATeam').mouseover(function() {
        league = 'NBA';
        team = $(this).find('img').attr('id');
    })

    $('#NFLTeam').mouseover(function() {
        league = 'NFL';
        team = $(this).find('img').attr('id');
    })

    $('#NHLTeam').mouseover(function() {
        league = 'NHL';
        team = $(this).find('img').attr('id');
    })

    $('#MLBTeam').mouseout(function() {
        league = '';
        team = '';
    })

    $('#NBATeam').mouseout(function() {
        league = '';
        team = '';
    })

    $('#NFLTeam').mouseout(function() {
        league = '';
        team = '';
    })

    $('#NHLTeam').mouseout(function() {
        league = '';
        team = '';
    })

    $(window).on('unload', function() {
        if (newID !== '' && newID !== undefined && newID !== null) {
            localStorage.setItem('newIDToLoad', JSON.stringify(newID));
        } else {
            localStorage.setItem('newIDToLoad', JSON.stringify(league));
            localStorage.setItem('teamIDToLoad', JSON.stringify(team));
        }
    })
})