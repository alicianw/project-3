// jquery service icons
$("#one").click(function() {

    $("#one p").toggle();
    $("#one img").toggle();

});

$("#two").click(function(){
    $("#two p").toggle();
    $("#two img").toggle();
});

$("#three").click(function(){

    $("#three p").toggle();
    $("#three img").toggle();
});

// jquery portfolio


$('.project-tiles img').hover(		
    function () {
      $(this).css('opacity','.3');
      $(".middle").css('opacity','1');
    }, 
    function () {
      $(this).css('opacity','1');
      $(".middle").css('opacity','0');

    }
  );





// form 
function result(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value

    if (name =="" || email==""){
        alert("Please fill in all your details");
    } 
    else if(message==""){
        alert("Please write a message");
    }
    else{
        alert( name + " message received, thank you!");
    }

}
