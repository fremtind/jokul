/*! For license information please see 580dd1a71c52b48b5dcf56c272815ee0cb34676c-6b917fc342e67a31f4cb.js.LICENSE.txt */
(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2748],{49517:function(e,t,n){"use strict";n.d(t,{ZP:function(){return P}});var i=n(23615),r=n.n(i),o=n(27378);n(19185);function s(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function a(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function l(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return a(n.overflowY,t)||a(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function u(e,t,n,i,r,o,s,a){return o<e&&s>t||o>e&&s<t?0:o<=e&&a<=n||s>=t&&a>=n?o-e-i:s>t&&a<n||o<e&&a>n?s-t+r:0}var c=n(59312);let d=0;function h(e){return"function"==typeof e?e:p}function p(){}function g(e,t){if(!e)return;const n=function(e,t){var n=window,i=t.scrollMode,r=t.block,o=t.inline,a=t.boundary,c=t.skipOverflowHiddenElements,d="function"==typeof a?a:function(e){return e!==a};if(!s(e))throw new TypeError("Invalid target");for(var h=document.scrollingElement||document.documentElement,p=[],g=e;s(g)&&d(g);){if((g=g.parentElement)===h){p.push(g);break}null!=g&&g===document.body&&l(g)&&!l(document.documentElement)||null!=g&&l(g,c)&&p.push(g)}for(var m=n.visualViewport?n.visualViewport.width:innerWidth,f=n.visualViewport?n.visualViewport.height:innerHeight,I=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,y=e.getBoundingClientRect(),S=y.height,w=y.width,E=y.top,b=y.right,x=y.bottom,C=y.left,k="start"===r||"nearest"===r?E:"end"===r?x:E+S/2,O="center"===o?C+w/2:"end"===o?b:C,A=[],H=0;H<p.length;H++){var M=p[H],T=M.getBoundingClientRect(),R=T.height,L=T.width,N=T.top,D=T.right,_=T.bottom,P=T.left;if("if-needed"===i&&E>=0&&C>=0&&x<=f&&b<=m&&E>=N&&x<=_&&C>=P&&b<=D)return A;var V=getComputedStyle(M),U=parseInt(V.borderLeftWidth,10),j=parseInt(V.borderTopWidth,10),K=parseInt(V.borderRightWidth,10),B=parseInt(V.borderBottomWidth,10),W=0,$=0,Y="offsetWidth"in M?M.offsetWidth-M.clientWidth-U-K:0,F="offsetHeight"in M?M.offsetHeight-M.clientHeight-j-B:0;if(h===M)W="start"===r?k:"end"===r?k-f:"nearest"===r?u(v,v+f,f,j,B,v+k,v+k+S,S):k-f/2,$="start"===o?O:"center"===o?O-m/2:"end"===o?O-m:u(I,I+m,m,U,K,I+O,I+O+w,w),W=Math.max(0,W+v),$=Math.max(0,$+I);else{W="start"===r?k-N-j:"end"===r?k-_+B+F:"nearest"===r?u(N,_,R,j,B+F,k,k+S,S):k-(N+R/2)+F/2,$="start"===o?O-P-U:"center"===o?O-(P+L/2)+Y/2:"end"===o?O-D+K+Y:u(P,D,L,U,K+Y,O,O+w,w);var X=M.scrollLeft,Z=M.scrollTop;k+=Z-(W=Math.max(0,Math.min(Z+W,M.scrollHeight-R+F))),O+=X-($=Math.max(0,Math.min(X+$,M.scrollWidth-L+Y)))}A.push({el:M,top:W,left:$})}return A}(e,{boundary:t,block:"nearest",scrollMode:"if-needed"});n.forEach((e=>{let{el:t,top:n,left:i}=e;t.scrollTop=n,t.scrollLeft=i}))}function m(e,t,n){return e===t||t instanceof n.Node&&e.contains&&e.contains(t)}function f(e,t){let n;function i(){n&&clearTimeout(n)}function r(){for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];i(),n=setTimeout((()=>{n=null,e(...o)}),t)}return r.cancel=i,r}function I(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return t.some((t=>(t&&t(e,...i),e.preventDownshiftDefault||e.hasOwnProperty("nativeEvent")&&e.nativeEvent.preventDownshiftDefault)))}}function v(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"==typeof t?t(e):t&&(t.current=e)}))}}function y(){return String(d++)}function S(e){let{isOpen:t,resultCount:n,previousResultCount:i}=e;return t?n?n!==i?`${n} result${1===n?" is":"s are"} available, use up and down arrow keys to navigate. Press Enter key to select.`:"":"No results are available.":""}function w(e,t){return!(e=Array.isArray(e)?e[0]:e)&&t?t:e}function E(e){return"string"==typeof e.type}function b(e){return e.props}const x=["highlightedIndex","inputValue","isOpen","selectedItem","type"];function C(e){void 0===e&&(e={});const t={};return x.forEach((n=>{e.hasOwnProperty(n)&&(t[n]=e[n])})),t}function k(e,t){return Object.keys(e).reduce(((n,i)=>(n[i]=O(t,i)?t[i]:e[i],n)),{})}function O(e,t){return void 0!==e[t]}function A(e){const{key:t,keyCode:n}=e;return n>=37&&n<=40&&0!==t.indexOf("Arrow")?`Arrow${t}`:t}function H(e,t,n,i,r){if(void 0===r&&(r=!0),0===n)return-1;const o=n-1;("number"!=typeof t||t<0||t>=n)&&(t=e>0?-1:o+1);let s=t+e;s<0?s=r?o:0:s>o&&(s=r?0:o);const a=M(e,s,n,i,r);return-1===a?t>=n?-1:t:a}function M(e,t,n,i,r){const o=i(t);if(!o||!o.hasAttribute("disabled"))return t;if(e>0){for(let s=t+1;s<n;s++)if(!i(s).hasAttribute("disabled"))return s}else for(let s=t-1;s>=0;s--)if(!i(s).hasAttribute("disabled"))return s;return r?e>0?M(1,0,n,i,!1):M(-1,n-1,n,i,!1):-1}function T(e,t,n,i){return void 0===i&&(i=!0),t.some((t=>t&&(m(t,e,n)||i&&m(t,n.document.activeElement,n))))}const R=f((e=>{N(e).textContent=""}),500);function L(e,t){const n=N(t);e&&(n.textContent=e,R(t))}function N(e){void 0===e&&(e=document);let t=e.getElementById("a11y-status-message");return t||(t=e.createElement("div"),t.setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}var D=Object.freeze({__proto__:null,unknown:0,mouseUp:1,itemMouseEnter:2,keyDownArrowUp:3,keyDownArrowDown:4,keyDownEscape:5,keyDownEnter:6,keyDownHome:7,keyDownEnd:8,clickItem:9,blurInput:10,changeInput:11,keyDownSpaceButton:12,clickButton:13,blurButton:14,controlledPropUpdatedSelectedItem:15,touchEnd:16});const _=(()=>{class e extends o.Component{constructor(e){var t;super(e),t=this,this.id=this.props.id||`downshift-${y()}`,this.menuId=this.props.menuId||`${this.id}-menu`,this.labelId=this.props.labelId||`${this.id}-label`,this.inputId=this.props.inputId||`${this.id}-input`,this.getItemId=this.props.getItemId||(e=>`${this.id}-item-${e}`),this.input=null,this.items=[],this.itemCount=null,this.previousResultCount=0,this.timeoutIds=[],this.internalSetTimeout=(e,t)=>{const n=setTimeout((()=>{this.timeoutIds=this.timeoutIds.filter((e=>e!==n)),e()}),t);this.timeoutIds.push(n)},this.setItemCount=e=>{this.itemCount=e},this.unsetItemCount=()=>{this.itemCount=null},this.setHighlightedIndex=function(e,n){void 0===e&&(e=t.props.defaultHighlightedIndex),void 0===n&&(n={}),n=C(n),t.internalSetState({highlightedIndex:e,...n})},this.clearSelection=e=>{this.internalSetState({selectedItem:null,inputValue:"",highlightedIndex:this.props.defaultHighlightedIndex,isOpen:this.props.defaultIsOpen},e)},this.selectItem=(e,t,n)=>{t=C(t),this.internalSetState({isOpen:this.props.defaultIsOpen,highlightedIndex:this.props.defaultHighlightedIndex,selectedItem:e,inputValue:this.props.itemToString(e),...t},n)},this.selectItemAtIndex=(e,t,n)=>{const i=this.items[e];null!=i&&this.selectItem(i,t,n)},this.selectHighlightedItem=(e,t)=>this.selectItemAtIndex(this.getState().highlightedIndex,e,t),this.internalSetState=(e,t)=>{let n,i;const r={},o="function"==typeof e;return!o&&e.hasOwnProperty("inputValue")&&this.props.onInputValueChange(e.inputValue,{...this.getStateAndHelpers(),...e}),this.setState((t=>{t=this.getState(t);let s=o?e(t):e;s=this.props.stateReducer(t,s),n=s.hasOwnProperty("selectedItem");const a={};return n&&s.selectedItem!==t.selectedItem&&(i=s.selectedItem),s.type=s.type||0,Object.keys(s).forEach((e=>{t[e]!==s[e]&&(r[e]=s[e]),"type"!==e&&(s[e],O(this.props,e)||(a[e]=s[e]))})),o&&s.hasOwnProperty("inputValue")&&this.props.onInputValueChange(s.inputValue,{...this.getStateAndHelpers(),...s}),a}),(()=>{h(t)();Object.keys(r).length>1&&this.props.onStateChange(r,this.getStateAndHelpers()),n&&this.props.onSelect(e.selectedItem,this.getStateAndHelpers()),void 0!==i&&this.props.onChange(i,this.getStateAndHelpers()),this.props.onUserAction(r,this.getStateAndHelpers())}))},this.rootRef=e=>this._rootNode=e,this.getRootProps=function(e,n){let{refKey:i="ref",ref:r,...o}=void 0===e?{}:e,{suppressRefError:s=!1}=void 0===n?{}:n;t.getRootProps.called=!0,t.getRootProps.refKey=i,t.getRootProps.suppressRefError=s;const{isOpen:a}=t.getState();return{[i]:v(r,t.rootRef),role:"combobox","aria-expanded":a,"aria-haspopup":"listbox","aria-owns":a?t.menuId:null,"aria-labelledby":t.labelId,...o}},this.keyDownHandlers={ArrowDown(e){if(e.preventDefault(),this.getState().isOpen){const t=e.shiftKey?5:1;this.moveHighlightedIndex(t,{type:4})}else this.internalSetState({isOpen:!0,type:4},(()=>{const e=this.getItemCount();if(e>0){const{highlightedIndex:t}=this.getState(),n=H(1,t,e,(e=>this.getItemNodeFromIndex(e)));this.setHighlightedIndex(n,{type:4})}}))},ArrowUp(e){if(e.preventDefault(),this.getState().isOpen){const t=e.shiftKey?-5:-1;this.moveHighlightedIndex(t,{type:3})}else this.internalSetState({isOpen:!0,type:3},(()=>{const e=this.getItemCount();if(e>0){const{highlightedIndex:t}=this.getState(),n=H(-1,t,e,(e=>this.getItemNodeFromIndex(e)));this.setHighlightedIndex(n,{type:3})}}))},Enter(e){if(229===e.which)return;const{isOpen:t,highlightedIndex:n}=this.getState();if(t&&null!=n){e.preventDefault();const t=this.items[n],i=this.getItemNodeFromIndex(n);if(null==t||i&&i.hasAttribute("disabled"))return;this.selectHighlightedItem({type:6})}},Escape(e){e.preventDefault(),this.reset({type:5,...!this.state.isOpen&&{selectedItem:null,inputValue:""}})}},this.buttonKeyDownHandlers={...this.keyDownHandlers," "(e){e.preventDefault(),this.toggleMenu({type:12})}},this.inputKeyDownHandlers={...this.keyDownHandlers,Home(e){const{isOpen:t}=this.getState();if(!t)return;e.preventDefault();const n=this.getItemCount();if(n<=0||!t)return;const i=M(1,0,n,(e=>this.getItemNodeFromIndex(e)),!1);this.setHighlightedIndex(i,{type:7})},End(e){const{isOpen:t}=this.getState();if(!t)return;e.preventDefault();const n=this.getItemCount();if(n<=0||!t)return;const i=M(-1,n-1,n,(e=>this.getItemNodeFromIndex(e)),!1);this.setHighlightedIndex(i,{type:8})}},this.getToggleButtonProps=function(e){let{onClick:n,onPress:i,onKeyDown:r,onKeyUp:o,onBlur:s,...a}=void 0===e?{}:e;const{isOpen:l}=t.getState(),u={onClick:I(n,t.buttonHandleClick),onKeyDown:I(r,t.buttonHandleKeyDown),onKeyUp:I(o,t.buttonHandleKeyUp),onBlur:I(s,t.buttonHandleBlur)};return{type:"button",role:"button","aria-label":l?"close menu":"open menu","aria-haspopup":!0,"data-toggle":!0,...a.disabled?{}:u,...a}},this.buttonHandleKeyUp=e=>{e.preventDefault()},this.buttonHandleKeyDown=e=>{const t=A(e);this.buttonKeyDownHandlers[t]&&this.buttonKeyDownHandlers[t].call(this,e)},this.buttonHandleClick=e=>{e.preventDefault(),this.props.environment.document.activeElement===this.props.environment.document.body&&e.target.focus(),this.internalSetTimeout((()=>this.toggleMenu({type:13})))},this.buttonHandleBlur=e=>{const t=e.target;this.internalSetTimeout((()=>{this.isMouseDown||null!=this.props.environment.document.activeElement&&this.props.environment.document.activeElement.id===this.inputId||this.props.environment.document.activeElement===t||this.reset({type:14})}))},this.getLabelProps=e=>({htmlFor:this.inputId,id:this.labelId,...e}),this.getInputProps=function(e){let n,{onKeyDown:i,onBlur:r,onChange:o,onInput:s,onChangeText:a,...l}=void 0===e?{}:e,u={};n="onChange";const{inputValue:c,isOpen:d,highlightedIndex:h}=t.getState();return l.disabled||(u={onChange:I(o,s,t.inputHandleChange),onKeyDown:I(i,t.inputHandleKeyDown),onBlur:I(r,t.inputHandleBlur)}),{"aria-autocomplete":"list","aria-activedescendant":d&&"number"==typeof h&&h>=0?t.getItemId(h):null,"aria-controls":d?t.menuId:null,"aria-labelledby":t.labelId,autoComplete:"off",value:c,id:t.inputId,...u,...l}},this.inputHandleKeyDown=e=>{const t=A(e);t&&this.inputKeyDownHandlers[t]&&this.inputKeyDownHandlers[t].call(this,e)},this.inputHandleChange=e=>{this.internalSetState({type:11,isOpen:!0,inputValue:e.target.value,highlightedIndex:this.props.defaultHighlightedIndex})},this.inputHandleBlur=()=>{this.internalSetTimeout((()=>{const e=this.props.environment.document&&!!this.props.environment.document.activeElement&&!!this.props.environment.document.activeElement.dataset&&this.props.environment.document.activeElement.dataset.toggle&&this._rootNode&&this._rootNode.contains(this.props.environment.document.activeElement);this.isMouseDown||e||this.reset({type:10})}))},this.menuRef=e=>{this._menuNode=e},this.getMenuProps=function(e,n){let{refKey:i="ref",ref:r,...o}=void 0===e?{}:e,{suppressRefError:s=!1}=void 0===n?{}:n;return t.getMenuProps.called=!0,t.getMenuProps.refKey=i,t.getMenuProps.suppressRefError=s,{[i]:v(r,t.menuRef),role:"listbox","aria-labelledby":o&&o["aria-label"]?null:t.labelId,id:t.menuId,...o}},this.getItemProps=function(e){let{onMouseMove:n,onMouseDown:i,onClick:r,onPress:o,index:s,item:a,...l}=void 0===e?{}:e;void 0===s?(t.items.push(a),s=t.items.indexOf(a)):t.items[s]=a;const u=r,c={onMouseMove:I(n,(()=>{s!==t.getState().highlightedIndex&&(t.setHighlightedIndex(s,{type:2}),t.avoidScrolling=!0,t.internalSetTimeout((()=>t.avoidScrolling=!1),250))})),onMouseDown:I(i,(e=>{e.preventDefault()})),onClick:I(u,(()=>{t.selectItemAtIndex(s,{type:9})}))},d=l.disabled?{onMouseDown:c.onMouseDown}:c;return{id:t.getItemId(s),role:"option","aria-selected":t.getState().highlightedIndex===s,...d,...l}},this.clearItems=()=>{this.items=[]},this.reset=function(e,n){void 0===e&&(e={}),e=C(e),t.internalSetState((n=>{let{selectedItem:i}=n;return{isOpen:t.props.defaultIsOpen,highlightedIndex:t.props.defaultHighlightedIndex,inputValue:t.props.itemToString(i),...e}}),n)},this.toggleMenu=function(e,n){void 0===e&&(e={}),e=C(e),t.internalSetState((n=>{let{isOpen:i}=n;return{isOpen:!i,...i&&{highlightedIndex:t.props.defaultHighlightedIndex},...e}}),(()=>{const{isOpen:i,highlightedIndex:r}=t.getState();i&&t.getItemCount()>0&&"number"==typeof r&&t.setHighlightedIndex(r,e),h(n)()}))},this.openMenu=e=>{this.internalSetState({isOpen:!0},e)},this.closeMenu=e=>{this.internalSetState({isOpen:!1},e)},this.updateStatus=f((()=>{const e=this.getState(),t=this.items[e.highlightedIndex],n=this.getItemCount(),i=this.props.getA11yStatusMessage({itemToString:this.props.itemToString,previousResultCount:this.previousResultCount,resultCount:n,highlightedItem:t,...e});this.previousResultCount=n,L(i,this.props.environment.document)}),200);const{defaultHighlightedIndex:n,initialHighlightedIndex:i=n,defaultIsOpen:r,initialIsOpen:o=r,initialInputValue:s="",initialSelectedItem:a=null}=this.props,l=this.getState({highlightedIndex:i,isOpen:o,inputValue:s,selectedItem:a});null!=l.selectedItem&&void 0===this.props.initialInputValue&&(l.inputValue=this.props.itemToString(l.selectedItem)),this.state=l}internalClearTimeouts(){this.timeoutIds.forEach((e=>{clearTimeout(e)})),this.timeoutIds=[]}getState(e){return void 0===e&&(e=this.state),k(e,this.props)}getItemCount(){let e=this.items.length;return null!=this.itemCount?e=this.itemCount:void 0!==this.props.itemCount&&(e=this.props.itemCount),e}getItemNodeFromIndex(e){return this.props.environment.document.getElementById(this.getItemId(e))}scrollHighlightedItemIntoView(){{const e=this.getItemNodeFromIndex(this.getState().highlightedIndex);this.props.scrollIntoView(e,this._menuNode)}}moveHighlightedIndex(e,t){const n=this.getItemCount(),{highlightedIndex:i}=this.getState();if(n>0){const r=H(e,i,n,(e=>this.getItemNodeFromIndex(e)));this.setHighlightedIndex(r,t)}}getStateAndHelpers(){const{highlightedIndex:e,inputValue:t,selectedItem:n,isOpen:i}=this.getState(),{itemToString:r}=this.props,{id:o}=this,{getRootProps:s,getToggleButtonProps:a,getLabelProps:l,getMenuProps:u,getInputProps:c,getItemProps:d,openMenu:h,closeMenu:p,toggleMenu:g,selectItem:m,selectItemAtIndex:f,selectHighlightedItem:I,setHighlightedIndex:v,clearSelection:y,clearItems:S,reset:w,setItemCount:E,unsetItemCount:b,internalSetState:x}=this;return{getRootProps:s,getToggleButtonProps:a,getLabelProps:l,getMenuProps:u,getInputProps:c,getItemProps:d,reset:w,openMenu:h,closeMenu:p,toggleMenu:g,selectItem:m,selectItemAtIndex:f,selectHighlightedItem:I,setHighlightedIndex:v,clearSelection:y,clearItems:S,setItemCount:E,unsetItemCount:b,setState:x,itemToString:r,id:o,highlightedIndex:e,inputValue:t,isOpen:i,selectedItem:n}}componentDidMount(){{const e=()=>{this.isMouseDown=!0},t=e=>{this.isMouseDown=!1;!T(e.target,[this._rootNode,this._menuNode],this.props.environment)&&this.getState().isOpen&&this.reset({type:1},(()=>this.props.onOuterClick(this.getStateAndHelpers())))},n=()=>{this.isTouchMove=!1},i=()=>{this.isTouchMove=!0},r=e=>{const t=T(e.target,[this._rootNode,this._menuNode],this.props.environment,!1);this.isTouchMove||t||!this.getState().isOpen||this.reset({type:16},(()=>this.props.onOuterClick(this.getStateAndHelpers())))},{environment:o}=this.props;o.addEventListener("mousedown",e),o.addEventListener("mouseup",t),o.addEventListener("touchstart",n),o.addEventListener("touchmove",i),o.addEventListener("touchend",r),this.cleanup=()=>{this.internalClearTimeouts(),this.updateStatus.cancel(),o.removeEventListener("mousedown",e),o.removeEventListener("mouseup",t),o.removeEventListener("touchstart",n),o.removeEventListener("touchmove",i),o.removeEventListener("touchend",r)}}}shouldScroll(e,t){const{highlightedIndex:n}=void 0===this.props.highlightedIndex?this.getState():this.props,{highlightedIndex:i}=void 0===t.highlightedIndex?e:t;return n&&this.getState().isOpen&&!e.isOpen||n!==i}componentDidUpdate(e,t){O(this.props,"selectedItem")&&this.props.selectedItemChanged(e.selectedItem,this.props.selectedItem)&&this.internalSetState({type:15,inputValue:this.props.itemToString(this.props.selectedItem)}),!this.avoidScrolling&&this.shouldScroll(t,e)&&this.scrollHighlightedItemIntoView(),this.updateStatus()}componentWillUnmount(){this.cleanup()}render(){const e=w(this.props.children,p);this.clearItems(),this.getRootProps.called=!1,this.getRootProps.refKey=void 0,this.getRootProps.suppressRefError=void 0,this.getMenuProps.called=!1,this.getMenuProps.refKey=void 0,this.getMenuProps.suppressRefError=void 0,this.getLabelProps.called=!1,this.getInputProps.called=!1;const t=w(e(this.getStateAndHelpers()));return t?this.getRootProps.called||this.props.suppressRefError?t:E(t)?(0,o.cloneElement)(t,this.getRootProps(b(t))):void 0:null}}return e.defaultProps={defaultHighlightedIndex:null,defaultIsOpen:!1,getA11yStatusMessage:S,itemToString:e=>null==e?"":String(e),onStateChange:p,onInputValueChange:p,onUserAction:p,onChange:p,onSelect:p,onOuterClick:p,selectedItemChanged:(e,t)=>e!==t,environment:"undefined"==typeof window?{}:window,stateReducer:(e,t)=>t,suppressRefError:!1,scrollIntoView:g},e.stateChangeTypes=D,e})();var P=_;f(((e,t)=>{L(e(),t)}),200),"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?o.useLayoutEffect:o.useEffect;const V={itemToString:function(e){return e?String(e):""},stateReducer:function(e,t){return t.changes},getA11ySelectionMessage:function(e){const{selectedItem:t,itemToString:n}=e;return t?`${n(t)} has been selected.`:""},scrollIntoView:g,circularNavigation:!1,environment:"undefined"==typeof window?{}:window};r().array.isRequired,r().func,r().func,r().func,r().bool,r().number,r().number,r().number,r().bool,r().bool,r().bool,r().any,r().any,r().any,r().string,r().string,r().string,r().func,r().string,r().func,r().func,r().func,r().func,r().func,r().shape({addEventListener:r().func,removeEventListener:r().func,document:r().shape({getElementById:r().func,activeElement:r().any,body:r().any})});(0,c.pi)((0,c.pi)({},V),{getA11yStatusMessage:function(e){var t=e.isOpen,n=e.resultCount,i=e.previousResultCount;return t?n?n!==i?"".concat(n," result").concat(1===n?" is":"s are"," available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select."):"":"No results are available.":""}});r().array.isRequired,r().func,r().func,r().func,r().bool,r().number,r().number,r().number,r().bool,r().bool,r().bool,r().any,r().any,r().any,r().string,r().string,r().string,r().string,r().string,r().string,r().func,r().string,r().string,r().func,r().func,r().func,r().func,r().func,r().func,r().shape({addEventListener:r().func,removeEventListener:r().func,document:r().shape({getElementById:r().func,activeElement:r().any,body:r().any})});r().array,r().array,r().array,r().func,r().func,r().func,r().number,r().number,r().number,r().func,r().func,r().string,r().string,r().shape({addEventListener:r().func,removeEventListener:r().func,document:r().shape({getElementById:r().func,activeElement:r().any,body:r().any})})},84046:function(e,t,n){"use strict";n.d(t,{M:function(){return l}});var i=n(60042),r=n.n(i),o=n(38910),s=n(27378),a=n(71212);const l=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:i}=(0,s.useContext)(a.R),l="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(o.E.main,{initial:{y:i?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:i?0:-20,opacity:0},transition:{duration:i||l?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},27151:function(e,t,n){"use strict";n.d(t,{U:function(){return s}});var i=n(60042),r=n.n(i),o=n(27378);const s=e=>{let{className:t,density:n,...i}=e;return o.createElement("div",{"data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,...i})}},31931:function(e,t,n){"use strict";n.d(t,{Q:function(){return u}});var i=n(7726),r=n(58296),o=n(60042),s=n.n(o),a=n(27378);const l=e=>{let{expanded:t=!1,className:n}=e;return a.createElement("span",{className:s()("jkl-accordion-item__arrow",n,{"jkl-accordion-item__arrow--expanded":t})},a.createElement("svg",{className:"jkl-accordion-item__arrow-down",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M11.15 8.51998L10.35 7.73998L6.54999 11.58L6.55 0.699982L5.43 0.699982L5.43 11.56L1.67 7.73998L0.869995 8.51998L6.01 13.54L11.15 8.51998Z",fill:"currentColor"})),a.createElement("svg",{className:"jkl-accordion-item__arrow-up",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M0.940002 5.71998L1.74 6.49998L5.54 2.65998V13.54H6.66V2.67998L10.42 6.49998L11.22 5.71998L6.08 0.699982L0.940002 5.71998Z",fill:"currentColor"})))},u=e=>{let{children:t,title:n,className:o,startExpanded:u=!1,onClick:c,...d}=e;const h=(0,i.M)("title"),p=(0,i.M)("content"),{0:g,1:m}=(0,a.useState)(u),[f]=(0,r.v)(g,{easing:"exit",timing:"expressive"});return a.createElement("div",{"data-testid":"jkl-accordion-item",...d,className:s()("jkl-accordion-item",o,{"jkl-accordion-item--expanded":g})},a.createElement("button",{id:h,className:"jkl-accordion-item__title",type:"button","aria-expanded":g,"aria-controls":p,onClick:e=>{const t=!g;m(t),c&&c(e,t)}},n,a.createElement(l,{expanded:g})),a.createElement("div",{id:p,ref:f,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":h,hidden:!g},a.createElement("div",{className:"jkl-accordion-item__content"},t)))}},82026:function(e,t,n){"use strict";n.d(t,{x:function(){return o}});var i=n(27378),r=n(3492);const o=e=>{let{className:t,variant:n,...o}=e;return i.createElement(r.G,{...o,className:t,variant:n,innerSvg:i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.6897 12.2047L16.7976 5.77481L16.0836 5.07422L10.0003 11.4783L3.92319 5.07428L3.20958 5.77524L9.31054 12.2044L2.5 19.374L3.21395 20.0746L9.99992 12.9308L16.7857 20.0816L17.4993 19.3807L10.6897 12.2047Z",fill:"currentColor"})})};o.displayName="Close"},61045:function(e,t,n){"use strict";n.d(t,{o:function(){return o}});var i=n(27378),r=n(3492);const o=e=>{let{className:t,variant:n,...o}=e;return i.createElement(r.G,{...o,className:t,variant:n,innerSvg:i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 9.07422C2 5.20823 5.13401 2.07422 9 2.07422C12.866 2.07422 16 5.20823 16 9.07422C16 12.9402 12.866 16.0742 9 16.0742C5.13401 16.0742 2 12.9402 2 9.07422ZM9 1.07422C4.58172 1.07422 1 4.65594 1 9.07422C1 13.4925 4.58172 17.0742 9 17.0742C10.9927 17.0742 12.8152 16.3457 14.2157 15.1404L19.003 19.9278L19.7101 19.2207L14.9317 14.4423C16.217 13.0228 17 11.14 17 9.07422C17 4.65594 13.4183 1.07422 9 1.07422Z",fill:"currentColor"})})};o.displayName="Search"},85001:function(e,t,n){"use strict";n.d(t,{w:function(){return d}});var i=n(27378),r=n(46209),o=n(95419),s=n(26472),a=n(30135),l=n(8611),u=n(12768),c=n(56171);const d=(0,i.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:h,rows:p,verticalAlign:g,...m}=e;return i.createElement(r.i,{fullWidth:!0,...m,ref:t},n&&i.createElement(s.R,{srOnly:!0},n),i.createElement(l.s,null,i.createElement(c.S,null,d.map(((e,t)=>i.createElement(u.x,{key:t,density:"compact",bold:!0},e))))),i.createElement(o.R,null,0===p.length&&h&&i.createElement(c.S,null,i.createElement(a.p,{colSpan:d.length},h)),p.map(((e,t)=>i.createElement(c.S,{key:t},e.map(((e,t)=>i.createElement(a.p,{key:t,"data-th":d[t],verticalAlign:g},e))))))))}));d.displayName="DataTable"},50573:function(e,t,n){"use strict";function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},i.apply(this,arguments)}n.d(t,{Lu:function(){return l}});var r=n(55200),o=n.n(r),s={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};l.rankings=s;var a=function(e,t){return String(e.rankedValue).localeCompare(String(t.rankedValue))};function l(e,t,n){void 0===n&&(n={});var r=n,o=r.keys,l=r.threshold,c=void 0===l?s.MATCHES:l,h=r.baseSort,g=void 0===h?a:h,m=r.sorter,f=void 0===m?function(e){return e.sort((function(e,t){return function(e,t,n){var i=-1,r=1,o=e.rank,s=e.keyIndex,a=t.rank,l=t.keyIndex;return o===a?s===l?n(e,t):s<l?i:r:o>a?i:r}(e,t,g)}))}:m,I=e.reduce((function(e,r,a){var l=function(e,t,n,i){if(!t){return{rankedValue:e,rank:u(e,n,i),keyIndex:-1,keyThreshold:i.threshold}}return function(e,t){for(var n=[],i=0,r=t.length;i<r;i++)for(var o=t[i],s=p(o),a=d(e,o),l=0,u=a.length;l<u;l++)n.push({itemValue:a[l],attributes:s});return n}(e,t).reduce((function(e,t,r){var o=e.rank,a=e.rankedValue,l=e.keyIndex,c=e.keyThreshold,d=t.itemValue,h=t.attributes,p=u(d,n,i),g=a,m=h.minRanking,f=h.maxRanking,I=h.threshold;return p<m&&p>=s.MATCHES?p=m:p>f&&(p=f),p>o&&(o=p,l=r,c=I,g=d),{rankedValue:g,rank:o,keyIndex:l,keyThreshold:c}}),{rankedValue:e,rank:s.NO_MATCH,keyIndex:-1,keyThreshold:i.threshold})}(r,o,t,n),h=l.rank,g=l.keyThreshold;h>=(void 0===g?c:g)&&e.push(i({},l,{item:r,index:a}));return e}),[]);return f(I).map((function(e){return e.item}))}function u(e,t,n){return e=c(e,n),(t=c(t,n)).length>e.length?s.NO_MATCH:e===t?s.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase())===(t=t.toLowerCase())?s.EQUAL:e.startsWith(t)?s.STARTS_WITH:e.includes(" "+t)?s.WORD_STARTS_WITH:e.includes(t)?s.CONTAINS:1===t.length?s.NO_MATCH:(i=e,r="",i.split(" ").forEach((function(e){e.split("-").forEach((function(e){r+=e.substr(0,1)}))})),r).includes(t)?s.ACRONYM:function(e,t){var n=0,i=0;function r(e,t,i){for(var r=i,o=t.length;r<o;r++){if(t[r]===e)return n+=1,r+1}return-1}function o(e){var i=1/e,r=n/t.length;return s.MATCHES+r*i}var a=r(t[0],e,0);if(a<0)return s.NO_MATCH;i=a;for(var l=1,u=t.length;l<u;l++){if(!((i=r(t[l],e,i))>-1))return s.NO_MATCH}return o(i-a)}(e,t);var i,r}function c(e,t){return e=""+e,t.keepDiacritics||(e=o()(e)),e}function d(e,t){var n;if("object"==typeof t&&(t=t.key),"function"==typeof t)n=t(e);else if(null==e)n=null;else if(Object.hasOwnProperty.call(e,t))n=e[t];else{if(t.includes("."))return function(e,t){for(var n=e.split("."),i=[t],r=0,o=n.length;r<o;r++){for(var s=n[r],a=[],l=0,u=i.length;l<u;l++){var c=i[l];if(null!=c)if(Object.hasOwnProperty.call(c,s)){var d=c[s];null!=d&&a.push(d)}else"*"===s&&(a=a.concat(c))}i=a}if(Array.isArray(i[0])){var h=[];return h.concat.apply(h,i)}return i}(t,e);n=null}return null==n?[]:Array.isArray(n)?n:[String(n)]}var h={maxRanking:1/0,minRanking:-1/0};function p(e){return"string"==typeof e?h:i({},h,e)}},58702:function(e,t){"use strict";var n=60103,i=60106,r=60107,o=60108,s=60114,a=60109,l=60110,u=60112,c=60113,d=60120,h=60115,p=60116,g=60121,m=60122,f=60117,I=60129,v=60131;if("function"==typeof Symbol&&Symbol.for){var y=Symbol.for;n=y("react.element"),i=y("react.portal"),r=y("react.fragment"),o=y("react.strict_mode"),s=y("react.profiler"),a=y("react.provider"),l=y("react.context"),u=y("react.forward_ref"),c=y("react.suspense"),d=y("react.suspense_list"),h=y("react.memo"),p=y("react.lazy"),g=y("react.block"),m=y("react.server.block"),f=y("react.fundamental"),I=y("react.debug_trace_mode"),v=y("react.legacy_hidden")}function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case r:case s:case o:case c:case d:return e;default:switch(e=e&&e.$$typeof){case l:case u:case p:case h:case a:return e;default:return t}}case i:return t}}}},19185:function(e,t,n){"use strict";n(58702)},55200:function(e){var t={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Ấ":"A","Ắ":"A","Ẳ":"A","Ẵ":"A","Ặ":"A","Æ":"AE","Ầ":"A","Ằ":"A","Ȃ":"A","Ç":"C","Ḉ":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ế":"E","Ḗ":"E","Ề":"E","Ḕ":"E","Ḝ":"E","Ȇ":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ḯ":"I","Ȋ":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ố":"O","Ṍ":"O","Ṓ":"O","Ȏ":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ấ":"a","ắ":"a","ẳ":"a","ẵ":"a","ặ":"a","æ":"ae","ầ":"a","ằ":"a","ȃ":"a","ç":"c","ḉ":"c","è":"e","é":"e","ê":"e","ë":"e","ế":"e","ḗ":"e","ề":"e","ḕ":"e","ḝ":"e","ȇ":"e","ì":"i","í":"i","î":"i","ï":"i","ḯ":"i","ȋ":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ố":"o","ṍ":"o","ṓ":"o","ȏ":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Ĉ":"C","ĉ":"c","Ċ":"C","ċ":"c","Č":"C","č":"c","C̆":"C","c̆":"c","Ď":"D","ď":"d","Đ":"D","đ":"d","Ē":"E","ē":"e","Ĕ":"E","ĕ":"e","Ė":"E","ė":"e","Ę":"E","ę":"e","Ě":"E","ě":"e","Ĝ":"G","Ǵ":"G","ĝ":"g","ǵ":"g","Ğ":"G","ğ":"g","Ġ":"G","ġ":"g","Ģ":"G","ģ":"g","Ĥ":"H","ĥ":"h","Ħ":"H","ħ":"h","Ḫ":"H","ḫ":"h","Ĩ":"I","ĩ":"i","Ī":"I","ī":"i","Ĭ":"I","ĭ":"i","Į":"I","į":"i","İ":"I","ı":"i","Ĳ":"IJ","ĳ":"ij","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","Ḱ":"K","ḱ":"k","K̆":"K","k̆":"k","Ĺ":"L","ĺ":"l","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ŀ":"L","ŀ":"l","Ł":"l","ł":"l","Ḿ":"M","ḿ":"m","M̆":"M","m̆":"m","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","ŉ":"n","N̆":"N","n̆":"n","Ō":"O","ō":"o","Ŏ":"O","ŏ":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","P̆":"P","p̆":"p","Ŕ":"R","ŕ":"r","Ŗ":"R","ŗ":"r","Ř":"R","ř":"r","R̆":"R","r̆":"r","Ȓ":"R","ȓ":"r","Ś":"S","ś":"s","Ŝ":"S","ŝ":"s","Ş":"S","Ș":"S","ș":"s","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","ț":"t","Ț":"T","Ť":"T","ť":"t","Ŧ":"T","ŧ":"t","T̆":"T","t̆":"t","Ũ":"U","ũ":"u","Ū":"U","ū":"u","Ŭ":"U","ŭ":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ȗ":"U","ȗ":"u","V̆":"V","v̆":"v","Ŵ":"W","ŵ":"w","Ẃ":"W","ẃ":"w","X̆":"X","x̆":"x","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Y̆":"Y","y̆":"y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ſ":"s","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ǎ":"A","ǎ":"a","Ǐ":"I","ǐ":"i","Ǒ":"O","ǒ":"o","Ǔ":"U","ǔ":"u","Ǖ":"U","ǖ":"u","Ǘ":"U","ǘ":"u","Ǚ":"U","ǚ":"u","Ǜ":"U","ǜ":"u","Ứ":"U","ứ":"u","Ṹ":"U","ṹ":"u","Ǻ":"A","ǻ":"a","Ǽ":"AE","ǽ":"ae","Ǿ":"O","ǿ":"o","Þ":"TH","þ":"th","Ṕ":"P","ṕ":"p","Ṥ":"S","ṥ":"s","X́":"X","x́":"x","Ѓ":"Г","ѓ":"г","Ќ":"К","ќ":"к","A̋":"A","a̋":"a","E̋":"E","e̋":"e","I̋":"I","i̋":"i","Ǹ":"N","ǹ":"n","Ồ":"O","ồ":"o","Ṑ":"O","ṑ":"o","Ừ":"U","ừ":"u","Ẁ":"W","ẁ":"w","Ỳ":"Y","ỳ":"y","Ȁ":"A","ȁ":"a","Ȅ":"E","ȅ":"e","Ȉ":"I","ȉ":"i","Ȍ":"O","ȍ":"o","Ȑ":"R","ȑ":"r","Ȕ":"U","ȕ":"u","B̌":"B","b̌":"b","Č̣":"C","č̣":"c","Ê̌":"E","ê̌":"e","F̌":"F","f̌":"f","Ǧ":"G","ǧ":"g","Ȟ":"H","ȟ":"h","J̌":"J","ǰ":"j","Ǩ":"K","ǩ":"k","M̌":"M","m̌":"m","P̌":"P","p̌":"p","Q̌":"Q","q̌":"q","Ř̩":"R","ř̩":"r","Ṧ":"S","ṧ":"s","V̌":"V","v̌":"v","W̌":"W","w̌":"w","X̌":"X","x̌":"x","Y̌":"Y","y̌":"y","A̧":"A","a̧":"a","B̧":"B","b̧":"b","Ḑ":"D","ḑ":"d","Ȩ":"E","ȩ":"e","Ɛ̧":"E","ɛ̧":"e","Ḩ":"H","ḩ":"h","I̧":"I","i̧":"i","Ɨ̧":"I","ɨ̧":"i","M̧":"M","m̧":"m","O̧":"O","o̧":"o","Q̧":"Q","q̧":"q","U̧":"U","u̧":"u","X̧":"X","x̧":"x","Z̧":"Z","z̧":"z"},n=Object.keys(t).join("|"),i=new RegExp(n,"g"),r=new RegExp(n,""),o=function(e){return e.replace(i,(function(e){return t[e]}))};e.exports=o,e.exports.has=function(e){return!!e.match(r)},e.exports.remove=o}}]);