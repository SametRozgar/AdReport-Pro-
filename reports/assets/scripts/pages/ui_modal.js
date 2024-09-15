/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/pages/ui_modal.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/pages/ui_modal.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var UI_modals = function () {\n  var handleModalColor = function handleModalColor() {\n    $('body').on('click', '.exampleColorModal', function () {\n      color = $(this).attr('data-color');\n      $('#exampleColorModal').modal();\n    });\n    $('#exampleColorModal').on('show.bs.modal', function () {\n      $(this).addClass('modal-' + color);\n      $(this).find('.modal-title').text(color[0].toUpperCase() + color.substring(1) + ' Modal');\n    });\n    $('#exampleColorModal').on('hidden.bs.modal', function () {\n      $(this).removeClass('modal-' + color);\n      $(this).find('.modal-title').text('Colored Modal');\n    });\n  };\n  var handleModalSizes = function handleModalSizes() {\n    $('body').on('click', '.exampleModalSize', function () {\n      size = $(this).attr('data-size');\n      $('#exampleModalSize').modal();\n    });\n    $('#exampleModalSize').on('show.bs.modal', function () {\n      $(this).find('.modal-dialog').addClass('modal-' + size);\n    });\n    $('#exampleModalSize').on('hidden.bs.modal', function () {\n      $(this).find('.modal-dialog').removeClass('modal-' + size);\n    });\n  };\n  var handleVaryingModal = function handleVaryingModal() {\n    $('#exampleVarying').on('show.bs.modal', function (e) {\n      var button = $(e.relatedTarget);\n      var recipient = button.data('recipient');\n      var modal = $(this);\n      modal.find('.modal-title').text('New message to ' + recipient);\n      modal.find('.modal-body input').val(recipient);\n    });\n  };\n  return {\n    init: function init() {\n      handleModalColor();\n      handleModalSizes();\n      handleVaryingModal();\n    }\n  };\n}();\n$(function () {\n  UI_modals.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvcGFnZXMvdWlfbW9kYWwuanM/MTY3ZCJdLCJuYW1lcyI6WyJVSV9tb2RhbHMiLCJoYW5kbGVNb2RhbENvbG9yIiwiJCIsIm9uIiwiY29sb3IiLCJhdHRyIiwibW9kYWwiLCJhZGRDbGFzcyIsImZpbmQiLCJ0ZXh0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJyZW1vdmVDbGFzcyIsImhhbmRsZU1vZGFsU2l6ZXMiLCJzaXplIiwiaGFuZGxlVmFyeWluZ01vZGFsIiwiZSIsImJ1dHRvbiIsInJlbGF0ZWRUYXJnZXQiLCJyZWNpcGllbnQiLCJkYXRhIiwidmFsIiwiaW5pdCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsU0FBUyxHQUFHLFlBQVk7RUFFeEIsSUFBSUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBQSxFQUFlO0lBQy9CQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsWUFBWTtNQUNwREMsS0FBSyxHQUFHRixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNHLElBQUksQ0FBQyxZQUFZLENBQUM7TUFFbENILENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDSSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUM7SUFFRkosQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsWUFBWTtNQUNwREQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDSyxRQUFRLENBQUMsUUFBUSxHQUFHSCxLQUFLLENBQUM7TUFDbENGLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ00sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxJQUFJLENBQUNMLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ00sV0FBVyxDQUFDLENBQUMsR0FBR04sS0FBSyxDQUFDTyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQzdGLENBQUMsQ0FBQztJQUVGVCxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLGlCQUFpQixFQUFFLFlBQVk7TUFDdERELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1UsV0FBVyxDQUFDLFFBQVEsR0FBR1IsS0FBSyxDQUFDO01BQ3JDRixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNNLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUN0RCxDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsSUFBSUksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBQSxFQUFlO0lBQy9CWCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsWUFBWTtNQUNuRFcsSUFBSSxHQUFHWixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNHLElBQUksQ0FBQyxXQUFXLENBQUM7TUFFaENILENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDSSxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUM7SUFFRkosQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsWUFBWTtNQUNuREQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUNELFFBQVEsQ0FBQyxRQUFRLEdBQUdPLElBQUksQ0FBQztJQUMzRCxDQUFDLENBQUM7SUFFRlosQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZO01BQ3JERCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNNLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQ0ksV0FBVyxDQUFDLFFBQVEsR0FBR0UsSUFBSSxDQUFDO0lBQzlELENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxJQUFJQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQWU7SUFDakNiLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxFQUFFLENBQUMsZUFBZSxFQUFFLFVBQVVhLENBQUMsRUFBRTtNQUNsRCxJQUFJQyxNQUFNLEdBQUdmLENBQUMsQ0FBQ2MsQ0FBQyxDQUFDRSxhQUFhLENBQUM7TUFDL0IsSUFBSUMsU0FBUyxHQUFHRixNQUFNLENBQUNHLElBQUksQ0FBQyxXQUFXLENBQUM7TUFDeEMsSUFBSWQsS0FBSyxHQUFHSixDQUFDLENBQUMsSUFBSSxDQUFDO01BRW5CSSxLQUFLLENBQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHVSxTQUFTLENBQUM7TUFDOURiLEtBQUssQ0FBQ0UsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUNhLEdBQUcsQ0FBQ0YsU0FBUyxDQUFDO0lBQ2xELENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxPQUFPO0lBQ0hHLElBQUksRUFBRSxTQUFOQSxJQUFJQSxDQUFBLEVBQWM7TUFFZHJCLGdCQUFnQixDQUFDLENBQUM7TUFDbEJZLGdCQUFnQixDQUFDLENBQUM7TUFDbEJFLGtCQUFrQixDQUFDLENBQUM7SUFDeEI7RUFDSixDQUFDO0FBRUwsQ0FBQyxDQUFDLENBQUM7QUFFSGIsQ0FBQyxDQUFDLFlBQVk7RUFDVkYsU0FBUyxDQUFDc0IsSUFBSSxDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL3BhZ2VzL3VpX21vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFVJX21vZGFscyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgaGFuZGxlTW9kYWxDb2xvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5leGFtcGxlQ29sb3JNb2RhbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29sb3IgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtY29sb3InKTtcclxuXHJcbiAgICAgICAgICAgICQoJyNleGFtcGxlQ29sb3JNb2RhbCcpLm1vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNleGFtcGxlQ29sb3JNb2RhbCcpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdtb2RhbC0nICsgY29sb3IpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5tb2RhbC10aXRsZScpLnRleHQoY29sb3JbMF0udG9VcHBlckNhc2UoKSArIGNvbG9yLnN1YnN0cmluZygxKSArICcgTW9kYWwnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI2V4YW1wbGVDb2xvck1vZGFsJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbW9kYWwtJyArIGNvbG9yKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcubW9kYWwtdGl0bGUnKS50ZXh0KCdDb2xvcmVkIE1vZGFsJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhhbmRsZU1vZGFsU2l6ZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuZXhhbXBsZU1vZGFsU2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2l6ZSA9ICQodGhpcykuYXR0cignZGF0YS1zaXplJyk7XHJcblxyXG4gICAgICAgICAgICAkKCcjZXhhbXBsZU1vZGFsU2l6ZScpLm1vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNleGFtcGxlTW9kYWxTaXplJykub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLm1vZGFsLWRpYWxvZycpLmFkZENsYXNzKCdtb2RhbC0nICsgc2l6ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNleGFtcGxlTW9kYWxTaXplJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcubW9kYWwtZGlhbG9nJykucmVtb3ZlQ2xhc3MoJ21vZGFsLScgKyBzaXplKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaGFuZGxlVmFyeWluZ01vZGFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJyNleGFtcGxlVmFyeWluZycpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9ICQoZS5yZWxhdGVkVGFyZ2V0KTtcclxuICAgICAgICAgICAgdmFyIHJlY2lwaWVudCA9IGJ1dHRvbi5kYXRhKCdyZWNpcGllbnQnKTtcclxuICAgICAgICAgICAgdmFyIG1vZGFsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIG1vZGFsLmZpbmQoJy5tb2RhbC10aXRsZScpLnRleHQoJ05ldyBtZXNzYWdlIHRvICcgKyByZWNpcGllbnQpO1xyXG4gICAgICAgICAgICBtb2RhbC5maW5kKCcubW9kYWwtYm9keSBpbnB1dCcpLnZhbChyZWNpcGllbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaGFuZGxlTW9kYWxDb2xvcigpO1xyXG4gICAgICAgICAgICBoYW5kbGVNb2RhbFNpemVzKCk7XHJcbiAgICAgICAgICAgIGhhbmRsZVZhcnlpbmdNb2RhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIFVJX21vZGFscy5pbml0KCk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/pages/ui_modal.js\n");

/***/ }),

/***/ 2:
/*!****************************************************!*\
  !*** multi ./src/assets/scripts/pages/ui_modal.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\samet\siqtheme\src\assets\scripts\pages\ui_modal.js */"./src/assets/scripts/pages/ui_modal.js");


/***/ })

/******/ });