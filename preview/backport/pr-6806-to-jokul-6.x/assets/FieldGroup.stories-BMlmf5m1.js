import{r as n,j as i}from"./iframe-DVvSRF9B.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-C4FJmnGF.js";import{CheckboxStory as c}from"./Checkbox.stories-DXs8o46I.js";import d from"./Help.stories-DauN3sMJ.js";import k from"./RadioButton.stories-D2DJVgxM.js";import{RadioPanel as u}from"./RadioPanel.stories-CdZEVWCF.js";import{F as g}from"./FieldGroup-Lm3Dyxp-.js";import{C as h}from"./Checkbox-DDjb0yqw.js";import{R as b}from"./RadioPanel-CD3qJcIg.js";import{H as x}from"./Help-cZ105kJV.js";import{R as C}from"./RadioButton-DAXbZiEq.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DoObFOBp.js";import"./clsx-B-dksMZM.js";import"./Flex-BVIR5ZdJ.js";import"./SlotComponent-DC_PQTMN.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-FwXPaYu1.js";import"./usePreviousValue-BZd_aIGu.js";import"./Loader-lWuT8tJq.js";import"./useDelayedRender-sLXjjuaK.js";import"./useId-D2G3Fu5m.js";import"./Label-BRjxClCH.js";import"./SupportLabel-CkkcZjxB.js";import"./SuccessIcon-D-Z_C2wf.js";import"./Icon-DT6Tz74c.js";import"./WarningIcon-D-GChEr8.js";import"./BaseRadioButton.stories-B56vwiy7.js";import"./BaseRadioButton-D-Ns6MI5.js";import"./Title-BEpss5Z1.js";import"./Card-DjshQBC2.js";import"./Text-BfyudhB3.js";import"./Tag-RnFWP85z.js";import"./ExpandablePanel-GxV1tjGn.js";import"./useAnimatedHeightBetween-5oRvx9Rt.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DuY5l9Kv.js";import"./Expander-BHLk9qDf.js";import"./ChevronUpIcon-Bk5gmZzp.js";import"./ListItem-CTvCPeUn.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
