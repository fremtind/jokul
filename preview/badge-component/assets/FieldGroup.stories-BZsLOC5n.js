import{r as n,j as i}from"./iframe-Dj7Oz-ZB.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CxW7oLFY.js";import{CheckboxStory as c}from"./Checkbox.stories-BvTtyVVG.js";import d from"./Help.stories-BWS441gG.js";import k from"./RadioButton.stories-2jnYdExN.js";import{RadioPanel as u}from"./RadioPanel.stories-D8ThJzsW.js";import{F as g}from"./FieldGroup-BxvUUmCA.js";import{C as h}from"./Checkbox-C_UOFpal.js";import{R as b}from"./RadioPanel-Dyan__iY.js";import{H as x}from"./Help-Cr-C-uIi.js";import{R as C}from"./RadioButton-Dyq0uM00.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BgoqymKV.js";import"./clsx-B-dksMZM.js";import"./Flex-3q9aB6pe.js";import"./SlotComponent-2bepKKa0.js";import"./mergeRefs-BTshDoDX.js";import"./Button-sotX6fLU.js";import"./usePreviousValue-Da85HaMS.js";import"./Loader-TQpuS4yL.js";import"./useDelayedRender-Bf762hFH.js";import"./useId-UIpmHlGk.js";import"./Label-CxVSgVE_.js";import"./SupportLabel-CqOrzWpL.js";import"./SuccessIcon-C4xfIkdG.js";import"./Icon-Bu4yhsQZ.js";import"./WarningIcon-CokOg3dt.js";import"./BaseRadioButton.stories-jX5-x3SG.js";import"./BaseRadioButton-1J5kPLky.js";import"./Title-x8C-puhR.js";import"./Card-CoorNZoO.js";import"./Text-C4GPC42L.js";import"./Tag-CBakuaO-.js";import"./ExpandablePanel-CSiiOYIV.js";import"./useAnimatedHeightBetween-Dp33Kquv.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-rIcYPKlS.js";import"./Expander-Djw0i7bO.js";import"./ChevronUpIcon-HBG9tzBw.js";import"./ListItem-OLLfM6jj.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
