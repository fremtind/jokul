/*! For license information please see 580dd1a71c52b48b5dcf56c272815ee0cb34676c.js.LICENSE.txt */
(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2748],{57444:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{ZP:function(){return X}});var o=n(66e3),i=n(52134),u=n(7595),s=n(39519),a=n.n(s),l=n(70079);n(20503);let d=e=>"object"==typeof e&&null!=e&&1===e.nodeType,c=(e,t)=>(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e,p=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let n=getComputedStyle(e,null);return c(n.overflowY,t)||c(n.overflowX,t)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},f=(e,t,n,r,o,i,u,s)=>i<e&&u>t||i>e&&u<t?0:i<=e&&s<=n||u>=t&&s>=n?i-e-r:u>t&&s<n||i<e&&s>n?u-t+o:0,h=e=>{let t=e.parentElement;return null==t?e.getRootNode().host||null:t};var g=n(3633),m=0;function v(e){return"function"==typeof e?e:I}function I(){}function y(e,t){if(e){var n=((e,t)=>{var n,r,o,i,u,s;if("undefined"==typeof document)return[];let{scrollMode:a,block:l,inline:c,boundary:g,skipOverflowHiddenElements:m}=t,v="function"==typeof g?g:e=>e!==g;if(!d(e))throw new TypeError("Invalid target");let I=document.scrollingElement||document.documentElement,y=[],S=e;for(;d(S)&&v(S);){if(S=h(S),S===I){y.push(S);break}null!=S&&S===document.body&&p(S)&&!p(document.documentElement)||null!=S&&p(S,m)&&y.push(S)}let b=null!=(r=null==(n=window.visualViewport)?void 0:n.width)?r:innerWidth,w=null!=(i=null==(o=window.visualViewport)?void 0:o.height)?i:innerHeight,E=null!=(u=window.scrollX)?u:pageXOffset,O=null!=(s=window.scrollY)?s:pageYOffset,{height:x,width:C,top:A,right:H,bottom:k,left:T}=e.getBoundingClientRect(),M="start"===l||"nearest"===l?A:"end"===l?k:A+x/2,D="center"===c?T+C/2:"end"===c?H:T,R=[];for(let d=0;d<y.length;d++){let e=y[d],{height:t,width:n,top:r,right:o,bottom:i,left:u}=e.getBoundingClientRect();if("if-needed"===a&&A>=0&&T>=0&&k<=w&&H<=b&&A>=r&&k<=i&&T>=u&&H<=o)return R;let s=getComputedStyle(e),p=parseInt(s.borderLeftWidth,10),h=parseInt(s.borderTopWidth,10),g=parseInt(s.borderRightWidth,10),m=parseInt(s.borderBottomWidth,10),v=0,S=0,P="offsetWidth"in e?e.offsetWidth-e.clientWidth-p-g:0,N="offsetHeight"in e?e.offsetHeight-e.clientHeight-h-m:0,V="offsetWidth"in e?0===e.offsetWidth?0:n/e.offsetWidth:0,U="offsetHeight"in e?0===e.offsetHeight?0:t/e.offsetHeight:0;if(I===e)v="start"===l?M:"end"===l?M-w:"nearest"===l?f(O,O+w,w,h,m,O+M,O+M+x,x):M-w/2,S="start"===c?D:"center"===c?D-b/2:"end"===c?D-b:f(E,E+b,b,p,g,E+D,E+D+C,C),v=Math.max(0,v+O),S=Math.max(0,S+E);else{v="start"===l?M-r-h:"end"===l?M-i+m+N:"nearest"===l?f(r,i,t,h,m+N,M,M+x,x):M-(r+t/2)+N/2,S="start"===c?D-u-p:"center"===c?D-(u+n/2)+P/2:"end"===c?D-o+g+P:f(u,o,n,p,g+P,D,D+C,C);let{scrollLeft:s,scrollTop:a}=e;v=Math.max(0,Math.min(a+v/U,e.scrollHeight-t/U+N)),S=Math.max(0,Math.min(s+S/V,e.scrollWidth-n/V+P)),M+=a-v,D+=s-S}R.push({el:e,top:v,left:S})}return R})(e,{boundary:t,block:"nearest",scrollMode:"if-needed"});n.forEach((function(e){var t=e.el,n=e.top,r=e.left;t.scrollTop=n,t.scrollLeft=r}))}}function S(e,t,n){return e===t||t instanceof n.Node&&e.contains&&e.contains(t)}function b(e,t){var n;function r(){n&&clearTimeout(n)}function o(){for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];r(),n=setTimeout((function(){n=null,e.apply(void 0,i)}),t)}return o.cancel=r,o}function w(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some((function(t){return t&&t.apply(void 0,[e].concat(r)),e.preventDownshiftDefault||e.hasOwnProperty("nativeEvent")&&e.nativeEvent.preventDownshiftDefault}))}}function E(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){"function"==typeof t?t(e):t&&(t.current=e)}))}}function O(){return String(m++)}function x(e){var t=e.isOpen,n=e.resultCount,r=e.previousResultCount;return t?n?n!==r?n+" result"+(1===n?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function C(e,t){return!(e=Array.isArray(e)?e[0]:e)&&t?t:e}function A(e){return"string"==typeof e.type}function H(e){return e.props}var k=["highlightedIndex","inputValue","isOpen","selectedItem","type"];function T(e){void 0===e&&(e={});var t={};return k.forEach((function(n){e.hasOwnProperty(n)&&(t[n]=e[n])})),t}function M(e,t){return Object.keys(e).reduce((function(n,r){return n[r]=D(t,r)?t[r]:e[r],n}),{})}function D(e,t){return void 0!==e[t]}function R(e){var t=e.key,n=e.keyCode;return n>=37&&n<=40&&0!==t.indexOf("Arrow")?"Arrow"+t:t}function P(e,t,n,r,o){if(void 0===o&&(o=!0),0===n)return-1;var i=n-1;("number"!=typeof t||t<0||t>=n)&&(t=e>0?-1:i+1);var u=t+e;u<0?u=o?i:0:u>i&&(u=o?0:i);var s=N(e,u,n,r,o);return-1===s?t>=n?-1:t:s}function N(e,t,n,r,o){var i=r(t);if(!i||!i.hasAttribute("disabled"))return t;if(e>0){for(var u=t+1;u<n;u++)if(!r(u).hasAttribute("disabled"))return u}else for(var s=t-1;s>=0;s--)if(!r(s).hasAttribute("disabled"))return s;return o?e>0?N(1,0,n,r,!1):N(-1,n-1,n,r,!1):-1}function V(e,t,n,r){return void 0===r&&(r=!0),t.some((function(t){return t&&(S(t,e,n)||r&&S(t,n.document.activeElement,n))}))}var U=b((function(e){K(e).textContent=""}),500);function _(e,t){var n=K(t);e&&(n.textContent=e,U(t))}function K(e){void 0===e&&(e=document);var t=e.getElementById("a11y-status-message");return t||((t=e.createElement("div")).setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}var L=Object.freeze({__proto__:null,unknown:0,mouseUp:1,itemMouseEnter:2,keyDownArrowUp:3,keyDownArrowDown:4,keyDownEscape:5,keyDownEnter:6,keyDownHome:7,keyDownEnd:8,clickItem:9,blurInput:10,changeInput:11,keyDownSpaceButton:12,clickButton:13,blurButton:14,controlledPropUpdatedSelectedItem:15,touchEnd:16}),W=["refKey","ref"],Z=["onClick","onPress","onKeyDown","onKeyUp","onBlur"],B=["onKeyDown","onBlur","onChange","onInput","onChangeText"],j=["refKey","ref"],Y=["onMouseMove","onMouseDown","onClick","onPress","index","item"],F=function(){var e=function(e){function t(t){var n;(n=e.call(this,t)||this).id=n.props.id||"downshift-"+O(),n.menuId=n.props.menuId||n.id+"-menu",n.labelId=n.props.labelId||n.id+"-label",n.inputId=n.props.inputId||n.id+"-input",n.getItemId=n.props.getItemId||function(e){return n.id+"-item-"+e},n.input=null,n.items=[],n.itemCount=null,n.previousResultCount=0,n.timeoutIds=[],n.internalSetTimeout=function(e,t){var r=setTimeout((function(){n.timeoutIds=n.timeoutIds.filter((function(e){return e!==r})),e()}),t);n.timeoutIds.push(r)},n.setItemCount=function(e){n.itemCount=e},n.unsetItemCount=function(){n.itemCount=null},n.setHighlightedIndex=function(e,t){void 0===e&&(e=n.props.defaultHighlightedIndex),void 0===t&&(t={}),t=T(t),n.internalSetState((0,o.Z)({highlightedIndex:e},t))},n.clearSelection=function(e){n.internalSetState({selectedItem:null,inputValue:"",highlightedIndex:n.props.defaultHighlightedIndex,isOpen:n.props.defaultIsOpen},e)},n.selectItem=function(e,t,r){t=T(t),n.internalSetState((0,o.Z)({isOpen:n.props.defaultIsOpen,highlightedIndex:n.props.defaultHighlightedIndex,selectedItem:e,inputValue:n.props.itemToString(e)},t),r)},n.selectItemAtIndex=function(e,t,r){var o=n.items[e];null!=o&&n.selectItem(o,t,r)},n.selectHighlightedItem=function(e,t){return n.selectItemAtIndex(n.getState().highlightedIndex,e,t)},n.internalSetState=function(e,t){var r,i,u={},s="function"==typeof e;return!s&&e.hasOwnProperty("inputValue")&&n.props.onInputValueChange(e.inputValue,(0,o.Z)({},n.getStateAndHelpers(),e)),n.setState((function(t){t=n.getState(t);var a=s?e(t):e;a=n.props.stateReducer(t,a),r=a.hasOwnProperty("selectedItem");var l={};return r&&a.selectedItem!==t.selectedItem&&(i=a.selectedItem),a.type=a.type||0,Object.keys(a).forEach((function(e){t[e]!==a[e]&&(u[e]=a[e]),"type"!==e&&(a[e],D(n.props,e)||(l[e]=a[e]))})),s&&a.hasOwnProperty("inputValue")&&n.props.onInputValueChange(a.inputValue,(0,o.Z)({},n.getStateAndHelpers(),a)),l}),(function(){v(t)(),Object.keys(u).length>1&&n.props.onStateChange(u,n.getStateAndHelpers()),r&&n.props.onSelect(e.selectedItem,n.getStateAndHelpers()),void 0!==i&&n.props.onChange(i,n.getStateAndHelpers()),n.props.onUserAction(u,n.getStateAndHelpers())}))},n.rootRef=function(e){return n._rootNode=e},n.getRootProps=function(e,t){var i,u=void 0===e?{}:e,s=u.refKey,a=void 0===s?"ref":s,l=u.ref,d=r(u,W),c=(void 0===t?{}:t).suppressRefError,p=void 0!==c&&c;n.getRootProps.called=!0,n.getRootProps.refKey=a,n.getRootProps.suppressRefError=p;var f=n.getState().isOpen;return(0,o.Z)(((i={})[a]=E(l,n.rootRef),i.role="combobox",i["aria-expanded"]=f,i["aria-haspopup"]="listbox",i["aria-owns"]=f?n.menuId:null,i["aria-labelledby"]=n.labelId,i),d)},n.keyDownHandlers={ArrowDown:function(e){var t=this;if(e.preventDefault(),this.getState().isOpen){var n=e.shiftKey?5:1;this.moveHighlightedIndex(n,{type:4})}else this.internalSetState({isOpen:!0,type:4},(function(){var e=t.getItemCount();if(e>0){var n=P(1,t.getState().highlightedIndex,e,(function(e){return t.getItemNodeFromIndex(e)}));t.setHighlightedIndex(n,{type:4})}}))},ArrowUp:function(e){var t=this;if(e.preventDefault(),this.getState().isOpen){var n=e.shiftKey?-5:-1;this.moveHighlightedIndex(n,{type:3})}else this.internalSetState({isOpen:!0,type:3},(function(){var e=t.getItemCount();if(e>0){var n=P(-1,t.getState().highlightedIndex,e,(function(e){return t.getItemNodeFromIndex(e)}));t.setHighlightedIndex(n,{type:3})}}))},Enter:function(e){if(229!==e.which){var t=this.getState(),n=t.isOpen,r=t.highlightedIndex;if(n&&null!=r){e.preventDefault();var o=this.items[r],i=this.getItemNodeFromIndex(r);if(null==o||i&&i.hasAttribute("disabled"))return;this.selectHighlightedItem({type:6})}}},Escape:function(e){e.preventDefault(),this.reset((0,o.Z)({type:5},!this.state.isOpen&&{selectedItem:null,inputValue:""}))}},n.buttonKeyDownHandlers=(0,o.Z)({},n.keyDownHandlers,{" ":function(e){e.preventDefault(),this.toggleMenu({type:12})}}),n.inputKeyDownHandlers=(0,o.Z)({},n.keyDownHandlers,{Home:function(e){var t=this,n=this.getState().isOpen;if(n){e.preventDefault();var r=this.getItemCount();if(!(r<=0)&&n){var o=N(1,0,r,(function(e){return t.getItemNodeFromIndex(e)}),!1);this.setHighlightedIndex(o,{type:7})}}},End:function(e){var t=this,n=this.getState().isOpen;if(n){e.preventDefault();var r=this.getItemCount();if(!(r<=0)&&n){var o=N(-1,r-1,r,(function(e){return t.getItemNodeFromIndex(e)}),!1);this.setHighlightedIndex(o,{type:8})}}}}),n.getToggleButtonProps=function(e){var t=void 0===e?{}:e,i=t.onClick;t.onPress;var u=t.onKeyDown,s=t.onKeyUp,a=t.onBlur,l=r(t,Z),d=n.getState().isOpen,c={onClick:w(i,n.buttonHandleClick),onKeyDown:w(u,n.buttonHandleKeyDown),onKeyUp:w(s,n.buttonHandleKeyUp),onBlur:w(a,n.buttonHandleBlur)},p=l.disabled?{}:c;return(0,o.Z)({type:"button",role:"button","aria-label":d?"close menu":"open menu","aria-haspopup":!0,"data-toggle":!0},p,l)},n.buttonHandleKeyUp=function(e){e.preventDefault()},n.buttonHandleKeyDown=function(e){var t=R(e);n.buttonKeyDownHandlers[t]&&n.buttonKeyDownHandlers[t].call((0,i.Z)(n),e)},n.buttonHandleClick=function(e){e.preventDefault(),n.props.environment.document.activeElement===n.props.environment.document.body&&e.target.focus(),n.internalSetTimeout((function(){return n.toggleMenu({type:13})}))},n.buttonHandleBlur=function(e){var t=e.target;n.internalSetTimeout((function(){n.isMouseDown||null!=n.props.environment.document.activeElement&&n.props.environment.document.activeElement.id===n.inputId||n.props.environment.document.activeElement===t||n.reset({type:14})}))},n.getLabelProps=function(e){return(0,o.Z)({htmlFor:n.inputId,id:n.labelId},e)},n.getInputProps=function(e){var t=void 0===e?{}:e,i=t.onKeyDown,u=t.onBlur,s=t.onChange,a=t.onInput;t.onChangeText;var l=r(t,B),d={};var c,p=n.getState(),f=p.inputValue,h=p.isOpen,g=p.highlightedIndex;l.disabled||((c={}).onChange=w(s,a,n.inputHandleChange),c.onKeyDown=w(i,n.inputHandleKeyDown),c.onBlur=w(u,n.inputHandleBlur),d=c);return(0,o.Z)({"aria-autocomplete":"list","aria-activedescendant":h&&"number"==typeof g&&g>=0?n.getItemId(g):null,"aria-controls":h?n.menuId:null,"aria-labelledby":l&&l["aria-label"]?void 0:n.labelId,autoComplete:"off",value:f,id:n.inputId},d,l)},n.inputHandleKeyDown=function(e){var t=R(e);t&&n.inputKeyDownHandlers[t]&&n.inputKeyDownHandlers[t].call((0,i.Z)(n),e)},n.inputHandleChange=function(e){n.internalSetState({type:11,isOpen:!0,inputValue:e.target.value,highlightedIndex:n.props.defaultHighlightedIndex})},n.inputHandleBlur=function(){n.internalSetTimeout((function(){var e=n.props.environment.document&&!!n.props.environment.document.activeElement&&!!n.props.environment.document.activeElement.dataset&&n.props.environment.document.activeElement.dataset.toggle&&n._rootNode&&n._rootNode.contains(n.props.environment.document.activeElement);n.isMouseDown||e||n.reset({type:10})}))},n.menuRef=function(e){n._menuNode=e},n.getMenuProps=function(e,t){var i,u=void 0===e?{}:e,s=u.refKey,a=void 0===s?"ref":s,l=u.ref,d=r(u,j),c=(void 0===t?{}:t).suppressRefError,p=void 0!==c&&c;return n.getMenuProps.called=!0,n.getMenuProps.refKey=a,n.getMenuProps.suppressRefError=p,(0,o.Z)(((i={})[a]=E(l,n.menuRef),i.role="listbox",i["aria-labelledby"]=d&&d["aria-label"]?null:n.labelId,i.id=n.menuId,i),d)},n.getItemProps=function(e){var t,i=void 0===e?{}:e,u=i.onMouseMove,s=i.onMouseDown,a=i.onClick;i.onPress;var l=i.index,d=i.item,c=void 0===d?void 0:d,p=r(i,Y);void 0===l?(n.items.push(c),l=n.items.indexOf(c)):n.items[l]=c;var f=a,h=((t={onMouseMove:w(u,(function(){l!==n.getState().highlightedIndex&&(n.setHighlightedIndex(l,{type:2}),n.avoidScrolling=!0,n.internalSetTimeout((function(){return n.avoidScrolling=!1}),250))})),onMouseDown:w(s,(function(e){e.preventDefault()}))}).onClick=w(f,(function(){n.selectItemAtIndex(l,{type:9})})),t),g=p.disabled?{onMouseDown:h.onMouseDown}:h;return(0,o.Z)({id:n.getItemId(l),role:"option","aria-selected":n.getState().highlightedIndex===l},g,p)},n.clearItems=function(){n.items=[]},n.reset=function(e,t){void 0===e&&(e={}),e=T(e),n.internalSetState((function(t){var r=t.selectedItem;return(0,o.Z)({isOpen:n.props.defaultIsOpen,highlightedIndex:n.props.defaultHighlightedIndex,inputValue:n.props.itemToString(r)},e)}),t)},n.toggleMenu=function(e,t){void 0===e&&(e={}),e=T(e),n.internalSetState((function(t){var r=t.isOpen;return(0,o.Z)({isOpen:!r},r&&{highlightedIndex:n.props.defaultHighlightedIndex},e)}),(function(){var r=n.getState(),o=r.isOpen,i=r.highlightedIndex;o&&n.getItemCount()>0&&"number"==typeof i&&n.setHighlightedIndex(i,e),v(t)()}))},n.openMenu=function(e){n.internalSetState({isOpen:!0},e)},n.closeMenu=function(e){n.internalSetState({isOpen:!1},e)},n.updateStatus=b((function(){var e=n.getState(),t=n.items[e.highlightedIndex],r=n.getItemCount(),i=n.props.getA11yStatusMessage((0,o.Z)({itemToString:n.props.itemToString,previousResultCount:n.previousResultCount,resultCount:r,highlightedItem:t},e));n.previousResultCount=r,_(i,n.props.environment.document)}),200);var u=n.props,s=u.defaultHighlightedIndex,a=u.initialHighlightedIndex,l=void 0===a?s:a,d=u.defaultIsOpen,c=u.initialIsOpen,p=void 0===c?d:c,f=u.initialInputValue,h=void 0===f?"":f,g=u.initialSelectedItem,m=void 0===g?null:g,I=n.getState({highlightedIndex:l,isOpen:p,inputValue:h,selectedItem:m});return null!=I.selectedItem&&void 0===n.props.initialInputValue&&(I.inputValue=n.props.itemToString(I.selectedItem)),n.state=I,n}(0,u.Z)(t,e);var n=t.prototype;return n.internalClearTimeouts=function(){this.timeoutIds.forEach((function(e){clearTimeout(e)})),this.timeoutIds=[]},n.getState=function(e){return void 0===e&&(e=this.state),M(e,this.props)},n.getItemCount=function(){var e=this.items.length;return null!=this.itemCount?e=this.itemCount:void 0!==this.props.itemCount&&(e=this.props.itemCount),e},n.getItemNodeFromIndex=function(e){return this.props.environment.document.getElementById(this.getItemId(e))},n.scrollHighlightedItemIntoView=function(){var e=this.getItemNodeFromIndex(this.getState().highlightedIndex);this.props.scrollIntoView(e,this._menuNode)},n.moveHighlightedIndex=function(e,t){var n=this,r=this.getItemCount(),o=this.getState().highlightedIndex;if(r>0){var i=P(e,o,r,(function(e){return n.getItemNodeFromIndex(e)}));this.setHighlightedIndex(i,t)}},n.getStateAndHelpers=function(){var e=this.getState(),t=e.highlightedIndex,n=e.inputValue,r=e.selectedItem,o=e.isOpen,i=this.props.itemToString,u=this.id,s=this.getRootProps,a=this.getToggleButtonProps,l=this.getLabelProps,d=this.getMenuProps,c=this.getInputProps,p=this.getItemProps,f=this.openMenu,h=this.closeMenu,g=this.toggleMenu,m=this.selectItem,v=this.selectItemAtIndex,I=this.selectHighlightedItem,y=this.setHighlightedIndex,S=this.clearSelection,b=this.clearItems;return{getRootProps:s,getToggleButtonProps:a,getLabelProps:l,getMenuProps:d,getInputProps:c,getItemProps:p,reset:this.reset,openMenu:f,closeMenu:h,toggleMenu:g,selectItem:m,selectItemAtIndex:v,selectHighlightedItem:I,setHighlightedIndex:y,clearSelection:S,clearItems:b,setItemCount:this.setItemCount,unsetItemCount:this.unsetItemCount,setState:this.internalSetState,itemToString:i,id:u,highlightedIndex:t,inputValue:n,isOpen:o,selectedItem:r}},n.componentDidMount=function(){var e=this;var t=function(){e.isMouseDown=!0},n=function(t){e.isMouseDown=!1,!V(t.target,[e._rootNode,e._menuNode],e.props.environment)&&e.getState().isOpen&&e.reset({type:1},(function(){return e.props.onOuterClick(e.getStateAndHelpers())}))},r=function(){e.isTouchMove=!1},o=function(){e.isTouchMove=!0},i=function(t){var n=V(t.target,[e._rootNode,e._menuNode],e.props.environment,!1);e.isTouchMove||n||!e.getState().isOpen||e.reset({type:16},(function(){return e.props.onOuterClick(e.getStateAndHelpers())}))},u=this.props.environment;u.addEventListener("mousedown",t),u.addEventListener("mouseup",n),u.addEventListener("touchstart",r),u.addEventListener("touchmove",o),u.addEventListener("touchend",i),this.cleanup=function(){e.internalClearTimeouts(),e.updateStatus.cancel(),u.removeEventListener("mousedown",t),u.removeEventListener("mouseup",n),u.removeEventListener("touchstart",r),u.removeEventListener("touchmove",o),u.removeEventListener("touchend",i)}},n.shouldScroll=function(e,t){var n=(void 0===this.props.highlightedIndex?this.getState():this.props).highlightedIndex,r=(void 0===t.highlightedIndex?e:t).highlightedIndex;return n&&this.getState().isOpen&&!e.isOpen||n!==r},n.componentDidUpdate=function(e,t){D(this.props,"selectedItem")&&this.props.selectedItemChanged(e.selectedItem,this.props.selectedItem)&&this.internalSetState({type:15,inputValue:this.props.itemToString(this.props.selectedItem)}),!this.avoidScrolling&&this.shouldScroll(t,e)&&this.scrollHighlightedItemIntoView(),this.updateStatus()},n.componentWillUnmount=function(){this.cleanup()},n.render=function(){var e=C(this.props.children,I);this.clearItems(),this.getRootProps.called=!1,this.getRootProps.refKey=void 0,this.getRootProps.suppressRefError=void 0,this.getMenuProps.called=!1,this.getMenuProps.refKey=void 0,this.getMenuProps.suppressRefError=void 0,this.getLabelProps.called=!1,this.getInputProps.called=!1;var t=C(e(this.getStateAndHelpers()));return t?this.getRootProps.called||this.props.suppressRefError?t:A(t)?(0,l.cloneElement)(t,this.getRootProps(H(t))):void 0:null},t}(l.Component);return e.defaultProps={defaultHighlightedIndex:null,defaultIsOpen:!1,getA11yStatusMessage:x,itemToString:function(e){return null==e?"":String(e)},onStateChange:I,onInputValueChange:I,onUserAction:I,onChange:I,onSelect:I,onOuterClick:I,selectedItemChanged:function(e,t){return e!==t},environment:"undefined"==typeof window?{}:window,stateReducer:function(e,t){return t},suppressRefError:!1,scrollIntoView:y},e.stateChangeTypes=L,e}(),X=F;b((function(e,t){_(e(),t)}),200),"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?l.useLayoutEffect:l.useEffect;var Q={itemToString:function(e){return e?String(e):""},stateReducer:function(e,t){return t.changes},getA11ySelectionMessage:function(e){var t=e.selectedItem,n=e.itemToString;return t?n(t)+" has been selected.":""},scrollIntoView:y,environment:"undefined"==typeof window?{}:window};a().array.isRequired,a().func,a().func,a().func,a().number,a().number,a().number,a().bool,a().bool,a().bool,a().any,a().any,a().any,a().string,a().string,a().string,a().func,a().string,a().func,a().func,a().func,a().func,a().func,a().shape({addEventListener:a().func,removeEventListener:a().func,document:a().shape({getElementById:a().func,activeElement:a().any,body:a().any})});(0,g.pi)((0,g.pi)({},Q),{getA11yStatusMessage:function(e){var t=e.isOpen,n=e.resultCount,r=e.previousResultCount;return t?n?n!==r?"".concat(n," result").concat(1===n?" is":"s are"," available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select."):"":"No results are available.":""}});a().array.isRequired,a().func,a().func,a().func,a().func,a().number,a().number,a().number,a().bool,a().bool,a().bool,a().any,a().any,a().any,a().string,a().string,a().string,a().string,a().string,a().string,a().func,a().string,a().string,a().func,a().func,a().func,a().func,a().func,a().func,a().shape({addEventListener:a().func,removeEventListener:a().func,document:a().shape({getElementById:a().func,activeElement:a().any,body:a().any})});(0,o.Z)({},Q,{selectedItemChanged:function(e,t){return e!==t},getA11yStatusMessage:x});a().array,a().array,a().array,a().func,a().func,a().func,a().number,a().number,a().number,a().func,a().func,a().string,a().string,a().shape({addEventListener:a().func,removeEventListener:a().func,document:a().shape({getElementById:a().func,activeElement:a().any,body:a().any})})},19794:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});var r=n(70079),o=n(31787);const i=e=>r.createElement(o.J,{...e},"");i.displayName="QuestionIcon"},28845:function(e,t,n){"use strict";n.d(t,{W:function(){return i}});var r=n(70079),o=n(31787);const i=e=>r.createElement(o.J,{...e},"");i.displayName="SearchIcon"},23802:function(e,t,n){"use strict";n.d(t,{Lu:function(){return a}});var r=n(66e3),o=n(25454),i=n.n(o),u={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};a.rankings=u;var s=function(e,t){return String(e.rankedValue).localeCompare(String(t.rankedValue))};function a(e,t,n){void 0===n&&(n={});var o=n,i=o.keys,a=o.threshold,d=void 0===a?u.MATCHES:a,p=o.baseSort,h=void 0===p?s:p,g=o.sorter,m=void 0===g?function(e){return e.sort((function(e,t){return function(e,t,n){var r=-1,o=1,i=e.rank,u=e.keyIndex,s=t.rank,a=t.keyIndex;return i===s?u===a?n(e,t):u<a?r:o:i>s?r:o}(e,t,h)}))}:g,v=e.reduce((function(e,o,s){var a=function(e,t,n,r){if(!t){return{rankedValue:e,rank:l(e,n,r),keyIndex:-1,keyThreshold:r.threshold}}var o=function(e,t){for(var n=[],r=0,o=t.length;r<o;r++)for(var i=t[r],u=f(i),s=c(e,i),a=0,l=s.length;a<l;a++)n.push({itemValue:s[a],attributes:u});return n}(e,t);return o.reduce((function(e,t,o){var i=e.rank,s=e.rankedValue,a=e.keyIndex,d=e.keyThreshold,c=t.itemValue,p=t.attributes,f=l(c,n,r),h=s,g=p.minRanking,m=p.maxRanking,v=p.threshold;return f<g&&f>=u.MATCHES?f=g:f>m&&(f=m),f>i&&(i=f,a=o,d=v,h=c),{rankedValue:h,rank:i,keyIndex:a,keyThreshold:d}}),{rankedValue:e,rank:u.NO_MATCH,keyIndex:-1,keyThreshold:r.threshold})}(o,i,t,n),p=a.rank,h=a.keyThreshold;p>=(void 0===h?d:h)&&e.push((0,r.Z)({},a,{item:o,index:s}));return e}),[]);return m(v).map((function(e){return e.item}))}function l(e,t,n){return e=d(e,n),(t=d(t,n)).length>e.length?u.NO_MATCH:e===t?u.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase())===(t=t.toLowerCase())?u.EQUAL:e.startsWith(t)?u.STARTS_WITH:e.includes(" "+t)?u.WORD_STARTS_WITH:e.includes(t)?u.CONTAINS:1===t.length?u.NO_MATCH:(r=e,o="",r.split(" ").forEach((function(e){e.split("-").forEach((function(e){o+=e.substr(0,1)}))})),o).includes(t)?u.ACRONYM:function(e,t){var n=0,r=0;function o(e,t,r){for(var o=r,i=t.length;o<i;o++){if(t[o]===e)return n+=1,o+1}return-1}function i(e){var r=1/e,o=n/t.length;return u.MATCHES+o*r}var s=o(t[0],e,0);if(s<0)return u.NO_MATCH;r=s;for(var a=1,l=t.length;a<l;a++){if(!((r=o(t[a],e,r))>-1))return u.NO_MATCH}return i(r-s)}(e,t);var r,o}function d(e,t){return e=""+e,t.keepDiacritics||(e=i()(e)),e}function c(e,t){var n;if("object"==typeof t&&(t=t.key),"function"==typeof t)n=t(e);else if(null==e)n=null;else if(Object.hasOwnProperty.call(e,t))n=e[t];else{if(t.includes("."))return function(e,t){for(var n=e.split("."),r=[t],o=0,i=n.length;o<i;o++){for(var u=n[o],s=[],a=0,l=r.length;a<l;a++){var d=r[a];if(null!=d)if(Object.hasOwnProperty.call(d,u)){var c=d[u];null!=c&&s.push(c)}else"*"===u&&(s=s.concat(d))}r=s}if(Array.isArray(r[0])){var p=[];return p.concat.apply(p,r)}return r}(t,e);n=null}return null==n?[]:Array.isArray(n)?n:[String(n)]}var p={maxRanking:1/0,minRanking:-1/0};function f(e){return"string"==typeof e?p:(0,r.Z)({},p,e)}},72538:function(e,t){"use strict";var n=60103,r=60106,o=60107,i=60108,u=60114,s=60109,a=60110,l=60112,d=60113,c=60120,p=60115,f=60116,h=60121,g=60122,m=60117,v=60129,I=60131;if("function"==typeof Symbol&&Symbol.for){var y=Symbol.for;n=y("react.element"),r=y("react.portal"),o=y("react.fragment"),i=y("react.strict_mode"),u=y("react.profiler"),s=y("react.provider"),a=y("react.context"),l=y("react.forward_ref"),d=y("react.suspense"),c=y("react.suspense_list"),p=y("react.memo"),f=y("react.lazy"),h=y("react.block"),g=y("react.server.block"),m=y("react.fundamental"),v=y("react.debug_trace_mode"),I=y("react.legacy_hidden")}function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case o:case u:case i:case d:case c:return e;default:switch(e=e&&e.$$typeof){case a:case l:case f:case p:case s:return e;default:return t}}case r:return t}}}},20503:function(e,t,n){"use strict";n(72538)},25454:function(e){var t={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Ấ":"A","Ắ":"A","Ẳ":"A","Ẵ":"A","Ặ":"A","Æ":"AE","Ầ":"A","Ằ":"A","Ȃ":"A","Ç":"C","Ḉ":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ế":"E","Ḗ":"E","Ề":"E","Ḕ":"E","Ḝ":"E","Ȇ":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ḯ":"I","Ȋ":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ố":"O","Ṍ":"O","Ṓ":"O","Ȏ":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ấ":"a","ắ":"a","ẳ":"a","ẵ":"a","ặ":"a","æ":"ae","ầ":"a","ằ":"a","ȃ":"a","ç":"c","ḉ":"c","è":"e","é":"e","ê":"e","ë":"e","ế":"e","ḗ":"e","ề":"e","ḕ":"e","ḝ":"e","ȇ":"e","ì":"i","í":"i","î":"i","ï":"i","ḯ":"i","ȋ":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ố":"o","ṍ":"o","ṓ":"o","ȏ":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Ĉ":"C","ĉ":"c","Ċ":"C","ċ":"c","Č":"C","č":"c","C̆":"C","c̆":"c","Ď":"D","ď":"d","Đ":"D","đ":"d","Ē":"E","ē":"e","Ĕ":"E","ĕ":"e","Ė":"E","ė":"e","Ę":"E","ę":"e","Ě":"E","ě":"e","Ĝ":"G","Ǵ":"G","ĝ":"g","ǵ":"g","Ğ":"G","ğ":"g","Ġ":"G","ġ":"g","Ģ":"G","ģ":"g","Ĥ":"H","ĥ":"h","Ħ":"H","ħ":"h","Ḫ":"H","ḫ":"h","Ĩ":"I","ĩ":"i","Ī":"I","ī":"i","Ĭ":"I","ĭ":"i","Į":"I","į":"i","İ":"I","ı":"i","Ĳ":"IJ","ĳ":"ij","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","Ḱ":"K","ḱ":"k","K̆":"K","k̆":"k","Ĺ":"L","ĺ":"l","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ŀ":"L","ŀ":"l","Ł":"l","ł":"l","Ḿ":"M","ḿ":"m","M̆":"M","m̆":"m","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","ŉ":"n","N̆":"N","n̆":"n","Ō":"O","ō":"o","Ŏ":"O","ŏ":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","P̆":"P","p̆":"p","Ŕ":"R","ŕ":"r","Ŗ":"R","ŗ":"r","Ř":"R","ř":"r","R̆":"R","r̆":"r","Ȓ":"R","ȓ":"r","Ś":"S","ś":"s","Ŝ":"S","ŝ":"s","Ş":"S","Ș":"S","ș":"s","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","ț":"t","Ț":"T","Ť":"T","ť":"t","Ŧ":"T","ŧ":"t","T̆":"T","t̆":"t","Ũ":"U","ũ":"u","Ū":"U","ū":"u","Ŭ":"U","ŭ":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ȗ":"U","ȗ":"u","V̆":"V","v̆":"v","Ŵ":"W","ŵ":"w","Ẃ":"W","ẃ":"w","X̆":"X","x̆":"x","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Y̆":"Y","y̆":"y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ſ":"s","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ǎ":"A","ǎ":"a","Ǐ":"I","ǐ":"i","Ǒ":"O","ǒ":"o","Ǔ":"U","ǔ":"u","Ǖ":"U","ǖ":"u","Ǘ":"U","ǘ":"u","Ǚ":"U","ǚ":"u","Ǜ":"U","ǜ":"u","Ứ":"U","ứ":"u","Ṹ":"U","ṹ":"u","Ǻ":"A","ǻ":"a","Ǽ":"AE","ǽ":"ae","Ǿ":"O","ǿ":"o","Þ":"TH","þ":"th","Ṕ":"P","ṕ":"p","Ṥ":"S","ṥ":"s","X́":"X","x́":"x","Ѓ":"Г","ѓ":"г","Ќ":"К","ќ":"к","A̋":"A","a̋":"a","E̋":"E","e̋":"e","I̋":"I","i̋":"i","Ǹ":"N","ǹ":"n","Ồ":"O","ồ":"o","Ṑ":"O","ṑ":"o","Ừ":"U","ừ":"u","Ẁ":"W","ẁ":"w","Ỳ":"Y","ỳ":"y","Ȁ":"A","ȁ":"a","Ȅ":"E","ȅ":"e","Ȉ":"I","ȉ":"i","Ȍ":"O","ȍ":"o","Ȑ":"R","ȑ":"r","Ȕ":"U","ȕ":"u","B̌":"B","b̌":"b","Č̣":"C","č̣":"c","Ê̌":"E","ê̌":"e","F̌":"F","f̌":"f","Ǧ":"G","ǧ":"g","Ȟ":"H","ȟ":"h","J̌":"J","ǰ":"j","Ǩ":"K","ǩ":"k","M̌":"M","m̌":"m","P̌":"P","p̌":"p","Q̌":"Q","q̌":"q","Ř̩":"R","ř̩":"r","Ṧ":"S","ṧ":"s","V̌":"V","v̌":"v","W̌":"W","w̌":"w","X̌":"X","x̌":"x","Y̌":"Y","y̌":"y","A̧":"A","a̧":"a","B̧":"B","b̧":"b","Ḑ":"D","ḑ":"d","Ȩ":"E","ȩ":"e","Ɛ̧":"E","ɛ̧":"e","Ḩ":"H","ḩ":"h","I̧":"I","i̧":"i","Ɨ̧":"I","ɨ̧":"i","M̧":"M","m̧":"m","O̧":"O","o̧":"o","Q̧":"Q","q̧":"q","U̧":"U","u̧":"u","X̧":"X","x̧":"x","Z̧":"Z","z̧":"z"},n=Object.keys(t).join("|"),r=new RegExp(n,"g"),o=new RegExp(n,""),i=function(e){return e.replace(r,(function(e){return t[e]}))};e.exports=i,e.exports.has=function(e){return!!e.match(o)},e.exports.remove=i},52134:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},66e3:function(e,t,n){"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},3633:function(e,t,n){"use strict";n.d(t,{_T:function(){return o},pi:function(){return r}});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create}}]);