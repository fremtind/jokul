import{r as p,j as i}from"./iframe-CVDJJb3e.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BBZ7RYpj.js";import l from"./Help.stories-CLjyBzy3.js";import c from"./RadioButton.stories-BhlPN9iy.js";import{F as d}from"./FieldGroup-BqWh2_5n.js";import{C as k,a as u}from"./CheckboxPanel.stories-CkEJ97rr.js";import{RadioPanel as g}from"./RadioPanel.stories-DgzqOqX4.js";import{C as h}from"./Checkbox-CTwpSqaH.js";import{R as b}from"./RadioPanel-DTB1gUMp.js";import{H as x}from"./Help-Cc-1nqm3.js";import{R as C}from"./RadioButton-DUTgc5IE.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-Bok-_2Op.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-Cv7Ti1rW.js";import"./mergeRefs-Cata5QON.js";import"./BaseRadioButton.stories-B3q35_to.js";import"./BaseRadioButton-Cni3ypDG.js";import"./useId-BYKzAVIG.js";import"./Label-DwzQUDzu.js";import"./SupportLabel-CVl54pHN.js";import"./SuccessIcon-6p6Y80z_.js";import"./Icon-DuZ98Q96.js";import"./WarningIcon-BrSez6eY.js";import"./InputPanel-CWwuLiBf.js";import"./Button-OKv5LeQv.js";import"./usePreviousValue-BmscJrY7.js";import"./Loader-z-w6XNHy.js";import"./useDelayedRender-7ikRJUW_.js";import"./Title-CvpjxMcI.js";import"./Card-WlqltMO0.js";import"./Text-BKDbjbq1.js";import"./Tag-eM2fRFu-.js";import"./ExpandablePanel-DsobuG0f.js";import"./useAnimatedHeightBetween-iCR1HB80.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CfJRCfYL.js";import"./Expander-CT2qLd5y.js";import"./ChevronDownIcon-4CrkHiOD.js";import"./ChevronUpIcon-U-4rC2K-.js";import"./ListItem-BnccmuGB.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
