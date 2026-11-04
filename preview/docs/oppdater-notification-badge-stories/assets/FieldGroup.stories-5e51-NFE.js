import{r as p,j as i}from"./iframe-BvgdGppR.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BIqIoEyD.js";import{CheckboxStory as c}from"./Checkbox.stories-CMTdKuAN.js";import k from"./Help.stories-Cl8iXUXS.js";import u from"./RadioButton.stories-wa0c-qVM.js";import{RadioPanel as g}from"./RadioPanel.stories-C618jtLf.js";import{F as h}from"./FieldGroup-Dbc3C-4s.js";import{C as b}from"./Checkbox-ClygfKxe.js";import{R as x}from"./RadioPanel-BI4TcY9D.js";import{H as C}from"./Help-CzhuKxv5.js";import{R as G}from"./RadioButton-CiFvlrKv.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BDCSAqzf.js";import"./clsx-B-dksMZM.js";import"./Flex-ByeNHVk4.js";import"./SlotComponent-D5cx0dK8.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DiTMvIPl.js";import"./usePreviousValue-xkDsbQ3a.js";import"./Loader-CZ1p0pgG.js";import"./useDelayedRender-BfSqivaQ.js";import"./useId-CMC1Plz5.js";import"./Label-DfNVgUV-.js";import"./SupportLabel-DXvfOgtx.js";import"./SuccessIcon-CcpON5xS.js";import"./Icon-CUYpL2PI.js";import"./WarningIcon-DfwMeduq.js";import"./BaseRadioButton.stories-CAYEMJ9W.js";import"./BaseRadioButton-B0V_XzE3.js";import"./Title-BH21J2mz.js";import"./Card-BzgtIMcM.js";import"./Text-pv2y08Es.js";import"./Tag-B4YnHIz-.js";import"./ExpandablePanel-DQ7IPELb.js";import"./useAnimatedHeightBetween-DeThl6pD.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-COMrmU33.js";import"./Expander-x4dBhOVS.js";import"./ChevronUpIcon-BopXmpRR.js";import"./ListItem-Dzsq4FoU.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,ie as __namedExportsOrder,se as default};
