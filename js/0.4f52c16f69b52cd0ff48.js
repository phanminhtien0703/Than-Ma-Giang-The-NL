webpackJsonp([0],{

    /***/ 243:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    exports.__esModule = true;
    
    var _from = __webpack_require__(244);
    
    var _from2 = _interopRequireDefault(_from);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = function (arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
    
        return arr2;
      } else {
        return (0, _from2.default)(arr);
      }
    };
    
    /***/ }),
    
    /***/ 244:
    /***/ (function(module, exports, __webpack_require__) {
    
    module.exports = { "default": __webpack_require__(245), __esModule: true };
    
    /***/ }),
    
    /***/ 245:
    /***/ (function(module, exports, __webpack_require__) {
    
    __webpack_require__(35);
    __webpack_require__(246);
    module.exports = __webpack_require__(1).Array.from;
    
    
    /***/ }),
    
    /***/ 246:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    var ctx = __webpack_require__(24);
    var $export = __webpack_require__(9);
    var toObject = __webpack_require__(26);
    var call = __webpack_require__(106);
    var isArrayIter = __webpack_require__(107);
    var toLength = __webpack_require__(62);
    var createProperty = __webpack_require__(247);
    var getIterFn = __webpack_require__(63);
    
    $export($export.S + $export.F * !__webpack_require__(108)(function (iter) { Array.from(iter); }), 'Array', {
      // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
      from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
        var O = toObject(arrayLike);
        var C = typeof this == 'function' ? this : Array;
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var index = 0;
        var iterFn = getIterFn(O);
        var length, result, step, iterator;
        if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
        // if object isn't iterable or it's array with default iterator - use simple case
        if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
          for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
            createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
          }
        } else {
          length = toLength(O.length);
          for (result = new C(length); length > index; index++) {
            createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
          }
        }
        result.length = index;
        return result;
      }
    });
    
    
    /***/ }),
    
    /***/ 247:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    var $defineProperty = __webpack_require__(10);
    var createDesc = __webpack_require__(25);
    
    module.exports = function (object, index, value) {
      if (index in object) $defineProperty.f(object, index, createDesc(0, value));
      else object[index] = value;
    };
    
    
    /***/ }),
    
    /***/ 248:
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(64);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
    
    /**
     * 服务端渲染时html中head的设置方法
     */
    function getHeads(vm) {
      var heads = vm.$options.heads;
    
      if (heads) {
        return typeof heads === 'function' ? heads.call(vm) : heads;
      } else {
        return {};
      }
    }
    // 将heads对象转为服务端渲染的dom字符串
    function headsToDom(obj) {
      var title = obj.title,
          metas = obj.metas;
    
      var dom = '';
      if (title) {
        dom += '<title>' + title + '</title>';
      }
      if (metas && Array.isArray(metas)) {
        metas.forEach(function (metaItem) {
          var metaItemDom = '<meta';
          var keys = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(metaItem);
          keys.forEach(function (key) {
            metaItemDom += ' ' + key + '="' + metaItem[key] + '" ';
          });
          if (keys.indexOf('property') === -1) {
            metaItemDom += ' property="' + metaItem.name + '"';
          }
          console.log('metaItemDom', metaItemDom);
          metaItemDom += '>';
          dom += metaItemDom;
        });
      }
      return dom;
    }
    
    var serverTitleMixin = {
      created: function created() {
        var heads = getHeads(this);
        if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(heads).length !== 0) {
          console.log('服务端渲染heads');
          this.$ssrContext.heads = headsToDom(heads);
        }
      }
    };
    
    var clientTitleMixin = {
      mounted: function mounted() {
        console.log('wind', window.location.href);
    
        var _getHeads = getHeads(this),
            title = _getHeads.title,
            metas = _getHeads.metas;
    
        if (title) {
          document.title = '' + title;
        }
        if (metas && Array.isArray(metas)) {
          var oldMetas = document.getElementsByTagName('meta');
          var removeMetas = [];
          for (var i = 0; i < oldMetas.length; i++) {
            var oldMeta = oldMetas[i];
            if (oldMeta.hasAttribute('property')) {
              removeMetas.push(oldMeta);
            }
          }
          // 移除旧的meta
          removeMetas.forEach(function (meta) {
            meta.parentNode.removeChild(meta);
          });
          // 添加新的meta
          metas.forEach(function (metaItem) {
            var newMeta = document.createElement('meta');
            var keys = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(metaItem);
            console.log('keys', keys);
            keys.forEach(function (key) {
              newMeta.setAttribute(key, metaItem[key]);
              // newMeta.setAttribute('key', metaItem[key])
            });
            if (keys.indexOf('property') === -1) {
              newMeta.setAttribute('property', metaItem.name);
              // newMeta.setAttribute('vmid', metaItem.name)
            }
            console.log('clientTitleMixin', newMeta);
            document.head.appendChild(newMeta);
          });
        }
      }
    };
    
    /* harmony default export */ __webpack_exports__["a"] = ( false ? serverTitleMixin : clientTitleMixin);
    
    /***/ }),
    
    /***/ 313:
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_dist_loader_js_ref_4_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_ref_4_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3e082106_lang_scss_scoped_true___ = __webpack_require__(314);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_dist_loader_js_ref_4_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_ref_4_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3e082106_lang_scss_scoped_true____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_dist_loader_js_ref_4_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_ref_4_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3e082106_lang_scss_scoped_true___);
    /* unused harmony reexport namespace */
    
    
    /***/ }),
    
    /***/ 314:
    /***/ (function(module, exports, __webpack_require__) {
    
    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(315);
    if(typeof content === 'string') content = [[module.i, content, '']];
    if(content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(235)("33e376f4", content, true, {});
    
    /***/ }),
    
    /***/ 315:
    /***/ (function(module, exports, __webpack_require__) {
    
    exports = module.exports = __webpack_require__(234)(false);
    // imports
    
    
    // module
    exports.push([module.i, ".take_wrap .top-detailed[data-v-3e082106]{margin:0 auto;position:fixed;top:-0.625rem;padding-top:0.625rem;left:0;right:0;height:4.25rem;background:#fff;z-index:10;max-width:750PX}.take_wrap .top-detailed .game_icon[data-v-3e082106]{width:2.25rem;height:2.25rem;margin:0 0.5rem}.take_wrap .top-detailed .desc[data-v-3e082106]{margin-right:0.375rem;overflow:hidden}.take_wrap .top-detailed .desc .game-name[data-v-3e082106]{font-size:0.9375rem;height:0.9375rem;font-weight:bold;color:#333;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;word-break:break-all;word-wrap:break-word}.take_wrap .top-detailed .desc .subtitle[data-v-3e082106]{padding:0;height:0.75rem;margin-top:0.3125rem}.take_wrap .top-detailed .desc .subtitle .text[data-v-3e082106]{font-size:0.75rem;color:#999;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;word-break:break-all;word-wrap:break-word}.take_wrap .top-detailed .desc .subtitle .icon[data-v-3e082106]{display:block;width:0.75rem;height:0.75rem;min-width:0.75rem;margin-left:0.375rem}.take_wrap .top-detailed .button-group[data-v-3e082106]{margin-right:0.375rem}.take_wrap .top-detailed .button-group .el-button+.el-button[data-v-3e082106]{margin-left:0.375rem}.take_wrap .head-bg[data-v-3e082106]{position:relative}.take_wrap .head-bg .bg-major[data-v-3e082106]{width:100%;display:block}.take_wrap .head-bg .download-button[data-v-3e082106]{position:absolute;bottom:1rem;left:0;right:0}.take_wrap .head-bg .download-button .download-button_img[data-v-3e082106]{width:9.625rem;height:2.625rem;display:block}.take_wrap .head-bg .gift[data-v-3e082106]{position:absolute;bottom:4.375rem;right:0.625rem;width:4rem;height:4rem}.wrap[data-v-3e082106]{position:relative;padding:3.625rem 0 0 0;min-height:100vh}.top-detailed[data-v-3e082106]{margin:0 auto;position:fixed;top:-0.625rem;padding-top:0.625rem;left:0;right:0;height:4.25rem;background:#fff;z-index:10;max-width:750PX}.top-detailed .game_icon[data-v-3e082106]{width:2.25rem;height:2.25rem;margin:0 0.5rem}.top-detailed .desc[data-v-3e082106]{margin-right:0.375rem;overflow:hidden}.top-detailed .desc .game-name[data-v-3e082106]{font-size:0.9375rem;height:0.9375rem;font-weight:bold;color:#333;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;word-break:break-all;word-wrap:break-word}.top-detailed .desc .subtitle[data-v-3e082106]{padding:0;height:0.75rem;margin-top:0.3125rem}.top-detailed .desc .subtitle .text[data-v-3e082106]{font-size:0.75rem;color:#999;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;word-break:break-all;word-wrap:break-word}.top-detailed .desc .subtitle .icon[data-v-3e082106]{display:block;width:0.75rem;height:0.75rem;min-width:0.75rem;margin-left:0.375rem}.top-detailed .button-group[data-v-3e082106]{margin-right:0.375rem}.top-detailed .button-group .el-button+.el-button[data-v-3e082106]{margin-left:0.375rem}.head-bg[data-v-3e082106]{position:relative}.head-bg .bg-major[data-v-3e082106]{width:100%;display:block}.head-bg .download-button[data-v-3e082106]{position:absolute;bottom:1rem;left:0;right:0}.head-bg .download-button .download-button_img[data-v-3e082106]{width:9.625rem;height:2.625rem;display:block}.head-bg .gift[data-v-3e082106]{position:absolute;bottom:4.375rem;right:0.625rem;width:4rem;height:4rem}.new-gift-pack[data-v-3e082106]{position:relative}.new-gift-pack .title[data-v-3e082106]{width:21.4375rem;height:3.5625rem;display:block;margin:0 auto}.new-gift-pack .cont[data-v-3e082106]{width:21.4375rem;display:block;margin:0 auto}.new-gift-pack .receive[data-v-3e082106]{width:5.625rem;line-height:2rem;border-radius:0.25rem;font-size:0.875rem;text-align:center;margin:1.25rem auto;color:#775215;background:-webkit-gradient(linear, left top, left bottom, from(#fedea1), to(#fabd60));background:linear-gradient(to bottom, #fedea1, #fabd60)}.new-gift-pack .received[data-v-3e082106]{background:-webkit-gradient(linear, left top, left bottom, from(#ceb788), to(#cb9d55));background:linear-gradient(to bottom, #ceb788, #cb9d55)}.game-introduction .title[data-v-3e082106]{width:21.4375rem;height:3.5625rem;display:block;margin:0 auto}.game-introduction .cont[data-v-3e082106]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:10;word-break:break-all;word-wrap:break-word;width:21.4375rem;margin:1rem auto;font-size:0.875rem;line-height:1.3125rem;text-align:justify;color:#fff}.game-image .title[data-v-3e082106]{width:21.4375rem;height:3.5625rem;display:block;margin:0 auto}.game-image .cont[data-v-3e082106]{width:100%;height:100%;margin:0 auto}.game-image .el-carousel__item[data-v-3e082106] .el-carousel__mask{opacity:0}.bg-bottom[data-v-3e082106]{margin-top:1.25rem;width:23.4375rem}.bottom-tip[data-v-3e082106]{padding:1rem 0.625rem;font-size:0.75rem;line-height:1.25rem;text-align:center;color:#fff}.default .default-img[data-v-3e082106]{width:23.4375rem;display:block}.default .default-button[data-v-3e082106]{margin-top:1.25rem}.aaa[data-v-3e082106]{width:100%;height:12.5rem;background-color:red}\n", ""]);
    
    // exports
    
    
    /***/ }),
    
    /***/ 316:
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_dist_loader_js_ref_4_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_ref_4_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___ = __webpack_require__(317);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_dist_loader_js_ref_4_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_ref_4_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_dist_loader_js_ref_4_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_ref_4_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___);
    /* unused harmony reexport namespace */
    
    
    /***/ }),
    
    /***/ 317:
    /***/ (function(module, exports, __webpack_require__) {
    
    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(318);
    if(typeof content === 'string') content = [[module.i, content, '']];
    if(content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(235)("64952cf5", content, true, {});
    
    /***/ }),
    
    /***/ 318:
    /***/ (function(module, exports, __webpack_require__) {
    
    exports = module.exports = __webpack_require__(234)(false);
    // imports
    
    
    // module
    exports.push([module.i, ".take_wrap .top-detailed{margin:0 auto;position:fixed;top:-0.625rem;padding-top:0.625rem;left:0;right:0;height:4.25rem;background:#fff;z-index:10;max-width:750PX}.take_wrap .top-detailed .game_icon{width:2.25rem;height:2.25rem;margin:0 0.5rem}.take_wrap .top-detailed .desc{margin-right:0.375rem;overflow:hidden}.take_wrap .top-detailed .desc .game-name{font-size:0.9375rem;height:0.9375rem;font-weight:bold;color:#333;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;word-break:break-all;word-wrap:break-word}.take_wrap .top-detailed .desc .subtitle{padding:0;height:0.75rem;margin-top:0.3125rem}.take_wrap .top-detailed .desc .subtitle .text{font-size:0.75rem;color:#999;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;word-break:break-all;word-wrap:break-word}.take_wrap .top-detailed .desc .subtitle .icon{display:block;width:0.75rem;height:0.75rem;min-width:0.75rem;margin-left:0.375rem}.take_wrap .top-detailed .button-group{margin-right:0.375rem}.take_wrap .top-detailed .button-group .el-button+.el-button{margin-left:0.375rem}.take_wrap .head-bg{position:relative}.take_wrap .head-bg .bg-major{width:100%;display:block}.take_wrap .head-bg .download-button{position:absolute;bottom:1rem;left:0;right:0}.take_wrap .head-bg .download-button .download-button_img{width:9.625rem;height:2.625rem;display:block}.take_wrap .head-bg .gift{position:absolute;bottom:4.375rem;right:0.625rem;width:4rem;height:4rem}.message-box-orange-center{border:none;text-align:center}.message-box-orange-center .el-message-box__header{background:#fa7403}.message-box-orange-center .el-message-box__header .el-message-box__title{color:#fff;font-weight:bold}.message-box-orange-center .el-message-box__btns{text-align:center}\n", ""]);
    
    // exports
    
    
    /***/ }),
    
    /***/ 329:
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    
    // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/previewPage/index.vue?vue&type=template&id=3e082106&scoped=true&
    var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:({ backgroundColor: _vm.game.tgljConfig.backgroundColor })},[(_vm.game.isDefaultPage === 0 && !_vm.game.redirect)?_c('div',{staticClass:"wrap take_wrap"},[(_vm.game.tgljConfig && _vm.game.tgljConfig.imageList)?_c('div',{staticClass:"flex top-detailed"},[_c('img',{staticClass:"game_icon",attrs:{"src":_vm.game.tgljConfig.imageList.game_icon,"alt":""}}),_c('div',{staticClass:"flex1 flex-column align-start desc"},[_c('div',{staticClass:"game-name"},[_vm._v(_vm._s(_vm.gameShowName))]),_c('div',{staticClass:"flex-start subtitle"},[_c('span',{staticClass:"text"},[_vm._v(_vm._s(_vm.game.tgljConfig.gameTitle))]),(_vm.game.tgljConfig.appstoreFlag === 0 && (_vm.game.tgljConfig.sysFlag === 1 || _vm.game.tgljConfig.sysFlag === 2))?_c('img',{staticClass:"icon",attrs:{"src":"https://resource.lejunwl.com/YlCms/landing/assets/images/AppStore.png","alt":""}}):_vm._e(),(_vm.game.tgljConfig.googleStoreApp === 0 && _vm.game.tgljConfig.sysFlag === 0)?_c('img',{staticClass:"icon",attrs:{"src":"https://resource.lejunwl.com/YlCms/landing/assets/images/Google.png","alt":""}}):_vm._e()])]),_c('div',{staticClass:"button-group"},[(_vm.userName)?_c('el-button',{attrs:{"size":"mini","type":"dcc073","icon":"el-icon-user-solid","circle":""},on:{"click":function($event){return _vm.openDialog('User')}}}):_vm._e(),(!_vm.userName && _vm.game.tgljConfig.loginRegisterFlag == 1 && !_vm.game.quickLink)?_c('el-button',{staticClass:"register",attrs:{"size":"mini","round":"","type":"dcc073"},on:{"click":function($event){return _vm.openDialog('LoginRegister', 'register', 'login')}}},[_vm._v(_vm._s(_vm.loginName)+" / "+_vm._s(_vm.registerName))]):_vm._e(),(_vm.gameLink || _vm.game.quickLink)?_c('el-button',{staticClass:"register",attrs:{"size":"mini","round":"","type":"dcc073"},on:{"click":_vm.golink}},[_vm._v(_vm._s(_vm.golinkdName))]):_vm._e(),(_vm.game.tgljConfig.downloadBtnFlag === 1)?_c('el-button',{staticClass:"register",attrs:{"size":"mini","round":"","type":"48c1cd"},on:{"click":_vm.download}},[_vm._v(_vm._s(_vm.downloadName)+" ")]):_vm._e()],1)]):_vm._e(),(_vm.game.tgljConfig && _vm.game.tgljConfig.imageList)?_c('div',{staticClass:"head-bg"},[_c('img',{staticClass:"bg-major",attrs:{"src":_vm.game.tgljConfig.imageList.bg_major,"alt":""}}),(_vm.game.tgljConfig.downloadBtnFlag === 1)?_c('div',{staticClass:"flex-center download-button"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(_vm.game.tgljConfig.imageList.download_button),expression:"game.tgljConfig.imageList.download_button"}],staticClass:"download-button_img",attrs:{"alt":""},on:{"click":_vm.download}})]):_vm._e(),(_vm.game.tgljConfig.signGift === 1 && _vm.game.tgljConfig.sysFlag !== 0)?_c('img',{staticClass:"gift",attrs:{"src":"https://resource.lejunwl.com/YlCms/landing/assets/images/gift.png","alt":""},on:{"click":_vm.personalGift}}):_vm._e()]):_vm._e(),(_vm.pageModule('4'))?_c('div',{staticClass:"game-image"},[_c('img',{staticClass:"title",attrs:{"src":_vm.game.tgljConfig.imageList.wonderful_video_title,"alt":""}}),_c('div',{staticClass:"cont"},[_c('videoPlayer',{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",staticStyle:{"width":"300px, height:200px"},attrs:{"cover":_vm.game.tgljConfig.imageList.wonderful_video_cover,"resource":_vm.game.tgljConfig.imageList.wonderful_video_resource}})],1)]):_vm._e(),(_vm.pageModule('1'))?_c('div',{staticClass:"new-gift-pack"},[_c('img',{staticClass:"title",attrs:{"src":_vm.game.tgljConfig.imageList.new_user_gift_title,"alt":""}}),_c('img',{staticClass:"cont",attrs:{"src":_vm.game.tgljConfig.imageList.new_user_gift_ct,"alt":""}}),_c('div',{staticClass:"receive",class:{ received: _vm.giftStatus },on:{"click":_vm.receive}},[_vm._v("\n        "+_vm._s(_vm.giftStatustip ? _vm.giftStatustip : _vm.$t('ReceiveStatus0'))+"\n        ")])]):_vm._e(),(_vm.pageModule('2'))?_c('div',{staticClass:"game-introduction"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(_vm.game.tgljConfig.imageList.game_introduce_title),expression:"game.tgljConfig.imageList.game_introduce_title"}],staticClass:"title",attrs:{"alt":""}}),_c('div',{staticClass:"cont",style:({ color: _vm.game.tgljConfig.fontColor })},[_vm._v(_vm._s(_vm.game.tgljConfig.gameIntroduce))])]):_vm._e(),(_vm.pageModule('3'))?_c('div',{staticClass:"game-image"},[_c('img',{staticClass:"title",attrs:{"src":_vm.game.tgljConfig.imageList.game_picture_title,"alt":""}}),_c('el-carousel',{attrs:{"indicator-position":"none","arrow":"never","interval":4000,"type":"card","height":"16em"}},_vm._l((_vm.game.tgljConfig.imageList.game_picture_tc.split(',')),function(item){return _c('el-carousel-item',{key:item},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(item),expression:"item"}],staticClass:"cont",attrs:{"alt":""}})])}),1)],1):_vm._e(),(_vm.game.tgljConfig.imageList && _vm.game.tgljConfig.imageList.bottom_bg)?_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(_vm.game.tgljConfig.imageList.bottom_bg),expression:"game.tgljConfig.imageList.bottom_bg"}],staticClass:"bg-bottom",attrs:{"alt":""}}):_vm._e()]):_vm._e(),(_vm.game.isDefaultPage === 1)?_c('div',{staticClass:"default"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(_vm.game.tgljDefaultConfigDTO.xcImageUrl),expression:"game.tgljDefaultConfigDTO.xcImageUrl"}],staticClass:"default-img",attrs:{"alt":""}}),_c('div',{staticClass:"flex-center default-button"},[_c('el-button',{staticClass:"login",attrs:{"type":"orange"},on:{"click":_vm.defaultDownload}},[_vm._v(_vm._s(_vm.$t('Download')))])],1)]):_vm._e(),(_vm.game.tgljConfig && _vm.game.tgljConfig.imageList)?_c('div',{staticClass:"bottom-tip",style:({ color: _vm.game.tgljConfig.fontColor }),attrs:{"id":"bottom-tip"}},[_c('div',[_vm._v(_vm._s(_vm.$t('BottomTip')))]),_c('div',[_vm._v(_vm._s(_vm.$t('BottomTip_1')))])]):_vm._e(),_c('OpenWithAnotherBrowser',{ref:"OpenWithAnotherBrowser"}),_c('ErrorTip',{ref:"ErrorTip"}),_c('LoginRegister',{ref:"LoginRegister",on:{"openDialog":_vm.openDialog,"giftStatusChange":_vm.giftStatusChange}}),_c('Agreement',{ref:"Agreement"}),_c('PrivacyProtocol',{ref:"PrivacyProtocol"}),_c('Download',{ref:"Download",on:{"openDialog":_vm.openDialog,"downloadSupreme":_vm.downloadSupreme}}),_c('PersonalGuide',{ref:"PersonalGuide",attrs:{"locales":_vm.locales},on:{"close":function($event){return _vm.getUdid('1')}}}),_c('EnterpriseGuide',{ref:"EnterpriseGuide",attrs:{"locales":_vm.locales},on:{"close":_vm.downloadFree}}),_c('PayConfirm',{ref:"PayConfirm",on:{"payConfirm":_vm.payConfirm}}),_c('PayWay',{ref:"PayWay"}),_c('Gift',{ref:"Gift"}),_c('User',{ref:"User"}),_c('DownloadTip',{ref:"DownloadTip"})],1)}
    var staticRenderFns = []
    
    
    // CONCATENATED MODULE: ./src/views/previewPage/index.vue?vue&type=template&id=3e082106&scoped=true&
    
    // EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
    var toConsumableArray = __webpack_require__(243);
    var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
    
    // EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
    var regenerator = __webpack_require__(60);
    var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
    
    // EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
    var asyncToGenerator = __webpack_require__(61);
    var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
    
    // EXTERNAL MODULE: ./src/utils/headsMixin.js
    var headsMixin = __webpack_require__(248);
    
    // EXTERNAL MODULE: ./src/api/index.js
    var api = __webpack_require__(103);
    
    // EXTERNAL MODULE: ./src/utils/auth.js
    var auth = __webpack_require__(59);
    
    // EXTERNAL MODULE: ./src/utils/way.js
    var way = __webpack_require__(105);
    
    // EXTERNAL MODULE: ./src/language/index.js + 1 modules
    var language = __webpack_require__(102);
    
    // EXTERNAL MODULE: ./src/language/initLanguage.js
    var initLanguage = __webpack_require__(110);
    
    // CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/previewPage/index.vue?vue&type=script&lang=js&
    
    
    
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    
     //head的,设置属性heads即可使用
    
    
    // import { trackBegin } from '@/utils/track'
    
    
    
    
    var timer = null;
    /* harmony default export */ var previewPagevue_type_script_lang_js_ = ({
      components: {
        OpenWithAnotherBrowser: function OpenWithAnotherBrowser() {
          return __webpack_require__.e/* import() */(20).then(__webpack_require__.bind(null, 330));
        },
        ErrorTip: function ErrorTip() {
          return __webpack_require__.e/* import() */(7/* duplicate */).then(__webpack_require__.bind(null, 331));
        },
        LoginRegister: function LoginRegister() {
          return __webpack_require__.e/* import() */(21).then(__webpack_require__.bind(null, 332));
        },
        Agreement: function Agreement() {
          return __webpack_require__.e/* import() */(24).then(__webpack_require__.bind(null, 337));
        },
        PrivacyProtocol: function PrivacyProtocol() {
          return __webpack_require__.e/* import() */(17).then(__webpack_require__.bind(null, 338));
        },
        Download: function Download() {
          return __webpack_require__.e/* import() */(23).then(__webpack_require__.bind(null, 339));
        },
        PersonalGuide: function PersonalGuide() {
          return __webpack_require__.e/* import() */(18).then(__webpack_require__.bind(null, 340));
        },
        EnterpriseGuide: function EnterpriseGuide() {
          return __webpack_require__.e/* import() */(22).then(__webpack_require__.bind(null, 341));
        },
        PayConfirm: function PayConfirm() {
          return __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, 342));
        },
        PayWay: function PayWay() {
          return __webpack_require__.e/* import() */(19).then(__webpack_require__.bind(null, 343));
        },
        Gift: function Gift() {
          return __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, 344));
        },
        User: function User() {
          return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, 345));
        },
        videoPlayer: function videoPlayer() {
          return __webpack_require__.e/* import() */(16).then(__webpack_require__.bind(null, 346));
        },
        DownloadTip: function DownloadTip() {
          return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, 347));
        }
      },
      mixins: [headsMixin["a" /* default */]],
      provide: function provide() {
        return {
          game: this.game
        };
      },
      asyncData: function asyncData(_ref) {
        var store = _ref.store,
            route = _ref.route,
            headers = _ref.headers,
            language = _ref.language;
        var _route$query = route.query,
            gameId = _route$query.gameId,
            autoIndex = _route$query.autoIndex,
            superSign = _route$query.superSign,
            fromchannel = _route$query.fromchannel;
    
        console.log(gameId, autoIndex, superSign, 'gameId, autoIndex, superSign');
        return store.dispatch('getGame', { gameId: gameId, fromchannel: fromchannel, autoIndex: autoIndex, superSign: superSign, headers: headers, language: language });
      },
      data: function data() {
        return {
          lock: false,
          payState: {}, //支付状态,
          giftStatus: '', //领取新人礼包状态,
          giftStatustip: '',
          userName: '',
          gameLink: '',
          locales: 'en',
          iframeSrc: '',
          loginName: this.$t('Login'), // 登录
          registerName: this.$t('Register'), // 注册
          downloadName: this.$t('Download'),
          golinkdName: this.$t('Golink')
        };
      },
    
      computed: {
        // gameShowName 有则取 无则使用gameName格式化后的内容
        gameShowName: function gameShowName() {
          if (this.game.tgljConfig.gameShowName) {
            return this.game.tgljConfig.gameShowName;
          }
          var hasBracket = this.game.tgljConfig.shareLinkTitle.indexOf('（');
          var text = void 0;
          if (hasBracket) {
            // text = item.text.replace(/\（.*?\）/g, '') // 英文括号
            text = this.game.tgljConfig.shareLinkTitle.replace(/（.*?）/g, ''); // 中文括号
          } else {
            text = this.game.tgljConfig.shareLinkTitle;
          }
          return text;
        },
        game: function game() {
          return this.$store.state.game;
        },
    
        // 页面组件显示隐藏控制
        pageModule: function pageModule() {
          return function (moduleId) {
            var pageModule = void 0;
            if (typeof this.game.tgljConfig.pageModule === 'string') {
              pageModule = this.game.tgljConfig.pageModule.split(',');
            } else {
              pageModule = [];
            }
            return pageModule.includes(moduleId);
          };
        }
      },
      created: function created() {
        if (this.game.tgljConfig && this.game.tgljConfig.languageType) {
          var type = this.game.tgljConfig.languageType;
          var currentType = type.split(',');
          console.log('---------currentType', currentType, type);
          if (currentType.includes('zh-TW')) {
            // zh-TW en zh-CN
            this.$i18n.locale = 'zh-TW';
          } else {
            // const langType = type == 'zh' ? 'zh-CN' : type
            var langType = Object(initLanguage["a" /* initLanguageType */])(type);
            console.log('langType', langType, type);
            this.$i18n.locale = type ? langType : 'zh-TW';
          }
          console.log('\u5F53\u524D\u8BED\u8A00\u73AF\u5883\u662F3' + this.$i18n.locale);
          Object(auth["o" /* setLanguageType */])(this.$i18n.locale);
        }
      },
      mounted: function mounted() {
        var _this = this;
    
        return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
          var url, timerId, type, currentType, langType;
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.log('\u5F53\u524D\u8BED\u8A00\u73AF\u5883\u662F2' + _this.$i18n.locale, _this.game, _this.loginName, _this.registerName);
    
                  if (!_this.game.banType) {
                    _context.next = 6;
                    break;
                  }
    
                  Object(auth["q" /* setMsgType */])(_this.game.banType);
                  Object(auth["o" /* setLanguageType */])(_this.game.language);
                  _this.$router.push('/404?errCode=' + _this.game.banType + '&lang=' + _this.game.language);
                  // this.openDialog('ErrorTip', this.$t('NoDownload') + '  E-00' + res.banType)
                  return _context.abrupt('return');
    
                case 6:
                  // this.locales = this.$i18n.locale === undefined ? 'en' : this.$i18n.locale
                  _this.userName = Object(auth["d" /* getLoginAccount */])();
                  _this.gameLink = Object(auth["a" /* getGameLink */])();
                  _this.giftStatus = Object(auth["b" /* getGiftStatus */])();
                  _this.giftStatusChange(_this.giftStatus);
                  url = window.location.search;
    
                  if (!_this.userName && url.indexOf('superSign') === -1 && _this.game.tgljConfig.defaultRegisterDialogFlag === 1) {
                    setTimeout(function () {
                      _this.openDialog('LoginRegister', 'register', 'login');
                    }, 1000);
                  }
                  //  重新获取语言
                  Object(language["b" /* getCdnLanguageConfig */])(_this.$i18n.locale);
                  timerId = setTimeout(function () {
                    _this.loginName = _this.$t('Login');
                    _this.registerName = _this.$t('Register');
                    _this.downloadName = _this.$t('Download');
                    _this.golinkdName = _this.$t('Golink');
                    clearTimeout(timerId);
                  }, 1000);
    
    
                  console.log('\u5F53\u524D\u8BED\u8A00\u73AF\u5883\u662F4' + _this.$i18n.locale, _this.game, _this.loginName, _this.registerName);
                  // 获取当前的video 元素
                  // this.delDisablePictureInPicture()
                  // this.initScroll()
                  // let that = this
                  // window.onresize = function () {
                  //   if (timer) {
                  //     clearTimeout(timer)
                  //     timer = null
                  //   }
                  //   timer = setTimeout(() => {
                  //     that.initScroll()
                  //   }, 500)
                  // }
                  //如果有重定向地址，则跳转
    
                  if (!_this.game.redirect) {
                    _context.next = 18;
                    break;
                  }
    
                  window.location.href = _this.game.gameUrl;
                  return _context.abrupt('return');
    
                case 18:
                  // 开始执行埋点
                  // trackBegin(this.$store.state.game)
                  // 设置微信分享
    
                  // this.setWxShare()
    
                  //如果有sign，设置sign到缓存，没有sign则从缓存中取出sign
                  if (_this.game.sign) {
                    localStorage.setItem('sign', _this.game.sign);
                  } else {
                    _this.game.sign = localStorage.getItem('sign');
                  }
    
                  if (!_this.game.udid) {
                    _context.next = 22;
                    break;
                  }
    
                  _context.next = 22;
                  return _this.getSuperSignOrderPayState();
    
                case 22:
                  //判断pageType，如果是支付回调，且支付成功，直接跳转三方下载链接
                  if (['3', '4'].includes(_this.game.pageType) && _this.payState.orderStatus === 1) {
                    _this.getRealUrlParams();
                  }
                  window.localStorage.setItem('gameId', _this.game.gameId);
                  window.localStorage.setItem('autoIndex', _this.game.autoIndex);
                  Object(auth["l" /* setGameInfo */])(_this.game); // 设置游戏信息，要啥自己配
                  if (_this.game.tgljConfig && _this.game.tgljConfig.languageType) {
                    type = _this.game.tgljConfig.languageType;
                    currentType = type.split(',');
    
                    if (currentType.includes('zh-TW')) {
                      // zh-TW en zh-CN
                      _this.$i18n.locale = 'zh-TW';
                    } else {
                      langType = Object(initLanguage["a" /* initLanguageType */])(type);
    
                      _this.$i18n.locale = type ? langType : 'zh-TW';
                    }
                    console.log('\u5F53\u524D\u8BED\u8A00\u73AF\u5883\u662F3' + _this.$i18n.locale);
                    _this.locales = _this.$i18n.locale;
                    // getCdnLanguageConfig(this.$i18n.locale)
                  }
    
                case 27:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }))();
      },
      heads: function heads() {
        try {
          return {
            title: this.game.tgljConfig.gameShowName ? this.game.tgljConfig.gameShowName : this.game.tgljConfig.gameName,
            metas: [{ property: 'og:type', name: 'og:type', content: 'website' }, { property: 'description', name: 'description', content: this.game.tgljConfig.shareInfo }, { property: 'og:title', name: 'og:title', content: this.game.tgljConfig.shareLinkTitle }, { property: 'og:description', name: 'og:description', content: this.game.tgljConfig.shareInfo }, { property: 'og:image', name: 'og:image', content: this.game.tgljConfig.imageList.share_icon
              // { property: 'og:url', name: 'og:url', content: 'https://test-newcps.lejunwl.com/tgljPreview/previewPage.html?gameId=yjOcxsRjHSa9lzv79MdCEA&autoIndex=iolm-UqLeSezT-EHXRtCow' },
              // Twitter
              // { property: 'twitter:card', name: 'twitter:card', content: this.game.tgljConfig.shareInfo },
              // { property: 'twitter:site', name: 'twitter:site', content: this.game.tgljConfig.shareLinkTitle },
              // { property: 'twitter:title', name: 'twitter:title', content: this.game.tgljConfig.shareLinkTitle },
              // { property: 'twitter:description', name: 'twitter:description', content: this.game.tgljConfig.shareInfo },
              // { property: 'twitter:image', name: 'twitter:image', content: window.location.href }
            }]
          };
        } catch (error) {
          return {
            title: '',
            metas: [{ property: 'description', name: 'description', content: '' }, { property: 'og:title', name: 'og:title', content: '' }, { property: 'og:description', name: 'og:description', content: '' }, { property: 'og:image', name: 'og:image', content: ''
              // { vmid: 'og:url', name: 'og:url', content: '' }
            }]
          };
        }
      },
    
      methods: {
        // 初始化滚轮  到达底部进行打点
        // initScroll() {
        //   // debugger
        //   console.log(123)
        //   const that = this
    
        //   setTimeout(() => {
        //     const dom = document.getElementById('app')
        //     const rect = dom.getClientRects()[0]
        //     const height = parseInt(rect.height)
        //     const { innerHeight } = window
        //     // console.log(123, rect)
        //     window.onscroll = function () {
        //       let scrolltop = document.documentElement.scrollTop || document.body.scrollTop
    
        //       // console.log('456', scrolltop + innerHeight, height)
        //       //+-5是为了保证一定的弹性，并非要刚好相等才出发，
        //       if (height <= parseInt(scrolltop + innerHeight)) {
        //         if (that.lock) return
        //         console.log('监听成功', '到达底部')
        //         // that.$bd.bd_record('E5_0_0')
        //         that.lock = true
        //       } else {
        //         that.lock = false
        //       }
        //     }
        //   }, 500)
        // },
    
        // 获取当前网络状态
        // getConnection() {
        //   // alert(111111)
        //   console.log('window', window)
        //   let connectionType = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection || { effectiveType: undefined }
        //   console.log('网络状态', connectionType.effectiveType)
        // },
    
        // delDisablePictureInPicture() {
        //   console.log('11111', this.$refs.videoPlayer)
        //   // this.$refs.videoPlayer
        // },
        setIframeUrl: function setIframeUrl(url) {
          console.log(url, '=========');
          this.iframeSrc = url;
          // this.iframeSrc = 'https://www.baidu'
        },
    
        // 下载按钮
    
        isValited: function isValited(code) {
          var _this2 = this;
    
          return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
            var res;
            return regenerator_default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return _this2.$request(api["a" /* Api */].getGiftContent, { code: code });
    
                  case 3:
                    res = _context2.sent;
                    return _context2.abrupt('return', true);
    
                  case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2['catch'](0);
                    return _context2.abrupt('return', false);
    
                  case 10:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, _this2, [[0, 7]]);
          }))();
        },
        download: function download() {
          var _this3 = this;
    
          return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
            var captchaVerification;
            return regenerator_default.a.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _this3.locales = _this3.$i18n.locale;
                    console.log('\u5F53\u524D\u8BED\u8A00\u73AF\u5883\u662F4' + _this3.locales);
                    if (_this3.$store.state.from === 'wx') {
                      // debugger
                      // this.$bd.bd_record('E2_0_0_P1_E10')
                    }
    
                    if (!_this3.isWechat()) {
                      _context3.next = 5;
                      break;
                    }
    
                    return _context3.abrupt('return');
    
                  case 5:
    
                    //弹窗人机校验
                    captchaVerification = null;
                    // captchaVerification = await this.$vaptcha()
    
                    if (!(Number(_this3.game.tgljConfig.downloadValidateFlag) === 1)) {
                      _context3.next = 10;
                      break;
                    }
    
                    _context3.next = 9;
                    return _this3.$vaptcha();
    
                  case 9:
                    captchaVerification = _context3.sent;
    
                  case 10:
                    if (!captchaVerification) {
                      _context3.next = 20;
                      break;
                    }
    
                    _context3.prev = 11;
                    _context3.next = 14;
                    return _this3.$request(api["a" /* Api */].getVaptchaCheck, { token: captchaVerification });
    
                  case 14:
                    _context3.next = 20;
                    break;
    
                  case 16:
                    _context3.prev = 16;
                    _context3.t0 = _context3['catch'](11);
    
                    console.log('error', _context3.t0);
                    return _context3.abrupt('return');
    
                  case 20:
                    if (!(_this3.game.tgljConfig.sysFlag === 0)) {
                      _context3.next = 24;
                      break;
                    }
    
                    _context3.next = 23;
                    return _this3.sysFlagTypeDown();
    
                  case 23:
                    return _context3.abrupt('return');
    
                  case 24:
                    if (!(_this3.game.tgljConfig.sysFlag === 3)) {
                      _context3.next = 28;
                      break;
                    }
    
                    _context3.next = 27;
                    return _this3.sysFlagTypeDown();
    
                  case 27:
                    return _context3.abrupt('return');
    
                  case 28:
                    if (!(_this3.game.tgljConfig.appstoreFlag === 0)) {
                      _context3.next = 36;
                      break;
                    }
    
                    if (!_this3.userName) {
                      _context3.next = 34;
                      break;
                    }
    
                    // this.openDialog('Download')
                    window.location.href = _this3.game.tgljConfig.appstoreDlUrl;
                    return _context3.abrupt('return');
    
                  case 34:
                    _this3.openDialog('LoginRegister', 'login', 'download');
    
                  case 35:
                    return _context3.abrupt('return');
    
                  case 36:
                    if (!(_this3.game.tgljConfig.enterpriseSignFlag && _this3.game.tgljConfig.personSignFlag)) {
                      _context3.next = 38;
                      break;
                    }
    
                    return _context3.abrupt('return', _this3.openDialog('Download'));
    
                  case 38:
                    if (!_this3.game.tgljConfig.enterpriseSignFlag) {
                      _context3.next = 40;
                      break;
                    }
    
                    return _context3.abrupt('return', _this3.$refs.Download.free());
    
                  case 40:
                    if (!_this3.game.tgljConfig.personSignFlag) {
                      _context3.next = 42;
                      break;
                    }
    
                    return _context3.abrupt('return', _this3.$refs.Download.supreme());
    
                  case 42:
                    if (!(!_this3.game.tgljConfig.enterpriseSignFlag && !_this3.game.tgljConfig.personSignFlag)) {
                      _context3.next = 45;
                      break;
                    }
    
                    _this3.openDialog('ErrorTip', _this3.$t('DownloadClosed'));
                    return _context3.abrupt('return');
    
                  case 45:
                  case 'end':
                    return _context3.stop();
                }
              }
            }, _callee3, _this3, [[11, 16]]);
          }))();
        },
        sysFlagTypeDown: function sysFlagTypeDown() {
          var _this4 = this;
    
          return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
            var reg;
            return regenerator_default.a.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(_this4.game.tgljConfig.googleStoreApp === 0)) {
                      _context4.next = 9;
                      break;
                    }
    
                    if (_this4.userName) {
                      _context4.next = 4;
                      break;
                    }
    
                    _this4.openDialog('LoginRegister', 'login', 'download');
                    return _context4.abrupt('return', false);
    
                  case 4:
                    //谷歌商店APP
                    reg = /^http[s]?:\/\/.*/; //判断是否以http://或https://开头
    
                    if (reg.test(_this4.game.tgljConfig.googleStoreUrl)) {
                      window.location.href = _this4.game.tgljConfig.googleStoreUrl + '&referrer=' + _this4.game.autoIndex;
                    } else {
                      window.location.href = 'http://' + _this4.game.tgljConfig.googleStoreUrl + '&referrer=' + _this4.game.autoIndex;
                    }
                    return _context4.abrupt('return');
    
                  case 9:
                    console.log('下载内容显示');
                    // 下载内容显示
    
                    if (!(_this4.game.tgljConfig.downloadTipsWindowsFlag === 1)) {
                      _context4.next = 12;
                      break;
                    }
    
                    return _context4.abrupt('return', _this4.openDialog('DownloadTip'));
    
                  case 12:
                    if (!_this4.game.banType) {
                      _context4.next = 15;
                      break;
                    }
    
                    _this4.openDialog('ErrorTip', _this4.$t('NoDownload') + '  E-00' + _this4.game.banType);
                    return _context4.abrupt('return');
    
                  case 15:
                    if (!_this4.game.gameUrl) {
                      _context4.next = 20;
                      break;
                    }
    
                    _context4.next = 18;
                    return _this4.$alert('<div>' + _this4.$t('installGames') + '<span style="color:#fa7403">"' + _this4.$t('continueInstallation') + '"</span></div>', '' + _this4.$t('installTip'), {
                      confirmButtonText: '' + _this4.$t('gotIt'),
                      showClose: false,
                      customClass: 'message-box-orange-center',
                      dangerouslyUseHTMLString: true,
                      confirmButtonClass: 'el-button--orange'
                    });
    
                  case 18:
                    window.location.href = _this4.game.gameUrl;
                    return _context4.abrupt('return');
    
                  case 20:
                    //下载地址为空时，打开错误提示
                    _this4.openDialog('ErrorTip', _this4.$t('NoDownload'));
    
                  case 21:
                  case 'end':
                    return _context4.stop();
                }
              }
            }, _callee4, _this4);
          }))();
        },
    
        // 至尊版下载（个人签）
        downloadSupreme: function downloadSupreme() {
          var _this5 = this;
    
          return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
            var param, res;
            return regenerator_default.a.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (_this5.isSafari()) {
                      _context5.next = 2;
                      break;
                    }
    
                    return _context5.abrupt('return');
    
                  case 2:
                    if (_this5.game.udid) {
                      _context5.next = 5;
                      break;
                    }
    
                    _this5.getUdid('1');
                    return _context5.abrupt('return', _this5.openDialog('PersonalGuide'));
    
                  case 5:
                    _context5.next = 7;
                    return _this5.getSuperSignOrderPayState();
    
                  case 7:
                    if (!(_this5.payState.orderStatus === 1)) {
                      _context5.next = 9;
                      break;
                    }
    
                    return _context5.abrupt('return', _this5.getRealUrlParams());
    
                  case 9:
                    param = {
                      ywId: _this5.game.tgljConfig.ywId,
                      platId: _this5.game.platId,
                      giftId: _this5.game.tgljConfig.signGiftId
                      // 有开启个人签礼包
                    };
    
                    if (!(_this5.game.tgljConfig.signGift === 1)) {
                      _context5.next = 17;
                      break;
                    }
    
                    _context5.next = 13;
                    return _this5.$request(api["a" /* Api */].getGiftContent, param);
    
                  case 13:
                    res = _context5.sent;
    
                    _this5.$refs.PayConfirm.open(res);
                    _context5.next = 18;
                    break;
    
                  case 17:
                    _this5.$refs.PayConfirm.open();
    
                  case 18:
                  case 'end':
                    return _context5.stop();
                }
              }
            }, _callee5, _this5);
          }))();
        },
    
        //支付确认弹窗关闭
        payConfirm: function payConfirm() {
          //如果支付价格是0元
          if (this.game.tgljConfig.rechargePrice === 0) {
            return this.$refs.PayWay.freepay();
          }
          this.openDialog('PayWay');
        },
    
        //普通版下载（企业签）
        downloadFree: function downloadFree() {
          this.downLink = 'downloadFree';
          var href = 'itms-services://?action=download-manifest&url=' + this.game.gameUrl;
          if (this.isQQ()) {
            var a = document.createElement('a');
            a.setAttribute('href', href);
            a.setAttribute('id', 'startTelMedicine');
            // 防止反复添加
            var el = document.getElementById('startTelMedicine');
            if (el) {
              document.body.removeChild(el);
            }
            document.body.appendChild(a);
            a.click();
          } else {
            var arr = this.game.gameUrl.split('.');
            var ext = arr[arr.length - 1];
            if (ext === 'apk' || ext === 'APK') {
              window.location.href = this.game.gameUrl;
            } else {
              window.location.href = 'itms-services://?action=download-manifest&url=' + this.game.gameUrl;
            }
            // window.location.href = 'itms-services://?action=download-manifest&url=' + this.game.gameUrl
          }
        },
    
    
        //支付完成之后（包括免费支付），获取第三方下载链接
        getRealUrlParams: function getRealUrlParams() {
          var _this6 = this;
    
          return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee6() {
            var param, res;
            return regenerator_default.a.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    param = {
                      udid: _this6.game.udid,
                      channelId: _this6.game.superSignChannelKey,
                      authorizePlatId: _this6.game.tgljConfig.authorizePlatId,
                      applicationId: _this6.game.tgljConfig.applicationId,
                      personSignBundleId: _this6.game.tgljConfig.personSignBundleId,
                      gameId: _this6.game.tgljConfig.gameId,
                      gameName: _this6.game.tgljConfig.gameName
                    };
                    _context6.next = 3;
                    return _this6.$request(api["a" /* Api */].getRealUrlParams, param);
    
                  case 3:
                    res = _context6.sent;
    
                    if (res.url) {
                      window.location.href = res.url;
                    } else {
                      window.location.href = _this6.game.tgljConfig.personSignDownloadUrl + res.realUrlParams;
                    }
    
                  case 5:
                  case 'end':
                    return _context6.stop();
                }
              }
            }, _callee6, _this6);
          }))();
        },
    
    
        //获取订单状态
        getSuperSignOrderPayState: function getSuperSignOrderPayState() {
          var _this7 = this;
    
          return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee7() {
            var _game, sign, udid, personSignBundleId;
    
            return regenerator_default.a.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _game = _this7.game, sign = _game.sign, udid = _game.udid;
                    personSignBundleId = _this7.game.tgljConfig.personSignBundleId;
                    _context7.next = 4;
                    return _this7.$request(api["a" /* Api */].getSuperSignOrderPayState, { sign: sign, udid: udid, personSignBundleId: personSignBundleId });
    
                  case 4:
                    _this7.payState = _context7.sent;
    
                  case 5:
                  case 'end':
                    return _context7.stop();
                }
              }
            }, _callee7, _this7);
          }))();
        },
    
    
        //获取个人签礼包详情
        personalGift: function personalGift() {
          var _this8 = this;
    
          return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee8() {
            var _payState, giftBagCode, giftBagContent;
    
            return regenerator_default.a.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (_this8.isSafari()) {
                      _context8.next = 2;
                      break;
                    }
    
                    return _context8.abrupt('return');
    
                  case 2:
                    if (_this8.game.udid) {
                      _context8.next = 5;
                      break;
                    }
    
                    _this8.getUdid('1');
                    return _context8.abrupt('return', _this8.openDialog('PersonalGuide'));
    
                  case 5:
                    if (!(_this8.payState.orderStatus !== 1)) {
                      _context8.next = 7;
                      break;
                    }
    
                    return _context8.abrupt('return', _this8.openDialog('Gift'));
    
                  case 7:
                    if (!_this8.payState.showGiftBag) {
                      _context8.next = 10;
                      break;
                    }
    
                    _payState = _this8.payState, giftBagCode = _payState.giftBagCode, giftBagContent = _payState.giftBagContent;
                    return _context8.abrupt('return', _this8.openDialog('Gift', { giftBagCode: giftBagCode, giftBagContent: giftBagContent }));
    
                  case 10:
                  case 'end':
                    return _context8.stop();
                }
              }
            }, _callee8, _this8);
          }))();
        },
    
    
        // 下载描述文件 获取udid
        getUdid: function getUdid(pageType) {
          var _this9 = this;
    
          return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee9() {
            var _$route$query, gameId, autoIndex, res, mobileConfigUrl, iframe;
    
            return regenerator_default.a.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    // pageType:0是礼包码页面触发，1是立即下载触发，2是微信回调，3是支付宝回调
                    _$route$query = _this9.$route.query, gameId = _$route$query.gameId, autoIndex = _$route$query.autoIndex;
                    _context9.next = 3;
                    return _this9.$request(api["a" /* Api */].createUDID, { gameId: gameId, autoIndex: autoIndex, pageType: pageType });
    
                  case 3:
                    res = _context9.sent;
                    mobileConfigUrl = res.mobileConfigUrl;
                    iframe = document.createElement('iframe');
    
                    iframe.style.display = 'none';
                    iframe.style.height = 0;
                    iframe.src = mobileConfigUrl;
                    document.body.appendChild(iframe);
    
                  case 10:
                  case 'end':
                    return _context9.stop();
                }
              }
            }, _callee9, _this9);
          }))();
        },
    
    
        //默认下载
        defaultDownload: function defaultDownload() {
          if (this.isWechat()) return;
          if (this.game.banType === 8) {
            this.openDialog('ErrorTip', this.game.msg);
            return;
          }
          if (this.game.banType) {
            this.openDialog('ErrorTip', this.$t('NoDownload') + '  E-00' + this.game.banType);
            return;
          }
          if (!this.game.gameUrl) {
            return this.openDialog('ErrorTip', this.$t('NoDownload'));
          }
          var arr = this.game.gameUrl.split('.');
          var ext = arr[arr.length - 1];
          if (ext === 'apk' || ext === 'APK') {
            window.location.href = this.game.gameUrl;
          } else {
            window.location.href = 'itms-services://?action=download-manifest&url=' + this.game.gameUrl;
          }
        },
    
    
        //领取新人礼包按钮
        receive: function receive() {
          //如果已经领取过新人礼包,或者已经领完则不打开弹窗
          // if (this.giftStatus) {
          //   return
          // }
          if (this.userName) {
            // 立即领取
            if (this.giftStatus === undefined || Number(this.giftStatus) === 0) {
              this.getGiftPackReceive();
            } else {
              return;
            }
          } else {
            this.openDialog('LoginRegister', 'register', 'gift');
          }
        },
    
    
        //新人礼包领取状态改变
        giftStatusChange: function giftStatusChange(status) {
          this.giftStatustip = [this.$t('ReceiveStatus0'), this.$t('ReceiveStatus1'), this.$t('ReceiveStatus2')][status];
        },
    
    
        // 礼包领取
        getGiftPackReceive: function getGiftPackReceive() {
          var _this10 = this;
    
          return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee10() {
            var pageModule, newUserGiftId, param, res;
            return regenerator_default.a.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    //判断新人礼包是否开启
                    pageModule = void 0;
    
                    if (typeof _this10.game.tgljConfig.pageModule === 'string') {
                      pageModule = _this10.game.tgljConfig.pageModule.split(',');
                    } else {
                      pageModule = [];
                    }
                    newUserGiftId = pageModule.includes('1') ? _this10.game.tgljConfig.newUserGiftId : null;
                    param = {
                      ywId: _this10.game.tgljConfig.ywId,
                      platId: _this10.game.platId,
                      newUserGiftId: newUserGiftId,
                      username: Object(auth["d" /* getLoginAccount */])()
                      // language: getLanguage()
                    };
                    _context10.next = 6;
                    return _this10.$request(api["a" /* Api */].giftPackReceive, param, { unCheckCode: true });
    
                  case 6:
                    res = _context10.sent;
    
                    if (res.data === 50002) {
                      //50002是已领取过该礼包
                      Object(auth["n" /* setGiftStatus */])(1);
                      _this10.giftStatustip = 1;
                      _this10.$message.success(_this10.$t('GiftStatustip1'));
                    } else if (res.data === 50003) {
                      //50003是领取成功
                      Object(auth["n" /* setGiftStatus */])(1);
                      _this10.giftStatustip = 1;
                      _this10.$message.success(_this10.$t('GiftStatustip2'));
                    } else if (res.data === 50004) {
                      //50004是无礼包可领
                      Object(auth["n" /* setGiftStatus */])(0);
                      _this10.giftStatustip = 0;
                      _this10.$message.success(_this10.$t('GiftStatustip3'));
                    } else {
                      //50004是领取失败
                      Object(auth["n" /* setGiftStatus */])(0);
                      _this10.giftStatustip = 0;
                      _this10.$message.error(res.msg);
                    }
                    _this10.giftStatusChange(_this10.giftStatustip);
                    Object(way["a" /* isConfigDownloadStore */])(_this10.game);
                    setTimeout(function () {
                      location.reload();
                    }, 3000);
    
                  case 11:
                  case 'end':
                    return _context10.stop();
                }
              }
            }, _callee10, _this10);
          }))();
        },
        golink: function golink() {
          if (this.game.quickLink) {
            window.location.href = this.game.quickLink;
            return;
          }
          window.location.href = this.gameLink;
        },
    
    
        //设置微信分享
        setWxShare: function setWxShare() {
          var _this11 = this;
    
          return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee11() {
            var userAgent, that, url, res;
            return regenerator_default.a.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    userAgent = navigator.userAgent.toLowerCase();
    
                    console.log('userAgent', userAgent);
    
                    if (!(userAgent.indexOf('micromessenger') === -1)) {
                      _context11.next = 4;
                      break;
                    }
    
                    return _context11.abrupt('return');
    
                  case 4:
                    console.log('llll', userAgent.indexOf('micromessenger'), userAgent.indexOf('micromessenger') !== -1);
                    that = _this11;
                    url = location.href.split('#')[0];
                    _context11.next = 9;
                    return _this11.$request(api["a" /* Api */].getWxInfo, { url: url });
    
                  case 9:
                    res = _context11.sent;
    
                    window.wx.config({
                      debug: false,
                      appId: res.appId,
                      timestamp: res.timestamp,
                      nonceStr: res.noncestr,
                      signature: res.signature,
                      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'updateTimelineShareData', 'updateAppMessageShareData']
                    });
                    window.wx.ready(function () {
                      var shareData = {
                        imgUrl: that.game.tgljConfig.imageList.share_icon, // 分享显示的缩略图地址
                        link: res.pageUrl + '&fromchannel=wx', // 分享地址
                        desc: that.game.tgljConfig.shareInfo, // 分享描述
                        title: that.game.tgljConfig.shareLinkTitle, // 分享标题
                        success: function success(res) {
                          console.log('分享成功回调', res);
    
                          //未开启普通版下载时弹窗
                        },
                        trigger: function trigger() {
                          console.log('分享成功');
                          // that.$bd.bd_record('E2_0_0_P5_E7', { gameId: that.game.gameId })
                        },
                        error: function error() {
                          console.log('分享失败回调', res.pageUrl + '&fromchannel=wx');
                        }
                      };
    
                      var shareDataLine = {
                        imgUrl: that.game.tgljConfig.imageList.share_icon, // 分享显示的缩略图地址
                        link: res.pageUrl + '&fromchannel=wx', // 分享地址
                        desc: that.game.tgljConfig.shareInfo, // 分享描述
                        title: that.game.tgljConfig.shareLinkTitle, // 分享标题
                        success: function success(res) {
                          console.log('分享成功回调', res);
                        },
                        trigger: function trigger() {
                          console.log('分享成功');
                          // that.$bd.bd_record('E2_0_0_P5_E8', { gameId: that.game.gameId })
                        },
                        error: function error() {
                          console.log('分享失败回调', res.pageUrl + '&fromchannel=wx');
                        }
                      };
    
                      console.log('分享结果', res.pageUrl + '&fromchannel=wx');
                      if (window.wx.updateAppMessageShareData) {
                        window.wx.updateAppMessageShareData(shareData);
                        window.wx.onMenuShareAppMessage(shareData);
                      } else {
                        window.wx.onMenuShareAppMessage(shareData);
                      }
                      if (window.wx.updateTimelineShareData) {
                        window.wx.updateTimelineShareData(shareDataLine);
                        window.wx.onMenuShareTimeline(shareDataLine);
                      } else {
                        window.wx.onMenuShareTimeline(shareDataLine);
                      }
                      // window.wx.onMenuShareAppMessage(shareData)
                      // window.wx.onMenuShareTimeline(shareDataLine)
                    });
    
                  case 12:
                  case 'end':
                    return _context11.stop();
                }
              }
            }, _callee11, _this11);
          }))();
        },
    
    
        // 判断是否为微信浏览器 1 是 0 否
        isWechat: function isWechat() {
          var userAgent = navigator.userAgent;
          console.log(userAgent);
    
          if (userAgent.includes('MicroMessenger')) {
            this.openDialog('OpenWithAnotherBrowser', 'other');
          }
          return 0;
          // if (this.game.isWechat) {
          //   this.openDialog('OpenWithAnotherBrowser', 'other')
          // }
          // return this.game.isWechat
        },
    
    
        //判断是否QQ浏览器
        isQQ: function isQQ() {
          console.log('isQQ', this.game);
          // 不是Safari浏览器时，打开"用其他浏览器打开"弹窗
          var isQQBrowser = /QQ\/[0-9]/.test(navigator.userAgent);
          return isQQBrowser;
        },
    
    
        //判断是否Safari浏览器
        isSafari: function isSafari() {
          console.log('isSafari', this.game);
          // 不是Safari浏览器时，打开"用其他浏览器打开"弹窗
          var isSafariBrowser = /Safari/.test(navigator.userAgent);
          if (!isSafariBrowser) {
            this.openDialog('OpenWithAnotherBrowser', 'safari');
          }
          return isSafariBrowser;
        },
    
    
        //打开指定弹窗
        openDialog: function openDialog(dialogRef) {
          var _$refs$dialogRef;
    
          for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            arg[_key - 1] = arguments[_key];
          }
    
          // debugger
          (_$refs$dialogRef = this.$refs[dialogRef]).open.apply(_$refs$dialogRef, toConsumableArray_default()(arg));
        }
      }
    });
    // CONCATENATED MODULE: ./src/views/previewPage/index.vue?vue&type=script&lang=js&
     /* harmony default export */ var views_previewPagevue_type_script_lang_js_ = (previewPagevue_type_script_lang_js_); 
    // EXTERNAL MODULE: ./src/views/previewPage/index.vue?vue&type=style&index=0&id=3e082106&lang=scss&scoped=true&
    var previewPagevue_type_style_index_0_id_3e082106_lang_scss_scoped_true_ = __webpack_require__(313);
    
    // EXTERNAL MODULE: ./src/views/previewPage/index.vue?vue&type=style&index=1&lang=scss&
    var previewPagevue_type_style_index_1_lang_scss_ = __webpack_require__(316);
    
    // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
    var componentNormalizer = __webpack_require__(101);
    
    // CONCATENATED MODULE: ./src/views/previewPage/index.vue
    
    
    
    
    
    
    
    /* normalize component */
    
    var component = Object(componentNormalizer["a" /* default */])(
      views_previewPagevue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      "3e082106",
      null
      
    )
    
    /* harmony default export */ var previewPage = __webpack_exports__["default"] = (component.exports);
    
    /***/ })
    
    });