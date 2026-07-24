import{r as p,j as i}from"./iframe-BU5h1c3P.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DS7fRi_L.js";import l from"./Help.stories-B-P3x9cM.js";import c from"./RadioButton.stories-Bzw7UYrw.js";import{F as d}from"./FieldGroup-CPDw9u8V.js";import{C as k,a as u}from"./CheckboxPanel.stories-CD01II_A.js";import{RadioPanel as g}from"./RadioPanel.stories-BBtM-qEu.js";import{C as h}from"./Checkbox-Du-dC3UI.js";import{R as b}from"./RadioPanel-BxFMZQLP.js";import{H as x}from"./Help-w9Vki8DY.js";import{R as C}from"./RadioButton-DXrCyJF_.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-DN6ILKbS.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BMRdzjMM.js";import"./mergeRefs-BT0Ws8MK.js";import"./BaseRadioButton.stories-B_YkAcAu.js";import"./BaseRadioButton-BiA9f3lF.js";import"./useId-Ckl39-hN.js";import"./Label-C7G-BFBh.js";import"./SupportLabel-DCVyqa5p.js";import"./SuccessIcon-VOJqHQ5W.js";import"./Icon-BXWrU1Sg.js";import"./WarningIcon-7GEyAU3N.js";import"./InputPanel-BFsIxRZQ.js";import"./Button-CvdIef7k.js";import"./usePreviousValue-BqAALT2_.js";import"./Loader-CUX8Tyzn.js";import"./useDelayedRender-BV9fWcvb.js";import"./Title-XLkMAck5.js";import"./Card-BWqMiGmt.js";import"./Text-D49v707d.js";import"./Tag-BwOK7vRZ.js";import"./ExpandablePanel-Bp7aY56p.js";import"./useAnimatedHeightBetween-CLJeLknQ.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BwTcBoio.js";import"./Expander-Bf66Hs6y.js";import"./ChevronDownIcon-B_d5NNd-.js";import"./ChevronUpIcon-BfvYzDm2.js";import"./ListItem-DAjDwYk4.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
