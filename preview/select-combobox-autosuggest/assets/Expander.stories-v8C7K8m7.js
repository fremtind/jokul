import{R as e}from"./index-siqcju79.js";import{a as o,E as s}from"./_index-QZoTXneK.js";import{E as d}from"./Expander-Cpo7VSwA.js";import{C as l}from"./CalendarIcon-DraQng1d.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeightBetween-DrSeOltY.js";import"./tokens-CvksrKef.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./usePreviousValue-f0kyfTHz.js";import"./ChevronDownIcon-fl1APhkk.js";import"./Icon-mINJCSxV.js";import"./ChevronUpIcon-CVpRESJ9.js";const v={title:"Komponenter/Expander",component:o,parameters:{layout:"centered"},args:{expandDirection:"down",icon:e.createElement(l,null)},argTypes:{expandDirection:{control:"select",options:["up","down"]}},tags:["autodocs"]},a={name:"Expander"},r={args:{expandDirection:"down"},decorators:[n=>e.createElement("div",null,e.createElement(n,null))],render:n=>e.createElement(o,{style:{width:"50cqi"}},e.createElement(d,{...n},"Når er det vi faktisk er åpne?"),e.createElement(s,null,"Hei"))},t={parameters:{layout:"fullscreen"},args:{expandDirection:"up"},decorators:[n=>e.createElement("div",{style:{height:"100dvh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end"}},e.createElement(n,null))],render:n=>e.createElement(o,{style:{width:"100cqi"}},e.createElement(d,{...n},"Når er det vi faktisk er åpne?"),e.createElement(s,null,"Hei"))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Expander"
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    expandDirection: "down"
  },
  decorators: [Story => <div>
                <Story />
            </div>],
  render: args => <ExpandablePanel style={{
    width: "50cqi"
  }}>
            <Expander {...args}>Når er det vi faktisk er åpne?</Expander>
            <ExpandablePanelContent>Hei</ExpandablePanelContent>
        </ExpandablePanel>
}`,...r.parameters?.docs?.source},description:{story:"Expander brukes i ExpandablePanel, men kan også brukes alene dersom du ønsker et annet uttrykk.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  args: {
    expandDirection: "up"
  },
  decorators: [Story => <div style={{
    height: "100dvh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end"
  }}>
                <Story />
            </div>],
  render: args => <ExpandablePanel style={{
    width: "100cqi"
  }}>
            <Expander {...args}>Når er det vi faktisk er åpne?</Expander>
            <ExpandablePanelContent>Hei</ExpandablePanelContent>
        </ExpandablePanel>
}`,...t.parameters?.docs?.source}}};const h=["ExpanderStory","ExpanderInPanel","ExpanderFlipped"];export{t as ExpanderFlipped,r as ExpanderInPanel,a as ExpanderStory,h as __namedExportsOrder,v as default};
