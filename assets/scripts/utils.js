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

/***/ "./dev/scripts/modules/utils.js":
/*!**************************************!*\
  !*** ./dev/scripts/modules/utils.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"preloadFonts\": () => (/* binding */ preloadFonts),\n/* harmony export */   \"preloadImages\": () => (/* binding */ preloadImages)\n/* harmony export */ });\nconst imagesLoaded = __webpack_require__(/*! imagesloaded */ \"./node_modules/imagesloaded/imagesloaded.js\");\n\n// Preload images\nconst preloadImages = (selector = 'img') => {\n    return new Promise((resolve) => {\n        document.body.classList.add('loading');\n        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);\n        // console.log(selector.length)\n    });\n};\n\n// Preload images\nconst preloadFonts = (id) => {\n    return new Promise((resolve) => {\n        WebFont.load({\n            typekit: {\n                id: id\n            },\n            active: resolve\n        });\n    });\n};\n\n\n\n//# sourceURL=webpack://webpack-starter-template/./dev/scripts/modules/utils.js?");

/***/ }),

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/***/ (function(module) {

eval("/**\n * EvEmitter v2.1.1\n * Lil' event emitter\n * MIT License\n */\n\n( function( global, factory ) {\n  // universal module definition\n  if (  true && module.exports ) {\n    // CommonJS - Browserify, Webpack\n    module.exports = factory();\n  } else {\n    // Browser globals\n    global.EvEmitter = factory();\n  }\n\n}( typeof window != 'undefined' ? window : this, function() {\n\nfunction EvEmitter() {}\n\nlet proto = EvEmitter.prototype;\n\nproto.on = function( eventName, listener ) {\n  if ( !eventName || !listener ) return this;\n\n  // set events hash\n  let events = this._events = this._events || {};\n  // set listeners array\n  let listeners = events[ eventName ] = events[ eventName ] || [];\n  // only add once\n  if ( !listeners.includes( listener ) ) {\n    listeners.push( listener );\n  }\n\n  return this;\n};\n\nproto.once = function( eventName, listener ) {\n  if ( !eventName || !listener ) return this;\n\n  // add event\n  this.on( eventName, listener );\n  // set once flag\n  // set onceEvents hash\n  let onceEvents = this._onceEvents = this._onceEvents || {};\n  // set onceListeners object\n  let onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};\n  // set flag\n  onceListeners[ listener ] = true;\n\n  return this;\n};\n\nproto.off = function( eventName, listener ) {\n  let listeners = this._events && this._events[ eventName ];\n  if ( !listeners || !listeners.length ) return this;\n\n  let index = listeners.indexOf( listener );\n  if ( index != -1 ) {\n    listeners.splice( index, 1 );\n  }\n\n  return this;\n};\n\nproto.emitEvent = function( eventName, args ) {\n  let listeners = this._events && this._events[ eventName ];\n  if ( !listeners || !listeners.length ) return this;\n\n  // copy over to avoid interference if .off() in listener\n  listeners = listeners.slice( 0 );\n  args = args || [];\n  // once stuff\n  let onceListeners = this._onceEvents && this._onceEvents[ eventName ];\n\n  for ( let listener of listeners ) {\n    let isOnce = onceListeners && onceListeners[ listener ];\n    if ( isOnce ) {\n      // remove listener\n      // remove before trigger to prevent recursion\n      this.off( eventName, listener );\n      // unset once flag\n      delete onceListeners[ listener ];\n    }\n    // trigger listener\n    listener.apply( this, args );\n  }\n\n  return this;\n};\n\nproto.allOff = function() {\n  delete this._events;\n  delete this._onceEvents;\n  return this;\n};\n\nreturn EvEmitter;\n\n} ) );\n\n\n//# sourceURL=webpack://webpack-starter-template/./node_modules/ev-emitter/ev-emitter.js?");

/***/ }),

