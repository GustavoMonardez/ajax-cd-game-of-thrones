function getHouseId(house){
    var house_id = "";
    switch(house){
        case "stark":
            house_id = "362";
            break;
        case "targaryen":
            house_id = "378";
            break;
        case "lannister":
            house_id = "229";
            break;
        case "baratheon":
            house_id = "17";
            break;
    }
    return house_id;
}
$(document).ready(function(){
    $("img").click(function(){
        var house =  getHouseId($(this).attr("alt"));
        var url = "https://anapioficeandfire.com/api/houses/"+house+"/";
        var html_string = "<div><h2>House Details</h2>";
        var name ="<p>Name: ";
        var words = "<p>Words: ";
        var all_titles = "<p id='titles'>Titles: ";

        $.get(url,function(res){
            name += res.name + "</p>";
            words += res.words + "</p>";
            for(var i = 0; i < res.titles.length-1; i++) {
                var title = res.titles[i]+", ";
                all_titles+= title;
            }
            all_titles += "</p>";
            html_string += name + words + all_titles + "</div>";
            $(".content").html(html_string);
        });
    });
});