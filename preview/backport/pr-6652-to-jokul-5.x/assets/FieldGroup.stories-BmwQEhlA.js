import{r as p,j as i}from"./iframe-BByhBRfv.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-7MYIW5H5.js";import{CheckboxStory as c}from"./Checkbox.stories-OFXQ_9MZ.js";import d from"./Help.stories-By2Fm9k8.js";import k from"./RadioButton.stories-Cf0yHZ4R.js";import{RadioPanel as u}from"./RadioPanel.stories-Byc69tlw.js";import{F as g}from"./FieldGroup-Bm9oB1Hc.js";import{C as h}from"./Checkbox-CkXgF5VA.js";import{R as b}from"./RadioPanel-CGyKQEa3.js";import{H as x}from"./Help-CffTHd3O.js";import{R as C}from"./RadioButton-0B6XbEMp.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DSrL5sOj.js";import"./clsx-B-dksMZM.js";import"./Flex-COiOEhyC.js";import"./SlotComponent-CxOnQtVQ.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-B9mY6xZ9.js";import"./usePreviousValue-CaCj3DZq.js";import"./Loader-CssmMGDv.js";import"./useDelayedRender-D-xP8fs1.js";import"./BaseRadioButton.stories-COgosgXp.js";import"./BaseRadioButton-BcbUYVoU.js";import"./useId-C3j8QZ27.js";import"./Title-DHtww4ZQ.js";import"./Card-S9Y2e-Yz.js";import"./Text-BzhfACg9.js";import"./Tag-DMqTfatj.js";import"./ExpandablePanel-ZG9b52zD.js";import"./useAnimatedHeightBetween-BoCdcsnv.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Bm42JdrK.js";import"./Expander-C9dyNu6Z.js";import"./ChevronDownIcon-BpBAWpbr.js";import"./Icon-Cn3auwl6.js";import"./ChevronUpIcon-BxSv2x8a.js";import"./ListItem-C9LYh57b.js";import"./Label-ByU2LgM0.js";import"./SupportLabel-2RMh1iYy.js";import"./SuccessIcon-CZdhDXXk.js";import"./WarningIcon-CpVFV51N.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
