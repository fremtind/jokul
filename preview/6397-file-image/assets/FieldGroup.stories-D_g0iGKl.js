import{r as p,j as i}from"./iframe-BUfh1FOG.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CiXKjieq.js";import l from"./Help.stories-CfdgY8Sk.js";import c from"./RadioButton.stories-D2otdnjc.js";import{F as d}from"./FieldGroup-vwvAy7Ft.js";import{C as k,a as u}from"./CheckboxPanel.stories-DEvLv2ev.js";import{RadioPanel as g}from"./RadioPanel.stories-CuMRxb6X.js";import{C as h}from"./Checkbox--VLwBp2P.js";import{R as b}from"./RadioPanel-BVomvcm0.js";import{H as x}from"./Help-CCyHNWte.js";import{R as C}from"./RadioButton-BCW6vvT6.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-CiVE9ue4.js";import"./BaseRadioButton-B-XXgJWN.js";import"./clsx-B-dksMZM.js";import"./useId-CB74Q9sI.js";import"./Label-CoEUJBzu.js";import"./SupportLabel-Cdnir2Mu.js";import"./SuccessIcon-Rl4teyo7.js";import"./Icon-BTZSWG2z.js";import"./WarningIcon-BiotocCK.js";import"./InputPanel-B_16JIsa.js";import"./Flex-CY2AfGQp.js";import"./SlotComponent-ClvpoVhK.js";import"./mergeRefs-_ncpTKIe.js";import"./Button-BE8H0AfF.js";import"./usePreviousValue-khNHHDDs.js";import"./Loader-BRs-SL-t.js";import"./useDelayedRender-AUJQqIN8.js";import"./Title-BLaTi3Je.js";import"./Card-DMUPX7j0.js";import"./Text-BjKGk9Of.js";import"./Tag-6PD5vrMT.js";import"./ExpandablePanel-DcIO_tsk.js";import"./useAnimatedHeightBetween-CkM317Q-.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CY_NkmH1.js";import"./Expander-kqrJ-F4s.js";import"./ChevronDownIcon-i3ycEd37.js";import"./ChevronUpIcon-QPMH5Z53.js";import"./ListItem-DP-LmJ3X.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
