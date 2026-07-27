import{r as p,j as i}from"./iframe-CoFjYjH0.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Bo0A1Xxd.js";import l from"./Help.stories-CQ493t0h.js";import c from"./RadioButton.stories-gRan-xa8.js";import{F as d}from"./FieldGroup-Vnt3skxb.js";import{C as k,a as u}from"./CheckboxPanel.stories-amneitVG.js";import{RadioPanel as g}from"./RadioPanel.stories-B48mfI2H.js";import{C as h}from"./Checkbox-DWR9h9ua.js";import{R as b}from"./RadioPanel-CSQxKGIk.js";import{H as x}from"./Help-ZF8aF-c3.js";import{R as C}from"./RadioButton-1ToXGoC9.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BSIiI0fo.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DnoIqCt-.js";import"./mergeRefs-DP6F3udC.js";import"./BaseRadioButton.stories-BGTR34tx.js";import"./BaseRadioButton-CG5COFRI.js";import"./useId-D5iuTEFF.js";import"./Label-BOxkr0JB.js";import"./SupportLabel-BzeHnh6F.js";import"./SuccessIcon-DrJ1NK3M.js";import"./Icon-EjDXN5Lj.js";import"./WarningIcon-BLnLAeUB.js";import"./InputPanel-BnjoWSMl.js";import"./Button-CDQhcPKx.js";import"./usePreviousValue-CUZZoNmz.js";import"./Loader-t7Q3qprU.js";import"./useDelayedRender-OxSvR2zy.js";import"./Title-NCgzvZqw.js";import"./Card-oLqfUcYY.js";import"./Text-CSm8A9yK.js";import"./Tag-C4DpM3bT.js";import"./ExpandablePanel-BWvZQDnC.js";import"./useAnimatedHeightBetween-BLNWW6cg.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-1roHHJkO.js";import"./Expander-B6Riq6Oi.js";import"./ChevronDownIcon-DBF3TBqB.js";import"./ChevronUpIcon-BTUSELaq.js";import"./ListItem-C2LB9U1l.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
