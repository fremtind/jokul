import{r as n,j as i}from"./iframe-D3_Hxfmq.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BNrjPfyi.js";import l from"./Help.stories-9VUa2DcN.js";import c from"./RadioButton.stories-BP_zN5ct.js";import{F as d}from"./FieldGroup-o4sCqdG9.js";import{C as k,a as u}from"./CheckboxPanel.stories-C5dQ4iZE.js";import{RadioPanel as g}from"./RadioPanel.stories-D14q5Wlg.js";import{C as h}from"./Checkbox-Blnpu-KL.js";import{R as b}from"./RadioPanel-PF8CgJAF.js";import{H as x}from"./Help-CBYebLvk.js";import{R as C}from"./RadioButton-PeGbqlg3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-wWWU7FH2.js";import"./Label-BPZzypY8.js";import"./SupportLabel-BWMr0VjH.js";import"./SuccessIcon-DD25IuJ2.js";import"./Icon-Df93gP2G.js";import"./WarningIcon-DsILXr21.js";import"./BaseRadioButton.stories-y4_ka1Cb.js";import"./BaseRadioButton-CC5Nvk2j.js";import"./InputPanel-Bf1gM5YH.js";import"./Flex-BVcRspdC.js";import"./SlotComponent-QVXCAeiS.js";import"./mergeRefs-COR7TRTK.js";import"./Button-BkcGn1Gw.js";import"./usePreviousValue-B9SyUwTZ.js";import"./Loader-1g9nIVYT.js";import"./useDelayedRender-BThGcMUK.js";import"./Title-CG0xQQDR.js";import"./Card-CQWo2YcJ.js";import"./Text-B1T0i-08.js";import"./Tag-CTY0pYpA.js";import"./ExpandablePanel-BAY_iIg3.js";import"./useAnimatedHeightBetween-jRmQpEZr.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DTAEQ8X5.js";import"./Expander-B8lCTPtN.js";import"./ChevronUpIcon-CfFI5Viv.js";import"./ListItem-DL9r4LIk.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
