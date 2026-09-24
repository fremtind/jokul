import{r as n,j as i}from"./iframe-CMHqxgQS.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-u1K4WAeO.js";import{CheckboxStory as c}from"./Checkbox.stories-QYT3jZdQ.js";import d from"./Help.stories-CnFrI_Yc.js";import k from"./RadioButton.stories-Bjv5QXYx.js";import{RadioPanel as u}from"./RadioPanel.stories-DUcMufr3.js";import{F as g}from"./FieldGroup-uBKO56UN.js";import{C as h}from"./Checkbox-BEQhphW4.js";import{R as b}from"./RadioPanel-DXyDISY7.js";import{H as x}from"./Help-NtX94a-e.js";import{R as C}from"./RadioButton-qRi4ZIj7.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-ChMIqddk.js";import"./clsx-B-dksMZM.js";import"./Flex-CXgMrKC_.js";import"./SlotComponent-BYFK1iS7.js";import"./mergeRefs-CRQ6NFan.js";import"./Button-Cl1XRLvI.js";import"./usePreviousValue-NKhaGyNS.js";import"./Loader-DEnBEtVx.js";import"./useDelayedRender-DmOSEZCD.js";import"./useId-HL96Eakd.js";import"./Label-CgATCHg3.js";import"./SupportLabel-DlmbjYXU.js";import"./SuccessIcon-fRD23Ai6.js";import"./Icon-Dt-v36aC.js";import"./WarningIcon-aQMETlKA.js";import"./BaseRadioButton.stories-Dd-Km6Iu.js";import"./BaseRadioButton-ym0eIBmq.js";import"./Title-BYG-WsGV.js";import"./Card--8a61cA9.js";import"./Text-C5QEEXwR.js";import"./Tag-DiOYXlyw.js";import"./ExpandablePanel-B5GPqY9o.js";import"./useAnimatedHeightBetween-BhlT684M.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-LGUGRqzo.js";import"./Expander-BAeh9r2C.js";import"./ChevronUpIcon-V1PY63Ww.js";import"./ListItem-BuwhoBjX.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
