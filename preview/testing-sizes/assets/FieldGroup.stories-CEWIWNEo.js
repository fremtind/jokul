import{j as m,r as a}from"./iframe-jTvL9WGe.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-BD_kbXrM.js";import i from"./RadioButton.stories-DITA60ws.js";import{P as s}from"./PopupTip-bDOMq_gB.js";import c from"./Popuptip.stories-B0aY5mRE.js";import{F as d}from"./FieldGroup-CQnobE6z.js";import{R as l}from"./RadioButton-DX9GPWM2.js";import{C as u}from"./Checkbox-DEUzPiUe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-usNgSf-F.js";import"./Label-BP0HmaRU.js";import"./SupportLabel-CnvjmouP.js";import"./WarningIcon-BTAt784j.js";import"./Icon-BNtZv1OZ.js";import"./BaseRadioButton.stories-DyGbi2lc.js";import"./BaseRadioButton-ShKAPLzU.js";import"./QuestionIcon-Cql4W_dr.js";import"./TooltipTrigger-3AL_RGHp.js";import"./floating-ui.react-C-1rA7WN.js";import"./index-BkrXjhZE.js";import"./index-B4kn0UZ3.js";import"./TooltipContent-BQxFpZjl.js";import"./useBrowserPreferences-DWs1GYXc.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
