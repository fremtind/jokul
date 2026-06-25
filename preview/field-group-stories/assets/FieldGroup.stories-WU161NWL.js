import{r as p,j as i}from"./iframe-BFG5Vphb.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BUhKuu8T.js";import l from"./Help.stories-B5EE-RCh.js";import c from"./RadioButton.stories-BeCyErPB.js";import{F as d}from"./FieldGroup-By0KzBcG.js";import{C as k,a as u}from"./CheckboxPanel.stories-B0_8wruH.js";import g from"./RadioPanel.stories-DKzzWjmb.js";import{C as h}from"./Checkbox-Cb_A3sTo.js";import{R as b}from"./RadioPanel-BHyheyGt.js";import{H as x}from"./Help-CnLaAaiZ.js";import{R as C}from"./RadioButton-DrEewz_J.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-D8Aaz40K.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BzgF2owN.js";import"./mergeRefs-DMH9SaSG.js";import"./BaseRadioButton.stories-CtN10NkO.js";import"./BaseRadioButton-DlDl8n8v.js";import"./useId-E9iq6_QI.js";import"./Label-CloG1QQZ.js";import"./SupportLabel-io_f3QYS.js";import"./SuccessIcon-CuXwH8dD.js";import"./Icon-oTujzUjY.js";import"./WarningIcon-9AVdyGsZ.js";import"./InputPanel-CT4ayvey.js";import"./Button-DCdGX9fe.js";import"./usePreviousValue-thfDjSqd.js";import"./Loader-Buj_1g8Q.js";import"./useDelayedRender-DrRCsd9t.js";import"./Title-BBFnaFqb.js";import"./Card-BESXddcn.js";import"./Text-BKw5Tr4w.js";import"./Tag-1Ix40rjR.js";import"./ExpandablePanel-ltbZsOL7.js";import"./useAnimatedHeightBetween--DvNDZc5.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BHKpfXpb.js";import"./Expander-CRsMqdft.js";import"./ChevronDownIcon-DJQu-R8K.js";import"./ChevronUpIcon-3Ee1Pu16.js";import"./ListItem-BYk__VF7.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    children: contactChoices.map(value => <RadioPanel {...RadioPanelStories.args} key={value} value={value} name="kontaktmetode" label={value}>
                {value}
            </RadioPanel>)
  }
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
