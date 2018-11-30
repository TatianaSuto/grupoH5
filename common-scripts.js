jQuery(document).ready(function($){

	/* toggle nav */
	$("#menu-icon").on("click", function(){
		$("#menu-conta").slideUp(); //Desativa o menu-conta caso estiver ligado
		$("#main-menu").slideToggle();
		$(this).toggleClass("active");
	});

	$("#menu-icon2").on("click", function(){
		$("#main-menu").slideUp(); //Desativa o main-menu caso estiver ligado
		$("#menu-conta").slideToggle();
		$(this).toggleClass("active");
	});

	$('[data-toggle="tooltip"]').tooltip();

	$("a#saiba-mais").click(function(){
    	$("#mais").toggle("fast");
	});

	$("#bem-vindo").on("hide.bs.modal", function () {
		player.stopVideo();
	});

	//Menus
	jQuery('#main-nav ul > li > ul, #main-nav ul > li > ul > li > ul, #main-nav ul > li > ul > li > ul> li > ul').parent('li').addClass('parent-list');
	
	jQuery("#main-nav li").each(function(){	
		var $sublist = jQuery(this).find('ul:first');		
		jQuery(this).hover(function(){	
			$sublist.stop().css({overflow:"hidden", height:"auto", display:"none"}).slideDown(300, function(){
				jQuery(this).css({overflow:"visible", height:"auto"});
			});	
		},
		function(){
		if($(window).width() >= 1024){

			$sublist.stop().slideUp(200, function()	{	
				jQuery(this).css({overflow:"hidden", display:"none"});
			});
		}});	
	});
	
// Add any other social script without script tags.

// Facebook SDK
	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.8&appId=1599203663674288";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

//Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-73070470-1', 'auto');
  ga('send', 'pageview');

// Twitter SDK
	window.twttr = (function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0],
	    t = window.twttr || {};
	  if (d.getElementById(id)) return t;
	  js = d.createElement(s);
	  js.id = id;
	  js.src = "https://platform.twitter.com/widgets.js";
	  fjs.parentNode.insertBefore(js, fjs);
	 
	  t._e = [];
	  t.ready = function(f) {
	    t._e.push(f);
	  };
	 
	  return t;
	}(document, "script", "twitter-wjs"));

    $('body').on('submit', 'form#compartilhar-doacao', function (e){
		FB.ui({
			method: 'feed',
			display: 'touch',
			name: 'Eu contribuí com a missão ' + $(this).find('input[name="name"]').val() + '. Doe você também!',
			link: $(this).find('input[name="link"]').val(),
			//picture: 'http://images.weserv.nl/?url=' + $(this).find('input[name="picture"]').val(),
		}, function(response){});;
	});

});

function formatAsCurrency(el) {
  el.value = el.value.replace(/[^\d]/g,'').replace(/(\d\d?)$/,',$1');
}

// Essa função permite fazer o uso do formato da data e permite apenas numeros
function MascaraData(obj) 
{
	var charCode = (obj.which) ? obj.which : event.keyCode
     if (charCode != 45  && charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

   switch (obj.value.length) 
   {
      case 2:
           obj.value = obj.value + "/";
           break;
      case 5:
           obj.value = obj.value + "/";
           break;
   }

   return true;
}



