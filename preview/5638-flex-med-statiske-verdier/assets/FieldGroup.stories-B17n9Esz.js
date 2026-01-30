import{j as m,r as a}from"./iframe-CxSACePp.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CWiUfr-B.js";import i from"./RadioButton.stories-CgaJ_vq8.js";import{P as s}from"./PopupTip-DvHOwSYY.js";import c from"./Popuptip.stories-JtMS8_Vm.js";import{F as d}from"./FieldGroup-B4V1yEaE.js";import{R as l}from"./RadioButton-D-fDaKVL.js";import{C as u}from"./Checkbox-DLSvst5q.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CiY-3LHD.js";import"./Label-CPajGxsv.js";import"./SupportLabel-B8jQxY_8.js";import"./WarningIcon-CNXQQSIZ.js";import"./Icon-CJmg0AaM.js";import"./BaseRadioButton.stories-ZYV4ld-H.js";import"./BaseRadioButton-BXISbPx6.js";import"./QuestionIcon-CmQfGUdG.js";import"./TooltipTrigger-D3JvbgQk.js";import"./floating-ui.react-BZkfTdM9.js";import"./index-C7EGksSn.js";import"./index-C4Xu_xvu.js";import"./TooltipContent-rw3Hr4tG.js";import"./useBrowserPreferences-BSnt3aBy.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
