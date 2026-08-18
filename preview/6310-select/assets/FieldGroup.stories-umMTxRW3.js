import{r as p,j as i}from"./iframe-CymKDTpX.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-C4PlK5BU.js";import l from"./Help.stories-cn46uyyy.js";import c from"./RadioButton.stories-3dyNlJHW.js";import{F as d}from"./FieldGroup-wW7HqDZ6.js";import{C as k,a as u}from"./CheckboxPanel.stories-BBdKOlDS.js";import{RadioPanel as g}from"./RadioPanel.stories-BBX_JmRX.js";import{C as h}from"./Checkbox-LqlUwgrS.js";import{R as b}from"./RadioPanel-B5HgDA84.js";import{H as x}from"./Help-BAzI2ipS.js";import{R as C}from"./RadioButton-Dv6pDQqb.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-Cw2P2zpP.js";import"./BaseRadioButton-DYpIBoJK.js";import"./clsx-B-dksMZM.js";import"./useId-75Okue5l.js";import"./Label-k8cB8FTt.js";import"./SupportLabel-DvKKe89v.js";import"./SuccessIcon-nC2UDNE5.js";import"./Icon-Dwk9HSLK.js";import"./WarningIcon-BDz9MmxV.js";import"./InputPanel-CSxbOTZm.js";import"./Flex-lk8vKFKf.js";import"./SlotComponent-DwUgu_zp.js";import"./mergeRefs-Bwvb4aeE.js";import"./Button-_skm8iDb.js";import"./usePreviousValue-DzWuSg7n.js";import"./Loader-CuH8thVr.js";import"./useDelayedRender-NYquo3Uy.js";import"./Title-jTXqV2vL.js";import"./Card-B8vzeoUs.js";import"./Text-DUvFl6ex.js";import"./Tag-JKJprBJ0.js";import"./ExpandablePanel-Cl8A8imS.js";import"./useAnimatedHeightBetween-ZT92JWFz.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D9lrrpIZ.js";import"./Expander-DWKvN3oV.js";import"./ChevronDownIcon-B6VwyT2j.js";import"./ChevronUpIcon-QxOQxqh8.js";import"./ListItem-Bhl-BnmN.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
