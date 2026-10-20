import{r as n,j as i}from"./iframe-DG4ODjOJ.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-SJ88CUU5.js";import{CheckboxStory as c}from"./Checkbox.stories-1SfLY2sW.js";import d from"./Help.stories-gBdVcWlY.js";import k from"./RadioButton.stories-CMeLMAlP.js";import{RadioPanel as u}from"./RadioPanel.stories-DnND_Icz.js";import{F as g}from"./FieldGroup-CNK05K_Z.js";import{C as h}from"./Checkbox-DvyEpDhP.js";import{R as b}from"./RadioPanel-DQj0_XPF.js";import{H as x}from"./Help-DB14UqA4.js";import{R as C}from"./RadioButton-B5VBZ5qG.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CGyCqnhw.js";import"./clsx-B-dksMZM.js";import"./Flex-BtUDcQWz.js";import"./SlotComponent-DfIqjJGl.js";import"./mergeRefs-rjBz1fQO.js";import"./Button-DNaVwgFW.js";import"./usePreviousValue-DEFzHm6P.js";import"./Loader-CU9-LaZm.js";import"./useDelayedRender-6UBVe6jC.js";import"./useId-DRjCOh10.js";import"./Label-BuoszE_D.js";import"./SupportLabel-CXkBTyHa.js";import"./SuccessIcon-BII5lEP4.js";import"./Icon-CKf8FPKn.js";import"./WarningIcon-CJbiE9qZ.js";import"./BaseRadioButton.stories-Bc_6oMqb.js";import"./BaseRadioButton-DYdDNXqL.js";import"./Title-Cgd6T56T.js";import"./Card-DnVqrgyX.js";import"./Text-vNtDNB_0.js";import"./Tag-Bhr0Ui67.js";import"./ExpandablePanel-DJ3wQgE2.js";import"./useAnimatedHeightBetween-oB8718JP.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BAnT8Fn1.js";import"./Expander-lsS87Yr6.js";import"./ChevronUpIcon-BI_m68jk.js";import"./ListItem-DNYZQnZW.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
