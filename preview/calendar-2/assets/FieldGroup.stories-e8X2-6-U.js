import{r as n,j as i}from"./iframe-CQCCVVLe.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BUcwxKZq.js";import l from"./Help.stories-BqA_NZeH.js";import c from"./RadioButton.stories-DSnjV7mW.js";import{F as d}from"./FieldGroup-DBzVEPpm.js";import{C as k,a as u}from"./CheckboxPanel.stories-CqKHxzgt.js";import{RadioPanel as g}from"./RadioPanel.stories-B8LilqHk.js";import{C as h}from"./Checkbox-Dqg-HZE4.js";import{R as b}from"./RadioPanel-D0HKpFPS.js";import{H as x}from"./Help-KcgsG5id.js";import{R as C}from"./RadioButton-BAACwBuW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-ojUAJl1v.js";import"./Label-CpfnXykw.js";import"./SupportLabel-Bl29k25-.js";import"./SuccessIcon-BsLuXmUR.js";import"./Icon-BQmnVjyI.js";import"./WarningIcon-DUukgYzb.js";import"./BaseRadioButton.stories-BmwVG_69.js";import"./BaseRadioButton-B7srYKTy.js";import"./InputPanel-DJ4pyeDM.js";import"./Flex-CZcDiOWj.js";import"./SlotComponent-BR-uuJBX.js";import"./mergeRefs-DQoiB1Vq.js";import"./Button-DunYMJR9.js";import"./usePreviousValue-D0189A9h.js";import"./Loader-DoBMNh27.js";import"./useDelayedRender-Bm3qceRi.js";import"./Title-CE_4iKJp.js";import"./Card-BB4DBPsW.js";import"./Text-B-h0u9Bk.js";import"./Tag-BfbfHv8x.js";import"./ExpandablePanel-CDqtZ01x.js";import"./useAnimatedHeightBetween-r8wCLNM9.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BDlBR2Ns.js";import"./Expander-C0XziHns.js";import"./ChevronUpIcon-D0dbK-12.js";import"./ListItem-VXnXjdB5.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
