import{r as p,j as i}from"./iframe-DN6ltrt2.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-D7FCYBIL.js";import{CheckboxStory as c}from"./Checkbox.stories-Dd-Y3Vgb.js";import d from"./Help.stories-F-tSpCGC.js";import k from"./RadioButton.stories-CSCpcBQK.js";import{RadioPanel as u}from"./RadioPanel.stories-ra75H-ol.js";import{F as g}from"./FieldGroup-BJllY0K3.js";import{C as h}from"./Checkbox-CL3IKJ_-.js";import{R as b}from"./RadioPanel-CXlnNKOu.js";import{H as x}from"./Help-CO6ZA6fO.js";import{R as C}from"./RadioButton-C9Cd-ivj.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CcOOJgzo.js";import"./clsx-B-dksMZM.js";import"./Flex-DQcgmzX2.js";import"./SlotComponent-C8QeYeTK.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-B49OyFlj.js";import"./usePreviousValue-Df-5yDVn.js";import"./Loader-CQT8afZc.js";import"./useDelayedRender-Athd4i_G.js";import"./BaseRadioButton.stories-Bc6Bjv4U.js";import"./BaseRadioButton-B8_prEbu.js";import"./useId-B4BgBHbF.js";import"./Title-CAslWFaU.js";import"./Card-DpI0S3bR.js";import"./Text-B1xebE0j.js";import"./Tag-Tki75q59.js";import"./ExpandablePanel-DycxvEzy.js";import"./useAnimatedHeightBetween-Cz6WJM71.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CNooEPV9.js";import"./Expander-DPGQ5SoL.js";import"./ChevronDownIcon-DYAZHiWk.js";import"./Icon-D4T0V1LA.js";import"./ChevronUpIcon-Bjd6ZBRE.js";import"./ListItem-DhezryGR.js";import"./Label-BjZ3wk9d.js";import"./SupportLabel-BfRqEEUd.js";import"./SuccessIcon-CpwDFfS0.js";import"./WarningIcon-Dpa71GYg.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
