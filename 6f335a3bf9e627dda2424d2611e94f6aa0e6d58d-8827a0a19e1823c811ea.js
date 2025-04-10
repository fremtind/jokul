"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7037],{53353:function(e,t,n){n.d(t,{KM:function(){return d},kq:function(){return p},C9:function(){return f}});var r=n(22879),a=n(5223),l=n(40720),o=n(68945),i=n(60042),s=n.n(i),c=n(27378);const m=(0,c.forwardRef)(((e,t)=>c.createElement("button",Object.assign({},e,{ref:t}))));m.displayName="BaseButton";const u=e=>{const t=(0,c.forwardRef)(((t,n)=>{const{children:i,className:u,density:d,onClick:p,onTouchStart:f,loader:g,arrow:k,...h}=t,b=(0,c.useCallback)((e=>{f&&f(e);const t=e.target;if(t&&e.targetTouches.length){const n=e.targetTouches[0].clientX-t.getBoundingClientRect().x,r=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",n.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",r.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((()=>t.classList.remove("jkl-button--pressed")),400)}}),[f]),j=(0,o.c)(null==g?void 0:g.showLoader);return c.createElement(m,Object.assign({},j,{"data-density":d,className:s()("jkl-button","jkl-button--"+e,u,{"jkl-button--left-arrow":"left"===k,"jkl-button--right-arrow":"right"===k}),disabled:null==g?void 0:g.showLoader,onClick:p,onTouchStart:b},h,{ref:n}),c.createElement("div",{className:"jkl-button__content"},c.createElement("div",{className:s()("jkl-button__slider",{"jkl-button__slider--show-loader":!(null==g||!g.showLoader)})},"left"===k&&c.createElement(r.X,{className:"jkl-button__arrow",bold:!0}),c.createElement("span",{className:"jkl-button__children"},i),"right"===k&&c.createElement(a.o,{className:"jkl-button__arrow",bold:!0}),g&&c.createElement("div",{className:"jkl-button__loader"},c.createElement(l.a,{textDescription:g.textDescription,"aria-hidden":!g.showLoader})))))}));return t.displayName="BaseButton",t},d=u("primary");d.displayName="PrimaryButton";const p=u("secondary");p.displayName="SecondaryButton";const f=u("tertiary");f.displayName="TertiaryButton"},43319:function(e,t,n){n.d(t,{iV:function(){return i},o6:function(){return o},uM:function(){return s}});var r=n(60042),a=n.n(r),l=n(27378);const o=e=>{let{children:t,className:n,...r}=e;return l.createElement("dl",Object.assign({},r,{className:a()("jkl-description-list",n)}),t)},i=e=>{let{children:t,className:n,...r}=e;return l.createElement("dt",Object.assign({},r,{className:a()("jkl-description-list__term",n)}),t)},s=e=>{let{children:t,className:n,...r}=e;return l.createElement("dd",Object.assign({},r,{className:a()("jkl-description-list__detail",n)}),t)}},90597:function(e,t,n){n.d(t,{We:function(){return k},ZP:function(){return h},Uo:function(){return b}});var r=n(27378),a=n(88039),l=n(53353),o=n(43319),i=n(88451),s=n(66585),c=n(5880),m=n(2571),u=n(53890),d=n(34353),p=n(65152);const f={fodselsnummer:s.X,kortnummer:m.U,kontonummer:c.F,telefonnummer:d.P,number:p.u,organisasjonsnummer:u.a},g=e=>(t,n,r)=>{let a=0,l="";const o=t.register(n,{...r,setValueAs:e=>e.replace(/\s/g,""),onChange:o=>{var i;null==r||null===(i=r.onChange)||void 0===i||i.call(r,o);let s=0;const c=o.target.value.length;null!==o.target.selectionStart&&(s=o.target.selectionStart),t.setValue(n,f[e](o.target.value,{partial:!0}));let m=null;if(["Delete","Backspace"].includes(l)){m=a-(a-s)}else if(s<o.target.value.length){m=s+(o.target.value.length-c)}null!==m&&o.target.setSelectionRange(m,m,void 0)}}),i={onKeyDown:e=>{null!==e.target.selectionStart&&(a=e.target.selectionStart),l=e.key}};return"number"===e&&(i.align="right"),Object.assign(o,i)},k=(g("fodselsnummer"),g("kortnummer"),g("kontonummer"),g("telefonnummer"),()=>{var e;const t=(0,a.cI)(),{0:n,1:s}=(0,r.useState)(),{registerWithFodselsnummerMask:c,registerWithKontonummerMask:m,registerWithKortnummerMask:u,registerWithTelefonnummerMask:d,registerWithOrganisasjonsnummerMask:p,registerWithNumber:f}=(e=>({registerWithFodselsnummerMask:(t,n)=>g("fodselsnummer")(e,t,n),registerWithKortnummerMask:(t,n)=>g("kortnummer")(e,t,n),registerWithKontonummerMask:(t,n)=>g("kontonummer")(e,t,n),registerWithTelefonnummerMask:(t,n)=>g("telefonnummer")(e,t,n),registerWithOrganisasjonsnummerMask:(t,n)=>g("organisasjonsnummer")(e,t,n),registerWithNumber:(t,n)=>g("number")(e,t,n)}))(t);return r.createElement(r.Fragment,null,r.createElement("form",{className:"input-mask-example-form",onSubmit:t.handleSubmit(s)},r.createElement(i.o,Object.assign({label:"Telefonnummer",maxLength:11},d("telefonnr",{required:"Du må fylle inn telefonnummeret ditt"}),{errorLabel:null===(e=t.formState.errors.telefonnr)||void 0===e?void 0:e.message})),r.createElement(i.o,Object.assign({label:"Fødselsnummer",maxLength:12},c("fodselsnr"))),r.createElement(i.o,Object.assign({label:"Kortnummer",maxLength:19},u("kortnr"))),r.createElement(i.o,Object.assign({label:"Kontonummer",maxLength:13},m("kontonr"))),r.createElement(i.o,Object.assign({label:"Organisasjonsnummer",maxLength:11},p("orgnr"))),r.createElement(i.o,Object.assign({label:"Tall"},f("tall"))),r.createElement(l.KM,{type:"submit"},"Send inn"),n&&r.createElement(r.Fragment,null,r.createElement("p",{className:"jkl-heading-1 jkl-spacing-2xl--top"},"Innsendt data:"),r.createElement(o.o6,{className:"jkl-body"},Object.entries(n).map((e=>{let[t,n]=e;return r.createElement(r.Fragment,{key:t},r.createElement(o.iV,null,t,":"),r.createElement(o.uM,null,n))}))))))});var h=k;const b='\nimport { registerWithMasks } from "@fremtind/jkl-formatters-util";\n\nconst form = useForm<Skjema>();\nconst [formData, setFormData] = useState<Skjema>();\n\nconst {\n    registerWithFodselsnummerMask,\n    registerWithKontonummerMask,\n    registerWithKortnummerMask,\n    registerWithTelefonnummerMask,\n} = registerWithMasks(form);\n\nreturn (\n    <>\n        <form className="input-mask-example-form" onSubmit={form.handleSubmit(setFormData)}>\n            <TextInput\n                label="Telefonnummer"\n                // Husk å gi plass til mellomrommene som settes inn!\n                maxLength={11}\n                {...registerWithTelefonnummerMask("telefonnummer", {\n                    required: "Du må fylle inn telefonnummeret ditt",\n                })}\n                errorLabel={form.formState.errors.telefonnummer?.message}\n            />\n            <TextInput\n                label="Fødselsnummer"\n                maxLength={12}\n                {...registerWithFodselsnummerMask("fodselsnummer")}\n            />\n            <TextInput label="Kortnummer" maxLength={19} {...registerWithKortnummerMask("kortnummer")} />\n            <TextInput label="Kontonummer" maxLength={13} {...registerWithKontonummerMask("kontonummer")} />\n            <PrimaryButton type="submit">Send inn</PrimaryButton>\n        </form>\n        {formData && (\n            <>\n                <p className="jkl-heading-1 jkl-spacing-2xl--top">Innsendt data:</p>\n                <DescriptionList className="jkl-body jkl-spacing-l--top">\n                    {Object.entries(formData).map(([field, value]) => (\n                        <>\n                            <DescriptionTerm>{field}:</DescriptionTerm>\n                            <DescriptionDetail>{value}</DescriptionDetail>\n                        </>\n                    ))}\n                </DescriptionList>\n            </>\n        )}\n    </>\n);'},66585:function(e,t,n){n.d(t,{X:function(){return l}});var r=n(42210);const a={full:/^(\d{6})(\d{5})$/,partial:/^(\d{6})(\d{1,5})?$/};function l(e,t){const n=e.replace(/\W/g,""),l=null!=t&&t.partial?a.partial:a.full,o=n.match(l);return o?o.slice(1).filter(Boolean).join(r.qD):e}},5880:function(e,t,n){n.d(t,{F:function(){return l}});var r=n(42210);const a={full:/^(\d{4})(\d{2})(\d{5})$/,partial:/^(\d{4})(\d{1,2})?(\d{1,5})?$/};function l(e,t){const n=e.replace(/\W/g,""),l=null!=t&&t.partial?a.partial:a.full,o=n.match(l);return o?o.slice(1).filter(Boolean).join((null==t?void 0:t.separator)||r.qD):e}},2571:function(e,t,n){n.d(t,{U:function(){return l}});var r=n(42210);const a={full:/^(\d{4})(\d{4})(\d{4})(\d{4})$/,partial:/^(\d{4})(\d{1,4})?(\d{1,4})?(\d{1,4})?$/};function l(e,t){const n=e.replace(/[\s-.]/g,""),l=null!=t&&t.partial?a.partial:a.full,o=n.match(l);return o?o.slice(1).filter(Boolean).join(r.qD):e}},53890:function(e,t,n){n.d(t,{a:function(){return l}});var r=n(42210);const a={full:/^(\d{3})(\d{3})(\d{3})$/,partial:/^(\d{3})(\d{1,3})?(\d{1,5})?$/};function l(e,t){const n=e.replace(/[\s-.]/g,""),l=null!=t&&t.partial?a.partial:a.full,o=n.match(l);return o?o.slice(1).filter(Boolean).join(r.qD):e}},34353:function(e,t,n){n.d(t,{P:function(){return o}});var r=n(4769),a=n(42210);const l={mobil:/^([4|9|8]\d{2})(\d{2})(\d{3})$/,fast:/^([2-7]\d)(\d{2})(\d{2})(\d{2})$/,mobilPartial:/^([4|9|8]\d{2})(\d{1,2})?(\d{1,3})?$/,fastPartial:/^([2-7]\d)(\d{1,2})?(\d{1,2})?(\d{1,2})?$/};function o(e,t){const n=e.replace(/\W/g,""),o=null!=t&&t.partial?l.mobilPartial:l.mobil,i=null!=t&&t.partial?l.fastPartial:l.fast,s=n.match(o)||n.match(i);return s?[null!=t&&t.countryCode?"+"+t.countryCode:void 0].concat((0,r.Z)(s.slice(1))).filter(Boolean).join(a.qD):e}},65152:function(e,t,n){n.d(t,{u:function(){return l}});var r=n(81601);const a={locale:"no-NB"};function l(e,t){const n=(0,r.p)(e);if(!n)return e.toString();const{locale:l,...o}={...a,...t};return new Intl.NumberFormat(l,o).format(n)}},81601:function(e,t,n){n.d(t,{p:function(){return a}});n(17749);const r=(e,t)=>{const n=Array.isArray(e)?e:e.split(""),r=n.lastIndexOf(t);return n.filter(((e,n)=>e!==t||n===r)).join("")};function a(e){if("number"==typeof e)return e;const t=e.replaceAll(/\s/g,"").split(""),n=t.reduce(((e,t)=>","===t||"."===t?t:e),null);return Number("."===n?r(t,".").replace(",",""):","===n?r(t,",").replace(".","").replace(",","."):t.join(""))}},88451:function(e,t,n){n.d(t,{o:function(){return d}});var r=n(96017),a=n(45881),l=n(97041),o=n(7726),i=n(60042),s=n.n(i),c=n(27378);function m(e,t){if(e)return{width:e};if(t){return{width:"calc("+(Math.min(t,40)+"ch")+" + "+"24px"+")"}}}const u=(0,c.forwardRef)(((e,t)=>{let{id:n,describedBy:r,invalid:a,maxLength:l,width:o,type:i="text",align:u="left",className:d="",...p}=e;return c.createElement("input",Object.assign({ref:t,id:n,className:s()("jkl-text-input__input",d,{"jkl-text-input__input--align-right":"right"===u}),style:m(o,l),"aria-describedby":r,"aria-invalid":a,maxLength:l,type:i},p))}));u.displayName="BaseInputField";const d=(0,c.forwardRef)(((e,t)=>{const{id:n,className:i,label:m,labelProps:d,helpLabel:p,errorLabel:f,variant:g,inline:k,density:h,action:b,"data-testautoid":j,inputClassName:v,...E}=e,y=(0,o.M)(n||"jkl-text-input",{generateSuffix:!n}),N=(0,o.M)("jkl-support-label"),_=p||f?N:void 0;return c.createElement("div",{"data-testid":"jkl-text-input",className:s()("jkl-text-input",i,{"jkl-text-input--inline":k,"jkl-text-input--action":b}),"data-density":h},c.createElement(r._,Object.assign({variant:g},d,{srOnly:k||(null==d?void 0:d.srOnly),standAlone:!0,density:h,htmlFor:y}),m),c.createElement("div",{className:"jkl-text-input__input-wrapper"},c.createElement(u,Object.assign({ref:t,id:y,describedBy:_,invalid:!!f,"data-testautoid":j,className:v},E)),b&&c.createElement(l.h,{className:"jkl-text-input__action-button",density:h,iconType:b.icon,buttonTitle:b.label,onClick:b.onClick,onFocus:b.onFocus,onBlur:b.onBlur})),c.createElement(a.A,{id:N,helpLabel:p,errorLabel:f,density:h,srOnly:k}))}));d.displayName="TextInput"},66604:function(e,t,n){n.d(t,{l:function(){return p}});var r=n(27151),a=n(31931),l=n(85001),o=n(27378);const i=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,o=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;m(t,n)},d=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var r},p=e=>{let{types:t}=e;return o.createElement("section",{className:"jkl-spacing-3xl--bottom jkl-portal-paragraph"},o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-3xl--top"},"React API"),o.createElement("p",{className:"jkl-body jkl-spacing-m--top"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"jkl-spacing-xl--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(c):[],l=n.props?Object.values(n.props).filter(s):[];return o.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},r.length>0&&o.createElement(d,{props:r}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(d,{props:l})))}))))}},27151:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(60042),a=n.n(r),l=n(27378);const o=e=>{let{className:t,density:n,...r}=e;return l.createElement("div",{"data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,...r})}},31931:function(e,t,n){n.d(t,{Q:function(){return c}});var r=n(7726),a=n(58296),l=n(60042),o=n.n(l),i=n(27378);const s=e=>{let{expanded:t=!1,className:n}=e;return i.createElement("span",{className:o()("jkl-accordion-item__arrow",n,{"jkl-accordion-item__arrow--expanded":t})},i.createElement("svg",{className:"jkl-accordion-item__arrow-down",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M11.15 8.51998L10.35 7.73998L6.54999 11.58L6.55 0.699982L5.43 0.699982L5.43 11.56L1.67 7.73998L0.869995 8.51998L6.01 13.54L11.15 8.51998Z",fill:"currentColor"})),i.createElement("svg",{className:"jkl-accordion-item__arrow-up",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M0.940002 5.71998L1.74 6.49998L5.54 2.65998V13.54H6.66V2.67998L10.42 6.49998L11.22 5.71998L6.08 0.699982L0.940002 5.71998Z",fill:"currentColor"})))},c=e=>{let{children:t,title:n,className:l,startExpanded:c=!1,onClick:m,...u}=e;const d=(0,r.M)("title"),p=(0,r.M)("content"),{0:f,1:g}=(0,i.useState)(c),[k]=(0,a.v)(f,{easing:"exit",timing:"expressive"});return i.createElement("div",{"data-testid":"jkl-accordion-item",...u,className:o()("jkl-accordion-item",l,{"jkl-accordion-item--expanded":f})},i.createElement("button",{id:d,className:"jkl-accordion-item__title",type:"button","aria-expanded":f,"aria-controls":p,onClick:e=>{const t=!f;g(t),m&&m(e,t)}},i.createElement("span",{className:"jkl-accordion-item__title-text"},n),i.createElement(s,{expanded:f})),i.createElement("div",{id:p,ref:k,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":d,hidden:!f},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},42210:function(e,t,n){n.d(t,{qD:function(){return r},vk:function(){return a}});const r=" ",a=r},85001:function(e,t,n){n.d(t,{w:function(){return u}});var r=n(27378),a=n(46209),l=n(95419),o=n(26472),i=n(30135),s=n(8611),c=n(12768),m=n(56171);const u=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:d,rows:p,verticalAlign:f,...g}=e;return r.createElement(a.i,{fullWidth:!0,...g,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(m.S,null,u.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.R,null,0===p.length&&d&&r.createElement(m.S,null,r.createElement(i.p,{colSpan:u.length},d)),p.map(((e,t)=>r.createElement(m.S,{key:t},e.map(((e,t)=>r.createElement(i.p,{key:t,"data-th":u[t],verticalAlign:f},e))))))))}));u.displayName="DataTable"}}]);