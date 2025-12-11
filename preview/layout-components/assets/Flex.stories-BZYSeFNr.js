import{j as t}from"./jsx-runtime-BbjHj44Y.js";import"./index-C6mWTJJr.js";import{t as c}from"./tokens-DyQL8Q6a.js";import{F as l}from"./Flex-Bxl3x-bI.js";import"./_commonjsHelpers-BosuxZz1.js";const u={title:"Layout/Flex",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{direction:{control:"select",options:["row","row-reverse","column","column-reverse"]},alignItems:{control:"select",options:["flex-start","flex-end","center","baseline","stretch"]},justifyContent:{control:"select",options:["flex-start","flex-end","center","space-between","space-around","space-evenly"]},wrap:{control:"boolean"},gap:{control:"select",options:Object.keys(c.spacing)}}},i=({label:e})=>t.jsx("div",{style:{padding:"var(--jkl-spacing-24)",backgroundColor:"var(--jkl-background-color)",border:"1px solid var(--jkl-color)",textAlign:"center"},children:e}),r={name:"Flex",args:{style:{border:"3px dashed var(--jkl-color)",padding:"var(--jkl-spacing-24)",height:"50vh",width:"50vw"},direction:"row",wrap:!0,justifyContent:"center",alignItems:"center",gap:8,children:Array.from({length:5},(e,n)=>t.jsx(i,{label:`Box ${n+1}`},n))},render:e=>t.jsx(l,{...e})};var o,a,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Flex",
  args: {
    style: {
      border: "3px dashed var(--jkl-color)",
      padding: "var(--jkl-spacing-24)",
      height: "50vh",
      width: "50vw"
    },
    direction: "row",
    wrap: true,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    children: Array.from({
      length: 5
    }, (_, i) => <Box key={i} label={\`Box \${i + 1}\`} />)
  },
  render: args => <Flex {...args} />
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const h=["FlexStory"];export{r as FlexStory,h as __namedExportsOrder,u as default};
