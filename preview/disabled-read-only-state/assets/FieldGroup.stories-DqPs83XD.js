import{r as p,j as i}from"./iframe-BNYFmsG_.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxPanelStory as s}from"./CheckboxPanel.stories-C3jO3UhK.js";import{CheckboxStory as l}from"./Checkbox.stories-BNCThgxR.js";import c from"./Help.stories-DtWz03QL.js";import d from"./RadioButton.stories-BSdrxeiK.js";import{RadioPanel as k}from"./RadioPanel.stories-CUqf56VU.js";import{F as u}from"./FieldGroup-CPe-neRc.js";import{C as g}from"./Checkbox-JHs6FcCy.js";import{C as h}from"./CheckboxPanel-DqcgaSXf.js";import{R as b}from"./RadioPanel-DfKEJiZW.js";import{H as x}from"./Help-BIyHNpSC.js";import{R as C}from"./RadioButton-DBaAJI1l.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-CUUbswY4.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DKvP6kcx.js";import"./mergeRefs-B3I4I1O5.js";import"./Button-B3rCCuYL.js";import"./usePreviousValue-DxlhbZGD.js";import"./Loader-BEVUKKmW.js";import"./useDelayedRender-NZm3ARlE.js";import"./InputPanel-GaV1Cv44.js";import"./useId-BC4CVPX0.js";import"./SupportLabel-CoWXPnrM.js";import"./SuccessIcon-TfnEVVuA.js";import"./Icon-1GIiArJa.js";import"./WarningIcon-CJJewKK_.js";import"./BaseRadioButton-ChNWsqMi.js";import"./Label-W1tkSAD6.js";import"./BaseRadioButton.stories-B7b0fNou.js";import"./Title-95aMgiMG.js";import"./Card-DOmTo7Q7.js";import"./Text-DEr-tyyZ.js";import"./Tag-TnTRQ2QN.js";import"./ExpandablePanel-DJp5KTEf.js";import"./useAnimatedHeightBetween-qmGPDvbI.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BRzCTpma.js";import"./Expander-DHj5ry8_.js";import"./ChevronUpIcon-BupZL5MQ.js";import"./ListItem-D4j7DRS-.js";const ie={title:"Komponenter/Field Group",component:u,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...d.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(g,{...l.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...k.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...c.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
