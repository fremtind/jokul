import{r as p,j as i}from"./iframe-lnnRhOPS.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CszFcXQq.js";import l from"./Help.stories-5Bnr1An6.js";import c from"./RadioButton.stories-BZXy-NQW.js";import{F as d}from"./FieldGroup-DNNe7LjN.js";import{C as k,a as u}from"./CheckboxPanel.stories-BEnCaELP.js";import{RadioPanel as g}from"./RadioPanel.stories-amURtxuG.js";import{C as h}from"./Checkbox-Isg5ezc3.js";import{R as b}from"./RadioPanel-DgswEQD_.js";import{H as x}from"./Help-BsQVZ8WD.js";import{R as C}from"./RadioButton-BiX4OGpA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DE8bibEE.js";import"./Label-D2-dGWe8.js";import"./SupportLabel-CXLm2iOp.js";import"./SuccessIcon-Cz0BPqX9.js";import"./Icon-B2_nwEVu.js";import"./WarningIcon-DTIU3a-k.js";/* empty css               *//* empty css               */import"./Flex-DndcJaJQ.js";import"./SlotComponent-Bv-jryCH.js";import"./mergeRefs-H4z7hsoo.js";import"./BaseRadioButton.stories-DOw6Lm4y.js";import"./BaseRadioButton-jbt-PNQk.js";import"./InputPanel-CxFlNxo1.js";import"./Button-CuEGLxCT.js";import"./usePreviousValue-DUo7dhrF.js";import"./Loader-B55f1iDY.js";import"./useDelayedRender-CqCtfqBh.js";import"./Title-DHH5HSOL.js";import"./Card-F7lsWdcr.js";import"./Text-DixJ_Cft.js";import"./Tag-Co-mtER0.js";import"./ExpandablePanel-B8irkHx-.js";import"./useAnimatedHeightBetween-BiGDdJSJ.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-tWKLBsw9.js";import"./Expander-Dvpj5KK1.js";import"./ChevronUpIcon-DiomADtn.js";import"./ListItem-C9dlw2Mp.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
