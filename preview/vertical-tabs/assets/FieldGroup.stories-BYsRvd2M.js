import{j as m,r as a}from"./iframe-CFOATL1u.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-B5No9pLt.js";import i from"./RadioButton.stories-CPFP4lpH.js";import{P as s}from"./PopupTip-DYoSYcGV.js";import c from"./Popuptip.stories-BR58w4Hr.js";import{F as d}from"./FieldGroup-D0osTCme.js";import{R as l}from"./RadioButton-ZNQ86qCh.js";import{C as u}from"./Checkbox-BqB5sFkv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B9MBXXZj.js";import"./Label-BHcrVLbg.js";import"./SupportLabel-MjH3MGX5.js";import"./WarningIcon-BDlR5soX.js";import"./Icon-s7blIWj6.js";import"./BaseRadioButton.stories-DmKSiHy4.js";import"./BaseRadioButton-CYb-xLad.js";import"./QuestionIcon-D1Ld0LSU.js";import"./TooltipTrigger-C_VqE_iQ.js";import"./floating-ui.react-DGb5u6NH.js";import"./index-ia-aZiOc.js";import"./index-BE1O2ZXu.js";import"./TooltipContent-Dn0K217x.js";import"./useBrowserPreferences-d1tqmFW4.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
