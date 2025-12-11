import{j as e}from"./jsx-runtime-BOJBhsC5.js";import{R as l}from"./index-Bv6P490N.js";import{a as o,E as d}from"./ExpandablePanel-D_dSPwCa.js";import{E as i}from"./Expander-B7oCzgli.js";/* empty css               */import{C as c}from"./CalendarIcon-DRwEGSeB.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeightBetween-6sjsgbM6.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-1XLPz9Eq.js";import"./usePreviousValue-CFxVqUaX.js";import"./ChevronDownIcon-ulgFH_bH.js";import"./Icon-DYEEOjBa.js";import"./ChevronUpIcon-CAkXFTAT.js";const O={title:"Komponenter/Expander",component:o,parameters:{layout:"centered"},args:{expandDirection:"down",icon:e.jsx(c,{})},argTypes:{expandDirection:{control:"select",options:["up","down"]}},tags:["autodocs","interactive elements"]},t={name:"Expander",render:n=>{const[a,p]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{...n,open:a,onClick:()=>p(!a),children:["Klikk på meg for å ",a?"lukke":"åpne","!"]}),a&&e.jsx("div",{children:"Hei, jeg er innholdet som vises når du åpner meg!"})]})}},r={args:{expandDirection:"down"},decorators:[n=>e.jsx("div",{children:e.jsx(n,{})})],render:n=>e.jsxs(o,{style:{width:"50cqi"},children:[e.jsx(i,{...n,children:"Når er det vi faktisk er åpne?"}),e.jsx(d,{children:"Hei"})]})},s={parameters:{layout:"fullscreen"},args:{expandDirection:"up"},decorators:[n=>e.jsx("div",{style:{height:"100dvh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end"},children:e.jsx(n,{})})],render:n=>e.jsxs(o,{style:{width:"100cqi"},children:[e.jsx(i,{...n,children:"Når er det vi faktisk er åpne?"}),e.jsx(d,{children:"Hei"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const w=["ExpanderStory","ExpanderInPanel","ExpanderFlipped"];export{s as ExpanderFlipped,r as ExpanderInPanel,t as ExpanderStory,w as __namedExportsOrder,O as default};
