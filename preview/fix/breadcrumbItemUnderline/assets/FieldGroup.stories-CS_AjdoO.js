import{j as m,r as a}from"./iframe-7whKf3fP.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-C8sPAysg.js";import i from"./RadioButton.stories-CvFk53XP.js";import{P as s}from"./PopupTip-CVF2LQYd.js";import c from"./Popuptip.stories-Q9lrZzk4.js";import{F as d}from"./FieldGroup-OAnwWzhh.js";import{R as l}from"./RadioButton-C2u0aLmb.js";import{C as u}from"./Checkbox-Gt_Mvqxy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DVYNxkkd.js";import"./Label-ngp7bey2.js";import"./SupportLabel-Bp2WW0YO.js";import"./WarningIcon-ByP354mr.js";import"./Icon-BlqnOWtl.js";import"./BaseRadioButton.stories-4Z-F2lXh.js";import"./BaseRadioButton-7rwMZc_N.js";import"./QuestionIcon-Bm4kD3B3.js";import"./TooltipTrigger-C5NgVtp7.js";import"./floating-ui.react-hF2lBsoL.js";import"./index-BOKsEmGR.js";import"./index-Dfwdzzgq.js";import"./TooltipContent-BDerFB6Q.js";import"./useBrowserPreferences-bRnM6XgN.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
