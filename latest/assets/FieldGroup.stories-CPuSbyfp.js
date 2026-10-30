import{r as n,j as i}from"./iframe-F9HQqlwx.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DLv5M3Lm.js";import{CheckboxStory as c}from"./Checkbox.stories-h1tWA3X7.js";import d from"./Help.stories-D41aI3jt.js";import k from"./RadioButton.stories-CxwNlTbv.js";import{RadioPanel as u}from"./RadioPanel.stories-Cdxp_XCv.js";import{F as g}from"./FieldGroup-BJkwNcth.js";import{C as h}from"./Checkbox-B8KZo68C.js";import{R as b}from"./RadioPanel-D-wDD3pS.js";import{H as x}from"./Help-cgNy2LVO.js";import{R as C}from"./RadioButton-B5f_s05b.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Bf6xw7a0.js";import"./clsx-B-dksMZM.js";import"./Flex-Cw7y-IC9.js";import"./SlotComponent-BBuwCuXi.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CfEtt67d.js";import"./usePreviousValue-CyJplb8U.js";import"./Loader-DzCUgEW0.js";import"./useDelayedRender-C5B76KoS.js";import"./useId--C4d5KQ6.js";import"./Label-DM8Yn6PZ.js";import"./SupportLabel-BydfHROK.js";import"./SuccessIcon-CfDi0b1U.js";import"./Icon-e1t1AzPi.js";import"./WarningIcon-DNR-VrVC.js";import"./BaseRadioButton.stories-DhRHJzEW.js";import"./BaseRadioButton-BknUqynM.js";import"./Title-C7W1NR8x.js";import"./Card-CfC1XkUw.js";import"./Text-DoRaOJO4.js";import"./Tag-CyCBAuNN.js";import"./ExpandablePanel-DUPHSf7d.js";import"./useAnimatedHeightBetween-BPnTObNv.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-bRIoQua_.js";import"./Expander-DWnBjmgV.js";import"./ChevronUpIcon-Dl5EhheJ.js";import"./ListItem-C4QZY73f.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
