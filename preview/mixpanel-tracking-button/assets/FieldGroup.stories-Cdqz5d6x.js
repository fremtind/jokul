import{r as n,j as i}from"./iframe-B8GZcKF1.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BRJWre3J.js";import{CheckboxStory as c}from"./Checkbox.stories-to7HadVb.js";import d from"./Help.stories-CLO-j74G.js";import k from"./RadioButton.stories-CZT_d07H.js";import{RadioPanel as u}from"./RadioPanel.stories-7uRLQyMI.js";import{F as g}from"./FieldGroup-2EZb9snf.js";import{C as h}from"./Checkbox-Pw_Zz2wz.js";import{R as b}from"./RadioPanel-BItLaKn9.js";import{H as x}from"./Help-ChuvPk0O.js";import{R as C}from"./RadioButton-ChzdECn3.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CRSnczvM.js";import"./clsx-B-dksMZM.js";import"./Flex-MBai9yVi.js";import"./SlotComponent-pQMvFyQq.js";import"./mergeRefs-C3-1UZea.js";import"./Button-D3nJRjqr.js";import"./usePreviousValue-4kJOtNu-.js";import"./Loader-CFDNy8dj.js";import"./useDelayedRender-CHWm-ZBc.js";import"./useId-BBhE9QAl.js";import"./Label-BQ8F5SHk.js";import"./SupportLabel-BQXTvPTf.js";import"./SuccessIcon-CofQwmc6.js";import"./Icon-BrP271Es.js";import"./WarningIcon-D6A2qNfL.js";import"./BaseRadioButton.stories-D5TTwk73.js";import"./BaseRadioButton-Aj2jdRYY.js";import"./Title-Cak633cw.js";import"./Card-DtvwB3wE.js";import"./Text-DVpYfnAp.js";import"./Tag-B-GCc2U3.js";import"./ExpandablePanel-D_JvpVMe.js";import"./useAnimatedHeightBetween-DYihDXXK.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BBQ_4sAg.js";import"./Expander-BHigVNp0.js";import"./ChevronUpIcon-CIkcdZTX.js";import"./ListItem-B1BmB0kB.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
