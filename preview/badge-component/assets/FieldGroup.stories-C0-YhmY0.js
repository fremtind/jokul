import{r as n,j as i}from"./iframe-D0CIxAlt.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-C0e2Gd2w.js";import{CheckboxStory as c}from"./Checkbox.stories-CH8NAM2g.js";import d from"./Help.stories-jEDdDJfu.js";import k from"./RadioButton.stories-_kZS019Z.js";import{RadioPanel as u}from"./RadioPanel.stories-jaJzVDpY.js";import{F as g}from"./FieldGroup-C_JE86G7.js";import{C as h}from"./Checkbox-DpsEONdb.js";import{R as b}from"./RadioPanel-Di72vlur.js";import{H as x}from"./Help-8Yms0kS4.js";import{R as C}from"./RadioButton-DnZzQKET.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-TupRXLH1.js";import"./clsx-B-dksMZM.js";import"./Flex-_Zk7JS2d.js";import"./SlotComponent-m6L_cdHZ.js";import"./mergeRefs-NiThmeT2.js";import"./Button-CGLkPkmf.js";import"./usePreviousValue-CjrHpo5R.js";import"./Loader-uM6qdK2i.js";import"./useDelayedRender-CvYML4oI.js";import"./useId-Btq2UMCu.js";import"./Label-QV972wde.js";import"./SupportLabel-DLYpN7WJ.js";import"./SuccessIcon-CTXqZj8x.js";import"./Icon-C9eF6OKl.js";import"./WarningIcon-DRZLEWtH.js";import"./BaseRadioButton.stories-Qzw5v_e0.js";import"./BaseRadioButton-DTei3rRM.js";import"./Title-CP5JSvgy.js";import"./Card-Tciq-jG_.js";import"./Text-lv9SfllX.js";import"./Tag-CSPSpgQt.js";import"./ExpandablePanel-Dr0QWFCV.js";import"./useAnimatedHeightBetween-CQb0NdeJ.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C3vyVZrY.js";import"./Expander-CrSebGRC.js";import"./ChevronUpIcon-BLtGYdFW.js";import"./ListItem-BDi0SS82.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
