import{j as m,r as a}from"./iframe-BUE9IwKG.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DRykEoUC.js";import i from"./RadioButton.stories-IVBkWF0U.js";import{P as s}from"./PopupTip-01rFVmy5.js";import c from"./Popuptip.stories-BXcfJ7Re.js";import{F as d}from"./FieldGroup-V3MasfKc.js";import{R as l}from"./RadioButton-Bz9zsPvK.js";import{C as u}from"./Checkbox-DlPSnjW2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BPnoftdu.js";import"./Label-DbLwGxcd.js";import"./SupportLabel-BmLsciQP.js";import"./WarningIcon-EkukdY6h.js";import"./Icon-0aVVjjDH.js";import"./BaseRadioButton.stories-BD-7A8In.js";import"./BaseRadioButton-D5hpF-i8.js";import"./QuestionIcon-C-6_NsFk.js";import"./TooltipTrigger-c4LWIa9b.js";import"./floating-ui.react-BBTR2VT7.js";import"./index-CGg3s-of.js";import"./index-DDQFj0LV.js";import"./TooltipContent-DtYoAv9o.js";import"./useBrowserPreferences-DSGh_UqM.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
