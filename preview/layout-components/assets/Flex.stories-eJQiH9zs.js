import{R as t}from"./index-siqcju79.js";import{t as a}from"./tokens-CmXyXTIM.js";import{F as o}from"./Flex-CB0XPCq0.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CWN6EcE2.js";const g={title:"Layout/Flex",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{direction:{control:"select",options:["row","row-reverse","column","column-reverse"]},alignItems:{control:"select",options:["flex-start","flex-end","center","baseline","stretch"]},justifyContent:{control:"select",options:["flex-start","flex-end","center","space-between","space-around","space-evenly"]},wrap:{control:"boolean"},gap:{control:"select",options:Object.keys(a.spacing)},children:{table:{disable:!0}}}},s=({label:e})=>t.createElement("div",{style:{padding:"var(--jkl-spacing-24)",backgroundColor:"var(--jkl-background-color)",border:"1px solid var(--jkl-color)",textAlign:"center"}},e),r={name:"Flex",args:{style:{padding:"var(--jkl-spacing-24)",height:"50vh",width:"50vw"},direction:"row",wrap:!0,justifyContent:"center",alignItems:"center",gap:8,children:Array.from({length:5},(e,n)=>t.createElement(s,{key:n,label:`Box ${n+1}`}))},render:e=>t.createElement(o,{...e})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Flex",
  args: {
    style: {
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
}`,...r.parameters?.docs?.source}}};const x=["FlexStory"];export{r as FlexStory,x as __namedExportsOrder,g as default};
