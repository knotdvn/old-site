<?php
$URL = $_SERVER['PHP_SELF'];
$static = true;
if(  isset($_POST['dvn']) ){
	$static= false;
}//end if template or static


if($static){

	include('header.php');
	include('nav.php');
}//end static
?>
	<p>bytez are like blog posts I guess, little bits of content.</p>
	<div id="byte_content">
	</div>



	<a class="perma" href="<?php echo $URL; ?>"><p>Permalink to this page.</p></a>








<script>
	//targets is an array with the bytes we are targeting
	var targets=["0"];
	
	loadBytez();
</script>


<?php
if($static){
	include('footer.php');
}//end static