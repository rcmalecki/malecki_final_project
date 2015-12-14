$(document).ready(function() {	
	//code for main nav begins
		if (pageNum == "") {
		var pageNum = 1;
		};
		if (pageNum < 0) {
			var pageNum = 1;
		};
		pageNum = 1; //start page
		pageSize = 7; //number of pages
		
		showPage = function(p) {
				
				if (p <= pageSize && p > 0){
					pageNum = p;
					$(".page").hide();
					$("#page"+pageNum).fadeIn(1500);
					console.log(pageNum);
				};
		}
		
		$("#left").click(
			function() {
				showPage(pageNum-1);
			});
			
		$("#right").click(
			function() {
				showPage(pageNum+1);
			});	
		
		$("#left").hover(
		  function(){
			$(this).animate({marginRight:'20px'},'slow')
		  },
		  function() {
			$(this).animate({marginRight:'0px'},'slow')
		  });
		  
		$("#right").hover(
		  function(){
			$(this).animate({marginLeft:'20px'},'slow')
		  },
		  function() {
			$(this).animate({marginLeft:'0px'},'slow')
		  });
		
		$(".page").hide();
		$("#page1").fadeIn(1500);
		
		$("#nav1").click(function () {
			showPage(1);
		});
		
		$("#nav2").click(function () {
			showPage(2);
		});
		
		$("#nav3").click(function () {
			showPage(3);
		});
		
		$("#nav4").click(function () {
			showPage(4);
		});
		
		$("#nav5").click(function () {
			showPage(5);
		});
		
		$("#nav6").click(function () {
			showPage(6);
		});
		
		$("#nav7").click(function () {
			showPage(7);
		});
	//code for main nav ends

	
	//code for image hover effects begins
		$("#oldface").hover(
			function() {
				$(this).attr("src", "images/oldmanface_hover.png");
			},
			function() {
				$(this).attr("src", "images/oldmanface.png");
			});
		
		$("#doorknob").hover(
			function() {
				$(this).attr("src", "images/old-doorknob_hover.png");
			},
			function() {
				$(this).attr("src", "images/old-doorknob.png");
			});	
		
		$("#eyes").hover(
			function() {
				$(this).attr("src", "images/eyesinthedark_hover.png");
			},
			function() {
				$(this).attr("src", "images/eyesinthedark.png");
			});	
		
		$("#spookybedroom").hover(
			function() {
				$(this).attr("src", "images/spookybedroom_hover.png");
			},
			function() {
				$(this).attr("src", "images/spookybedroom.png");
			});	
		
		$("#oldmansleeping").hover(
			function() {
				$(this).attr("src", "images/oldmansleeping_hover.png");
			},
			function() {
				$(this).attr("src", "images/oldmansleeping.png");
			});

		$("#skeletondrum").hover(
			function() {
				$(this).attr("src", "images/skeletondrum_hover.png");
			},
			function() {
				$(this).attr("src", "images/skeletondrum.png");
			});
		
		$("#buryunderfloor").hover(
			function() {
				$(this).attr("src", "images/buryunderfloor_hover.png");
			},
			function() {
				$(this).attr("src", "images/buryunderfloor.png");
			});
			
		$("#skeletondrum").hover(
			function() {
				$(this).attr("src", "images/skeletondrum_hover.png");
			},
			function() {
				$(this).attr("src", "images/skeletondrum.png");
			});
			
		$("#skeletonfloor").hover(
			function() {
				$(this).attr("src", "images/skeletonunderfloor_hover.png");
			},
			function() {
				$(this).attr("src", "images/skeletonunderfloor.png");
			});
			
		$("#hearthead").hover(
			function() {
				$(this).attr("src", "images/hearthead_hover.png");
			},
			function() {
				$(this).attr("src", "images/hearthead.png");
			});
	//code for image hover effects ends
});
