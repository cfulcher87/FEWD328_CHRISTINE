//Create a form that has these fiels
	//1. textbox - cityName - DONE
	//2. submit button - DONE
	//3. Create a submit listener for it using jQuery - DONE
	//4. Get teh city name from teh form and storage
		//in a variable - DONE
	//5. In the submit listener, retrief the data with AJAX
		//data is at : http://api.openweathermap.org/data/2.5/weather?q=<CITYNAME>
		//Print out that data using console.log() and append it as a list
		//to your html


$(document).ready(function(){

  $('form').submit(function(event){
  event.preventDefault();
  var input = $('#cityName').val();
  console.log(city);

  //Hayley I know I am missing some things, but can't figure it out. 
  //I know I need to translate the city name into the city ID
  //Didn't do that.  But set up below as if I did. 

  //Retrieve the data with AJAX//
  var url = 'http://api.openweathermap.org/data/2.5/weather?zip=',
  var appid = 'us&appid=78974fa0cb19d11c7e57be76d988f572';
  
  $.ajax({
    type: 'GET',
    url: url + /*cityID*/ + appid,
    dataType: 'jsonp',
    success: function(json) {
    //print out using console log//
      console.log(json);
      $('#append').append(JSON.stringify(json));
    },

    error: function(e){
      console.log(e.message);
    }
  })
})