import{r as p,j as i}from"./iframe-DTxfRTZy.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Cyu6Nt8L.js";import l from"./Help.stories-C4II81xD.js";import c from"./RadioButton.stories--KS0BJ5z.js";import{F as d}from"./FieldGroup-BoH5lPbS.js";import{C as k,a as u}from"./CheckboxPanel.stories-DT8PVbHB.js";import{RadioPanel as g}from"./RadioPanel.stories-fzk_fCQL.js";import{C as h}from"./Checkbox-BcgzU2Py.js";import{R as b}from"./RadioPanel-DJT8GdKr.js";import{H as x}from"./Help-CHl3eQ4K.js";import{R as C}from"./RadioButton-CWpOP3-5.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CeZ5wzul.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-D4a6uLra.js";import"./mergeRefs-BYwf-5Md.js";import"./BaseRadioButton.stories-B-7v6AQc.js";import"./BaseRadioButton-ea7GAOjm.js";import"./useId-CBOjEVUP.js";import"./Label-BY0NUgev.js";import"./SupportLabel-jmxeocZJ.js";import"./SuccessIcon-D-GvXWd_.js";import"./Icon-BAFclcxi.js";import"./WarningIcon-rusN-Bj4.js";import"./InputPanel-HNFVf6pj.js";import"./Button-6FZ2hkQG.js";import"./usePreviousValue-BDWq-ITC.js";import"./Loader-BHqonQ6b.js";import"./useDelayedRender-Bg-Tq4Cw.js";import"./Title-D7ohHjlT.js";import"./Card-DIXWx-rT.js";import"./Text-Pii3r3I8.js";import"./Tag-JiX8S6U1.js";import"./ExpandablePanel-D5-U0C5M.js";import"./useAnimatedHeightBetween-JmQUI7-Q.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DysMgub2.js";import"./Expander-DgVsIOkE.js";import"./ChevronDownIcon-ufpsCj0Y.js";import"./ChevronUpIcon-XzMWSd6w.js";import"./ListItem-DeUr2Yzy.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
