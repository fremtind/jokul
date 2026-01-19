import{j as m,r as a}from"./iframe-BLkUpd90.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CNftBkoE.js";import i from"./RadioButton.stories-DQ-ZQZaz.js";import{P as s}from"./PopupTip-D1XsWd7H.js";import c from"./Popuptip.stories-aGM70IGC.js";import{F as d}from"./FieldGroup-BJaHInFu.js";import{R as l}from"./RadioButton-B2blqASW.js";import{C as u}from"./Checkbox-ChdXQzoA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Cx1CVnI-.js";import"./Label-ClbbEBQm.js";import"./SupportLabel-PqwXe1Hg.js";import"./WarningIcon-Kq_VDe4Y.js";import"./Icon-C5BUtbpO.js";import"./BaseRadioButton.stories-p-YQ0Fdy.js";import"./BaseRadioButton-CD8m43po.js";import"./QuestionIcon-CmmrcN__.js";import"./TooltipTrigger-D6z1IxSD.js";import"./floating-ui.react-DjHSFk7s.js";import"./index-DwHYRKJZ.js";import"./index-BGzR11oQ.js";import"./TooltipContent-DQVYUIj_.js";import"./useBrowserPreferences-CJh4-RsK.js";import"./getThemeAndDensity-v_O0Epee.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
