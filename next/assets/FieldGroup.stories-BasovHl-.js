import{r as n,j as i}from"./iframe-ESiV4U5z.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DEGloU3t.js";import l from"./Help.stories-rGdMEtF0.js";import c from"./RadioButton.stories-CfCc1bdV.js";import{F as d}from"./FieldGroup-sPmL80Xr.js";import{C as k,a as u}from"./CheckboxPanel.stories-BKMP62S6.js";import{RadioPanel as g}from"./RadioPanel.stories-DMpyefZl.js";import{C as h}from"./Checkbox-plruxjnL.js";import{R as b}from"./RadioPanel-CFbqQ-09.js";import{H as x}from"./Help-Bjs1MBOY.js";import{R as C}from"./RadioButton-DM6gaDLn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DcHIwsKW.js";import"./Label-Cs7dgYGk.js";import"./SupportLabel-DTNM1vlP.js";import"./SuccessIcon-C986ueKN.js";import"./Icon-GNWOLmOs.js";import"./WarningIcon-kMNXc3er.js";import"./BaseRadioButton.stories-BBvSlPWH.js";import"./BaseRadioButton-DAmMtrGe.js";import"./InputPanel-DLUZG-iL.js";import"./Flex-CycOiFgh.js";import"./SlotComponent-jAwCo-_P.js";import"./mergeRefs-B9MPGulD.js";import"./Button-BC39lagg.js";import"./usePreviousValue-C7i2LtQs.js";import"./Loader-BtpWVMsI.js";import"./useDelayedRender-BPDe11jO.js";import"./Title-DgAJgFJo.js";import"./Card-B1BBWLdE.js";import"./Text-yGsj6YxF.js";import"./Tag-DPHfq_zj.js";import"./ExpandablePanel-TRFopzl0.js";import"./useAnimatedHeightBetween-wzm24R1u.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BES7M8Hp.js";import"./Expander-9XPvLrkk.js";import"./ChevronUpIcon-C49GpM5d.js";import"./ListItem-4GvhK6pd.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
