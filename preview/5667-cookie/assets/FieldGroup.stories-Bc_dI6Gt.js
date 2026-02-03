import{j as m,r as a}from"./iframe-KUO-F_B9.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DlddGyCY.js";import i from"./RadioButton.stories-Rva4Vqbt.js";import{P as s}from"./PopupTip-CRsYzX3j.js";import c from"./Popuptip.stories-D6JWLRgX.js";import{F as d}from"./FieldGroup-ftlZ1uYD.js";import{R as l}from"./RadioButton-BaCVHQeT.js";import{C as u}from"./Checkbox-OeqnWk4W.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B4V0-f1l.js";import"./Label-BQhRUifm.js";import"./SupportLabel-CYFetTZw.js";import"./WarningIcon-PMx6y0aI.js";import"./Icon-DG6s4xDk.js";import"./BaseRadioButton.stories-Cj8idRh5.js";import"./BaseRadioButton-BtK1gbF6.js";import"./QuestionIcon-Bwnwssf3.js";import"./TooltipTrigger-DdxP0MEG.js";import"./floating-ui.react-DZ2ynI-b.js";import"./index-C8xzwxpy.js";import"./index-B-KOsBYd.js";import"./TooltipContent-B0PEj4_8.js";import"./useBrowserPreferences-BYkMkq2g.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
