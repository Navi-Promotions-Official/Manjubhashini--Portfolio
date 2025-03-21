/*
Author       : themes_mountain
Template Name: Janemon - Personal Portfolio Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/	
			
		/*START MENU JS*/		
		function windowScroll() {
			const navbar = document.getElementById("navbar");
			if (
				document.body.scrollTop >= 50 ||
				document.documentElement.scrollTop >= 50
			) {
				navbar.classList.add("nav-sticky");
			} else {
				navbar.classList.remove("nav-sticky");
			}
		}

		window.addEventListener('scroll', (ev) => {
			ev.preventDefault();
			windowScroll();
		})	  	
		/*END MENU JS*/

		/*START PROGRESS BAR*/
	    $('.progress-bar > span').each(function(){
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition' : 'width 2s'
			});
			
			setTimeout(function() {
				$this.appear(function() {
						$this.css('width', width + '%');
				});
			}, 500);
		});
		/*END PROGRESS BAR*/	

		/* START COUNTDOWN JS*/
		$('.counter_feature').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter-num').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* END COUNTDOWN JS */		

		/* START JQUERY LIGHTBOX*/
		jQuery('.lightbox').venobox({
			numeratio: true,
			infinigall: true
		});	
		/* END JQUERY LIGHTBOX*/	

		/* START MIX JS */
		$('.portfolio_item').mixItUp({
		
		});		
			
	}); 		

	/* START PARALLAX JS */
	(function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	/* END PARALLAX JS  */
	
	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
			
})(jQuery);


document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter");
    const skillBoxes = document.querySelectorAll(".skill-box");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const category = this.getAttribute("data-category");

            skillBoxes.forEach(skill => {
                if (category === "all" || skill.classList.contains(category)) {
                    skill.style.display = "block";
                } else {
                    skill.style.display = "none";
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function setupFilter(sectionId, filterClass, itemClass) {
        const filters = document.querySelectorAll(`#${sectionId} .${filterClass}`);
        const items = document.querySelectorAll(`#${sectionId} .${itemClass}`);

        function showAllItems() {
            items.forEach(item => item.style.display = "block");
        }

        // Show all items by default when the page loads
        showAllItems();

        filters.forEach(filter => {
            filter.addEventListener("click", function () {
                filters.forEach(f => f.classList.remove("active"));
                this.classList.add("active");

                const filterValue = this.getAttribute("data-filter");

                if (filterValue === "all") {
                    showAllItems();
                } else {
                    items.forEach(item => {
                        if (item.classList.contains(filterValue.substring(1))) {
                            item.style.display = "block";
                        } else {
                            item.style.display = "none";
                        }
                    });
                }
            });
        });
    }

    // Separate functions for each section
    setupFilter("service", "filter", "mix"); // My Skills Section
    setupFilter("tech-stack", "techstack-filter", "mix"); // Tech Stack Section
});

function openModal(imageSrc, title, description, githubURL, liveDemoURL, event) {
    if (event) {
        event.preventDefault(); // Prevents the page from moving up
    }
    
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    
    // Update GitHub and Live Demo Links
    document.getElementById("githubLink").href = githubURL;
    document.getElementById("liveDemoLink").href = liveDemoURL;
    
    // Display modal without affecting page scroll
    document.getElementById("imageModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}



