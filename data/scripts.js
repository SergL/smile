// JavaScript Document

/**********************************************************************************/

jQuery(function($) {
$.mask.definitions['~']='[+-]';
$('#pha, #phb, #phc').mask('+38 (999) 999-99-99')
});

/**********************************************************************************/

$(function(){
		   
$(".header_product_blue, .header_product_button_blue").hover(
function () {$(".header_product_button_blue").stop().animate({ top: "364px" }, 500);},
function () {$(".header_product_button_blue").stop().animate({ top: "269px" }, 500);}
);

$(".header_product_orange, .header_product_button_orange").hover(
function () {$(".header_product_button_orange").stop().animate({ top: "364px" }, 500);},
function () {$(".header_product_button_orange").stop().animate({ top: "269px" }, 500);}
);

$(".header_product_yellow, .header_product_button_yellow").hover(
function () {$(".header_product_button_yellow").stop().animate({ top: "364px" }, 500);},
function () {$(".header_product_button_yellow").stop().animate({ top: "269px" }, 500);}
);

$(".header_product_bluet, .header_product_button_bluet").hover(
function () {$(".header_product_button_bluet").stop().animate({ top: "364px" }, 500);},
function () {$(".header_product_button_bluet").stop().animate({ top: "269px" }, 500);}
);

$(".header_product_green, .header_product_button_green").hover(
function () {$(".header_product_button_green").stop().animate({ top: "364px" }, 500);},
function () {$(".header_product_button_green").stop().animate({ top: "269px" }, 500);}
);

});

/**********************************************************************************/

$(function() {
	$(".q_slide_box").jCarouselLite({
		vertical: false,
		hoverPause:true,
		btnPrev: ".left_btn",
		btnNext: ".right_btn",
		visible: 1,
		start: 0,
		scroll: 1,
		circular: true,
		auto: 5000,
		speed: 300,				
		btnGo:
		    [".1", ".2",
		    ".3", ".4"],
		
		afterEnd: function(a, to, btnGo) {
				if(btnGo.length <= to){
					to = 0;
				}
				$(".thumbActive").removeClass("thumbActive");
				$(btnGo[to]).addClass("thumbActive");
		    }
	});
});

/**********************************************************************************/

function facechange1 (objName) {
if ( $(objName).css('display') == 'none' ) 
{
$(objName).animate({height: 'show'}, 400);
$(".morelink1").fadeOut(0);
}
else {
$(objName).animate({height: 'hide'}, 200);
$(".morelink1").fadeIn(0);
}
};

/**********************************************************************************/

function facechange2 (objName) {
if ( $(objName).css('display') == 'none' ) 
{
$(objName).animate({height: 'show'}, 400);
$(".morelink2").fadeOut(0);
}
else {
$(objName).animate({height: 'hide'}, 200);
$(".morelink2").fadeIn(0);
}
};

/**********************************************************************************/

function facechange3 (objName) {
if ( $(objName).css('display') == 'none' ) 
{
$(objName).animate({height: 'show'}, 400);
$(".morelink3").fadeOut(0);
}
else {
$(objName).animate({height: 'hide'}, 200);
$(".morelink3").fadeIn(0);
}
};

/**********************************************************************************/

function facechange4 (objName) {
if ( $(objName).css('display') == 'none' ) 
{
$(objName).animate({height: 'show'}, 400);
$(".morelink4").fadeOut(0);
}
else {
$(objName).animate({height: 'hide'}, 200);
$(".morelink4").fadeIn(0);
}
};

/**********************************************************************************/

function facechange5 (objName) {
if ( $(objName).css('display') == 'none' ) 
{
$(objName).animate({height: 'show'}, 400);
$(".morelink5").fadeOut(0);
}
else {
$(objName).animate({height: 'hide'}, 200);
$(".morelink5").fadeIn(0);
}
};

/**********************************************************************************/

function facechange6 (objName) {
if ( $(objName).css('display') == 'none' ) 
{
$(objName).animate({height: 'show'}, 400);
$(".morelink6").fadeOut(0);
}
else {
$(objName).animate({height: 'hide'}, 200);
$(".morelink6").fadeIn(0);
}
};

/**********************************************************************************/

function facechange7 (objName) {
if ( $(objName).css('display') == 'none' ) 
{
$(objName).animate({height: 'show'}, 400);
$(".morelink7").fadeOut(0);
}
else {
$(objName).animate({height: 'hide'}, 200);
$(".morelink7").fadeIn(0);
}
};

/**********************************************************************************/

function facechange8 (objName) {
if ( $(objName).css('display') == 'none' ) 
{
$(objName).animate({height: 'show'}, 400);
$(".morelink8").fadeOut(0);
}
else {
$(objName).animate({height: 'hide'}, 200);
$(".morelink8").fadeIn(0);
}
};

/**********************************************************************************/

$(document).ready(function(){
$(".scroll").click(function(event){

event.preventDefault();

var full_url = this.href;

var parts = full_url.split("#");
var trgt = parts[1];

var target_offset = $("#"+trgt).offset();
var target_top = target_offset.top;

$('html, body').animate({scrollTop:target_top}, 500);
});
});

