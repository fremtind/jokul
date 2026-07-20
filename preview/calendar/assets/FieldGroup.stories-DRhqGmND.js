import{r as p,j as i}from"./iframe-GMJ0u05F.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CYwdhjzg.js";import l from"./Help.stories-C9INzcxy.js";import c from"./RadioButton.stories-Do16u1wO.js";import{F as d}from"./FieldGroup-DJpgEc84.js";import{C as k,a as u}from"./CheckboxPanel.stories-B1oi3EqL.js";import{RadioPanel as g}from"./RadioPanel.stories-DXa6l8Ko.js";import{C as h}from"./Checkbox-CXPmi_q9.js";import{R as b}from"./RadioPanel-AdL4NmvT.js";import{H as x}from"./Help-ZsPa6Uho.js";import{R as C}from"./RadioButton-CR3kTAm_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-ClkuXJKV.js";import"./Label-BzprbPnr.js";import"./SupportLabel-BSxnvWEz.js";import"./SuccessIcon-Bbp9TomH.js";import"./Icon-p9sF1-zJ.js";import"./WarningIcon-CctOMVx7.js";/* empty css               *//* empty css               */import"./Flex-DsdrmVI8.js";import"./SlotComponent-ZSL0R34Q.js";import"./mergeRefs-DV2MPVBn.js";import"./BaseRadioButton.stories--ioksf1o.js";import"./BaseRadioButton-DZLvgsbd.js";import"./InputPanel-izTzd_zZ.js";import"./Button-BBkYfexJ.js";import"./usePreviousValue--4-wB7Wr.js";import"./Loader-DYW0AfPT.js";import"./useDelayedRender-B0GBUpG3.js";import"./Title-BqFZTG2E.js";import"./Card-CbrXs-0O.js";import"./Text-CdzdDExJ.js";import"./Tag-qd7Zbp1_.js";import"./ExpandablePanel-CxYAZWTX.js";import"./useAnimatedHeightBetween-Cafu8Cxx.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-96MRrIH5.js";import"./Expander-YZWlKNYw.js";import"./ChevronDownIcon-CprrjqNy.js";import"./ChevronUpIcon-vTxtprIZ.js";import"./ListItem-DQC_jM9d.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
