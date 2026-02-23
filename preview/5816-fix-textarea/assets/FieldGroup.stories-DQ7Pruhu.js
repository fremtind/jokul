import{j as m,r as a}from"./iframe-CmSEJ0l9.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-hMRK__fC.js";import i from"./RadioButton.stories-DMSRLiam.js";import{P as s}from"./PopupTip-BBI5iqP-.js";import c from"./Popuptip.stories-C-2MSKBQ.js";import{F as d}from"./FieldGroup-B7VaHN41.js";import{R as l}from"./RadioButton-FbVMRrqS.js";import{C as u}from"./Checkbox-CUtkoAbl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B_mxl2xK.js";import"./Label-BYXiWHX8.js";import"./SupportLabel-DEaboEfo.js";import"./WarningIcon-BPILy-xc.js";import"./Icon-BVqeQxsf.js";import"./BaseRadioButton.stories-B3NcJXN7.js";import"./BaseRadioButton-CvWJQY1U.js";import"./QuestionIcon-khIF6uNT.js";import"./TooltipTrigger-B4eaTt9e.js";import"./floating-ui.react-BxffW-7g.js";import"./index-DtLdkJZ2.js";import"./index-COmcjl4r.js";import"./TooltipContent-DvAfdauY.js";import"./useBrowserPreferences-stsVXoP3.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
