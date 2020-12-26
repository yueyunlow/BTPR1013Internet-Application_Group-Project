//Back to top function
var mybutton = document.getElementById("back2top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Job Opening Tabs
function openExplain(evt, jobPosition) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    if(document.getElementById(jobPosition).style.display === "block"){
        document.getElementById(jobPosition).style.display = "none";
    }
    else{
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("active", "");
        }
            document.getElementById(jobPosition).style.display = "block";
            evt.currentTarget.className += " active";
    }
}
// Get the element with id="defaultTabOpen" and click on it
document.getElementById("defaultTabOpen").click();

//contact-us validate user input.
function validateForm() {
    var y= document.getElementById("message").value;
    if(y == "") {
      alert("Message cannot be empty!!!");
      return false;
    }
    else{
      alert("Submit Successful");
      return true;
    }
  }
window.onload=function(){

    var submitBtn = document.getElementById("submit");

    submitBtn.onclick = function () {
        if(!document.getElementById("privacy policy").checked) {
            alert("Please Agree Our Privacy Policy");
            return false;
        }
    };
  }

//nav bar responsive
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsivenav";
    } else {
        x.className = "topnav";
    }
}