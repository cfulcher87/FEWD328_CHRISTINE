$(document).ready(function() {
  /*will replace butto click with if / else selectors*/
  $('#button1').click(function() {
  $('#cc_cube').removeClass().addClass('#show-front');
  })

  $('#button2').click(function() {
  $('#cc_cube').removeClass().addClass('show-back');
  })

  $('#button3').click(function(){
  $('#cc_cube').removeClass().addClass('show-right');
  })

  $('#button4').click(function() {
  $('#cc_cube').removeClass().addClass('show-left');
  })

  $('#button5').click(function() {
  $('#cc_cube').removeClass().addClass('show-top');
  })

  $('#button6').click(function() {
  $('#cc_cube').removeClass().addClass('show-bottom');
  })
})





