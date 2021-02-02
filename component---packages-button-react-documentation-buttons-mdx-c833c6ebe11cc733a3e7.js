(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{jYhh:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return f})),t.d(n,"default",(function(){return E}));var o=t("+I+c"),a=t("mXGw"),r=t.n(a),l=t("/FXl"),i=t("7XvJ"),s=t("8Jek"),d=t.n(s),c=t("kFFI"),m=Object(a.forwardRef)((function(e,n){return r.a.createElement("button",Object.assign({},e,{ref:n}))}));m.displayName="BaseButton";var p=function(e){return Object(a.forwardRef)((function(n,t){var a=n.children,l=n.className,i=void 0===l?"":l,s=n.forceCompact,p=n.inverted,u=n.onClick,k=n.onTouchStart,b=n.loader,g=Object(o.a)(n,["children","className","forceCompact","inverted","onClick","onTouchStart","loader"]),j=d()("jkl-button","jkl-button--"+e,{"jkl-button--compact":s,"jkl-button--inverted":p}),h=function(e){k&&k(e);var n=e.target;if(n&&e.targetTouches.length){var t=e.targetTouches[0].clientX-n.getBoundingClientRect().x,o=e.targetTouches[0].clientY-n.getBoundingClientRect().y;n.style.setProperty("--jkl-touch-xcoord",t.toPrecision(4)+"px"),n.style.setProperty("--jkl-touch-ycoord",o.toPrecision(4)+"px"),n.classList.add("jkl-button--pressed"),setTimeout((function(){return n.classList.remove("jkl-button--pressed")}),400)}};return b?r.a.createElement("div",{className:d()("jkl-button-wrapper",i,{"jkl-button-wrapper--compact":s})},r.a.createElement("div",{className:d()("jkl-button-wrapper__slider",{"jkl-button-wrapper__slider--show-loader":!!b.showLoader})},r.a.createElement(m,Object.assign({className:j,onClick:u,onTouchStart:h,disabled:null==b?void 0:b.showLoader},g,{ref:t}),a),r.a.createElement("div",{className:"jkl-button-wrapper__loader jkl-layout-spacing--small-top"},r.a.createElement(c.a,{textDescription:b.textDescription,negative:p,"aria-hidden":!!b.showLoader,inline:!0})))):r.a.createElement(m,Object.assign({className:d()(j,i),onClick:u,onTouchStart:h},g,{ref:t}),a)}))},u=p("primary"),k=p("secondary"),b=p("tertiary");function g(){console.log("Hello!")}var j=function(e){var n=e.boolValues;return r.a.createElement(u,{inverted:n&&n.Invertert,forceCompact:n&&n.Kompakt,loader:null!=n&&n.withLoader?{showLoader:!(null==n||!n.isLoading),textDescription:"Laster innhold"}:void 0,onClick:g,className:"jkl-spacing--right-1"},"Avbryt")};function h(){console.log("Hello!")}var v=function(e){var n=e.boolValues;return r.a.createElement(k,{inverted:n&&n.Invertert,forceCompact:n&&n.Kompakt,loader:null!=n&&n.withLoader?{showLoader:!(null==n||!n.isLoading),textDescription:"Laster innhold"}:void 0,onClick:h,className:"jkl-spacing--right-1"},"Avbryt")};function x(){console.log("Hello!")}var y=function(e){var n=e.boolValues;return r.a.createElement(b,{inverted:n&&n.Invertert,forceCompact:n&&n.Kompakt,loader:null!=n&&n.withLoader?{showLoader:!(null==n||!n.isLoading),textDescription:"Laster innhold"}:void 0,onClick:x,className:"jkl-spacing--right-1"},"Avbryt")},f={},L=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.mdx)("div",n)}},w=L("Ingress"),O=L("ComponentExample"),C=L("CodeDemo"),T=L("DoDontExample"),N={_frontmatter:f},D=i.a;function E(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(l.mdx)(D,Object.assign({},N,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)(w,{mdxType:"Ingress"},"Knapper starter en handling. Teksten på knappen forteller hva som vil skje når brukeren klikker på den."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Primærknapp:")," brukes til den viktigste handlingen på en side - hovedhandlingen. En side kan noen ganger ha mer enn en hovedhandling, men ikke mange."),Object(l.mdx)(O,{component:j,knobs:{boolProps:["Kompakt","Invertert","isLoading","withLoader"]},mdxType:"ComponentExample"},Object(l.mdx)(C,{code:'\n<PrimaryButton\n    inverted={boolValues && boolValues["Invertert"]}\n    forceCompact={boolValues && boolValues["Kompakt"]}\n    loader={\n        !!boolValues?.["withLoader"]\n            ? { showLoader: !!boolValues?.["isLoading"], textDescription: "Laster innhold" }\n            : undefined\n    }\n    onClick={onClick}\n    className="jkl-spacing--right-1"\n>\n    Avbryt\n</PrimaryButton>\n',mdxType:"CodeDemo"})),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Sekundærknapp:")," brukes til handlinger som ikke er like viktige for oss eller brukeren."),Object(l.mdx)(O,{component:v,knobs:{boolProps:["Kompakt","Invertert","isLoading","withLoader"]},mdxType:"ComponentExample"},Object(l.mdx)(C,{code:'\n<SecondaryButton\n    inverted={boolValues && boolValues["Invertert"]}\n    forceCompact={boolValues && boolValues["Kompakt"]}\n    loader={\n        !!boolValues?.["withLoader"]\n            ? { showLoader: !!boolValues?.["isLoading"], textDescription: "Laster innhold" }\n            : undefined\n    }\n    onClick={onClick}\n    className="jkl-spacing--right-1"\n>\n    Avbryt\n</SecondaryButton>\n',mdxType:"CodeDemo"})),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Tertiærknapp:")," brukes til handlinger som er mindre viktige, eller som kan gi uønskede konsekvenser."),Object(l.mdx)(O,{component:y,knobs:{boolProps:["Kompakt","Invertert","isLoading","withLoader"]},mdxType:"ComponentExample"},Object(l.mdx)(C,{code:'\n<TertiaryButton\n    inverted={boolValues && boolValues["Invertert"]}\n    forceCompact={boolValues && boolValues["Kompakt"]}\n    loader={\n        !!boolValues?.["withLoader"]\n            ? { showLoader: !!boolValues?.["isLoading"], textDescription: "Laster innhold" }\n            : undefined\n    }\n    onClick={onClick}\n    className="jkl-spacing--right-1"\n>\n    Avbryt\n</TertiaryButton>\n',mdxType:"CodeDemo"})),Object(l.mdx)("h2",null,"Lastemodus"),Object(l.mdx)("p",null,"Hvis du skal bruke lastemodus i knappen må du sørge for at ",Object(l.mdx)("inlineCode",{parentName:"p"},"@fremtind/jkl-loader/loader.min.css")," er lastet inn i klienten."),Object(l.mdx)("h2",null,"Knappetyper"),Object(l.mdx)("p",null,"Disse tre hovedknappetypene har et hierarki. Når brukeren har flere valg samtidig, skal vi kun ha én primærknapp."),Object(l.mdx)(T,{type:"do",description:"Kun én primærknapp",image:"/assets/do-donts/button-do-1.png",mdxType:"DoDontExample"}),Object(l.mdx)(T,{type:"dont",description:"Flere primærknapper",image:"/assets/do-donts/button-dont-1.png",mdxType:"DoDontExample"}),Object(l.mdx)("h2",null,"Tekst på knapper"),Object(l.mdx)("p",null,"Knappetekster skal være så enkle og korte som mulig og skal oppfordre til handling. Bruk helst bare to ord:"),Object(l.mdx)(u,{className:"jkl-layout-spacing--medium-right",mdxType:"PrimaryButton"},"Send inn"),Object(l.mdx)(k,{className:"jkl-layout-spacing--medium-right",mdxType:"SecondaryButton"},"Lagre"),Object(l.mdx)(b,{className:"jkl-layout-spacing--medium-right",mdxType:"TertiaryButton"},"Avbryt"))}E.isMDXComponent=!0},kFFI:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var o=t("mXGw"),a=t.n(o),r=t("8Jek"),l=t.n(r),i=function(e){var n=e.textDescription,t=e.negative,o=void 0!==t&&t,r=e.inline,i=void 0!==r&&r,s=e.className,d=e.dataTestAutoId,c=void 0===d?"jkl-loader":d,m=l()("jkl-loader",s,{"jkl-loader--negative":o,"jkl-loader--inline":i});return a.a.createElement("span",{className:m,"data-testid":"jkl-loader","data-testautoid":c,title:n,"aria-label":n,role:"alert","aria-busy":"true"},a.a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--left"}),a.a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--middle"}),a.a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--right"}))}}}]);
//# sourceMappingURL=component---packages-button-react-documentation-buttons-mdx-c833c6ebe11cc733a3e7.js.map