import{r as p,j as i}from"./iframe-CKmQBEjB.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Di3mzuzF.js";import l from"./Help.stories-BXO9VJnr.js";import c from"./RadioButton.stories-CV0vQlil.js";import{F as d}from"./FieldGroup-Co5HMpvg.js";import{C as k,a as u}from"./CheckboxPanel.stories-DnhGGS55.js";import{RadioPanel as g}from"./RadioPanel.stories-Bnl4RM_L.js";import{C as h}from"./Checkbox-DDtQjqVx.js";import{R as b}from"./RadioPanel-ClYAU1WS.js";import{H as x}from"./Help-Dee-Jux1.js";import{R as C}from"./RadioButton-D3IRxOa3.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-DvESgkVZ.js";import"./BaseRadioButton-Dr073qjS.js";import"./clsx-B-dksMZM.js";import"./useId-CDRZ6Tc5.js";import"./Label-BoagSWRN.js";import"./SupportLabel-fjS145tJ.js";import"./SuccessIcon-CsSSHxXg.js";import"./Icon-B6nTDKHB.js";import"./WarningIcon-bziuTbLO.js";import"./InputPanel-BzArDRtX.js";import"./Flex-D1Gg8_Yy.js";import"./SlotComponent-6R2PukI9.js";import"./mergeRefs-96iIho8X.js";import"./Button-CPT7MO5x.js";import"./usePreviousValue-hMfP7-5q.js";import"./Loader-uF05NLmK.js";import"./useDelayedRender-BQQtOFkZ.js";import"./Title-9ESOJTEO.js";import"./Card-B8MJHCRm.js";import"./Text-DKZD_MX4.js";import"./Tag-BoWWXr6F.js";import"./ExpandablePanel-CDj1WNb_.js";import"./useAnimatedHeightBetween-BLKo4Nsm.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Dqt9s0C8.js";import"./Expander-Dyhc7aEq.js";import"./ChevronDownIcon-DdTvYuhn.js";import"./ChevronUpIcon-VqWa49oq.js";import"./ListItem-B2A1aHJ6.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
