import{r as p,j as i}from"./iframe-NmAx33rB.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DuA8oGwh.js";import l from"./Help.stories-DkW2vIWs.js";import c from"./RadioButton.stories-C71-rJu0.js";import{F as d}from"./FieldGroup-BtFmyecP.js";import{C as k,a as u}from"./CheckboxPanel.stories-iXDtFxGd.js";import{RadioPanel as g}from"./RadioPanel.stories-BsItN5gT.js";import{C as h}from"./Checkbox-BYv1Y_2N.js";import{R as b}from"./RadioPanel-Us_YD9o8.js";import{H as x}from"./Help-DIfdGN9N.js";import{R as C}from"./RadioButton-C3FguLSs.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-D9t7JNsK.js";import"./BaseRadioButton-vtzjZjJP.js";import"./clsx-B-dksMZM.js";import"./useId-CTGINCsK.js";import"./Label-BfSTy5q7.js";import"./SupportLabel-DP1Hy07W.js";import"./SuccessIcon-DNxA1xqm.js";import"./Icon-qfgI_y-1.js";import"./WarningIcon-CKl24A9X.js";import"./InputPanel-BUgjDOcY.js";import"./Flex-DNeYZopq.js";import"./SlotComponent-Ab9N7Eqi.js";import"./mergeRefs-DhY-gxqq.js";import"./Button-Dkoh1WLn.js";import"./usePreviousValue-B2_tBMPv.js";import"./Loader-D1Bbn-eZ.js";import"./useDelayedRender-OgkuEzqT.js";import"./Title-DeMpHEeV.js";import"./Card-D2AUalRQ.js";import"./Text-BTjWQ5-j.js";import"./Tag-DyopjYH8.js";import"./ExpandablePanel-oF7HwGS1.js";import"./useAnimatedHeightBetween-B8cb9NZl.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CNPaRWbH.js";import"./Expander-Co7nC0CL.js";import"./ChevronDownIcon-z8w5W9Uk.js";import"./ChevronUpIcon-B1wtmEzY.js";import"./ListItem-DV8s78mr.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
