jQuery(document).ready(function() {

	$("#orderedlist").addClass("purplebg");
	$("#orderedlist > li").addClass("bluect");
	$("#orderedlist > li:last").hover(function() {
		$(this).addClass("greenct");
    },function(){
		$(this).removeClass("greenct");
    });

	$("#orderedlist2").addClass("yellowbg");
	$("#orderedlist2 > li").addClass("bluect");
	$("#orderedlist2 > li:last").hover(function() {
		$(this).addClass("greenct");
    },function(){
		$(this).removeClass("greenct");
    });

	$("#rating").addClass("cyanbg");

	$("#reset").addClass("graybg");

	$("#form").addClass("orangebg");

	$("#faq").addClass("pinkbg");

	$("#large").addClass("brownbg");
});