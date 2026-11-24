import{r as p,j as i}from"./iframe-DP8Xf_qW.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-9F6rv1D8.js";import{CheckboxStory as c}from"./Checkbox.stories-ChckCFv4.js";import d from"./Help.stories-CEjbdmaN.js";import k from"./RadioButton.stories-CHBz2jQO.js";import{RadioPanel as u}from"./RadioPanel.stories-CACETyvR.js";import{F as g}from"./FieldGroup-iELpliL-.js";import{C as h}from"./Checkbox-CR1k7erU.js";import{R as b}from"./RadioPanel-DZr6l9Bx.js";import{H as x}from"./Help-BTWjhMG7.js";import{R as C}from"./RadioButton-vNJTCQgW.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DMcSwSBu.js";import"./clsx-B-dksMZM.js";import"./types-IsTkoTmK.js";import"./Flex-CUSoSf-X.js";import"./SlotComponent-Cxrpl3vc.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-6hsN6QCv.js";import"./usePreviousValue-DKNtJSDr.js";import"./Loader-BxavIFyp.js";import"./useDelayedRender-DoXz-Ftb.js";import"./BaseRadioButton.stories-CnnDD1m2.js";import"./BaseRadioButton-B9qQwVPP.js";import"./useId-DCOUoPrx.js";import"./Title-DF2em-WI.js";import"./Card-CA1K6Oeu.js";import"./Text-dWz_tGFB.js";import"./Tag-DWSWyDsO.js";import"./ExpandablePanel-DRiHyelZ.js";import"./useAnimatedHeightBetween-CO3vDnMG.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D5Lr5Drg.js";import"./Expander-C6Yu3Gc9.js";import"./ChevronDownIcon-DEemnFk9.js";import"./Icon-k8xo1fZn.js";import"./ChevronUpIcon-DfbXVBEU.js";import"./ListItem-CDTAetGS.js";import"./Label-DF5EMnl-.js";import"./SupportLabel-BKFe5kWx.js";import"./SuccessIcon-CbZ15OhW.js";import"./WarningIcon-1AHRTzaM.js";const se={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
