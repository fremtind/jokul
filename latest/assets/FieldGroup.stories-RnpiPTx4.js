import{r as n,j as i}from"./iframe-BNLLeI2Q.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Jy_3yuUw.js";import{CheckboxStory as c}from"./Checkbox.stories-CVt8dBBA.js";import d from"./Help.stories-B2OWwy3a.js";import k from"./RadioButton.stories-Bjgxhy4C.js";import{RadioPanel as u}from"./RadioPanel.stories-CElP37w3.js";import{F as g}from"./FieldGroup-CeavsZV-.js";import{C as h}from"./Checkbox-DHSu_eQP.js";import{R as b}from"./RadioPanel-DUdS_Yha.js";import{H as x}from"./Help-CjmL34J0.js";import{R as C}from"./RadioButton-PlntGqfF.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CTdB5QdD.js";import"./clsx-B-dksMZM.js";import"./Flex-D0Jvg7Tq.js";import"./SlotComponent-D8xNZ-21.js";import"./mergeRefs-BEQTiVYf.js";import"./Button-BX0Myvzq.js";import"./usePreviousValue-Ds7-Yqad.js";import"./Loader-D1ee-sQn.js";import"./useDelayedRender-gnodWg6M.js";import"./useId-SG3cudKF.js";import"./Label-Dtd_t9YQ.js";import"./SupportLabel-C3Dei40O.js";import"./SuccessIcon-C9bHzhjX.js";import"./Icon-Dd9zFDph.js";import"./WarningIcon-CXzlr4oB.js";import"./BaseRadioButton.stories-BGI5ZfU8.js";import"./BaseRadioButton-BVfXCkmh.js";import"./Title-Detw7aFk.js";import"./Card-BG2j7A8n.js";import"./Text-BMAhrNm1.js";import"./Tag-BN_YWV-3.js";import"./ExpandablePanel-C3U0lMF_.js";import"./useAnimatedHeightBetween-q24D2ZkL.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D7dksoA4.js";import"./Expander-WVr-ckv2.js";import"./ChevronUpIcon-CxL1FfFt.js";import"./ListItem-CYFAg2c3.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
