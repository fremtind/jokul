import{j as m,r as a}from"./iframe-C6TP-XNE.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-BaAw-Qi6.js";import i from"./RadioButton.stories-BoY2MaBG.js";import{P as s}from"./PopupTip-DBkKZUKq.js";import c from"./Popuptip.stories-BX12zicX.js";import{F as d}from"./FieldGroup-B6zVu-lA.js";import{R as l}from"./RadioButton-BT5x8yAi.js";import{C as u}from"./Checkbox-gCbQAMYK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DL-vZhfl.js";import"./Label-BLgcoFAM.js";import"./SupportLabel-D_IUbB2v.js";import"./WarningIcon-qgG-Raj1.js";import"./Icon-D86L-DN7.js";import"./BaseRadioButton.stories-CN0tqqKk.js";import"./BaseRadioButton-CMe_7BVB.js";import"./QuestionIcon-svjL8r-O.js";import"./TooltipTrigger-D3npzIY5.js";import"./floating-ui.react-BfzCWTmY.js";import"./index-Bb5ClZlB.js";import"./index-B_SSe9Xu.js";import"./TooltipContent-BHhuPag9.js";import"./useBrowserPreferences-CUvko7xM.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
