import{r as p,j as i}from"./iframe-Dy8NpKwi.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CdiHMBjQ.js";import l from"./Help.stories-n6INQHcO.js";import c from"./RadioButton.stories-lWDpNbqR.js";import{F as d}from"./FieldGroup-SMvvzxnw.js";import{C as k,a as u}from"./CheckboxPanel.stories-BXMBoMeh.js";import{RadioPanel as g}from"./RadioPanel.stories-C6RsZCIL.js";import{C as h}from"./Checkbox-qKHWxMZ_.js";import{R as b}from"./RadioPanel-D-JzU59R.js";import{H as x}from"./Help-6Yjzu6X6.js";import{R as C}from"./RadioButton-D6M5Juxf.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-C9vqIZp-.js";import"./BaseRadioButton-D8r84YkX.js";import"./clsx-B-dksMZM.js";import"./useId-XLsCfLjk.js";import"./Label-j3oqw_j0.js";import"./SupportLabel-ai-CMwmr.js";import"./SuccessIcon-aRnLB39V.js";import"./Icon-lbjXqYcq.js";import"./WarningIcon-DOck6dNP.js";import"./InputPanel-DqSn-ggb.js";import"./Flex-CYIFUZLU.js";import"./SlotComponent-Bsgkof6Y.js";import"./mergeRefs-uGiAnCQA.js";import"./Button-Cj7Hs5Qh.js";import"./usePreviousValue-DGlgzXuZ.js";import"./Loader-CQSGxNur.js";import"./useDelayedRender-rlYOlS7m.js";import"./Title-DaLfGVsi.js";import"./Card-1J6pUxhu.js";import"./Text-D4IFIt20.js";import"./Tag-B9eoYTEY.js";import"./ExpandablePanel-DV45pVs_.js";import"./useAnimatedHeightBetween-BhtNjIVa.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-C5oJ9k1h.js";import"./Expander-BQ3iAky_.js";import"./ChevronDownIcon-CDAx6_Tl.js";import"./ChevronUpIcon-CQTTLVAk.js";import"./ListItem-TaWqTtfi.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
