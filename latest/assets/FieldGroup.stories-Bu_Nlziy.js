import{r as n,j as i}from"./iframe-CSziHxis.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DY-kbTh6.js";import{CheckboxStory as c}from"./Checkbox.stories-C3Tow5AW.js";import d from"./Help.stories-imH-d0Bg.js";import k from"./RadioButton.stories-BRF41d1d.js";import{RadioPanel as u}from"./RadioPanel.stories-MVG8J2oS.js";import{F as g}from"./FieldGroup-CI-WIWMW.js";import{C as h}from"./Checkbox-DlKutg5U.js";import{R as b}from"./RadioPanel-X8cFE4kM.js";import{H as x}from"./Help-BHRkMqK3.js";import{R as C}from"./RadioButton-BWYuAqAL.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DBWO8Dj3.js";import"./clsx-B-dksMZM.js";import"./Flex-mTGQfjfm.js";import"./SlotComponent-DjVyoo0t.js";import"./mergeRefs-D1qIr-df.js";import"./Button-DOlB8Fx-.js";import"./usePreviousValue-B2W9Uaej.js";import"./Loader-CSqIQzkp.js";import"./useDelayedRender-BhPt8z3e.js";import"./useId-DIwfb250.js";import"./Label-Bsn0MuJG.js";import"./SupportLabel-EEPTlvFq.js";import"./SuccessIcon-B9IUw-R5.js";import"./Icon-qzpIHkwN.js";import"./WarningIcon-QGxwxL3W.js";import"./BaseRadioButton.stories-DE6Pr_8x.js";import"./BaseRadioButton-yqv0hYA1.js";import"./Title-D4I_vXyJ.js";import"./Card-DOozTyJX.js";import"./Text-C6lReFvJ.js";import"./Tag-DNVNn5PE.js";import"./ExpandablePanel-2Cbm1uMZ.js";import"./useAnimatedHeightBetween-i00otPpb.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DktXlsXT.js";import"./Expander-Dnk3twty.js";import"./ChevronUpIcon-BlJh8xbY.js";import"./ListItem-Dybfm_LO.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
