(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["platforms/app-plus/orientation/orientation"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\try\\uni-app\\hello\\platforms\\app-plus\\orientation\\orientation.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/try/uni-app/hello/platforms/app-plus/orientation/orientation.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar id = null;var _default =\n{\n  data: function data() {\n    return {\n      title: 'orientation',\n      value: '' };\n\n  },\n  methods: {\n    getOrient: function getOrient() {\n      var that = this;\n      plus.orientation.getCurrentOrientation(function (o) {\n        that.value = \"alpha：\" + o.alpha + \"\\nbeta：\" + o.beta + \"\\ngamma：\" + o.gamma;\n      }, function (e) {\n        console.log(\"获取失败:\" + e.message);\n      });\n    },\n    watchOrient: function watchOrient() {\n      var that = this;\n      if (id) {\n        return;\n      }\n      id = plus.orientation.watchOrientation(function (o) {\n        that.value = \"监听设备方向变化信息\\n\" + \"alpha：\" + o.alpha + \"\\nbeta：\" + o.beta + \"\\ngamma：\" + o.gamma;\n      }, function (e) {\n        plus.orientation.clearWatch(id);\n        id = null;\n        console.log(\"监听失败:\" + e.message);\n      });\n    },\n    watchStop: function watchStop() {\n      if (id) {\n        plus.orientation.clearWatch(id);\n        id = null;\n      } else {\n        console.log(\"没有监听设备方向变化\");\n      }\n    } } };exports.default = _default;\n\n//# sourceURL=uni-app:///platforms/app-plus/orientation/orientation.vue?vue&type=script&lang=js&?1683");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\try\\uni-app\\hello\\platforms\\app-plus\\orientation\\orientation.vue?vue&type=template&id=27600e8e&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/try/uni-app/hello/platforms/app-plus/orientation/orientation.vue?vue&type=template&id=27600e8e& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"view\",\n    [\n      _c(\"page-head\", { attrs: { title: _vm.title, mpcomid: \"794d957b-0\" } }),\n      _c(\"view\", { staticClass: \"uni-padding-wrap uni-common-mt\" }, [\n        _c(\n          \"view\",\n          { staticClass: \"uni-btn-v\" },\n          [\n            _c(\n              \"button\",\n              {\n                attrs: { type: \"primary\", eventid: \"794d957b-0\" },\n                on: { tap: _vm.getOrient }\n              },\n              [_vm._v(\"获取设备的方向信息\")]\n            ),\n            _c(\n              \"button\",\n              {\n                attrs: { type: \"primary\", eventid: \"794d957b-1\" },\n                on: { tap: _vm.watchOrient }\n              },\n              [_vm._v(\"监听设备的方向变化\")]\n            ),\n            _c(\n              \"button\",\n              {\n                attrs: { type: \"primary\", eventid: \"794d957b-2\" },\n                on: { tap: _vm.watchStop }\n              },\n              [_vm._v(\"停止监听\")]\n            )\n          ],\n          1\n        ),\n        _c(\"view\", { staticClass: \"uni-textarea\" }, [\n          _c(\"textarea\", { attrs: { value: _vm.value } })\n        ])\n      ])\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=D:/try/uni-app/hello/platforms/app-plus/orientation/orientation.vue?vue&type=template&id=27600e8e&");

/***/ }),

/***/ "D:\\try\\uni-app\\hello\\main.js?{\"page\":\"platforms%2Fapp-plus%2Forientation%2Forientation\"}":
/*!************************************************************************************************!*\
  !*** D:/try/uni-app/hello/main.js?{"page":"platforms%2Fapp-plus%2Forientation%2Forientation"} ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ \"D:\\\\try\\\\uni-app\\\\hello\\\\pages.json\");\nvar _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ \"./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js\"));\nvar _orientation = _interopRequireDefault(__webpack_require__(/*! ./platforms/app-plus/orientation/orientation.vue */ \"D:\\\\try\\\\uni-app\\\\hello\\\\platforms\\\\app-plus\\\\orientation\\\\orientation.vue\"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory.default)(_orientation.default));\n\n//# sourceURL=D:/try/uni-app/hello/main.js?%7B%22page%22:%22platforms%252Fapp-plus%252Forientation%252Forientation%22%7D");

/***/ }),

/***/ "D:\\try\\uni-app\\hello\\platforms\\app-plus\\orientation\\orientation.vue":
/*!***************************************************************************!*\
  !*** D:/try/uni-app/hello/platforms/app-plus/orientation/orientation.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _orientation_vue_vue_type_template_id_27600e8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orientation.vue?vue&type=template&id=27600e8e& */ \"D:\\\\try\\\\uni-app\\\\hello\\\\platforms\\\\app-plus\\\\orientation\\\\orientation.vue?vue&type=template&id=27600e8e&\");\n/* harmony import */ var _orientation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orientation.vue?vue&type=script&lang=js& */ \"D:\\\\try\\\\uni-app\\\\hello\\\\platforms\\\\app-plus\\\\orientation\\\\orientation.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _orientation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _orientation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _orientation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _orientation_vue_vue_type_template_id_27600e8e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _orientation_vue_vue_type_template_id_27600e8e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"D:/try/uni-app/hello/platforms/app-plus/orientation/orientation.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=D:/try/uni-app/hello/platforms/app-plus/orientation/orientation.vue");

/***/ }),

/***/ "D:\\try\\uni-app\\hello\\platforms\\app-plus\\orientation\\orientation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** D:/try/uni-app/hello/platforms/app-plus/orientation/orientation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orientation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./orientation.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\\\try\\\\uni-app\\\\hello\\\\platforms\\\\app-plus\\\\orientation\\\\orientation.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orientation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orientation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orientation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orientation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orientation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=uni-app:///platforms/app-plus/orientation/orientation.vue?vue&type=script&lang=js&?7b91");

/***/ }),

/***/ "D:\\try\\uni-app\\hello\\platforms\\app-plus\\orientation\\orientation.vue?vue&type=template&id=27600e8e&":
/*!**********************************************************************************************************!*\
  !*** D:/try/uni-app/hello/platforms/app-plus/orientation/orientation.vue?vue&type=template&id=27600e8e& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orientation_vue_vue_type_template_id_27600e8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./orientation.vue?vue&type=template&id=27600e8e& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\\\try\\\\uni-app\\\\hello\\\\platforms\\\\app-plus\\\\orientation\\\\orientation.vue?vue&type=template&id=27600e8e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orientation_vue_vue_type_template_id_27600e8e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orientation_vue_vue_type_template_id_27600e8e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=D:/try/uni-app/hello/platforms/app-plus/orientation/orientation.vue?vue&type=template&id=27600e8e&");

/***/ })

},[["D:\\try\\uni-app\\hello\\main.js?{\"page\":\"platforms%2Fapp-plus%2Forientation%2Forientation\"}","common/runtime","common/vendor"]]]);