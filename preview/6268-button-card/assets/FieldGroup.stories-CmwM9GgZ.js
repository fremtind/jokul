import{r as p,j as i}from"./iframe-BCNrWYsf.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories--IE3eFgw.js";import l from"./Help.stories-4V2NYhit.js";import c from"./RadioButton.stories-ClUqHy7h.js";import{F as d}from"./FieldGroup-uN2I65r0.js";import{C as k,a as u}from"./CheckboxPanel.stories-fQCFyklk.js";import{RadioPanel as g}from"./RadioPanel.stories-BPE4Rj8H.js";import{C as h}from"./Checkbox-BiNM1nQz.js";import{R as b}from"./RadioPanel-CYICUorx.js";import{H as x}from"./Help-Bp-Bj6JA.js";import{R as C}from"./RadioButton-DFT_EOTZ.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-BeLPR28j.js";import"./BaseRadioButton-C_wdIZCS.js";import"./clsx-B-dksMZM.js";import"./useId-B-bde9g9.js";import"./Label-EdRn_M3f.js";import"./SupportLabel-I4vzDP8q.js";import"./SuccessIcon-Da2Z-20i.js";import"./Icon-DIZUUCaq.js";import"./WarningIcon-BD-DuYdL.js";import"./InputPanel-BZJrOvct.js";import"./Flex-D89BCg-5.js";import"./SlotComponent-CUhMkoW2.js";import"./mergeRefs-G_nY8Zrn.js";import"./Button-CMHm0IQz.js";import"./usePreviousValue-8eE92aST.js";import"./Loader-BtJlZ4Fc.js";import"./useDelayedRender-DQ7dyJPo.js";import"./Title-B00qqn0q.js";import"./Card-Bxd8bnED.js";import"./Text-DtUeQtsS.js";import"./Tag-CBXb-Yva.js";import"./ExpandablePanel-6L_f9TpA.js";import"./useAnimatedHeightBetween-CW72EHK1.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-mzANS64B.js";import"./Expander-C-_kCauK.js";import"./ChevronDownIcon-5TtStAKS.js";import"./ChevronUpIcon--a5vmUvs.js";import"./ListItem-4-PRcLuy.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
