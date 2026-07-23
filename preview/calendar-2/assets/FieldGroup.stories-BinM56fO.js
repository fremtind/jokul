import{r as p,j as i}from"./iframe-BcD9GcZD.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-eInXMVXU.js";import l from"./Help.stories-D8osCD1J.js";import c from"./RadioButton.stories-8l60hYET.js";import{F as d}from"./FieldGroup-BVpEEagV.js";import{C as k,a as u}from"./CheckboxPanel.stories-m_0DYZRm.js";import{RadioPanel as g}from"./RadioPanel.stories-CiRHquA0.js";import{C as h}from"./Checkbox-BR2T3B5r.js";import{R as b}from"./RadioPanel-Bo0Sz1kG.js";import{H as x}from"./Help-C6L1eTgx.js";import{R as C}from"./RadioButton-B_db-tPN.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-HaaDzfaK.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-Btcm6jvF.js";import"./mergeRefs-LeLNpsZ-.js";import"./BaseRadioButton.stories-b1z4zzCz.js";import"./BaseRadioButton-DHroQYeV.js";import"./useId-BU_x9pLF.js";import"./Label-CWctKa4l.js";import"./SupportLabel-BHMJeESa.js";import"./SuccessIcon-DwSiPtvA.js";import"./Icon-inwkS7hI.js";import"./WarningIcon-C1csXuA_.js";import"./InputPanel-DocdcQc0.js";import"./Button-e4q9teLB.js";import"./usePreviousValue-n5Op5Yii.js";import"./Loader-C6VY7HYq.js";import"./useDelayedRender-sX3oCVh_.js";import"./Title-BHwmiiJH.js";import"./Card-uOID55zS.js";import"./Text-CGEtWBJE.js";import"./Tag-YLRGVvg_.js";import"./ExpandablePanel-BmV2UVD1.js";import"./useAnimatedHeightBetween-DGMrDDUn.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DWuYDWzT.js";import"./Expander-BRbYNPKR.js";import"./ChevronUpIcon-C9Va57Gm.js";import"./ListItem-kNBU6L7M.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
