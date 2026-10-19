import{r as p,j as i}from"./iframe-B7YbOLmq.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BSKChyk_.js";import{CheckboxStory as c}from"./Checkbox.stories-D66tpShT.js";import d from"./Help.stories-BRoY_IPV.js";import k from"./RadioButton.stories-CMMav5q-.js";import{RadioPanel as u}from"./RadioPanel.stories-B1z0mwbh.js";import{F as g}from"./FieldGroup-CaUbEMqq.js";import{C as h}from"./Checkbox-psxr4w7b.js";import{R as b}from"./RadioPanel-DSOHW2ai.js";import{H as x}from"./Help-KwSCeaA-.js";import{R as C}from"./RadioButton-RizfCRej.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C6ePToRe.js";import"./clsx-B-dksMZM.js";import"./Flex-BDQGUcZO.js";import"./SlotComponent-BNZF8zTB.js";import"./mergeRefs-DB2OtrdP.js";import"./Button-CEOI7Bp7.js";import"./usePreviousValue-D5Sj_4VA.js";import"./Loader-kTm51h2C.js";import"./useDelayedRender-B6rWnLsd.js";import"./BaseRadioButton.stories-CEeu7E0c.js";import"./BaseRadioButton-DRNHa2aC.js";import"./useId-7g_eJ4pF.js";import"./Title-BqJKmiAf.js";import"./Card-JpxuGoBI.js";import"./Text-oYcqrNaY.js";import"./Tag-ZKmD0eOP.js";import"./ExpandablePanel-DtovUPmJ.js";import"./useAnimatedHeightBetween-C71Mo4r0.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D9k4fJy7.js";import"./Expander-CMGAtI5k.js";import"./ChevronDownIcon-DDx2kDWA.js";import"./Icon-DsaVeY1m.js";import"./ChevronUpIcon-D0Wx27wB.js";import"./ListItem-Cr-4qurS.js";import"./Label-BKJo6GRF.js";import"./SupportLabel-D9QFVjEb.js";import"./SuccessIcon-7vp1nSDM.js";import"./WarningIcon-DVHa3IOD.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
