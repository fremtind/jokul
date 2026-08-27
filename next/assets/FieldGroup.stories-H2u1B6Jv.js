import{r as n,j as i}from"./iframe-CIVRzKA_.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DMVcDAzO.js";import l from"./Help.stories-CRI6PANW.js";import c from"./RadioButton.stories-DqydjrAw.js";import{F as d}from"./FieldGroup-C2mL58fh.js";import{C as k,a as u}from"./CheckboxPanel.stories-BP5fYXlH.js";import{RadioPanel as g}from"./RadioPanel.stories-BB8K2ZFL.js";import{C as h}from"./Checkbox-BBl0iBjT.js";import{R as b}from"./RadioPanel-B42JCjfe.js";import{H as x}from"./Help-BS85WdwL.js";import{R as C}from"./RadioButton-D5Mr-sd2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-RbGnblEd.js";import"./Label-iK5MUJg1.js";import"./SupportLabel-Dk0yAnMB.js";import"./SuccessIcon-D14Iz4xh.js";import"./Icon-syLHOKG6.js";import"./WarningIcon-D18XrPZL.js";import"./BaseRadioButton.stories-kh1SvXK9.js";import"./BaseRadioButton-CdPWX_qp.js";import"./InputPanel-BbN1j8LE.js";import"./Flex-BC__MeA_.js";import"./SlotComponent-UI06uM2V.js";import"./mergeRefs-BIa26bUW.js";import"./Button-CUx2H86y.js";import"./usePreviousValue-BAAq2wdH.js";import"./Loader-DfwedTK7.js";import"./useDelayedRender-Cqazo35k.js";import"./Title-Bmk9nhx4.js";import"./Card-CBzav5Ej.js";import"./Text-KSSwtEqw.js";import"./Tag-D-wrOPDI.js";import"./ExpandablePanel-Bj8UJeVD.js";import"./useAnimatedHeightBetween-Cm3j0g-S.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Y2n10B9W.js";import"./Expander-DSMv6193.js";import"./ChevronUpIcon-Ca9_y40R.js";import"./ListItem-20CGq_tU.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
