import{R as p,j as k}from"./iframe-QtBp4egp.js";import{c as f}from"./clsx-B-dksMZM.js";import{S as c}from"./SlotComponent-D8hBxJlv.js";const e=p.forwardRef(function(a,r){const{className:l,clickable:t=!1,padding:o="s",outlined:s=!1,asChild:i,as:d="div",...m}=a,u=i?c:d;return k.jsx(u,{"data-testid":"jkl-card","data-clickable":t,"data-padding":o,className:f("jkl-card",s&&"jkl-card--outlined",l),...m,ref:r})});try{e.displayName="Card",e.__docgenInfo={description:`En allsidig kortkomponent som brukes for å gruppere innhold på en side.
Komponenten rendres til vanlig som en \`<div>\`, men du kan velge å rendre
den som andre elementer eller komponenter der du trenger annen semantikk
eller funksjonalitet.`,displayName:"Card",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},padding:{defaultValue:{value:'"s"'},description:"Setter padding på kortet. Tilsvarer samme property i Figma.",name:"padding",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'}]}},outlined:{defaultValue:{value:"false"},description:"Legger på kantlinje rundt kortet.",name:"outlined",required:!1,type:{name:"boolean"}},clickable:{defaultValue:null,description:"@deprecated Kortet får automatisk riktige stiler dersom det rendres som `button` eller `a`\nAngir om kortet visuelt skal fremstå som klikkbart. Du må selv rendre\nkortet som et klikkbart element (f.eks. `<a>` eller en `<Link>` fra\net ruting-bibliotek) og gi det en `href` eller `onClick`-handler.\nHUSK: Sett aria-label for at støtteverktøy, som skjermlesere, ikke\nskal lese alt innholdet i kortet.",name:"clickable",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Her kan du angi hva slags element komponenten skal rendres\nsom. Det kan enten være en string for native HTML elementer\neller en komponent (som Link fra react-router og lignende).\nDu kan ikke bruke `as` sammen med `asChild`, da den uansett\nikke vil ha noen effekt",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}},asChild:{defaultValue:null,description:`Rendrer komponenten som child-elementet sitt, og slår
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
\`\`\``,name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}export{e as C};
