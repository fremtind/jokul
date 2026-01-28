import{j as m,r as a}from"./iframe-eTaGQAU4.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CMcdjg_i.js";import i from"./RadioButton.stories-yx79M-i5.js";import{P as s}from"./PopupTip-C-rYSdHz.js";import c from"./Popuptip.stories-Bisr4_UX.js";import{F as d}from"./FieldGroup-G6QUTim_.js";import{R as l}from"./RadioButton-hW0K9LX7.js";import{C as u}from"./Checkbox-DfMgDEqi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-lN2LkL18.js";import"./Label-BXTSL62e.js";import"./SupportLabel-BIIxtZuo.js";import"./WarningIcon-DcKwn4FP.js";import"./Icon-e-9WAIdf.js";import"./BaseRadioButton.stories-DrdFkCzt.js";import"./BaseRadioButton-55hLrpSe.js";import"./QuestionIcon-PWW7coJF.js";import"./TooltipTrigger-Bo707-3t.js";import"./floating-ui.react-CzfkOM9M.js";import"./index-DcCoxzk5.js";import"./index-vnUHkYix.js";import"./TooltipContent-dzwr6wzY.js";import"./useBrowserPreferences-85GkmPJD.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
