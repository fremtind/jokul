import{r as n,j as i}from"./iframe-Bbj8rkG_.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DOUDkfdQ.js";import l from"./Help.stories-DOM7pE38.js";import c from"./RadioButton.stories-DeKIt9Mj.js";import{F as d}from"./FieldGroup-B0dqwHjr.js";import{C as k,a as u}from"./CheckboxPanel.stories-cKL_-dfh.js";import{RadioPanel as g}from"./RadioPanel.stories-C2jLzEdX.js";import{C as h}from"./Checkbox-DFMT-CBC.js";import{R as b}from"./RadioPanel-CBIz-isJ.js";import{H as x}from"./Help-fNRWDzyO.js";import{R as C}from"./RadioButton-DUV3gGl0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DVxYoTbv.js";import"./Label-Av5QhzRl.js";import"./SupportLabel-DqqjrkyK.js";import"./SuccessIcon-CGGVeuIo.js";import"./Icon-CldikllU.js";import"./WarningIcon-CEn6BCCx.js";import"./BaseRadioButton.stories-Cn0ORpCJ.js";import"./BaseRadioButton-BHbW577q.js";import"./InputPanel-Cq-5Rxgx.js";import"./Flex-hEZZdDC_.js";import"./SlotComponent-HFDyr5TR.js";import"./mergeRefs-bHS_X1Qr.js";import"./Button-CSun49Qa.js";import"./usePreviousValue-DATDFQxW.js";import"./Loader-DQBHF3qY.js";import"./useDelayedRender-yKFebSee.js";import"./Title-CoFFtFww.js";import"./Card-DAmBn23X.js";import"./Text-EPHUohJj.js";import"./Tag-DOR2se5V.js";import"./ExpandablePanel-DPF1HoFY.js";import"./useAnimatedHeightBetween-X1GcUYHC.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DNbhFvwI.js";import"./Expander-Bhv-YoYS.js";import"./ChevronUpIcon-Db0KgKno.js";import"./ListItem-BbOf0Oeg.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
