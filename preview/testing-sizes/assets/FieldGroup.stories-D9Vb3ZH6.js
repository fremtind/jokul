import{j as m,r as a}from"./iframe-Dc7noGqi.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DYMSVjs7.js";import i from"./RadioButton.stories-Bw9E94sZ.js";import{P as s}from"./PopupTip-CHkZlX5b.js";import c from"./Popuptip.stories-CBsQG3BD.js";import{F as d}from"./FieldGroup-grHri2YZ.js";import{R as l}from"./RadioButton-BQVrHhlg.js";import{C as u}from"./Checkbox-BLJB0Rol.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DnmbSW0y.js";import"./Label-CnykEm0e.js";import"./SupportLabel-CrPKF8pP.js";import"./WarningIcon-CiCWOoV9.js";import"./Icon-Duigz1d_.js";import"./BaseRadioButton.stories-C2gSaR29.js";import"./BaseRadioButton-DXXDt4l3.js";import"./QuestionIcon-CzoKZe49.js";import"./TooltipTrigger-BxJjDVm8.js";import"./floating-ui.react-BjgR-MaW.js";import"./index-XrJq9Nxy.js";import"./index-DUNvckdM.js";import"./TooltipContent-DJ8aS9O9.js";import"./useBrowserPreferences-m1gKK4Jx.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
