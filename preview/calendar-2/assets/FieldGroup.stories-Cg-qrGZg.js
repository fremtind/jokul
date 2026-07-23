import{r as p,j as i}from"./iframe-B9kJZceo.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CJQqoArL.js";import l from"./Help.stories-BQbeaSiv.js";import c from"./RadioButton.stories-DFhEf55-.js";import{F as d}from"./FieldGroup-D-hz_BIj.js";import{C as k,a as u}from"./CheckboxPanel.stories-CZ6PM2s6.js";import{RadioPanel as g}from"./RadioPanel.stories-JuKep7ie.js";import{C as h}from"./Checkbox-CR7u6f4A.js";import{R as b}from"./RadioPanel-CH3raqlE.js";import{H as x}from"./Help-G6u5xr0w.js";import{R as C}from"./RadioButton-DCKcr9FV.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-L3KborQX.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BgdTKR5g.js";import"./mergeRefs-CReJslxz.js";import"./BaseRadioButton.stories-BdjqIzuT.js";import"./BaseRadioButton-JsVZ36e0.js";import"./useId-DSBbTZ7r.js";import"./Label-C5Yg6SgH.js";import"./SupportLabel-DVHOsnJ-.js";import"./SuccessIcon-bOMSkm-h.js";import"./Icon-C9KgRYQm.js";import"./WarningIcon-Cx1rEU8g.js";import"./InputPanel-Dov1HmHP.js";import"./Button-DfQpDe3z.js";import"./usePreviousValue-C0v6jYaT.js";import"./Loader-DT-35wtN.js";import"./useDelayedRender-BhZA4pXa.js";import"./Title-eyrQuSkY.js";import"./Card-qMW5JB_C.js";import"./Text-DQY6jcsN.js";import"./Tag-0mL3j-ix.js";import"./ExpandablePanel-YyEKESvi.js";import"./useAnimatedHeightBetween-Dh_6Acmz.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-C3jNV9c9.js";import"./Expander-DuuK-AJB.js";import"./ChevronUpIcon-CX2s46ke.js";import"./ListItem-CLPWplDV.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
