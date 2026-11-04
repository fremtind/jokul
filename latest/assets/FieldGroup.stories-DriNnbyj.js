import{r as n,j as i}from"./iframe-CIUUJJXo.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BpoIKBwR.js";import{CheckboxStory as c}from"./Checkbox.stories-Dz9IW1Ow.js";import d from"./Help.stories-fXSufwS2.js";import k from"./RadioButton.stories-BxNMaEtr.js";import{RadioPanel as u}from"./RadioPanel.stories-DANOrnqj.js";import{F as g}from"./FieldGroup-ChCHRc82.js";import{C as h}from"./Checkbox-DXh2M8I5.js";import{R as b}from"./RadioPanel-ByI4FjRO.js";import{H as x}from"./Help-DWCVhSN2.js";import{R as C}from"./RadioButton-CbqfGPoR.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-eUxHm6hQ.js";import"./clsx-B-dksMZM.js";import"./Flex-B4EHIwsh.js";import"./SlotComponent-BXvHzwah.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BoDcuFjb.js";import"./usePreviousValue-cZH3WQ2W.js";import"./Loader-BGXF-lea.js";import"./useDelayedRender-fquxJL1E.js";import"./useId-D8hxvGSL.js";import"./Label-D0fCY3zJ.js";import"./SupportLabel-D_ZNFvkX.js";import"./SuccessIcon-q11fxUSJ.js";import"./Icon-Bz-V4c_Z.js";import"./WarningIcon-Bu4BiOBR.js";import"./BaseRadioButton.stories-BOAIgxQu.js";import"./BaseRadioButton-B6XNfXhU.js";import"./Title-QWTZ0Oqc.js";import"./Card-BYvxxEXW.js";import"./Text-OayaLZ2W.js";import"./Tag-C9o5Sgt6.js";import"./ExpandablePanel-BSBbO3jn.js";import"./useAnimatedHeightBetween-BGMH705G.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-uVL7ZIgN.js";import"./Expander-Dg0fw8PR.js";import"./ChevronUpIcon-CpSyNY8y.js";import"./ListItem-DN_H5Gy3.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
