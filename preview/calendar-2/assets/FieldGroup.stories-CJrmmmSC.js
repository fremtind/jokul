import{r as n,j as i}from"./iframe-pjLwb0-n.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DtDamtrp.js";import l from"./Help.stories-BwraR0rz.js";import c from"./RadioButton.stories-it2_fQ8y.js";import{F as d}from"./FieldGroup-CH_vgVTt.js";import{C as k,a as u}from"./CheckboxPanel.stories-DMYPVgP0.js";import{RadioPanel as g}from"./RadioPanel.stories-B2UBfAJ0.js";import{C as h}from"./Checkbox-BKN8uYOu.js";import{R as b}from"./RadioPanel-CZGnQ6gi.js";import{H as x}from"./Help-CFZtJv16.js";import{R as C}from"./RadioButton-D8-rFWRc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BfQwyt0n.js";import"./Label-B8lKx5vS.js";import"./SupportLabel-B4TN6YUr.js";import"./SuccessIcon-DX_uUfBI.js";import"./Icon-VgqaohRD.js";import"./WarningIcon-DFqNig3M.js";import"./BaseRadioButton.stories-nYhPtZV1.js";import"./BaseRadioButton-BzYq0eIc.js";import"./InputPanel-CicD_YNl.js";import"./Flex-CjVKRhPV.js";import"./SlotComponent-BA70inb2.js";import"./mergeRefs-DB_VP8QM.js";import"./Button-DgKx6Dol.js";import"./usePreviousValue-BLtqDLKt.js";import"./Loader-DW680bvz.js";import"./useDelayedRender-0ht1AEUI.js";import"./Title-KgTWsoqr.js";import"./Card-B2oYskwn.js";import"./Text-BKSG4w-s.js";import"./Tag-CbSvM6nN.js";import"./ExpandablePanel-vbxKnVY5.js";import"./useAnimatedHeightBetween-1m7ejhhn.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DLKxE87w.js";import"./Expander-CrKAAhSz.js";import"./ChevronUpIcon-Dm83nsS5.js";import"./ListItem-Oe-VdY1V.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
