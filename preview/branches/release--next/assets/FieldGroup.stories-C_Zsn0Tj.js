import{j as p,r as a}from"./iframe-DHbrNRsW.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DtkscmlR.js";import{H as s,m as n}from"./Help.stories-hHTvT5ud.js";import c from"./RadioButton.stories-XQr4k4FM.js";import{F as d}from"./FieldGroup-CsrPyr-7.js";import{R as l}from"./RadioButton-C_Cr5YWc.js";import{C as u}from"./Checkbox-CaFhhMik.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DmpPp88f.js";import"./Label-BgkVqPYA.js";import"./SupportLabel-DUOXHiOI.js";import"./WarningIcon-BocLsNVZ.js";import"./Icon-Ch73Wtom.js";import"./Button-D0Le9jUV.js";import"./usePreviousValue-BJlQj19H.js";import"./Loader-D_LQ0l0O.js";import"./useDelayedRender-DSF6rOeu.js";/* empty css               *//* empty css               */import"./Flex-MTUL-YJg.js";import"./SlotComponent-BsShuNiE.js";import"./mergeRefs-C29wqvqD.js";import"./BaseRadioButton.stories-DcZ0-SUX.js";import"./BaseRadioButton-Be0skVjl.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
