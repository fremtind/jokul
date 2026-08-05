import{r as n,j as i}from"./iframe-D25vO16l.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BYxxDS2O.js";import l from"./Help.stories-IwCTug8v.js";import c from"./RadioButton.stories-2Zpgcs3-.js";import{F as d}from"./FieldGroup-d8Q1y-wt.js";import{C as k,a as u}from"./CheckboxPanel.stories-BzY2clgN.js";import{RadioPanel as g}from"./RadioPanel.stories-C8bOCYZN.js";import{C as h}from"./Checkbox-CErm9c6F.js";import{R as b}from"./RadioPanel-eGGV0RWk.js";import{H as x}from"./Help-LOegnvpX.js";import{R as C}from"./RadioButton-Dae3G4cp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BU4_SoFw.js";import"./Label-BQyeSw3U.js";import"./SupportLabel-LNZhCInP.js";import"./SuccessIcon-DoNkeGsh.js";import"./Icon-BZ6ETrRV.js";import"./WarningIcon-CKMdT3HT.js";import"./BaseRadioButton.stories-aHoQBcV0.js";import"./BaseRadioButton-tOer9J5G.js";import"./InputPanel-CFgZLIWN.js";import"./Flex-Cayt6U-M.js";import"./SlotComponent-DR8aVp7r.js";import"./mergeRefs-CqBDJLQM.js";import"./Button-CLDXpBU1.js";import"./usePreviousValue-Cl6pSe9X.js";import"./Loader-DAzRxjOP.js";import"./useDelayedRender-a9c0iuDc.js";import"./Title-DQaAfAwq.js";import"./Card-DSoJZR6R.js";import"./Text-BJHUvpXa.js";import"./Tag-oxyLwPpQ.js";import"./ExpandablePanel-BNeOXGtT.js";import"./useAnimatedHeightBetween-chPx9p_A.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-hVTWbpKi.js";import"./Expander-CmsFOFo5.js";import"./ChevronUpIcon-ERWXgWJe.js";import"./ListItem-CwK5JyQt.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
