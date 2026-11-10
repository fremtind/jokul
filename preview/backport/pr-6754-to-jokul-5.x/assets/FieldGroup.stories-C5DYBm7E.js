import{r as p,j as i}from"./iframe-C2einBPe.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Cj4Ku-HY.js";import{CheckboxStory as c}from"./Checkbox.stories-BKEaZ1G_.js";import d from"./Help.stories-DfawT6BY.js";import k from"./RadioButton.stories-DI0-xRCI.js";import{RadioPanel as u}from"./RadioPanel.stories-BrvwvUkv.js";import{F as g}from"./FieldGroup-DEqGGXty.js";import{C as h}from"./Checkbox-Y9daVq0u.js";import{R as b}from"./RadioPanel-AeKcUXXP.js";import{H as x}from"./Help-D82izCm2.js";import{R as C}from"./RadioButton-CJ-sJ3SD.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-WAztFBDK.js";import"./clsx-B-dksMZM.js";import"./Flex-KfpnL8o-.js";import"./SlotComponent-CP1Yg23Q.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CgjKWYj3.js";import"./usePreviousValue-CZ_6jh0D.js";import"./Loader-D3l3lzqZ.js";import"./useDelayedRender-BuQZP-qY.js";import"./BaseRadioButton.stories-Q-3hTTrv.js";import"./BaseRadioButton-_eDYpbfT.js";import"./useId-OCDVfklI.js";import"./Title-DCrOxeLg.js";import"./Card-eIb88F0X.js";import"./Text-DM9RoP0X.js";import"./Tag-DEBduEnZ.js";import"./ExpandablePanel-DJgw6U5Q.js";import"./useAnimatedHeightBetween-BQpizW4s.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-eJl9PrM7.js";import"./Expander-DIj_oqvg.js";import"./ChevronDownIcon-DtKYGgAM.js";import"./Icon-CqF4d1J8.js";import"./ChevronUpIcon-CTJ3QF0u.js";import"./ListItem-k6oYeIC-.js";import"./Label-BfxKL9aB.js";import"./SupportLabel-BlVuUyH5.js";import"./SuccessIcon-B-XWQNNQ.js";import"./WarningIcon-Bl3-CWhK.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
