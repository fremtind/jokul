import{r as n,j as i}from"./iframe-DkWzlxd-.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CpBTH5NQ.js";import l from"./Help.stories-Byu6ESUD.js";import c from"./RadioButton.stories-DM8Gt6nW.js";import{F as d}from"./FieldGroup-flbewP91.js";import{C as k,a as u}from"./CheckboxPanel.stories-C0BEg1pV.js";import{RadioPanel as g}from"./RadioPanel.stories-DkHmXmMs.js";import{C as h}from"./Checkbox-CJay4y3-.js";import{R as b}from"./RadioPanel-IgrBAaFv.js";import{H as x}from"./Help-Bi-D1u5E.js";import{R as C}from"./RadioButton-RjYz5T5j.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Bh0TjDrf.js";import"./Label-B0iIqUDx.js";import"./SupportLabel-Ec81dW36.js";import"./SuccessIcon-DfDVkpsR.js";import"./Icon-CEH0yyGC.js";import"./WarningIcon-BBmxHX54.js";import"./BaseRadioButton.stories-DCSY_T_A.js";import"./BaseRadioButton-DpeHfEQA.js";import"./InputPanel-4-a3N5Tb.js";import"./Flex-DgR9zN_l.js";import"./SlotComponent-H_cWLzDU.js";import"./mergeRefs-DlasLgYa.js";import"./Button-CMyYvT5D.js";import"./usePreviousValue-DJEfkI-V.js";import"./Loader-rp8cfTm2.js";import"./useDelayedRender-Da02rP2Z.js";import"./Title-DPAsKNfk.js";import"./Card-D9d_S_jz.js";import"./Text-DH-bTwj1.js";import"./Tag--RXIuTI7.js";import"./ExpandablePanel-BSZDIUL5.js";import"./useAnimatedHeightBetween-bO0QDNhx.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CqkS_cet.js";import"./Expander-CMyjDND-.js";import"./ChevronUpIcon-C9DHhBuG.js";import"./ListItem-DC8bnRzS.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
