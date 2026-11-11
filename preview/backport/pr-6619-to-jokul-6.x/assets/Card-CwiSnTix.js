import{R as u,j as k}from"./iframe-BsCurwi4.js";import{c}from"./clsx-B-dksMZM.js";import{S as f}from"./SlotComponent-CBOvyZNM.js";const e=u.forwardRef(function(n,l){const{className:t,clickable:s=!1,padding:r="s",outlined:o=!1,asChild:i,as:m="div",...d}=n,p=i?f:m;return k.jsx(p,{"data-testid":"jkl-card","data-clickable":s,"data-padding":r,className:c("jkl-card",o&&"jkl-card--outlined",t),...d,ref:l})});try{e.displayName="Card",e.__docgenInfo={description:`En allsidig kortkomponent som brukes for å gruppere innhold på en side.
Komponenten rendres til vanlig som en \`<div>\`, men du kan velge å rendre
den som andre elementer eller komponenter der du trenger annen semantikk
eller funksjonalitet.`,displayName:"Card",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/card/Card.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/card/types.ts",name:"TypeLiteral"}],description:"",name:"className",required:!1,tags:{},type:{name:"string"}},padding:{defaultValue:{value:'"s"'},declarations:[{fileName:"jokul/packages/jokul/src/components/card/types.ts",name:"TypeLiteral"}],description:"Setter padding på kortet. Tilsvarer samme property i Figma.",name:"padding",required:!1,tags:{default:'"s"'},type:{name:"enum",raw:'"s" | "m" | "l" | "xl"',value:[{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'}]}},outlined:{defaultValue:{value:"false"},declarations:[{fileName:"jokul/packages/jokul/src/components/card/types.ts",name:"TypeLiteral"}],description:"Legger på kantlinje rundt kortet.",name:"outlined",required:!1,tags:{default:"false"},type:{name:"boolean"}},clickable:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/card/types.ts",name:"TypeLiteral"}],description:"",name:"clickable",required:!1,tags:{deprecated:"Kortet får automatisk riktige stiler dersom det rendres som `button` eller `a`\nAngir om kortet visuelt skal fremstå som klikkbart. Du må selv rendre\nkortet som et klikkbart element (f.eks. `<a>` eller en `<Link>` fra\net ruting-bibliotek) og gi det en `href` eller `onClick`-handler.\nHUSK: Sett aria-label for at støtteverktøy, som skjermlesere, ikke\nskal lese alt innholdet i kortet."},type:{name:"boolean"}},as:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/polymorphism/polymorphism.ts",name:"TypeLiteral"},{fileName:"jokul/packages/jokul/src/utilities/polymorphism/as-child.ts",name:"TypeLiteral"},{fileName:"jokul/packages/jokul/src/utilities/polymorphism/polymorphism.ts",name:"TypeLiteral"}],description:"Her kan du angi hva slags element komponenten skal rendres\nsom. Det kan enten være en string for native HTML elementer\neller en komponent (som Link fra react-router og lignende).\nDu kan ikke bruke `as` sammen med `asChild`, da den uansett\nikke vil ha noen effekt",name:"as",required:!1,tags:{},type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/polymorphism/polymorphism.ts",name:"TypeLiteral"}],description:"",name:"ref",required:!1,tags:{},type:{name:"any"}},asChild:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/polymorphism/as-child.ts",name:"TypeLiteral"},{fileName:"jokul/packages/jokul/src/utilities/polymorphism/as-child.ts",name:"TypeLiteral"}],description:`Rendrer komponenten som child-elementet sitt, og slår
sammen egenskaper og props.`,name:"asChild",required:!1,tags:{example:`\`\`\`tsx
<Component asChild foo="bar">
   <Child baz="qux" />
</Component>

// Rendrer følgende:
<Child foo="bar" baz="qux" />
\`\`\`
\`\`\`tsx
<Component asChild foo="bar">
   <Child baz="qux" />
</Component>

// Rendrer følgende:
<Child foo="bar" baz="qux" />
\`\`\``},type:{name:"boolean"}}},tags:{}}}catch{}export{e as C};
