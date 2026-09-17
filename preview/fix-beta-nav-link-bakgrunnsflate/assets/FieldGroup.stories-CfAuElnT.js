import{r as n,j as i}from"./iframe-Df0WoxEb.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BoSCnPVT.js";import{CheckboxStory as c}from"./Checkbox.stories-CyAvyVmA.js";import d from"./Help.stories-DxS-6ci8.js";import k from"./RadioButton.stories-C9t9tkSX.js";import{RadioPanel as u}from"./RadioPanel.stories-D9TDYgAI.js";import{F as g}from"./FieldGroup-CjFYQJNn.js";import{C as h}from"./Checkbox-kRRdEf64.js";import{R as b}from"./RadioPanel-CH5i8nwI.js";import{H as x}from"./Help-DGzixLNu.js";import{R as C}from"./RadioButton-MmrseKlZ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D3r2jRgG.js";import"./clsx-B-dksMZM.js";import"./Flex-Ddk7vrj4.js";import"./SlotComponent-DaN2v_Um.js";import"./mergeRefs-BF6_YvgP.js";import"./Button-C3XdJwD6.js";import"./usePreviousValue-CUdtqOlY.js";import"./Loader-DMUjPhkT.js";import"./useDelayedRender-Da8iRlsE.js";import"./useId-DouWwT9e.js";import"./Label-QC-494Ye.js";import"./SupportLabel-aAzmmvy1.js";import"./SuccessIcon-CmRMfRMs.js";import"./Icon-C7AKMIm4.js";import"./WarningIcon-D53WkteZ.js";import"./BaseRadioButton.stories-vdEj8po8.js";import"./BaseRadioButton-D098ZuID.js";import"./Title-DbYHWZ_0.js";import"./Card-D8VNY2MZ.js";import"./Text-D2iNMRX9.js";import"./Tag-CvsJsetP.js";import"./ExpandablePanel-CujHTdRM.js";import"./useAnimatedHeightBetween-DuYh-1V1.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DW1c7grk.js";import"./Expander-hVJfsNRn.js";import"./ChevronUpIcon-CUlLpflj.js";import"./ListItem-C_XnsHWd.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
