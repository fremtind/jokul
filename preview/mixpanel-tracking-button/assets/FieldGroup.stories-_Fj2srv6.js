import{r as n,j as i}from"./iframe-BblywKRz.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CaTDOjB6.js";import{CheckboxStory as c}from"./Checkbox.stories-CUE9yQ8R.js";import d from"./Help.stories-D3QtVLQw.js";import k from"./RadioButton.stories-Dz56cSU3.js";import{RadioPanel as u}from"./RadioPanel.stories-BrDDysul.js";import{F as g}from"./FieldGroup-Bc_1fkyU.js";import{C as h}from"./Checkbox-BDMcFHFK.js";import{R as b}from"./RadioPanel-D2hXxymu.js";import{H as x}from"./Help-D0ZscCWR.js";import{R as C}from"./RadioButton-DINFK41b.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-RBe9SwDD.js";import"./clsx-B-dksMZM.js";import"./Flex-CG9kgDr8.js";import"./SlotComponent-DFjbHf62.js";import"./mergeRefs-CU0s7O_1.js";import"./Button-DTatfsYX.js";import"./usePreviousValue-C6Z1955R.js";import"./Loader-DhY-YlWC.js";import"./useDelayedRender-CO-fUkzI.js";import"./useId-fNrtuj1S.js";import"./Label-D686CCDl.js";import"./SupportLabel-BBSezjpK.js";import"./SuccessIcon-DsUDOlqL.js";import"./Icon-CwrFJFFQ.js";import"./WarningIcon-RP1hunkV.js";import"./BaseRadioButton.stories-BVceH-TK.js";import"./BaseRadioButton-B4VzDG_I.js";import"./Title-D5kJ812J.js";import"./Card-BhsL7pM3.js";import"./Text-Brb3f5q0.js";import"./Tag-CH-wM3sx.js";import"./ExpandablePanel-DnGakH1T.js";import"./useAnimatedHeightBetween-Cpoo-oDz.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CTM83qVL.js";import"./Expander-3EUftMTq.js";import"./ChevronUpIcon-Cp9dBXLi.js";import"./ListItem-DUphcCAp.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
