import{R as f,j as g}from"./iframe-CDa7pJma.js";import{c as b}from"./clsx-B-dksMZM.js";import{S as C}from"./SlotComponent-CpGAMfLY.js";import{C as v,g as h}from"./types-YjSsgwWY.js";const i=f.forwardRef(function(d,s){const{className:m,clickable:n=!1,padding:a="s",outlined:t=!1,asChild:u,as:k="div",children:e,tracking:r,...p}=d,c=u?C:k,l=e?String(e):void 0;return g.jsx(c,{"data-testid":"jkl-card","data-clickable":n,"data-padding":a,className:b("jkl-card",t&&"jkl-card--outlined",m),...p,"data-track-component-name":v.Card,"data-track-id":r?.id??l,"data-track-label":l,"data-track-padding":a,"data-track-outlined":t,"data-track-clickable":n,...h(r?.extra),ref:s,children:e})});try{i.displayName="Card",i.__docgenInfo={description:`En allsidig kortkomponent som brukes for å gruppere innhold på en side.
Komponenten rendres til vanlig som en \`<div>\`, men du kan velge å rendre
den som andre elementer eller komponenter der du trenger annen semantikk
eller funksjonalitet.`,displayName:"Card",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},padding:{defaultValue:{value:'"s"'},description:"Setter padding på kortet. Tilsvarer samme property i Figma.",name:"padding",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'}]}},outlined:{defaultValue:{value:"false"},description:"Legger på kantlinje rundt kortet.",name:"outlined",required:!1,type:{name:"boolean"}},clickable:{defaultValue:null,description:"@deprecated Kortet får automatisk riktige stiler dersom det rendres som `button` eller `a`\nAngir om kortet visuelt skal fremstå som klikkbart. Du må selv rendre\nkortet som et klikkbart element (f.eks. `<a>` eller en `<Link>` fra\net ruting-bibliotek) og gi det en `href` eller `onClick`-handler.\nHUSK: Sett aria-label for at støtteverktøy, som skjermlesere, ikke\nskal lese alt innholdet i kortet.",name:"clickable",required:!1,type:{name:"boolean"}},tracking:{defaultValue:null,description:"",name:"tracking",required:!1,type:{name:"Tracking"}},as:{defaultValue:null,description:"Her kan du angi hva slags element komponenten skal rendres\nsom. Det kan enten være en string for native HTML elementer\neller en komponent (som Link fra react-router og lignende).\nDu kan ikke bruke `as` sammen med `asChild`, da den uansett\nikke vil ha noen effekt",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}},asChild:{defaultValue:null,description:`Rendrer komponenten som child-elementet sitt, og slår
sammen egenskaper og props.
@example \`\`\`tsx
<Component asChild foo="bar">
   <Child baz="qux" />
</Component>

// Rendrer følgende:
<Child foo="bar" baz="qux" />
\`\`\`
@example \`\`\`tsx
<Component asChild foo="bar">
   <Child baz="qux" />
</Component>

// Rendrer følgende:
<Child foo="bar" baz="qux" />
\`\`\``,name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}export{i as C};
