$(function() { // document ready

  buildCalc();

}); // end document ready

var buildCalc = function() {

  // counter for the parens switch
  var count = 0;

  // container code
  var $containerWrap = $('<div class = "container-fluid" style="background-color: #E4EFF1"></div>');

  $('body').append($containerWrap);

  // container styling
  $containerWrap.css('border-style', 'solid');
  $containerWrap.css('border-width', '5px');
  $containerWrap.css('text-align', 'center');

  // row code
  var $row1 = $('<div class = "row" id = "row1"></div>');
  var $row2 = $('<div class = "row" id = "row2"></div>');
  var $row3 = $('<div class = "row" id = "row3"></div>');
  var $row4 = $('<div class = "row" id = "row4"></div>');
  var $row5 = $('<div class = "row" id = "row5"></div>');
  var $row6 = $('<div class = "row" id = "row6"></div>');
  var $row7 = $('<div class = "row" id = "row7"></div>');
  var $row8 = $('<div class = "row" id = "row8"></div>');
  var $row9 = $('<div class = "row" id = "row9"></div>');

  // column code
  var $col1_row1 = $('<div class = "col-xs-12" id = "col1_row1">0</div>');
  var $col1_row2 = $('<div class = "col-xs-3 clear" id = "col1_row2">C</div>');
  var $col2_row2 = $('<div class = "col-xs-3 parens" id = "col2_row2">( )</div>');
  var $col3_row2 = $('<div class = "col-xs-3 operator" id = "col3_row2">%</div>');
  var $col4_row2 = $('<div class = "col-xs-3 operator" id = "col4_row2">/</div>');
  var $col1_row3 = $('<div class = "col-xs-3 number" id = "col1_row3">7</div>');
  var $col2_row3 = $('<div class = "col-xs-3 number" id = "col2_row3">8</div>');
  var $col3_row3 = $('<div class = "col-xs-3 number" id = "col3_row3">9</div>');
  var $col4_row3 = $('<div class = "col-xs-3 operator" id = "col4_row3">*</div>');
  var $col1_row4 = $('<div class = "col-xs-3 number" id = "col1_row4">4</div>');
  var $col2_row4 = $('<div class = "col-xs-3 number" id = "col2_row4">5</div>');
  var $col3_row4 = $('<div class = "col-xs-3 number" id = "col3_row4">6</div>');
  var $col4_row4 = $('<div class = "col-xs-3 operator" id = "col4_row4">-</div>');
  var $col1_row5 = $('<div class = "col-xs-3 number" id = "col1_row5">1</div>');
  var $col2_row5 = $('<div class = "col-xs-3 number" id = "col2_row5">2</div>');
  var $col3_row5 = $('<div class = "col-xs-3 number" id = "col3_row5">3</div>');
  var $col4_row5 = $('<div class = "col-xs-3 operator" id = "col4_row5">+</div>');
  var $col1_row6 = $('<div class = "col-xs-6 number" id = "col1_row6">0</div>');
  var $col2_row6 = $('<div class = "col-xs-3 number" id = "col2_row6">.</div>');
  var $col3_row6 = $('<div class = "col-xs-3 equals" id = "col3_row6">=</div>');
  var $col1_row7 = $('<div class = "col-xs-3 logic" id = "col3_row7">true</div>');
  var $col2_row7 = $('<div class = "col-xs-3 logic" id = "col3_row7">false</div>');
  var $col3_row7 = $('<div class = "col-xs-3 logic" id = "col3_row7"> === </div>');
  var $col4_row7 = $('<div class = "col-xs-3 logic" id = "col3_row7"> == </div>');
  var $col1_row8 = $('<div class = "col-xs-3 logic" id = "col3_row8"> &#62; </div>');
  var $col2_row8 = $('<div class = "col-xs-3 logic" id = "col3_row8"> &#60; </div>');
  var $col3_row8 = $('<div class = "col-xs-3 logic" id = "col3_row8"> !== </div>');
  var $col4_row8 = $('<div class = "col-xs-3 logic" id = "col3_row8"> != </div>');
  var $col1_row9 = $('<div class = "col-xs-3 logic" id = "col3_row9"> && </div>');
  var $col2_row9 = $('<div class = "col-xs-3 logic" id = "col3_row9"> || </div>');
  var $col3_row9 = $('<div class = "col-xs-6 logic" id = "col3_row9"> ! </div>');

  // append rows
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

  // set inital height of rows and row styling
  var $winHeight = $(window).height();
  $('.row').css('height', $winHeight/9 + 'px');

  //  column styling
  $('.col-xs-3').css('height', '100%');
  $('.col-xs-3').css('border-style', 'solid');
  $('.col-xs-3').css('border-width', '1px');
  $('.col-xs-12').css('height', '100%');
  $('.col-xs-12').css('border-style', 'solid');
  $('.col-xs-12').css('border-width', '1px');
  $('.col-xs-6').css('height', '100%');
  $('.col-xs-6').css('border-style', 'solid');
  $('.col-xs-6').css('border-width', '1px');
  // column reactive size
  $('.col-xs-3').css('font-size', '3vw');
  $('.col-xs-12').css('font-size', '3vw');
  $('.col-xs-6').css('font-size', '3vw');
  // coloring
  $($row1).css('background-color', '#F38B7E');
  $('.number').css('background-color', '#E4EFF1');
  $('.operator').css('background-color', '#9FD8FF')
  $('.logic').css('background-color', '#91B9DE');
  $('.equals').css('background-color', '#9FD8FF');

   //*******************//
  //** event handlers **//
  //*******************//
  var $numMouseDown = $('.number').mousedown(function(e) {
    $(this).css('background-color', '#c2dbe0');
  }); // end numMouseDown

  var $numMouseUp = $('.number').mouseup(function(e) {
    $(this).css('background-color', '#E4EFF1')
    $innerText = $(this).text();

    if($col1_row1.text() == '0') {
      $(col1_row1).text($innerText);
    } else {
      $(col1_row1).append($innerText);
    }
  }); // end numMouseUp

  var $operatorMouseDown = $('.operator').mousedown(function(e) {
    $(this).css('background-color', '#c2dbe0');
  }); // end operatorMouseDown

  var $operatorMouseUp = $('.operator').mouseup(function(e) {
    $(this).css('background-color', '#9FD8FF');
    $innerText = $(this).text();
    $(col1_row1).append(' ' + $innerText + ' ');
  }); // end operatorMouseUp

  var $logicMouseDown = $('.logic').mousedown(function(e) {
    $(this).css('background-color', '#c2dbe0');
  }); // end logicMouseDown

  var $logicMouseUp = $('.logic').mouseup(function(e) {
    $(this).css('background-color', '#91B9DE');
    $innerText = $(this).text();
    if($col1_row1.text() == '0') {
      $(col1_row1).text($innerText);

    } else {
      $(col1_row1).append($innerText);
    }
  }); // end logicMouseUp

  var $equalsMouseDown = $('.equals').mousedown(function(e) {
    $(this).css('background-color', '#c2dbe0');
  }); // end equalsMouseDown

  var $equalsMouseUp = $('.equals').mouseup(function(e) {
    $(this).css('background-color', '#9FD8FF');
    var $equals = $(col1_row1).text();
    $(col1_row1).empty();
    if(eval($equals)) {
      $(col1_row1).append(eval($equals));
    }
    else {
      $(col1_row1).append('false');
    }
  }); // end equalsMouseUp

  var $clearMouseDown = $('.clear').mousedown(function(e) {
    $(this).css('background-color', '#c2dbe0');
  }); // end clear

  var $clearMouseUp = $('.clear').mouseup(function(e) {
    $(this).css('background-color', '#E4EFF1');
    count = 0;
    $(col1_row1).text('0');
  }); // end clear

  var $parensMouseDown = $('.parens').mousedown(function(e) {
    $(this).css('background-color', '#c2dbe0');
  }); // end parensMouseDown

  var $parensMouseUp = $('.parens').mouseup(function(e) {
    $(this).css('background-color', '#E4EFF1')
    if($col1_row1.text() == '0') {
      if(count % 2 == 0) {
        count++;
        $(col1_row1).text('(');
      }
      else {
        count++;
        $(col1_row1).text(')');
      }
    } else {
      if(count % 2 == 0) {
        count++;
        $(col1_row1).append('(');
      }
      else {
        count++;
        $(col1_row1).append(')');
      }
    }
  }); // end parens mouseup

  // window resize event handler
  $(window).resize(function(e) {
    var $winHeight = $(window).height();
    $containerWrap.css('height', $winHeight);
    $('.row').css('height', $winHeight/9.1 + 'px');
  }); // end window resize event handler

  // keypress event handler
  $('body').keypress(function(e) {
    switch(e.keyCode) {
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57: //0-9
      case 47: // divide
      case 42: // mult
      case 45: // min
      case 43: // plus
      case 38: // ampersand
      case 46: // dot
      case 37: // mod
        if($col1_row1.text() == '0') {
          $(col1_row1).text(e.key);
        } else {
          $(col1_row1).append(e.key);
        }
        break;
      case 99: // c for clear
        count = 0;
        $(col1_row1).text('0');
        break;
      case 40: // open parens
        if($col1_row1.text() == '0') {
          $(col1_row1).text('(');
        } else {
          $(col1_row1).append('(');
        }
        break;
      case 41: // close parens
        if($col1_row1.text() == '0') {
          $(col1_row1).text(')');
        } else {
          $(col1_row1).append(')');
        }
      break;
    }
  }); // end keypress event handler

  //keydown event handler
  $('body').keydown(function(e) {
    switch(e.keyCode) {
      case 8:
        var innerText = $(col1_row1).text().slice(0,-1);
        $(col1_row1).text(innerText);
        break;
      case 13:
        var $equals = $(col1_row1).text();
        $(col1_row1).empty();
        if(eval($equals)) {
          $(col1_row1).append(eval($equals));
        }
        else {
          $(col1_row1).append('false');
        }
        break;
    }
  }); // end keydown event handler
}; //  end func buildCalc
