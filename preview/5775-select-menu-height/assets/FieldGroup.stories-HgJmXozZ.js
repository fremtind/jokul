import{j as m,r as a}from"./iframe-Gpwh9WPG.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-BLJ9zoag.js";import i from"./RadioButton.stories-DFxOZwWn.js";import{P as s}from"./PopupTip-Cn25VJZO.js";import c from"./Popuptip.stories-DmdrYBU8.js";import{F as d}from"./FieldGroup-adAA1uIt.js";import{R as l}from"./RadioButton-B_r7ANaU.js";import{C as u}from"./Checkbox-DK9tlcfn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DtTilRcf.js";import"./Label-BlXMOig_.js";import"./SupportLabel-BL0xH6bL.js";import"./WarningIcon-DKssVUta.js";import"./Icon-cKiOag1L.js";import"./BaseRadioButton.stories-EuQtpUVm.js";import"./BaseRadioButton-CYtsfOuN.js";import"./QuestionIcon-C-O9jxBD.js";import"./TooltipTrigger-Wo3uT6mw.js";import"./floating-ui.react-D_HDEICM.js";import"./index-CYd8AsmM.js";import"./index-CYyXPY7R.js";import"./TooltipContent-DVUk0xQ_.js";import"./useBrowserPreferences-6mo3RyK7.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
