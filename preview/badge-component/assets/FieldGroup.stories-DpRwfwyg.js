import{r as n,j as i}from"./iframe-B-UjQuhJ.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CiPAsCRF.js";import{CheckboxStory as c}from"./Checkbox.stories-BaMeughn.js";import d from"./Help.stories-DIxx_zIg.js";import k from"./RadioButton.stories-B-7VtPGh.js";import{RadioPanel as u}from"./RadioPanel.stories-CAb-H2sy.js";import{F as g}from"./FieldGroup-BBdfjwur.js";import{C as h}from"./Checkbox-EeLC0tmV.js";import{R as b}from"./RadioPanel-kA5PYqQE.js";import{H as x}from"./Help-Dxn-I75_.js";import{R as C}from"./RadioButton-GlBa5460.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-nHGOM-9_.js";import"./clsx-B-dksMZM.js";import"./Flex-81ZKl9R6.js";import"./SlotComponent-CBu_b_W9.js";import"./mergeRefs-BB5zWPup.js";import"./Button-SMl9zNW-.js";import"./usePreviousValue-uJfy6ZWX.js";import"./Loader-CtjVDR35.js";import"./useDelayedRender-CQxkHvbV.js";import"./useId-0LmDlIVi.js";import"./Label-BVSCnK46.js";import"./SupportLabel-BLn64RbC.js";import"./SuccessIcon-By2MiPw4.js";import"./Icon-B-LejGBf.js";import"./WarningIcon-CuVoc21o.js";import"./BaseRadioButton.stories-BkvZLc4b.js";import"./BaseRadioButton-SRBagx0i.js";import"./Title-BClxI5V0.js";import"./Card-CIToGJLv.js";import"./Text-0kIjK-VJ.js";import"./Tag-BgXljpkS.js";import"./ExpandablePanel-egVWcLU2.js";import"./useAnimatedHeightBetween-cSv5QTfW.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D5hmdc7U.js";import"./Expander-2aC8Eogq.js";import"./ChevronUpIcon-Bjgj1NSw.js";import"./ListItem-gk1-iXSM.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
