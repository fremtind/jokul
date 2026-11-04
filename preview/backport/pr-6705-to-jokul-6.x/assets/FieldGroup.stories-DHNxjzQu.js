import{r as n,j as i}from"./iframe-DlNaW6W2.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DP4L1j9B.js";import{CheckboxStory as c}from"./Checkbox.stories-Digy52WB.js";import d from"./Help.stories-CBmU9VFD.js";import k from"./RadioButton.stories-bri2aaKF.js";import{RadioPanel as u}from"./RadioPanel.stories-DL7FJce0.js";import{F as g}from"./FieldGroup-Bv38KpV7.js";import{C as h}from"./Checkbox-SuWtGV1l.js";import{R as b}from"./RadioPanel-C4ich6px.js";import{H as x}from"./Help-CIhYftID.js";import{R as C}from"./RadioButton-Bu0YOIkL.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-783EvmJN.js";import"./clsx-B-dksMZM.js";import"./Flex-BYQEEi3h.js";import"./SlotComponent-Cf5Vuq-g.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-qCctAfj6.js";import"./usePreviousValue-Bnw1xrgM.js";import"./Loader-BCHMYyIE.js";import"./useDelayedRender-LtOweDOP.js";import"./useId-CtGXv7sF.js";import"./Label-Bzt42sD_.js";import"./SupportLabel-sNoV-3x_.js";import"./SuccessIcon-Cq6ch3_j.js";import"./Icon-JIqShNts.js";import"./WarningIcon-dB_Mpny5.js";import"./BaseRadioButton.stories-BsorcdiU.js";import"./BaseRadioButton-DSeBQFIj.js";import"./Title-DSqKtir_.js";import"./Card-Dv61Hhzm.js";import"./Text-CZV8LXY4.js";import"./Tag-nuBnc9YR.js";import"./ExpandablePanel-CjyoalE7.js";import"./useAnimatedHeightBetween-DvtR7_Jk.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CLCj58p3.js";import"./Expander-CxEW6jR9.js";import"./ChevronUpIcon-BnpSakiW.js";import"./ListItem-C6MPlxkh.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
