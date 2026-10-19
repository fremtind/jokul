import{r as n,j as i}from"./iframe-B9t7Bhvf.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-oKB8Z4JZ.js";import{CheckboxStory as c}from"./Checkbox.stories-CDjRtesK.js";import d from"./Help.stories-WYpUoleJ.js";import k from"./RadioButton.stories-IhzLTJQv.js";import{RadioPanel as u}from"./RadioPanel.stories-CN0ceXGu.js";import{F as g}from"./FieldGroup-XXg4kgZ7.js";import{C as h}from"./Checkbox-6pLklRc3.js";import{R as b}from"./RadioPanel-JL7iCLy5.js";import{H as x}from"./Help-BRGhNLjN.js";import{R as C}from"./RadioButton-FDDBIZ9E.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DhrQsWTM.js";import"./clsx-B-dksMZM.js";import"./Flex-CzOInPaH.js";import"./SlotComponent-DZcjTUgQ.js";import"./mergeRefs-DssYOP80.js";import"./Button-CIuG_DyP.js";import"./usePreviousValue-frJSzea1.js";import"./Loader-HKpL63cn.js";import"./useDelayedRender-n5gDXwGO.js";import"./useId-DPsHlg8A.js";import"./Label-DI69Owzo.js";import"./SupportLabel-CkjAD-AF.js";import"./SuccessIcon-Dg8CLSfn.js";import"./Icon-nVkRfvR3.js";import"./WarningIcon-BsTpSXEd.js";import"./BaseRadioButton.stories-ri6LpaTR.js";import"./BaseRadioButton-CqmngWXI.js";import"./Title-7xhv_JbT.js";import"./Card-t4iguzZq.js";import"./Text-COskSFJl.js";import"./Tag-PdQ42umT.js";import"./ExpandablePanel-C5zEs77I.js";import"./useAnimatedHeightBetween-Cu0qy5HE.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C4OF_QZZ.js";import"./Expander-CKTwiF2O.js";import"./ChevronUpIcon-SUsVkQBk.js";import"./ListItem-B4Og7CBJ.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
