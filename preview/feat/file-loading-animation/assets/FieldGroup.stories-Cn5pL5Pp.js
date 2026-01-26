import{j as m,r as a}from"./iframe-CfUv713j.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-B1V7XIjB.js";import i from"./RadioButton.stories-wUroYL5Q.js";import{P as s}from"./PopupTip-BmiSXeWp.js";import c from"./Popuptip.stories-DKYIRg88.js";import{F as d}from"./FieldGroup-CxUt3CSg.js";import{R as l}from"./RadioButton-Z-O1pIr8.js";import{C as u}from"./Checkbox-am5tQpdB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-fDPR3EVB.js";import"./Label-CzTSyw4L.js";import"./SupportLabel-C0PCz8ov.js";import"./WarningIcon-D26GwYLz.js";import"./Icon-C1AqJ9U0.js";import"./BaseRadioButton.stories-Bp_PB9Je.js";import"./BaseRadioButton-5HsIuVGY.js";import"./QuestionIcon-BnyQrZby.js";import"./TooltipTrigger-MHRyAiVu.js";import"./floating-ui.react-Bq1a8QI_.js";import"./index-CJ-bON8F.js";import"./index-BoQoRiYK.js";import"./TooltipContent-BtGy1pWs.js";import"./useBrowserPreferences-CmwDYmXL.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
