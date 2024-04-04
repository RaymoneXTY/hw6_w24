var video=document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay=false;
	video.loop=false;
	console.log("autoplay and loop disabled");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log("video playing");
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	console.log("video paused");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.90;
	console.log("New speed is "+video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.90;
	console.log("New speed is "+video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime+15>video.duration){
		video.currentTime<10;
		console.log("Going back to beginning");
		// set the video time to the full duration
		video.currentTime=0;
		console.log("current time is "+video.currentTime);

	}
	else{
		video.currentTime+=10;
		console.log("current time is "+video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted=false;
		document.querySelector("#mute").innerHTML="Mute";
		console.log("Unmuted");
	}
	else{
		video.muted=true;
		document.querySelector("#mute").innerHTML="Unmute";
		console.log("Muted");
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log(this.value);
	video.volume=this.value/100;
	document.querySelector("#volume").innerHTML=video.volume*100+"%";
	console.log("Volume is "+video.volume*100+"%");
});

document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
		console.log("Vintage");
});

document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
		console.log("Original");
});