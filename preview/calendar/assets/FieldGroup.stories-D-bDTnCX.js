import{r as p,j as i}from"./iframe-B2lOZauQ.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-PBydbZXK.js";import l from"./Help.stories-AJQp4D2D.js";import c from"./RadioButton.stories-B6BOxgEk.js";import{F as d}from"./FieldGroup-kJyTXZQy.js";import{C as k,a as u}from"./CheckboxPanel.stories-B4qmZoJm.js";import{RadioPanel as g}from"./RadioPanel.stories-D6H9Yjfe.js";import{C as h}from"./Checkbox-D1LGN03B.js";import{R as b}from"./RadioPanel-CNnpFyl7.js";import{H as x}from"./Help-DPC7vxRV.js";import{R as C}from"./RadioButton-BryEx61g.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BC__6eVE.js";import"./Label-DNBbHM5O.js";import"./SupportLabel-CNpS_n6K.js";import"./SuccessIcon-GkqCxZdR.js";import"./Icon-Db_WgtSx.js";import"./WarningIcon-7nMnctV3.js";/* empty css               *//* empty css               */import"./Flex-C5Ard3S8.js";import"./SlotComponent-CB6VLCih.js";import"./mergeRefs-Bt-sykMs.js";import"./BaseRadioButton.stories-BY_WyyOL.js";import"./BaseRadioButton-CZJYbaq5.js";import"./InputPanel-CE4C2BxN.js";import"./Button-DRAu4IdJ.js";import"./usePreviousValue-iLJnM5G9.js";import"./Loader-HKep6OE_.js";import"./useDelayedRender-B92MaJNS.js";import"./Title-rjj0ugQK.js";import"./Card-j0BWJT2p.js";import"./Text-ZdEJg1un.js";import"./Tag-eL7Vmz6t.js";import"./ExpandablePanel-DnX3u_TP.js";import"./useAnimatedHeightBetween-DCBg9qOO.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CbFYvIu-.js";import"./Expander-C2oLkQXS.js";import"./ChevronDownIcon-CUBK2UG7.js";import"./ChevronUpIcon-CUIPpuam.js";import"./ListItem-XGizCimX.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
