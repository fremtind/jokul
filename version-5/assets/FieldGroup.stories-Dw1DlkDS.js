import{r as p,j as i}from"./iframe-CWO8LAu6.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Ccasl0gT.js";import{CheckboxStory as c}from"./Checkbox.stories-tf-sDCbd.js";import d from"./Help.stories-Dpj91PG0.js";import k from"./RadioButton.stories-C7asjEh0.js";import{RadioPanel as u}from"./RadioPanel.stories-BZ-XXXsw.js";import{F as g}from"./FieldGroup-DBZRWWj2.js";import{C as h}from"./Checkbox-C_80LhiD.js";import{R as b}from"./RadioPanel-CEivZduP.js";import{H as x}from"./Help-smk_M7RT.js";import{R as C}from"./RadioButton-QeFlrjKx.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Dqqh_KB4.js";import"./clsx-B-dksMZM.js";import"./Flex-C8DuztoV.js";import"./SlotComponent-mMvxlz_U.js";import"./mergeRefs-DsEWa3o0.js";import"./Button-CyAm1gza.js";import"./usePreviousValue-C5qMT8Wf.js";import"./Loader-KjLiFWmo.js";import"./useDelayedRender-BZ43dale.js";import"./BaseRadioButton.stories-DNnZihMX.js";import"./BaseRadioButton-akaJQT-E.js";import"./useId-BRSTwzyI.js";import"./Title-Cw8jFPyq.js";import"./Card-2FqeYyF8.js";import"./Text-D1N32F9H.js";import"./Tag-BjllzeLb.js";import"./ExpandablePanel-Dhvl3abp.js";import"./useAnimatedHeightBetween-D1c0rG6L.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CDtaCY2U.js";import"./Expander-B6-hCzhR.js";import"./ChevronDownIcon-C-B5YlK2.js";import"./Icon-PVJXW3mo.js";import"./ChevronUpIcon-Be1Rr8sd.js";import"./ListItem-Bctm3-M_.js";import"./Label-Bf9u2-Tw.js";import"./SupportLabel-Dze2zFY6.js";import"./SuccessIcon-37aG6eH8.js";import"./WarningIcon-DDpqi8k2.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
