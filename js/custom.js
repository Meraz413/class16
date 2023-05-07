
function myValidation(){
	var name = document.forms['contactForm']['name'].value;
	var email = document.forms['contactForm']['email'].value;
	var phone = document.forms['contactForm']['phone'].value;
	var message = document.forms['contactForm']['message'].value;
	var error =[];

	if(name =='' || name.length <3){
		error[0]="Name Must Be At Least 3 letters";
		document.getElementById('name-error').innerHtml = error[0];
	}else{
		document.getElementById('name-error').innerHtml = '';
	}
	if(email =='' || email.length <10){
		error[1]="please insert a email";
		document.getElementById('email-error').innerHtml = error[1];
	}else{
		document.getElementById('email-error').innerHtml = '';
	}
	if(phone =='' || phone.length <11){
		error[2]="please insert a phonenumber";
		document.getElementById('phone-error').innerHtml = error[2];
	}else{
		document.getElementById('phone-error').innerHtml = '';
	}
	if(message =='' || name.length <50){
		error[3]="message Must Be At Least 50 letters";
		document.getElementById('message-error').innerHtml = error[3];
	}else{
		document.getElementById('message-error').innerHtml = '';
	}
	
	if(error.length > 0){
		return false;
	}
}

function myfocous(x){
	x.style.background='#cdaaaa';
}
/*---- Jquery start---*/
		
$(document).ready (function(){
	
	
	
	/*----Menubar active start---*/
	$('#main-menu').on('click','li',function(){
		$('#main-menu li.active').removeClass('active');
		$(this).addClass('active');
	});
	
	/*----Menubar start---*/
	$('mobile-icon').click(function(){
		$('main-menu ul').slideToggle(1000);
	});
	$(window).resize(function(){
		if($(window).width() >576){
			$('main-menu ul').show();
		}else{
			$('main-menu ul').hide();
		}
	});
	/*----upper button scroll start---*/
	$(window).scroll(function(){
		var x = $(window).scrollTop();
		
		if(x >1000){
			$('#upper').fadeIn(1000);
		}else{
			$('#upper').fadeOut(1000);
		}
	});
	$('#upper').click(function(){
		$('html').animate({scrollTop: 0},2000);
	});
	
});