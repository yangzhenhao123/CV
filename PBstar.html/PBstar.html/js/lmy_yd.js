$(function(){
$(".pb_top_01 img").toggle(function(){
	$(".pb_top_01 img").attr("src","img/28_01.png");
	$("audio").attr("loop","loop");
	$(".play").trigger('click');
	
},function(){
	$(".pb_top_01 img").attr("src","img/28.png");
	$("audio").attr("loop","");
	$(".play").trigger('click');
})
})

$(document).ready(function () { 
	$("#song_01").click(function () {
	 	$(".song_1").removeClass("song_3");
	 	$("#song_01").addClass("song_3");
	 	$("audio").attr("src","audio.mp3");
		$("#pb_music_left_icon img").attr("src","img/17.png");
	 });
	 $("#song_02").click(function () {
	 	$(".song_1").removeClass("song_3");
	 	$("#song_02").addClass("song_3");
	 	$("audio").attr("src","jq22com.mp3");
		$("#pb_music_left_icon img").attr("src","img/17.png");
	 });
	  $("#song_03").click(function () {
	 	$(".song_1").removeClass("song_3");
	 	$("#song_03").addClass("song_3");
	 	$("audio").attr("src","jq22com.mp3");
		$("#pb_music_left_icon img").attr("src","img/17.png");
	 });
	 $("#song_04").click(function () {
	 	$(".song_1").removeClass("song_3");
	 	$("#song_04").addClass("song_3");
	 	$("audio").attr("src","jq22com.mp3");
		$("#pb_music_left_icon img").attr("src","img/17.png");
	 });
	 $("#song_05").click(function () {
	 	$(".song_1").removeClass("song_3");
	 	$("#song_05").addClass("song_3");
	 	$("audio").attr("src","jq22com.mp3");
		$("#pb_music_left_icon img").attr("src","img/17.png");
	 });
	 $("#song_06").click(function () {
	 	$(".song_1").removeClass("song_3");
	 	$("#song_06").addClass("song_3");
	 	$("audio").attr("src","jq22com.mp3");
		$("#pb_music_left_icon img").attr("src","img/17.png");
	 });
	 $("#pb_music_left_icon").toggle(function(){
		$("#pb_music_left_icon img").attr("src","img/17_01.png");
		$("audio").attr("loop","loop");
		$(".play").trigger('click');
		
	},function(){
		$("#pb_music_left_icon img").attr("src","img/17.png");
		$("audio").attr("loop","");
		$(".play").trigger('click');
	})
	 
});


$(document).ready(function () { 
	$(".pb_video_right_img").click(function () {
	 	$("#pb_video").css("display","block");
	 });
	 
});