$(function() { // document ready

  buildCalc();

});// document ready

var buildCalc = function() {

var $containerWrap = $('<div class = "container-fluid" style="background-color: #D793FF"></div>');
$containerWrap.css('text-align', 'center');

$('body').append($containerWrap);

var $winHeight = $(window).height();
var $winWidth = $(window).width();

$containerWrap.css('height', $winHeight);
$containerWrap.css('border-style', 'solid');
$containerWrap.css('border-width', '5px');


var $row1 = $('<div class = "row" id = "row1"></div>');
var $row2 = $('<div class = "row" id = "row2"></div>');
var $row3 = $('<div class = "row" id = "row3"></div>');
var $row4 = $('<div class = "row" id = "row4"></div>');
var $row5 = $('<div class = "row" id = "row5"></div>');
var $row6 = $('<div class = "row" id = "row6"></div>');
var $col1_row1 = $('<div class = "col-sm-12" id = "col1_row1">0</div>');

var $col1_row2 = $('<div class = "col-sm-3" id = "col1_row2">C</div>');
var $col2_row2 = $('<div class = "col-sm-3 operator" id = "col2_row2">+/-</div>');
var $col3_row2 = $('<div class = "col-sm-3 operator" id = "col3_row2">%</div>');
var $col4_row2 = $('<div class = "col-sm-3 operator" id = "col4_row2">/</div>');
var $col1_row3 = $('<div class = "col-sm-3 number" id = "col1_row3">7</div>');
var $col2_row3 = $('<div class = "col-sm-3 number" id = "col2_row3">8</div>');
var $col3_row3 = $('<div class = "col-sm-3 number" id = "col3_row3">9</div>');
var $col4_row3 = $('<div class = "col-sm-3 operator" id = "col4_row3">x</div>');
var $col1_row4 = $('<div class = "col-sm-3 number" id = "col1_row4">4</div>');
var $col2_row4 = $('<div class = "col-sm-3 number" id = "col2_row4">5</div>');
var $col3_row4 = $('<div class = "col-sm-3 number" id = "col3_row4">6</div>');
var $col4_row4 = $('<div class = "col-sm-3 operator" id = "col4_row4">-</div>');
var $col1_row5 = $('<div class = "col-sm-3 number" id = "col1_row5">1</div>');
var $col2_row5 = $('<div class = "col-sm-3 number" id = "col2_row5">2</div>');
var $col3_row5 = $('<div class = "col-sm-3 number" id = "col3_row5">3</div>');
var $col4_row5 = $('<div class = "col-sm-3 operator" id = "col4_row5">+</div>');
var $col1_row6 = $('<div class = "col-sm-6 number" id = "col1_row6">0</div>');
var $col2_row6 = $('<div class = "col-sm-3" id = "col2_row6">.</div>');
var $col3_row6 = $('<div class = "col-sm-3 equals" id = "col3_row6">=</div>');


$('.container-fluid').append($row1, $row2, $row3, $row4, $row5, $row6);
$($row1).append($col1_row1);
$($row2).append($col1_row2, $col2_row2, $col3_row2, $col4_row2);
$($row3).append($col1_row3, $col2_row3, $col3_row3, $col4_row3);
$($row4).append($col1_row4, $col2_row4, $col3_row4, $col4_row4);
$($row5).append($col1_row5, $col2_row5, $col3_row5, $col4_row5);
$($row6).append($col1_row6, $col2_row6, $col3_row6);


$('.row').css('height', $winHeight/6.1 + 'px');
// $('.row').css('border-style', 'solid');
// $('.row').css('border-width', '5px');

// $('.col-sm-3').css('width', $winWidth/4);
$('.col-sm-3').css('height', '100%');
$('.col-sm-3').css('border-style', 'solid');
$('.col-sm-3').css('border-width', '1px');
$('.col-sm-12').css('height', '100%');
$('.col-sm-12').css('border-style', 'solid');
$('.col-sm-12').css('border-width', '1px');
$('.col-sm-6').css('height', '100%');
$('.col-sm-6').css('border-style', 'solid');
$('.col-sm-6').css('border-width', '1px');

$('.col-sm-3').css('font-size', '2vw');
$('.col-sm-12').css('font-size', '2vw');
$('.col-sm-6').css('font-size', '2vw');

$($row1).css('background-color', '#E8420C');
$($col4_row2).css('background-color', '#FF830D');
$($col4_row3).css('background-color', '#FF830D');
$($col4_row4).css('background-color', '#FF830D');
$($col4_row5).css('background-color', '#FF830D');
$($col3_row6).css('background-color', '#FF830D');

var $numMouseDown = $('.number').mousedown(function(e) {
  $(this).css('background-color', 'grey');
});
var $numMouseUp = $('.number').mouseup(function(e) {
  $(this).css('background-color', '#D793FF')
  $innerText = $(this).text();
  $(col1_row1).append($innerText);
});
var $operatorMouseDown = $('.operator').mousedown(function(e) {
  $(this).css('background-color', 'grey');

});
var $operatorMouseUp = $('.operator').mouseup(function(e) {
  $(this).css('background-color', '#FF830D');
  $innerText = $(this).text();
  $(col1_row1).append(' ' + $innerText + ' ');
});
var $equalsMouseDown = $('.equals').mousedown(function(e) {
  $(this).css('background-color', 'grey');

});
var $equalsMouseUp = $('.equals').mouseup(function(e) {
  $(this).css('background-color', '#FF830D');
  var $equals = $(col1_row1).text();
  $(col1_row1).empty();
  $(col1_row1).append(eval($equals));
});


}; //  func buildCalc
