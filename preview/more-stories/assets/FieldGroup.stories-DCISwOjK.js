import{j as m,r as a}from"./iframe-Cru4whJ1.js";import{CheckboxStory as n}from"./Checkbox.stories-OCTPPZLT.js";import i from"./RadioButton.stories-BHCmZHHz.js";import{P as s}from"./PopupTip-DnaG7gc7.js";import c from"./Popuptip.stories-BKjQxo8l.js";import{F as d}from"./FieldGroup-BtzE5bVx.js";import{R as l}from"./RadioButton-DdgpeMB1.js";import{C as u}from"./Checkbox-BZVowYD4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-ycqqCLmD.js";import"./Label-DvWgDWI6.js";import"./SupportLabel-DEQQx1e1.js";import"./WarningIcon-Br93SZNJ.js";import"./Icon-Dpt06_Dx.js";import"./BaseRadioButton.stories-DgUyp0eT.js";import"./BaseRadioButton-D4kF6UiH.js";import"./QuestionIcon-DaJW4TnZ.js";import"./TooltipTrigger-CqbMi34c.js";import"./floating-ui.react-C2vqs9rf.js";import"./index-BVlqxqHE.js";import"./index-DuASC3Ua.js";import"./TooltipContent-6jgbKvCM.js";import"./useBrowserPreferences-D5bp6lLa.js";import"./getThemeAndDensity-v_O0Epee.js";/* empty css               */const p=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,o as RadioGroup,w as __namedExportsOrder,q as default};
