// slide---------------------------------------


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  

}














  // Get the login pop up
  var modal = document.getElementById('id01');

  // get register pop up
  var modal2 = document.getElementById('id02');
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  
  // --------------------------------register page---------------------------
  var userArr = JSON.parse(localStorage.getItem("register_data")) || [];
  // console.log(userArr);
  function signUp(){
      
      var userCredentials = {
          reg_phone: document.getElementById("reg_phone").value,
          reg_otp: document.getElementById("reg_otp").value,
          reg_email:document.getElementById("reg_email").value,
          reg_pass: document.getElementById("reg_pass").value,
      };
   
      if(reg_phone.value == "" || reg_otp.value == "" || reg_email.value == "" || reg_pass.value == "" ){
          alert("fill form");
          return false;
      }
      else{
          // true;
          alert("register sucessfully")
      }
      
      userArr.push(userCredentials);
      console.log(userArr);
  
      
  
      
      localStorage.setItem("register_data", JSON.stringify(userArr));
  
      // window.location.href = "signin1.html";   
  }
  
  //------------------------------------ log in page----------------------------------------------------------------
  
  var user =JSON.parse(localStorage.getItem("userData"));
      // console.log("user")
      
    function user_login(){
      var log = document.getElementById("login_mail");
      var  pas =document.getElementById("login_pass");
      for (let i =0; i<user.length;i++){
          if (log.value == user[i].reg_email && pas.value ==user[i].reg_pass){
      
              //   window.location.href = "index.html";
              alert ("Login sucessfull")
      } else {
          
          alert("Invalid Credentails");
      }
    }
    }
  
  
  
  
  