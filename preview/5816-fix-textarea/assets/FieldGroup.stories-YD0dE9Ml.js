import{j as m,r as a}from"./iframe-CpMgEjNN.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-eCIUip2T.js";import i from"./RadioButton.stories-Dz6CtJiA.js";import{P as s}from"./PopupTip-BqTtxVjo.js";import c from"./Popuptip.stories-HeRuD9BN.js";import{F as d}from"./FieldGroup-CygFZFiR.js";import{R as l}from"./RadioButton-DwWeuDlh.js";import{C as u}from"./Checkbox-XLKWB8SZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CboS07w7.js";import"./Label-DzSlM8kf.js";import"./SupportLabel-B2tqBHMO.js";import"./WarningIcon-B9H5FlOC.js";import"./Icon-BBTHhbXj.js";import"./BaseRadioButton.stories-QZf-WGYX.js";import"./BaseRadioButton-CaU6aNbl.js";import"./QuestionIcon-CvpHyUSe.js";import"./TooltipTrigger-Cyrgm-jd.js";import"./floating-ui.react-CDetLn33.js";import"./index-Cjbak0G6.js";import"./index-BrFfEI8E.js";import"./TooltipContent-9D_HWvCc.js";import"./useBrowserPreferences-CYuwm2Mz.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
