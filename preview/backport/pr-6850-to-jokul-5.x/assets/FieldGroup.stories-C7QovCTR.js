import{r as p,j as i}from"./iframe-D14DQMNp.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-C78jtH28.js";import{CheckboxStory as c}from"./Checkbox.stories-DH7zblwM.js";import d from"./Help.stories-BmiK3hvV.js";import k from"./RadioButton.stories-BFkBNfhZ.js";import{RadioPanel as u}from"./RadioPanel.stories-B_jtltPS.js";import{F as g}from"./FieldGroup-Bw1e86HU.js";import{C as h}from"./Checkbox-EPhhr3gF.js";import{R as b}from"./RadioPanel-BkZZUVXS.js";import{H as x}from"./Help-Ca5WQgqL.js";import{R as C}from"./RadioButton-L8ezilL8.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DDsrfcMR.js";import"./clsx-B-dksMZM.js";import"./Flex-B0KtqK9L.js";import"./SlotComponent-BIEWnibV.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DUcr9_5V.js";import"./usePreviousValue-BD39G_7Y.js";import"./Loader-fqvdJh4-.js";import"./useDelayedRender-D4k8iAQT.js";import"./BaseRadioButton.stories-DzaQlK27.js";import"./BaseRadioButton-Bp8Z1WM5.js";import"./useId-Cruh5tV8.js";import"./Title-iupwFzc7.js";import"./Card-D4KHqgNG.js";import"./Text-CDpGbCRW.js";import"./Tag-Zm9XbWUC.js";import"./ExpandablePanel-B3d0LC7n.js";import"./useAnimatedHeightBetween-DYyqRVy0.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CKl6hEp3.js";import"./Expander-CLlcP1Nm.js";import"./ChevronDownIcon-B8_iqvua.js";import"./Icon-Id54gOCg.js";import"./ChevronUpIcon-DNplrQV4.js";import"./ListItem-BnDy070D.js";import"./Label-RkvDwQf6.js";import"./SupportLabel-D70rlve0.js";import"./SuccessIcon-DaMkAXqo.js";import"./WarningIcon-FFgrJmIi.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
