$(document).ready( function (){
    // making what you said and what the computer said the same thing

    // $("#hello").click( function(){
    //     $("ul").append("<li>HELLO </li>")
    // });

    // $("#goodbye").click( function(){
    //     $("ul").append("<li>GOODBYE</li>")
    // });

    // $("#stop").click( function(){
    //     $("ul").append("<li>stop copying me</li>")
    // });


    // making what you said different from what the computer is saying; first give your ul's different id's

    $("#hello").click( function(){
        $("ul#user").prepend("<li>HELLO </li>");
        $("ul#web").prepend("<li>Why hello there?</li>");

        // making our text delete when we click on the text for user
        $("#user").children("li").first().click(function() {
            $(this).remove();
        });
        
        // for the web too, making it delete
        $("#web").children("li").first().click( function(){
            $(this).remove();
        });
    });

    $("#goodbye").click( function(){
        $("ul#user").prepend("<li>GOODBYE</li>");
        $("ul#web").prepend("<li>Goodbye dear User</li>");

        // making our goodbye text delete when we click on the text for user
        $("#user").children("li").first().click(function() {
            $(this).remove();
        });
        
        // for the web too, making it delete
        $("#web").children("li").first().click( function(){
            $(this).remove();
        });
    });

    $("#stop").click( function(){
        $("ul#user").prepend("<li>stop copying me</li>");
        $("ul#web").prepend("<li>Sorry I meant no offense</li>");

        // making our stop copying me text delete when we click on the text for user
        $("#user").children("li").first().click(function() {
            $(this).remove();
        });
        
        // for the web too, making it delete
        $("#web").children("li").first().click( function(){
            $(this).remove();
        });
    });
});