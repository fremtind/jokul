import{r as p,j as s}from"./iframe-DvdNgD1H.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Dn1foEdH.js";import{CheckboxStory as c}from"./Checkbox.stories-DVrC6zBx.js";import k from"./Help.stories-BQYq7an9.js";import u from"./RadioButton.stories-CQ-0gZuY.js";import{RadioPanel as g}from"./RadioPanel.stories-B7nVztN8.js";import{F as h}from"./FieldGroup-CtX11QmG.js";import{C as b}from"./Checkbox-C2Whpmkw.js";import{R as x}from"./RadioPanel-BVmwIqhp.js";import{H as C}from"./Help-ByCD4FzU.js";import{R as G}from"./RadioButton-DbAZ-SKg.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DE0NmIEW.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-DrFbwP_5.js";import"./SlotComponent-C0_iRBW0.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BsDfkqvn.js";import"./usePreviousValue-oyLdpbL2.js";import"./Loader-CplIIhBt.js";import"./useDelayedRender-CG9CIFWi.js";import"./useId-D8ol9b84.js";import"./Label-Bd16TdLB.js";import"./SupportLabel-DRQuWfgf.js";import"./SuccessIcon-CX_lhKzM.js";import"./Icon-Ck4zXriZ.js";import"./WarningIcon-BPASiB4l.js";import"./BaseRadioButton.stories-gyNSeVb_.js";import"./BaseRadioButton-B3EGhp-v.js";import"./Title-BvzB6UeU.js";import"./Card-Czkn-BV0.js";import"./Text-DB7nQKbU.js";import"./Tag--FC_ZRye.js";import"./ExpandablePanel-CFLAvLYx.js";import"./useAnimatedHeightBetween-Bx7Zha__.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Ci29f-Za.js";import"./Expander-CmGU9LiF.js";import"./ChevronDownIcon-DPHpwfPV.js";import"./ChevronUpIcon-CyBiH3Pi.js";import"./ListItem-DhZfewD8.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Checkbox gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <Checkbox {...CheckboxStory.args} key={value} value={value} name="kontaktmetode">
                {value}
            </Checkbox>)
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Checkbox panel gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <CheckboxPanel {...CheckboxPanelStory.args} key={value} value={value} name="kontaktmetode" label={value}>
                {value}
            </CheckboxPanel>)
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Radio panel gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <RadioPanel {...RadioPanelStory.args} key={value} value={value} name="kontaktmetode" label={value} />)
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Legend som sideoverskrift",
  args: {
    legend: "Hvordan vil du bli kontaktet?",
    labelProps: {
      pageHeading: true
    }
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,de as __namedExportsOrder,le as default};
