import{R as e}from"./index-siqcju79.js";import{I as a}from"./Icon-mINJCSxV.js";import{B as i}from"./Button-Bm5jRD6q.js";/* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";const n=o=>{const{title:t,content:l,popover:p="auto",position:s="bottom",...m}=o;return e.createElement(e.Fragment,null,e.createElement(i,{...m,title:t,"aria-label":t,variant:"ghost",className:"jkl-popuptip--trigger","data-testid":"jkl-popuptip-trigger",icon:e.createElement(a,{"aria-hidden":"true"},"help"),popovertarget:`${t}-popover`,style:{anchorName:`${t}-popover`}}),e.createElement("output",{"aria-live":"assertive"},e.createElement("div",{"data-theme":"dark",popover:p,id:`${t}-popover`,"data-position":s,className:"jkl-popuptip--popup",style:{positionAnchor:`${t}-popover`}},e.createElement("header",null,e.createElement("p",{className:"title"},t),e.createElement(i,{tabIndex:-1,title:"Lukk","aria-label":"Lukk dialogen",variant:"ghost",icon:e.createElement(a,{"aria-hidden":"true"},"close"),popovertarget:`${t}-popover`,popovertargetaction:"hide"})),e.createElement("div",{className:"jkl-popuptip__content-wrapper",tabIndex:0},l))))};n.__docgenInfo={description:"",methods:[],displayName:"TooltipButton",props:{title:{required:!0,tsType:{name:"string"},description:`Tittel på knappen som åpner infoen. Prøv å formuler tittelen 
som et spørsmål og content som svaret på spørsmålet.`},content:{required:!0,tsType:{name:"ReactNode"},description:"Innholdet i tooltipen."},position:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:`Plassering av tooltipen i forhold til triggeren. Tooltipen vil automatisk
bytte posisjon dersom det ikke er plass.
@default "top"`},popover:{required:!1,tsType:{name:"union",raw:'"hint" | "auto" | "manual"',elements:[{name:"literal",value:'"hint"'},{name:"literal",value:'"auto"'},{name:"literal",value:'"manual"'}]},description:"@see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover#value"}}};const k={title:"Komponenter/Tooltip Button",component:n,tags:["autodocs","popover"],parameters:{layout:"fullscreen"},decorators:[o=>e.createElement("div",{style:{height:"100vh",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(o,null))]},r={name:"Tooltip Button",args:{title:"Hvorfor er prisen 0?",content:e.createElement("p",null,"Avtalen er betalt av arbeidsgiveren din. Du betaler ingenting."),popover:"auto",position:"top"},render:o=>e.createElement("p",null,"Avtalepris: 0 kr/mnd. ",e.createElement(n,{...o}))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Tooltip Button",
  args: {
    title: "Hvorfor er prisen 0?",
    content: <p>
                Avtalen er betalt av arbeidsgiveren din. Du betaler ingenting.
            </p>,
    popover: "auto",
    position: "top"
  },
  render: args => <p>
            Avtalepris: 0 kr/mnd. <TooltipButton {...args} />
        </p>
}`,...r.parameters?.docs?.source}}};const T=["TooltipButtonStory"];export{r as TooltipButtonStory,T as __namedExportsOrder,k as default};
