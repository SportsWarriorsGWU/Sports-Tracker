$(document).ready(function() {
    let league;
    let teamToLoad;
    let paragraph;
    let newParagraph = '';
    let image;
    let leagueID;
    const init = () => {
        league = JSON.parse(localStorage.getItem('newIDToLoad'));
        teamToLoad = JSON.parse(localStorage.getItem('teamIDToLoad'));
        if (teamToLoad === null) {
            console.log('Error');
        } else if (league === 'MLB' || league === 'MLB1') {
            $.ajax({
                url: `https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/${teamToLoad}`,
                method: 'GET'
            }).then(
                function(response) {
                    console.log(response);
                    paragraph = $('<h3>').text(response.team.displayName);
                    $('#team-display-name').append(paragraph);
                    image = $('<img>').attr('src', response.team.logos[0].href);
                    $('#team-display-logo').append(image);
                    image = $('<i>').attr('class', 'far fa-star unfavorited');
                    $('#team-display-logo').append(image);
                    paragraph = $('<p>').text(response.team.record.items[0].stats[1].value);
                    $('#wins').append(paragraph);
                    paragraph = $('<p>').text(response.team.record.items[0].stats[2].value);
                    $('#losses').append(paragraph);
                    paragraph = $('<p>').text(response.team.record.items[0].stats[5].value);
                    $('#ties').append(paragraph);
                    paragraph = $('<p>').text(response.team.record.items[0].summary);
                    $('#record').append(paragraph);
                    paragraph = $('<p>').text(response.team.nextEvent[0].name);
                    $('#next-game').append(paragraph);
                    paragraph = $('<p>').text(response.team.nextEvent[0].shortName);
                    $('#next-game').append(paragraph);
                    paragraph = response.team.nextEvent[0].date;
                    for (let i = 0; i < paragraph.length; i++) {
                        if (i === 9) {
                            newParagraph += paragraph[i];
                            newParagraph += ' ';
                        } else if (paragraph[i] !== 'T' && paragraph[i] !== 'Z') {
                            newParagraph += paragraph[i];
                        }
                    }
                    paragraph = $('<p>').text(newParagraph)
                    $('#next-game').append(paragraph);
                }
            )
        } else if (league === 'NBA' || league === 'NBA1') {
            $.ajax({
                url: `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${teamToLoad}`,
                method: 'GET'
            }).then(
                function(response) {
                    console.log(response);
                    paragraph = $('<h3>').text(response.team.displayName);
                    $('#team-display-name').append(paragraph);
                    image = $('<img>').attr('src', response.team.logos[0].href);
                    $('#team-display-logo').append(image);
                    image = $('<i>').attr('class', 'far fa-star unfavorited');
                    $('#team-display-logo').append(image);
                    paragraph = $('<p>').text(response.team.record.items[0].stats[1].value);
                    $('#wins').append(paragraph);
                    paragraph = $('<p>').text(response.team.record.items[0].stats[2].value);
                    $('#losses').append(paragraph);
                    paragraph = $('<p>').text(response.team.record.items[0].stats[5].value);
                    $('#ties').append(paragraph);
                    paragraph = $('<p>').text(response.team.record.items[0].summary);
                    $('#record').append(paragraph);
                    paragraph = $('<p>').text(response.team.nextEvent[0].name);
                    $('#next-game').append(paragraph);
                    paragraph = $('<p>').text(response.team.nextEvent[0].shortName);
                    $('#next-game').append(paragraph);
                    paragraph = response.team.nextEvent[0].date;
                    for (let i = 0; i < paragraph.length; i++) {
                        if (i === 9) {
                            newParagraph += paragraph[i];
                            newParagraph += ' ';
                        } else if (paragraph[i] !== 'T' && paragraph[i] !== 'Z') {
                            newParagraph += paragraph[i];
                        }
                    }
                    paragraph = $('<p>').text(newParagraph)
                    $('#next-game').append(paragraph);
                }
            )
        } else if (league === 'NFL' || league === 'NFL1') {
            $.ajax({
                url: `https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${teamToLoad}`,
                method: 'GET'
            }).then(
                function(response) {
                    console.log(response);
                    paragraph = $('<h3>').text(response.team.displayName);
                    $('#team-display-name').append(paragraph);
                    image = $('<img>').attr('src', response.team.logos[0].href);
                    $('#team-display-logo').append(image);
                    image = $('<i>').attr('class', 'far fa-star unfavorited');
                    $('#team-display-logo').append(image);
                    paragraph = $('<p>').text(response.team.record.items[0].stats[1].value);
                    $('#wins').append(paragraph);
                    paragraph = $('<p>').text(response.team.record.items[0].stats[2].value);
                    $('#losses').append(paragraph);
                    paragraph = $('<p>').text(response.team.record.items[0].stats[5].value);
                    $('#ties').append(paragraph);
                    paragraph = $('<p>').text(response.team.record.items[0].summary);
                    $('#record').append(paragraph);
                    paragraph = $('<p>').text(response.team.nextEvent[0].name);
                    $('#next-game').append(paragraph);
                    paragraph = $('<p>').text(response.team.nextEvent[0].shortName);
                    $('#next-game').append(paragraph);
                    paragraph = response.team.nextEvent[0].date;
                    for (let i = 0; i < paragraph.length; i++) {
                        if (i === 9) {
                            newParagraph += paragraph[i];
                            newParagraph += ' ';
                        } else if (paragraph[i] !== 'T' && paragraph[i] !== 'Z') {
                            newParagraph += paragraph[i];
                        }
                    }
                    paragraph = $('<p>').text(newParagraph)
                    $('#next-game').append(paragraph);
                }
            )
        } else if (league === 'NHL' || league === 'NHL1') {
            $.ajax({
                url: `https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/${teamToLoad}`,
                method: 'GET'
            }).then(
                function(response) {
                    console.log(response);
                    paragraph = $('<h3>').text(response.team.displayName);
                    $('#team-display-name').append(paragraph);
                    image = $('<img>').attr('src', response.team.logos[0].href);
                    $('#team-display-logo').append(image);
                    image = $('<i>').attr('class', 'far fa-star unfavorited');
                    $('#team-display-logo').append(image);
                    paragraph = $('<p>').text(response.team.record.items[0].stats[1].value);
                    $('#wins').append(paragraph);
                    paragraph = $('<p>').text(response.team.record.items[0].stats[2].value);
                    $('#losses').append(paragraph);
                    paragraph = $('<p>').text(response.team.record.items[0].stats[5].value);
                    $('#ties').append(paragraph);
                    paragraph = $('<p>').text(response.team.record.items[0].summary);
                    $('#record').append(paragraph);
                    paragraph = $('<p>').text(response.team.nextEvent[0].name);
                    $('#next-game').append(paragraph);
                    paragraph = $('<p>').text(response.team.nextEvent[0].shortName);
                    $('#next-game').append(paragraph);
                    paragraph = response.team.nextEvent[0].date;
                    for (let i = 0; i < paragraph.length; i++) {
                        if (i === 9) {
                            newParagraph += paragraph[i];
                            newParagraph += ' ';
                        } else if (paragraph[i] !== 'T' && paragraph[i] !== 'Z') {
                            newParagraph += paragraph[i];
                        }
                    }
                    paragraph = $('<p>').text(newParagraph)
                    $('#next-game').append(paragraph);
                }
            )
        }
    }

    init();

    $('.tile-images').mouseover(function() {
        leagueID = $(this)[0].id;
        console.log(leagueID);
    })

    $('.tile-images').mouseout(function() {
        leagueID = '';
        console.log(leagueID);
    })

    $(window).on('unload', function() {
        if (leagueID !== undefined && leagueID !== '') {
            localStorage.setItem('newIDToLoad', JSON.stringify(leagueID));
        }
    })

    $('#team-display-logo').click(function() {
        if ($(this).find('svg')[0].classList.contains('unfavorited') === true) {
            $(this).find('svg').removeClass('far fa-star unfavorited');
            $(this).find('svg').addClass('fas fa-star favorited');
        } else if ($(this).find('svg')[0].classList.contains('favorited') === true) {
            $(this).find('svg').removeClass('fas fa-star favorited');
            $(this).find('svg').addClass('far fa-star unfavorited');
        }
    })
})