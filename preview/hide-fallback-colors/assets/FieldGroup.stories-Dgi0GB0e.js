import{r as n,j as i}from"./iframe-BOByu7vN.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-C8yJqmlp.js";import{CheckboxStory as c}from"./Checkbox.stories-CdyL3BQ5.js";import d from"./Help.stories-BaAXsz_I.js";import k from"./RadioButton.stories-3TNqvUpI.js";import{RadioPanel as u}from"./RadioPanel.stories-B1-RlQBZ.js";import{F as g}from"./FieldGroup-CW48alfx.js";import{C as h}from"./Checkbox-Bqi9ehjI.js";import{R as b}from"./RadioPanel-BOOe7Qyf.js";import{H as x}from"./Help-CP_xFkCd.js";import{R as C}from"./RadioButton-C_nEcrRz.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CVNOb8mi.js";import"./clsx-B-dksMZM.js";import"./Flex-oEY57Ysx.js";import"./SlotComponent-B6DDrcYF.js";import"./mergeRefs-CMU2O_Tw.js";import"./Button-DqaZ_URM.js";import"./usePreviousValue-DoQ_Zsw9.js";import"./Loader-CRyLlRGd.js";import"./useDelayedRender-D_33kpfK.js";import"./useId-CA1iC96R.js";import"./Label-BQnxVneB.js";import"./SupportLabel-BRerFdQZ.js";import"./SuccessIcon-CsCwvX9r.js";import"./Icon-DZbu0jXH.js";import"./WarningIcon-BCg1ONjp.js";import"./BaseRadioButton.stories-BKFave-B.js";import"./BaseRadioButton-BE_NhPCn.js";import"./Title-DAm4gKSK.js";import"./Card-C3MpnA5e.js";import"./Text-aSefhzU6.js";import"./Tag-CQgCZxC5.js";import"./ExpandablePanel-C4D5QRhV.js";import"./useAnimatedHeightBetween-Cn7RxxDr.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BJjAnVS3.js";import"./Expander-DhLOTBMz.js";import"./ChevronUpIcon-B418f_89.js";import"./ListItem-BEyAnBoj.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
