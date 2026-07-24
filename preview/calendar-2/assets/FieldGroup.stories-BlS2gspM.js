import{r as p,j as i}from"./iframe-CRj1-ffI.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DuXxhJ_Z.js";import l from"./Help.stories-CXSRa3jg.js";import c from"./RadioButton.stories-DeIjdul3.js";import{F as d}from"./FieldGroup-D8uem-4V.js";import{C as k,a as u}from"./CheckboxPanel.stories-D6mdN73f.js";import{RadioPanel as g}from"./RadioPanel.stories-Bv695l4a.js";import{C as h}from"./Checkbox-CAYSZBec.js";import{R as b}from"./RadioPanel-Bi4kebV1.js";import{H as x}from"./Help-DS3R2Tw4.js";import{R as C}from"./RadioButton-zohCBrk4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BQjP9cWe.js";import"./Label-lOk_nmdg.js";import"./SupportLabel-E9Ja3xKn.js";import"./SuccessIcon-C1xxEch7.js";import"./Icon-BmKMr4vt.js";import"./WarningIcon-DZdjRWSf.js";/* empty css               *//* empty css               */import"./Flex-CWz5qz5A.js";import"./SlotComponent-CauhzHOh.js";import"./mergeRefs-CgQ5otvs.js";import"./BaseRadioButton.stories-DFJZpQyR.js";import"./BaseRadioButton-DsUA3tnr.js";import"./InputPanel-D5Gsvylb.js";import"./Button-Dq5t0A7V.js";import"./usePreviousValue-B7q70Bq-.js";import"./Loader-BI0k4B64.js";import"./useDelayedRender-oAuYTB9m.js";import"./Title-DTWTnpLO.js";import"./Card-C8d--aht.js";import"./Text-C-yQkIy6.js";import"./Tag-DbSc7noe.js";import"./ExpandablePanel-BEP0jIDW.js";import"./useAnimatedHeightBetween-2mWq9xTr.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BuJd2w6z.js";import"./Expander-X72MatkZ.js";import"./ChevronUpIcon-BP4DEPpZ.js";import"./ListItem-Cvqm0OZc.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
