import{j as m,r as a}from"./iframe-C4i0NNfR.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CTZ_5Hz7.js";import i from"./RadioButton.stories-qylfq2tI.js";import{P as s}from"./PopupTip-C1mnOUZ7.js";import c from"./Popuptip.stories-Czjmw8CM.js";import{F as d}from"./FieldGroup-P_pJY8Oe.js";import{R as l}from"./RadioButton-uBrzUMBQ.js";import{C as u}from"./Checkbox-XuxnHjlp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B-P1y7ia.js";import"./Label-CA1cghBN.js";import"./SupportLabel-CeQSQON6.js";import"./WarningIcon-qxJTsqBa.js";import"./Icon-DH207LI6.js";import"./BaseRadioButton.stories-Bey3vRDP.js";import"./BaseRadioButton-yclh9cxr.js";import"./QuestionIcon-Cah73r0k.js";import"./TooltipTrigger-BQ3-xJjY.js";import"./floating-ui.react-8RMDMvWv.js";import"./index-D9u-frv1.js";import"./index-Cj-qcwny.js";import"./TooltipContent-CY0_Kzee.js";import"./useBrowserPreferences-CpmffT4X.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
