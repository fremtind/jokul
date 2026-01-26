import{j as m,r as a}from"./iframe-Dt52Y0Re.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CC88d9PJ.js";import i from"./RadioButton.stories-CdmuepHI.js";import{P as s}from"./PopupTip-BLWVYWgd.js";import c from"./Popuptip.stories-Sn18FzCn.js";import{F as d}from"./FieldGroup-D1ocMMuh.js";import{R as l}from"./RadioButton-IzTWoCUl.js";import{C as u}from"./Checkbox-B6GGjPDk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-C6VoJPiw.js";import"./Label-D4ZONwhR.js";import"./SupportLabel-SLWEo-yk.js";import"./WarningIcon-C_SZlROY.js";import"./Icon-B0mT6NzT.js";import"./BaseRadioButton.stories-D3OVuMOf.js";import"./BaseRadioButton-BzAGqhO8.js";import"./QuestionIcon-Cv2WHxzq.js";import"./TooltipTrigger-04x6QAcS.js";import"./floating-ui.react-Dz2-rV8Q.js";import"./index-7OYnhAk7.js";import"./index-BYrmG1HX.js";import"./TooltipContent-B_y-U3rd.js";import"./useBrowserPreferences-FiPOl0yu.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
