import{r as p,j as i}from"./iframe-B-gsrB7C.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-D8V_y1II.js";import l from"./Help.stories-Btewa8xg.js";import c from"./RadioButton.stories-DPltFUYo.js";import{F as d}from"./FieldGroup-2qf1_t-q.js";import{C as k,a as u}from"./CheckboxPanel.stories-Bt3umj80.js";import{RadioPanel as g}from"./RadioPanel.stories-CDTM4eN1.js";import{C as h}from"./Checkbox-vjYV2T_b.js";import{R as b}from"./RadioPanel-CX5ntLMT.js";import{H as x}from"./Help-D2lwPBI9.js";import{R as C}from"./RadioButton-RcPDldof.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CeIppJ9R.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DUws_h2B.js";import"./mergeRefs-fauIwjzm.js";import"./BaseRadioButton.stories-DQHlU8HC.js";import"./BaseRadioButton-4B-RUtnh.js";import"./useId-BeLfunr9.js";import"./Label-BEC1Bhzu.js";import"./SupportLabel-Dl6vDL7o.js";import"./SuccessIcon-DN2c95Z4.js";import"./Icon--6LHf8Va.js";import"./WarningIcon-DCRptmS4.js";import"./InputPanel-DcmMEL_k.js";import"./Button-CB8OIQ63.js";import"./usePreviousValue-BtetFu4T.js";import"./Loader-BPiyrU50.js";import"./useDelayedRender-CnHgPfma.js";import"./Title-BEC68jh6.js";import"./Card-TGbIHPs6.js";import"./Text-CHYEhKP6.js";import"./Tag-DCejFrQM.js";import"./ExpandablePanel-Cc6sgrq4.js";import"./useAnimatedHeightBetween-CkwjAw08.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Dxfvtsrw.js";import"./Expander-bc8M-min.js";import"./ChevronUpIcon-9Sc-QQSG.js";import"./ListItem-Dr_CoRrF.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
