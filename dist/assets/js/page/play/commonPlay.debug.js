'use strict';

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/{

	/***/0:
	/***/function _(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(104);

		/***/
	},

	/***/104:
	/***/function _(module, exports, __webpack_require__) {

		'use strict';

		__webpack_require__(105);

		/***/
	},

	/***/105:
	/***/function _(module, exports) {

		'use strict';

		(function (window, $) {
			var baseUrl = 'https://www.myxin.top/jx/api/?url=';
			var videoUrl = $('#vplay').attr('data-src');
			var playUrl = '';
			var $vplay = $('#vplay');
			var piframe = {
				init: function init() {
					var self = this;
					console.log($('.api:first'));
					self.changePort();
					self.videoPlay();

					if ($(window).width() <= 544) {
						$('#ckvip').css('height', '200px');
					}
				},
				videoPlay: function videoPlay() {
					$('.api:first').trigger('click');
				},
				changePort: function changePort() {
					$(document).on('click', '.api', function () {
						var me = $(this);
						var uid = me.find('input').attr('id');
						if (+uid === 1) {
							baseUrl = 'https://www.myxin.top/jx/api/?url=';
						} else if (+uid === 2) {
							baseUrl = 'https://jx.wslmf.com/?url=';
						} else if (+uid === 3) {
							baseUrl = 'https://api.bbbbbb.me/jx/?url=';
						}
						$vplay.attr('src', baseUrl + videoUrl);
						$('.api').each(function () {
							$(this).removeClass('active');
						});
						me.addClass('active');
					});
				}
			};
			piframe.init();
		})(window, jQuery);

		/***/
	}

	/******/ });