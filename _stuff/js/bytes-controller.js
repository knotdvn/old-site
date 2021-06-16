


	//targets is an array with the bytes we are targeting
	//code and theory also use byte content,
	//they just target different bytez!
	var targets;
	if(! postsData){
	var postsData =  new Array();
	}
		

	if(posts){
	}else{
		var posts = new Array();
		
	}
	
	
	

function loadBytez(){
	//lets loop through bytes for content
	
	for(var t in targets){
		var purpose = 'bytez/' + targets[t] + ".php";
			if(posts[purpose]){
				//do nothing
				$('#byte_content').prepend(postsData[purpose]);
			}else{
			 	//make a request
			 	$.post( (  purpose ), {dvn2:'yes'}, 
				function(data, status){
					posts[this.url] = true;
					postsData[this.url] = data;
					$('#byte_content').prepend(postsData[this.url]);
					

				});//end post
			}//end if byte is in data array
		
		
	}//end for targets bytez
}//end function Bytes



		
	
       






