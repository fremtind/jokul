import{r as n,j as i}from"./iframe-CrpKLsS2.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BoTyhqPM.js";import{CheckboxStory as c}from"./Checkbox.stories-BfSWb4S6.js";import d from"./Help.stories-CcE5Dp6q.js";import k from"./RadioButton.stories-CS32P7uG.js";import{RadioPanel as u}from"./RadioPanel.stories-DDzKy44e.js";import{F as g}from"./FieldGroup-BTjFFOPd.js";import{C as h}from"./Checkbox-ZyvJBPzH.js";import{R as b}from"./RadioPanel-Bc16hPwr.js";import{H as x}from"./Help-BuaV6dpc.js";import{R as C}from"./RadioButton-PjWyx5Eb.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Bhyask41.js";import"./clsx-B-dksMZM.js";import"./Flex-Czzr5b0O.js";import"./SlotComponent-CduEGjkg.js";import"./mergeRefs-B6NQ-Iim.js";import"./Button-wwIJMhkC.js";import"./usePreviousValue-BIS1n27I.js";import"./Loader-CPsBddln.js";import"./useDelayedRender-DvcwwgO5.js";import"./useId-Ceog1cJn.js";import"./Label-Bzux8nHk.js";import"./SupportLabel-Cwr_1IKW.js";import"./SuccessIcon-Co6WZ4D-.js";import"./Icon-BtdccTN4.js";import"./WarningIcon-DzwoAGCU.js";import"./BaseRadioButton.stories-Dox0_Piu.js";import"./BaseRadioButton-CFSiTAj6.js";import"./Title-CSzZfLLZ.js";import"./Card-DFz0ZWPz.js";import"./Text-fnJ1HDoD.js";import"./Tag-Dj0kIQIE.js";import"./ExpandablePanel-CdKCgH7L.js";import"./useAnimatedHeightBetween-DXw0V97i.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DsCz8Sx2.js";import"./Expander-BtnCyGdD.js";import"./ChevronUpIcon-DGEIEzuh.js";import"./ListItem-1t1dlVaG.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
