
jQuery(document).ready(function($){
	var nav = {};
	var navContent= {};

	var paneW = '';
	var target = '';
	$('.nav').on('click', 'li', function(){
		$('.nav li').removeClass('tagged');
		$(this).addClass('tagged');
		 target = $(this).attr('ohdnav') + '.php';
		 
	
		 //if already loaded
		 if(nav[target]){
		 	$('#pane_content').html(navContent[target]);
		 }else{
		 	$.post( ( target ), {dvn:'yes'}, 
			function(data, status){
				nav[this.url] = true;
				navContent[this.url] = data;
				$('#pane_content').html(navContent[this.url]);
			});//end post
		 }//end else load
       
	});//end on click work



		//this does the disquous create delete so no multiple id's exist on the page
		 	$('#pane_content').on('click', '.comm-trick', function(){
		 		$('.comm-trick').html('<p>Comment?</p>');
		 		var title = $(this).attr("title");
		 		var identifier = $(this).attr("identify");


		 		var disqusJUNK = 
	"<div id='disqus_thread'></div>" +
    "<script type='text/javascript'>" +
        "var disqus_shortname = 'ohdeven';" +
        "var disqus_title = '"+ title+"';" +
        "var disqus_identifier = '"+ identifier+ "';" +
        "(function() {" +
            "var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;" +
            "dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';" +
            "(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);"+
        "})();" +
    "</script>";




		 		$(this).html(disqusJUNK);
		 		
		 	});//end byte controller click

	

});//end doc ready