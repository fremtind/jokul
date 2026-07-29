import{r as p,j as i}from"./iframe-tfIYmcKY.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CIwr-PSr.js";import l from"./Help.stories-BlxwwEG5.js";import c from"./RadioButton.stories-4v5qi2X5.js";import{F as d}from"./FieldGroup-DJMDSwkR.js";import{C as k,a as u}from"./CheckboxPanel.stories-BLxa_kRs.js";import{RadioPanel as g}from"./RadioPanel.stories-4_Hcmlui.js";import{C as h}from"./Checkbox-Cn6GU93z.js";import{R as b}from"./RadioPanel-D2Ve36a_.js";import{H as x}from"./Help-4j7ARZnT.js";import{R as C}from"./RadioButton-prXQrOO6.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-Cc12rgj7.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-rkGjgAuz.js";import"./mergeRefs-V90Ujw1V.js";import"./BaseRadioButton.stories-D_oLbkor.js";import"./BaseRadioButton-C7dqYL-D.js";import"./useId-DUakEgQr.js";import"./Label--QxdZ_YV.js";import"./SupportLabel-Bf4ZgvA8.js";import"./SuccessIcon-CzahbezD.js";import"./Icon-3NNtBsJI.js";import"./WarningIcon-BQHmraDc.js";import"./InputPanel-BzZPzktd.js";import"./Button-DlB2akMW.js";import"./usePreviousValue-BPiKMR4b.js";import"./Loader-D3IPKFyC.js";import"./useDelayedRender-PDnGje90.js";import"./Title-C7GSriBt.js";import"./Card-zpvdgZUj.js";import"./Text-CeiCWu0_.js";import"./Tag-Bs00-OTq.js";import"./ExpandablePanel-SUxMTycV.js";import"./useAnimatedHeightBetween-DPd_CXT9.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CfnGxcXB.js";import"./Expander-2J5NhMhV.js";import"./ChevronUpIcon-DTPYfsY_.js";import"./ListItem-BAHK4oiD.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
