(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/template/product-list/product-list"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\try\\uni-app\\hello\\pages\\template\\product-list\\product-list.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/try/uni-app/hello/pages/template/product-list/product-list.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{\n  data: function data() {\n    return {\n      title: 'product-list',\n      productList: [],\n      renderImage: false };\n\n  },\n  methods: {\n    loadData: function loadData() {var _this = this;var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'add';\n      var data = [\n      {\n        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',\n        title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',\n        originalPrice: 9999,\n        favourPrice: 8888,\n        tip: '自营' },\n\n      {\n        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',\n        title: 'Apple iPad 平板电脑 2018年新款9.7英寸',\n        originalPrice: 3499,\n        favourPrice: 3399,\n        tip: '优惠' },\n\n      {\n        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',\n        title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',\n        originalPrice: 12999,\n        favourPrice: 10688,\n        tip: '秒杀' },\n\n      {\n        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',\n        title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',\n        originalPrice: 999,\n        favourPrice: 958,\n        tip: '秒杀' },\n\n      {\n        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',\n        title: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',\n        originalPrice: 8888,\n        favourPrice: 8288,\n        tip: '优惠' },\n\n      {\n        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',\n        title: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',\n        originalPrice: 2899,\n        favourPrice: 2799,\n        tip: '自营' }];\n\n\n\n      if (action === 'refresh') {\n        this.productList = [];\n      }\n\n      data.forEach(function (item) {\n        _this.productList.push(item);\n      });\n    } },\n\n  onLoad: function onLoad() {var _this2 = this;\n    this.loadData();\n    setTimeout(function () {\n      _this2.renderImage = true;\n    }, 300);\n  },\n  onPullDownRefresh: function onPullDownRefresh() {\n    this.loadData('refresh');\n    // 实际开发中通常是网络请求，加载完数据后就停止。这里仅做演示，加延迟为了体现出效果。\n    setTimeout(function () {\n      uni.stopPullDownRefresh();\n    }, 2000);\n  },\n  onReachBottom: function onReachBottom() {\n    this.loadData();\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus/dist/index.js */ \"./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus/dist/index.js\")[\"default\"]))\n\n//# sourceURL=uni-app:///pages/template/product-list/product-list.vue?vue&type=script&lang=js&?966d");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\try\\uni-app\\hello\\pages\\template\\product-list\\product-list.vue?vue&type=template&id=2fe50abc&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/try/uni-app/hello/pages/template/product-list/product-list.vue?vue&type=template&id=2fe50abc& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"view\",\n    { staticClass: \"page\" },\n    [\n      _c(\"page-head\", { attrs: { title: _vm.title, mpcomid: \"695fb5e9-0\" } }),\n      _c(\n        \"view\",\n        { staticClass: \"uni-product-list\" },\n        _vm._l(_vm.productList, function(product, index) {\n          return _c(\"view\", { key: index, staticClass: \"uni-product\" }, [\n            _c(\"view\", { staticClass: \"image-view\" }, [\n              _vm.renderImage\n                ? _c(\"image\", {\n                    staticClass: \"uni-product-image\",\n                    attrs: { src: product.image }\n                  })\n                : _vm._e()\n            ]),\n            _c(\"view\", { staticClass: \"uni-product-title\" }, [\n              _vm._v(_vm._s(product.title))\n            ]),\n            _c(\"view\", { staticClass: \"uni-product-price\" }, [\n              _c(\"text\", { staticClass: \"uni-product-price-favour\" }, [\n                _vm._v(\"￥\" + _vm._s(product.originalPrice))\n              ]),\n              _c(\"text\", { staticClass: \"uni-product-price-original\" }, [\n                _vm._v(\"￥\" + _vm._s(product.favourPrice))\n              ]),\n              _c(\"text\", { staticClass: \"uni-product-tip\" }, [\n                _vm._v(_vm._s(product.tip))\n              ])\n            ])\n          ])\n        })\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=D:/try/uni-app/hello/pages/template/product-list/product-list.vue?vue&type=template&id=2fe50abc&");

/***/ }),

/***/ "D:\\try\\uni-app\\hello\\main.js?{\"page\":\"pages%2Ftemplate%2Fproduct-list%2Fproduct-list\"}":
/*!**********************************************************************************************!*\
  !*** D:/try/uni-app/hello/main.js?{"page":"pages%2Ftemplate%2Fproduct-list%2Fproduct-list"} ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ \"D:\\\\try\\\\uni-app\\\\hello\\\\pages.json\");\nvar _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ \"./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js\"));\nvar _productList = _interopRequireDefault(__webpack_require__(/*! ./pages/template/product-list/product-list.vue */ \"D:\\\\try\\\\uni-app\\\\hello\\\\pages\\\\template\\\\product-list\\\\product-list.vue\"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory.default)(_productList.default));\n\n//# sourceURL=D:/try/uni-app/hello/main.js?%7B%22page%22:%22pages%252Ftemplate%252Fproduct-list%252Fproduct-list%22%7D");

/***/ }),

/***/ "D:\\try\\uni-app\\hello\\pages\\template\\product-list\\product-list.vue":
/*!*************************************************************************!*\
  !*** D:/try/uni-app/hello/pages/template/product-list/product-list.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _product_list_vue_vue_type_template_id_2fe50abc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-list.vue?vue&type=template&id=2fe50abc& */ \"D:\\\\try\\\\uni-app\\\\hello\\\\pages\\\\template\\\\product-list\\\\product-list.vue?vue&type=template&id=2fe50abc&\");\n/* harmony import */ var _product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-list.vue?vue&type=script&lang=js& */ \"D:\\\\try\\\\uni-app\\\\hello\\\\pages\\\\template\\\\product-list\\\\product-list.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _product_list_vue_vue_type_template_id_2fe50abc___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _product_list_vue_vue_type_template_id_2fe50abc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"D:/try/uni-app/hello/pages/template/product-list/product-list.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=D:/try/uni-app/hello/pages/template/product-list/product-list.vue");

/***/ }),

/***/ "D:\\try\\uni-app\\hello\\pages\\template\\product-list\\product-list.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** D:/try/uni-app/hello/pages/template/product-list/product-list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./product-list.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\\\try\\\\uni-app\\\\hello\\\\pages\\\\template\\\\product-list\\\\product-list.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=uni-app:///pages/template/product-list/product-list.vue?vue&type=script&lang=js&?583f");

/***/ }),

/***/ "D:\\try\\uni-app\\hello\\pages\\template\\product-list\\product-list.vue?vue&type=template&id=2fe50abc&":
/*!********************************************************************************************************!*\
  !*** D:/try/uni-app/hello/pages/template/product-list/product-list.vue?vue&type=template&id=2fe50abc& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_list_vue_vue_type_template_id_2fe50abc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./product-list.vue?vue&type=template&id=2fe50abc& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\\\try\\\\uni-app\\\\hello\\\\pages\\\\template\\\\product-list\\\\product-list.vue?vue&type=template&id=2fe50abc&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_list_vue_vue_type_template_id_2fe50abc___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Liyang_Desktop_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_product_list_vue_vue_type_template_id_2fe50abc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=D:/try/uni-app/hello/pages/template/product-list/product-list.vue?vue&type=template&id=2fe50abc&");

/***/ })

},[["D:\\try\\uni-app\\hello\\main.js?{\"page\":\"pages%2Ftemplate%2Fproduct-list%2Fproduct-list\"}","common/runtime","common/vendor"]]]);