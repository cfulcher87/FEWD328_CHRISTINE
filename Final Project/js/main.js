$(document).ready(function() {
  /*Hide Float*/
  $('.floater').hide();

  /*Cube1 Rotation - Credit Cards*/
  $('#credit_card').click(function(event) {
    event.preventDefault();
    /*Slide down on click*/
    $('#credit_card_options').slideDown(1000);
    /*Upon select, rotate cube, change opacity*/
    
    $('#option1').click(function(event) {
    event.preventDefault();
    $('#cc_cube').removeClass().addClass('show-back')
    })

    $('#option2').click(function(event) {
    event.preventDefault();
    $('#cc_cube').removeClass().addClass('show-right');
    })

    $('#option3').click(function(event) {
    event.preventDefault();
    $('#cc_cube').removeClass().addClass('show-left');
    })  
    })  



  /*will replace butto click with if / else selectors*/
//cube1//  
  $('#button1').click(function(event) {
    event.preventDefault();
  $('#cc_cube').removeClass().addClass('show-front');
  })

  $('#button2').click(function(event) {
    event.preventDefault();
  $('#cc_cube').removeClass().addClass('show-back');
  })

  $('#button3').click(function(event){
    event.preventDefault();
  $('#cc_cube').removeClass().addClass('show-right');
  })

  $('#button4').click(function(event) {
    event.preventDefault();
  $('#cc_cube').removeClass().addClass('show-left');
  })

  $('#button5').click(function(event) {
    event.preventDefault();
  $('#cc_cube').removeClass().addClass('show-top');
  })

  $('#button6').click(function(event) {
    event.preventDefault();
  $('#cc_cube').removeClass().addClass('show-bottom');
  })

  //cube2//

  $('#button7').click(function(event) {
    event.preventDefault();
  $('.cube2').removeClass().addClass('show-front cube2');
  })

  $('#button8').click(function(event) {
    event.preventDefault();
  $('.cube2').removeClass().addClass('show-back cube2');
  })

  $('#button9').click(function(event) {
    event.preventDefault();
  $('.cube2').removeClass().addClass('show-right cube2');
  })

  //cube3//
  $('#button10').click(function(event) {
    event.preventDefault();
  $('.cube3').removeClass().addClass('show-front cube3');
  })

  $('#button11').click(function(event) {
    event.preventDefault();
  $('.cube3').removeClass().addClass('show-back cube3');
  })

  $('#button12').click(function(event) {
    event.preventDefault();
  $('.cube3').removeClass().addClass('show-right cube3');
  })

  //cube4//

  $('#button13').click(function(event) {
    event.preventDefault();
  $('.cube4').removeClass().addClass('show-front cube4');
  })

  $('#button14').click(function(event) {
    event.preventDefault();
  $('.cube4').removeClass().addClass('show-back cube4');
  })

  $('#button15').click(function(event) {
    event.preventDefault();
  $('.cube4').removeClass().addClass('show-right cube4');
  })

  //cube5//

  $('#button16').click(function(event) {
    event.preventDefault();
  $('.cube5').removeClass().addClass('show-front cube5');
  })

  $('#button17').click(function(event) {
    event.preventDefault();
  $('.cube5').removeClass().addClass('show-back cube5');
  })

  $('#button18').click(function(event) {
    event.preventDefault();
  $('.cube5').removeClass().addClass('show-right cube5');
  })

  //cube6//

  $('#button19').click(function(event) {
    event.preventDefault();
  $('.cube6').removeClass().addClass('show-front cube6');
  })

  $('#button20').click(function(event) {
    event.preventDefault();
  $('.cube6').removeClass().addClass('show-back cube6');
  })

  $('#button21').click(function(event) {
    event.preventDefault();
  $('.cube6').removeClass().addClass('show-right cube6');
  })


})







