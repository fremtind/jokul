import{r as p,j as i}from"./iframe-CP-IjQrv.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxPanelStory as s}from"./CheckboxPanel.stories-SEhsoJlF.js";import{CheckboxStory as l}from"./Checkbox.stories-DsO6h7MR.js";import c from"./Help.stories-C7L2Daeb.js";import d from"./RadioButton.stories-mWCQqUrd.js";import{RadioPanel as k}from"./RadioPanel.stories-CF1gy7OD.js";import{F as u}from"./FieldGroup-n1uLUBkH.js";import{C as g}from"./Checkbox-zdGTm-xr.js";import{C as h}from"./CheckboxPanel-CUZafer6.js";import{R as b}from"./RadioPanel-BWT6W3UG.js";import{H as x}from"./Help-mff3XHis.js";import{R as C}from"./RadioButton-DVMKUEiK.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-BDGBL4TZ.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CPPOtklf.js";import"./mergeRefs-BvY58Wlt.js";import"./Button-BG5zo4aX.js";import"./usePreviousValue-FiYBydUd.js";import"./Loader-BBwKfhzX.js";import"./useDelayedRender-Dqn-kt48.js";import"./InputPanel-DcHo8SjT.js";import"./useId-Cn0qH6J3.js";import"./SupportLabel-CaoOG4nj.js";import"./SuccessIcon-CIubNwDC.js";import"./Icon-D_iovIj6.js";import"./WarningIcon-DjqjKvB_.js";import"./BaseRadioButton-Bh1eIqfE.js";import"./Label-Dt7baxze.js";import"./BaseRadioButton.stories-CLBC5FYm.js";import"./Title-ChMZNWaC.js";import"./Card-gjHPQEZg.js";import"./Text-10_-iEqg.js";import"./Tag-xFogowGi.js";import"./ExpandablePanel-hSWtaYuQ.js";import"./useAnimatedHeightBetween-DdG1k1v8.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Dn5XXmsT.js";import"./Expander-YWRyUZz4.js";import"./ChevronUpIcon-DMcSi8r5.js";import"./ListItem-C44jI8d0.js";const ie={title:"Komponenter/Field Group",component:u,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...d.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(g,{...l.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...k.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...c.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
