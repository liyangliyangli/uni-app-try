(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/API/background-audio/background-audio"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\try\\uni-app\\hello\\pages\\API\\background-audio\\background-audio.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/try/uni-app/hello/pages/API/background-audio/background-audio.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar util = __webpack_require__(/*! ../../../common/util.js */ \"D:\\\\try\\\\uni-app\\\\hello\\\\common\\\\util.js\");var _default =\n\n{\n  data: function data() {\n    return {\n      title: 'backgroundAudio',\n      bgAudioMannager: null,\n      dataUrl: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3',\n      playing: false,\n      playTime: 0,\n      formatedPlayTime: '00:00:00' };\n\n  },\n  onLoad: function onLoad() {var _this = this;\n    this.playing = this.$backgroundAudioData.playing;\n    this.playTime = this.$backgroundAudioData.playTime;\n    this.formatedPlayTime = this.$backgroundAudioData.formatedPlayTime;\n\n    var bgAudioMannager = uni.getBackgroundAudioManager();\n    if (!bgAudioMannager.title) {\n      bgAudioMannager.title = '致爱丽丝';\n    }\n    if (!bgAudioMannager.singer) {\n      bgAudioMannager.singer = '暂无';\n    }\n    if (!bgAudioMannager.coverImgUrl) {\n      bgAudioMannager.coverImgUrl = 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg';\n    }\n\n    bgAudioMannager.onPlay(function () {\n      console.log(\"开始播放\");\n      _this.$backgroundAudioData.playing = _this.playing = true;\n    });\n    bgAudioMannager.onPause(function () {\n      console.log(\"暂停播放\");\n      _this.$backgroundAudioData.playing = _this.playing = false;\n    });\n    bgAudioMannager.onEnded(function () {\n      _this.playing = false;\n      _this.$backgroundAudioData.playing = false;\n      _this.$backgroundAudioData.playTime = _this.playTime = 0;\n      _this.$backgroundAudioData.formatedPlayTime = _this.formatedPlayTime = util.formatTime(0);\n    });\n\n    bgAudioMannager.onTimeUpdate(function (e) {\n      if (Math.floor(bgAudioMannager.currentTime) > Math.floor(_this.playTime)) {\n        _this.$backgroundAudioData.formatedPlayTime = _this.formatedPlayTime = util.formatTime(Math.floor(bgAudioMannager.currentTime));\n      }\n      _this.$backgroundAudioData.playTime = _this.playTime = bgAudioMannager.currentTime;\n    });\n\n    this.bgAudioMannager = bgAudioMannager;\n  },\n  methods: {\n    play: function play(res) {\n      if (!this.bgAudioMannager.src) {\n        this.bgAudioMannager.startTime = this.playTime;\n        this.bgAudioMannager.src = this.dataUrl;\n      } else {\n        this.bgAudioMannager.seek(this.playTime);\n        this.bgAudioMannager.play();\n      }\n    },\n    seek: function seek(e) {\n      this.bgAudioMannager.seek(e.target.value);\n    },\n    pause: function pause() {\n      this.bgAudioMannager.pause();\n    },\n    stop: function stop() {\n      this.bgAudioMannager.stop();\n      this.$backgroundAudioData.playing = this.playing = false;\n      this.$backgroundAudioData.playTime = this.playTime = 0;\n      this.$backgroundAudioData.formatedPlayTime = this.formatedPlayTime = util.formatTime(0);\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus/dist/index.js */ \"./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus/dist/index.js\")[\"default\"]))\n\n//# sourceURL=uni-app:///pages/API/background-audio/background-audio.vue?vue&type=script&lang=js&?428d");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!D:\\try\\uni-app\\hello\\pages\\API\\background-audio\\background-audio.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!D:/try/uni-app/hello/pages/API/background-audio/background-audio.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=D:/try/uni-app/hello/pages/API/background-audio/background-audio.vue?vue&type=style&index=0&lang=css&");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\try\\uni-app\\hello\\pages\\API\\background-audio\\background-audio.vue?vue&type=template&id=572c2248&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/try/uni-app/hello/pages/API/background-audio/background-audio.vue?vue&type=template&id=572c2248& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"view\",\n    [\n      _c(\"page-head\", { attrs: { title: _vm.title, mpcomid: \"89426c6a-0\" } }),\n      _c(\"view\", { staticClass: \"uni-padding-wrap\" }, [\n        _c(\"view\", { staticClass: \"uni-center\" }, [\n          _c(\"text\", { staticClass: \"time-big\" }, [\n            _vm._v(_vm._s(_vm.formatedPlayTime))\n          ])\n        ]),\n        _c(\"view\", { staticClass: \"uni-common-mt\" }, [\n          _c(\"slider\", {\n            staticClass: \"slider\",\n            attrs: {\n              min: \"0\",\n              max: \"21\",\n              step: \"1\",\n              value: _vm.playTime,\n              eventid: \"89426c6a-0\"\n            },\n            on: { change: _vm.seek }\n          })\n        ]),\n        _vm._m(0),\n        _c(\"view\", { staticClass: \"uni-hello-text\" }, [\n          _vm._v(\"注意：离开当前页面后背景音乐将保持播放，但退出uni-app将停止\")\n        ]),\n        _c(\n          \"view\",\n          { staticClass: \"page-body-buttons\" },\n          [\n            _vm.playing\n              ? _c(\"block\", [\n                  _c(\n                    \"view\",\n                    {\n                      staticClass: \"page-body-button\",\n                      attrs: { eventid: \"89426c6a-1\" },\n                      on: { tap: _vm.stop }\n                    },\n                    [\n                      _c(\"image\", {\n                        attrs: { src: \"../../../static/stop.png\" }\n                      })\n                    ]\n                  ),\n                  _c(\n                    \"view\",\n                    {\n                      staticClass: \"page-body-button\",\n                      attrs: { eventid: \"89426c6a-2\" },\n                      on: { tap: _vm.pause }\n                    },\n                    [\n                      _c(\"image\", {\n                        attrs: { src: \"../../../static/pause.png\" }\n                      })\n                    ]\n                  )\n                ])\n              : _vm._e(),\n            !_vm.playing\n              ? _c(\"block\", [\n                  _c(\"view\", { staticClass: \"page-body-button\" }),\n                  _c(\n                    \"view\",\n                    {\n                      staticClass: \"page-body-button\",\n                      attrs: { eventid: \"89426c6a-3\" },\n                      on: { tap: _vm.play }\n                    },\n                    [\n                      _c(\"image\", {\n                        attrs: { src: \"../../../static/play.png\" }\n                      })\n                    ]\n                  )\n                ])\n              : _vm._e(),\n            _c(\"view\", { staticClass: \"page-body-button\" })\n          ],\n          1\n        )\n      ])\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"view\", { staticClass: \"play-time\" }, [\n      _c(\"text\", [_vm._v(\"00:00\")]),\n      _c(\"text\", [_vm._v(\"00:21\")])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=D:/try/uni-app/hello/pages/API/background-audio/background-audio.vue?vue&type=template&id=572c2248&");

