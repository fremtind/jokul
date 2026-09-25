import{r as n,j as i}from"./iframe-SutG_B0Z.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-D1MSdguB.js";import{CheckboxStory as c}from"./Checkbox.stories-CIor2nv7.js";import d from"./Help.stories-Ckof_not.js";import k from"./RadioButton.stories-yXJAxGx6.js";import{RadioPanel as u}from"./RadioPanel.stories-WU7dkNcG.js";import{F as g}from"./FieldGroup-CJYJqnZB.js";import{C as h}from"./Checkbox-CgVD3W1e.js";import{R as b}from"./RadioPanel-CjfCfkdr.js";import{H as x}from"./Help-BAZrvB3q.js";import{R as C}from"./RadioButton-DFYont8q.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BwJh6w9O.js";import"./clsx-B-dksMZM.js";import"./Flex-BV39i0jH.js";import"./SlotComponent-DCXFbPqA.js";import"./mergeRefs-M14ot-sU.js";import"./Button-BGNKvRD0.js";import"./usePreviousValue-BB7n94g7.js";import"./Loader-B9FjGmTF.js";import"./useDelayedRender-8DpgfZll.js";import"./useId-C3lYTaC7.js";import"./Label-h06r2nnH.js";import"./SupportLabel-D2rLHHGS.js";import"./SuccessIcon-YwJ0RBoK.js";import"./Icon-CcOEjtqe.js";import"./WarningIcon-Yc41wJHg.js";import"./BaseRadioButton.stories-duLNo0gS.js";import"./BaseRadioButton-CejbrxI6.js";import"./Title-B8Qmz19n.js";import"./Card-B1AmwAjQ.js";import"./Text-4HDvVBCC.js";import"./Tag-C_YnBuPM.js";import"./ExpandablePanel-QoWKtV4T.js";import"./useAnimatedHeightBetween-Bvfck9ib.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Cx4A6SsU.js";import"./Expander-Dsx35zOL.js";import"./ChevronUpIcon-AVcp5ou6.js";import"./ListItem-C0X3kava.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
