import{r as n,j as i}from"./iframe-CkLQiHoz.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-ByQjGfsN.js";import l from"./Help.stories-N9YMmwfG.js";import c from"./RadioButton.stories-HZPEvUg7.js";import{F as d}from"./FieldGroup-1T4tswDq.js";import{C as k,a as u}from"./CheckboxPanel.stories-e_x-G3Au.js";import{RadioPanel as g}from"./RadioPanel.stories-CwNl8Mf0.js";import{C as h}from"./Checkbox-DaVIUeMK.js";import{R as b}from"./RadioPanel-DQUbs51h.js";import{H as x}from"./Help-B-XBZ1gi.js";import{R as C}from"./RadioButton-CGB5Fd_x.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-ZAjFlcMh.js";import"./Label-DiINGYzq.js";import"./SupportLabel-Y6vCvDFH.js";import"./SuccessIcon-Cv7X3vOy.js";import"./Icon-TG9fNn27.js";import"./WarningIcon-DcXwHgfZ.js";import"./BaseRadioButton.stories-B91LkVaw.js";import"./BaseRadioButton-Cmx1u_TO.js";import"./InputPanel-CsIXu2fv.js";import"./Flex-BPQQ_Hgd.js";import"./SlotComponent-TNgwU1lo.js";import"./mergeRefs-Cv1EYVjp.js";import"./Button-CiQaxybo.js";import"./usePreviousValue-CiCn_sFK.js";import"./Loader-D5n2E_DL.js";import"./useDelayedRender-DirulU0F.js";import"./Title-B6QvEGAj.js";import"./Card-CSu1FMBb.js";import"./Text-DFJa0rjk.js";import"./Tag-GW9aSCK6.js";import"./ExpandablePanel-DeAHcuIQ.js";import"./useAnimatedHeightBetween-j_lmZj36.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CpwnHUfG.js";import"./Expander-v6EN_i7C.js";import"./ChevronUpIcon-D8RNUJkc.js";import"./ListItem-BaZmuO5x.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
