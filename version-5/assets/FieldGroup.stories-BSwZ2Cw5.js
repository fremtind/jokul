import{r as p,j as i}from"./iframe-XeFmK1Ub.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Dz7aamXK.js";import{CheckboxStory as c}from"./Checkbox.stories-CWlTtG1U.js";import d from"./Help.stories-BHTHC_wM.js";import k from"./RadioButton.stories-CJcnxwmr.js";import{RadioPanel as u}from"./RadioPanel.stories-CJh2mz32.js";import{F as g}from"./FieldGroup-C28LcsXp.js";import{C as h}from"./Checkbox-co1t4A8T.js";import{R as b}from"./RadioPanel-UHsYp9fJ.js";import{H as x}from"./Help-DhEiSrHe.js";import{R as C}from"./RadioButton-C99uDtoD.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-B1911_Ti.js";import"./clsx-B-dksMZM.js";import"./Flex-DqFMq2no.js";import"./SlotComponent-XZel4R92.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CUDAybY1.js";import"./usePreviousValue-CwmRi--O.js";import"./Loader-BVNZc5Fh.js";import"./useDelayedRender-OCsx1Ull.js";import"./BaseRadioButton.stories-DowL4NFc.js";import"./BaseRadioButton-B_r3T2Zw.js";import"./useId-Cb8QQQcv.js";import"./Title-BrAe3VHX.js";import"./Card-samkH_AI.js";import"./Text-BNF8cRQ9.js";import"./Tag-Ct4qRtdZ.js";import"./ExpandablePanel-BD5y7q9g.js";import"./useAnimatedHeightBetween-DiW6dno6.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-VGTCHWNP.js";import"./Expander-BgkqYiAo.js";import"./ChevronDownIcon-DBDLmCzX.js";import"./Icon-B4Q1XuA_.js";import"./ChevronUpIcon-D4nTlBfE.js";import"./ListItem-Da-aa61F.js";import"./Label-D06IGIOH.js";import"./SupportLabel-Nqm1phAt.js";import"./SuccessIcon-Du0NWloJ.js";import"./WarningIcon-DDumNALX.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
