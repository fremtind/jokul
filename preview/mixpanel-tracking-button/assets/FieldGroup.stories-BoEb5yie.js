import{r as n,j as i}from"./iframe-BPDBDSZd.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CDLJQZRc.js";import{CheckboxStory as c}from"./Checkbox.stories-oFpE7wZI.js";import d from"./Help.stories-zSvgg-Jx.js";import k from"./RadioButton.stories-oApTmctk.js";import{RadioPanel as u}from"./RadioPanel.stories-DHNBMukB.js";import{F as g}from"./FieldGroup-BCnkko5i.js";import{C as h}from"./Checkbox-Chn-BIx7.js";import{R as b}from"./RadioPanel-DzQlZWIS.js";import{H as x}from"./Help-D7CiSVTk.js";import{R as C}from"./RadioButton--QNJBwlG.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DzujB0yg.js";import"./clsx-B-dksMZM.js";import"./Flex-CuB7FlOE.js";import"./SlotComponent-nhhI2t7R.js";import"./mergeRefs-DeruHcJ6.js";import"./Button-B4VKDnUC.js";import"./usePreviousValue-C82w6f0n.js";import"./Loader--gk4K4B0.js";import"./useDelayedRender-CyiARD8C.js";import"./useId-VjG_-abN.js";import"./Label-CoLeSM6P.js";import"./SupportLabel-c09phDRK.js";import"./SuccessIcon-BoYUFLX5.js";import"./Icon-CTyq0hst.js";import"./WarningIcon-DnldtVax.js";import"./BaseRadioButton.stories-C8zzNHaa.js";import"./BaseRadioButton-DXag9LzA.js";import"./Title-Bks-UBRq.js";import"./Card-DCUBu4sL.js";import"./Text-B4Z3toJD.js";import"./Tag-CVRi1JH1.js";import"./ExpandablePanel-CyFGXxTF.js";import"./useAnimatedHeightBetween-C-b4nIn1.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-B_-E2XHB.js";import"./Expander-u1Q1Us1B.js";import"./ChevronUpIcon-CxCsT7Sj.js";import"./ListItem-CRcfPmd2.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
