import{j as m,r as a}from"./iframe-OPoxwQOS.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CZAmyvVP.js";import i from"./RadioButton.stories-Beqrvpcx.js";import{P as s}from"./PopupTip-BcEXymnS.js";import c from"./Popuptip.stories-0y4MYyCa.js";import{F as d}from"./FieldGroup-B-_4eaTE.js";import{R as l}from"./RadioButton-BMnZgjwh.js";import{C as u}from"./Checkbox-4HCf-41J.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DncDbf-5.js";import"./Label-JCa4WvtE.js";import"./SupportLabel-xI_V-Xq_.js";import"./WarningIcon-CJMIa-_2.js";import"./Icon-Ama-Epv7.js";import"./BaseRadioButton.stories-4yQPI9Xj.js";import"./BaseRadioButton-y3gVB7bv.js";import"./QuestionIcon-DNeYZoqJ.js";import"./TooltipTrigger-uyWVsKL7.js";import"./floating-ui.react-CaSKlIWL.js";import"./index-BpbHUyeZ.js";import"./index-4vZupeVR.js";import"./TooltipContent-C1NECaeB.js";import"./useBrowserPreferences-Dl_mJEm7.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
