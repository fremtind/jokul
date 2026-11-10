import{r as n,j as i}from"./iframe-Di3ffKTP.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-OHCgLEHg.js";import{CheckboxStory as c}from"./Checkbox.stories-BViGaRGT.js";import d from"./Help.stories-BCV0d8B1.js";import k from"./RadioButton.stories-DOb2VK75.js";import{RadioPanel as u}from"./RadioPanel.stories-Btsx2c9f.js";import{F as g}from"./FieldGroup-BXQ8id-I.js";import{C as h}from"./Checkbox-DQ_2lOxD.js";import{R as b}from"./RadioPanel-DawmNjL2.js";import{H as x}from"./Help-CW-P85VC.js";import{R as C}from"./RadioButton-BNsxWxSd.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Dv5C5ZmO.js";import"./clsx-B-dksMZM.js";import"./Flex-D4uOU21s.js";import"./SlotComponent-D9rcEqHC.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CdGKzCSf.js";import"./usePreviousValue-CJwjFF0-.js";import"./Loader-9WKSzcAi.js";import"./useDelayedRender-DnX3nlrx.js";import"./useId-C3bTmqGz.js";import"./Label-dJA30Sj3.js";import"./SupportLabel-Nr1x9upU.js";import"./SuccessIcon-B_7Ws1aU.js";import"./Icon-DJ7eB7hM.js";import"./WarningIcon-ztgYcCBH.js";import"./BaseRadioButton.stories-Dh8iUMvp.js";import"./BaseRadioButton-9T2phVDC.js";import"./Title-lxjMmtB1.js";import"./Card-C7HLA1JI.js";import"./Text-0W0_5fLm.js";import"./Tag-izieuTNc.js";import"./ExpandablePanel-BnkaDBhR.js";import"./useAnimatedHeightBetween-CHY9H-36.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CfZGUqv8.js";import"./Expander-DFWfqFWd.js";import"./ChevronUpIcon-rhp5qNs4.js";import"./ListItem-RZAvCd0A.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
