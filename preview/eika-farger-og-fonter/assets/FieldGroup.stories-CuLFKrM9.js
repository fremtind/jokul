import{r as n,j as i}from"./iframe-DVw23Bpy.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-40T8Z3nL.js";import{CheckboxStory as c}from"./Checkbox.stories-Clmn0Qyp.js";import d from"./Help.stories-CP7BsbUu.js";import k from"./RadioButton.stories-DnV5boiZ.js";import{RadioPanel as u}from"./RadioPanel.stories-DHW8KFUN.js";import{F as g}from"./FieldGroup-qZQweBPB.js";import{C as h}from"./Checkbox-CC4lHcis.js";import{R as b}from"./RadioPanel-CIpSToD2.js";import{H as x}from"./Help-C_8OGV4f.js";import{R as C}from"./RadioButton-CRalYC_A.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-zapliVLz.js";import"./clsx-B-dksMZM.js";import"./Flex-5teROPSG.js";import"./SlotComponent-CuIk7Vvi.js";import"./mergeRefs-C6pK9vUt.js";import"./Button-DXRTmRrO.js";import"./usePreviousValue-BqdSzGtf.js";import"./Loader-BtaW_8Pr.js";import"./useDelayedRender-CuDIfga-.js";import"./useId-D9wEgd3a.js";import"./Label-CJWbEyQv.js";import"./SupportLabel-ZEai9G4L.js";import"./SuccessIcon-BpgUHIm3.js";import"./Icon-1KZG5T_k.js";import"./WarningIcon-D9DvQy3A.js";import"./BaseRadioButton.stories-8F2fq4EL.js";import"./BaseRadioButton-DD8cEuwk.js";import"./Title-w97GtK2c.js";import"./Card-BCl_SPjn.js";import"./Text-BTz8oCij.js";import"./Tag-BqXDh9MM.js";import"./ExpandablePanel-BjNscPaC.js";import"./useAnimatedHeightBetween-Bv_RzJV0.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-emWYSgCr.js";import"./Expander-NQiipSKI.js";import"./ChevronUpIcon-DOHwksoK.js";import"./ListItem-m4iAEq0O.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
