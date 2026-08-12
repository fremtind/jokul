import{r as p,j as i}from"./iframe-D0jGEvlt.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CabFxL-a.js";import l from"./Help.stories-0TJOREhd.js";import c from"./RadioButton.stories-DW52OpGO.js";import{F as d}from"./FieldGroup-CFnfgSlN.js";import{C as k,a as u}from"./CheckboxPanel.stories-jpyrM2Ql.js";import{RadioPanel as g}from"./RadioPanel.stories-CiRXQHK3.js";import{C as h}from"./Checkbox-iXmatKiF.js";import{R as b}from"./RadioPanel-DS-OEHkC.js";import{H as x}from"./Help-Cni0Qkiq.js";import{R as C}from"./RadioButton-CJDYuX3t.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-C2_p--Ah.js";import"./BaseRadioButton-C6Cf8CgB.js";import"./clsx-B-dksMZM.js";import"./useId-DQEuAQbV.js";import"./Label-CXgb4YC8.js";import"./SupportLabel-CELo4syA.js";import"./SuccessIcon-B15eQp0H.js";import"./Icon-BhmjRupB.js";import"./WarningIcon-x4yL-9lk.js";import"./InputPanel-CrwfYQ-D.js";import"./Flex-CmKK2ZAj.js";import"./SlotComponent-1EZLqoFD.js";import"./mergeRefs-D8AuGf56.js";import"./Button-DFpKOUrv.js";import"./usePreviousValue-BxIkCuXX.js";import"./Loader-Au8-qRJU.js";import"./useDelayedRender-BLeqD9XR.js";import"./Title-BeY6vkWT.js";import"./Card-BBt-VZM8.js";import"./Text-Cvsz_SiD.js";import"./Tag-DWFZjb1V.js";import"./ExpandablePanel-2JFVdenz.js";import"./useAnimatedHeightBetween-DNubj42P.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-wE9H0n2s.js";import"./Expander-Caq0fUB3.js";import"./ChevronDownIcon-d8g3zClH.js";import"./ChevronUpIcon-ByS-kP5n.js";import"./ListItem-ct61eA7J.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
