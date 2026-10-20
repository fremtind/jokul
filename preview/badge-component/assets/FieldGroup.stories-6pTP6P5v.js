import{r as n,j as i}from"./iframe--IbQLLfs.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-su8MDseh.js";import{CheckboxStory as c}from"./Checkbox.stories-D1udEQ8Y.js";import d from"./Help.stories--vk9enbI.js";import k from"./RadioButton.stories-DlmyM6kv.js";import{RadioPanel as u}from"./RadioPanel.stories-35OfHz3s.js";import{F as g}from"./FieldGroup-BSwBDdYe.js";import{C as h}from"./Checkbox-CcmssxBG.js";import{R as b}from"./RadioPanel-BI28IK6j.js";import{H as x}from"./Help-DyMcy-dA.js";import{R as C}from"./RadioButton-CW6ybf68.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Vn6_sc5h.js";import"./clsx-B-dksMZM.js";import"./Flex-B0mBHPL9.js";import"./SlotComponent-B2EKPTvB.js";import"./mergeRefs-C5kqJ57D.js";import"./Button-B2ASzhZ8.js";import"./usePreviousValue-KJQ9NLy9.js";import"./Loader-CJofSoJm.js";import"./useDelayedRender-GzQNoP0C.js";import"./useId-DNQbD1bB.js";import"./Label-BB_Vk8H1.js";import"./SupportLabel-qNOnqW6o.js";import"./SuccessIcon-C5g-_u-P.js";import"./Icon-D0ZC9qNb.js";import"./WarningIcon-B-lIFyxC.js";import"./BaseRadioButton.stories-cd7KtMLH.js";import"./BaseRadioButton-Bp6VCFR1.js";import"./Title-C-ojDDHy.js";import"./Card-DbhyRH3p.js";import"./Text-HXtzl4eJ.js";import"./Tag-CTzWudbN.js";import"./ExpandablePanel-hyfHxfxA.js";import"./useAnimatedHeightBetween-CPI7nzaP.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Dz1Jb42v.js";import"./Expander-DQ80mIr1.js";import"./ChevronUpIcon-CnE-_LJO.js";import"./ListItem-9m-06c4X.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
