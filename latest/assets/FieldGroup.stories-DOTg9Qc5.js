import{r as n,j as i}from"./iframe-DKRv853k.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CLGV5zXi.js";import{CheckboxStory as c}from"./Checkbox.stories-Dmkno1JS.js";import d from"./Help.stories-DwA_ZozU.js";import k from"./RadioButton.stories-5bKu24cT.js";import{RadioPanel as u}from"./RadioPanel.stories-LhN3tRqO.js";import{F as g}from"./FieldGroup-HlUV8zdO.js";import{C as h}from"./Checkbox-CXh4wgSW.js";import{R as b}from"./RadioPanel-DhNqarD8.js";import{H as x}from"./Help-C7f190nR.js";import{R as C}from"./RadioButton-Bx0iwj0X.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BQ62Dw1R.js";import"./clsx-B-dksMZM.js";import"./Flex-CgayStB-.js";import"./SlotComponent-BXSC71rJ.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DdAP2fm2.js";import"./usePreviousValue-DECogEt3.js";import"./Loader-qeUMFqsy.js";import"./useDelayedRender-e3INIYVU.js";import"./useId--EObD0tb.js";import"./Label-DWsEW5oB.js";import"./SupportLabel-DtihHlc3.js";import"./SuccessIcon-DyzcjlU6.js";import"./Icon-2Z_pbBqR.js";import"./WarningIcon-DNnIn1f1.js";import"./BaseRadioButton.stories-BS48lZvk.js";import"./BaseRadioButton-Cv3g6S2B.js";import"./Title-B2kmkpku.js";import"./Card-Dw9U6pxr.js";import"./Text-DpcATq5u.js";import"./Tag-RORWtXH8.js";import"./ExpandablePanel-B6rIpupp.js";import"./useAnimatedHeightBetween-BJpSA7pw.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BHMUHbjt.js";import"./Expander-BL0wLmhn.js";import"./ChevronUpIcon-Bzbdk1dI.js";import"./ListItem-B_YrzcG1.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
