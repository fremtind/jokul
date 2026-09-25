import{r as p,j as i}from"./iframe-DfQU3pFC.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CpbVd0AL.js";import{CheckboxStory as c}from"./Checkbox.stories-DL-486y4.js";import d from"./Help.stories-C8VJ8BQo.js";import k from"./RadioButton.stories-DNiaigSA.js";import{RadioPanel as u}from"./RadioPanel.stories-oP3Ta7co.js";import{F as g}from"./FieldGroup-hciFdd_Z.js";import{C as h}from"./Checkbox-B5qYW9vV.js";import{R as b}from"./RadioPanel-BWywH3Wq.js";import{H as x}from"./Help-D0gNU68t.js";import{R as C}from"./RadioButton-sr5M5UXR.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-GSJVUCxU.js";import"./clsx-B-dksMZM.js";import"./Flex-hv-q7tK3.js";import"./SlotComponent-BangIyGz.js";import"./mergeRefs-CKwrSkYv.js";import"./Button-6u6xSrl3.js";import"./usePreviousValue-BVkXxQ4V.js";import"./serializeTracking-CnAc4iKu.js";import"./Loader-jV6QPgiS.js";import"./useDelayedRender-DZzZ11aQ.js";import"./useId-IpoVIjEZ.js";import"./Label-Y7nfBV5B.js";import"./SupportLabel-C1-u48DA.js";import"./SuccessIcon-DHc9mPOd.js";import"./Icon-UBvEbjd5.js";import"./WarningIcon-DUZD4RWo.js";import"./BaseRadioButton.stories-C8XJBrfP.js";import"./BaseRadioButton-2PUobWMp.js";import"./Title-Ca6FLGYv.js";import"./Card-CvKKOoBD.js";import"./Text-CM7brels.js";import"./Tag-CkEjCPmo.js";import"./ExpandablePanel-UhE7vxhL.js";import"./useAnimatedHeightBetween-DA1To1qg.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-B3eNFtJi.js";import"./Expander-BUTlh9Ei.js";import"./ChevronUpIcon-Dp0PvlnY.js";import"./ListItem-BkbsGvg6.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
