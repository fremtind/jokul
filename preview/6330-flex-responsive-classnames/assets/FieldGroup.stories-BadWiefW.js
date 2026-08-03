import{r as p,j as i}from"./iframe-aRFB7fRf.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DyfnN8bm.js";import l from"./Help.stories-Bu-v9vip.js";import c from"./RadioButton.stories-HmnQHtXq.js";import{F as d}from"./FieldGroup-BWkct7sQ.js";import{C as k,a as u}from"./CheckboxPanel.stories-2Ld1qCkN.js";import{RadioPanel as g}from"./RadioPanel.stories-DhMORya0.js";import{C as h}from"./Checkbox-4NsnFdIq.js";import{R as b}from"./RadioPanel-CezPGCd8.js";import{H as x}from"./Help-WciHnZZn.js";import{R as C}from"./RadioButton-a8GQt5uD.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-Rulu21Na.js";import"./BaseRadioButton-D88H4Z23.js";import"./clsx-B-dksMZM.js";import"./useId-C4qKa9a7.js";import"./Label-BjsLckEB.js";import"./SupportLabel-DzEOXsUx.js";import"./SuccessIcon-CZG6piHz.js";import"./Icon-C7MblXCd.js";import"./WarningIcon-C6R0c53m.js";import"./InputPanel-Bb5sQhfn.js";import"./Flex-CrbXkMCx.js";import"./SlotComponent-Dzf4cr6j.js";import"./mergeRefs-B0_lPK7u.js";import"./Button-Bnos0sdQ.js";import"./usePreviousValue-DqY3occW.js";import"./Loader-D3P6L8sP.js";import"./useDelayedRender-D3gWDEwm.js";import"./Title-k_2WCEqh.js";import"./Card-D8uoExa8.js";import"./Text-C_T7Y4M0.js";import"./Tag-DhirZkeV.js";import"./ExpandablePanel-Csp8fvHj.js";import"./useAnimatedHeightBetween-D1lm_mKt.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CtOdhFaR.js";import"./Expander-C58QgW8q.js";import"./ChevronDownIcon-B1cPACqB.js";import"./ChevronUpIcon-CCCJqWbX.js";import"./ListItem-CEkpwdUZ.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
