import{r as n,j as i}from"./iframe-CVcth_EK.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-D0SDCT0K.js";import l from"./Help.stories-FAvG-gMK.js";import c from"./RadioButton.stories-Ck2HWCyb.js";import{F as d}from"./FieldGroup-AtMN34DL.js";import{C as k,a as u}from"./CheckboxPanel.stories-DuuUpKDg.js";import{RadioPanel as g}from"./RadioPanel.stories-M8V5BHr-.js";import{C as h}from"./Checkbox-DA850IjF.js";import{R as b}from"./RadioPanel-BaIKoa42.js";import{H as x}from"./Help-C2p3IhV5.js";import{R as C}from"./RadioButton-DB1TmHg8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DO2lhBpB.js";import"./Label-4UY4fuPu.js";import"./SupportLabel-D7zPzx4w.js";import"./SuccessIcon-BJiRp1BW.js";import"./Icon-DPcrPs2K.js";import"./WarningIcon-ByMew5wJ.js";import"./BaseRadioButton.stories-Duj2vis2.js";import"./BaseRadioButton-CMh4G3E1.js";import"./InputPanel-DqvGCsUE.js";import"./Flex-BPojJ13U.js";import"./SlotComponent-CtLI0cxe.js";import"./mergeRefs-Bf6tfLY4.js";import"./Button-Ce2r6L15.js";import"./usePreviousValue-B7D9A_Lt.js";import"./Loader-DN1sQCb-.js";import"./useDelayedRender-By_V9-YI.js";import"./Title-CakgfTKl.js";import"./Card-BYIoStKe.js";import"./Text-DZNimwka.js";import"./Tag-BiQXZqAv.js";import"./ExpandablePanel-DlLzCCqZ.js";import"./useAnimatedHeightBetween-UxifXhR2.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CVFd9biU.js";import"./Expander-D0ZV2jSD.js";import"./ChevronUpIcon-p6p6_qsJ.js";import"./ListItem-DY1OLtYZ.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
