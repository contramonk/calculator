$(function() { // document ready

  buildCalc();

});// document ready

var buildCalc = function() {

var count = 0;

var $containerWrap = $('<div class = "container-fluid" style="background-color: #E4EFF1"></div>');
$containerWrap.css('text-align', 'center');


$('body').append($containerWrap);

var $winHeight = $(window).height();
var $winWidth = $(window).width();

// $containerWrap.css('height', $winHeight);
$containerWrap.css('border-style', 'solid');
$containerWrap.css('border-width', '5px');

var $row1 = $('<div class = "row" id = "row1"></div>');
var $row2 = $('<div class = "row" id = "row2"></div>');
var $row3 = $('<div class = "row" id = "row3"></div>');
var $row4 = $('<div class = "row" id = "row4"></div>');
var $row5 = $('<div class = "row" id = "row5"></div>');
var $row6 = $('<div class = "row" id = "row6"></div>');
var $row7 = $('<div class = "row" id = "row7"></div>');
var $row8 = $('<div class = "row" id = "row8"></div>');
var $row9 = $('<div class = "row" id = "row9"></div>');

var $col1_row1 = $('<div class = "col-sm-12" id = "col1_row1">0</div>');

var $col1_row2 = $('<div class = "col-sm-3 clear" id = "col1_row2">C</div>');
var $col2_row2 = $('<div class = "col-sm-3 parens" id = "col2_row2">( )</div>');
var $col3_row2 = $('<div class = "col-sm-3 operator" id = "col3_row2">%</div>');
var $col4_row2 = $('<div class = "col-sm-3 operator" id = "col4_row2">/</div>');
var $col1_row3 = $('<div class = "col-sm-3 number" id = "col1_row3">7</div>');
var $col2_row3 = $('<div class = "col-sm-3 number" id = "col2_row3">8</div>');
var $col3_row3 = $('<div class = "col-sm-3 number" id = "col3_row3">9</div>');
var $col4_row3 = $('<div class = "col-sm-3 operator" id = "col4_row3">*</div>');
var $col1_row4 = $('<div class = "col-sm-3 number" id = "col1_row4">4</div>');
var $col2_row4 = $('<div class = "col-sm-3 number" id = "col2_row4">5</div>');
var $col3_row4 = $('<div class = "col-sm-3 number" id = "col3_row4">6</div>');
var $col4_row4 = $('<div class = "col-sm-3 operator" id = "col4_row4">-</div>');
var $col1_row5 = $('<div class = "col-sm-3 number" id = "col1_row5">1</div>');
var $col2_row5 = $('<div class = "col-sm-3 number" id = "col2_row5">2</div>');
var $col3_row5 = $('<div class = "col-sm-3 number" id = "col3_row5">3</div>');
var $col4_row5 = $('<div class = "col-sm-3 operator" id = "col4_row5">+</div>');
var $col1_row6 = $('<div class = "col-sm-6 number" id = "col1_row6">0</div>');
var $col2_row6 = $('<div class = "col-sm-3 number" id = "col2_row6">.</div>');
var $col3_row6 = $('<div class = "col-sm-3 equals" id = "col3_row6">=</div>');
var $col1_row7 = $('<div class = "col-sm-3 logic" id = "col3_row7">true</div>');
var $col2_row7 = $('<div class = "col-sm-3 logic" id = "col3_row7">false</div>');
var $col3_row7 = $('<div class = "col-sm-3 logic" id = "col3_row7"> === </div>');
var $col4_row7 = $('<div class = "col-sm-3 logic" id = "col3_row7"> == </div>');
var $col1_row8 = $('<div class = "col-sm-3 logic" id = "col3_row8"> &#62; </div>');
var $col2_row8 = $('<div class = "col-sm-3 logic" id = "col3_row8"> &#60; </div>');
var $col3_row8 = $('<div class = "col-sm-3 logic" id = "col3_row8"> !=== </div>');
var $col4_row8 = $('<div class = "col-sm-3 logic" id = "col3_row8"> !== </div>');
var $col1_row9 = $('<div class = "col-sm-3 logic" id = "col3_row9"> && </div>');
var $col2_row9 = $('<div class = "col-sm-3 logic" id = "col3_row9"> || </div>');
var $col3_row9 = $('<div class = "col-sm-6 logic" id = "col3_row9"> ! </div>');


$('.container-fluid').append($row1, $row2, $row3, $row4, $row5, $row6, $row7, $row8, $row9);
$($row1).append($col1_row1);
$($row2).append($col1_row2, $col2_row2, $col3_row2, $col4_row2);
$($row3).append($col1_row3, $col2_row3, $col3_row3, $col4_row3);
$($row4).append($col1_row4, $col2_row4, $col3_row4, $col4_row4);
$($row5).append($col1_row5, $col2_row5, $col3_row5, $col4_row5);
$($row6).append($col1_row6, $col2_row6, $col3_row6);
$($row7).append($col1_row7, $col2_row7, $col3_row7, $col4_row7);
$($row8).append($col1_row8, $col2_row8, $col3_row8, $col4_row8);
$($row9).append($col1_row9, $col2_row9, $col3_row9);


$('.row').css('height', $winHeight/9.1 + 'px');
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

$($row1).css('background-color', '#F38B7E');
$('.number').css('background-color', '#E4EFF1');
$('.operator').css('background-color', '#9FD8FF')
$('.logic').css('background-color', '#91B9DE');
$('.equals').css('background-color', '#9FD8FF');

var $numMouseDown = $('.number').mousedown(function(e) {
  $(this).css('background-color', 'grey');
});
var $numMouseUp = $('.number').mouseup(function(e) {
  $(this).css('background-color', '#E4EFF1')
  $innerText = $(this).text();

  if($col1_row1.text() == '0') {
    $(col1_row1).text($innerText);
    console.log("0 case")
  } else {
    $(col1_row1).append($innerText);
    console.log("else");
  }


});
var $operatorMouseDown = $('.operator').mousedown(function(e) {
  $(this).css('background-color', 'grey');

});
var $operatorMouseUp = $('.operator').mouseup(function(e) {
  $(this).css('background-color', '#9FD8FF');
  $innerText = $(this).text();
  $(col1_row1).append(' ' + $innerText + ' ');
});
var $logicMouseDown = $('.logic').mousedown(function(e) {
  $(this).css('background-color', 'grey');
});
var $logicMouseUp = $('.logic').mouseup(function(e) {
  $(this).css('background-color', '#91B9DE');
  $innerText = $(this).text();
  $(col1_row1).append($innerText);
});

var $equalsMouseDown = $('.equals').mousedown(function(e) {
  $(this).css('background-color', 'grey');

});
var $equalsMouseUp = $('.equals').mouseup(function(e) {
  $(this).css('background-color', '#9FD8FF');
  var $equals = $(col1_row1).text();
  $(col1_row1).empty();
  if(eval($equals)) {
    $(col1_row1).append(eval($equals));
    console.log("true");
  }
  else {
    $(col1_row1).append('false');
    console.log("false");
  }
});
var $clear = $('.clear').mouseup(function(e) {
  count = 0;
  $(col1_row1).text('0');

});

var $parensMouseDown = $('.parens').mousedown(function(e) {
  $(this).css('background-color', 'grey');
});
var $parensMouseUp = $('.parens').mouseup(function(e) {

  $(this).css('background-color', '#D793FF')
  if(count % 2 == 0) {
    count++;
    $(col1_row1).append('(');
    console.log(count);
  }
  else {
    count++;
    $(col1_row1).append(')');
    console.log(count);
  }

});

$(window).resize(function(e) {
  var $winHeight = $(window).height();
  console.log($winHeight);
  $containerWrap.css('height', $winHeight);
  $('.row').css('height', $winHeight/9.1 + 'px');
});


}; //  func buildCalc
