import{r as p,j as i}from"./iframe-BB1Cp5_U.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BX90h6K9.js";import{CheckboxStory as c}from"./Checkbox.stories-BuHmjO41.js";import d from"./Help.stories-TH2Tx0pI.js";import k from"./RadioButton.stories-BF4tNpED.js";import{RadioPanel as u}from"./RadioPanel.stories-Baugn87B.js";import{F as g}from"./FieldGroup-BxLhoTvy.js";import{C as h}from"./Checkbox-DZ0zocen.js";import{R as b}from"./RadioPanel-BedS6WM5.js";import{H as x}from"./Help-4wdDa0qS.js";import{R as C}from"./RadioButton-BndYDQyA.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CUv4MsNw.js";import"./clsx-B-dksMZM.js";import"./Flex-W6zEaTaa.js";import"./SlotComponent-D_JXR5zD.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DMQTvH3V.js";import"./usePreviousValue-CyKkz0dW.js";import"./Loader-dGMylPPG.js";import"./useDelayedRender-CiLv4irp.js";import"./BaseRadioButton.stories-DXKDDXy5.js";import"./BaseRadioButton-DYj1WzNn.js";import"./useId-CrsDWm5I.js";import"./Title-C8IGRT9B.js";import"./Card-B2jeoI4U.js";import"./Text-D6C8DzY5.js";import"./Tag-BJdGHYM8.js";import"./ExpandablePanel-NEoBlVzd.js";import"./useAnimatedHeightBetween-tRzDOapJ.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CJIo7-y6.js";import"./Expander-m5DEa5ok.js";import"./ChevronDownIcon-CUErVJIK.js";import"./Icon-CbNxZaXr.js";import"./ChevronUpIcon-C-f2n-3j.js";import"./ListItem-86QldvsO.js";import"./Label-CzhSH2sX.js";import"./SupportLabel-fkjjMZgV.js";import"./SuccessIcon-DWAvjN6z.js";import"./WarningIcon-DBT0cMjV.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
