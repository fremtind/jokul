import{r as p,j as i}from"./iframe-C7JtmNjI.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DeZq7ksp.js";import l from"./Help.stories-CD2UXLHz.js";import c from"./RadioButton.stories-CY4I33SC.js";import{F as d}from"./FieldGroup-B8n0RYZf.js";import{C as k,a as u}from"./CheckboxPanel.stories-OV-eNkjs.js";import{RadioPanel as g}from"./RadioPanel.stories-C-aS3KAs.js";import{C as h}from"./Checkbox-DeVNNPSy.js";import{R as b}from"./RadioPanel-CblVQ7I9.js";import{H as x}from"./Help-CM9FKLX_.js";import{R as C}from"./RadioButton-CTFTL41x.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CHYXUWzg.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-C-yQDUCc.js";import"./mergeRefs-RjMaoQwM.js";import"./BaseRadioButton.stories-DsSTS9Sp.js";import"./BaseRadioButton-CqYfX-ED.js";import"./useId-CS9Tv6Mb.js";import"./Label-BW3whWWF.js";import"./SupportLabel-DcAQj_fV.js";import"./SuccessIcon-437Q59-v.js";import"./Icon-BwlU2V2q.js";import"./WarningIcon-sVKsCHzA.js";import"./InputPanel-Ba6ILqSt.js";import"./Button-Cnib3Fjp.js";import"./usePreviousValue-CZ4k7EBK.js";import"./Loader-SsyxUECd.js";import"./useDelayedRender-DTJMl0oq.js";import"./Title-Ccx7oReg.js";import"./Card-Bqz-Y0G9.js";import"./Text-DsmfEPcP.js";import"./Tag-YBTMj_Lk.js";import"./ExpandablePanel-CSaHKb3B.js";import"./useAnimatedHeightBetween-2x9a5ne-.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BrTHPA0T.js";import"./Expander-BpIYyoHl.js";import"./ChevronUpIcon-B6cJ0edi.js";import"./ListItem-B_bQT0BY.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
