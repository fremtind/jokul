import{r as p,j as i}from"./iframe-B62p8jye.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-F7RZNJlk.js";import l from"./Help.stories-CRlrtyBl.js";import c from"./RadioButton.stories-0kRHFEUL.js";import{F as d}from"./FieldGroup-CxlqfhWl.js";import{C as k,a as u}from"./CheckboxPanel.stories-qBFc7O_g.js";import{RadioPanel as g}from"./RadioPanel.stories-CkjtjoE-.js";import{C as h}from"./Checkbox-CzFL90zK.js";import{R as b}from"./RadioPanel-Bqs3gKK8.js";import{H as x}from"./Help-C4eMMstB.js";import{R as C}from"./RadioButton-m1fN1L8l.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-Df8F5QwR.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-v24MvHHy.js";import"./mergeRefs-52v1EJZk.js";import"./BaseRadioButton.stories-Bat_iGfa.js";import"./BaseRadioButton-Cf1V-vkU.js";import"./useId-B6POw-xK.js";import"./Label-JERjBOfy.js";import"./SupportLabel-DvCDwllM.js";import"./SuccessIcon-CL7NjQfd.js";import"./Icon-DgTEVgMk.js";import"./WarningIcon-ChAcwzzh.js";import"./InputPanel-D9hcOJl_.js";import"./Button-HzTGvATL.js";import"./usePreviousValue-bJSKqgky.js";import"./Loader-ZT7aviBM.js";import"./useDelayedRender-BUcczwAN.js";import"./Title-SBQ807VC.js";import"./Card-CXUJvtcK.js";import"./Text-Dv2HqxSH.js";import"./Tag-CFGxKaIt.js";import"./ExpandablePanel-DadAsBbE.js";import"./useAnimatedHeightBetween-DHGxWmOc.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CC_iGnKL.js";import"./Expander-CaTJYQOT.js";import"./ChevronDownIcon-DB55Ocyc.js";import"./ChevronUpIcon-BSntU2pr.js";import"./ListItem-DhUmc4vX.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
