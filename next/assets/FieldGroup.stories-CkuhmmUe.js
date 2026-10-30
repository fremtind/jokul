import{r as n,j as i}from"./iframe-5ERKBJ40.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Ba3ckygb.js";import{CheckboxStory as c}from"./Checkbox.stories-B6ei43HF.js";import d from"./Help.stories-DFahtGRE.js";import k from"./RadioButton.stories-BQzKKbJN.js";import{RadioPanel as u}from"./RadioPanel.stories-CRDBzOJV.js";import{F as g}from"./FieldGroup-BSmlkfmV.js";import{C as h}from"./Checkbox-DPn7VdXO.js";import{R as b}from"./RadioPanel-DTsScxHV.js";import{H as x}from"./Help-v-cOeN0u.js";import{R as C}from"./RadioButton-BWubBshB.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C-0Exos8.js";import"./clsx-B-dksMZM.js";import"./Flex-B2PjP7Jc.js";import"./SlotComponent-L9km4BNG.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-RYTjL7CZ.js";import"./usePreviousValue-DuaVpP7N.js";import"./Loader-CsMEZqXS.js";import"./useDelayedRender-Bh_n8k8g.js";import"./useId-CJwWTVui.js";import"./Label-C_Q2IyCf.js";import"./SupportLabel-CIFf30_1.js";import"./SuccessIcon-B6LytoX1.js";import"./Icon-D5L3ZPM6.js";import"./WarningIcon-DyowYIY8.js";import"./BaseRadioButton.stories-C1bacdx6.js";import"./BaseRadioButton-61V-zmVb.js";import"./Title-DRy1_6dv.js";import"./Card-C8Ar7h1u.js";import"./Text-BYYl3p5d.js";import"./Tag-rPgbKeXB.js";import"./ExpandablePanel--5SSltXt.js";import"./useAnimatedHeightBetween-DkzSNiX0.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-mUQVVYno.js";import"./Expander-DY7Rmfx2.js";import"./ChevronUpIcon-CWZx9jZo.js";import"./ListItem-BVoG-Iuk.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
