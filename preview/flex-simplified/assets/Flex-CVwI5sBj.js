import{r as w,j as b}from"./iframe-DomUvUQy.js";import{c as h}from"./clsx-B-dksMZM.js";import{S as q}from"./SlotComponent-BZ1S-NZp.js";const a=w.forwardRef(function(r,t){const{asChild:s,alignItems:o,alignContent:u,as:i="div",className:p,direction:m,gap:d,justifyContent:c,wrap:e,style:f,...v}=r,g=e===!0?"wrap":e===!1?"nowrap":e==="reverse"?"wrap-reverse":e;function y(n){if(n?.toString().includes(" ")){const[C,x]=n.toString().trim().split(" ");return`var(--jkl-spacing-${C}) var(--jkl-spacing-${x})`}if(n)return`var(--jkl-spacing-${n})`}const k=s?q:i;return b.jsx(k,{style:{"--wrap":g,"--gap":y(d),"--align-items":o,"--align-content":u,"--justify-content":c,"--flex-direction":m,...f},...v,className:h("jkl-flex",p),ref:t})});try{a.displayName="Flex",a.__docgenInfo={description:"",displayName:"Flex",props:{alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"normal"'},{value:'"start"'},{value:'"end"'},{value:'"baseline"'},{value:'"stretch"'}]}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"normal"'},{value:'"start"'},{value:'"end"'},{value:'"baseline"'},{value:'"stretch"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"row-reverse"'},{value:'"column"'},{value:'"column-reverse"'}]}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"Gap"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"normal"'},{value:'"start"'},{value:'"end"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}},wrap:{defaultValue:null,description:'Om elementene skal brytes over flere linjer.\n`true`/`false` setter `wrap`/`nowrap`, `"reverse"` som kortform for\n`"wrap-reverse"`.',name:"wrap",required:!1,type:{name:'boolean | "wrap" | "nowrap" | "reverse"'}},as:{defaultValue:null,description:"Her kan du angi hva slags element komponenten skal rendres\nsom. Det kan enten være en string for native HTML elementer\neller en komponent (som Link fra react-router og lignende).\nDu kan ikke bruke `as` sammen med `asChild`, da den uansett\nikke vil ha noen effekt",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}},asChild:{defaultValue:null,description:`Rendrer komponenten som child-elementet sitt, og slår
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
\`\`\``,name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}export{a as F};
