"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[6403],{60080:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return v},Head:function(){return p},default:function(){return E}});var l=t(47160),a=t(70079),r=t(46233),o=t(28120);function i(e){const n=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li",em:"em",code:"code"},(0,l.ah)(),e.components),{Ingress:t,ComponentExample:i}=n;return i||c("ComponentExample",!0),t||c("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(t,null,"Vi bruker sjelden ikoner. De ikonene vi har valgt å ha, er funksjonelle, ikke til dekorasjon."),"\n",a.createElement(i,{title:"Icons",component:r.Nf,knobs:r.oD,codeExample:r.dQ}),"\n",a.createElement(n.p,null,"Et lite utvalg av ikonene våre er animerbare. For å bruke animasjonene trengs ",a.createElement(n.a,{href:"https://github.com/fremtind/jokul/tree/main/packages/icons"},"CSSen fra ikonpakka"),"."),"\n",a.createElement(i,{title:"Animated",component:o.iN,knobs:o.UO,codeExample:o.V7}),"\n",a.createElement(n.h2,null,"Om de ulike ikonvariantene"),"\n",a.createElement(n.p,null,"Det er tegnet fire varianter av alle ikoner:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"medium regular"),"\n",a.createElement(n.li,null,"small regular"),"\n",a.createElement(n.li,null,"medium bold"),"\n",a.createElement(n.li,null,"small bold"),"\n"),"\n",a.createElement(n.p,null,"Small er designet for bruk der hvor teksten er small i henhold til ",a.createElement(n.a,{href:"/preview/3749-compact-icons/profil/typografi"},"typografiskalaen vår"),". Det vil typisk bety i kompaktversjoner av komponenter."),"\n",a.createElement(n.p,null,"Bold er designet for bruk sammen med bold brødtekst og bold overskrifter (Heading 3-5)."),"\n",a.createElement(n.p,null,"Til vanlig bruker vi ",a.createElement(n.em,null,"medium regular"),"."),"\n",a.createElement(n.p,null,"Dersom du koder med bruk av ",a.createElement(n.code,null,"inherit"),"-varianten av ikoner (dette er standard) vil dette for det meste ",a.createElement(n.em,null,"bare funke"),"."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Om ikonet vises inni en kompakt komponent eller layout brukes ",a.createElement(n.em,null,"small"),"."),"\n",a.createElement(n.li,null,"Hvis ikonet vises inni en komponent med ",a.createElement(n.em,null,"utility-klassen for en heading")," (",a.createElement(n.code,null,".jkl-heading-1")," osv.) får du riktig ikonstørrelse (medium) og vekt automatisk, også i en kompakt layout."),"\n",a.createElement(n.li,null,"Ikonet skalerer til å matche fontstørrelsen."),"\n"),"\n",a.createElement(n.p,null,"Hvis du trenger en fast størrelse og vekt kan du bruke egne props for dette."),"\n",a.createElement(n.h2,null,"Hvordan bruker vi ikoner?"),"\n",a.createElement(n.p,null,"Se ",a.createElement(n.a,{href:"/preview/3749-compact-icons/profil/ikoner"},"profildokumentasjonen")," for mer om hvordan vi bruker ikoner."),"\n",a.createElement(n.p,null,"Om du skal bruke ikonet som en knapp, se også ",a.createElement(n.a,{href:"/preview/3749-compact-icons/komponenter/iconbutton"},"IconButton"),"."))}var m=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(i,e)):i(e)};function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var s=t(72285),u=t(22756),d=t(95573),k=t(1634);const p=e=>{let{pageContext:n}=e;return a.createElement(u.p,{title:n.title})},v=e=>{let{location:n,data:t,pageContext:l,children:r}=e;const{frontmatter:o}=t.page,{types:i}=l;return a.createElement(k.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(d.M1,Object.assign({},o,{versions:l.versions})),a.createElement(d.w5,o),r,i&&a.createElement(s.l,{types:i}))};function E(e){return a.createElement(v,e,a.createElement(m,e))}},28120:function(e,n,t){t.d(n,{iN:function(){return g},V7:function(){return h},UO:function(){return b}});var l=t(70079),a=t(54790),r=t(26372),o=t.n(r),i=t(43456),m=t(94148);const c=e=>{let{className:n,pointingDown:t,variant:a="inherit",bold:r=!1,...c}=e;return l.createElement("div",Object.assign({},c,{className:o()("jkl-icon","jkl-icon--animated","jkl-icon--"+a,{"jkl-icon--bold":r},"jkl-animated-vertical-arrows",n)}),l.createElement("div",{className:"jkl-animated-vertical-arrows__slider","data-show":t?"down":"up"},l.createElement(i.v,{className:"jkl-animated-vertical-arrows__arrow",variant:a,bold:r}),l.createElement(m.H,{className:"jkl-animated-vertical-arrows__arrow",variant:a,bold:r})))};c.displayName="ArrowVerticalAnimated";var s=t(98731),u=t(3878);const d=e=>{let{className:n,pointingRight:t,variant:a="inherit",bold:r=!1,...i}=e;return l.createElement("div",Object.assign({},i,{className:o()("jkl-icon","jkl-icon--animated","jkl-icon--"+a,{"jkl-icon--bold":r},"jkl-animated-horizontal-arrows",n)}),l.createElement("div",{className:"jkl-animated-horizontal-arrows__slider","data-show":t?"right":"left"},l.createElement(u.L,{className:"jkl-animated-horizontal-arrows__arrow",variant:a,bold:r}),l.createElement(s.Y,{className:"jkl-animated-horizontal-arrows__arrow",variant:a,bold:r})))};d.displayName="ArrowHorizontalAnimated";var k=t(66982);const p=e=>{let{className:n,isPlus:t,variant:a="inherit",bold:r=!1,...i}=e;return l.createElement("div",Object.assign({},i,{className:o()("jkl-icon","jkl-icon--animated","jkl-icon--"+a,{"jkl-icon--bold":r},n)}),l.createElement(k.p,{variant:a,bold:r,className:o()("jkl-icons-animated__plus","jkl-icons-animated__plus--"+(t?"plus":"close"))}))};p.displayName="PlusRemoveAnimated";const v=e=>{let{renderIcon:n,iconName:t}=e;const[a,r]=l.useState(!1);return l.createElement(l.Fragment,null,l.createElement("div",{title:t||n.name},n(a)),l.createElement("div",{style:{textAlign:"right"}},l.createElement("button",{"data-density":"compact",className:"jkl-button jkl-button--tertiary jkl-spacing-2xl--left",onClick:()=>r(!a)},"Animér ",l.createElement("span",{className:"jkl-sr-only"},t))))};var E=t(11183);const b={boolProps:["Bold"],choiceProps:[{name:"Variant",values:["inherit","medium","small"],defaultValue:1}]},g=e=>{let{choiceValues:n,boolValues:t}=e;const r=n?n.Variant:"small",o=(null==t?void 0:t.Bold)||!1,{0:i,1:m}=(0,l.useState)("1rem");return l.createElement("div",{style:{width:"100%"}},"inherit"===r&&l.createElement(a.o,{label:"Fontstørrelse",className:"jkl-spacing-24--bottom",value:i,onChange:e=>m(e.target.value),width:"10ch"}),l.createElement(E.e,{style:{fontSize:i},columns:"two"},l.createElement(v,{renderIcon:e=>l.createElement(c,{bold:o,pointingDown:e,variant:r}),iconName:c.displayName}),l.createElement(v,{renderIcon:e=>l.createElement(d,{bold:o,pointingRight:e,variant:r}),iconName:d.displayName}),l.createElement(v,{renderIcon:e=>l.createElement(p,{bold:o,isPlus:e,variant:r}),iconName:p.displayName})))},h=e=>{let{boolValues:n,choiceValues:t}=e;return'\n<ArrowVerticalAnimated variant="'+(null==t?void 0:t.Variant)+'"'+(null!=n&&n.Bold?" bold":"")+' pointingDown={isPointingDown} />\n<ArrowHorizontalAnimated variant="'+(null==t?void 0:t.Variant)+'"'+(null!=n&&n.Bold?" bold":"")+' pointingRight={isPointingRight} />\n<PlusRemoveAnimated variant="'+(null==t?void 0:t.Variant)+'"'+(null!=n&&n.Bold?" bold":"")+" isPlus={isPlus} />\n"}}}]);