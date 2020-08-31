 confirm("welcome to this page Book a ride now ")

    function validation(){

        var mobileno=document.getElementById('mobileno').value;
        var name=document.getElementById('name').value;
        var pickup=document.getElementById('pickup').value;
        
        if(mobileno == "")
        
        {
            document.getElementById("mobileno").focus();
            document.getElementById("mobileno_error").innerHTML="*please enter the mobileno*";
            return false;  
        }
        
        if(name == "")
        
        {
            
            document.getElementById("name").focus();
            document.getElementById('name_error').innerHTML="*please enter the name*";
            return false;  
        }
        if(pickup == "")
        
        {
            
            document.getElementById("pickup").focus();
            document.getElementById('pickup_error').innerHTML="*please enter the pickup location*";
            return false;  
        }
     
      
    }



const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});




   