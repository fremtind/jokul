import{j as m,r as a}from"./iframe-Da6npOLB.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-B2TKKK6j.js";import i from"./RadioButton.stories-B6nT6b4l.js";import{P as s}from"./PopupTip-rZiWZ2Fn.js";import c from"./Popuptip.stories-COnbFMqV.js";import{F as d}from"./FieldGroup-1wWtEl6b.js";import{R as l}from"./RadioButton-CG-R_Z2H.js";import{C as u}from"./Checkbox-qW9Db9Qv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-R9sOH0YU.js";import"./Label-CuM6234y.js";import"./SupportLabel-CwsRKIfS.js";import"./WarningIcon-CSgy_3gS.js";import"./Icon-Ck_WWbzd.js";import"./BaseRadioButton.stories-BW81RuXz.js";import"./BaseRadioButton-Doynq3hy.js";import"./QuestionIcon-BB8ITElv.js";import"./TooltipTrigger-BA4zGsWw.js";import"./floating-ui.react-BSIhALg3.js";import"./index-CRCZ4ZXj.js";import"./index-C6nFRHY8.js";import"./TooltipContent-D0iRRVa9.js";import"./useBrowserPreferences-DR7RP_E3.js";import"./getThemeAndDensity-v_O0Epee.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
