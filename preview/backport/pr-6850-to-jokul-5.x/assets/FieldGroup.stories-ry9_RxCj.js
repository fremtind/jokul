import{r as p,j as i}from"./iframe-CNOaIv5I.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BLzNrl6J.js";import{CheckboxStory as c}from"./Checkbox.stories-DNyLt7hw.js";import d from"./Help.stories-B0r-tv4R.js";import k from"./RadioButton.stories-B1N98AxG.js";import{RadioPanel as u}from"./RadioPanel.stories-WoFs-jG1.js";import{F as g}from"./FieldGroup-Cp-FAJyD.js";import{C as h}from"./Checkbox-DjsxO3zK.js";import{R as b}from"./RadioPanel-CCxud3ev.js";import{H as x}from"./Help-BFJp2Prc.js";import{R as C}from"./RadioButton-I6ZElTUJ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D9LHk-N9.js";import"./clsx-B-dksMZM.js";import"./Flex-CI4nFz9h.js";import"./SlotComponent-B8HyiZme.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DSZJWTuV.js";import"./usePreviousValue-UGevyXVk.js";import"./Loader-D_3NC1pB.js";import"./useDelayedRender-DsPrkZKt.js";import"./BaseRadioButton.stories-EEikwdrz.js";import"./BaseRadioButton-BJSdDomP.js";import"./useId-DFoZw1m2.js";import"./Title-CAkunJXL.js";import"./Card-C5zWQLQA.js";import"./Text-Cxbm9r6a.js";import"./Tag-DiWBURLV.js";import"./ExpandablePanel-BVkve7aT.js";import"./useAnimatedHeightBetween-DOoFevS4.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BovDSDdd.js";import"./Expander-DyW50Hk5.js";import"./ChevronDownIcon-CNGmbQMj.js";import"./Icon-D7Sx2v3m.js";import"./ChevronUpIcon-Bw1ic7VK.js";import"./ListItem-BFOQFqtE.js";import"./Label-Ct6KU7fF.js";import"./SupportLabel-oJPX2yky.js";import"./SuccessIcon-CQmZuhq6.js";import"./WarningIcon-Drw0JFhN.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
