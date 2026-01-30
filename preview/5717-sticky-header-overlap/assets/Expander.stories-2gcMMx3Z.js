import{j as e,R as l}from"./iframe-C5z_sbDv.js";import{a as i,E as d}from"./ExpandablePanel-DYhv9QzF.js";import{E as o}from"./Expander-Y8Tcmij0.js";/* empty css               */import{C as c}from"./CalendarIcon-BnRNxQRu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeightBetween-jsZHfmqU.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-kmbjsrgn.js";import"./usePreviousValue-2Iu5K5EA.js";import"./ChevronDownIcon-CbVtmE_N.js";import"./Icon-CoEfuoEs.js";import"./ChevronUpIcon-K-iiDKo-.js";const S={title:"Komponenter/Expander",component:i,args:{expandDirection:"down",icon:e.jsx(c,{})},argTypes:{expandDirection:{control:"select",options:["up","down"]}}},s={name:"Expander",render:n=>{const[a,p]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{...n,open:a,onClick:()=>p(!a),children:["Klikk på meg for å ",a?"lukke":"åpne","!"]}),a&&e.jsx("div",{children:"Hei, jeg er innholdet som vises når du åpner meg!"})]})}},r={args:{expandDirection:"down"},decorators:[n=>e.jsx("div",{children:e.jsx(n,{})})],render:n=>e.jsxs(i,{style:{width:"50cqi"},children:[e.jsx(o,{...n,children:"Når er det vi faktisk er åpne?"}),e.jsx(d,{children:"Hei"})]})},t={args:{expandDirection:"up"},decorators:[n=>e.jsx("div",{style:{height:"100dvh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end"},children:e.jsx(n,{})})],render:n=>e.jsxs(i,{style:{width:"100cqi"},children:[e.jsx(o,{...n,children:"Når er det vi faktisk er åpne?"}),e.jsx(d,{children:"Hei"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const O=["ExpanderStory","ExpanderInPanel","ExpanderFlipped"];export{t as ExpanderFlipped,r as ExpanderInPanel,s as ExpanderStory,O as __namedExportsOrder,S as default};