/**********************************************************************************/
$(function(){
		   
$(".doc1").click(function(){
	    $(".bf1, .bf2, .bf3, .bf4, .bf5, .bf6").fadeOut(0);
	    $(".you_doctor_fio1, .you_doctor_fio2, .you_doctor_fio3, .you_doctor_fio4, .you_doctor_fio5, .you_doctor_fio6").fadeOut(0);
		$(".bf1").fadeIn(0);
		$(".you_doctor_fio1").fadeIn(0);
		
        var product = document.getElementById('you_doctor_fio1').innerHTML;
		document.getElementById('doctor_hide').value = product;
		
		return false;
});

$(".doc2").click(function(){
	    $(".bf1, .bf2, .bf3, .bf4, .bf5, .bf6").fadeOut(0);
	    $(".you_doctor_fio1, .you_doctor_fio2, .you_doctor_fio3, .you_doctor_fio4, .you_doctor_fio5, .you_doctor_fio6").fadeOut(0);
		$(".bf2").fadeIn(0);
		$(".you_doctor_fio2").fadeIn(0);
		
        var product = document.getElementById('you_doctor_fio2').innerHTML;
		document.getElementById('doctor_hide').value = product;
		
		return false;
});

$(".doc3").click(function(){
	    $(".bf1, .bf2, .bf3, .bf4, .bf5, .bf6").fadeOut(0);
	    $(".you_doctor_fio1, .you_doctor_fio2, .you_doctor_fio3, .you_doctor_fio4, .you_doctor_fio5, .you_doctor_fio6").fadeOut(0);
		$(".bf3").fadeIn(0);
		$(".you_doctor_fio3").fadeIn(0);
		
        var product = document.getElementById('you_doctor_fio3').innerHTML;
		document.getElementById('doctor_hide').value = product;
		
		return false;
});

$(".doc4").click(function(){
	    $(".bf1, .bf2, .bf3, .bf4, .bf5, .bf6").fadeOut(0);
	    $(".you_doctor_fio1, .you_doctor_fio2, .you_doctor_fio3, .you_doctor_fio4, .you_doctor_fio5, .you_doctor_fio6").fadeOut(0);
		$(".bf4").fadeIn(0);
		$(".you_doctor_fio4").fadeIn(0);
		
        var product = document.getElementById('you_doctor_fio4').innerHTML;
		document.getElementById('doctor_hide').value = product;
		
		return false;
});

$(".doc5").click(function(){
	    $(".bf1, .bf2, .bf3, .bf4, .bf5, .bf6").fadeOut(0);
	    $(".you_doctor_fio1, .you_doctor_fio2, .you_doctor_fio3, .you_doctor_fio4, .you_doctor_fio5, .you_doctor_fio6").fadeOut(0);
		$(".bf5").fadeIn(0);
		$(".you_doctor_fio5").fadeIn(0);
		
        var product = document.getElementById('you_doctor_fio5').innerHTML;
		document.getElementById('doctor_hide').value = product;
		
		return false;
});

$(".doc6").click(function(){
	    $(".bf1, .bf2, .bf3, .bf4, .bf5, .bf6").fadeOut(0);
	    $(".you_doctor_fio1, .you_doctor_fio2, .you_doctor_fio3, .you_doctor_fio4, .you_doctor_fio5, .you_doctor_fio6").fadeOut(0);
		$(".bf6").fadeIn(0);
		$(".you_doctor_fio6").fadeIn(0);
		
        var product = document.getElementById('you_doctor_fio6').innerHTML;
		document.getElementById('doctor_hide').value = product;
		
		return false;
});

});

/**********************************************************************************/

$(function(){

	$("#dim, #dim2").css("height", $(document).height());
	    		
	$(".alert1").click(function(){
		$("#dim").fadeIn();
		var product = document.getElementById('us1').innerHTML;
		document.getElementById('usl_hide').value = product;
		return false;
	});
	
	$(".alert2").click(function(){
		$("#dim").fadeIn();
		var product = document.getElementById('us2').innerHTML;
		document.getElementById('usl_hide').value = product;
		return false;
	});
	
	$(".alert3").click(function(){
		$("#dim").fadeIn();
		var product = document.getElementById('us3').innerHTML;
		document.getElementById('usl_hide').value = product;
		return false;
	});
	
	$(".alert4").click(function(){
		$("#dim").fadeIn();
		var product = document.getElementById('us4').innerHTML;
		document.getElementById('usl_hide').value = product;
		return false;
	});
	
	$(".alert5").click(function(){
		$("#dim").fadeIn();
		var product = document.getElementById('us5').innerHTML;
		document.getElementById('usl_hide').value = product;
		return false;
	});
				
	$(".close").click(function(e){
		$("#dim, #dim2").fadeOut();
		$("input").removeClass("error");
		return false;
	});
			
});
		
$(window).bind("resize", function(){
	$("#dim, #dim2").css("height", $(window).height());
});

/**********************************************************************************/

$(function() {
	$(".clinic_box").jCarouselLite({
		vertical: false,
		hoverPause:true,
		visible: 1,
		start: 0,
		scroll: 1,
		circular: true,
		auto: 5000,
		speed: 500,				
		btnGo:
		    [".cs_mini_a", ".cs_mini_b", ".cs_mini_c", ".cs_mini_d", ".cs_mini_e", ".cs_mini_f", ".cs_mini_g", ".cs_mini_h", ".cs_mini_i", ".cs_mini_j",
			 ".cs_mini_k", ".cs_mini_l"],
		
		afterEnd: function(a, to, btnGo) {
				if(btnGo.length <= to){
					to = 0;
				}
				$(".csminiactive").removeClass("csminiactive");
				$(btnGo[to]).addClass("csminiactive");
		    }
	});
});

/**********************************************************************************/



/**********************************************************************************/



/**********************************************************************************/



/**********************************************************************************/



/**********************************************************************************/