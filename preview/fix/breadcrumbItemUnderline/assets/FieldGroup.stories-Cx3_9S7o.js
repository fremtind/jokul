import{j as m,r as a}from"./iframe-DJDmBBqo.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CoxHrrpN.js";import i from"./RadioButton.stories-tDT5IEks.js";import{P as s}from"./PopupTip-CUe8QX8o.js";import c from"./Popuptip.stories-CA_HqrBk.js";import{F as d}from"./FieldGroup-D_23gDRE.js";import{R as l}from"./RadioButton-BsbFUG-K.js";import{C as u}from"./Checkbox-BjXz_V76.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-f3hbzSCk.js";import"./Label-DDyDMrGA.js";import"./SupportLabel-D4wKXf1L.js";import"./WarningIcon-BgBuEVO9.js";import"./Icon-Da78OBhE.js";import"./BaseRadioButton.stories-B9eZYJ3A.js";import"./BaseRadioButton-CFeuf7zC.js";import"./QuestionIcon-TfYoC1Ny.js";import"./TooltipTrigger-B-EbLSfZ.js";import"./floating-ui.react-DbyVIlnm.js";import"./index-DMt2hYYH.js";import"./index-DwNo-7Gk.js";import"./TooltipContent-h24Uatjz.js";import"./useBrowserPreferences-BvxcUPzD.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
