
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["wx-image, wx-swiper, .",[1],"img-view { width: ",[0,750],"; height: ",[0,500],"; }\n.",[1],"page-section-title { margin-top: ",[0,50],"; }\n",],undefined,{path:"./pages/template/nav-search-input/nav-search-input.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/nav-search-input/nav-search-input.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      