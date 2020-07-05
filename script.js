$(document).ready(function(){
    $(".links").hover(function(){
        $(this).css("font-size", "1.5em");
    }, function(){
        $(this).css("font-size", "1em");
    });
});
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let gitObject = JSON.parse(this.responseText);
        $("#ghrepos").html("<strong>" + gitObject[0].full_name + ": " + "</strong>" + "<a href=\"" + gitObject[0].svn_url + "\">" + gitObject[0].svn_url + "</a>");
        
    }
};
xhttp.open("GET", "https://api.github.com/users/hunter09888/repos", true);
xhttp.send();

