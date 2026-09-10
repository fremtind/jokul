import{r as n,j as i}from"./iframe-CKb8jtkH.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-B6yroywq.js";import{CheckboxStory as c}from"./Checkbox.stories-9lOGFnOG.js";import d from"./Help.stories-CsPBj-TG.js";import k from"./RadioButton.stories-Cfj3o_qc.js";import{RadioPanel as u}from"./RadioPanel.stories-B58J1lc5.js";import{F as g}from"./FieldGroup-DQ9WlTD8.js";import{C as h}from"./Checkbox-DC8mpHpO.js";import{R as b}from"./RadioPanel-BRwRELj_.js";import{H as x}from"./Help-BEO0VD5H.js";import{R as C}from"./RadioButton-Dm7stIc8.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-_ck7CX80.js";import"./clsx-B-dksMZM.js";import"./Flex-Bvagp3aO.js";import"./SlotComponent-n7XGx_Si.js";import"./mergeRefs-BUMdy8wj.js";import"./Button-2MVOuuEj.js";import"./usePreviousValue-BcleJ75O.js";import"./Loader-IJs8zTE3.js";import"./useDelayedRender-CkOdk1n-.js";import"./useId-D1NMkbYZ.js";import"./Label-CEYqNohw.js";import"./SupportLabel-B-HjUQ0c.js";import"./SuccessIcon-CALs40-r.js";import"./Icon-T4nN4hc8.js";import"./WarningIcon-B_U1G430.js";import"./BaseRadioButton.stories-BiyzkbAn.js";import"./BaseRadioButton-Ci5zTT6K.js";import"./Title-ymxFzQM4.js";import"./Card-CMhtHQWm.js";import"./Text-DSdDXCwW.js";import"./Tag-qm057aAG.js";import"./ExpandablePanel-biYOV0Ww.js";import"./useAnimatedHeightBetween-oC6QttNA.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BrSDqJQT.js";import"./Expander-BfJHPPGS.js";import"./ChevronUpIcon-DoMIBcUl.js";import"./ListItem-tRpxB5PT.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
