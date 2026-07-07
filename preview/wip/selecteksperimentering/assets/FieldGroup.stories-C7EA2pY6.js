import{r as p,j as i}from"./iframe-mAnRNkXW.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DJtONSIj.js";import l from"./Help.stories-CtQe-n86.js";import c from"./RadioButton.stories-CNJBfcBY.js";import{F as d}from"./FieldGroup-CqxTm4vK.js";import{C as k,a as u}from"./CheckboxPanel.stories-CJEXR_Tr.js";import{RadioPanel as g}from"./RadioPanel.stories-BTsHj-Nc.js";import{C as h}from"./Checkbox-B9LLRICU.js";import{R as b}from"./RadioPanel-vN4wM3Rx.js";import{H as x}from"./Help-Cn31W2nD.js";import{R as C}from"./RadioButton-setR68_j.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-B1uvIbFO.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-ujr0aBvS.js";import"./mergeRefs-DUYDdXor.js";import"./BaseRadioButton.stories-WBTh7atB.js";import"./BaseRadioButton-Ci-mrOoZ.js";import"./useId-CziZ-r07.js";import"./Label-lpBNH_eT.js";import"./SupportLabel-CGTeBcYQ.js";import"./SuccessIcon-Q3jbFamm.js";import"./Icon-ymzQ4rdb.js";import"./WarningIcon-_tUVr28u.js";import"./InputPanel-BA2AE_Mh.js";import"./Button-BUFPTft3.js";import"./usePreviousValue-C-X4rkym.js";import"./Loader-BCmrc7Na.js";import"./useDelayedRender-dHk2Eqkp.js";import"./Title-BrDh_eFe.js";import"./Card-2DL_VqpA.js";import"./Text-BrdSX4Ln.js";import"./Tag-Czi2VsTN.js";import"./ExpandablePanel-QEMM_DdS.js";import"./useAnimatedHeightBetween-DSC2K6eK.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-drKbTXmj.js";import"./Expander-D8TAz7ZX.js";import"./ChevronDownIcon-aEAy76Mv.js";import"./ChevronUpIcon-CJkYkhmV.js";import"./ListItem-CYeNh5VU.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
