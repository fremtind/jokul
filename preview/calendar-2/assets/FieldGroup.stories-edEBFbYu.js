import{r as p,j as i}from"./iframe-Cp07xSmx.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-R5u97kF7.js";import l from"./Help.stories-CMac-pMw.js";import c from"./RadioButton.stories-KwrsAgWf.js";import{F as d}from"./FieldGroup-B7X6bN7l.js";import{C as k,a as u}from"./CheckboxPanel.stories-BMFDCNYK.js";import{RadioPanel as g}from"./RadioPanel.stories-BL82SiTf.js";import{C as h}from"./Checkbox-CNnTX5ne.js";import{R as b}from"./RadioPanel-VT3FfZ-T.js";import{H as x}from"./Help-C_glQDAm.js";import{R as C}from"./RadioButton-DRN1GzqC.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CsiBVy-2.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BN4OncKp.js";import"./mergeRefs-DveSDJ_e.js";import"./BaseRadioButton.stories-B_oxBlFD.js";import"./BaseRadioButton-CCCWXHAV.js";import"./useId-aQD7Wi8L.js";import"./Label-C1R2znUG.js";import"./SupportLabel-D8eTd6ZF.js";import"./SuccessIcon-DV6mJFuV.js";import"./Icon-s9meQJjp.js";import"./WarningIcon-CKDm5_9y.js";import"./InputPanel-DDav9BRW.js";import"./Button-Ds1Wz7I6.js";import"./usePreviousValue-CxbS1Cv8.js";import"./Loader-BnPL5fgi.js";import"./useDelayedRender-BnDsBb8_.js";import"./Title-b9yJpIyI.js";import"./Card-BzZNA-px.js";import"./Text-C0n0dOZ7.js";import"./Tag-CzxCNokE.js";import"./ExpandablePanel-DQqY8Sul.js";import"./useAnimatedHeightBetween-m_s9Ni4P.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences--6IW7mWh.js";import"./Expander-DK0vZ8xh.js";import"./ChevronUpIcon-C9N5CaeU.js";import"./ListItem-BjCBp2nz.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
