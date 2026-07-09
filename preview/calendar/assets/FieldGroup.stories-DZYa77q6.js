import{r as p,j as i}from"./iframe-Dc2kjKK-.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-ChG8-5Z5.js";import l from"./Help.stories-BfhzugYr.js";import c from"./RadioButton.stories-DpmTqwlX.js";import{F as d}from"./FieldGroup-Dl7ppBzC.js";import{C as k,a as u}from"./CheckboxPanel.stories-BXlQ6xrr.js";import{RadioPanel as g}from"./RadioPanel.stories-DEJwy9uT.js";import{C as h}from"./Checkbox-C-ChJdki.js";import{R as b}from"./RadioPanel-E0cb3Tj0.js";import{H as x}from"./Help-QEGdRUdC.js";import{R as C}from"./RadioButton-M-zIRKpu.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BppEsjqo.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DHtUYKKR.js";import"./mergeRefs-B6SKyNpw.js";import"./BaseRadioButton.stories-DM7QBADB.js";import"./BaseRadioButton-qq0Bs48L.js";import"./useId-C5i7PY8g.js";import"./Label-BhH25iZK.js";import"./SupportLabel-_aBcKD1c.js";import"./SuccessIcon-D6nB7358.js";import"./Icon-CAefYHXa.js";import"./WarningIcon-K0F3TNRu.js";import"./InputPanel-CjGWGMmv.js";import"./Button-C0ND28zq.js";import"./usePreviousValue-CuF9AuPf.js";import"./Loader-uOAETmyd.js";import"./useDelayedRender-KXq32TYo.js";import"./Title-y83p6fio.js";import"./Card-CBXEUs4T.js";import"./Text-RXoXQEIu.js";import"./Tag-Dv21UOVp.js";import"./ExpandablePanel-6zw07cyX.js";import"./useAnimatedHeightBetween-B_mWtL0C.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Wj0FgIpE.js";import"./Expander-DIGDhLxx.js";import"./ChevronDownIcon-DuCTazkm.js";import"./ChevronUpIcon-RNtVDEDQ.js";import"./ListItem-B0_51xfa.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
