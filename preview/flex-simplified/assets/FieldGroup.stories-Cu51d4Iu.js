import{r as n,j as i}from"./iframe-Bhwc2I4D.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories--VH5_ExJ.js";import{CheckboxStory as c}from"./Checkbox.stories-AsJ1oYNb.js";import d from"./Help.stories-DPFjZ4cq.js";import k from"./RadioButton.stories-WQHyj6zL.js";import{RadioPanel as u}from"./RadioPanel.stories-B27M6aZw.js";import{F as g}from"./FieldGroup-D9xRwejI.js";import{C as h}from"./Checkbox-DhPHW11p.js";import{R as b}from"./RadioPanel-B1Yu6pt-.js";import{H as x}from"./Help-CBDEr51G.js";import{R as C}from"./RadioButton-jfmZsDTq.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Byo4yKVe.js";import"./clsx-B-dksMZM.js";import"./Flex-CHzzEkHE.js";import"./SlotComponent-BsMolv37.js";import"./mergeRefs-CiwhwP_U.js";import"./Button-BfLysi_n.js";import"./usePreviousValue-BclL_faF.js";import"./Loader-C4ytStLN.js";import"./useDelayedRender-DAxkgfLx.js";import"./useId-DkLhSlb_.js";import"./Label-BEtwLoyn.js";import"./SupportLabel-h4kTvSfQ.js";import"./SuccessIcon-BWDbyH4R.js";import"./Icon-rcZrovdR.js";import"./WarningIcon-BeWPD22S.js";import"./BaseRadioButton.stories-BQKgcTA2.js";import"./BaseRadioButton-BDwE5raN.js";import"./Title-DL1-rjGD.js";import"./Card-B2AwgG7A.js";import"./Text-D0MiC5Jy.js";import"./Tag-IA9yLeBF.js";import"./ExpandablePanel-c3YXg5Fr.js";import"./useAnimatedHeightBetween-DQFPLsoO.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BBYdpHwa.js";import"./Expander-U0k00N3F.js";import"./ChevronUpIcon-U-k4TNGg.js";import"./ListItem-V-JppO1j.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
