/*! For license information please see 580dd1a71c52b48b5dcf56c272815ee0cb34676c.js.LICENSE.txt */
(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2748],{57444:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{ZP:function(){return X}});var i=n(66e3),o=n(52134),u=n(7595),a=n(39519),s=n.n(a),l=n(70079);n(20503);let c=e=>"object"==typeof e&&null!=e&&1===e.nodeType,d=(e,t)=>(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e,p=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let n=getComputedStyle(e,null);return d(n.overflowY,t)||d(n.overflowX,t)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},f=(e,t,n,r,i,o,u,a)=>o<e&&u>t||o>e&&u<t?0:o<=e&&a<=n||u>=t&&a>=n?o-e-r:u>t&&a<n||o<e&&a>n?u-t+i:0,h=e=>{let t=e.parentElement;return null==t?e.getRootNode().host||null:t};var g=n(3633),m=0;function v(e){return"function"==typeof e?e:I}function I(){}function y(e,t){if(e){var n=((e,t)=>{var n,r,i,o,u,a;if("undefined"==typeof document)return[];let{scrollMode:s,block:l,inline:d,boundary:g,skipOverflowHiddenElements:m}=t,v="function"==typeof g?g:e=>e!==g;if(!c(e))throw new TypeError("Invalid target");let I=document.scrollingElement||document.documentElement,y=[],S=e;for(;c(S)&&v(S);){if(S=h(S),S===I){y.push(S);break}null!=S&&S===document.body&&p(S)&&!p(document.documentElement)||null!=S&&p(S,m)&&y.push(S)}let b=null!=(r=null==(n=window.visualViewport)?void 0:n.width)?r:innerWidth,w=null!=(o=null==(i=window.visualViewport)?void 0:i.height)?o:innerHeight,E=null!=(u=window.scrollX)?u:pageXOffset,x=null!=(a=window.scrollY)?a:pageYOffset,{height:O,width:C,top:k,right:A,bottom:H,left:T}=e.getBoundingClientRect(),M="start"===l||"nearest"===l?k:"end"===l?H:k+O/2,R="center"===d?T+C/2:"end"===d?A:T,D=[];for(let c=0;c<y.length;c++){let e=y[c],{height:t,width:n,top:r,right:i,bottom:o,left:u}=e.getBoundingClientRect();if("if-needed"===s&&k>=0&&T>=0&&H<=w&&A<=b&&k>=r&&H<=o&&T>=u&&A<=i)return D;let a=getComputedStyle(e),p=parseInt(a.borderLeftWidth,10),h=parseInt(a.borderTopWidth,10),g=parseInt(a.borderRightWidth,10),m=parseInt(a.borderBottomWidth,10),v=0,S=0,P="offsetWidth"in e?e.offsetWidth-e.clientWidth-p-g:0,N="offsetHeight"in e?e.offsetHeight-e.clientHeight-h-m:0,_="offsetWidth"in e?0===e.offsetWidth?0:n/e.offsetWidth:0,j="offsetHeight"in e?0===e.offsetHeight?0:t/e.offsetHeight:0;if(I===e)v="start"===l?M:"end"===l?M-w:"nearest"===l?f(x,x+w,w,h,m,x+M,x+M+O,O):M-w/2,S="start"===d?R:"center"===d?R-b/2:"end"===d?R-b:f(E,E+b,b,p,g,E+R,E+R+C,C),v=Math.max(0,v+x),S=Math.max(0,S+E);else{v="start"===l?M-r-h:"end"===l?M-o+m+N:"nearest"===l?f(r,o,t,h,m+N,M,M+O,O):M-(r+t/2)+N/2,S="start"===d?R-u-p:"center"===d?R-(u+n/2)+P/2:"end"===d?R-i+g+P:f(u,i,n,p,g+P,R,R+C,C);let{scrollLeft:a,scrollTop:s}=e;v=Math.max(0,Math.min(s+v/j,e.scrollHeight-t/j+N)),S=Math.max(0,Math.min(a+S/_,e.scrollWidth-n/_+P)),M+=s-v,R+=a-S}D.push({el:e,top:v,left:S})}return D})(e,{boundary:t,block:"nearest",scrollMode:"if-needed"});n.forEach((function(e){var t=e.el,n=e.top,r=e.left;t.scrollTop=n,t.scrollLeft=r}))}}function S(e,t,n){return e===t||t instanceof n.Node&&e.contains&&e.contains(t)}function b(e,t){var n;function r(){n&&clearTimeout(n)}function i(){for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];r(),n=setTimeout((function(){n=null,e.apply(void 0,o)}),t)}return i.cancel=r,i}function w(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t.some((function(t){return t&&t.apply(void 0,[e].concat(r)),e.preventDownshiftDefault||e.hasOwnProperty("nativeEvent")&&e.nativeEvent.preventDownshiftDefault}))}}function E(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){"function"==typeof t?t(e):t&&(t.current=e)}))}}function x(){return String(m++)}function O(e){var t=e.isOpen,n=e.resultCount,r=e.previousResultCount;return t?n?n!==r?n+" result"+(1===n?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function C(e,t){return!(e=Array.isArray(e)?e[0]:e)&&t?t:e}function k(e){return"string"==typeof e.type}function A(e){return e.props}var H=["highlightedIndex","inputValue","isOpen","selectedItem","type"];function T(e){void 0===e&&(e={});var t={};return H.forEach((function(n){e.hasOwnProperty(n)&&(t[n]=e[n])})),t}function M(e,t){return Object.keys(e).reduce((function(n,r){return n[r]=R(t,r)?t[r]:e[r],n}),{})}function R(e,t){return void 0!==e[t]}function D(e){var t=e.key,n=e.keyCode;return n>=37&&n<=40&&0!==t.indexOf("Arrow")?"Arrow"+t:t}function P(e,t,n,r,i){if(void 0===i&&(i=!0),0===n)return-1;var o=n-1;("number"!=typeof t||t<0||t>=n)&&(t=e>0?-1:o+1);var u=t+e;u<0?u=i?o:0:u>o&&(u=i?0:o);var a=N(e,u,n,r,i);return-1===a?t>=n?-1:t:a}function N(e,t,n,r,i){var o=r(t);if(!o||!o.hasAttribute("disabled"))return t;if(e>0){for(var u=t+1;u<n;u++)if(!r(u).hasAttribute("disabled"))return u}else for(var a=t-1;a>=0;a--)if(!r(a).hasAttribute("disabled"))return a;return i?e>0?N(1,0,n,r,!1):N(-1,n-1,n,r,!1):-1}function _(e,t,n,r){return void 0===r&&(r=!0),t.some((function(t){return t&&(S(t,e,n)||r&&S(t,n.document.activeElement,n))}))}var j=b((function(e){U(e).textContent=""}),500);function V(e,t){var n=U(t);e&&(n.textContent=e,j(t))}function U(e){void 0===e&&(e=document);var t=e.getElementById("a11y-status-message");return t||((t=e.createElement("div")).setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}var K=Object.freeze({__proto__:null,unknown:0,mouseUp:1,itemMouseEnter:2,keyDownArrowUp:3,keyDownArrowDown:4,keyDownEscape:5,keyDownEnter:6,keyDownHome:7,keyDownEnd:8,clickItem:9,blurInput:10,changeInput:11,keyDownSpaceButton:12,clickButton:13,blurButton:14,controlledPropUpdatedSelectedItem:15,touchEnd:16}),L=["refKey","ref"],W=["onClick","onPress","onKeyDown","onKeyUp","onBlur"],Z=["onKeyDown","onBlur","onChange","onInput","onChangeText"],B=["refKey","ref"],Y=["onMouseMove","onMouseDown","onClick","onPress","index","item"],F=function(){var e=function(e){function t(t){var n;(n=e.call(this,t)||this).id=n.props.id||"downshift-"+x(),n.menuId=n.props.menuId||n.id+"-menu",n.labelId=n.props.labelId||n.id+"-label",n.inputId=n.props.inputId||n.id+"-input",n.getItemId=n.props.getItemId||function(e){return n.id+"-item-"+e},n.input=null,n.items=[],n.itemCount=null,n.previousResultCount=0,n.timeoutIds=[],n.internalSetTimeout=function(e,t){var r=setTimeout((function(){n.timeoutIds=n.timeoutIds.filter((function(e){return e!==r})),e()}),t);n.timeoutIds.push(r)},n.setItemCount=function(e){n.itemCount=e},n.unsetItemCount=function(){n.itemCount=null},n.setHighlightedIndex=function(e,t){void 0===e&&(e=n.props.defaultHighlightedIndex),void 0===t&&(t={}),t=T(t),n.internalSetState((0,i.Z)({highlightedIndex:e},t))},n.clearSelection=function(e){n.internalSetState({selectedItem:null,inputValue:"",highlightedIndex:n.props.defaultHighlightedIndex,isOpen:n.props.defaultIsOpen},e)},n.selectItem=function(e,t,r){t=T(t),n.internalSetState((0,i.Z)({isOpen:n.props.defaultIsOpen,highlightedIndex:n.props.defaultHighlightedIndex,selectedItem:e,inputValue:n.props.itemToString(e)},t),r)},n.selectItemAtIndex=function(e,t,r){var i=n.items[e];null!=i&&n.selectItem(i,t,r)},n.selectHighlightedItem=function(e,t){return n.selectItemAtIndex(n.getState().highlightedIndex,e,t)},n.internalSetState=function(e,t){var r,o,u={},a="function"==typeof e;return!a&&e.hasOwnProperty("inputValue")&&n.props.onInputValueChange(e.inputValue,(0,i.Z)({},n.getStateAndHelpers(),e)),n.setState((function(t){t=n.getState(t);var s=a?e(t):e;s=n.props.stateReducer(t,s),r=s.hasOwnProperty("selectedItem");var l={};return r&&s.selectedItem!==t.selectedItem&&(o=s.selectedItem),s.type=s.type||0,Object.keys(s).forEach((function(e){t[e]!==s[e]&&(u[e]=s[e]),"type"!==e&&(s[e],R(n.props,e)||(l[e]=s[e]))})),a&&s.hasOwnProperty("inputValue")&&n.props.onInputValueChange(s.inputValue,(0,i.Z)({},n.getStateAndHelpers(),s)),l}),(function(){v(t)(),Object.keys(u).length>1&&n.props.onStateChange(u,n.getStateAndHelpers()),r&&n.props.onSelect(e.selectedItem,n.getStateAndHelpers()),void 0!==o&&n.props.onChange(o,n.getStateAndHelpers()),n.props.onUserAction(u,n.getStateAndHelpers())}))},n.rootRef=function(e){return n._rootNode=e},n.getRootProps=function(e,t){var o,u=void 0===e?{}:e,a=u.refKey,s=void 0===a?"ref":a,l=u.ref,c=r(u,L),d=(void 0===t?{}:t).suppressRefError,p=void 0!==d&&d;n.getRootProps.called=!0,n.getRootProps.refKey=s,n.getRootProps.suppressRefError=p;var f=n.getState().isOpen;return(0,i.Z)(((o={})[s]=E(l,n.rootRef),o.role="combobox",o["aria-expanded"]=f,o["aria-haspopup"]="listbox",o["aria-owns"]=f?n.menuId:null,o["aria-labelledby"]=n.labelId,o),c)},n.keyDownHandlers={ArrowDown:function(e){var t=this;if(e.preventDefault(),this.getState().isOpen){var n=e.shiftKey?5:1;this.moveHighlightedIndex(n,{type:4})}else this.internalSetState({isOpen:!0,type:4},(function(){var e=t.getItemCount();if(e>0){var n=P(1,t.getState().highlightedIndex,e,(function(e){return t.getItemNodeFromIndex(e)}));t.setHighlightedIndex(n,{type:4})}}))},ArrowUp:function(e){var t=this;if(e.preventDefault(),this.getState().isOpen){var n=e.shiftKey?-5:-1;this.moveHighlightedIndex(n,{type:3})}else this.internalSetState({isOpen:!0,type:3},(function(){var e=t.getItemCount();if(e>0){var n=P(-1,t.getState().highlightedIndex,e,(function(e){return t.getItemNodeFromIndex(e)}));t.setHighlightedIndex(n,{type:3})}}))},Enter:function(e){if(229!==e.which){var t=this.getState(),n=t.isOpen,r=t.highlightedIndex;if(n&&null!=r){e.preventDefault();var i=this.items[r],o=this.getItemNodeFromIndex(r);if(null==i||o&&o.hasAttribute("disabled"))return;this.selectHighlightedItem({type:6})}}},Escape:function(e){e.preventDefault(),this.reset((0,i.Z)({type:5},!this.state.isOpen&&{selectedItem:null,inputValue:""}))}},n.buttonKeyDownHandlers=(0,i.Z)({},n.keyDownHandlers,{" ":function(e){e.preventDefault(),this.toggleMenu({type:12})}}),n.inputKeyDownHandlers=(0,i.Z)({},n.keyDownHandlers,{Home:function(e){var t=this,n=this.getState().isOpen;if(n){e.preventDefault();var r=this.getItemCount();if(!(r<=0)&&n){var i=N(1,0,r,(function(e){return t.getItemNodeFromIndex(e)}),!1);this.setHighlightedIndex(i,{type:7})}}},End:function(e){var t=this,n=this.getState().isOpen;if(n){e.preventDefault();var r=this.getItemCount();if(!(r<=0)&&n){var i=N(-1,r-1,r,(function(e){return t.getItemNodeFromIndex(e)}),!1);this.setHighlightedIndex(i,{type:8})}}}}),n.getToggleButtonProps=function(e){var t=void 0===e?{}:e,o=t.onClick;t.onPress;var u=t.onKeyDown,a=t.onKeyUp,s=t.onBlur,l=r(t,W),c=n.getState().isOpen,d={onClick:w(o,n.buttonHandleClick),onKeyDown:w(u,n.buttonHandleKeyDown),onKeyUp:w(a,n.buttonHandleKeyUp),onBlur:w(s,n.buttonHandleBlur)},p=l.disabled?{}:d;return(0,i.Z)({type:"button",role:"button","aria-label":c?"close menu":"open menu","aria-haspopup":!0,"data-toggle":!0},p,l)},n.buttonHandleKeyUp=function(e){e.preventDefault()},n.buttonHandleKeyDown=function(e){var t=D(e);n.buttonKeyDownHandlers[t]&&n.buttonKeyDownHandlers[t].call((0,o.Z)(n),e)},n.buttonHandleClick=function(e){e.preventDefault(),n.props.environment.document.activeElement===n.props.environment.document.body&&e.target.focus(),n.internalSetTimeout((function(){return n.toggleMenu({type:13})}))},n.buttonHandleBlur=function(e){var t=e.target;n.internalSetTimeout((function(){n.isMouseDown||null!=n.props.environment.document.activeElement&&n.props.environment.document.activeElement.id===n.inputId||n.props.environment.document.activeElement===t||n.reset({type:14})}))},n.getLabelProps=function(e){return(0,i.Z)({htmlFor:n.inputId,id:n.labelId},e)},n.getInputProps=function(e){var t=void 0===e?{}:e,o=t.onKeyDown,u=t.onBlur,a=t.onChange,s=t.onInput;t.onChangeText;var l=r(t,Z),c={};var d,p=n.getState(),f=p.inputValue,h=p.isOpen,g=p.highlightedIndex;l.disabled||((d={}).onChange=w(a,s,n.inputHandleChange),d.onKeyDown=w(o,n.inputHandleKeyDown),d.onBlur=w(u,n.inputHandleBlur),c=d);return(0,i.Z)({"aria-autocomplete":"list","aria-activedescendant":h&&"number"==typeof g&&g>=0?n.getItemId(g):null,"aria-controls":h?n.menuId:null,"aria-labelledby":l&&l["aria-label"]?void 0:n.labelId,autoComplete:"off",value:f,id:n.inputId},c,l)},n.inputHandleKeyDown=function(e){var t=D(e);t&&n.inputKeyDownHandlers[t]&&n.inputKeyDownHandlers[t].call((0,o.Z)(n),e)},n.inputHandleChange=function(e){n.internalSetState({type:11,isOpen:!0,inputValue:e.target.value,highlightedIndex:n.props.defaultHighlightedIndex})},n.inputHandleBlur=function(){n.internalSetTimeout((function(){var e=n.props.environment.document&&!!n.props.environment.document.activeElement&&!!n.props.environment.document.activeElement.dataset&&n.props.environment.document.activeElement.dataset.toggle&&n._rootNode&&n._rootNode.contains(n.props.environment.document.activeElement);n.isMouseDown||e||n.reset({type:10})}))},n.menuRef=function(e){n._menuNode=e},n.getMenuProps=function(e,t){var o,u=void 0===e?{}:e,a=u.refKey,s=void 0===a?"ref":a,l=u.ref,c=r(u,B),d=(void 0===t?{}:t).suppressRefError,p=void 0!==d&&d;return n.getMenuProps.called=!0,n.getMenuProps.refKey=s,n.getMenuProps.suppressRefError=p,(0,i.Z)(((o={})[s]=E(l,n.menuRef),o.role="listbox",o["aria-labelledby"]=c&&c["aria-label"]?null:n.labelId,o.id=n.menuId,o),c)},n.getItemProps=function(e){var t,o=void 0===e?{}:e,u=o.onMouseMove,a=o.onMouseDown,s=o.onClick;o.onPress;var l=o.index,c=o.item,d=void 0===c?void 0:c,p=r(o,Y);void 0===l?(n.items.push(d),l=n.items.indexOf(d)):n.items[l]=d;var f=s,h=((t={onMouseMove:w(u,(function(){l!==n.getState().highlightedIndex&&(n.setHighlightedIndex(l,{type:2}),n.avoidScrolling=!0,n.internalSetTimeout((function(){return n.avoidScrolling=!1}),250))})),onMouseDown:w(a,(function(e){e.preventDefault()}))}).onClick=w(f,(function(){n.selectItemAtIndex(l,{type:9})})),t),g=p.disabled?{onMouseDown:h.onMouseDown}:h;return(0,i.Z)({id:n.getItemId(l),role:"option","aria-selected":n.getState().highlightedIndex===l},g,p)},n.clearItems=function(){n.items=[]},n.reset=function(e,t){void 0===e&&(e={}),e=T(e),n.internalSetState((function(t){var r=t.selectedItem;return(0,i.Z)({isOpen:n.props.defaultIsOpen,highlightedIndex:n.props.defaultHighlightedIndex,inputValue:n.props.itemToString(r)},e)}),t)},n.toggleMenu=function(e,t){void 0===e&&(e={}),e=T(e),n.internalSetState((function(t){var r=t.isOpen;return(0,i.Z)({isOpen:!r},r&&{highlightedIndex:n.props.defaultHighlightedIndex},e)}),(function(){var r=n.getState(),i=r.isOpen,o=r.highlightedIndex;i&&n.getItemCount()>0&&"number"==typeof o&&n.setHighlightedIndex(o,e),v(t)()}))},n.openMenu=function(e){n.internalSetState({isOpen:!0},e)},n.closeMenu=function(e){n.internalSetState({isOpen:!1},e)},n.updateStatus=b((function(){var e=n.getState(),t=n.items[e.highlightedIndex],r=n.getItemCount(),o=n.props.getA11yStatusMessage((0,i.Z)({itemToString:n.props.itemToString,previousResultCount:n.previousResultCount,resultCount:r,highlightedItem:t},e));n.previousResultCount=r,V(o,n.props.environment.document)}),200);var u=n.props,a=u.defaultHighlightedIndex,s=u.initialHighlightedIndex,l=void 0===s?a:s,c=u.defaultIsOpen,d=u.initialIsOpen,p=void 0===d?c:d,f=u.initialInputValue,h=void 0===f?"":f,g=u.initialSelectedItem,m=void 0===g?null:g,I=n.getState({highlightedIndex:l,isOpen:p,inputValue:h,selectedItem:m});return null!=I.selectedItem&&void 0===n.props.initialInputValue&&(I.inputValue=n.props.itemToString(I.selectedItem)),n.state=I,n}(0,u.Z)(t,e);var n=t.prototype;return n.internalClearTimeouts=function(){this.timeoutIds.forEach((function(e){clearTimeout(e)})),this.timeoutIds=[]},n.getState=function(e){return void 0===e&&(e=this.state),M(e,this.props)},n.getItemCount=function(){var e=this.items.length;return null!=this.itemCount?e=this.itemCount:void 0!==this.props.itemCount&&(e=this.props.itemCount),e},n.getItemNodeFromIndex=function(e){return this.props.environment.document.getElementById(this.getItemId(e))},n.scrollHighlightedItemIntoView=function(){var e=this.getItemNodeFromIndex(this.getState().highlightedIndex);this.props.scrollIntoView(e,this._menuNode)},n.moveHighlightedIndex=function(e,t){var n=this,r=this.getItemCount(),i=this.getState().highlightedIndex;if(r>0){var o=P(e,i,r,(function(e){return n.getItemNodeFromIndex(e)}));this.setHighlightedIndex(o,t)}},n.getStateAndHelpers=function(){var e=this.getState(),t=e.highlightedIndex,n=e.inputValue,r=e.selectedItem,i=e.isOpen,o=this.props.itemToString,u=this.id,a=this.getRootProps,s=this.getToggleButtonProps,l=this.getLabelProps,c=this.getMenuProps,d=this.getInputProps,p=this.getItemProps,f=this.openMenu,h=this.closeMenu,g=this.toggleMenu,m=this.selectItem,v=this.selectItemAtIndex,I=this.selectHighlightedItem,y=this.setHighlightedIndex,S=this.clearSelection,b=this.clearItems;return{getRootProps:a,getToggleButtonProps:s,getLabelProps:l,getMenuProps:c,getInputProps:d,getItemProps:p,reset:this.reset,openMenu:f,closeMenu:h,toggleMenu:g,selectItem:m,selectItemAtIndex:v,selectHighlightedItem:I,setHighlightedIndex:y,clearSelection:S,clearItems:b,setItemCount:this.setItemCount,unsetItemCount:this.unsetItemCount,setState:this.internalSetState,itemToString:o,id:u,highlightedIndex:t,inputValue:n,isOpen:i,selectedItem:r}},n.componentDidMount=function(){var e=this;var t=function(){e.isMouseDown=!0},n=function(t){e.isMouseDown=!1,!_(t.target,[e._rootNode,e._menuNode],e.props.environment)&&e.getState().isOpen&&e.reset({type:1},(function(){return e.props.onOuterClick(e.getStateAndHelpers())}))},r=function(){e.isTouchMove=!1},i=function(){e.isTouchMove=!0},o=function(t){var n=_(t.target,[e._rootNode,e._menuNode],e.props.environment,!1);e.isTouchMove||n||!e.getState().isOpen||e.reset({type:16},(function(){return e.props.onOuterClick(e.getStateAndHelpers())}))},u=this.props.environment;u.addEventListener("mousedown",t),u.addEventListener("mouseup",n),u.addEventListener("touchstart",r),u.addEventListener("touchmove",i),u.addEventListener("touchend",o),this.cleanup=function(){e.internalClearTimeouts(),e.updateStatus.cancel(),u.removeEventListener("mousedown",t),u.removeEventListener("mouseup",n),u.removeEventListener("touchstart",r),u.removeEventListener("touchmove",i),u.removeEventListener("touchend",o)}},n.shouldScroll=function(e,t){var n=(void 0===this.props.highlightedIndex?this.getState():this.props).highlightedIndex,r=(void 0===t.highlightedIndex?e:t).highlightedIndex;return n&&this.getState().isOpen&&!e.isOpen||n!==r},n.componentDidUpdate=function(e,t){R(this.props,"selectedItem")&&this.props.selectedItemChanged(e.selectedItem,this.props.selectedItem)&&this.internalSetState({type:15,inputValue:this.props.itemToString(this.props.selectedItem)}),!this.avoidScrolling&&this.shouldScroll(t,e)&&this.scrollHighlightedItemIntoView(),this.updateStatus()},n.componentWillUnmount=function(){this.cleanup()},n.render=function(){var e=C(this.props.children,I);this.clearItems(),this.getRootProps.called=!1,this.getRootProps.refKey=void 0,this.getRootProps.suppressRefError=void 0,this.getMenuProps.called=!1,this.getMenuProps.refKey=void 0,this.getMenuProps.suppressRefError=void 0,this.getLabelProps.called=!1,this.getInputProps.called=!1;var t=C(e(this.getStateAndHelpers()));return t?this.getRootProps.called||this.props.suppressRefError?t:k(t)?(0,l.cloneElement)(t,this.getRootProps(A(t))):void 0:null},t}(l.Component);return e.defaultProps={defaultHighlightedIndex:null,defaultIsOpen:!1,getA11yStatusMessage:O,itemToString:function(e){return null==e?"":String(e)},onStateChange:I,onInputValueChange:I,onUserAction:I,onChange:I,onSelect:I,onOuterClick:I,selectedItemChanged:function(e,t){return e!==t},environment:"undefined"==typeof window?{}:window,stateReducer:function(e,t){return t},suppressRefError:!1,scrollIntoView:y},e.stateChangeTypes=K,e}(),X=F;b((function(e,t){V(e(),t)}),200),"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?l.useLayoutEffect:l.useEffect;var Q={itemToString:function(e){return e?String(e):""},stateReducer:function(e,t){return t.changes},getA11ySelectionMessage:function(e){var t=e.selectedItem,n=e.itemToString;return t?n(t)+" has been selected.":""},scrollIntoView:y,environment:"undefined"==typeof window?{}:window};s().array.isRequired,s().func,s().func,s().func,s().number,s().number,s().number,s().bool,s().bool,s().bool,s().any,s().any,s().any,s().string,s().string,s().string,s().func,s().string,s().func,s().func,s().func,s().func,s().func,s().shape({addEventListener:s().func,removeEventListener:s().func,document:s().shape({getElementById:s().func,activeElement:s().any,body:s().any})});(0,g.pi)((0,g.pi)({},Q),{getA11yStatusMessage:function(e){var t=e.isOpen,n=e.resultCount,r=e.previousResultCount;return t?n?n!==r?"".concat(n," result").concat(1===n?" is":"s are"," available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select."):"":"No results are available.":""}});s().array.isRequired,s().func,s().func,s().func,s().func,s().number,s().number,s().number,s().bool,s().bool,s().bool,s().any,s().any,s().any,s().string,s().string,s().string,s().string,s().string,s().string,s().func,s().string,s().string,s().func,s().func,s().func,s().func,s().func,s().func,s().shape({addEventListener:s().func,removeEventListener:s().func,document:s().shape({getElementById:s().func,activeElement:s().any,body:s().any})});(0,i.Z)({},Q,{selectedItemChanged:function(e,t){return e!==t},getA11yStatusMessage:O});s().array,s().array,s().array,s().func,s().func,s().func,s().number,s().number,s().number,s().func,s().func,s().string,s().string,s().shape({addEventListener:s().func,removeEventListener:s().func,document:s().shape({getElementById:s().func,activeElement:s().any,body:s().any})})},1634:function(e,t,n){"use strict";n.d(t,{M:function(){return s}});var r=n(26372),i=n.n(r),o=n(49597),u=n(70079),a=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,u.useContext)(a.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return u.createElement(o.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:i()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){"use strict";n.d(t,{U:function(){return u}});var r=n(35250),i=n(26372),o=n.n(i);const u=e=>{let{className:t,density:n,id:i,...u}=e;return(0,r.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:i,...u})}},63571:function(e,t,n){"use strict";n.d(t,{Q:function(){return l}});var r=n(35250),i=n(68998),o=n(1386),u=n(26372),a=n.n(u),s=n(70079);const l=e=>{let{children:t,title:n,className:u,startExpanded:l=!1,onClick:c,id:d,...p}=e;const[f,h]=(0,s.useState)(l),[g]=(0,s.useState)((()=>l)),{detailsRef:m,summaryRef:v,contentRef:I,onSummaryClick:y}=(0,o.E)({onOpenChange:(e,t)=>{h(e),c&&c(t,e)},isExpanded:g});return(0,r.jsxs)("details",{"data-testid":"jkl-accordion-item",...p,className:a()("jkl-accordion-item",u),ref:m,id:d,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:y,ref:v,children:[n,(0,r.jsx)(i.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!f,bold:f})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:I,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},28845:function(e,t,n){"use strict";n.d(t,{W:function(){return o}});var r=n(70079),i=n(31787);const o=e=>r.createElement(i.J,{...e},"");o.displayName="SearchIcon"},87505:function(e,t,n){"use strict";n.d(t,{w:function(){return d}});var r=n(70079),i=n(41699),o=n(65174),u=n(6914),a=n(82546),s=n(39126),l=n(66169),c=n(94509);const d=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:p,rows:f,verticalAlign:h,...g}=e;return r.createElement(i.i,{fullWidth:!0,...g,ref:t},n&&r.createElement(u.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(c.S,null,d.map(((e,t)=>r.createElement(l.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(o.R,null,0===f.length&&p&&r.createElement(c.S,null,r.createElement(a.p,{colSpan:d.length},p)),f.map(((e,t)=>r.createElement(c.S,{key:t},e.map(((e,t)=>r.createElement(a.p,{key:t,"data-th":d[t],verticalAlign:h},e))))))))}));d.displayName="DataTable"},23802:function(e,t,n){"use strict";n.d(t,{Lu:function(){return s}});var r=n(66e3),i=n(25454),o=n.n(i),u={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};s.rankings=u;var a=function(e,t){return String(e.rankedValue).localeCompare(String(t.rankedValue))};function s(e,t,n){void 0===n&&(n={});var i=n,o=i.keys,s=i.threshold,c=void 0===s?u.MATCHES:s,p=i.baseSort,h=void 0===p?a:p,g=i.sorter,m=void 0===g?function(e){return e.sort((function(e,t){return function(e,t,n){var r=-1,i=1,o=e.rank,u=e.keyIndex,a=t.rank,s=t.keyIndex;return o===a?u===s?n(e,t):u<s?r:i:o>a?r:i}(e,t,h)}))}:g,v=e.reduce((function(e,i,a){var s=function(e,t,n,r){if(!t){return{rankedValue:e,rank:l(e,n,r),keyIndex:-1,keyThreshold:r.threshold}}var i=function(e,t){for(var n=[],r=0,i=t.length;r<i;r++)for(var o=t[r],u=f(o),a=d(e,o),s=0,l=a.length;s<l;s++)n.push({itemValue:a[s],attributes:u});return n}(e,t);return i.reduce((function(e,t,i){var o=e.rank,a=e.rankedValue,s=e.keyIndex,c=e.keyThreshold,d=t.itemValue,p=t.attributes,f=l(d,n,r),h=a,g=p.minRanking,m=p.maxRanking,v=p.threshold;return f<g&&f>=u.MATCHES?f=g:f>m&&(f=m),f>o&&(o=f,s=i,c=v,h=d),{rankedValue:h,rank:o,keyIndex:s,keyThreshold:c}}),{rankedValue:e,rank:u.NO_MATCH,keyIndex:-1,keyThreshold:r.threshold})}(i,o,t,n),p=s.rank,h=s.keyThreshold;p>=(void 0===h?c:h)&&e.push((0,r.Z)({},s,{item:i,index:a}));return e}),[]);return m(v).map((function(e){return e.item}))}function l(e,t,n){return e=c(e,n),(t=c(t,n)).length>e.length?u.NO_MATCH:e===t?u.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase())===(t=t.toLowerCase())?u.EQUAL:e.startsWith(t)?u.STARTS_WITH:e.includes(" "+t)?u.WORD_STARTS_WITH:e.includes(t)?u.CONTAINS:1===t.length?u.NO_MATCH:(r=e,i="",r.split(" ").forEach((function(e){e.split("-").forEach((function(e){i+=e.substr(0,1)}))})),i).includes(t)?u.ACRONYM:function(e,t){var n=0,r=0;function i(e,t,r){for(var i=r,o=t.length;i<o;i++){if(t[i]===e)return n+=1,i+1}return-1}function o(e){var r=1/e,i=n/t.length;return u.MATCHES+i*r}var a=i(t[0],e,0);if(a<0)return u.NO_MATCH;r=a;for(var s=1,l=t.length;s<l;s++){if(!((r=i(t[s],e,r))>-1))return u.NO_MATCH}return o(r-a)}(e,t);var r,i}function c(e,t){return e=""+e,t.keepDiacritics||(e=o()(e)),e}function d(e,t){var n;if("object"==typeof t&&(t=t.key),"function"==typeof t)n=t(e);else if(null==e)n=null;else if(Object.hasOwnProperty.call(e,t))n=e[t];else{if(t.includes("."))return function(e,t){for(var n=e.split("."),r=[t],i=0,o=n.length;i<o;i++){for(var u=n[i],a=[],s=0,l=r.length;s<l;s++){var c=r[s];if(null!=c)if(Object.hasOwnProperty.call(c,u)){var d=c[u];null!=d&&a.push(d)}else"*"===u&&(a=a.concat(c))}r=a}if(Array.isArray(r[0])){var p=[];return p.concat.apply(p,r)}return r}(t,e);n=null}return null==n?[]:Array.isArray(n)?n:[String(n)]}var p={maxRanking:1/0,minRanking:-1/0};function f(e){return"string"==typeof e?p:(0,r.Z)({},p,e)}},72538:function(e,t){"use strict";var n=60103,r=60106,i=60107,o=60108,u=60114,a=60109,s=60110,l=60112,c=60113,d=60120,p=60115,f=60116,h=60121,g=60122,m=60117,v=60129,I=60131;if("function"==typeof Symbol&&Symbol.for){var y=Symbol.for;n=y("react.element"),r=y("react.portal"),i=y("react.fragment"),o=y("react.strict_mode"),u=y("react.profiler"),a=y("react.provider"),s=y("react.context"),l=y("react.forward_ref"),c=y("react.suspense"),d=y("react.suspense_list"),p=y("react.memo"),f=y("react.lazy"),h=y("react.block"),g=y("react.server.block"),m=y("react.fundamental"),v=y("react.debug_trace_mode"),I=y("react.legacy_hidden")}function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case i:case u:case o:case c:case d:return e;default:switch(e=e&&e.$$typeof){case s:case l:case f:case p:case a:return e;default:return t}}case r:return t}}}},20503:function(e,t,n){"use strict";n(72538)},25454:function(e){var t={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Ấ":"A","Ắ":"A","Ẳ":"A","Ẵ":"A","Ặ":"A","Æ":"AE","Ầ":"A","Ằ":"A","Ȃ":"A","Ç":"C","Ḉ":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ế":"E","Ḗ":"E","Ề":"E","Ḕ":"E","Ḝ":"E","Ȇ":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ḯ":"I","Ȋ":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ố":"O","Ṍ":"O","Ṓ":"O","Ȏ":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ấ":"a","ắ":"a","ẳ":"a","ẵ":"a","ặ":"a","æ":"ae","ầ":"a","ằ":"a","ȃ":"a","ç":"c","ḉ":"c","è":"e","é":"e","ê":"e","ë":"e","ế":"e","ḗ":"e","ề":"e","ḕ":"e","ḝ":"e","ȇ":"e","ì":"i","í":"i","î":"i","ï":"i","ḯ":"i","ȋ":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ố":"o","ṍ":"o","ṓ":"o","ȏ":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Ĉ":"C","ĉ":"c","Ċ":"C","ċ":"c","Č":"C","č":"c","C̆":"C","c̆":"c","Ď":"D","ď":"d","Đ":"D","đ":"d","Ē":"E","ē":"e","Ĕ":"E","ĕ":"e","Ė":"E","ė":"e","Ę":"E","ę":"e","Ě":"E","ě":"e","Ĝ":"G","Ǵ":"G","ĝ":"g","ǵ":"g","Ğ":"G","ğ":"g","Ġ":"G","ġ":"g","Ģ":"G","ģ":"g","Ĥ":"H","ĥ":"h","Ħ":"H","ħ":"h","Ḫ":"H","ḫ":"h","Ĩ":"I","ĩ":"i","Ī":"I","ī":"i","Ĭ":"I","ĭ":"i","Į":"I","į":"i","İ":"I","ı":"i","Ĳ":"IJ","ĳ":"ij","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","Ḱ":"K","ḱ":"k","K̆":"K","k̆":"k","Ĺ":"L","ĺ":"l","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ŀ":"L","ŀ":"l","Ł":"l","ł":"l","Ḿ":"M","ḿ":"m","M̆":"M","m̆":"m","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","ŉ":"n","N̆":"N","n̆":"n","Ō":"O","ō":"o","Ŏ":"O","ŏ":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","P̆":"P","p̆":"p","Ŕ":"R","ŕ":"r","Ŗ":"R","ŗ":"r","Ř":"R","ř":"r","R̆":"R","r̆":"r","Ȓ":"R","ȓ":"r","Ś":"S","ś":"s","Ŝ":"S","ŝ":"s","Ş":"S","Ș":"S","ș":"s","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","ț":"t","Ț":"T","Ť":"T","ť":"t","Ŧ":"T","ŧ":"t","T̆":"T","t̆":"t","Ũ":"U","ũ":"u","Ū":"U","ū":"u","Ŭ":"U","ŭ":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ȗ":"U","ȗ":"u","V̆":"V","v̆":"v","Ŵ":"W","ŵ":"w","Ẃ":"W","ẃ":"w","X̆":"X","x̆":"x","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Y̆":"Y","y̆":"y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ſ":"s","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ǎ":"A","ǎ":"a","Ǐ":"I","ǐ":"i","Ǒ":"O","ǒ":"o","Ǔ":"U","ǔ":"u","Ǖ":"U","ǖ":"u","Ǘ":"U","ǘ":"u","Ǚ":"U","ǚ":"u","Ǜ":"U","ǜ":"u","Ứ":"U","ứ":"u","Ṹ":"U","ṹ":"u","Ǻ":"A","ǻ":"a","Ǽ":"AE","ǽ":"ae","Ǿ":"O","ǿ":"o","Þ":"TH","þ":"th","Ṕ":"P","ṕ":"p","Ṥ":"S","ṥ":"s","X́":"X","x́":"x","Ѓ":"Г","ѓ":"г","Ќ":"К","ќ":"к","A̋":"A","a̋":"a","E̋":"E","e̋":"e","I̋":"I","i̋":"i","Ǹ":"N","ǹ":"n","Ồ":"O","ồ":"o","Ṑ":"O","ṑ":"o","Ừ":"U","ừ":"u","Ẁ":"W","ẁ":"w","Ỳ":"Y","ỳ":"y","Ȁ":"A","ȁ":"a","Ȅ":"E","ȅ":"e","Ȉ":"I","ȉ":"i","Ȍ":"O","ȍ":"o","Ȑ":"R","ȑ":"r","Ȕ":"U","ȕ":"u","B̌":"B","b̌":"b","Č̣":"C","č̣":"c","Ê̌":"E","ê̌":"e","F̌":"F","f̌":"f","Ǧ":"G","ǧ":"g","Ȟ":"H","ȟ":"h","J̌":"J","ǰ":"j","Ǩ":"K","ǩ":"k","M̌":"M","m̌":"m","P̌":"P","p̌":"p","Q̌":"Q","q̌":"q","Ř̩":"R","ř̩":"r","Ṧ":"S","ṧ":"s","V̌":"V","v̌":"v","W̌":"W","w̌":"w","X̌":"X","x̌":"x","Y̌":"Y","y̌":"y","A̧":"A","a̧":"a","B̧":"B","b̧":"b","Ḑ":"D","ḑ":"d","Ȩ":"E","ȩ":"e","Ɛ̧":"E","ɛ̧":"e","Ḩ":"H","ḩ":"h","I̧":"I","i̧":"i","Ɨ̧":"I","ɨ̧":"i","M̧":"M","m̧":"m","O̧":"O","o̧":"o","Q̧":"Q","q̧":"q","U̧":"U","u̧":"u","X̧":"X","x̧":"x","Z̧":"Z","z̧":"z"},n=Object.keys(t).join("|"),r=new RegExp(n,"g"),i=new RegExp(n,""),o=function(e){return e.replace(r,(function(e){return t[e]}))};e.exports=o,e.exports.has=function(e){return!!e.match(i)},e.exports.remove=o},52134:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},66e3:function(e,t,n){"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},3633:function(e,t,n){"use strict";n.d(t,{_T:function(){return i},pi:function(){return r}});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create}}]);