import{r as p,j as i}from"./iframe-fra5WGe3.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-7fM_lWtQ.js";import l from"./Help.stories-Ck3kSYbo.js";import c from"./RadioButton.stories-TJ0qi3Bn.js";import{F as d}from"./FieldGroup-glwIdkzM.js";import{C as k,a as u}from"./CheckboxPanel.stories-114rpSKK.js";import{RadioPanel as g}from"./RadioPanel.stories-CqNu3Ms6.js";import{C as h}from"./Checkbox-BjjET_If.js";import{R as b}from"./RadioPanel-Da2vn7OE.js";import{H as x}from"./Help-Dz1Blhnz.js";import{R as C}from"./RadioButton-CGbuZDKe.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-BTHxsRpi.js";import"./BaseRadioButton-BhifSSDY.js";import"./clsx-B-dksMZM.js";import"./useId-CJKieAHY.js";import"./Label-9_dgmxS1.js";import"./SupportLabel--TeeG43f.js";import"./SuccessIcon-CuUmllxx.js";import"./Icon-BhEa2bZT.js";import"./WarningIcon-DXIlFH1I.js";import"./InputPanel-D9YP3khG.js";import"./Flex-DUnjVaFA.js";import"./SlotComponent-tsrfJhhr.js";import"./mergeRefs-mlPfS29J.js";import"./Button-CvwFQzMX.js";import"./usePreviousValue-Bs8-Wsv-.js";import"./Loader-CDdTV7kN.js";import"./useDelayedRender-D8fuOtuD.js";import"./Title-DcsLNUNB.js";import"./Card-CU-s--Zj.js";import"./Text-D7QHaPdy.js";import"./Tag-Fp1XIH1Z.js";import"./ExpandablePanel-CiWBLvJd.js";import"./useAnimatedHeightBetween-BSvYzI9Q.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-sl8S729f.js";import"./Expander-C3fYG5Sq.js";import"./ChevronDownIcon-BjV8C_oh.js";import"./ChevronUpIcon-DSA2vRCD.js";import"./ListItem-7ZaMStT_.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
