import{r as p,j as i}from"./iframe-DHZS9f39.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BEPWKU3i.js";import{CheckboxStory as c}from"./Checkbox.stories-sxdLxFm-.js";import d from"./Help.stories-C6ZZAtVy.js";import k from"./RadioButton.stories-kPElr6mu.js";import{RadioPanel as u}from"./RadioPanel.stories-DnCZwDW7.js";import{F as g}from"./FieldGroup-3SNSqMPV.js";import{C as h}from"./Checkbox-CSkiFuKT.js";import{R as b}from"./RadioPanel-B5_lvqUE.js";import{H as x}from"./Help-Cgcjzkta.js";import{R as C}from"./RadioButton-BeujM1jh.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-B8QTAYQ7.js";import"./clsx-B-dksMZM.js";import"./types-IsTkoTmK.js";import"./Flex-B11hFvkV.js";import"./SlotComponent-CVors34f.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Dj90b7pq.js";import"./usePreviousValue-Dcdw4595.js";import"./Loader-CHcuxx3Z.js";import"./useDelayedRender-BnTfpg7c.js";import"./BaseRadioButton.stories-e7zGWwBN.js";import"./BaseRadioButton-CfYeCQhB.js";import"./useId-CNuc0XWP.js";import"./Title-Ca0_Rak2.js";import"./Card-DLoxCqy-.js";import"./Text-9kPieYd9.js";import"./Tag-CTE3hmjE.js";import"./ExpandablePanel-CN5ZcEKc.js";import"./useAnimatedHeightBetween-cV-GbHO5.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-l1Es0djp.js";import"./Expander-DC1jJnyq.js";import"./ChevronDownIcon-CPVXpndF.js";import"./Icon-Barr-cyp.js";import"./ChevronUpIcon-CBDEHnS7.js";import"./ListItem-D23nmrTC.js";import"./Label-i4GJCVcv.js";import"./SupportLabel-buCnpWH2.js";import"./SuccessIcon-CSgVft74.js";import"./WarningIcon-CSLpx5LU.js";const se={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
