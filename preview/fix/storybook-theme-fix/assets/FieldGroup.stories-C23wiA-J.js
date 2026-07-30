import{r as p,j as i}from"./iframe-DaiCMzxi.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DggQiTAO.js";import l from"./Help.stories-D7nxQ1Ek.js";import c from"./RadioButton.stories-SySUe1Qw.js";import{F as d}from"./FieldGroup-DLV8xGBv.js";import{C as k,a as u}from"./CheckboxPanel.stories-CNB32p5t.js";import{RadioPanel as g}from"./RadioPanel.stories-C6Fdb7lG.js";import{C as h}from"./Checkbox-D7R0uE2P.js";import{R as b}from"./RadioPanel-BabQUSvw.js";import{H as x}from"./Help-stNVXfvA.js";import{R as C}from"./RadioButton-DvTV4Ori.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-Dv3i5MLr.js";import"./BaseRadioButton-BXmNzKhz.js";import"./clsx-B-dksMZM.js";import"./useId-YTTrhSvw.js";import"./Label-CFXaNWZn.js";import"./SupportLabel-D-Z9pKS7.js";import"./SuccessIcon-CYZk7F64.js";import"./Icon-B5mFYVMO.js";import"./WarningIcon-C6GzM7PM.js";import"./InputPanel-DVQ7dBCL.js";import"./Flex-Cd-TepbF.js";import"./SlotComponent-CRhc3bHZ.js";import"./mergeRefs-B0aopSNZ.js";import"./Button-TBsqDfRB.js";import"./usePreviousValue-xHLfS9yj.js";import"./Loader-DAXmKiL_.js";import"./useDelayedRender-9jA4Ihho.js";import"./Title-BJjzvVw1.js";import"./Card-B61yzgXA.js";import"./Text-pil_4gsJ.js";import"./Tag-D2x9QCSD.js";import"./ExpandablePanel-BO8spLEI.js";import"./useAnimatedHeightBetween-C-4DOFVD.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-C4p0dJwY.js";import"./Expander-Bqj8daYS.js";import"./ChevronDownIcon-Bs2r38Tv.js";import"./ChevronUpIcon-DQwKjYc7.js";import"./ListItem-BXPUPkak.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
