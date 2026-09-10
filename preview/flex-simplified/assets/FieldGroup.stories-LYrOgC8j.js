import{r as n,j as i}from"./iframe-dy16uOUa.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-RCsfKo_r.js";import{CheckboxStory as c}from"./Checkbox.stories-DypCrUld.js";import d from"./Help.stories-D594_mMT.js";import k from"./RadioButton.stories-rLrG33Ui.js";import{RadioPanel as u}from"./RadioPanel.stories-Cf0PrxSx.js";import{F as g}from"./FieldGroup-wOLh1PtA.js";import{C as h}from"./Checkbox-DyJKRXgc.js";import{R as b}from"./RadioPanel-DUsrI_-h.js";import{H as x}from"./Help-Dm_MFgIR.js";import{R as C}from"./RadioButton-B1e0kX6t.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-ChafDJ_2.js";import"./clsx-B-dksMZM.js";import"./Flex-qZ6A7-V8.js";import"./SlotComponent-BuqSpwkV.js";import"./mergeRefs-ByStl0tY.js";import"./Button-CDrubmlo.js";import"./usePreviousValue-DduiA--9.js";import"./Loader-cpR7vGG1.js";import"./useDelayedRender-BhPdlfUW.js";import"./useId--KgGKCV5.js";import"./Label-BxIiJPmh.js";import"./SupportLabel-DkH1xEiC.js";import"./SuccessIcon-D0RHu9Zs.js";import"./Icon-B6OMEOur.js";import"./WarningIcon-DELaQxez.js";import"./BaseRadioButton.stories-B7C0zNvg.js";import"./BaseRadioButton-CIgpOZxC.js";import"./Title-CigX7eqC.js";import"./Card-lNua5UnN.js";import"./Text-hZoMrjhg.js";import"./Tag-BhM6r3qo.js";import"./ExpandablePanel-Bu2IlraV.js";import"./useAnimatedHeightBetween-Czi74Ykw.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DTMKFC9n.js";import"./Expander-B-MWZPtD.js";import"./ChevronUpIcon-DIRKtHEG.js";import"./ListItem-DE56yZnR.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
