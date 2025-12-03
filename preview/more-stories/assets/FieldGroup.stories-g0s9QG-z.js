import{j as m,r as a}from"./iframe-G8YrbEwB.js";import{CheckboxStory as n}from"./Checkbox.stories-C8Tg1D0_.js";import i from"./RadioButton.stories-BgTz9L0u.js";import{P as s}from"./PopupTip-B4IQyHpF.js";import c from"./Popuptip.stories-DPxl8-TB.js";import{F as d}from"./FieldGroup-Bdpg0Aea.js";import{R as l}from"./RadioButton-BpFvbB8D.js";import{C as u}from"./Checkbox-B5as8Jpz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BSL40wEG.js";import"./Label-C2_8wrFD.js";import"./SupportLabel-Dx6Sh9Ry.js";import"./WarningIcon-DP9EOC7C.js";import"./Icon-2iH_OLKZ.js";import"./BaseRadioButton.stories-Cd__jFlm.js";import"./BaseRadioButton-BtSy5yuZ.js";import"./QuestionIcon-dt2fSfOY.js";import"./TooltipTrigger-C8hKf9Z9.js";import"./floating-ui.react-CqUgomsL.js";import"./index-CZTl18Ry.js";import"./index-CfxzNXbD.js";import"./TooltipContent-DHIkDwM-.js";import"./useBrowserPreferences-DSWTp1Vs.js";import"./getThemeAndDensity-v_O0Epee.js";/* empty css               */const p=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
