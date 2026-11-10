import{r as n,j as i}from"./iframe-BJ5WMK8C.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Cz7t6RWo.js";import{CheckboxStory as c}from"./Checkbox.stories-CiNtNjs3.js";import d from"./Help.stories-B1u11TRM.js";import k from"./RadioButton.stories-DIMrfZmU.js";import{RadioPanel as u}from"./RadioPanel.stories-G91P26zr.js";import{F as g}from"./FieldGroup-Bub--Qwi.js";import{C as h}from"./Checkbox-CwFv6NnS.js";import{R as b}from"./RadioPanel-DkSRpfii.js";import{H as x}from"./Help-3gr_tF3H.js";import{R as C}from"./RadioButton-RmpbzbJM.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D8rhZFXR.js";import"./clsx-B-dksMZM.js";import"./Flex-DzNMglb8.js";import"./SlotComponent-DMVT6y9K.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DuDfra3y.js";import"./usePreviousValue-BvreLSHE.js";import"./Loader-B-23dmYD.js";import"./useDelayedRender-BuuW-EU5.js";import"./useId-4h3WdjyM.js";import"./Label-DGIPJpn4.js";import"./SupportLabel-BeG7wPmE.js";import"./SuccessIcon-Be1XBPhg.js";import"./Icon-FHNZc8Ax.js";import"./WarningIcon-68OCu3r9.js";import"./BaseRadioButton.stories-BIu0OWv9.js";import"./BaseRadioButton-Bhp4g7z_.js";import"./Title-C5fu_Qf9.js";import"./Card-BRPFOV2f.js";import"./Text-DKHy9smQ.js";import"./Tag-CrNbUZ7D.js";import"./ExpandablePanel-VB7SRNp3.js";import"./useAnimatedHeightBetween-D4-dbYAJ.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-ur_GbFPR.js";import"./Expander-dCXnpElP.js";import"./ChevronUpIcon-Cl_O7vfk.js";import"./ListItem-BcYPkuvR.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
