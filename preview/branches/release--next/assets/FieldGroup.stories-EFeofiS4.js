import{j as p,r as a}from"./iframe-C_zAoCra.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BdPnCboo.js";import{H as s,m as n}from"./Help.stories-CuOijja4.js";import c from"./RadioButton.stories-DjJgKJwf.js";import{F as d}from"./FieldGroup-CAW-s5-j.js";import{R as l}from"./RadioButton-CvgJBhB5.js";import{C as u}from"./Checkbox-DXrAP9op.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-PBtl1luZ.js";import"./Label-CtB8_Bto.js";import"./SupportLabel-C7GtVCn5.js";import"./WarningIcon-BDdQoSho.js";import"./Icon-DIYK238P.js";import"./Button-BBaouq_k.js";import"./usePreviousValue-eqOPWJAm.js";import"./Loader-DuVTKtxe.js";import"./useDelayedRender-C4R4kXWU.js";/* empty css               *//* empty css               */import"./Flex-w8LGCUj-.js";import"./SlotComponent-Kf7Hotnw.js";import"./mergeRefs-Dc8eWnD2.js";import"./BaseRadioButton.stories-DV57kl-_.js";import"./BaseRadioButton-AaxaF-vC.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
