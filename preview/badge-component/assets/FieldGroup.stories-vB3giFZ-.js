import{r as n,j as i}from"./iframe-Bav4HC3l.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DmVFz8V1.js";import{CheckboxStory as c}from"./Checkbox.stories-Cu4_Zerv.js";import d from"./Help.stories-BvVTJ9Lj.js";import k from"./RadioButton.stories-C6e_jAg0.js";import{RadioPanel as u}from"./RadioPanel.stories-C3nWgLJC.js";import{F as g}from"./FieldGroup-CgUq2wYG.js";import{C as h}from"./Checkbox-DEiHvzlA.js";import{R as b}from"./RadioPanel-DE360iPu.js";import{H as x}from"./Help-CHR0YJxv.js";import{R as C}from"./RadioButton-8lREdRXs.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D-a9f3It.js";import"./clsx-B-dksMZM.js";import"./Flex-LsaT_WJr.js";import"./SlotComponent-GtQKzzE9.js";import"./mergeRefs-Bpne8jGt.js";import"./Button-Mcb1ETrx.js";import"./usePreviousValue-C1eIAl2w.js";import"./Loader-fHE-uvOh.js";import"./useDelayedRender-Csfahkh9.js";import"./useId-DhnIO5FX.js";import"./Label-1dw7PB-4.js";import"./SupportLabel-H0F_Ka00.js";import"./SuccessIcon-VrkUfdBu.js";import"./Icon-R-dxZmpt.js";import"./WarningIcon-Bg8BSOEf.js";import"./BaseRadioButton.stories-Bl8FhBPR.js";import"./BaseRadioButton-DRyGBzMx.js";import"./Title-DJCLd3E2.js";import"./Card-DinDUGmN.js";import"./Text-DjSxY5aL.js";import"./Tag-Km4CSV9Y.js";import"./ExpandablePanel-C5kqqrTg.js";import"./useAnimatedHeightBetween-CmrAU6QY.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CIq_YagN.js";import"./Expander-BZYSreDd.js";import"./ChevronUpIcon-CyZmEqWG.js";import"./ListItem-BPhd8cvu.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
