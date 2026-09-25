import{r as n,j as i}from"./iframe-D8Xhc-E2.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CI_0liSS.js";import{CheckboxStory as c}from"./Checkbox.stories-B9RTLeAj.js";import d from"./Help.stories-iDewBHOY.js";import k from"./RadioButton.stories-Dr7N-33m.js";import{RadioPanel as u}from"./RadioPanel.stories-DvFcjjNd.js";import{F as g}from"./FieldGroup-ULwmvxQx.js";import{C as h}from"./Checkbox-DjmCUaML.js";import{R as b}from"./RadioPanel-CcceKDXQ.js";import{H as x}from"./Help-CFCveLSY.js";import{R as C}from"./RadioButton-CEfa4DxI.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CLegCLxD.js";import"./clsx-B-dksMZM.js";import"./Flex-z6aDylT1.js";import"./SlotComponent-z-gMNlb8.js";import"./mergeRefs-BxAFNYkQ.js";import"./Button-CliIkGpW.js";import"./usePreviousValue-D4pHmgS1.js";import"./Loader-yOFs9v16.js";import"./useDelayedRender-BZ-2ZMaR.js";import"./useId-B7b8ZTAL.js";import"./Label-CDB2lOYD.js";import"./SupportLabel-2cXsn4MG.js";import"./SuccessIcon-CdNPw73_.js";import"./Icon-BtsAqgGY.js";import"./WarningIcon-D0qdIJv2.js";import"./BaseRadioButton.stories-B4ZVTj3F.js";import"./BaseRadioButton-DjDetihD.js";import"./Title-C3Pldt6W.js";import"./Card-B6xsU8J5.js";import"./Text-7r6qlZTP.js";import"./Tag-Bnl7G77S.js";import"./ExpandablePanel-DMvEEowL.js";import"./useAnimatedHeightBetween-BK2FZV10.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BZkl5gle.js";import"./Expander-B-WmDuIw.js";import"./ChevronUpIcon-Bb8ukZ8a.js";import"./ListItem-CumBauPc.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
