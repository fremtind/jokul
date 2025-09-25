import{R as e}from"./index-siqcju79.js";import{a as o,E as l}from"./_index-fl5ez09g.js";import{E as p}from"./Expander-D4NFiOdd.js";import{C as d}from"./CalendarIcon-DraQng1d.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeightBetween-DrSeOltY.js";import"./tokens-CvksrKef.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./usePreviousValue-f0kyfTHz.js";import"./ChevronDownIcon-fl1APhkk.js";import"./Icon-mINJCSxV.js";import"./ChevronUpIcon-CVpRESJ9.js";const C={title:"Komponenter/Expander",component:o,parameters:{layout:"centered"},args:{expandDirection:"down",icon:e.createElement(d,null)},argTypes:{expandDirection:{control:"select",options:["up","down"]}},tags:["autodocs"]},t={name:"Expander",render:n=>{const[a,i]=e.useState(!1);return e.createElement(e.Fragment,null,e.createElement(p,{...n,open:a,onClick:()=>i(!a)},"Klikk på meg for å ",a?"lukke":"åpne","!"),a&&e.createElement("div",null,"Hei, jeg er innholdet som vises når du åpner meg!"))}},r={args:{expandDirection:"down"},decorators:[n=>e.createElement("div",null,e.createElement(n,null))],render:n=>e.createElement(o,{style:{width:"50cqi"}},e.createElement(p,{...n},"Når er det vi faktisk er åpne?"),e.createElement(l,null,"Hei"))},s={parameters:{layout:"fullscreen"},args:{expandDirection:"up"},decorators:[n=>e.createElement("div",{style:{height:"100dvh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end"}},e.createElement(n,null))],render:n=>e.createElement(o,{style:{width:"100cqi"}},e.createElement(p,{...n},"Når er det vi faktisk er åpne?"),e.createElement(l,null,"Hei"))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Expander",
  render: args => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <>
                <Expander {...args} open={isOpen} onClick={() => setIsOpen(!isOpen)}>
                    Klikk på meg for å {isOpen ? "lukke" : "åpne"}!
                </Expander>
                {isOpen && <div>Hei, jeg er innholdet som vises når du åpner meg!</div>}
            </>;
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Expander brukes i ExpandablePanel, men kan også brukes alene dersom du ønsker et annet uttrykk.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const S=["ExpanderStory","ExpanderInPanel","ExpanderFlipped"];export{s as ExpanderFlipped,r as ExpanderInPanel,t as ExpanderStory,S as __namedExportsOrder,C as default};
