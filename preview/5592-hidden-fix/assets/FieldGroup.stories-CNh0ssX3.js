import{j as m,r as a}from"./iframe-B_z1kba_.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-wTgxvvht.js";import i from"./RadioButton.stories-muOSQzlt.js";import{P as s}from"./PopupTip-BRnFnfGB.js";import c from"./Popuptip.stories-BSXKuhGj.js";import{F as d}from"./FieldGroup-BVEtMIm_.js";import{R as l}from"./RadioButton-uJYYqo7q.js";import{C as u}from"./Checkbox-C-Di-V91.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DqYU3Rno.js";import"./Label-aJBLtaen.js";import"./SupportLabel-CxzeBLI0.js";import"./WarningIcon-C7vS_pv0.js";import"./Icon-BTvp5Q0s.js";import"./BaseRadioButton.stories-C3Qzzhbh.js";import"./BaseRadioButton-CL0IiAZw.js";import"./QuestionIcon-CvL2uSNY.js";import"./TooltipTrigger-B8ruqY0n.js";import"./floating-ui.react-D5i5M2hc.js";import"./index-BNO3nZxa.js";import"./index-AyGeOodF.js";import"./TooltipContent-P1f-F4dw.js";import"./useBrowserPreferences-CtrijcTn.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