/***/ }),

/***/ "D:\\try\\uni-app\\hello\\main.js?{\"page\":\"pages%2FAPI%2Fbackground-audio%2Fbackground-audio\"}":
/*!*************************************************************************************************!*\
  !*** D:/try/uni-app/hello/main.js?{"page":"pages%2FAPI%2Fbackground-audio%2Fbackground-audio"} ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ \"D:\\\\try\\\\uni-app\\\\hello\\\\pages.json\");\nvar _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ \"./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js\"));\nvar _backgroundAudio = _interopRequireDefault(__webpack_require__(/*! ./pages/API/background-audio/background-audio.vue */ \"D:\\\\try\\\\uni-app\\\\hello\\\\pages\\\\API\\\\background-audio\\\\background-audio.vue\"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory.default)(_backgroundAudio.default));\n\n//# sourceURL=D:/try/uni-app/hello/main.js?%7B%22page%22:%22pages%252FAPI%252Fbackground-audio%252Fbackground-audio%22%7D");

/***/ }),

/***/ "D:\\try\\uni-app\\hello\\pages\\API\\background-audio\\background-audio.vue":
/*!****************************************************************************!*\
  !*** D:/try/uni-app/hello/pages/API/background-audio/background-audio.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _background_audio_vue_vue_type_template_id_572c2248___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background-audio.vue?vue&type=template&id=572c2248& */ \"D:\\\\try\\\\uni-app\\\\hello\\\\pages\\\\API\\\\background-audio\\\\background-audio.vue?vue&type=template&id=572c2248&\");\n/* harmony import */ var _background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background-audio.vue?vue&type=script&lang=js& */ \"D:\\\\try\\\\uni-app\\\\hello\\\\pages\\\\API\\\\background-audio\\\\background-audio.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _background_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background-audio.vue?vue&type=style&index=0&lang=css& */ \"D:\\\\try\\\\uni-app\\\\hello\\\\pages\\\\API\\\\background-audio\\\\background-audio.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _background_audio_vue_vue_type_template_id_572c2248___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _background_audio_vue_vue_type_template_id_572c2248___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"D:/try/uni-app/hello/pages/API/background-audio/background-audio.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=D:/try/uni-app/hello/pages/API/background-audio/background-audio.vue");

/***/ }),

/***/ "D:\\try\\uni-app\\hello\\pages\\API\\background-audio\\background-audio.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** D:/try/uni-app/hello/pages/API/background-audio/background-audio.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./background-audio.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\\\try\\\\uni-app\\\\hello\\\\pages\\\\API\\\\background-audio\\\\background-audio.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=uni-app:///pages/API/background-audio/background-audio.vue?vue&type=script&lang=js&?ee98");

/***/ }),

/***/ "D:\\try\\uni-app\\hello\\pages\\API\\background-audio\\background-audio.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************!*\
  !*** D:/try/uni-app/hello/pages/API/background-audio/background-audio.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./background-audio.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!D:\\\\try\\\\uni-app\\\\hello\\\\pages\\\\API\\\\background-audio\\\\background-audio.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=D:/try/uni-app/hello/pages/API/background-audio/background-audio.vue?vue&type=style&index=0&lang=css&");

/***/ }),

/***/ "D:\\try\\uni-app\\hello\\pages\\API\\background-audio\\background-audio.vue?vue&type=template&id=572c2248&":
/*!***********************************************************************************************************!*\
  !*** D:/try/uni-app/hello/pages/API/background-audio/background-audio.vue?vue&type=template&id=572c2248& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_template_id_572c2248___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./background-audio.vue?vue&type=template&id=572c2248& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\\\try\\\\uni-app\\\\hello\\\\pages\\\\API\\\\background-audio\\\\background-audio.vue?vue&type=template&id=572c2248&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_template_id_572c2248___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_template_id_572c2248___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=D:/try/uni-app/hello/pages/API/background-audio/background-audio.vue?vue&type=template&id=572c2248&");

/***/ })

},[["D:\\try\\uni-app\\hello\\main.js?{\"page\":\"pages%2FAPI%2Fbackground-audio%2Fbackground-audio\"}","common/runtime","common/vendor"]]]);