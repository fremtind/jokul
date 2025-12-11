import{R as e}from"./index-siqcju79.js";import{a as o,E as p}from"./_index-fl5ez09g.js";import{E as l}from"./Expander-D4NFiOdd.js";import{C as d}from"./CalendarIcon-DraQng1d.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeightBetween-DrSeOltY.js";import"./tokens-CvksrKef.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./usePreviousValue-f0kyfTHz.js";import"./ChevronDownIcon-fl1APhkk.js";import"./Icon-mINJCSxV.js";import"./ChevronUpIcon-CVpRESJ9.js";const C={title:"Komponenter/Expander",component:o,parameters:{layout:"centered"},args:{expandDirection:"down",icon:e.createElement(d,null)},argTypes:{expandDirection:{control:"select",options:["up","down"]}},tags:["autodocs","interactive elements"]},a={name:"Expander",render:n=>{const[t,i]=e.useState(!1);return e.createElement(e.Fragment,null,e.createElement(l,{...n,open:t,onClick:()=>i(!t)},"Klikk på meg for å ",t?"lukke":"åpne","!"),t&&e.createElement("div",null,"Hei, jeg er innholdet som vises når du åpner meg!"))}},r={args:{expandDirection:"down"},decorators:[n=>e.createElement("div",null,e.createElement(n,null))],render:n=>e.createElement(o,{style:{width:"50cqi"}},e.createElement(l,{...n},"Når er det vi faktisk er åpne?"),e.createElement(p,null,"Hei"))},s={parameters:{layout:"fullscreen"},args:{expandDirection:"up"},decorators:[n=>e.createElement("div",{style:{height:"100dvh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end"}},e.createElement(n,null))],render:n=>e.createElement(o,{style:{width:"100cqi"}},e.createElement(l,{...n},"Når er det vi faktisk er åpne?"),e.createElement(p,null,"Hei"))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const S=["ExpanderStory","ExpanderInPanel","ExpanderFlipped"];export{s as ExpanderFlipped,r as ExpanderInPanel,a as ExpanderStory,S as __namedExportsOrder,C as default};
