import{r as n,j as i}from"./iframe-C0Y3wDi7.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-wMqzCcpM.js";import{CheckboxStory as c}from"./Checkbox.stories-ARgzpHqe.js";import d from"./Help.stories-8ppd3fb_.js";import k from"./RadioButton.stories-Xr7XHatb.js";import{RadioPanel as u}from"./RadioPanel.stories-BMc5e_Ae.js";import{F as g}from"./FieldGroup-6RGKZePZ.js";import{C as h}from"./Checkbox-4nJB5Dhr.js";import{R as b}from"./RadioPanel-zMozWGDc.js";import{H as x}from"./Help-CcFQ2gKs.js";import{R as C}from"./RadioButton-BVDeYcyo.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DkHgHjxj.js";import"./clsx-B-dksMZM.js";import"./Flex-CSX-uLWZ.js";import"./SlotComponent-98n-jNbl.js";import"./mergeRefs-B2XQxXrA.js";import"./Button-BiZnIxWg.js";import"./usePreviousValue-QBpXuitz.js";import"./Loader-B9LEv4j-.js";import"./useDelayedRender-CGH0l5Yp.js";import"./useId-BIT4_iZo.js";import"./Label-Dg5qriYV.js";import"./SupportLabel-Dr52jW1z.js";import"./SuccessIcon-fZcXy8Dn.js";import"./Icon-4PG1SCb5.js";import"./WarningIcon-pwXlUoGO.js";import"./BaseRadioButton.stories-BvNHJgvx.js";import"./BaseRadioButton-B_snwjrs.js";import"./Title-9Mwq8PkY.js";import"./Card-CN8f1okb.js";import"./Text-5GOkSThw.js";import"./Tag-BEt9-ptX.js";import"./ExpandablePanel-CgSvEtjU.js";import"./useAnimatedHeightBetween-CxqU92e7.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DG8kGfYd.js";import"./Expander-CGEJMxNR.js";import"./ChevronUpIcon-x1g5Q8qI.js";import"./ListItem-CAivnTWI.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
