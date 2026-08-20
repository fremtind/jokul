import{r as n,j as i}from"./iframe-C8azJzef.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-B_KDmMLI.js";import l from"./Help.stories-DQbe57-S.js";import c from"./RadioButton.stories-BHGlndIK.js";import{F as d}from"./FieldGroup-lLNaLqkX.js";import{C as k,a as u}from"./CheckboxPanel.stories-QwnMoGy3.js";import{RadioPanel as g}from"./RadioPanel.stories-D5MFU_yr.js";import{C as h}from"./Checkbox-CqIm4ZFn.js";import{R as b}from"./RadioPanel-D7zzh1S-.js";import{H as x}from"./Help-Cuf18UuX.js";import{R as C}from"./RadioButton-DeJTyjpj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-C8JbjB_y.js";import"./Label-DjqwG3xy.js";import"./SupportLabel-BjI92Bc0.js";import"./SuccessIcon-nC7mNPf6.js";import"./Icon-C1yPPOGm.js";import"./WarningIcon-CLL-pgFO.js";import"./BaseRadioButton.stories-Ba5Mqee2.js";import"./BaseRadioButton-VT-ZcD6A.js";import"./InputPanel-B2ChE5Iz.js";import"./Flex-DevwC1Kj.js";import"./SlotComponent-DU78u4S8.js";import"./mergeRefs-C7-tQjus.js";import"./Button-CheAShL5.js";import"./usePreviousValue-Ce7vG723.js";import"./Loader-nES5Dz8n.js";import"./useDelayedRender-BS0paSgE.js";import"./Title-CW_-btlz.js";import"./Card-DMHLLFMN.js";import"./Text-YMrRUWOE.js";import"./Tag-jqbmItj2.js";import"./ExpandablePanel--D1ORVNU.js";import"./useAnimatedHeightBetween-BpHi9B7e.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-d4KyiB7H.js";import"./Expander-DpMnRGDT.js";import"./ChevronUpIcon-tABnxBs3.js";import"./ListItem-D5mCsP4p.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
