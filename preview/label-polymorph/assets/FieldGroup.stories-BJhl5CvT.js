import{j as m,r as a}from"./iframe-BU_jiWCV.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-wZe4BDyk.js";import i from"./RadioButton.stories-CmAmtWhX.js";import{P as s}from"./PopupTip-C-jpT-jy.js";import c from"./Popuptip.stories-lVEMj00s.js";import{F as d}from"./FieldGroup-BkuWikkg.js";import{R as l}from"./RadioButton-B0bJstJP.js";import{C as u}from"./Checkbox-CsQAS1bJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-D_a0m0IF.js";import"./SupportLabel-DQb_eXfm.js";import"./WarningIcon-theVSf6h.js";import"./Icon-DZVy4Pvr.js";import"./BaseRadioButton.stories-YQ8cDQo6.js";import"./BaseRadioButton-BD3f7I2x.js";import"./QuestionIcon-DKjKLOyO.js";import"./TooltipTrigger-DAfa6KRy.js";import"./floating-ui.react-DHtFtpKr.js";import"./index-D5Kq2b87.js";import"./index-TsMWp5X4.js";import"./TooltipContent-D4m4n04M.js";import"./useBrowserPreferences-DPrXircX.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",legendProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
