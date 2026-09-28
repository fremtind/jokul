import{r as n,j as i}from"./iframe-CSFDz35V.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Bxv4ndl3.js";import{CheckboxStory as c}from"./Checkbox.stories-C7pi-b-J.js";import d from"./Help.stories-CTqLSVIW.js";import k from"./RadioButton.stories-BgPl1Hwa.js";import{RadioPanel as u}from"./RadioPanel.stories-yYDhp5yu.js";import{F as g}from"./FieldGroup-D3PJr0_3.js";import{C as h}from"./Checkbox-Bx4tZjpe.js";import{R as b}from"./RadioPanel-CaXA4uIL.js";import{H as x}from"./Help-c4z1TIw9.js";import{R as C}from"./RadioButton-D4rIIDUs.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CCqFLZ_U.js";import"./clsx-B-dksMZM.js";import"./Flex-BsI0VQ-v.js";import"./SlotComponent-CkcJJr5v.js";import"./mergeRefs-CjVobUrz.js";import"./Button-ZijnqR5Z.js";import"./usePreviousValue-iHmyt2f7.js";import"./Loader-Bf9kvkhd.js";import"./useDelayedRender-CAhs-a-Y.js";import"./useId--RQHs5zr.js";import"./Label-DjXHZUXt.js";import"./SupportLabel-D2_jTKy2.js";import"./SuccessIcon-C-En43sg.js";import"./Icon-9SP2x0UY.js";import"./WarningIcon-BRiZlgF_.js";import"./BaseRadioButton.stories-CCBCmNW1.js";import"./BaseRadioButton-Tu_XYzd4.js";import"./Title-CKjvj6iK.js";import"./Card-Da1alpk2.js";import"./Text-DVhiOGiu.js";import"./Tag-C2uh1uOs.js";import"./ExpandablePanel-lDI5YbG7.js";import"./useAnimatedHeightBetween-BAvan7C2.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-XE4OMD-d.js";import"./Expander-BBpw2wZW.js";import"./ChevronUpIcon-DXha8yZJ.js";import"./ListItem-52n588n-.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
