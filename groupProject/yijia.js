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
    var name = document.getElementById("name").value;  
    var contactNumber = document.getElementById("contactNumber").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var letters = /^[A-Za-z]+$/;  
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var phno_val = /^\d{11,12}$/;

    if(name==''||contactNumber==''||email==''||message==''){  
        alert("Enter each details correctly");
        return false;  
    }  
    else if(!letters.test(name)){  
        alert('Name is incorrect must contain alphabets only'); 
        return false;  
    } 
    else if (!phno_val.test(contactNumber)){  
        alert('Invalid phone number please enter valid phone number'); 
        return false;  
    }   
    else if (!email_val.test(email)){  
        alert('Invalid email format please enter valid email'); 
        return false;  
    }  
    else if (document.getElementById("privacyPolicy").checked==false){  
        alert('You must agree to the Privacy Policy first.'); 
        return false;  
    }
    else {
        alert('Submit successful');
        return true;
    }   
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
