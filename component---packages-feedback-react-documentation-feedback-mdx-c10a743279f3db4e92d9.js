(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9403],{6784:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return A},default:function(){return X}});var a=n(120),r=n(7378),l=n(1368),o=n(2803),i=n(9158),s=n(1107),c=n(6328),u=n(2520),d=n(3450),m=n(382),f=n.n(m),k=n(2384),p=n(897),v=n(3804),b={label:"Ikke fornøyd i det hele tatt",value:1},g={label:"Ikke fornøyd",value:2},j={label:"Verken fornøyd eller ufornøyd",value:3},E={label:"Fornøyd",value:4},h={label:"Veldig fornøyd",value:5};function y(e){return function(e){return null==e?void 0:e.hasOwnProperty("label")}(e)?e.label:""+_(e)}function _(e){return function(e){return"number"==typeof e}(e)?e:null==e?void 0:e.value}function x(e){return e.map(_)}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=(0,r.createContext)({description:"",options:[],setValue:function(){}}),S=function(e){var t=e.label,n=e.onSubmit,a=e.description,l=e.renderCustomSuccess,o=e.successMessage,s=void 0===o?"Det hjelper oss i arbeidet med å forbedre våre løsninger":o,c=e.successTitle,u=void 0===c?"Takk for tilbakemeldingen!":c,d=e.callToActionText,m=void 0===d?"Send inn tilbakemelding":d,y=e.showTextArea,_=void 0===y||y,x=e.textAreaLabel,N=void 0===x?"Tips oss gjerne om hva vi kan forbedre":x,S=e.textAreaHelpLabel,T=void 0===S?"":S,O=e.className,D=void 0===O?"":O,P=e.feedbackOptions,L=void 0===P?[b,g,j,E,h]:P,V=e.headingLevel,F=void 0===V?"h3":V,M=e.content,I=(0,r.useState)(),A=I[0],B=I[1],R=(0,r.useState)(N),U=R[0],H=R[1],K=(0,r.useState)(""),X=K[0],Z=K[1],q=(0,r.useState)(!1),G=q[0],Y=q[1],z=(0,r.useState)(!1),J=z[0],Q=z[1],W=(0,v.vD)(void 0!==A)[0],$=(0,r.useRef)({onSubmit:n,values:{feedbackValue:A,message:X},feedbackSubmitted:G});(0,r.useEffect)((function(){$.current.feedbackSubmitted=G}),[G]);var ee=(0,r.useCallback)((function(){$.current.feedbackSubmitted||void 0===$.current.values.feedbackValue||$.current.onSubmit($.current.values)}),[]);(0,r.useEffect)((function(){$.current=w(w({},$.current),{},{onSubmit:n,values:{feedbackValue:A,message:X}})}),[A,X,n]),(0,r.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("beforeunload",ee),function(){ee(),window.removeEventListener("beforeunload",ee)}}),[]),(0,r.useEffect)((function(){var e,t=L.find((function(e){return function(e){return null==e?void 0:e.hasOwnProperty("prompt")}(e)&&e.value===A}));H(null!==(e=null==t?void 0:t.prompt)&&void 0!==e?e:N)}),[L,A,N]);var te=F;return r.createElement("div",{className:f()("jkl-feedback",D)},r.createElement(C.Provider,{value:{description:a,options:L,setValue:B,value:A}},G&&r.createElement("section",{className:"jkl-feedback__success","data-testid":"feedback-success"},l&&l({value:A,message:X}),!l&&r.createElement(i.kk,{title:u},s)),!G&&r.createElement("form",{className:f()("jkl-feedback__form",{"jkl-feedback__form--hidden":J}),onSubmit:function(e){e.preventDefault(),ee(),Q(!0),setTimeout((function(){return Y(!0)}),250)}},r.createElement(te,{className:"jkl-feedback__heading jkl-heading-large"},t),M,r.createElement("section",{ref:W,className:f()("jkl-feedback__submit-wrapper",{"jkl-feedback__submit-wrapper--hidden jkl-layout-spacing--medium-top":void 0===A})},r.createElement("div",{className:"jkl-feedback__submit-content"},_&&r.createElement(k.Kx,{className:"jkl-feedback__message-input","data-testid":"feedback-text",name:"feedback-text",label:U,variant:"small",rows:3,helpLabel:T,value:X,onChange:function(e){return Z(e.currentTarget.value)}}),r.createElement(p.kq,{"data-testid":"submit-button",className:"jkl-layout-spacing--medium-top",type:"submit"},m))))))},T={1:{icon:r.createElement("path",{d:"M40 42C40 36.4772 35.0751 32 29 32C22.9249 32 18 36.4772 18 42"})},2:{icon:r.createElement("path",{d:"M40 39C37.5556 35.4353 33.8529 33 29 33C24.1471 33 20.4444 35.4353 18 39"})},3:{icon:r.createElement("line",{x1:"20",y1:"37",x2:"36",y2:"37"})},4:{icon:r.createElement("path",{d:"M18 35C20.4444 38.5647 24.1471 41 29 41C33.8529 41 37.5556 38.5647 40 35"})},5:{icon:r.createElement("path",{d:"M29 45C36.5429 45 40.1429 38.3333 41 35L17 35C17.5714 38.3333 21.4571 45 29 45Z"})}},O=function(e){var t=e.element;return r.createElement("svg",{"aria-hidden":!0,className:"jkl-feedback-icon jkl-feedback-icon--"+t,fill:"currentColor",viewBox:"0 0 57 57"},r.createElement("circle",{cx:"28.5",cy:"28.5",r:"27.5"}),r.createElement("circle",{cx:"19",cy:"24",r:"2",className:"jkl-feedback-icon__eyes"}),r.createElement("circle",{cx:"38",cy:"24",r:"2",className:"jkl-feedback-icon__eyes"}),function(e){return T[e]}(t).icon)},D=function(){var e=(0,r.useContext)(C),t=e.description,n=e.options,a=e.value,l=e.setValue,o=(0,r.useState)((0,s.x0)(8))[0];return r.createElement(u.N,{legend:t,className:"jkl-feedback__fieldset"},null==n?void 0:n.map((function(e){var t=function(e){return{label:y(e),value:_(e)}}(e),n=t.label,i=t.value,s=o+"-feedback--"+i;return r.createElement(r.Fragment,{key:i},r.createElement("input",{className:"jkl-feedback__answer-input",type:"radio",name:"feedback",id:s,value:i,onChange:function(){return l(i)},checked:a===i}),r.createElement("label",{"data-testid":"feedback-"+i,className:"jkl-feedback__answer-label",htmlFor:s},r.createElement(O,{element:i}),r.createElement(c.uy,null,n)))})))},P=function(e){return r.createElement(S,Object.assign({},e,{content:r.createElement(D,null)}))},L=n(6058),V=function(){var e=(0,r.useContext)(C),t=e.description,n=e.options,a=e.value,l=e.setValue;return r.createElement(L.G,{className:"jkl-feedback__fieldset",legend:t,name:"feedback",choices:x(n).map((function(e,t){return(t+1).toString()})),inline:!0,onChange:function(e){return l(parseInt(e.target.value,10))},selectedValue:null==a?void 0:a.toString()})},F=function(e){return r.createElement(S,Object.assign({},e,{content:r.createElement(V,null)}))},M=function(e){var t=e.boolValues,n=null!=t&&t["Uten smilefjes"]?F:P;return r.createElement(r.Fragment,null,r.createElement(n,{label:"Gi oss tilbakemelding!",description:"Hvor fornøyd er du med denne siden for å følge saken?",onSubmit:console.info,showTextArea:!(null!=t&&t["Uten tekst"]),renderCustomSuccess:function(e){return r.createElement("div",null,r.createElement(i.kk,{title:"Tilbakemelding sendt!"},e.value===b.value&&r.createElement(r.Fragment,null,"Det var trist!"),e.value===g.value&&r.createElement(r.Fragment,null,"Vi ser på alle tilbakemeldinger, håper vi kan gjøre deg mer fornøyd en annen gang!"),e.value===j.value&&r.createElement(r.Fragment,null,"Vi vil gjerne ha fornøyde kunder, så vi skal se på tilbakemeldingen din!"),e.value===E.value&&r.createElement(r.Fragment,null,"Takk skal du ha!"),e.value===h.value&&r.createElement(r.Fragment,null,"Det var stas du var fornøyd, vi prøver hele tiden å bli bedre! Takk for tilbakemeldingen!")),e.message&&r.createElement("div",{className:"jkl-layout-spacing--small-top"},r.createElement("span",null,"Kopi av din melding"),r.createElement("pre",null,e.message)))}}),r.createElement(n,{label:"Bare to valg",description:"Hvor fornøyd er du med denne siden for å følge saken?",onSubmit:console.info,showTextArea:!(null!=t&&t["Uten tekst"]),feedbackOptions:[g,E],className:"jkl-layout-spacing--large-top"}))},I=["components"],A={},B=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",t)}},R=B("Ingress"),U=B("ComponentExample"),H={_frontmatter:A},K=o.Z;function X(e){var t=e.components,n=(0,a.Z)(e,I);return(0,l.mdx)(K,Object.assign({},H,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(R,{mdxType:"Ingress"},"Feedback-komponenten lar oss få tilbakemelding fra brukerene våre. Det kan gi oss viktig innsikt om brukeropplevelsen, og avdekke ønsker om funksjonalitet."),(0,l.mdx)(U,{knobs:{boolProps:["Uten smilefjes","Uten tekst"]},component:M,mdxType:"ComponentExample"}),(0,l.mdx)("p",null,"Komponenten kommer i to grunnvarianter: Feedback har smilefjes basert på valgene brukeren kan ta, mens SimplifiedFeedback viser vanlige radioknapper. Du kan bestemme hvilke valg brukeren skal få ved å sende inn noen eller alle tall fra 1 til 5:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"1 - Surt fjes"),(0,l.mdx)("li",{parentName:"ul"},"2 - Litt surt fjes"),(0,l.mdx)("li",{parentName:"ul"},"3 - Nøytralt fjes"),(0,l.mdx)("li",{parentName:"ul"},"4 - Smilefjes"),(0,l.mdx)("li",{parentName:"ul"},"5 - Happy smilefjes")),(0,l.mdx)("p",null,"I tillegg til en score kan man la brukeren legge igjen en skriftlig tilbakemelding. Etiketten på tekstfeltet kan spesifiseres generelt og/eller defineres spesifikt basert på hvilken score brukeren har gitt."),(0,l.mdx)("h2",null,"Innsending av data"),(0,l.mdx)("p",null,"Du må selv sende inn en funksjon for å håndtere innsending av data, men komponenten sørger selv for at den blir kalt på riktig tidspunkt; når brukeren trykker send inn, eller når de forlater siden etter å ha tatt et valg i skjemaet."),(0,l.mdx)("p",null,"Funksjonen du sender inn må ta imot et objekt på formen"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"{ feedbackValue: 1 | 2 | 3 | 4 | 5, message?: string }\n")),(0,l.mdx)("p",null,"og du må selv koble opp mot ditt ønskede feedback-endepunkt med eventuell vasking og/eller transformering av data."))}X.isMDXComponent=!0},897:function(e,t,n){"use strict";n.d(t,{KM:function(){return k},kq:function(){return p},C9:function(){return v}});var a=n(2398),r=n.n(a),l=n(2666),o=n.n(l),i=n(7378),s=n(382),c=n.n(s),u=n(3661),d=(0,i.forwardRef)((function(e,t){return i.createElement("button",r()({},e,{ref:t}))}));d.displayName="BaseButton";var m=["children","className","forceCompact","inverted","onClick","onTouchStart","loader"],f=function(e){return(0,i.forwardRef)((function(t,n){var a=t.children,l=t.className,s=void 0===l?"":l,f=t.forceCompact,k=t.inverted,p=t.onClick,v=t.onTouchStart,b=t.loader,g=o()(t,m),j=c()("jkl-button","jkl-button--"+e,{"jkl-button--compact":f,"jkl-button--inverted":k}),E=function(e){v&&v(e);var t=e.target;if(t&&e.targetTouches.length){var n=e.targetTouches[0].clientX-t.getBoundingClientRect().x,a=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",n.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",a.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((function(){return t.classList.remove("jkl-button--pressed")}),400)}};return b?i.createElement("div",{className:c()("jkl-button-wrapper",s,{"jkl-button-wrapper--compact":f})},i.createElement("div",{className:c()("jkl-button-wrapper__slider",{"jkl-button-wrapper__slider--show-loader":!!b.showLoader})},i.createElement(d,r()({className:j,onClick:p,onTouchStart:E,disabled:null==b?void 0:b.showLoader},g,{ref:n}),a),i.createElement("div",{className:"jkl-button-wrapper__loader jkl-layout-spacing--small-top"},i.createElement(u.a,{textDescription:b.textDescription,negative:k,"aria-hidden":!!b.showLoader,inline:!0})))):i.createElement(d,r()({className:c()(j,s),onClick:p,onTouchStart:E},g,{ref:n}),a)}))},k=f("primary"),p=f("secondary"),v=f("tertiary")},3661:function(e,t,n){"use strict";n.d(t,{a:function(){return o}});var a=n(7378),r=n(382),l=n.n(r),o=function(e){var t=e.textDescription,n=e.negative,r=void 0!==n&&n,o=e.inline,i=void 0!==o&&o,s=e.className,c=e.dataTestAutoId,u=void 0===c?"jkl-loader":c,d=l()("jkl-loader",s,{"jkl-loader--negative":r,"jkl-loader--inline":i});return a.createElement("span",{className:d,"data-testid":"jkl-loader","data-testautoid":u,title:t,"aria-label":t,role:"alert","aria-busy":"true"},a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--left"}),a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--middle"}),a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--right"}))}}}]);
//# sourceMappingURL=component---packages-feedback-react-documentation-feedback-mdx-c10a743279f3db4e92d9.js.map