import{r as n,j as i}from"./iframe-DbQEf8U-.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BItzG0Cs.js";import{CheckboxStory as c}from"./Checkbox.stories-US8C_giL.js";import d from"./Help.stories-DmBnNz0e.js";import k from"./RadioButton.stories-BtqsCz42.js";import{RadioPanel as u}from"./RadioPanel.stories-N1v2Ob-1.js";import{F as g}from"./FieldGroup-WR-YZ3Ib.js";import{C as h}from"./Checkbox-UeIquwN8.js";import{R as b}from"./RadioPanel-IsU0WuFx.js";import{H as x}from"./Help-DEqk97Lz.js";import{R as C}from"./RadioButton-CXaAugPQ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-wDHUaLtJ.js";import"./clsx-B-dksMZM.js";import"./Flex-CcBtUVmG.js";import"./SlotComponent-lK4Dbwlc.js";import"./mergeRefs-Dv0sdAgS.js";import"./Button-Bb9Wy0xx.js";import"./usePreviousValue-Cd9vyFC3.js";import"./Loader-jdixdPLF.js";import"./useDelayedRender-B8G7LSiR.js";import"./useId-BHvuSJX4.js";import"./Label-DRv1HBm3.js";import"./SupportLabel-DLrksECA.js";import"./SuccessIcon-DWdLfxCe.js";import"./Icon-C3BOjqa_.js";import"./WarningIcon-BOGYRIY8.js";import"./BaseRadioButton.stories-sBFl8jMc.js";import"./BaseRadioButton-D9EFMAl5.js";import"./Title-BN46vY5u.js";import"./Card-D1Focf-M.js";import"./Text-CS4VUknE.js";import"./Tag-CMLe5wtc.js";import"./ExpandablePanel-Dwp-w2ur.js";import"./useAnimatedHeightBetween-CL72rKr-.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Dab91Cso.js";import"./Expander-jpRJZdqE.js";import"./ChevronUpIcon-BLy3fLCH.js";import"./ListItem-Cn0vqZmN.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
