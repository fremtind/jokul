import{j as t}from"./jsx-runtime-DqZpzl9T.js";import"./index-siqcju79.js";import{t as a}from"./tokens-CmXyXTIM.js";import{F as n}from"./Flex-BO3EKfKB.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./SlotComponent-DjLpilNT.js";import"./mergeRefs-CYSLoF3z.js";const x={title:"Layout/Flex",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{direction:{control:"select",options:["row","row-reverse","column","column-reverse"]},alignItems:{control:"select",options:["flex-start","flex-end","center","baseline","stretch"]},justifyContent:{control:"select",options:["flex-start","flex-end","center","space-between","space-around","space-evenly"]},wrap:{control:"boolean"},gap:{control:"select",options:Object.keys(a.spacing)}}},s=({label:e})=>t.jsx("div",{style:{padding:"var(--jkl-spacing-24)",backgroundColor:"var(--jkl-background-color)",border:"1px solid var(--jkl-color)",textAlign:"center"},children:e}),r={name:"Flex",args:{style:{border:"3px dashed var(--jkl-color)",padding:"var(--jkl-spacing-24)",height:"50vh",width:"50vw"},direction:"row",wrap:!0,justifyContent:"center",alignItems:"center",gap:8,children:Array.from({length:5},(e,o)=>t.jsx(s,{label:`Box ${o+1}`},o))},render:e=>t.jsx(n,{...e})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const u=["FlexStory"];export{r as FlexStory,u as __namedExportsOrder,x as default};
