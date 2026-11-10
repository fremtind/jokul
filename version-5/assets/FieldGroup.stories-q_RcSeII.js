import{r as p,j as i}from"./iframe-CqeofNOX.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-nwCe49zu.js";import{CheckboxStory as c}from"./Checkbox.stories-DjfCa7Vl.js";import d from"./Help.stories-BjyDtNSG.js";import k from"./RadioButton.stories-DMEdqRh9.js";import{RadioPanel as u}from"./RadioPanel.stories-BeT1jMnX.js";import{F as g}from"./FieldGroup-9QLuMMYC.js";import{C as h}from"./Checkbox-eYIXAZnb.js";import{R as b}from"./RadioPanel-XgBjxM8L.js";import{H as x}from"./Help-CvBAi8Pz.js";import{R as C}from"./RadioButton-B4T5ICnD.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C0Eoiosi.js";import"./clsx-B-dksMZM.js";import"./Flex-BBJ828A0.js";import"./SlotComponent-K1Ty3wDf.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-a7oUGy0m.js";import"./usePreviousValue-DONnCEGZ.js";import"./Loader-CfPgrQnR.js";import"./useDelayedRender-myx4WftX.js";import"./BaseRadioButton.stories-DoBkV7up.js";import"./BaseRadioButton-B-n1CENL.js";import"./useId-CZgSTrZU.js";import"./Title-Cs10q6E7.js";import"./Card-CKCRYpoG.js";import"./Text-BPPeCOZk.js";import"./Tag-BEmfZWjz.js";import"./ExpandablePanel-EBVb0QMO.js";import"./useAnimatedHeightBetween-wlTZPN68.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-ByWMQ-bD.js";import"./Expander-CmeKWKW9.js";import"./ChevronDownIcon-BuOKLTkF.js";import"./Icon-BYKlNKBs.js";import"./ChevronUpIcon-nbEv3kML.js";import"./ListItem-CmPXIUaG.js";import"./Label-h3kahilT.js";import"./SupportLabel-CTpBcYDU.js";import"./SuccessIcon-Bf5Ifmkh.js";import"./WarningIcon-DjSdz_sH.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
