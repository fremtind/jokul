import{j as m,r as a}from"./iframe-Df_g0_Xe.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CVFb5I4Y.js";import i from"./RadioButton.stories-mi9aKsSM.js";import{P as s}from"./PopupTip-DxQtVvwu.js";import c from"./Popuptip.stories-Cj7X40Xm.js";import{F as d}from"./FieldGroup-CvF8p0Yw.js";import{R as l}from"./RadioButton-D4_UwMVO.js";import{C as u}from"./Checkbox-CaAjl_Yq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-1wjk1hdk.js";import"./Label-CjlHuWv1.js";import"./SupportLabel-CZyAGnEn.js";import"./WarningIcon-C4gbmnr8.js";import"./Icon-DWOpZPM4.js";import"./BaseRadioButton.stories-Cbadh-mG.js";import"./BaseRadioButton-CmTWeJXp.js";import"./QuestionIcon-4Ta_fjgF.js";import"./TooltipTrigger-DPAy_EHn.js";import"./floating-ui.react-krsjLNbU.js";import"./index-3E0A5WoI.js";import"./index-CiuZT7il.js";import"./TooltipContent-C0hX3NPX.js";import"./useBrowserPreferences-B7xYayBj.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
