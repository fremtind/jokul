import{r as p,j as i}from"./iframe-DNjS8JFU.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Bna9K1q8.js";import{CheckboxStory as c}from"./Checkbox.stories-CeeDq1js.js";import d from"./Help.stories-Q4l9Jy2Y.js";import k from"./RadioButton.stories-CwrMHf-m.js";import{RadioPanel as u}from"./RadioPanel.stories-BLS042wE.js";import{F as g}from"./FieldGroup-BR9-Mn5o.js";import{C as h}from"./Checkbox-DWun9SfU.js";import{R as b}from"./RadioPanel-O_H7Q3CK.js";import{H as x}from"./Help-BghzFowG.js";import{R as C}from"./RadioButton-BvmKaX8t.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DnG-G8RW.js";import"./clsx-B-dksMZM.js";import"./Flex-Bwor1stX.js";import"./SlotComponent-DwcVCZr1.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BJZGbfbm.js";import"./usePreviousValue-CIfgcLs5.js";import"./Loader-bN04k8se.js";import"./useDelayedRender-BcCMhUQ-.js";import"./BaseRadioButton.stories-BRtIoLFh.js";import"./BaseRadioButton-B5NYthIf.js";import"./useId-DFIDdN6b.js";import"./Title-C1IiJ7Mr.js";import"./Card-NiSisVRh.js";import"./Text-BAswdbaR.js";import"./Tag-CylcwwaE.js";import"./ExpandablePanel-Dk9_TlwD.js";import"./useAnimatedHeightBetween-COMhBYC5.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BGPE13P0.js";import"./Expander-BNvzzvbT.js";import"./ChevronDownIcon--mIudGS1.js";import"./Icon-Hb5Bs6Oz.js";import"./ChevronUpIcon-CPoYc8sU.js";import"./ListItem-DE05EZLm.js";import"./Label-EzaiYtea.js";import"./SupportLabel-CByU4uHT.js";import"./SuccessIcon-NhbLYIwZ.js";import"./WarningIcon-BmkIGLQj.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
