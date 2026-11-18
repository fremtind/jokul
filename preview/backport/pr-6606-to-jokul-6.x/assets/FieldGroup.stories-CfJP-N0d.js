import{r as p,j as i}from"./iframe-I-BB2Vre.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CTs3pBDo.js";import{CheckboxStory as c}from"./Checkbox.stories-BTx7dGE4.js";import d from"./Help.stories-gRRSDDLs.js";import k from"./RadioButton.stories-CfsmS0Ux.js";import{RadioPanel as u}from"./RadioPanel.stories-BBO9MBSs.js";import{F as g}from"./FieldGroup-D6fpKRMY.js";import{C as h}from"./Checkbox-lZNGiA2v.js";import{R as b}from"./RadioPanel-CK6pT7Zl.js";import{H as x}from"./Help-C4hqOv8f.js";import{R as C}from"./RadioButton-rIGzoQnM.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-GioOSRO-.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-352KxTcw.js";import"./SlotComponent-CdEqAzKM.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-C53M0H79.js";import"./usePreviousValue-DlSgo546.js";import"./Loader-CkWRV5V3.js";import"./useDelayedRender-DewyveI-.js";import"./useId-CDgEKytl.js";import"./Label-DJs_1aFX.js";import"./SupportLabel-BF0uSPfh.js";import"./SuccessIcon-D8UuHnOe.js";import"./Icon-CgIPxfMF.js";import"./WarningIcon-xzD93k8l.js";import"./BaseRadioButton.stories-SqNVrri1.js";import"./BaseRadioButton-MFk53pVK.js";import"./Title-BwKsSykU.js";import"./Card-DRnIh0wo.js";import"./Text-BaiCzWFu.js";import"./Tag-xoULQeRg.js";import"./ExpandablePanel-C-1N7v_Y.js";import"./useAnimatedHeightBetween-alV6B6PM.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CbfPIxrO.js";import"./Expander-BrfyGX9Y.js";import"./ChevronUpIcon-DJ-JgggZ.js";import"./ListItem--1KlrT1j.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
