import{r as n,j as i}from"./iframe-B_ZprsNo.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-867xvYwn.js";import l from"./Help.stories-DHeUqjtt.js";import c from"./RadioButton.stories-CIHfoGQx.js";import{F as d}from"./FieldGroup-Djb4BGsW.js";import{C as k,a as u}from"./CheckboxPanel.stories-CsDVriAh.js";import{RadioPanel as g}from"./RadioPanel.stories-gG9HTPLY.js";import{C as h}from"./Checkbox-Bm8fS72J.js";import{R as b}from"./RadioPanel-BKm1ABmT.js";import{H as x}from"./Help-6NWQrEWa.js";import{R as C}from"./RadioButton-BUhy9ZpT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-VjQkGL6A.js";import"./Label-BUzYHGSH.js";import"./SupportLabel-C-EZjCMJ.js";import"./SuccessIcon-TRT5yn3z.js";import"./Icon-BrhMsI5_.js";import"./WarningIcon-DpGWfTt7.js";import"./BaseRadioButton.stories-V53aBKMP.js";import"./BaseRadioButton-B0Yq9Exm.js";import"./InputPanel-CXj7lfIL.js";import"./Flex-CpPVTCYh.js";import"./SlotComponent-xnEExfWS.js";import"./mergeRefs-DBNpWw3s.js";import"./Button-C_ASjeuZ.js";import"./usePreviousValue-m0AryCQV.js";import"./Loader-dm-O8i45.js";import"./useDelayedRender-B8hchlrX.js";import"./Title-D_X-k5gp.js";import"./Card-BGipi-fU.js";import"./Text-RkN_T9jZ.js";import"./Tag-29cYrhct.js";import"./ExpandablePanel-DbP-UAWf.js";import"./useAnimatedHeightBetween-DPwdEa-m.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DevU_O6D.js";import"./Expander-D_qw5RkA.js";import"./ChevronUpIcon-UeXqFVVQ.js";import"./ListItem-DyWU9ynY.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
