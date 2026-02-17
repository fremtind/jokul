import{j as m,r as a}from"./iframe-BNGPyR0S.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-BpNYuKuM.js";import i from"./RadioButton.stories-BttPkmNT.js";import{P as s}from"./PopupTip-Dw1Uc6GI.js";import c from"./Popuptip.stories-CrjHDHqr.js";import{F as d}from"./FieldGroup-PZWmB0Jx.js";import{R as l}from"./RadioButton-nXMzHqso.js";import{C as u}from"./Checkbox-DCRxxybP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BeH8YWlo.js";import"./Label-BBeGRsP1.js";import"./SupportLabel-BHds-SFS.js";import"./WarningIcon-D6h-mfp6.js";import"./Icon-DoNTGUB_.js";import"./BaseRadioButton.stories-C7KohdDR.js";import"./BaseRadioButton-bzpXeell.js";import"./QuestionIcon-DufFClKl.js";import"./TooltipTrigger-CR6kRWKx.js";import"./floating-ui.react-CVavL0LW.js";import"./index-BghXReKr.js";import"./index-BchYoWBV.js";import"./TooltipContent-CXs8jc5C.js";import"./useBrowserPreferences-Ct39F0r2.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
