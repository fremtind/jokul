import{r as p,j as i}from"./iframe-CBe5frgy.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-ex3yeuOY.js";import{CheckboxStory as c}from"./Checkbox.stories-CK0yYHkG.js";import d from"./Help.stories-ZpOXEulX.js";import k from"./RadioButton.stories-BrAGzV9S.js";import{RadioPanel as u}from"./RadioPanel.stories-BGw5LZWf.js";import{F as g}from"./FieldGroup-ClHNrvDG.js";import{C as h}from"./Checkbox-6TGNx6U9.js";import{R as b}from"./RadioPanel-Bm9gUYuY.js";import{H as x}from"./Help-D0sVwJRN.js";import{R as C}from"./RadioButton-Alk2T4HW.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D4BhlI2t.js";import"./clsx-B-dksMZM.js";import"./Flex-DTZu-6gA.js";import"./SlotComponent-C511IurG.js";import"./mergeRefs-BemIzqHg.js";import"./Button-B527EZPl.js";import"./usePreviousValue-CoNSCcxU.js";import"./Loader-DHKAAfdZ.js";import"./useDelayedRender-qpbGZerR.js";import"./BaseRadioButton.stories-DGQOXaxF.js";import"./BaseRadioButton-Cp4Tu5xG.js";import"./useId-jLizFGXW.js";import"./Title-DDu3I8z-.js";import"./Card-mpkuUCW1.js";import"./Text-tnZEGsKw.js";import"./Tag-BMWLw19V.js";import"./ExpandablePanel-B_n4Agtb.js";import"./useAnimatedHeightBetween-CsaGqt79.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DP8cZLgF.js";import"./Expander-BcIKfu6f.js";import"./ChevronDownIcon-Bw0ej6rw.js";import"./Icon-BK1H-WjQ.js";import"./ChevronUpIcon-Cbtq2CC1.js";import"./ListItem-D4q1RtNX.js";import"./Label-B6lPAeZY.js";import"./SupportLabel-CArxg-vm.js";import"./SuccessIcon-Pz1bDdaK.js";import"./WarningIcon-D0TZeeiR.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
