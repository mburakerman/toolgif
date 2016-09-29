/* Toolgif | https://mburakerman.github.io/toolgif/ | @mburakerman | License: MIT */
(function() {
$.fn.toolgif = function( options ) {

//Default settings
var settings = $.extend({
width:200,
height:100,
speed:200,
borderRadius:5,
textColor:"initial",
gifChange:true
}, options );

return  this.each( function() {
if ( $( this ).data( 'toolgif' ) ){
return false;
}
$( this ).data( 'toolgif', true );

var span=$(this);
//Create an img
var $img = $("<img>" , {class: "toolgif-gif"});
$(this).append($img);

//Create an arrow
var $arrow=$("<i>",{class:"arrow"});
$(this).append($arrow);
//Arrow css
$arrow.css("position","absolute");
$arrow.css("width",0);
$arrow.css("height",0);
$arrow.css("left","50%");
$arrow.css("margin-left",-4);

//Span css
span.css("color",settings.textColor)
span.css("position","relative");
span.css("top",0);
span.css("left",0);

//Img css
$img.css("width",settings.width);
$img.css("marginLeft",-settings.width/2);

$img.css("height",settings.height);

$img.css("position","absolute");
$img.css("left","50%");

$img.css("z-index",9999999);
$img.css("border-radius",settings.borderRadius);

//Check data-place
if($.trim($(this).attr('data-place')) === "bottom") {
$img.css("bottom",-settings.height-2);

$arrow.css("bottom",-2);
$arrow.css("border-left","4px solid transparent");
$arrow.css("border-right","4px solid transparent");
$arrow.css("border-bottom","4px solid");
}else {
$img.css("top",-settings.height-2);

$arrow.css("top",-2);
$arrow.css("border-left","4px solid transparent");
$arrow.css("border-right","4px solid transparent ");
$arrow.css("border-top","4px solid");
}

var toolgifText= $(this).text();
//Replace spaces with + sign
toolgifText = toolgifText.split(' ').join('+');

//Giphy api
var host = "https://api.giphy.com";
var path = "/v1/gifs/random?";
var api_key = "&api_key=dc6zaTOxFJmzC";
var query = "&q=";
var tag = "&tag=";

//Check data-tag
if($.trim($(this).attr('data-tag'))) {
var dataTag= $(this).attr("data-tag");
dataTag=dataTag.split(' ').join('+');
var url = host + path + api_key + tag + dataTag;	
}else {
var url = host + path + api_key + tag + toolgifText;
}

//Check data-url
if($.trim($(this).attr("data-url"))) {
var dataUrl= $(this).attr("data-url");
dataUrl=dataUrl.split(' ').join('+');
$.getJSON(url, function(mydata) {
$($img).attr("src",dataUrl);
});
}else {
function refreshUrl() { 
$.getJSON(url, function(mydata) {
$($img).attr("src",mydata.data.image_url);
});
}
refreshUrl();
}

//Hide arrow and gif
$arrow.hide();
$img.hide();

//Hover
span.hover(

function () {
$img.stop(true).fadeIn(settings.speed);
$arrow.stop(true).fadeIn(settings.speed);
}, 

function () {
if(settings.gifChange === false) {
$img.stop(true).fadeOut(settings.speed);
$arrow.stop(true).fadeOut(settings.speed);
}else {
$img.stop(true).fadeOut(settings.speed);
$arrow.stop(true).fadeOut(settings.speed);
refreshUrl();
}
}

);

});
};
})(jQuery);


