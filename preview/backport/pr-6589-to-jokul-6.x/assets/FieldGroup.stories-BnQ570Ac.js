import{r as n,j as i}from"./iframe-BXWrlVlI.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BBRhn_Mf.js";import{CheckboxStory as c}from"./Checkbox.stories-DYoRMBDo.js";import d from"./Help.stories-DAybzIW-.js";import k from"./RadioButton.stories-CnT0NV9t.js";import{RadioPanel as u}from"./RadioPanel.stories-DDv8_apS.js";import{F as g}from"./FieldGroup-CEx9vRwZ.js";import{C as h}from"./Checkbox-BpLTfxIo.js";import{R as b}from"./RadioPanel-Cg5czlaX.js";import{H as x}from"./Help-DzQpHB5g.js";import{R as C}from"./RadioButton-Bhu5MR6i.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Bpc5Q00U.js";import"./clsx-B-dksMZM.js";import"./Flex-CuMd-ZBK.js";import"./SlotComponent-Bc9XaC7c.js";import"./mergeRefs-D6Xijx8p.js";import"./Button-CdmiKSHU.js";import"./usePreviousValue-C9cpV-hp.js";import"./Loader-BjHzknqX.js";import"./useDelayedRender-hhGyoOGj.js";import"./useId-CQmYeihF.js";import"./Label-CwnkRybq.js";import"./SupportLabel-BM7QAHSH.js";import"./SuccessIcon-CJlBFfAi.js";import"./Icon-DdhlFq55.js";import"./WarningIcon-DMWtTbxl.js";import"./BaseRadioButton.stories-LlhY7e2g.js";import"./BaseRadioButton--wr1ltmr.js";import"./Title-mKO6QM0N.js";import"./Card-DQTLaggN.js";import"./Text-B6c7zLWJ.js";import"./Tag-BecjAfOR.js";import"./ExpandablePanel-C4_-aTyM.js";import"./useAnimatedHeightBetween-C6U68zC9.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DE4ceQyO.js";import"./Expander-DIgMqfMm.js";import"./ChevronUpIcon-VvC_Ip9l.js";import"./ListItem-Q1tgHug_.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
