import{r as n,j as i}from"./iframe-Bo5vqqra.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-XARjEjNJ.js";import{CheckboxStory as c}from"./Checkbox.stories-yCFLLW7i.js";import d from"./Help.stories---JPy4jy.js";import k from"./RadioButton.stories-DD8Is_mD.js";import{RadioPanel as u}from"./RadioPanel.stories-CBO-4ASc.js";import{F as g}from"./FieldGroup-CovznCmX.js";import{C as h}from"./Checkbox-q7KBaKld.js";import{R as b}from"./RadioPanel-64D9mGBQ.js";import{H as x}from"./Help-ELwfTnqj.js";import{R as C}from"./RadioButton-sIeYd8kb.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D9jcBE6_.js";import"./clsx-B-dksMZM.js";import"./Flex-BMSSGlZc.js";import"./SlotComponent-BsO8TqoX.js";import"./mergeRefs-BwGUwvLh.js";import"./Button-vyVNrmJ-.js";import"./usePreviousValue-7Mw7eVRW.js";import"./Loader-RZ-5xK65.js";import"./useDelayedRender-BwYAPBet.js";import"./useId-WwkPb0Ck.js";import"./Label-DzdI0AoO.js";import"./SupportLabel-BqEj38He.js";import"./SuccessIcon-D7d6cn32.js";import"./Icon-Cv8E2pY3.js";import"./WarningIcon-D4FwqFwN.js";import"./BaseRadioButton.stories-DYfIkwZq.js";import"./BaseRadioButton-DMFVFmkv.js";import"./Title-BGetLHw8.js";import"./Card-BYE_vYg_.js";import"./Text-C1DhUIC_.js";import"./Tag-Db-3khT3.js";import"./ExpandablePanel-oTylRrbd.js";import"./useAnimatedHeightBetween-D112MXMb.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BuYNz7ea.js";import"./Expander-DlWyv2lG.js";import"./ChevronUpIcon-BuwWKs8D.js";import"./ListItem-rS2YzraM.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
