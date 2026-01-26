import{j as m,r as a}from"./iframe-rzzW3gX2.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DedGW1qi.js";import i from"./RadioButton.stories-B93Lz1gN.js";import{P as s}from"./PopupTip-BZTcWFoN.js";import c from"./Popuptip.stories-Cy9Wa9V2.js";import{F as d}from"./FieldGroup-B7mpF4ls.js";import{R as l}from"./RadioButton-Dr6cyLwT.js";import{C as u}from"./Checkbox-DPrFTALv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Dq47MGjr.js";import"./Label-BvHD4lEe.js";import"./SupportLabel-CnmQAMKg.js";import"./WarningIcon-UTSw5B72.js";import"./Icon-rzk6z11L.js";import"./BaseRadioButton.stories-CaboBL2u.js";import"./BaseRadioButton-BJcGDW1i.js";import"./QuestionIcon-eDoRjL0R.js";import"./TooltipTrigger-D3EHpqNO.js";import"./floating-ui.react-4kUMNpMh.js";import"./index-E2wWXgdo.js";import"./index-ClL-RdFw.js";import"./TooltipContent-iy3Gc4MX.js";import"./useBrowserPreferences-DITP95xw.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
