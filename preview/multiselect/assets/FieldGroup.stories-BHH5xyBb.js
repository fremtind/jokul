import{r as p,j as i}from"./iframe-IeXOE1xG.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DZzb_vXE.js";import l from"./Help.stories-BSZhl5ZD.js";import c from"./RadioButton.stories-D1MAmBEa.js";import{F as d}from"./FieldGroup-BuL1HzuD.js";import{C as k,a as u}from"./CheckboxPanel.stories-CI7aLym2.js";import{RadioPanel as g}from"./RadioPanel.stories-_9bmF2Wl.js";import{C as h}from"./Checkbox-JDPN_UJE.js";import{R as b}from"./RadioPanel-JUXZ0cB7.js";import{H as x}from"./Help-DUBNUMnh.js";import{R as C}from"./RadioButton-DrlNCNjJ.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CoyO5ZYM.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DA1bQIEJ.js";import"./mergeRefs-BhABk7VZ.js";import"./BaseRadioButton.stories-D1oFqp2v.js";import"./BaseRadioButton-YFgPbJp7.js";import"./useId-DY4OQRGl.js";import"./Label-RbnQIPKB.js";import"./SupportLabel-BjeGjqaX.js";import"./SuccessIcon-BsnM87L1.js";import"./Icon-Co9uLyg7.js";import"./WarningIcon-BP9ZIQ-G.js";import"./InputPanel-vF2EFBQA.js";import"./Button-iDnhA-IZ.js";import"./usePreviousValue-B8X7fGop.js";import"./Loader-DhlnGgTl.js";import"./useDelayedRender-mRw5vjOz.js";import"./Title-BKsdzX1Q.js";import"./Card-B9ofCbvq.js";import"./Text-BU_ctSqS.js";import"./Tag-COOUN0V1.js";import"./ExpandablePanel-B2hVTIA1.js";import"./useAnimatedHeightBetween-6KksFAM0.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DPTd--qP.js";import"./Expander-B6JFcP5N.js";import"./ChevronDownIcon-C_onZABZ.js";import"./ChevronUpIcon-B9Hqfl67.js";import"./ListItem-CCNMomSO.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