/***/ "./node_modules/imagesloaded/imagesloaded.js":
/*!***************************************************!*\
  !*** ./node_modules/imagesloaded/imagesloaded.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/*!\n * imagesLoaded v5.0.0\n * JavaScript is all like \"You images are done yet or what?\"\n * MIT License\n */\n\n( function( window, factory ) {\n  // universal module definition\n  if (  true && module.exports ) {\n    // CommonJS\n    module.exports = factory( window, __webpack_require__(/*! ev-emitter */ \"./node_modules/ev-emitter/ev-emitter.js\") );\n  } else {\n    // browser global\n    window.imagesLoaded = factory( window, window.EvEmitter );\n  }\n\n} )( typeof window !== 'undefined' ? window : this,\n    function factory( window, EvEmitter ) {\n\nlet $ = window.jQuery;\nlet console = window.console;\n\n// -------------------------- helpers -------------------------- //\n\n// turn element or nodeList into an array\nfunction makeArray( obj ) {\n  // use object if already an array\n  if ( Array.isArray( obj ) ) return obj;\n\n  let isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';\n  // convert nodeList to array\n  if ( isArrayLike ) return [ ...obj ];\n\n  // array of single index\n  return [ obj ];\n}\n\n// -------------------------- imagesLoaded -------------------------- //\n\n/**\n * @param {[Array, Element, NodeList, String]} elem\n * @param {[Object, Function]} options - if function, use as callback\n * @param {Function} onAlways - callback function\n * @returns {ImagesLoaded}\n */\nfunction ImagesLoaded( elem, options, onAlways ) {\n  // coerce ImagesLoaded() without new, to be new ImagesLoaded()\n  if ( !( this instanceof ImagesLoaded ) ) {\n    return new ImagesLoaded( elem, options, onAlways );\n  }\n  // use elem as selector string\n  let queryElem = elem;\n  if ( typeof elem == 'string' ) {\n    queryElem = document.querySelectorAll( elem );\n  }\n  // bail if bad element\n  if ( !queryElem ) {\n    console.error(`Bad element for imagesLoaded ${queryElem || elem}`);\n    return;\n  }\n\n  this.elements = makeArray( queryElem );\n  this.options = {};\n  // shift arguments if no options set\n  if ( typeof options == 'function' ) {\n    onAlways = options;\n  } else {\n    Object.assign( this.options, options );\n  }\n\n  if ( onAlways ) this.on( 'always', onAlways );\n\n  this.getImages();\n  // add jQuery Deferred object\n  if ( $ ) this.jqDeferred = new $.Deferred();\n\n  // HACK check async to allow time to bind listeners\n  setTimeout( this.check.bind( this ) );\n}\n\nImagesLoaded.prototype = Object.create( EvEmitter.prototype );\n\nImagesLoaded.prototype.getImages = function() {\n  this.images = [];\n\n  // filter & find items if we have an item selector\n  this.elements.forEach( this.addElementImages, this );\n};\n\nconst elementNodeTypes = [ 1, 9, 11 ];\n\n/**\n * @param {Node} elem\n */\nImagesLoaded.prototype.addElementImages = function( elem ) {\n  // filter siblings\n  if ( elem.nodeName === 'IMG' ) {\n    this.addImage( elem );\n  }\n  // get background image on element\n  if ( this.options.background === true ) {\n    this.addElementBackgroundImages( elem );\n  }\n\n  // find children\n  // no non-element nodes, #143\n  let { nodeType } = elem;\n  if ( !nodeType || !elementNodeTypes.includes( nodeType ) ) return;\n\n  let childImgs = elem.querySelectorAll('img');\n  // concat childElems to filterFound array\n  for ( let img of childImgs ) {\n    this.addImage( img );\n  }\n\n  // get child background images\n  if ( typeof this.options.background == 'string' ) {\n    let children = elem.querySelectorAll( this.options.background );\n    for ( let child of children ) {\n      this.addElementBackgroundImages( child );\n    }\n  }\n};\n\nconst reURL = /url\\((['\"])?(.*?)\\1\\)/gi;\n\nImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {\n  let style = getComputedStyle( elem );\n  // Firefox returns null if in a hidden iframe https://bugzil.la/548397\n  if ( !style ) return;\n\n  // get url inside url(\"...\")\n  let matches = reURL.exec( style.backgroundImage );\n  while ( matches !== null ) {\n    let url = matches && matches[2];\n    if ( url ) {\n      this.addBackground( url, elem );\n    }\n    matches = reURL.exec( style.backgroundImage );\n  }\n};\n\n/**\n * @param {Image} img\n */\nImagesLoaded.prototype.addImage = function( img ) {\n  let loadingImage = new LoadingImage( img );\n  this.images.push( loadingImage );\n};\n\nImagesLoaded.prototype.addBackground = function( url, elem ) {\n  let background = new Background( url, elem );\n  this.images.push( background );\n};\n\nImagesLoaded.prototype.check = function() {\n  this.progressedCount = 0;\n  this.hasAnyBroken = false;\n  // complete if no images\n  if ( !this.images.length ) {\n    this.complete();\n    return;\n  }\n\n  /* eslint-disable-next-line func-style */\n  let onProgress = ( image, elem, message ) => {\n    // HACK - Chrome triggers event before object properties have changed. #83\n    setTimeout( () => {\n      this.progress( image, elem, message );\n    } );\n  };\n\n  this.images.forEach( function( loadingImage ) {\n    loadingImage.once( 'progress', onProgress );\n    loadingImage.check();\n  } );\n};\n\nImagesLoaded.prototype.progress = function( image, elem, message ) {\n  this.progressedCount++;\n  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;\n  // progress event\n  this.emitEvent( 'progress', [ this, image, elem ] );\n  if ( this.jqDeferred && this.jqDeferred.notify ) {\n    this.jqDeferred.notify( this, image );\n  }\n  // check if completed\n  if ( this.progressedCount === this.images.length ) {\n    this.complete();\n  }\n\n  if ( this.options.debug && console ) {\n    console.log( `progress: ${message}`, image, elem );\n  }\n};\n\nImagesLoaded.prototype.complete = function() {\n  let eventName = this.hasAnyBroken ? 'fail' : 'done';\n  this.isComplete = true;\n  this.emitEvent( eventName, [ this ] );\n  this.emitEvent( 'always', [ this ] );\n  if ( this.jqDeferred ) {\n    let jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';\n    this.jqDeferred[ jqMethod ]( this );\n  }\n};\n\n// --------------------------  -------------------------- //\n\nfunction LoadingImage( img ) {\n  this.img = img;\n}\n\nLoadingImage.prototype = Object.create( EvEmitter.prototype );\n\nLoadingImage.prototype.check = function() {\n  // If complete is true and browser supports natural sizes,\n  // try to check for image status manually.\n  let isComplete = this.getIsImageComplete();\n  if ( isComplete ) {\n    // report based on naturalWidth\n    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );\n    return;\n  }\n\n  // If none of the checks above matched, simulate loading on detached element.\n  this.proxyImage = new Image();\n  // add crossOrigin attribute. #204\n  if ( this.img.crossOrigin ) {\n    this.proxyImage.crossOrigin = this.img.crossOrigin;\n  }\n  this.proxyImage.addEventListener( 'load', this );\n  this.proxyImage.addEventListener( 'error', this );\n  // bind to image as well for Firefox. #191\n  this.img.addEventListener( 'load', this );\n  this.img.addEventListener( 'error', this );\n  this.proxyImage.src = this.img.currentSrc || this.img.src;\n};\n\nLoadingImage.prototype.getIsImageComplete = function() {\n  // check for non-zero, non-undefined naturalWidth\n  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671\n  return this.img.complete && this.img.naturalWidth;\n};\n\nLoadingImage.prototype.confirm = function( isLoaded, message ) {\n  this.isLoaded = isLoaded;\n  let { parentNode } = this.img;\n  // emit progress with parent <picture> or self <img>\n  let elem = parentNode.nodeName === 'PICTURE' ? parentNode : this.img;\n  this.emitEvent( 'progress', [ this, elem, message ] );\n};\n\n// ----- events ----- //\n\n// trigger specified handler for event type\nLoadingImage.prototype.handleEvent = function( event ) {\n  let method = 'on' + event.type;\n  if ( this[ method ] ) {\n    this[ method ]( event );\n  }\n};\n\nLoadingImage.prototype.onload = function() {\n  this.confirm( true, 'onload' );\n  this.unbindEvents();\n};\n\nLoadingImage.prototype.onerror = function() {\n  this.confirm( false, 'onerror' );\n  this.unbindEvents();\n};\n\nLoadingImage.prototype.unbindEvents = function() {\n  this.proxyImage.removeEventListener( 'load', this );\n  this.proxyImage.removeEventListener( 'error', this );\n  this.img.removeEventListener( 'load', this );\n  this.img.removeEventListener( 'error', this );\n};\n\n// -------------------------- Background -------------------------- //\n\nfunction Background( url, element ) {\n  this.url = url;\n  this.element = element;\n  this.img = new Image();\n}\n\n// inherit LoadingImage prototype\nBackground.prototype = Object.create( LoadingImage.prototype );\n\nBackground.prototype.check = function() {\n  this.img.addEventListener( 'load', this );\n  this.img.addEventListener( 'error', this );\n  this.img.src = this.url;\n  // check if image is already complete\n  let isComplete = this.getIsImageComplete();\n  if ( isComplete ) {\n    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );\n    this.unbindEvents();\n  }\n};\n\nBackground.prototype.unbindEvents = function() {\n  this.img.removeEventListener( 'load', this );\n  this.img.removeEventListener( 'error', this );\n};\n\nBackground.prototype.confirm = function( isLoaded, message ) {\n  this.isLoaded = isLoaded;\n  this.emitEvent( 'progress', [ this, this.element, message ] );\n};\n\n// -------------------------- jQuery -------------------------- //\n\nImagesLoaded.makeJQueryPlugin = function( jQuery ) {\n  jQuery = jQuery || window.jQuery;\n  if ( !jQuery ) return;\n\n  // set local variable\n  $ = jQuery;\n  // $().imagesLoaded()\n  $.fn.imagesLoaded = function( options, onAlways ) {\n    let instance = new ImagesLoaded( this, options, onAlways );\n    return instance.jqDeferred.promise( $( this ) );\n  };\n};\n// try making plugin\nImagesLoaded.makeJQueryPlugin();\n\n// --------------------------  -------------------------- //\n\nreturn ImagesLoaded;\n\n} );\n\n\n//# sourceURL=webpack://webpack-starter-template/./node_modules/imagesloaded/imagesloaded.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dev/scripts/modules/utils.js");
/******/ 	
/******/ })()
;