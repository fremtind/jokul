import{j as p,r as a}from"./iframe-KYjZmmaN.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DOuhYxqU.js";import{H as s,m as n}from"./Help.stories-Dyjmdn4Z.js";import c from"./RadioButton.stories-m4YO3HIt.js";import{F as d}from"./FieldGroup-Dp8fkBXa.js";import{R as l}from"./RadioButton-CHknT2Qo.js";import{C as u}from"./Checkbox-bxm9r3wF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BrPuo7wG.js";import"./Label-rswrzzcr.js";import"./SupportLabel-DERKuGhe.js";import"./WarningIcon-C7MAU1R0.js";import"./Icon-CwfM_IuR.js";import"./Button-DgmAzjX0.js";import"./usePreviousValue-D8pRbmtv.js";import"./Loader-CX143WQu.js";import"./useDelayedRender-C_Yaq3QE.js";/* empty css               *//* empty css               */import"./Flex-DOjbiAWl.js";import"./SlotComponent-DxBfZJDg.js";import"./mergeRefs-DS3zChvx.js";import"./BaseRadioButton.stories-C8jmVkx2.js";import"./BaseRadioButton-vLtWQm_j.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Checkbox gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <Checkbox {...CheckboxStory.args} key={value} value={value} name="kontaktmetode">
                {value}
            </Checkbox>)
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...t.parameters?.docs?.source}}};const w=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,o as RadioGroup,w as __namedExportsOrder,q as default};
