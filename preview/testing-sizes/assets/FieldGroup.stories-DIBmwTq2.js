import{j as m,r as a}from"./iframe-B_zKdfLP.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DuT2Edbp.js";import i from"./RadioButton.stories-D9RJhg2Y.js";import{P as s}from"./PopupTip-kfKtXfkF.js";import c from"./Popuptip.stories-91oAH0k_.js";import{F as d}from"./FieldGroup-DotBv56T.js";import{R as l}from"./RadioButton-C3sMyWtz.js";import{C as u}from"./Checkbox-DvBW7IxO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BMUtJkz_.js";import"./Label-TsCfyMtT.js";import"./SupportLabel-UV_0scEh.js";import"./WarningIcon-DzOttN66.js";import"./Icon-DETZ8T6E.js";import"./BaseRadioButton.stories-D5k23D77.js";import"./BaseRadioButton-CxW6qkCl.js";import"./QuestionIcon-G_rWDnGA.js";import"./TooltipTrigger-ZWoNIxD-.js";import"./floating-ui.react-C6xJWsSl.js";import"./index-NMSieu-n.js";import"./index-BGqJy0Nu.js";import"./TooltipContent-D-sRzuKy.js";import"./useBrowserPreferences-AnxnTwPE.js";import"./getThemeAndDensity-v_O0Epee.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
