import{j as m,r as a}from"./iframe-DORlHZ2J.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-B-jVa0ha.js";import i from"./RadioButton.stories-BxpPn_C5.js";import{P as s}from"./PopupTip-xuCFWOUG.js";import c from"./Popuptip.stories-De22aQ_X.js";import{F as d}from"./FieldGroup-B_vhw9d5.js";import{R as l}from"./RadioButton-DlSl-ly5.js";import{C as u}from"./Checkbox-DQpw5XFk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CfvzeDdH.js";import"./Label-Gu8GlQnX.js";import"./SupportLabel-Bo3ukNf6.js";import"./WarningIcon-DbwYTU0A.js";import"./Icon-CkrtLpE8.js";import"./BaseRadioButton.stories-BlXsuMM4.js";import"./BaseRadioButton-CpwPM7ha.js";import"./QuestionIcon-0nfK18J_.js";import"./TooltipTrigger-BRcDQ0il.js";import"./floating-ui.react-ELR0DDVh.js";import"./index-93eC9_vh.js";import"./index-CEJa17aE.js";import"./TooltipContent-CJj5G3sP.js";import"./useBrowserPreferences-hge9WJFe.js";import"./getThemeAndDensity-v_O0Epee.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
