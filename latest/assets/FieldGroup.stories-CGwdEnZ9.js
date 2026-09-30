import{r as n,j as i}from"./iframe-ogGuYNi5.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BMnPvaf5.js";import{CheckboxStory as c}from"./Checkbox.stories-DORrG86A.js";import d from"./Help.stories-BQT6XWGF.js";import k from"./RadioButton.stories-D8TykOMu.js";import{RadioPanel as u}from"./RadioPanel.stories-pGROu72k.js";import{F as g}from"./FieldGroup-D_ZYCzXX.js";import{C as h}from"./Checkbox-B9O6l2bA.js";import{R as b}from"./RadioPanel-CqwolBPz.js";import{H as x}from"./Help-D76nejtM.js";import{R as C}from"./RadioButton-hEeUTLMe.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Dl5hxwhM.js";import"./clsx-B-dksMZM.js";import"./Flex-RmC0OqBQ.js";import"./SlotComponent-E-rDDKIK.js";import"./mergeRefs-DRWoqhBG.js";import"./Button-D31S0E0u.js";import"./usePreviousValue-BdYUoE2-.js";import"./Loader-C0qOq19u.js";import"./useDelayedRender-BDvyU3P5.js";import"./useId-D2F57e6k.js";import"./Label-C_UClo8A.js";import"./SupportLabel-DnIRcVgV.js";import"./SuccessIcon-BB8gwXm8.js";import"./Icon-gEyY3SWL.js";import"./WarningIcon-CzAiE1mc.js";import"./BaseRadioButton.stories-CetgRLY0.js";import"./BaseRadioButton-C5_KqCsV.js";import"./Title-Chv-_oS0.js";import"./Card-xHQoPWJO.js";import"./Text-CMyXmYYA.js";import"./Tag-C6jqt40E.js";import"./ExpandablePanel-BtHo8KsO.js";import"./useAnimatedHeightBetween-C6ntsELv.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-sPaUFVz2.js";import"./Expander-Dhlg96Ri.js";import"./ChevronUpIcon-4ZAuOvQ3.js";import"./ListItem-CwI0prLy.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
