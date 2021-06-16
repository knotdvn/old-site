


	var posts = {};
	var postsData = {};
	var max = '0';
	var min = '0';

	//one that loads first	 
	var target='bytez/0.php';

		




		 	$.post( (  target ), {dvn2:'yes'}, 
			function(data, status){
				posts[this.url] = true;
				postsData[this.url] = data;
				$('#byte_content').prepend(postsData[this.url]);

			});//end post




		 	$('#byte_content').on('click', '.comm-trick', function(){
		 		$('.comm-trick').html('<p>Comment?</p>');
		 		var title = $(this).attr("title");
		 		var identifier = $(this).attr("identify");
console.log(disqusJUNK);

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
		 		
		 	});

	
       






