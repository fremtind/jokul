import{j as m,r as a}from"./iframe-4hO3VbOZ.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DufXlvZ6.js";import i from"./RadioButton.stories-BlBbw7zw.js";import{P as s}from"./PopupTip-B9OoGfZK.js";import c from"./Popuptip.stories-Dnhe_NTe.js";import{F as d}from"./FieldGroup-lJbI6ktT.js";import{R as l}from"./RadioButton-Uk_kSt6L.js";import{C as u}from"./Checkbox-DgKt2zVe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Bv53ENwg.js";import"./Label-D_FolNZc.js";import"./SupportLabel-REyeTB2o.js";import"./WarningIcon-D6FOaHNY.js";import"./Icon-DlZ087Hm.js";import"./BaseRadioButton.stories-DoEww8Qj.js";import"./BaseRadioButton-CzCHpFib.js";import"./QuestionIcon-DmOvtsGB.js";import"./TooltipTrigger-Dbl6ehJF.js";import"./floating-ui.react-DJYd_44c.js";import"./index-BZniy7go.js";import"./index-D9vpCgIF.js";import"./TooltipContent-CpfpCars.js";import"./useBrowserPreferences-DIfjIM2w.js";import"./getThemeAndDensity-v_O0Epee.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
