import{j as m,r as a}from"./iframe-BPrugpj5.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-5QSkvszd.js";import i from"./RadioButton.stories-Dve_9M90.js";import{P as s}from"./PopupTip-CHHSQU-k.js";import c from"./Popuptip.stories-YYEEWul4.js";import{F as d}from"./FieldGroup-By3XmeVZ.js";import{R as l}from"./RadioButton-xzHaRRR-.js";import{C as u}from"./Checkbox-2qKKpZ4j.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-qG_-aakc.js";import"./Label-DBK2xjTu.js";import"./SupportLabel-DKc-UMba.js";import"./WarningIcon-C-n42exV.js";import"./Icon-K8V9N-MZ.js";import"./BaseRadioButton.stories-FHQTluAf.js";import"./BaseRadioButton-DXiqCoXl.js";import"./QuestionIcon-7VIn0Ama.js";import"./TooltipTrigger-J7M4xeuo.js";import"./floating-ui.react-BUr44Ytr.js";import"./index-pJGS8TN-.js";import"./index-n3O-CqgI.js";import"./TooltipContent-4MY0GjZ_.js";import"./useBrowserPreferences-Clqx8Fdi.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
