/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: rgb(237, 235, 231);\\r\\n}\\r\\n.root {\\r\\n  font-size: 15px;\\r\\n  width: 1050px;\\r\\n  height: 80vh;\\r\\n  margin: 0 auto;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  /* gap: 20px; */\\r\\n  justify-content: space-between;\\r\\n}\\r\\n.text-area {\\r\\n  text-align: top;\\r\\n  height: 200px;\\r\\n  font-size: 20px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n.keyboard__wrapper {\\r\\n  width: 100%;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(15, 1fr);\\r\\n  gap: 10px;\\r\\n}\\r\\n.key {\\r\\n  min-width: 50px;\\r\\n  height: 50px;\\r\\n  border-radius: 5px;\\r\\n  background-color: grey;\\r\\n  color: azure;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);\\r\\n}\\r\\n.meta-key {\\r\\n  background-color: rgb(79, 78, 78);\\r\\n}\\r\\n.Backspace,\\r\\n.Enter,\\r\\n.ShiftRight {\\r\\n  grid-column: 14/16;\\r\\n}\\r\\n.Tab,\\r\\n.CapsLock,\\r\\n.ShiftLeft {\\r\\n  grid-column: 1 /3;\\r\\n}\\r\\n.Space {\\r\\n  grid-column: 4 /10;\\r\\n}\\r\\n.active {\\r\\n  background-color: rgb(83, 94, 160);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BUTTONS\": () => (/* binding */ BUTTONS)\n/* harmony export */ });\nconst BUTTONS = [\r\n  {\r\n    key: [\"`\", \"~\", \"ё\", \"Ё\"],\r\n    keyCode: 192,\r\n    which: 192,\r\n    code: \"Backquote\",\r\n    location: 0,\r\n    altKey: false,\r\n    ctrlKey: false,\r\n    metaKey: false,\r\n    shiftKey: true,\r\n    repeat: false,\r\n  },\r\n  {\r\n    key: [\"1\", \"!\", \"1\", \"!\"],\r\n    keyCode: 49,\r\n    which: 49,\r\n    code: \"Digit1\",\r\n    location: 0,\r\n    description: \"1 Key\",\r\n  },\r\n  {\r\n    key: [\"2\", \"@\", \"2\", '\"'],\r\n    keyCode: 50,\r\n    which: 50,\r\n    code: \"Digit2\",\r\n    location: 0,\r\n    description: \"2 Key\",\r\n  },\r\n  {\r\n    key: [\"3\", \"#\", \"3\", \"№\"],\r\n    keyCode: 51,\r\n    which: 51,\r\n    code: \"Digit3\",\r\n    location: 0,\r\n    altKey: false,\r\n    ctrlKey: false,\r\n    metaKey: false,\r\n    shiftKey: true,\r\n    repeat: false,\r\n  },\r\n  {\r\n    key: [\"4\", \"$\", \"4\", \";\"],\r\n    keyCode: 52,\r\n    which: 52,\r\n    code: \"Digit4\",\r\n    location: 0,\r\n    description: \"4 Key\",\r\n  },\r\n  {\r\n    key: [\"5\", \"%\", \"5\", \"%\"],\r\n    keyCode: 53,\r\n    which: 53,\r\n    code: \"Digit5\",\r\n    location: 0,\r\n    description: \"5 Key\",\r\n  },\r\n  {\r\n    key: [\"6\", \"^\", \"6\", \":\"],\r\n    keyCode: 54,\r\n    which: 54,\r\n    code: \"Digit6\",\r\n    location: 0,\r\n    description: \"6 Key\",\r\n  },\r\n  {\r\n    key: [\"7\", \"&\", \"7\", \"?\"],\r\n    keyCode: 55,\r\n    which: 55,\r\n    code: \"Digit7\",\r\n    location: 0,\r\n    description: \"7 Key\",\r\n  },\r\n  {\r\n    key: [\"8\", \"*\", \"8\", \"*\"],\r\n    keyCode: 56,\r\n    which: 56,\r\n    code: \"Digit8\",\r\n    location: 0,\r\n    description: \"8 Key\",\r\n  },\r\n  {\r\n    key: [\"9\", \"(\", \"9\", \"(\"],\r\n    keyCode: 57,\r\n    which: 57,\r\n    code: \"Digit9\",\r\n    location: 0,\r\n    description: \"9 Key\",\r\n  },\r\n  {\r\n    key: [\"0\", \")\", \"0\", \")\"],\r\n    keyCode: 48,\r\n    which: 48,\r\n    code: \"Digit0\",\r\n    location: 0,\r\n    description: \"0\",\r\n  },\r\n  {\r\n    key: [\"-\", \"_\", \"-\", \"_\"],\r\n    keyCode: 109,\r\n    which: 109,\r\n    code: \"Minus\",\r\n    location: 3,\r\n    description: \"subtract\",\r\n  },\r\n  {\r\n    key: [\"=\", \"+\", \"=\", \"+\"],\r\n    keyCode: 61,\r\n    which: 61,\r\n    code: \"Equal\",\r\n    location: 0,\r\n    description: \"equals (firefox)\",\r\n  },\r\n  {\r\n    key: [\"Backspace\"],\r\n    keyCode: 8,\r\n    which: 8,\r\n    code: \"Backspace\",\r\n    location: 0,\r\n    description: \"editing\",\r\n    unicode: \"⌫\",\r\n  },\r\n  {\r\n    key: [\"Tab\"],\r\n    keyCode: 9,\r\n    which: 9,\r\n    code: \"Tab\",\r\n    location: 0,\r\n    description: \"whitespace\",\r\n    unicode: \"↹\",\r\n  },\r\n  {\r\n    key: [\"q\", \"Q\", \"й\", \"Й\"],\r\n    keyCode: 81,\r\n    which: 81,\r\n    code: \"KeyQ\",\r\n    location: 0,\r\n    description: \"q\",\r\n  },\r\n\r\n  {\r\n    key: [\"w\", \"W\", \"ц\", \"Ц\"],\r\n    keyCode: 87,\r\n    which: 87,\r\n    code: \"KeyW\",\r\n    location: 0,\r\n    description: \"w\",\r\n  },\r\n  {\r\n    key: [\"e\", \"E\", \"у\", \"У\"],\r\n    keyCode: 69,\r\n    which: 69,\r\n    code: \"KeyE\",\r\n    location: 0,\r\n    description: \"e\",\r\n  },\r\n  {\r\n    key: [\"r\", \"R\", \"к\", \"К\"],\r\n    keyCode: 82,\r\n    which: 82,\r\n    code: \"KeyR\",\r\n    location: 0,\r\n    description: \"r\",\r\n  },\r\n  {\r\n    key: [\"t\", \"T\", \"е\", \"Е\"],\r\n    keyCode: 84,\r\n    which: 84,\r\n    code: \"KeyT\",\r\n    location: 0,\r\n    description: \"t\",\r\n  },\r\n  {\r\n    key: [\"y\", \"Y\", \"н\", \"Н\"],\r\n    keyCode: 89,\r\n    which: 89,\r\n    code: \"KeyY\",\r\n    location: 0,\r\n    description: \"y\",\r\n  },\r\n  {\r\n    key: [\"u\", \"U\", \"г\", \"Г\"],\r\n    keyCode: 85,\r\n    which: 85,\r\n    code: \"KeyU\",\r\n    location: 0,\r\n    description: \"u\",\r\n  },\r\n  {\r\n    key: [\"i\", \"I\", \"ш\", \"Ш\"],\r\n    keyCode: 73,\r\n    which: 73,\r\n    code: \"KeyI\",\r\n    location: 0,\r\n    description: \"i\",\r\n  },\r\n  {\r\n    key: [\"o\", \"O\", \"щ\", \"Щ\"],\r\n    keyCode: 79,\r\n    which: 79,\r\n    code: \"KeyO\",\r\n    location: 0,\r\n    description: \"o\",\r\n  },\r\n  {\r\n    key: [\"p\", \"P\", \"з\", \"З\"],\r\n    keyCode: 80,\r\n    which: 80,\r\n    code: \"KeyP\",\r\n    location: 0,\r\n    description: \"p\",\r\n  },\r\n  {\r\n    key: [\"[\", \"{\", \"х\", \"Х\"],\r\n    keyCode: 219,\r\n    which: 219,\r\n    code: \"BracketLeft\",\r\n    location: 0,\r\n    altKey: false,\r\n    ctrlKey: false,\r\n    metaKey: false,\r\n    shiftKey: false,\r\n    repeat: false,\r\n  },\r\n  {\r\n    key: [\"]\", \"}\", \"ъ\", \"Ъ\"],\r\n    keyCode: 221,\r\n    which: 221,\r\n    code: \"BracketRight\",\r\n    location: 0,\r\n    description: \"close bracket / å\",\r\n  },\r\n  {\r\n    key: [\"\\\\\", \"|\", \"\\\\\", \"/\"],\r\n    keyCode: 220,\r\n    which: 220,\r\n    code: \"Backslash\",\r\n    location: 0,\r\n    description: \"back slash\",\r\n  },\r\n  {\r\n    key: [\"CapsLock\"],\r\n    keyCode: 20,\r\n    which: 20,\r\n    code: \"CapsLock\",\r\n    location: 0,\r\n    description: \"modifier\",\r\n    unicode: \"⇪\",\r\n  },\r\n  {\r\n    key: [\"a\", \"A\", \"ф\", \"Ф\"],\r\n    keyCode: 65,\r\n    which: 65,\r\n    code: \"KeyA\",\r\n    location: 0,\r\n    description: \"a\",\r\n  },\r\n  {\r\n    key: [\"s\", \"S\", \"ы\", \"Ы\"],\r\n    keyCode: 83,\r\n    which: 83,\r\n    code: \"KeyS\",\r\n    location: 0,\r\n    description: \"s\",\r\n  },\r\n  {\r\n    key: [\"d\", \"D\", \"в\", \"В\"],\r\n    keyCode: 68,\r\n    which: 68,\r\n    code: \"KeyD\",\r\n    location: 0,\r\n    description: \"d\",\r\n  },\r\n  {\r\n    key: [\"f\", \"F\", \"а\", \"А\"],\r\n    keyCode: 70,\r\n    which: 70,\r\n    code: \"KeyF\",\r\n    location: 0,\r\n    description: \"f\",\r\n  },\r\n  {\r\n    key: [\"g\", \"G\", \"п\", \"П\"],\r\n    keyCode: 71,\r\n    which: 71,\r\n    code: \"KeyG\",\r\n    location: 0,\r\n    description: \"g\",\r\n  },\r\n  {\r\n    key: [\"h\", \"H\", \"р\", \"Р\"],\r\n    keyCode: 72,\r\n    which: 72,\r\n    code: \"KeyH\",\r\n    location: 0,\r\n    description: \"h\",\r\n  },\r\n  {\r\n    key: [\"j\", \"J\", \"о\", \"О\"],\r\n    keyCode: 74,\r\n    which: 74,\r\n    code: \"KeyJ\",\r\n    location: 0,\r\n    description: \"j\",\r\n  },\r\n  {\r\n    key: [\"k\", \"K\", \"л\", \"Л\"],\r\n    keyCode: 75,\r\n    which: 75,\r\n    code: \"KeyK\",\r\n    location: 0,\r\n    altKey: true,\r\n    ctrlKey: false,\r\n    metaKey: true,\r\n    shiftKey: false,\r\n    description: \"k\",\r\n  },\r\n  {\r\n    key: [\"l\", \"L\", \"д\", \"Д\"],\r\n    keyCode: 76,\r\n    which: 76,\r\n    code: \"KeyL\",\r\n    location: 0,\r\n    altKey: true,\r\n    ctrlKey: false,\r\n    metaKey: true,\r\n    shiftKey: false,\r\n    description: \"l\",\r\n  },\r\n  {\r\n    key: [\";\", \":\", \"ж\", \"Ж\"],\r\n    keyCode: 186,\r\n    which: 186,\r\n    code: \"Semicolon\",\r\n    location: 0,\r\n    altKey: false,\r\n    ctrlKey: false,\r\n    metaKey: false,\r\n    shiftKey: false,\r\n    repeat: false,\r\n  },\r\n  {\r\n    key: [\"'\", '\"', \"э\", \"Э\"],\r\n    keyCode: 222,\r\n    which: 222,\r\n    code: \"Quote\",\r\n    location: 0,\r\n    description: \"single quote / ø / ä\",\r\n  },\r\n  {\r\n    key: [\"Enter\"],\r\n    keyCode: 13,\r\n    which: 13,\r\n    code: \"Enter\",\r\n    location: 0,\r\n    description: \"whitespace\",\r\n    unicode: \"↵\",\r\n  },\r\n  {\r\n    key: [\"Shift\"],\r\n    keyCode: 16,\r\n    which: 16,\r\n    code: \"ShiftLeft\",\r\n    location: 1,\r\n    description: \"modifier\",\r\n    unicode: \"⇧\",\r\n  },\r\n  {\r\n    key: [\"z\", \"Z\", \"я\", \"Я\"],\r\n    keyCode: 90,\r\n    which: 90,\r\n    code: \"KeyZ\",\r\n    location: 0,\r\n    altKey: false,\r\n    ctrlKey: false,\r\n    metaKey: false,\r\n    shiftKey: false,\r\n    repeat: false,\r\n  },\r\n  {\r\n    key: [\"x\", \"X\", \"ч\", \"Ч\"],\r\n    keyCode: 88,\r\n    which: 88,\r\n    code: \"KeyX\",\r\n    location: 0,\r\n    description: \"x\",\r\n  },\r\n  {\r\n    key: [\"c\", \"C\", \"с\", \"С\"],\r\n    keyCode: 67,\r\n    which: 67,\r\n    code: \"KeyC\",\r\n    location: 0,\r\n    description: \"c\",\r\n  },\r\n  {\r\n    key: [\"v\", \"V\", \"м\", \"М\"],\r\n    keyCode: 86,\r\n    which: 86,\r\n    code: \"KeyV\",\r\n    location: 0,\r\n    description: \"v\",\r\n  },\r\n  {\r\n    key: [\"b\", \"B\", \"и\", \"И\"],\r\n    keyCode: 66,\r\n    which: 66,\r\n    code: \"KeyB\",\r\n    location: 0,\r\n    description: \"b\",\r\n  },\r\n  {\r\n    key: [\"n\", \"N\", \"т\", \"Т\"],\r\n    keyCode: 78,\r\n    which: 78,\r\n    code: \"KeyN\",\r\n    location: 0,\r\n    description: \"n\",\r\n  },\r\n  {\r\n    key: [\"m\", \"M\", \"ь\", \"Ь\"],\r\n    keyCode: 77,\r\n    which: 77,\r\n    code: \"KeyM\",\r\n    location: 0,\r\n    description: \"m\",\r\n  },\r\n  {\r\n    key: [\",\", \"<\", \"б\", \"Б\"],\r\n    keyCode: 188,\r\n    which: 188,\r\n    code: \"Comma\",\r\n    location: 3,\r\n    altKey: false,\r\n    ctrlKey: false,\r\n    metaKey: false,\r\n    shiftKey: false,\r\n    description: \"numpad period (firefox)\",\r\n  },\r\n  {\r\n    key: [\".\", \">\", \"ю\", \"Ю\"],\r\n    keyCode: 190,\r\n    which: 190,\r\n    code: \"Period\",\r\n    location: 0,\r\n    description: \"period\",\r\n  },\r\n  {\r\n    key: [\"/\", \"?\", \".\", \",\"],\r\n    keyCode: 191,\r\n    which: 191,\r\n    code: \"Slash\",\r\n    location: 0,\r\n    description: \"forward slash / ç\",\r\n  },\r\n  {\r\n    key: [\"ArrowUp\"],\r\n    keyCode: 38,\r\n    which: 38,\r\n    code: \"ArrowUp\",\r\n    location: 0,\r\n    altKey: false,\r\n    ctrlKey: false,\r\n    metaKey: false,\r\n    shiftKey: false,\r\n    repeat: false,\r\n    description: \"navigation\",\r\n    unicode: \"&#129093\",\r\n  },\r\n  {\r\n    key: [\"Shift\"],\r\n    keyCode: 16,\r\n    which: 16,\r\n    code: \"ShiftRight\",\r\n    location: 2,\r\n    description: \"modifier\",\r\n    unicode: \"⇧\",\r\n  },\r\n  {\r\n    key: [\"ctrl\"],\r\n    keyCode: 17,\r\n    which: 17,\r\n    code: \"ControlLeft\",\r\n    location: 1,\r\n    altKey: true,\r\n    ctrlKey: false,\r\n    metaKey: true,\r\n    shiftKey: true,\r\n    unicode: \"Ctrl\",\r\n    description: \"modifier\",\r\n  },\r\n  {\r\n    key: [\"Meta\"],\r\n    keyCode: 91,\r\n    which: 91,\r\n    code: \"MetaLeft\",\r\n    location: 1,\r\n    altKey: false,\r\n    ctrlKey: false,\r\n    metaKey: true,\r\n    shiftKey: false,\r\n    description: \"meta\",\r\n    unicode: \"⊞\",\r\n  },\r\n  {\r\n    key: [\"Alt\"],\r\n    keyCode: 18,\r\n    which: 18,\r\n    code: \"AltLeft\",\r\n    location: 1,\r\n    altKey: true,\r\n    ctrlKey: false,\r\n    metaKey: true,\r\n    shiftKey: false,\r\n    unicode: \"Alt\",\r\n    description: \"modifier\",\r\n  },\r\n  {\r\n    key: [\" \"],\r\n    keyCode: 32,\r\n    which: 32,\r\n    code: \"Space\",\r\n    location: 0,\r\n    altKey: false,\r\n    ctrlKey: false,\r\n    metaKey: false,\r\n    shiftKey: false,\r\n    unicode: \" \",\r\n    repeat: false,\r\n    description: \"space\",\r\n  },\r\n  {\r\n    key: [\"Alt\"],\r\n    keyCode: 18,\r\n    which: 18,\r\n    code: \"AltRight\",\r\n    location: 2,\r\n    altKey: true,\r\n    ctrlKey: false,\r\n    metaKey: true,\r\n    shiftKey: false,\r\n    unicode: \"Alt\",\r\n    description: \"modifier\",\r\n  },\r\n  {\r\n    key: [\"ctrl\"],\r\n    keyCode: 17,\r\n    which: 17,\r\n    code: \"ControlRight\",\r\n    location: 2,\r\n    altKey: true,\r\n    ctrlKey: false,\r\n    metaKey: true,\r\n    shiftKey: true,\r\n    unicode: \"Ctrl\",\r\n    description: \"modifier\",\r\n  },\r\n  {\r\n    key: [\"ArrowLeft\"],\r\n    keyCode: 37,\r\n    which: 37,\r\n    code: \"ArrowLeft\",\r\n    location: 0,\r\n    altKey: false,\r\n    ctrlKey: false,\r\n    metaKey: false,\r\n    shiftKey: false,\r\n    repeat: false,\r\n    description: \"navigation\",\r\n    unicode: \"&#129092\",\r\n  },\r\n  {\r\n    key: [\"ArrowDown\"],\r\n    keyCode: 40,\r\n    which: 40,\r\n    code: \"ArrowDown\",\r\n    location: 0,\r\n    altKey: false,\r\n    ctrlKey: false,\r\n    metaKey: false,\r\n    shiftKey: false,\r\n    repeat: false,\r\n    description: \"navigation\",\r\n    unicode: \"&#129095\",\r\n  },\r\n  {\r\n    key: [\"&#129094\"],\r\n    keyCode: 39,\r\n    which: 39,\r\n    code: \"ArrowRight\",\r\n    location: 0,\r\n    altKey: false,\r\n    ctrlKey: false,\r\n    metaKey: false,\r\n    shiftKey: false,\r\n    repeat: false,\r\n    description: \"navigation\",\r\n    unicode: \"&#129094\",\r\n  },\r\n];\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/buttons.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons.js */ \"./src/buttons.js\");\n\r\n\r\nconst ROOT = document.querySelector(\".root\");\r\nconst metaKeys = [\"navigation\", \"modifier\", \"editing\", \"meta\", \"whitespace\"];\r\nconst language = true;\r\n\r\nconst keyboardWrapper = document.createElement(\"div\");\r\nconst textArea = document.createElement(\"textarea\");\r\ntextArea.classList.add(\"text-area\");\r\nROOT.append(textArea);\r\nkeyboardWrapper.className = \"keyboard__wrapper\";\r\ncreateButtons(language);\r\n\r\nwindow.addEventListener(\"keypress\", function (e) {\r\n  e.preventDefault();\r\n  textArea.focus();\r\n  clickOnButton(e.code);\r\n});\r\n\r\nfunction clickOnButton(id, event) {\r\n  let button = _buttons_js__WEBPACK_IMPORTED_MODULE_1__.BUTTONS.find((btn) => {\r\n    return btn.code == id;\r\n  });\r\n  if (button.keyCode > 30) {\r\n    textArea.value += button.key[0];\r\n  }\r\n  if (button.keyCode === 8) {\r\n    textArea.value = textArea.value.substring(0, textArea.value.length - 1);\r\n  }\r\n\r\n  document.getElementById(id).classList.add(\"active\");\r\n  setTimeout(() => {\r\n    document.getElementById(id).classList.remove(\"active\");\r\n  }, 100);\r\n}\r\nfunction createButtons(language) {\r\n  _buttons_js__WEBPACK_IMPORTED_MODULE_1__.BUTTONS.forEach((btn) => {\r\n    let newBtn = document.createElement(\"div\");\r\n    newBtn.classList.add(\"key\");\r\n    if (metaKeys.includes(btn.description)) {\r\n      newBtn.classList.add(\"meta-key\", btn.code);\r\n    } else if (btn.description === \"space\") {\r\n      newBtn.classList.add(btn.code);\r\n    }\r\n    if (+btn.keyCode >= 48 && +btn.keyCode <= 57) {\r\n      newBtn.innerHTML = `${btn.key[1]}<br>${btn.key[0]}`;\r\n    } else {\r\n      if (language) {\r\n        newBtn.innerHTML += btn.unicode ? btn.unicode : btn.key[1];\r\n      } else if (!language) {\r\n        newBtn.innerHTML += btn.unicode ? btn.unicode : btn.key[3];\r\n      }\r\n    }\r\n    newBtn.setAttribute(\"id\", btn.code);\r\n\r\n    newBtn.addEventListener(\"click\", () => {\r\n      textArea.focus();\r\n      clickOnButton(btn.code);\r\n    });\r\n    keyboardWrapper.append(newBtn);\r\n  });\r\n  ROOT.append(keyboardWrapper);\r\n}\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;