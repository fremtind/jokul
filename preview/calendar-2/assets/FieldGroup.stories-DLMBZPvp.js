import{r as n,j as i}from"./iframe-C35WIanq.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-D43zg3qi.js";import l from"./Help.stories-BC2yQjmi.js";import c from"./RadioButton.stories-B3DFPTRY.js";import{F as d}from"./FieldGroup-DiRC3adN.js";import{C as k,a as u}from"./CheckboxPanel.stories-DM6Fh19S.js";import{RadioPanel as g}from"./RadioPanel.stories-DozSCGqi.js";import{C as h}from"./Checkbox-C8DjLrvt.js";import{R as b}from"./RadioPanel-j5juaXSI.js";import{H as x}from"./Help-hU2EY3qU.js";import{R as C}from"./RadioButton-B2RCnYRh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BPu9jLLw.js";import"./Label-B5Rs1WcA.js";import"./SupportLabel-rkmmzDmm.js";import"./SuccessIcon-BwGv8Xpt.js";import"./Icon-DN0HpI1L.js";import"./WarningIcon-DJNnNv07.js";import"./BaseRadioButton.stories-yKyt3ck3.js";import"./BaseRadioButton-CthGHr1r.js";import"./InputPanel-CmE3tS01.js";import"./Flex-C6NwKZdy.js";import"./SlotComponent-AUfxcm6X.js";import"./mergeRefs-BJe3BZ2X.js";import"./Button-DqDrnJmN.js";import"./usePreviousValue-B80q3YLM.js";import"./Loader-BXVF7U8V.js";import"./useDelayedRender-CPZV_9iF.js";import"./Title-BzvPE4Tv.js";import"./Card-CnUHzVJv.js";import"./Text-VE30LP8r.js";import"./Tag-IrBcSOn7.js";import"./ExpandablePanel-17xNrij1.js";import"./useAnimatedHeightBetween-D7EbNZZV.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CUZBswZJ.js";import"./Expander-CMJBeNM0.js";import"./ChevronUpIcon-DdxMf4MC.js";import"./ListItem-B0OB1mSb.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
