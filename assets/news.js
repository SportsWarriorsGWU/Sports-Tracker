        var queryURL = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=6d607add9f0d4daaa5c83e7c41ca3cd8"
        let storyRow;
        let mediaBody;
        let title;
        let description;
        let thumbNail;
        let newsLink;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(queryURL);
            console.log(response);
            for (let i = 0; i < response.articles.length; i++) {

                storyRow = $("<li>")
                storyRow.attr("class", "media")

                thumbNail = $("<img>").attr("src", response.articles[i].urlToImage);
                thumbNail.attr("class", "mr-3");
         

                mediaBody = $("<div>")
                mediaBody.attr("class", "media-body");

                title = $("<h5>").text(response.articles[i].title);
                title.attr("class", "media-body", "mt-0", "mb-3", "font-weight-bold");


                description = $("<p>").text(response.articles[i].description);
                description.attr("class", "media-body", "mt-3", "mb-1");

                newsLink = $("<a>").text(response.articles[i].url);
                newsLink.attr("href", response.articles[i].url);
                newsLink.attr("class", "media-body btn btn-dark", "mt-1", "mb-1").text('Read/Watch News');

                $(mediaBody).append(title, description, newsLink);
                $(storyRow).append(thumbNail, mediaBody);
                $(".news-list").append(storyRow);

            }
        });

        $('.tile-images').mouseover(function() {
            leagueID = $(this)[0].id;
            console.log(leagueID);
        });
    
        $('.tile-images').mouseout(function() {
            leagueID = '';
            console.log(leagueID);
        });
    
        $(window).on('unload', function() {
            if (leagueID !== undefined && leagueID !== '') {
                localStorage.setItem('newIDToLoad', JSON.stringify(leagueID));
            }
        });
