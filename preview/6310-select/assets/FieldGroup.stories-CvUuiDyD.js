import{r as n,j as i}from"./iframe-WXql0yr-.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-4F3WDS_y.js";import l from"./Help.stories-C31Y7yvN.js";import c from"./RadioButton.stories-lQ3grzVf.js";import{F as d}from"./FieldGroup-CcHen7k1.js";import{C as k,a as u}from"./CheckboxPanel.stories-CG1U2vXQ.js";import{RadioPanel as g}from"./RadioPanel.stories-3pPhiZVu.js";import{C as h}from"./Checkbox-oZXdwj84.js";import{R as b}from"./RadioPanel-BK9VMfrU.js";import{H as x}from"./Help-CF_-O0e-.js";import{R as C}from"./RadioButton-B4CN9Fd6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B1unaClP.js";import"./Label-BwbLkrUU.js";import"./SupportLabel-BJyxK84m.js";import"./SuccessIcon-CYOyWzav.js";import"./Icon-f7TxltMM.js";import"./WarningIcon-xvstraac.js";import"./BaseRadioButton.stories-bFY4wl_m.js";import"./BaseRadioButton-B0G6FwpZ.js";import"./InputPanel-BCYYyPyS.js";import"./Flex-DrRVL5BK.js";import"./SlotComponent-CkEfO3Oj.js";import"./mergeRefs-DQc1Xav2.js";import"./Button-DwrG6tNE.js";import"./usePreviousValue-CTxPCBRR.js";import"./Loader-XgMfbvf_.js";import"./useDelayedRender-B7OLYskV.js";import"./Title-Cp3cgY5b.js";import"./Card-BI6ijaDt.js";import"./Text-Ci37VhlD.js";import"./Tag-BkqxlcGw.js";import"./ExpandablePanel-CCMIuGGM.js";import"./useAnimatedHeightBetween-2iB2-sxt.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DQDaO5cm.js";import"./Expander-fCdSXwpj.js";import"./ChevronUpIcon-B5oHB-7w.js";import"./ListItem-4zibw2FT.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
