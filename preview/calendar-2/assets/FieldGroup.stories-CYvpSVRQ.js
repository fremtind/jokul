import{r as p,j as i}from"./iframe-HSLlGUaS.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BFgR5nLW.js";import l from"./Help.stories-BixgQepp.js";import c from"./RadioButton.stories-CvaQaSrz.js";import{F as d}from"./FieldGroup-BI-euor9.js";import{C as k,a as u}from"./CheckboxPanel.stories-Z2-tx_vg.js";import{RadioPanel as g}from"./RadioPanel.stories-DPuN9ynU.js";import{C as h}from"./Checkbox-DxKJcEJC.js";import{R as b}from"./RadioPanel-DzZAeNCe.js";import{H as x}from"./Help-yNjYqiST.js";import{R as C}from"./RadioButton-CuZlzLJi.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-DKhA7r6e.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CdxKj9bs.js";import"./mergeRefs-B4VXoFz5.js";import"./BaseRadioButton.stories-DNocWFjz.js";import"./BaseRadioButton-BdnAff1L.js";import"./useId-AHNz34ey.js";import"./Label-662ei-IR.js";import"./SupportLabel-BTFNf5kQ.js";import"./SuccessIcon-3uSFdK-V.js";import"./Icon-BvzDlFHd.js";import"./WarningIcon-DGkoKlcd.js";import"./InputPanel-V3x8aDiN.js";import"./Button-HWG-pZwQ.js";import"./usePreviousValue-B4gjzJ1h.js";import"./Loader-rRfKF8_5.js";import"./useDelayedRender-JMfosgXp.js";import"./Title-CqBbWD-a.js";import"./Card-DnuadO4-.js";import"./Text-DoXrUJNn.js";import"./Tag--NNmoxqg.js";import"./ExpandablePanel-BtjkZAIB.js";import"./useAnimatedHeightBetween-C85JENbH.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-YN22yq8D.js";import"./Expander-PGi9AgOC.js";import"./ChevronUpIcon-CHHAPMPb.js";import"./ListItem-C_YPOpnU.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
