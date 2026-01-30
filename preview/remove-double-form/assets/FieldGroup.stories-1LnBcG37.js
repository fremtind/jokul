import{j as m,r as a}from"./iframe-CFM47A3t.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-LvDAJFKy.js";import i from"./RadioButton.stories-B5Qc7H2g.js";import{P as s}from"./PopupTip-DuMWIKNz.js";import c from"./Popuptip.stories-DidQrV7s.js";import{F as d}from"./FieldGroup-Cc_DzdpG.js";import{R as l}from"./RadioButton-B3sLNb9H.js";import{C as u}from"./Checkbox-C77eGP7G.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CqyZTF6Z.js";import"./Label-Bh2-FyOq.js";import"./SupportLabel-CNz2zx8w.js";import"./WarningIcon-xlMInnbA.js";import"./Icon-D4OObDPq.js";import"./BaseRadioButton.stories-Drf8_8VS.js";import"./BaseRadioButton-B-GUAZiW.js";import"./QuestionIcon-BmP1NcZs.js";import"./TooltipTrigger-C0eYJPYZ.js";import"./floating-ui.react-Co53Byfr.js";import"./index-BDecCbp_.js";import"./index-CoMxq16S.js";import"./TooltipContent-CS-M4CVa.js";import"./useBrowserPreferences-BxpvbHL1.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
