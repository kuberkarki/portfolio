/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dev/scripts/modules/slider.js":
/*!***************************************!*\
  !*** ./dev/scripts/modules/slider.js ***!
  \***************************************/
/***/ (() => {

eval("// import $ from 'jquery';\n// import 'slick-carousel';\n// class slider {\n//     constructor() {\n//         this.events();\n//         this.sliderInit();\n//         this.partnerCarousel();\n//         this.articleCarousel();\n//     }\n\n//     slider01() {\n//         return {\n//             slidesToShow: 1,\n//             slidesToScroll: 1,\n//             mobileFirst: true,\n//             arrows: false,\n//             dots: false,\n//             variableWidth: true,\n//             speed: 200,\n//             infinite: true,\n//             autoplay: false,\n//             touchMove: true,\n//             touchThreshold: 5000,\n//             easing: 'linear',\n//             responsive: [\n//                 {\n//                     breakpoint: 1025,\n//                     settings: 'unslick',\n//                 },\n//             ],\n//         };\n//     }\n\n//     slider02() {\n//         return {\n//             slidesToShow: 1,\n//             slidesToScroll: 1,\n//             mobileFirst: true,\n//             arrows: false,\n//             dots: false,\n//             variableWidth: true,\n//             speed: 200,\n//             infinite: true,\n//             autoplay: false,\n//             touchMove: true,\n//             touchThreshold: 5000,\n//             easing: 'linear',\n//             responsive: [\n//                 {\n//                     breakpoint: 1025,\n//                     settings: 'unslick',\n//                 },\n//             ],\n//         };\n//     }\n\n//     testimonialCarousel(elm) {\n//         const nextArrow = elm.parents('.testimonials-carousel').find('.slick-arrows__right'),\n//             previousArrow = elm.parents('.testimonials-carousel').find('.slick-arrows__left');\n//         return {\n//             speed: 200,\n//             autoplay: false,\n//             touchMove: true,\n//             touchThreshold: 5000,\n//             easing: 'linear',\n//             prevArrow: previousArrow,\n//             nextArrow: nextArrow,\n//         };\n//     }\n\n//     partnerCarousel() {\n//         console.log('testing');\n//         return {\n//             initialSlide: 0,\n//             slidesToShow: 1,\n//             slidesToScroll: 1,\n//             mobileFirst: true,\n//             arrows: false,\n//             dots: false,\n//             variableWidth: true,\n//             speed: 200,\n//             infinite: false,\n//             autoplay: false,\n//             touchMove: true,\n//             touchThreshold: 5000,\n//             easing: 'linear',\n//         };\n//     }\n\n//     sliderInit() {\n//         if ($('.slick-01').length) {\n//             $('.slick-01').each((num, elm) => {\n//                 elm = $(elm);\n//                 if (elm.hasClass('slick-initialized')) {\n//                     elm.slick('unslick');\n//                 }\n//                 elm.slick(this.slider01());\n\n//                 elm.find('.slick-current').prev().addClass('prev');\n//                 elm.find('.slick-current').next().addClass('next');\n//                 elm.on('edge', function (event, slick, direction) {\n//                     console.log('edge was hit');\n//                 });\n//                 elm.on('beforeChange', function (event, slick, currentSlide, nextSlide) {\n//                     elm.find('.slick-slide').removeClass('prev').removeClass('next');\n//                 });\n//                 elm.on('afterChange', function (event, slick, currentSlide, nextSlide) {\n//                     elm.find('.slick-current').prev().addClass('prev');\n//                     elm.find('.slick-current').next().addClass('next');\n//                 });\n//             });\n//         }\n\n//         if ($('.slick-02').length) {\n//             $('.slick-02').each((num, elm) => {\n//                 elm = $(elm);\n//                 if (elm.hasClass('slick-initialized')) {\n//                     elm.slick('unslick');\n//                 }\n//                 elm.slick(this.slider02());\n\n//                 var $progressBar = $('.slick-02-progress');\n//                 var $progressBarLabel = $('.slider__label');\n\n//                 elm.on('beforeChange', function (event, slick, currentSlide, nextSlide) {\n//                     var calc = (nextSlide / (slick.slideCount - 1)) * 100;\n\n//                     $progressBar.css('background-size', calc + '% 100%').attr('aria-valuenow', calc);\n\n//                     $progressBarLabel.text(calc + '% completed');\n//                 });\n\n//                 elm.find('.slick-current').prev().addClass('prev');\n//                 elm.find('.slick-current').next().addClass('next');\n//                 elm.on('edge', function (event, slick, direction) {\n//                     console.log('edge was hit');\n//                 });\n//                 elm.on('beforeChange', function (event, slick, currentSlide, nextSlide) {\n//                     elm.find('.slick-slide').removeClass('prev').removeClass('next');\n//                 });\n//                 elm.on('afterChange', function (event, slick, currentSlide, nextSlide) {\n//                     elm.find('.slick-current').prev().addClass('prev');\n//                     elm.find('.slick-current').next().addClass('next');\n//                 });\n//             });\n//         }\n\n//         if ($('.slider-testimonials').length) {\n//             $('.slider-testimonials').each((num, elm) => {\n//                 elm = $(elm);\n//                 const parentElem = elm.parents('.testimonials-carousel');\n//                 if (elm.hasClass('slick-initialized')) {\n//                     elm.slick('unslick');\n//                 }\n//                 elm.slick(this.testimonialCarousel(elm));\n//                 var $statusone = parentElem.find('.slick-item-counter');\n//                 var $statustwo = parentElem.find('.card-testimonials__counter');\n//                 var slidesCount;\n//                 var j = '';\n//                 var k = '';\n//                 elm.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {\n//                     slidesCount = slick.slideCount;\n//                     if (slidesCount < 10) {\n//                         j = 0;\n//                     } else if (slidesCount > 10) {\n//                         k = 0;\n//                     }\n//                     var i = (currentSlide ? currentSlide : 0) + 1;\n//                     $statusone.html(\n//                         `<span class=\"font-weight-bold bg-white text-dark zindex-1 pr-4\">${j}${k}${i}</span><span class=\"font-weight-bold bg-white text-dark zindex-1 pl-4\">${j}${slick.slideCount}</span>`\n//                     );\n//                     $statustwo.html(\n//                         `<span class=\"start\">${j}${i}</span><span class=\"end\">${j}${k}${slick.slideCount}</span>`\n//                     );\n//                 });\n//             });\n//         }\n\n//         if ($('.partner-carousel-slick').length) {\n//             $('.partner-carousel-slick').each((num, elm) => {\n//                 elm = $(elm);\n//                 const parentElem = elm.parents('.partner-carousel');\n//                 if (elm.hasClass('slick-initialized')) {\n//                     elm.slick('unslick');\n//                 }\n//                 elm.slick(this.partnerCarousel());\n//                 elm.on('init', (event, slick) => {\n//                     this.updateSliderCounter(slick, elm);\n//                 });\n//             });\n//         }\n//     }\n\n//     updateSliderCounter(slick, elm, currentIndex) {\n//         var slidesCount;\n//         var parentElm = elm.parents('.partner-carousel');\n//         slidesCount = slick.slideCount;\n//         console.log(slidesCount);\n//         if (slidesCount <= 3) {\n//             parentElm.find('.slick-track').css('marginLeft', '0');\n//             parentElm.find('.partner-carousel-slick').css('justifyContent', 'center');\n//         }\n\n//         if (slidesCount > 3) {\n//             parentElm.find('.slick-track').css('marginLeft', '3px');\n//         }\n//     }\n\n//     resizeEvents() {\n//         // window.addEventListener('resize', this.sliderInit)\n//         $(window).on('resize', () => {\n//             this.sliderInit();\n//         });\n//     }\n\n//     //Our Partners carousel\n//     partnerCarousel() {\n//         var $carousel = $('.partner-carousel-slick');\n\n//         if ($carousel.length) {\n//             var slidesCount;\n\n//             var updateSliderCounter = function (slick, currentIndex) {\n//                 slidesCount = slick.slideCount;\n//                 if (slidesCount <= 3) {\n//                     $('.slick-track').css('marginLeft', '0');\n//                     $('.partner-carousel-slick').css('justifyContent', 'center');\n//                 }\n\n//                 if (slidesCount > 3) {\n//                     $('.slick-track').css('marginLeft', '3px');\n//                 }\n//             };\n\n//             $carousel.on('init', function (event, slick) {\n//                 updateSliderCounter(slick);\n//             });\n//         }\n\n//         $carousel.slick({\n//             initialSlide: 0,\n//             slidesToShow: 1,\n//             slidesToScroll: 1,\n//             mobileFirst: true,\n//             arrows: false,\n//             dots: false,\n//             variableWidth: true,\n//             speed: 200,\n//             infinite: false,\n//             autoplay: false,\n//             touchMove: true,\n//             touchThreshold: 5000,\n//             easing: 'linear',\n//         });\n\n//         $(window).on('resize', function () {\n//             $('.partner-carousel-slick').slick('resize');\n//         });\n//     }\n\n//     //Our Article card carousel\n//     articleCarousel() {\n//         var $carouselArticle = $('.article-card-carousel-slick');\n\n//         if ($carouselArticle.length) {\n//             var slidesCount;\n\n//             var updateSliderCounter = function (slick, currentIndex) {\n//                 slidesCount = slick.slideCount;\n//                 if (slidesCount <= 3) {\n//                     $('.slick-track').css('marginLeft', '0');\n//                     $('.article-card-carousel-slick').css('justifyContent', 'center');\n//                 }\n\n//                 if (slidesCount > 3) {\n//                     $('.slick-track').css('marginLeft', '3px');\n//                 }\n//             };\n\n//             $carouselArticle.on('init', function (event, slick) {\n//                 updateSliderCounter(slick);\n//             });\n//         }\n\n//         $carouselArticle.slick({\n//             initialSlide: 0,\n//             slidesToShow: 1,\n//             slidesToScroll: 1,\n//             mobileFirst: true,\n//             arrows: false,\n//             dots: false,\n//             variableWidth: true,\n//             speed: 200,\n//             infinite: false,\n//             autoplay: false,\n//             touchMove: true,\n//             touchThreshold: 5000,\n//             easing: 'linear',\n//         });\n\n//         $(window).on('resize', function () {\n//             $('.article-card-carousel-slick').slick('resize');\n//         });\n//     }\n\n//     clickEvents() {}\n\n//     events() {\n//         this.clickEvents();\n//         this.resizeEvents();\n//     }\n// }\n\n// export default slider;\n// new slider();\n\n\n//# sourceURL=webpack://webpack-starter-template/./dev/scripts/modules/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./dev/scripts/modules/slider.js"]();
/******/ 	
/******/ })()
;