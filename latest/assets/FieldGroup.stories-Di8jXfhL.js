import{r as n,j as i}from"./iframe-CetG-oL2.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Pi_SrYwR.js";import{CheckboxStory as c}from"./Checkbox.stories-Dr53WX73.js";import d from"./Help.stories-C_gIEoXH.js";import k from"./RadioButton.stories-DMeJsc0a.js";import{RadioPanel as u}from"./RadioPanel.stories-fc34JsYW.js";import{F as g}from"./FieldGroup-DQsdH8cU.js";import{C as h}from"./Checkbox-CPtRdLpZ.js";import{R as b}from"./RadioPanel-B0cG_KKX.js";import{H as x}from"./Help-C1YyiIVl.js";import{R as C}from"./RadioButton-DZpu1YvE.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DMshVmnq.js";import"./clsx-B-dksMZM.js";import"./Flex-DY_P_WR-.js";import"./SlotComponent-r3gGKljf.js";import"./mergeRefs-D4Wbo9Iy.js";import"./Button-DWTVd3Dr.js";import"./usePreviousValue-ClTjmLm-.js";import"./Loader-pDsxSv4m.js";import"./useDelayedRender-D0kvpeh8.js";import"./useId-CoAx-v4p.js";import"./Label-B3qsxmMe.js";import"./SupportLabel-1RhHNd6r.js";import"./SuccessIcon-DbocgTOA.js";import"./Icon-BUSQt2z_.js";import"./WarningIcon-wDUI3aNi.js";import"./BaseRadioButton.stories-B5MQIO48.js";import"./BaseRadioButton-BfSxhDvQ.js";import"./Title-CAZK1h9e.js";import"./Card-CEIbq_So.js";import"./Text-BQV7bg2o.js";import"./Tag-Dm9q-8-k.js";import"./ExpandablePanel-BTv4ghN9.js";import"./useAnimatedHeightBetween-CsikI8Nd.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-kkNUTkR1.js";import"./Expander-BM5rGSPN.js";import"./ChevronUpIcon-BZGoj2pt.js";import"./ListItem-C881_bOy.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
