import{r as n,j as i}from"./iframe-CgAM8s3s.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CAQtRw6I.js";import l from"./Help.stories-CPFJjMWB.js";import c from"./RadioButton.stories-DP8z6K15.js";import{F as d}from"./FieldGroup-Vj9dhSKD.js";import{C as k,a as u}from"./CheckboxPanel.stories-DB9ZR0ml.js";import{RadioPanel as g}from"./RadioPanel.stories-BIB-LBxv.js";import{C as h}from"./Checkbox-CJfHWyaZ.js";import{R as b}from"./RadioPanel-CVP8xNoD.js";import{H as x}from"./Help-C6gSoPS8.js";import{R as C}from"./RadioButton-Iqc8w7qO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Am2vMyXG.js";import"./Label-Dp1Xbqsy.js";import"./SupportLabel-7ll21iSi.js";import"./SuccessIcon-CdWzQyaQ.js";import"./Icon-BmZYFJ3d.js";import"./WarningIcon-jVi3Wuy4.js";import"./BaseRadioButton.stories-71yNA7-3.js";import"./BaseRadioButton-BnwZIfBI.js";import"./InputPanel-BH7kYMNg.js";import"./Flex-BCx9GfyC.js";import"./SlotComponent-DTzvS1Om.js";import"./mergeRefs--dmRko3-.js";import"./Button-bg9qne-7.js";import"./usePreviousValue-CnsHU52_.js";import"./Loader-tSJ4nC3t.js";import"./useDelayedRender-PUdUmeiu.js";import"./Title-BTizei6O.js";import"./Card-CvZHvKM8.js";import"./Text-DwyJvnW_.js";import"./Tag-Cajckclb.js";import"./ExpandablePanel-T-H77pQN.js";import"./useAnimatedHeightBetween-CGWj99Ss.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-C9D5nfRL.js";import"./Expander-DFpmtrvi.js";import"./ChevronUpIcon-D4Z5SHvf.js";import"./ListItem-6zfhXS_Q.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
