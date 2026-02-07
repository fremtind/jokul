import{j as m,r as a}from"./iframe-D_gu9fop.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DNy9fFRI.js";import i from"./RadioButton.stories-8uHQcR5k.js";import{P as s}from"./PopupTip-BIcU4jnC.js";import c from"./Popuptip.stories-Bt-q9XB7.js";import{F as d}from"./FieldGroup-CHSkVa6g.js";import{R as l}from"./RadioButton-a1Gcan79.js";import{C as u}from"./Checkbox-DCPW5y_p.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-D6gUVyDs.js";import"./Label-8fURBWwK.js";import"./SupportLabel-DKsfa3t3.js";import"./WarningIcon-CqO1KN1m.js";import"./Icon-BxePMt3h.js";import"./BaseRadioButton.stories-C4zRMRk-.js";import"./BaseRadioButton-jb7sNfha.js";import"./QuestionIcon-BCA1nijd.js";import"./TooltipTrigger-_dXDniXO.js";import"./floating-ui.react-bUNlRycv.js";import"./index-BCUxT7_r.js";import"./index-PtqkgLeV.js";import"./TooltipContent-BhZ3Byyh.js";import"./useBrowserPreferences-D9LSp3IX.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
