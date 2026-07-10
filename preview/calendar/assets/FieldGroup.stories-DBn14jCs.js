import{r as p,j as i}from"./iframe-J5P2if7y.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-sPo9Pfyo.js";import l from"./Help.stories-BaGKMmau.js";import c from"./RadioButton.stories-CYQZGnMW.js";import{F as d}from"./FieldGroup-D4DX6W8K.js";import{C as k,a as u}from"./CheckboxPanel.stories-8nroYr0a.js";import{RadioPanel as g}from"./RadioPanel.stories-XwnEMKWq.js";import{C as h}from"./Checkbox-Cs_x8ssw.js";import{R as b}from"./RadioPanel-7otbFCmp.js";import{H as x}from"./Help-B69uOQtp.js";import{R as C}from"./RadioButton-CEa3cKkz.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-EkEDpIrg.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DaqFw01Y.js";import"./mergeRefs-DMUnnB7e.js";import"./BaseRadioButton.stories-Cp8PK7-I.js";import"./BaseRadioButton-B-ypMFs6.js";import"./useId-kJvRUQxG.js";import"./Label-CsKMFG-v.js";import"./SupportLabel-BxrzwFfC.js";import"./SuccessIcon-EFls_PPQ.js";import"./Icon-mdsbUTB8.js";import"./WarningIcon-x-lCg_7k.js";import"./InputPanel-BsrIj6QC.js";import"./Button-Cx2T-0mQ.js";import"./usePreviousValue-Cs2hfHh_.js";import"./Loader-EnGfOLAr.js";import"./useDelayedRender-BvoNaKAS.js";import"./Title-B0JP7kN8.js";import"./Card-CIR7-194.js";import"./Text-BZAt7pzI.js";import"./Tag-wNXTT1b2.js";import"./ExpandablePanel-B_q3VP5K.js";import"./useAnimatedHeightBetween-8llchSD2.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DI0MGg7I.js";import"./Expander-Bf0yO_wa.js";import"./ChevronDownIcon-CP5Z9feb.js";import"./ChevronUpIcon-CimFUq1p.js";import"./ListItem-kFZh_97n.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
