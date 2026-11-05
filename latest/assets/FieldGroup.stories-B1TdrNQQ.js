import{r as n,j as i}from"./iframe-2xMaBd5k.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DOQftcoH.js";import{CheckboxStory as c}from"./Checkbox.stories-BbRxrh_h.js";import d from"./Help.stories-UcPKh9V4.js";import k from"./RadioButton.stories-Buy0X0g1.js";import{RadioPanel as u}from"./RadioPanel.stories-Cz0FH9Wv.js";import{F as g}from"./FieldGroup-BQdDrQC_.js";import{C as h}from"./Checkbox-DmcAyB79.js";import{R as b}from"./RadioPanel-BF-aDVIR.js";import{H as x}from"./Help-Bhgsa8_A.js";import{R as C}from"./RadioButton-BW1azWGO.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DfERlJjF.js";import"./clsx-B-dksMZM.js";import"./Flex-DcTPuEYq.js";import"./SlotComponent-CcOv4v1z.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-_RZ_WZXW.js";import"./usePreviousValue-t5GDUzsH.js";import"./Loader-oipKxg1p.js";import"./useDelayedRender-D4gLIFLt.js";import"./useId-BaV8DBYy.js";import"./Label-DEFAab_U.js";import"./SupportLabel-yaUe-12a.js";import"./SuccessIcon-Cz4VK1PT.js";import"./Icon-DaDqDGu0.js";import"./WarningIcon-BFOhXub6.js";import"./BaseRadioButton.stories-NQ4yfJ7I.js";import"./BaseRadioButton-CjPxCX40.js";import"./Title-S73N8NiT.js";import"./Card-G0LAafZ0.js";import"./Text-Co6USBFk.js";import"./Tag-B8LPpVHp.js";import"./ExpandablePanel-C7ClyQr5.js";import"./useAnimatedHeightBetween-BAqulKLb.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C6Dj8uIU.js";import"./Expander-C2DBLZoI.js";import"./ChevronUpIcon-DyjeOHSU.js";import"./ListItem-7i5GnNgM.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
