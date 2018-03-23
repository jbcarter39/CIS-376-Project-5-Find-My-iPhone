//jquery loop that changes background color of sign in button based on text entered
$(document).ready(function() {
  $(".email").on("input", function() {
    if ($(this).val() == "") $(".btn").css({ backgroundColor: "" });
    else {
      if (checkEmail($(this).val()))
        $(".btn").css({ backgroundColor: "green" });
      else $(".btn").css({ backgroundColor: "red" });
    }
  });

  function checkEmail(txt) {
    var patt = /[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/;
    if (patt.test(txt)) return true;
    else return false;
  }
});


//function that validates enter email
function checkEmail(emailId) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId)) {
    //document.write("You have entered a valid email.");
    return true;
  }
  return false;
}
//function that alerts users if email is not entered
function ValidateEmail() {
  var emailID = document.form.email;

  if (emailID.value == null || emailID.value == "") {
    alert("Please Enter your Email ID");
    emailID.focus();
    return false;
  }
  //alerts users if email entered is invalid
  if (checkEmail(emailID.value) == false) {
    emailID.value = "";
    alert("Invalid Email Address: Please enter a valid email address.");
    emailID.focus();
    return false;
  }
  alert("valid");
  document.getElementById("button").style.background='#15d66f';
  return true;
}

//jquery that calls email validation function
$("#UserInput").blur(function() {
  checkEmail();
});
document.onload = doEverything();

function doEverything() {
  myFunction();
}

function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("popup");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 3000);
}

function hidePassword() {
    var hide = document.getElementById("psw");
    if (hide.type === "password") {
        hide.type = "text";
    } else {
        hide.type = "password";
    }
}
