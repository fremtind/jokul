import{r as n,j as i}from"./iframe-CnMz4HRP.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DBxuXzS_.js";import{CheckboxStory as c}from"./Checkbox.stories-CYZ5hKt5.js";import d from"./Help.stories-2rPIWmMs.js";import k from"./RadioButton.stories-D_fsvFUo.js";import{RadioPanel as u}from"./RadioPanel.stories-CD5A6KBW.js";import{F as g}from"./FieldGroup-Cil7qz0E.js";import{C as h}from"./Checkbox-DIkeDcev.js";import{R as b}from"./RadioPanel-4uZzSbD3.js";import{H as x}from"./Help-VE1BzZRb.js";import{R as C}from"./RadioButton-BRIVlVEx.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CZSDOvyS.js";import"./clsx-B-dksMZM.js";import"./Flex-CNubM_KX.js";import"./SlotComponent-DcxNHC9f.js";import"./mergeRefs-fvHjIXdP.js";import"./Button-q9_1qRW8.js";import"./usePreviousValue-1Dq-zo9h.js";import"./Loader-B28JW2h-.js";import"./useDelayedRender-BoSCmUq5.js";import"./useId-BigCagN-.js";import"./Label-oesX5CzL.js";import"./SupportLabel-BiZIysfB.js";import"./SuccessIcon-DD5xKpi3.js";import"./Icon-C15m9CtP.js";import"./WarningIcon-HsndgcYb.js";import"./BaseRadioButton.stories-Dp5aa3wG.js";import"./BaseRadioButton-DD0kCjrG.js";import"./Title-CgGdF8LL.js";import"./Card-DFkb7Ja-.js";import"./Text-DdV5tl8k.js";import"./Tag-B4gd5rFK.js";import"./ExpandablePanel-lZFgvjgg.js";import"./useAnimatedHeightBetween-DL1j9lVg.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CTyAcWaI.js";import"./Expander-DDtMB3xt.js";import"./ChevronUpIcon-CId_Zkuq.js";import"./ListItem-BiqApIN0.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
