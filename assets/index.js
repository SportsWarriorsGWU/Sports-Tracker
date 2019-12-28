$(document).ready(function() {
    let newID;
    $('.tile-images').mouseover(function() {
        newID = $(this)[0].id;
        console.log(newID);
    })

    $(window).on('unload', function() {
        localStorage.setItem('newIDToLoad', JSON.stringify(newID));
    })
})