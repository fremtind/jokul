import{j as m,r as a}from"./iframe-CVrkxF9U.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-C1b-ZyD-.js";import i from"./RadioButton.stories-CMkYRHTV.js";import{P as s}from"./PopupTip-CZwbbgIe.js";import c from"./Popuptip.stories-BiVABxC2.js";import{F as d}from"./FieldGroup-C4rciU8A.js";import{R as l}from"./RadioButton-DflRALjQ.js";import{C as u}from"./Checkbox-SCzh1DsO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Ds2Z1Kfq.js";import"./Label-CIDaegmf.js";import"./SupportLabel-DZXCl2ef.js";import"./WarningIcon-BLvd3hYD.js";import"./Icon-BEan_62r.js";import"./BaseRadioButton.stories-C_EPN7Et.js";import"./BaseRadioButton-B66ptes2.js";import"./QuestionIcon-DztLyRXj.js";import"./TooltipTrigger-D46f9xBa.js";import"./floating-ui.react-sQDUNmcb.js";import"./index-CiNVJhoy.js";import"./index-BpXPIkVs.js";import"./TooltipContent-_CHBBlzX.js";import"./useBrowserPreferences-DmmNgElD.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
