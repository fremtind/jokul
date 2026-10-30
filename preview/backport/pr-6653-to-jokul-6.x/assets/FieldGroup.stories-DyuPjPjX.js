import{r as n,j as i}from"./iframe-Cff8_9Is.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-e5og72Vk.js";import{CheckboxStory as c}from"./Checkbox.stories-BwdkI_Cq.js";import d from"./Help.stories-ihAoSyPJ.js";import k from"./RadioButton.stories-DkcSQOrq.js";import{RadioPanel as u}from"./RadioPanel.stories-BPt1gZsT.js";import{F as g}from"./FieldGroup-D3hjBcs2.js";import{C as h}from"./Checkbox-B-x3RSrj.js";import{R as b}from"./RadioPanel-G7gPsLcR.js";import{H as x}from"./Help-D2V4X0FF.js";import{R as C}from"./RadioButton-D_MxjXw6.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Dph3FmsA.js";import"./clsx-B-dksMZM.js";import"./Flex-BJO7col_.js";import"./SlotComponent-CEq8xhU1.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-B1IoGxUK.js";import"./usePreviousValue-BEcYtepY.js";import"./Loader-BpFN6JKT.js";import"./useDelayedRender-DoOIHd60.js";import"./useId-CcgHn3PK.js";import"./Label-Dm2I-h9K.js";import"./SupportLabel-CLO4rMx9.js";import"./SuccessIcon-DEKZ51Ij.js";import"./Icon-BT5rrgpX.js";import"./WarningIcon-F7xSy4CF.js";import"./BaseRadioButton.stories-D6yCm-Rj.js";import"./BaseRadioButton-DZ7fWLiE.js";import"./Title-DE-IORA7.js";import"./Card-DMMpDaLj.js";import"./Text-BxY7UmcL.js";import"./Tag-B7ahxnEW.js";import"./ExpandablePanel-iDgsVuk3.js";import"./useAnimatedHeightBetween-C5O9lrKA.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-B5J8onBw.js";import"./Expander-CCk873P6.js";import"./ChevronUpIcon-DP8wrlSa.js";import"./ListItem-ClMn6Y1x.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
