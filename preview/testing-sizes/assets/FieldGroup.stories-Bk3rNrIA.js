import{j as m,r as a}from"./iframe-BFSAkX8i.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-PEOB6EfR.js";import i from"./RadioButton.stories-C7EZNGnp.js";import{P as s}from"./PopupTip-DfGnlOCR.js";import c from"./Popuptip.stories-DEvSazGs.js";import{F as d}from"./FieldGroup-ex3yTH59.js";import{R as l}from"./RadioButton-By5-1A_H.js";import{C as u}from"./Checkbox-CBkgWWOh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-O6_2WrmW.js";import"./Label-CvIqG2HW.js";import"./SupportLabel-BhuOmjn7.js";import"./WarningIcon-NHNei9t-.js";import"./Icon-DAIWM6d9.js";import"./BaseRadioButton.stories-B4RkB_Ik.js";import"./BaseRadioButton-Cpxfr7v0.js";import"./QuestionIcon-C0j23_Yo.js";import"./TooltipTrigger-CaO9Hu38.js";import"./floating-ui.react--ENhi7pE.js";import"./index-BSJ8AeYs.js";import"./index-C7sgDKyW.js";import"./TooltipContent-BYbV6pJP.js";import"./useBrowserPreferences-CzHFAb3P.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    tooltip: <PopupTip {...PopuptipStories.args} content="Du kan bare velge en metode" />
  }
}`,...t.parameters?.docs?.source}}};const z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,o as RadioGroup,z as __namedExportsOrder,w as default};
