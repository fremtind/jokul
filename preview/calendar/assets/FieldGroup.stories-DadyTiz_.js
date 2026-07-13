import{r as p,j as i}from"./iframe-BexQfyWH.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Drx2F-Is.js";import l from"./Help.stories-Cb6CZs22.js";import c from"./RadioButton.stories-Bi1UfIIt.js";import{F as d}from"./FieldGroup-CT2AAyep.js";import{C as k,a as u}from"./CheckboxPanel.stories-CSmp5apP.js";import{RadioPanel as g}from"./RadioPanel.stories-r9Jqp5mS.js";import{C as h}from"./Checkbox-lZ4mgvTr.js";import{R as b}from"./RadioPanel-Db3KUv0G.js";import{H as x}from"./Help-0vC_s-iW.js";import{R as C}from"./RadioButton-DTl_t4J3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BtdtUNx-.js";import"./Label-CeipaYE-.js";import"./SupportLabel-DJaRj9eR.js";import"./SuccessIcon-CIq8qZ6v.js";import"./Icon-BCY1HP59.js";import"./WarningIcon-CjQxkrer.js";/* empty css               *//* empty css               */import"./Flex-CRKokY0T.js";import"./SlotComponent-CzjPnB3w.js";import"./mergeRefs-O-s_ZNVy.js";import"./BaseRadioButton.stories-CiKKh9OI.js";import"./BaseRadioButton-CjygaNt3.js";import"./InputPanel-B_5QpfqI.js";import"./Button-DDbeUI4T.js";import"./usePreviousValue-Bv_r3NNP.js";import"./Loader-BD1LXNFC.js";import"./useDelayedRender-rlSU-o2h.js";import"./Title-DLYiz9P7.js";import"./Card-ClvjLdGC.js";import"./Text-odVzqvwi.js";import"./Tag-BV1LTJM9.js";import"./ExpandablePanel-DV3uNPGZ.js";import"./useAnimatedHeightBetween-BPj-uKee.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-q7TdHENk.js";import"./Expander-D0xq2LED.js";import"./ChevronDownIcon-DfEFhNFr.js";import"./ChevronUpIcon-D2DS6IRL.js";import"./ListItem-DZZcDhta.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
