import{r as n,j as i}from"./iframe-D0273_0s.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-B8km7x2L.js";import{CheckboxStory as c}from"./Checkbox.stories-Bja41-67.js";import d from"./Help.stories-CJNjdeFW.js";import k from"./RadioButton.stories-D-XKCkWR.js";import{RadioPanel as u}from"./RadioPanel.stories-B6pyvv6G.js";import{F as g}from"./FieldGroup-3uM_CA3s.js";import{C as h}from"./Checkbox-DFOQ7Vkg.js";import{R as b}from"./RadioPanel-BHK708FM.js";import{H as x}from"./Help-WFwM5Yk5.js";import{R as C}from"./RadioButton-Dc-6aS25.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DxeJC3mT.js";import"./clsx-B-dksMZM.js";import"./Flex-DlxMnYe5.js";import"./SlotComponent-BRPh6DbE.js";import"./mergeRefs-D7axZvRn.js";import"./Button-2WkOBKMl.js";import"./usePreviousValue-BvwEjz2t.js";import"./Loader-DcOUPe1I.js";import"./useDelayedRender-CHv3uC3X.js";import"./useId-CMEqsnWW.js";import"./Label-DGm6Y0S6.js";import"./SupportLabel-C0th1Mhi.js";import"./SuccessIcon-DZGHMIej.js";import"./Icon-hWifPZMM.js";import"./WarningIcon-DcHNmchD.js";import"./BaseRadioButton.stories-D6i_xplg.js";import"./BaseRadioButton-DD2uhc8K.js";import"./Title-Ci5gtQEh.js";import"./Card-D9_MyZ5J.js";import"./Text-DkdyT-Qq.js";import"./Tag-BTkPQObb.js";import"./ExpandablePanel-DNf-l_m0.js";import"./useAnimatedHeightBetween-cRpkYj5V.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BtNEplrT.js";import"./Expander-BcMATHx0.js";import"./ChevronUpIcon-Ch9Acur-.js";import"./ListItem-Di6O_5p2.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
