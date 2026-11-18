import{r as p,j as i}from"./iframe-B1nf5YyH.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BV_H6y7v.js";import{CheckboxStory as c}from"./Checkbox.stories-PtigchTx.js";import d from"./Help.stories-lng7jDyt.js";import k from"./RadioButton.stories-yCVeP8hO.js";import{RadioPanel as u}from"./RadioPanel.stories-BHFnNGuh.js";import{F as g}from"./FieldGroup-Wzi_HVu9.js";import{C as h}from"./Checkbox-WQ9eqML1.js";import{R as b}from"./RadioPanel-Cyyk6ujB.js";import{H as x}from"./Help-DWmZDSc4.js";import{R as C}from"./RadioButton-BlCArVY6.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BgluarZd.js";import"./clsx-B-dksMZM.js";import"./Flex-Cd6nrAee.js";import"./SlotComponent-B96yKfdi.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-KZHUpYSa.js";import"./usePreviousValue-CXsnYcbG.js";import"./Loader-Dia39XyQ.js";import"./useDelayedRender-MqjNxnhb.js";import"./BaseRadioButton.stories-CApTYADA.js";import"./BaseRadioButton-DZuY1AXq.js";import"./useId-BYmt-GFP.js";import"./Title-CruMuENL.js";import"./Card-dIbJeatb.js";import"./Text-DYh4aZiq.js";import"./Tag-C3e5HQRY.js";import"./ExpandablePanel-CCzS93Hy.js";import"./useAnimatedHeightBetween-C68a1IZf.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Citw30Mr.js";import"./Expander-Bv3N4jMi.js";import"./ChevronDownIcon-C-wOMkiw.js";import"./Icon-KG7C4PV9.js";import"./ChevronUpIcon-CCcMNp1I.js";import"./ListItem-BgLcc5E_.js";import"./Label-BAjGHsGB.js";import"./SupportLabel-CATrU0Ht.js";import"./SuccessIcon-1VfQKZG2.js";import"./WarningIcon-Cn5poopd.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
