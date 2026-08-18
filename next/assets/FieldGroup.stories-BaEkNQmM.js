import{r as p,j as i}from"./iframe-6ihqrRWZ.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-NNEl7x1E.js";import l from"./Help.stories-FWIqYHT0.js";import c from"./RadioButton.stories-Djp57OIe.js";import{F as d}from"./FieldGroup-C7cWbM2W.js";import{C as k,a as u}from"./CheckboxPanel.stories-eOafl66o.js";import{RadioPanel as g}from"./RadioPanel.stories-BsiNYpqQ.js";import{C as h}from"./Checkbox-CZW2ALPD.js";import{R as b}from"./RadioPanel-TB8DQzfN.js";import{H as x}from"./Help-BmTgkuFs.js";import{R as C}from"./RadioButton-DJFhmial.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-Cd5-ScDV.js";import"./BaseRadioButton-CYSHJYjh.js";import"./clsx-B-dksMZM.js";import"./useId-Bo9bUYHi.js";import"./Label-Ddvjq_H7.js";import"./SupportLabel-DSqqk0H2.js";import"./SuccessIcon-CzZIlMPl.js";import"./Icon-iLLwj7AW.js";import"./WarningIcon-BlXqVFXH.js";import"./InputPanel-CDEuoBhg.js";import"./Flex-B3LZld7b.js";import"./SlotComponent-BPPqNxH4.js";import"./mergeRefs-CmocE7cY.js";import"./Button-Cw60sCpg.js";import"./usePreviousValue-Bp5xYhLw.js";import"./Loader-B0wiNB47.js";import"./useDelayedRender-BQ96xebn.js";import"./Title-DR5TDHTL.js";import"./Card-C8ABGqW6.js";import"./Text-DnWXA5KW.js";import"./Tag-Dd543Spi.js";import"./ExpandablePanel-BMd8oE7j.js";import"./useAnimatedHeightBetween-CBpYrNg4.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CtpBTfDe.js";import"./Expander-Dt8cHjTI.js";import"./ChevronDownIcon-DUVRMT5H.js";import"./ChevronUpIcon-CDSQLCyM.js";import"./ListItem-DL2AilWo.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
