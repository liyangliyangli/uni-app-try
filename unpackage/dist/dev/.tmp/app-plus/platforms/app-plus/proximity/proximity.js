(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["platforms/app-plus/proximity/proximity"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\try\\uni-app\\hello\\platforms\\app-plus\\proximity\\proximity.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/try/uni-app/hello/platforms/app-plus/proximity/proximity.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar id = null;\nvar bright = null;var _default =\n{\n  data: function data() {\n    return {\n      title: 'proximity',\n      value: '' };\n\n  },\n  methods: {\n    getProximity: function getProximity() {\n      var that = this;\n      plus.proximity.getCurrentProximity(function (d) {\n        that.value = \"距离为：\" + d;\n      }, function (e) {\n        that.value = \"获取失败:\" + e.message;\n      });\n    },\n    watchProximity: function watchProximity() {\n      var that = this;\n      if (id) {\n        return;\n      }\n      bright = plus.screen.getBrightness();\n      id = plus.proximity.watchProximity(function (d) {\n        that.value = \"距离变化：\" + d;\n        plus.screen.setBrightness(d < 1 ? 0.01 : bright);\n      }, function (e) {\n        plus.proximity.clearWatch(id);\n        id = null;\n        that.value = \"监听失败:\" + e.message;\n      });\n    },\n    watchStop: function watchStop() {\n      var that = this;\n      if (id) {\n        that.value = \"停止监听设备距离传感器信息\";\n        plus.proximity.clearWatch(id);\n        id = null;\n      } else {\n        that.value = \"没有监听设备距离传感器\";\n      }\n    } } };exports.default = _default;\n\n//# sourceURL=uni-app:///platforms/app-plus/proximity/proximity.vue?vue&type=script&lang=js&?45e0");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\try\\uni-app\\hello\\platforms\\app-plus\\proximity\\proximity.vue?vue&type=template&id=f7d02628&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/try/uni-app/hello/platforms/app-plus/proximity/proximity.vue?vue&type=template&id=f7d02628& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"view\",\n    [\n      _c(\"page-head\", { attrs: { title: _vm.title, mpcomid: \"244d5d59-0\" } }),\n      _c(\"view\", { staticClass: \"uni-padding-wrap uni-common-mt\" }, [\n        _c(\"view\", { staticClass: \"uni-hello-text\" }, [\n          _vm._v(\n            \"手机顶部听筒处有传感器监听距离手机屏幕的障碍物，覆盖该传感器会触发本事件变化\"\n          )\n        ]),\n        _c(\n          \"view\",\n          { staticClass: \"uni-btn-v uni-common-mt\" },\n          [\n            _c(\n              \"button\",\n              {\n                attrs: { type: \"primary\", eventid: \"244d5d59-0\" },\n                on: { tap: _vm.getProximity }\n              },\n              [_vm._v(\"获取距离传感器信息\")]\n            ),\n            _c(\n              \"button\",\n              {\n                attrs: { type: \"primary\", eventid: \"244d5d59-1\" },\n                on: { tap: _vm.watchProximity }\n              },\n              [_vm._v(\"监听距离传感器变化\")]\n            ),\n            _c(\n              \"button\",\n              {\n                attrs: { type: \"primary\", eventid: \"244d5d59-2\" },\n                on: { tap: _vm.watchStop }\n              },\n              [_vm._v(\"停止监听\")]\n            )\n          ],\n          1\n        ),\n        _c(\"view\", { staticClass: \"uni-textarea uni-common-mt\" }, [\n          _c(\"textarea\", { attrs: { value: _vm.value } })\n        ])\n      ])\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=D:/try/uni-app/hello/platforms/app-plus/proximity/proximity.vue?vue&type=template&id=f7d02628&");

/***/ }),

/***/ "D:\\try\\uni-app\\hello\\main.js?{\"page\":\"platforms%2Fapp-plus%2Fproximity%2Fproximity\"}":
/*!********************************************************************************************!*\
  !*** D:/try/uni-app/hello/main.js?{"page":"platforms%2Fapp-plus%2Fproximity%2Fproximity"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ \"D:\\\\try\\\\uni-app\\\\hello\\\\pages.json\");\nvar _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ \"./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js\"));\nvar _proximity = _interopRequireDefault(__webpack_require__(/*! ./platforms/app-plus/proximity/proximity.vue */ \"D:\\\\try\\\\uni-app\\\\hello\\\\platforms\\\\app-plus\\\\proximity\\\\proximity.vue\"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory.default)(_proximity.default));\n\n//# sourceURL=D:/try/uni-app/hello/main.js?%7B%22page%22:%22platforms%252Fapp-plus%252Fproximity%252Fproximity%22%7D");

/***/ }),

/***/ "D:\\try\\uni-app\\hello\\platforms\\app-plus\\proximity\\proximity.vue":
/*!***********************************************************************!*\
  !*** D:/try/uni-app/hello/platforms/app-plus/proximity/proximity.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _proximity_vue_vue_type_template_id_f7d02628___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proximity.vue?vue&type=template&id=f7d02628& */ \"D:\\\\try\\\\uni-app\\\\hello\\\\platforms\\\\app-plus\\\\proximity\\\\proximity.vue?vue&type=template&id=f7d02628&\");\n/* harmony import */ var _proximity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proximity.vue?vue&type=script&lang=js& */ \"D:\\\\try\\\\uni-app\\\\hello\\\\platforms\\\\app-plus\\\\proximity\\\\proximity.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _proximity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _proximity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _proximity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _proximity_vue_vue_type_template_id_f7d02628___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _proximity_vue_vue_type_template_id_f7d02628___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"D:/try/uni-app/hello/platforms/app-plus/proximity/proximity.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=D:/try/uni-app/hello/platforms/app-plus/proximity/proximity.vue");

/***/ }),

/***/ "D:\\try\\uni-app\\hello\\platforms\\app-plus\\proximity\\proximity.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** D:/try/uni-app/hello/platforms/app-plus/proximity/proximity.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_proximity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./proximity.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\\\try\\\\uni-app\\\\hello\\\\platforms\\\\app-plus\\\\proximity\\\\proximity.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_proximity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_proximity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_proximity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_proximity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_proximity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=uni-app:///platforms/app-plus/proximity/proximity.vue?vue&type=script&lang=js&?e58f");

/***/ }),

/***/ "D:\\try\\uni-app\\hello\\platforms\\app-plus\\proximity\\proximity.vue?vue&type=template&id=f7d02628&":
/*!******************************************************************************************************!*\
  !*** D:/try/uni-app/hello/platforms/app-plus/proximity/proximity.vue?vue&type=template&id=f7d02628& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_proximity_vue_vue_type_template_id_f7d02628___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./proximity.vue?vue&type=template&id=f7d02628& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\\\try\\\\uni-app\\\\hello\\\\platforms\\\\app-plus\\\\proximity\\\\proximity.vue?vue&type=template&id=f7d02628&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_proximity_vue_vue_type_template_id_f7d02628___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_proximity_vue_vue_type_template_id_f7d02628___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=D:/try/uni-app/hello/platforms/app-plus/proximity/proximity.vue?vue&type=template&id=f7d02628&");

/***/ })

},[["D:\\try\\uni-app\\hello\\main.js?{\"page\":\"platforms%2Fapp-plus%2Fproximity%2Fproximity\"}","common/runtime","common/vendor"]]]);