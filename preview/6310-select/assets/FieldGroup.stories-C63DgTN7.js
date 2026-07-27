import{r as p,j as i}from"./iframe-CtV_8YM5.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BA73-HgT.js";import l from"./Help.stories-DUxqLzuV.js";import c from"./RadioButton.stories-BNdHv1BP.js";import{F as d}from"./FieldGroup-C28cc0jl.js";import{C as k,a as u}from"./CheckboxPanel.stories-CSaMzs9S.js";import{RadioPanel as g}from"./RadioPanel.stories-B7NaW7SF.js";import{C as h}from"./Checkbox-DGZDdCoF.js";import{R as b}from"./RadioPanel-DU4V0Uy2.js";import{H as x}from"./Help-BZWuicNa.js";import{R as C}from"./RadioButton-BUGRosNe.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BYSoNymn.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-JnyONeCz.js";import"./mergeRefs-C5H-FfVs.js";import"./BaseRadioButton.stories-_Yx2jbJ2.js";import"./BaseRadioButton-DWsPx6et.js";import"./useId-CV-LVNxa.js";import"./Label-CIfpbCwU.js";import"./SupportLabel-BCJ54qu_.js";import"./SuccessIcon-RstulEUD.js";import"./Icon-B8k6P24I.js";import"./WarningIcon-CekaX7uZ.js";import"./InputPanel-7cj_ztlW.js";import"./Button-R9eHjM_I.js";import"./usePreviousValue-ToNcnA71.js";import"./Loader-liBzyO5w.js";import"./useDelayedRender-BgxRdhzu.js";import"./Title-C1MjCCeh.js";import"./Card-CXcp3Nb6.js";import"./Text-D9wjizXB.js";import"./Tag-DGh6sMUv.js";import"./ExpandablePanel-Cj6h0hGf.js";import"./useAnimatedHeightBetween-BfFWXfuu.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BDD6tJ0-.js";import"./Expander-CWu_4M5R.js";import"./ChevronDownIcon-BX6S_1hK.js";import"./ChevronUpIcon-Cl6biF4D.js";import"./ListItem-DKb6Fq5H.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
