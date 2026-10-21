import{r as n,j as i}from"./iframe-DFtbih-j.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Bi3NeWSy.js";import{CheckboxStory as c}from"./Checkbox.stories-vlYYOxoF.js";import d from"./Help.stories-B2RTKwnH.js";import k from"./RadioButton.stories-SwVY2-ik.js";import{RadioPanel as u}from"./RadioPanel.stories-MKHdxi9e.js";import{F as g}from"./FieldGroup-BRbhjg69.js";import{C as h}from"./Checkbox-D-QGMZ3Q.js";import{R as b}from"./RadioPanel-BCj0reAh.js";import{H as x}from"./Help-CqP5228s.js";import{R as C}from"./RadioButton-cD9pEUVM.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DPjcJXvh.js";import"./clsx-B-dksMZM.js";import"./Flex-CW5dOJjb.js";import"./SlotComponent-fMeeDhM-.js";import"./mergeRefs-Dlx5z9QN.js";import"./Button-DIUVBNB-.js";import"./usePreviousValue-bEvooXoD.js";import"./Loader-CrzyILxw.js";import"./useDelayedRender-BOKMQujW.js";import"./useId-BtoILu1t.js";import"./Label-RlHoJWDs.js";import"./SupportLabel-CXmwCpZm.js";import"./SuccessIcon-CGQnetxy.js";import"./Icon-CpU2toov.js";import"./WarningIcon-azSqTuXa.js";import"./BaseRadioButton.stories-Dr-jtopG.js";import"./BaseRadioButton-DGNnigT-.js";import"./Title-OyMyxBgg.js";import"./Card-CMOuxYtD.js";import"./Text-yIA7KHav.js";import"./Tag-CI87Os-v.js";import"./ExpandablePanel-BTiFk1oa.js";import"./useAnimatedHeightBetween-CLpQTxAP.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-uJcFk59X.js";import"./Expander-DBiC_J0O.js";import"./ChevronUpIcon-DRoNIj9X.js";import"./ListItem-JUuWbG-c.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
