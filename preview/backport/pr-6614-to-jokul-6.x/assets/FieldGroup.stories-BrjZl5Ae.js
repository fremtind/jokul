import{r as n,j as i}from"./iframe-C6vUXWdd.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Ce3YKT8x.js";import{CheckboxStory as c}from"./Checkbox.stories-Cj3KKhkW.js";import d from"./Help.stories-CE6aQ32O.js";import k from"./RadioButton.stories-FTdMAuS3.js";import{RadioPanel as u}from"./RadioPanel.stories-Dw1byTBO.js";import{F as g}from"./FieldGroup-DqPfz4BC.js";import{C as h}from"./Checkbox-SG1ag79S.js";import{R as b}from"./RadioPanel-bCCP9mdg.js";import{H as x}from"./Help-B3U707fe.js";import{R as C}from"./RadioButton-DLdqpedi.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DxJv8jyl.js";import"./clsx-B-dksMZM.js";import"./Flex-DYxvG5PN.js";import"./SlotComponent-CVRafasF.js";import"./mergeRefs-CYgKi7gL.js";import"./Button-SF_y_AnO.js";import"./usePreviousValue-DX45YL0a.js";import"./Loader-C3Mh_U6S.js";import"./useDelayedRender-HLaGqrZ9.js";import"./useId-Cwi9pEX_.js";import"./Label-O__kI-U6.js";import"./SupportLabel-DWb0bMrq.js";import"./SuccessIcon-CDUlgAuX.js";import"./Icon-Dtsh_FZJ.js";import"./WarningIcon-CW5JYLRm.js";import"./BaseRadioButton.stories-DRNP-ybs.js";import"./BaseRadioButton-Hzn2q5c6.js";import"./Title-CeMEfZeP.js";import"./Card-CsnkLBBY.js";import"./Text-SU-S9p2H.js";import"./Tag-BbWevtB3.js";import"./ExpandablePanel-BVrh1szc.js";import"./useAnimatedHeightBetween-BpfZcMQ8.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D3wvWFSz.js";import"./Expander-yRtvoTVi.js";import"./ChevronUpIcon-NqtLRrM9.js";import"./ListItem-CIWbTEZi.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
