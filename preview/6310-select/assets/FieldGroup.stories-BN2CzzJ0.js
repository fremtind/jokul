import{r as p,j as i}from"./iframe-CHf12XfP.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CuqU_ZtM.js";import l from"./Help.stories-DPab9w92.js";import c from"./RadioButton.stories-C4jE6izT.js";import{F as d}from"./FieldGroup-D3AQ3QSd.js";import{C as k,a as u}from"./CheckboxPanel.stories-sehVWW2D.js";import{RadioPanel as g}from"./RadioPanel.stories-BOd5Yavl.js";import{C as h}from"./Checkbox-I7UDFvrM.js";import{R as b}from"./RadioPanel-DFOC-cas.js";import{H as x}from"./Help-B7_emSJN.js";import{R as C}from"./RadioButton-DUUoHgSL.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-MmRxHKlH.js";import"./BaseRadioButton-E0E1RkkB.js";import"./clsx-B-dksMZM.js";import"./useId-BVFiF4SG.js";import"./Label-CbeJTgVG.js";import"./SupportLabel-Ce1x4-jy.js";import"./SuccessIcon-BpIC86U3.js";import"./Icon-DVa1JWUW.js";import"./WarningIcon-_8OXw8sw.js";import"./InputPanel-CUwUZdAa.js";import"./Flex-Blj6Fu3J.js";import"./SlotComponent-BQ1Z-J2J.js";import"./mergeRefs-LxvLBkOE.js";import"./Button-DSV0r9UW.js";import"./usePreviousValue-DyeAyLsO.js";import"./Loader-Dr-JXS95.js";import"./useDelayedRender-CD2OmAOd.js";import"./Title-PCyUj0t9.js";import"./Card-Cc2JNyd0.js";import"./Text-EbEDjkGm.js";import"./Tag-DPm-wAYD.js";import"./ExpandablePanel-CkFMcuio.js";import"./useAnimatedHeightBetween-BtnFy2em.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CyI1G-cr.js";import"./Expander-DmAP5riX.js";import"./ChevronDownIcon-BgrgO3eZ.js";import"./ChevronUpIcon-Ch8_zhcI.js";import"./ListItem-GzeDxH3s.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
