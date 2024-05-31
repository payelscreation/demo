// $("h1").css("color","red");

 $("h1").addClass("big-title");
$("button").css("color","blue");
$("p").css("color","red");
$("div").css("color","red");
// $("div").css("background-color","lightblue");
// $("h2").css("color","blue");
$("button").css("border","blue");
$("h2").text("Bye");
$("button").text("Don't Click Me");

$("button").html("<em>Hey</em>");
$("a").attr("href","https://www.yahoo.com");
$("a").text("yahoo");

$("h1").click(function(){
    $("h1").css("color","purple");
});

$("input").keypress(function(event){
    console.log(event.key);
});

$(document).keypress(function(event){
   $("h1").text(event.key);
});

$("h3").addClass("big-title");
$("h3").click(function(){
    $("h3").css("color","blue");
});
$(document).keypress(function(event){
    $("h3").text(event.key);
 });
$("h3").text("madhav");
$("h3'").text("govind");
$("h3").on("mouseover",function(){
    $("h3").css("color","purple");
});
$("h3").before("<button>New</button>");
$("h3").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");
$("button").on("click",function(){
    $("h1").hide();
});
$("button").on("click",function(){
    $("h1").slideToggle();
});
$("button").on("click",function(){
    $("h1").animation({opacity:0.5});
});

$("button").on("click",function(){
    $("h1").animation({margin:20});
});

$("button").on("click",function(){
    $("h1").slideUp().slideDow().animation({opacity:0.5});
});
$("h3'").text("govind");



// $("button");