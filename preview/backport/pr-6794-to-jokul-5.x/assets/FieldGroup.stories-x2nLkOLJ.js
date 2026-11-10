import{r as p,j as i}from"./iframe-BngQjpXI.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BDgl5UbZ.js";import{CheckboxStory as c}from"./Checkbox.stories-l8HXyUbu.js";import d from"./Help.stories-hIwXK0Ky.js";import k from"./RadioButton.stories-Bsay_EAH.js";import{RadioPanel as u}from"./RadioPanel.stories-BQi6FDr4.js";import{F as g}from"./FieldGroup-nUVhtAQU.js";import{C as h}from"./Checkbox-mDS1kum7.js";import{R as b}from"./RadioPanel-DUZ-CvWt.js";import{H as x}from"./Help-ql0yplLp.js";import{R as C}from"./RadioButton-pAUk4M6F.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CDc5jOCS.js";import"./clsx-B-dksMZM.js";import"./Flex-BskN1Mi4.js";import"./SlotComponent-Du73bYWT.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-cofjPW11.js";import"./usePreviousValue-BKdO8SPv.js";import"./Loader-BlazesEY.js";import"./useDelayedRender-DrTIk3ry.js";import"./BaseRadioButton.stories-BoBTyQfC.js";import"./BaseRadioButton-BTCyPRPO.js";import"./useId-CatgwIho.js";import"./Title-C34vSmH3.js";import"./Card-BN3AIy4p.js";import"./Text-BDPYf2Q7.js";import"./Tag--Zi_sQWH.js";import"./ExpandablePanel-lOj34rgS.js";import"./useAnimatedHeightBetween-vT1D_sQ2.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BCH8U4DD.js";import"./Expander-B7Oalzwh.js";import"./ChevronDownIcon-DNfc9ov7.js";import"./Icon-hNcfuKal.js";import"./ChevronUpIcon-BqMkPJUL.js";import"./ListItem-qjPONv9X.js";import"./Label-C__yCaC1.js";import"./SupportLabel-BpTjCM80.js";import"./SuccessIcon-BjmJbtXm.js";import"./WarningIcon-us5W9aMz.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
