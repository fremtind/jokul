import{j as m,r as a}from"./iframe-CeoSNwav.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-Cdj1_t5i.js";import i from"./RadioButton.stories-am52PGto.js";import{P as s}from"./PopupTip-Dt2sHoST.js";import c from"./Popuptip.stories-X8Wa4tPI.js";import{F as d}from"./FieldGroup-DuOcNMFX.js";import{R as l}from"./RadioButton-D8uTIxMl.js";import{C as u}from"./Checkbox-D53dvtEO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CLs2GOIp.js";import"./Label-Bajw7274.js";import"./SupportLabel-CvksENtL.js";import"./WarningIcon-BZHcKyDl.js";import"./Icon-IeE-EPt_.js";import"./BaseRadioButton.stories-DlTTsqj4.js";import"./BaseRadioButton-DKX7ifz4.js";import"./QuestionIcon-bW_ZBQAR.js";import"./TooltipTrigger-N3U_RRtV.js";import"./floating-ui.react-B8IQMSAD.js";import"./index-e9o5uPcK.js";import"./index-DZlDXaza.js";import"./TooltipContent-p-GOgugE.js";import"./useBrowserPreferences-xxATAvl_.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
