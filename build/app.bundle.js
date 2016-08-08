/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _component = __webpack_require__(3);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_mithril2.default.mount(document.getElementById('root'), _component2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = vendor_library;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _vm = __webpack_require__(4);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _const = __webpack_require__(5);
	
	var _const2 = _interopRequireDefault(_const);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	const component = {
	  controller: function () {
	    this.vm = new _vm2.default();
	    this.onPutFiles = e => {
	      this.noop(e);
	      const files = e.dataTransfer.files;
	      for (let i = 0; i < files.length; i++) {
	        const file = files[i];
	        const reader = new FileReader();
	        reader.filename = file.name;
	        _mithril2.default.startComputation();
	        reader.onloadend = this.vm.loadEnd.bind(this.vm);
	        reader.readAsDataURL(file);
	      }
	    };
	    this.noop = e => {
	      e.preventDefault();
	      e.stopPropagation();
	    };
	  },
	  view: ctrl => {
	    const vm = ctrl.vm;
	    return (0, _mithril2.default)('.app', [(0, _mithril2.default)('.loader', {
	      ondrop: ctrl.onPutFiles,
	      ondragover: ctrl.noop
	    }, 'put Image files'), (0, _mithril2.default)('.tools', [(0, _mithril2.default)('.xmode', ['横位置:', (0, _mithril2.default)('label', [(0, _mithril2.default)('input', {
	      type: 'radio',
	      name: 'xmode',
	      value: _const2.default.mode.start,
	      checked: vm.xMode() == _const2.default.mode.start,
	      onclick: _mithril2.default.withAttr('value', vm.xMode)
	    })], '左'), (0, _mithril2.default)('label', [(0, _mithril2.default)('input', {
	      type: 'radio',
	      name: 'xmode',
	      value: _const2.default.mode.center,
	      checked: vm.xMode() == _const2.default.mode.center,
	      onclick: _mithril2.default.withAttr('value', vm.xMode)
	    })], '中央'), (0, _mithril2.default)('label', [(0, _mithril2.default)('input', {
	      type: 'radio',
	      name: 'xmode',
	      value: _const2.default.mode.end,
	      checked: vm.xMode() == _const2.default.mode.end,
	      onclick: _mithril2.default.withAttr('value', vm.xMode)
	    })], '右')]), (0, _mithril2.default)('.ymode', ['縦位置:', (0, _mithril2.default)('label', [(0, _mithril2.default)('input', {
	      type: 'radio',
	      name: 'yMode',
	      value: _const2.default.mode.start,
	      checked: vm.yMode() == _const2.default.mode.start,
	      onclick: _mithril2.default.withAttr('value', vm.yMode)
	    })], '上'), (0, _mithril2.default)('label', [(0, _mithril2.default)('input', {
	      type: 'radio',
	      name: 'yMode',
	      value: _const2.default.mode.center,
	      checked: vm.yMode() == _const2.default.mode.center,
	      onclick: _mithril2.default.withAttr('value', vm.yMode)
	    })], '中央'), (0, _mithril2.default)('label', [(0, _mithril2.default)('input', {
	      type: 'radio',
	      name: 'yMode',
	      value: _const2.default.mode.end,
	      checked: vm.yMode() == _const2.default.mode.end,
	      onclick: _mithril2.default.withAttr('value', vm.yMode)
	    })], '下')]), (0, _mithril2.default)('.shift', ['余白: ', (0, _mithril2.default)('label', ['上: ', (0, _mithril2.default)('input', {
	      type: 'number',
	      value: vm.top(),
	      onchange: _mithril2.default.withAttr('value', vm.top),
	      onkeyup: _mithril2.default.withAttr('value', vm.top)
	    })]), (0, _mithril2.default)('label', ['下: ', (0, _mithril2.default)('input', {
	      type: 'number',
	      value: vm.bottom(),
	      onchange: _mithril2.default.withAttr('value', vm.bottom),
	      onkeyup: _mithril2.default.withAttr('value', vm.bottom)
	    })]), (0, _mithril2.default)('label', ['左: ', (0, _mithril2.default)('input', {
	      type: 'number',
	      value: vm.left(),
	      onchange: _mithril2.default.withAttr('value', vm.left),
	      onkeyup: _mithril2.default.withAttr('value', vm.left)
	    })]), (0, _mithril2.default)('label', ['右: ', (0, _mithril2.default)('input', {
	      type: 'number',
	      value: vm.right(),
	      onchange: _mithril2.default.withAttr('value', vm.right),
	      onkeyup: _mithril2.default.withAttr('value', vm.right)
	    })])]), (0, _mithril2.default)('.other', [(0, _mithril2.default)('.number', [(0, _mithril2.default)('label', ['ピクチャ番号: ', (0, _mithril2.default)('input', {
	      type: 'number',
	      value: vm.number(),
	      onchange: _mithril2.default.withAttr('value', vm.number),
	      onkeyup: _mithril2.default.withAttr('value', vm.number)
	    })])]), (0, _mithril2.default)('.transparent', [(0, _mithril2.default)('label', ['透過有無: ', (0, _mithril2.default)('input', {
	      type: 'checkbox',
	      checked: vm.transparent(),
	      onclick: _mithril2.default.withAttr('checked', vm.transparent)
	    })])])]), (0, _mithril2.default)('button.clear', {
	      onclick: vm.clear.bind(vm)
	    }, 'clear')]), (0, _mithril2.default)('textarea.output', {
	      readonly: 'readonly',
	      onfocus: e => {
	        e.target.select();
	      }
	    }, vm.getOutput())]);
	  }
	};
	
	exports.default = component;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mithril = __webpack_require__(1);
	
	var _mithril2 = _interopRequireDefault(_mithril);
	
	var _const = __webpack_require__(5);
	
	var _const2 = _interopRequireDefault(_const);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class Vm {
	  constructor() {
	    this.result = [];
	    this.xMode = _mithril2.default.prop(_const2.default.mode.center);
	    this.yMode = _mithril2.default.prop(_const2.default.mode.center);
	    this.top = _mithril2.default.prop(0);
	    this.bottom = _mithril2.default.prop(0);
	    this.left = _mithril2.default.prop(0);
	    this.right = _mithril2.default.prop(0);
	    this.number = _mithril2.default.prop(1);
	    this.transparent = _mithril2.default.prop(0);
	  }
	
	  loadEnd(e) {
	    if (e.target.readyState == FileReader.DONE) {
	      const file = e.target.result;
	      const img = new Image();
	      img.src = file;
	      this.result.push({
	        name: e.target.filename,
	        width: img.width,
	        height: img.height
	      });
	    }
	    _mithril2.default.endComputation();
	  }
	
	  getOutput() {
	    return this.result.map(({ name, width, height }) => {
	      // Picture("ファイル名", number, type, x, y, connect, zoom, opacity1, transparent, r, g, b, s, effect, quantity, opacity2)
	      return `Picture("${ Vm.removeExt(name) }", ${ this.number() }, 0, ${ this.getX(width) }, ${ this.getY(height) }, 0, 100, 0, ${ this.transparent() ? 1 : 0 }, 100, 100, 100, 100, 0, 0)`;
	    }).join("\n");
	  }
	
	  getX(width) {
	    const sx = parseInt(this.left());
	    const aw = _const2.default.window.w - sx - parseInt(this.right());
	    if (this.xMode() == _const2.default.mode.center) {
	      return Math.floor(aw / 2) + sx;
	    }
	    if (this.xMode() == _const2.default.mode.start) {
	      return Math.floor(width / 2) + sx;
	    }
	    if (this.xMode() == _const2.default.mode.end) {
	      return Math.floor(aw - width / 2) + sx;
	    }
	
	    throw new Error('x mode error');
	  }
	
	  getY(height) {
	    const sy = parseInt(this.top());
	    const sh = _const2.default.window.h - sy - parseInt(this.bottom());
	    if (this.yMode() == _const2.default.mode.center) {
	      return Math.floor(sh / 2) + sy;
	    }
	    if (this.yMode() == _const2.default.mode.start) {
	      return Math.floor(height / 2) + sy;
	    }
	    if (this.yMode() == _const2.default.mode.end) {
	      return Math.floor(sh - height / 2) + sy;
	    }
	
	    throw new Error('x mode error');
	  }
	
	  clear() {
	    this.result = [];
	  }
	
	  static removeExt(filename) {
	    return filename.substr(0, filename.lastIndexOf('.'));
	  }
	}
	exports.default = Vm;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	const Const = {
	  window: {
	    w: 320,
	    h: 240
	  },
	  mode: {
	    center: 0,
	    start: 1,
	    end: 2
	  }
	};
	
	exports.default = Const;

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map