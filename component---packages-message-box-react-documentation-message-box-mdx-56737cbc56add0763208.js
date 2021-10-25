"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2258],{9948:function(e,n,l){l.r(n),l.d(n,{_frontmatter:function(){return b},default:function(){return j}});var r=l(808),t=l(7378),s=l(1368),i=l(2803),a=l(6328),o=l(382),d=l.n(o),m=l(5197);function u(e){return function(n){var l=n.title,r=n.fullWidth,s=n.className,i=void 0===s?"":s,a=n.inverted,o=n.dismissed,u=n.dismissAction,c=n.children,g=n.role,p=d()("jkl-message-box","jkl-message-box--"+e,i,{"jkl-message-box--full":r,"jkl-message-box--dark":a,"jkl-message-box--dismissed":o}),f=t.Children.map(c,(function(e){return"string"==typeof e})),k=null!=f&&f[0]?t.createElement("p",{className:"jkl-body"},c):c;return t.createElement("div",{className:p,role:g||function(e){switch(e){case"error":case"warning":return"alert";case"info":case"success":return"status";default:return}}(e),"data-theme":"light"},function(e){switch(e){case"error":return t.createElement("svg",{className:"jkl-message-box__icon","aria-hidden":!0,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 24C18.8503 24 24 18.6274 24 12C24 5.37258 18.8503 0 12 0C5.59548 0 0 5.37258 0 12C0 18.6274 5.59548 24 12 24ZM17.43 8.41421L13.6371 12.2071L17.43 16L16.0158 17.4142L12 13.6213L8.43001 17.4142L7.01579 16L10.8087 12.2071L7.01579 8.41421L8.43001 7L12 10.7929L16.0158 7L17.43 8.41421Z",fill:"currentColor"}));case"info":return t.createElement("svg",{className:"jkl-message-box__icon","aria-hidden":!0,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 12C24 18.6274 18.8503 24 12 24C5.59548 24 0 18.6274 0 12C0 5.37258 5.59548 0 12 0C18.8503 0 24 5.37258 24 12ZM11 17.4142V10H13.2229V17.4142H11.2229ZM12 8.5C12.9133 8.5 13.4729 7.94036 13.4729 7.25C13.4729 6.55964 12.9133 6 12 6C11.5325 6 10.9729 6.55964 10.9729 7.25C10.9729 7.94036 11.5325 8.5 12 8.5Z",fill:"currentColor"}));case"success":return t.createElement("svg",{className:"jkl-message-box__icon","aria-hidden":!0,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 24C18.8503 24 24 18.6274 24 12C24 5.37258 18.8503 0 12 0C5.59548 0 0 5.37258 0 12C0 18.6274 5.59548 24 12 24ZM11.5503 16.7071L19.0503 9.20711L17.6361 7.79289L10.8432 14.5858L7.26909 11.0116L5.85486 12.4258L10.1361 16.7071L10.8432 17.4142L11.5503 16.7071Z",fill:"currentColor"}));case"warning":return t.createElement("svg",{className:"jkl-message-box__icon","aria-hidden":!0,viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.8058 23L3.19424 23C0.885265 23 -0.558162 20.5008 0.595683 18.5008L10.4015 1.50415C11.5559 -0.496963 14.4441 -0.496963 15.5986 1.50415L25.4043 18.5008C26.5582 20.5008 25.1148 23 22.8058 23ZM14 8.00001L14 15.4142L12 15.4142L12 8.00001L14 8.00001ZM13 17C12.3096 17 11.75 17.5597 11.75 18.25C11.75 18.9404 12.3096 19.5 13 19.5C13.6904 19.5 14.25 18.9404 14.25 18.25C14.25 17.5597 13.6904 17 13 17Z",fill:"currentColor"}));default:return null}}(e),t.createElement("div",{className:"jkl-message-box__content"},void 0!==l&&t.createElement("p",{className:"jkl-message-box__title"},l),k),(null==u?void 0:u.handleDismiss)&&t.createElement(m.h,{className:"jkl-message-box__dismiss-button",iconType:"clear",buttonTitle:u.buttonTitle||"Lukk",onClick:u.handleDismiss}))}}var c=u("info"),g=u("error"),p=u("warning"),f=u("success"),k=function(e){var n=e.boolValues,l=e.choiceValues,r=(0,t.useState)(!1),s=r[0],i=r[1],o=function(e){switch(e){default:return c;case"Suksessmelding":return f;case"Advarselsmelding":return p;case"Feilmelding":return g}}(l?l.Type:""),d=n&&n.Avvisbar?{handleDismiss:function(){return i(!0)},buttonTitle:"Merk som lest"}:void 0;return t.createElement(o,{fullWidth:n&&n["Full bredde"],title:l&&l.Type,dismissed:s,dismissAction:d},"Hei, jeg er en melding av typen ",l?l.Type:"ʕ•ᴥ•ʔ"," med"," ",t.createElement(a.OL,{href:"/"},"en navlink"))},v=["components"],b={},x=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",n)}},h=x("Ingress"),C=x("ComponentExample"),w={_frontmatter:b},L=i.Z;function j(e){var n=e.components,l=(0,r.Z)(e,v);return(0,s.mdx)(L,Object.assign({},w,l,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)(h,{mdxType:"Ingress"},"En melding er en beskjed til brukeren. Det kan være et varsel om at noe er feil, informasjon om at noe mangler i et skjema, eller en bekreftelse på at noe har blitt oppdatert. Meldingene består av en overskrift og en meldingstekst."),(0,s.mdx)(C,{component:k,knobs:{boolProps:["Full bredde","Avvisbar"],choiceProps:[{name:"Type",values:["Infomelding","Suksessmelding","Advarselsmelding","Feilmelding"],defaultValue:0}]},mdxType:"ComponentExample"}),(0,s.mdx)("h2",null,"Meldingstyper"),(0,s.mdx)("p",null,"Vi har fire ulike meldinger, med fargene blå, rød, gul og grønn."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Blå:")," gir informasjon til brukeren."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Gul:")," gir brukeren en advarsel, for eksempel at en funksjonalitet er i beta og derfor er ustabil."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Rød:")," gir brukeren en feilmelding, for eksempel hvis det oppstår en systemfeil eller brukeren avbryter en handling."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Grønn:")," forteller at en handling var vellykket."),(0,s.mdx)("h3",null,"Tilgjengelighet"),(0,s.mdx)("p",null,"Når vi bruker meldinger med farge, må vi alltid huske å ha en god og beskrivende overskrift, siden farge ikke er et godt nok kjennetegn for alle brukere. Skriv en presis meldingstekst, der du sier det viktigste først."),(0,s.mdx)("h2",null,"Avvisbare meldinger"),(0,s.mdx)("p",null,"Dersom meldingen ikke er koblet til en tilstand på siden (som f.eks. en feil i et skjema) kan man la brukeren lukke den. For global informasjon som driftsmeldinger bør man huske valget om å lukke meldingen, så brukeren slipper å se den på nytt."))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-message-box-react-documentation-message-box-mdx-56737cbc56add0763208.js.map