import{r as p,j as i}from"./iframe-Cd58-eiO.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-B698pQho.js";import{CheckboxStory as c}from"./Checkbox.stories-BayOl7dp.js";import d from"./Help.stories-F_ZY15Ml.js";import k from"./RadioButton.stories-B7FweZ6H.js";import{RadioPanel as u}from"./RadioPanel.stories-DCioelEq.js";import{F as g}from"./FieldGroup-BbQe26Mc.js";import{C as h}from"./Checkbox-CxAcMBIf.js";import{R as b}from"./RadioPanel-Cu3wJj2M.js";import{H as x}from"./Help-B4DhQEY8.js";import{R as C}from"./RadioButton-Cc4iXN7q.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CANw0w_T.js";import"./clsx-B-dksMZM.js";import"./types-IsTkoTmK.js";import"./Flex-BbNCUDDJ.js";import"./SlotComponent-CGELayE0.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-prACtpDr.js";import"./usePreviousValue-B57FAvp0.js";import"./Loader-DIIkvhnA.js";import"./useDelayedRender-CBSjPzx0.js";import"./BaseRadioButton.stories-Dm0edKWA.js";import"./BaseRadioButton-BEn1loy9.js";import"./useId-x49vx7R9.js";import"./Title-DI6MngMJ.js";import"./Card-CTRRbBu4.js";import"./Text-C_xIqh65.js";import"./Tag-0d31K16Q.js";import"./ExpandablePanel-D-hqyTPY.js";import"./useAnimatedHeightBetween-3QMe2bwJ.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Dei93gl0.js";import"./Expander-7FQpmN2H.js";import"./ChevronDownIcon-fk6EyYOt.js";import"./Icon-5Ollpz7g.js";import"./ChevronUpIcon-w_vSRsQF.js";import"./ListItem-C05f-OTZ.js";import"./Label-Dj74iRke.js";import"./SupportLabel-BAvqvobB.js";import"./SuccessIcon-BAJX7sQa.js";import"./WarningIcon-CZpWc3K5.js";const se={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
