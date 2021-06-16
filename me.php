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
	<a class="perma" href="<?php echo $URL; ?>"><p>Permalink to this page.</p></a>

	<p>My name is <span class="tag">&#60</span>Deven<span class="tag">&#62</span>, I've been Divin' and /Divin'
 	<p class="simple">If you're looking for my <a href="_stuff/ResumeDevenPitcher2014.pdf">resume</a> or my <a href="https://github.com/knotdvn/oobs/blob/master/oob_js/js/oob.js">GitHub</a>, look no farther.<p> 
<div class="cccontainer">
		<div class="me-box">
			<img width="350px" src="_stuff/img/me/dogs.jpg" alt="Deven poses with a painting of two dogs" />
	 		<p>I am 26 years old and from the small town of Volney, NY. I've worked as a front/back end web engieer for a few years now, but there is more to me than that. This is my cubicle, standing desk, and classy painting.</p>
	  </div>

	<div class="me-box">
	  	<img width="350px" src="_stuff/img/me/ms.jpeg" alt="Deven poses with microsoft" />
	  	<p>I'd like to think I have my feet firmly planted in CS, (Computer Science) as this trip to Redmond seems to indicate.</p>
	</div>

	<div class="me-box">
	  	<img width="350px" src="_stuff/img/me/tower.png" alt="Deven CLimbs a barbed wire tower" />
	  	<p>I make every effort to reach new heights. I see every difficult situation as a challenge to improve myself upon. Take note, barbed wire and a tall spire is not enough to keep me out! </p>
	</div>

	<div class="me-box">
	  	<img width="350px" src="_stuff/img/me/moose.jpg" alt="Deven kayaks with a moose" />
	  	<p>I volunteer with an annual floating art parade down Onondaga Creek through downtown Syracuse. I keep floating art pieces from snagging along the sides while onlookers ooh and aww.</p>
	</div>

	<div class="me-box">
	  	<img width="350px" src="_stuff/img/me/leap.jpg" alt="Deven Jumps from a lighthouse" />
	  	<p>Sometimes you just have to take a big leap. With calculations made and a course plotted, throw yourself into the world and make waves. This is a 20ft lighthouse jump into lake Ontario.</p>
	</div>

	

	<div class="me-box">
		<iframe width="350" height="197" src="//www.youtube.com/embed/5FZmqgcR-Yk" frameborder="0" allowfullscreen></iframe>
		<p>This is my idea of fun. A rope swing hidden on the Oswego River.</p>
	</div>

</div>


	<a class="perma" href="<?php echo $URL; ?>"><p>Permalink to this page.</p></a>
<?php
if($static){
	include('footer.php');
}//end static