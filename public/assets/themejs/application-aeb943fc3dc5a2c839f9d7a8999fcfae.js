function hidePreLoader(){gfx("#preloader").hide()}function testAnim(e){gfx("#animationSandbox").removeClass().addClass(e+" animation animation-active").one("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd",function(){gfx(this).removeClass()})}var gfx=jQuery;gfx.noConflict(),gfx("body").queryLoader2({barColor:"#EB2D2E",backgroundColor:"#fff",percentage:!0,barHeight:1,completeAnimation:"grow",minimumTime:100,onLoadComplete:hidePreLoader}),!function(e){e(function(){e("[data-toggle=tooltip-boot]").tooltip(),e("[data-toggle=popover]").popover()})}(window.jQuery),gfx(".navbar .dropdown").hover(function(){gfx(this).addClass("open").find(".dropdown-menu").first().stop(!0,!0).slideDown(300)},function(){gfx(this).removeClass("open").find(".dropdown-menu").first().stop(!0,!0).hide(300)}),gfx(".navbar .dropdown > a").click(function(){location.href=this.href}),gfx(document).on("click",".gfx-nav .dropdown-menu",function(e){e.stopPropagation()}),gfx(function(){gfx("a.smooth-scroll[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var e=gfx(this.hash);if(e=e.length?e:gfx("[name="+this.hash.slice(1)+"]"),e.length)return gfx("html,body").animate({scrollTop:e.offset().top},2e3,"easeInOutExpo"),!1}})}),gfx(function(){function e(){return window.pageYOffset||document.documentElement.scrollTop}gfx(".header-main").stickOnScroll({topOffset:0,setParentOnStick:!0});var o=600;gfx(window).scroll(function(){var t=e();t>=o?gfx(".header-main").addClass("shrink"):gfx(".header-main").removeClass("shrink")})}),gfx(document).ready(function(){gfx(".slide-panel-btn").click(function(){return gfx("#slide-panel").slideToggle(250),gfx(this).toggleClass("active"),!1})}),jQuery(document).ready(function(){jQuery(".tp-banner").show().revolution({dottedOverlay:"threexthree",delay:16e3,startwidth:1170,startheight:700,hideThumbs:200,thumbWidth:100,thumbHeight:50,thumbAmount:3,navigationType:"none",navigationArrows:"solo",navigationStyle:"preview4",touchenabled:"on",onHoverStop:"on",swipe_velocity:.7,swipe_min_touches:1,swipe_max_touches:1,drag_block_vertical:!1,parallax:"scroll",parallaxBgFreeze:"on",parallaxLevels:[10,20,30,40,50,60,70,80,90,100],keyboardNavigation:"off",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,shadow:0,fullWidth:"off",fullScreen:"on",spinner:"spinner4",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",autoHeight:"off",forceFullWidth:"off",hideThumbsOnMobile:"off",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResolution:0,hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,startWithSlide:0,fullScreenOffsetContainer:".header-wrapper"})}),jQuery(document).ready(function(){jQuery(".shop-slider").show().revolution({dottedOverlay:"none",delay:16e3,startwidth:1170,startheight:600,hideThumbs:200,thumbWidth:100,thumbHeight:50,thumbAmount:3,navigationType:"none",navigationArrows:"solo",navigationStyle:"preview4",touchenabled:"on",onHoverStop:"on",swipe_velocity:.7,swipe_min_touches:1,swipe_max_touches:1,drag_block_vertical:!1,parallax:"scroll",parallaxBgFreeze:"on",parallaxLevels:[10,20,30,40,50,60,70,80,90,100],keyboardNavigation:"off",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,shadow:0,fullWidth:"off",fullScreen:"off",spinner:"spinner4",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",autoHeight:"off",forceFullWidth:"off",hideThumbsOnMobile:"off",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResolution:0,hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,startWithSlide:0,fullScreenOffsetContainer:".header-wrapper"})}),gfx(document).ready(function(){gfx(".portfolio .portfolio-grid").colio({theme:"gfx",placement:"after",scrollOffset:60,expandLink:".portfolio-expand",expandDuration:900,expandEasing:"swing",collapseDuration:500,collapseEasing:"swing",scrollDuration:1300,scrollEasing:"swing",syncScroll:!0,contentFadeIn:900,contentFadeOut:300,contentDelay:600,closeText:"<span>X</span>",nextText:"<span></span>",prevText:"<span></span>",hiddenItems:".isotope-hidden",onExpand:function(){gfx(".colio").resize()},onContent:function(e){gfx(".carousel-box-portfolio .carousel",e).each(function(){gfx(this).closest(".carousel-box-portfolio");gfx(this).owlCarousel({autoPlay:gfx(this).data("carousel-autoplay"),items:gfx(this).data("carousel-items"),navigation:gfx(this).data("carousel-nav"),pagination:gfx(this).data("carousel-pagination"),singleItem:gfx(this).data("carousel-single"),transitionStyle:gfx(this).data("carousel-transition"),slideSpeed:gfx(this).data("carousel-speed"),navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]})}),gfx().magnificPopup&&(gfx("[data-lightbox=image], .lightbox").each(function(){gfx(this).magnificPopup({type:"image",mainClass:"mfp-fade",removalDelay:300,fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeOnContentClick:!0})}),gfx("[data-lightbox=video], [data-lightbox=map], [data-lightbox=iframe], .lightbox-video, .lightbox-map, .lightbox-iframe").each(function(){gfx(this).magnificPopup({mainClass:"mfp-fade",removalDelay:300,fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",type:"iframe",fixedContentPos:!1})}),gfx("[data-lightbox=gallery], .lightbox-gallery").each(function(){gfx(this).magnificPopup({mainClass:"mfp-fade",removalDelay:300,fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",type:"image",delegate:"a",gallery:{enabled:!0}})}))}});var e=gfx(".portfolio-grid");e.imagesLoaded(function(){e.isotope({})});var o="*",t=function(o){e.isotope({filter:o}).trigger("colio","excludeHidden")};gfx("#filters a").click(function(){var o=gfx(this).attr("data-filter");return e.isotope({filter:o}),!1});var i=gfx(".option-set"),a=i.find("a");a.click(function(){var e=gfx(this);if(e.hasClass("selected"))return!1;var o=e.parents(".option-set");o.find(".selected").removeClass("selected"),e.addClass("selected")}),t(o)}),gfx(".carousel-box .carousel").each(function(){gfx(this).closest(".carousel-box");gfx(this).owlCarousel({autoPlay:gfx(this).data("carousel-autoplay"),items:gfx(this).data("carousel-items"),navigation:gfx(this).data("carousel-nav"),pagination:gfx(this).data("carousel-pagination"),singleItem:gfx(this).data("carousel-single"),transitionStyle:gfx(this).data("carousel-transition"),slideSpeed:gfx(this).data("carousel-speed"),navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],lazyLoad:!0,autoHeight:!0})}),gfx(document).ready(function(){function e(){var e=this.currentItem;gfx("#thumb-sync").find(".owl-item").removeClass("synced").eq(e).addClass("synced"),void 0!==gfx("#thumb-sync").data("owlCarousel")&&o(e)}function o(e){var o=i.data("owlCarousel").owl.visibleItems,t=e,a=!1;for(var n in o)if(t===o[n])var a=!0;a===!1?t>o[o.length-1]?i.trigger("owl.goTo",t-o.length+2):(t-1===-1&&(t=0),i.trigger("owl.goTo",t)):t===o[o.length-1]?i.trigger("owl.goTo",o[1]):t===o[0]&&i.trigger("owl.goTo",t-1)}var t=gfx("#full-sync"),i=gfx("#thumb-sync");t.owlCarousel({singleItem:!0,slideSpeed:1e3,navigation:!1,pagination:!1,transitionStyle:"fade",afterAction:e,responsiveRefreshRate:200}),i.owlCarousel({items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3],itemsTablet:[768,3],itemsMobile:[479,2],pagination:!1,responsiveRefreshRate:100,afterInit:function(e){e.find(".owl-item").eq(0).addClass("synced")}}),gfx("#thumb-sync").on("click",".owl-item",function(e){e.preventDefault();var o=gfx(this).data("owlItem");t.trigger("owl.goTo",o)})}),gfx(function(){gfx.stellar({horizontalScrolling:!1,verticalOffset:0})}),gfx().magnificPopup&&(gfx("[data-lightbox=image], .lightbox").each(function(){gfx(this).magnificPopup({type:"image",mainClass:"mfp-fade",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",removalDelay:300,closeOnContentClick:!0})}),gfx("[data-lightbox=video], [data-lightbox=map], [data-lightbox=iframe], .lightbox-video, .lightbox-map, .lightbox-iframe").each(function(){gfx(this).magnificPopup({mainClass:"mfp-fade",removalDelay:300,fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",type:"iframe",fixedContentPos:!1})}),gfx("[data-lightbox=gallery], .lightbox-gallery").each(function(){gfx(this).magnificPopup({mainClass:"mfp-fade",removalDelay:300,fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",type:"image",delegate:"a",gallery:{enabled:!0}})})),gfx(document).ready(function(){gfx(".ToolTip").OpieTooltip({})}),gfx(".animation").waypoint(function(){gfx(this).addClass("animation-active")},{offset:"100%",triggerOnce:!0}),gfx(document).ready(function(){if(gfx("#google-map-footer").length>0){var e=new google.maps.LatLng(37.331789,-122.02962),o={zoom:17,center:new google.maps.LatLng(37.331789,-122.02962),mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,scrollwheel:!1,zoomControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.SMALL},draggable:!0,navigationControl:!1,styles:[{featureType:"administrative",elementType:"all",stylers:[{visibility:"on"},{saturation:-100},{lightness:20}]},{featureType:"road",elementType:"all",stylers:[{visibility:"on"},{saturation:-100},{lightness:40}]},{featureType:"water",elementType:"all",stylers:[{visibility:"on"},{saturation:-10},{lightness:30}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{visibility:"simplified"},{saturation:-60},{lightness:10}]},{featureType:"landscape.natural",elementType:"all",stylers:[{visibility:"simplified"},{saturation:-60},{lightness:60}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"},{saturation:-100},{lightness:60}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"},{saturation:-100},{lightness:60}]}]},t=new google.maps.Map(document.getElementById("google-map-footer"),o);google.maps.event.addDomListener(window,"resize",function(){var e=t.getCenter();google.maps.event.trigger(t,"resize"),t.setCenter(e)});var i='<div class="map-marker"><h4 class="color-dark xbold">AVENDOR</h4><p>United States of America</p><p>New York. 123 Fifth Avenue</p></div>',a=new google.maps.InfoWindow({content:i}),n=new google.maps.MarkerImage("/assets/google-marker.png",new google.maps.Size(157,70),new google.maps.Point(0,0),new google.maps.Point(75,50)),l=new google.maps.LatLng(37.331789,-122.02962),s=new google.maps.Marker({position:l,map:t,icon:n,zIndex:3});google.maps.event.addListener(s,"click",function(){a.open(t,s)}),gfx(".gmap-button").click(function(){gfx("#google-map-footer").slideToggle(300,function(){google.maps.event.trigger(t,"resize"),t.setCenter(e)}),gfx(this).toggleClass("show-map")})}if(gfx("#google-map").length>0){var e=new google.maps.LatLng(37.331789,-122.02962),o={zoom:17,center:new google.maps.LatLng(37.331789,-122.02962),mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,scrollwheel:!1,zoomControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.SMALL},draggable:!0,navigationControl:!1,styles:[{featureType:"administrative",elementType:"all",stylers:[{visibility:"on"},{saturation:-100},{lightness:20}]},{featureType:"road",elementType:"all",stylers:[{visibility:"on"},{saturation:-100},{lightness:40}]},{featureType:"water",elementType:"all",stylers:[{visibility:"on"},{saturation:-10},{lightness:30}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{visibility:"simplified"},{saturation:-60},{lightness:10}]},{featureType:"landscape.natural",elementType:"all",stylers:[{visibility:"simplified"},{saturation:-60},{lightness:60}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"},{saturation:-100},{lightness:60}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"},{saturation:-100},{lightness:60}]}]},t=new google.maps.Map(document.getElementById("google-map"),o);google.maps.event.addDomListener(window,"resize",function(){var e=t.getCenter();google.maps.event.trigger(t,"resize"),t.setCenter(e)});var i='<div class="map-marker"><h4 class="color-dark xbold">AVENDOR</h4><p>United States of America</p><p>New York. 123 Fifth Avenue</p></div>',a=new google.maps.InfoWindow({content:i}),n=new google.maps.MarkerImage("/assets/google-marker.png",new google.maps.Size(157,70),new google.maps.Point(0,0),new google.maps.Point(75,50)),l=new google.maps.LatLng(37.331789,-122.02962),s=new google.maps.Marker({position:l,map:t,icon:n,zIndex:3});google.maps.event.addListener(s,"click",function(){a.open(t,s)}),gfx(".gmap-button").click(function(){gfx("#google-map").slideToggle(300,function(){google.maps.event.trigger(t,"resize"),t.setCenter(e)}),gfx(this).toggleClass("show-map")})}}),gfx(".team-wrapper").on("click",function(){gfx(this).toggleClass("cardtoggle").siblings().removeClass("cardtoggle")}),gfx(".counter").waypoint(function(){gfx(this).addClass("timer"),gfx(".timer").countTo()},{offset:"100%",triggerOnce:!0}),gfx(".timer").countTo(),gfx(document).ready(function(){jQuery(".chart").waypoint(function(){gfx(".progress-pie .chart").each(function(){gfx(this).closest(".progress-pie");gfx(this).easyPieChart({barColor:gfx(this).data("bar-color"),trackColor:gfx(this).data("track-color"),scaleColor:gfx(this).data("scale-color"),lineWidth:gfx(this).data("line-width"),lineCap:"butt",scaleLength:6,size:180,rotate:0,animate:2e3})})},{offset:"100%",triggerOnce:!0})}),gfx(".qup").on("click",function(){gfx(".input-quantity").val(parseInt(gfx(".input-quantity").val())+1)}),gfx(".qdown").on("click",function(){gfx(".input-quantity").val(parseInt(gfx(".input-quantity").val())-1)}),gfx(document).ready(function(){gfx(window).scroll(function(){gfx(this).scrollTop()>100?gfx(".scrollup").fadeIn():gfx(".scrollup").fadeOut()})}),gfx(function(){var e="May 12, 2015 09:03:25";gfx(".countdown.styled").countdown({date:e,render:function(e){gfx(this.el).html("<div class='col-md-3 col-sm-6'><div class='counter-block'>"+this.leadingZeros(e.days,3)+" <span>days</span></div></div><div class='col-md-3 col-sm-6'><div class='counter-block'>"+this.leadingZeros(e.hours,2)+" <span>hrs</span></div></div><div class='col-md-3 col-sm-6'><div class='counter-block'>"+this.leadingZeros(e.min,2)+" <span>min</span></div></div><div class='col-md-3 col-sm-6'><div class='counter-block'>"+this.leadingZeros(e.sec,2)+" <span>sec</span></div></div>")}})}),gfx(document).ready(function(){gfx(".js--triggerAnimation").click(function(){var e=gfx(".js--animations").val();testAnim(e)})});