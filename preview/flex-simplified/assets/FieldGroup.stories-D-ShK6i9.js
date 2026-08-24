import{r as n,j as i}from"./iframe-CG_7dJ_z.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-o2BlgV52.js";import l from"./Help.stories-DHOC24sN.js";import c from"./RadioButton.stories-D-oAW4ch.js";import{F as d}from"./FieldGroup-CRXZ_nuq.js";import{C as k,a as u}from"./CheckboxPanel.stories-HJJUK8FT.js";import{RadioPanel as g}from"./RadioPanel.stories-1f3Q7E-b.js";import{C as h}from"./Checkbox-YAZNpTY3.js";import{R as b}from"./RadioPanel-A0sA5kX5.js";import{H as x}from"./Help-CfDyDi7a.js";import{R as C}from"./RadioButton-C3zxYClt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-sBJ2wrht.js";import"./Label-ChSmZMVc.js";import"./SupportLabel-CRVtVECw.js";import"./SuccessIcon-DDFbS8ji.js";import"./Icon-BbCEapiU.js";import"./WarningIcon-4SCYwHkk.js";import"./BaseRadioButton.stories-CnwH1lfA.js";import"./BaseRadioButton-BfJF7DJM.js";import"./InputPanel-DQBMGCNJ.js";import"./Flex-ngnD78wi.js";import"./SlotComponent-DUFZTOYv.js";import"./mergeRefs-gfklzTe9.js";import"./Button-Drblekix.js";import"./usePreviousValue-CLIdqbc0.js";import"./Loader-Pt8wlXIM.js";import"./useDelayedRender-BqWrBMXI.js";import"./Title-CBaONo5l.js";import"./Card-DL4GZdaY.js";import"./Text-CNlTfxeu.js";import"./Tag-CCM2U0Mj.js";import"./ExpandablePanel-DgcGSXKV.js";import"./useAnimatedHeightBetween--El9vqqj.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DGbKxSh2.js";import"./Expander-CV9iKIAS.js";import"./ChevronUpIcon-fE4XgcQF.js";import"./ListItem-DxZ10vT0.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
