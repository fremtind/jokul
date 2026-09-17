import{r as p,j as i}from"./iframe-CWbZGvkT.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-D7NseDdA.js";import{CheckboxStory as c}from"./Checkbox.stories-CTrIMpHT.js";import d from"./Help.stories-BiwHhejy.js";import k from"./RadioButton.stories-CNXy2Sqd.js";import{RadioPanel as u}from"./RadioPanel.stories-uHr37YJg.js";import{F as g}from"./FieldGroup-CGHjF9JY.js";import{C as h}from"./Checkbox-CxwSw7sB.js";import{R as b}from"./RadioPanel-BVUdnumY.js";import{H as x}from"./Help-CUo9Lpdn.js";import{R as C}from"./RadioButton-DaEbJqQY.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DSqW6VXX.js";import"./clsx-B-dksMZM.js";import"./Flex-CD4rIG2F.js";import"./SlotComponent-DKdw50hz.js";import"./mergeRefs-CZ8Lw8LB.js";import"./Button-D0lNZwEh.js";import"./usePreviousValue-_5R38d20.js";import"./Loader-n140siAr.js";import"./useDelayedRender-UHz91WUe.js";import"./BaseRadioButton.stories-DWtJx5VU.js";import"./BaseRadioButton-PKsFsbGL.js";import"./useId-DpTBIRdb.js";import"./Title-BVRb6uP6.js";import"./Card-CkiY6evt.js";import"./Text-Cub91oxp.js";import"./Tag-BGwVUoJA.js";import"./ExpandablePanel-DYqe4z9m.js";import"./useAnimatedHeightBetween-DFajYUX9.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BCGjtlqf.js";import"./Expander-CY2NsqPO.js";import"./ChevronDownIcon-CbLnq3Yk.js";import"./Icon-CEqkQWQ6.js";import"./ChevronUpIcon-Ddm-di5V.js";import"./ListItem-CzIgv2zB.js";import"./Label-OFXotbdg.js";import"./SupportLabel-BFnBY2CH.js";import"./SuccessIcon-CgvfVImO.js";import"./WarningIcon-D1MfRup8.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
