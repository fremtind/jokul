import{j as m,r as a}from"./iframe-Dh18Xdyl.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DDahWuhH.js";import i from"./RadioButton.stories-fsko9NYd.js";import{P as s}from"./PopupTip-CAXCFDGp.js";import c from"./Popuptip.stories-DpwHU1GT.js";import{F as d}from"./FieldGroup-Bkn_hqr4.js";import{R as l}from"./RadioButton-BNVgPQAs.js";import{C as u}from"./Checkbox-C-Ncaply.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DFryGJGq.js";import"./Label-DDNNOV-f.js";import"./SupportLabel-DLoi5HQY.js";import"./WarningIcon-CnNtVCMV.js";import"./Icon-D2yXAuSv.js";import"./BaseRadioButton.stories-Cr7mIbpY.js";import"./BaseRadioButton-CKuO1TuU.js";import"./QuestionIcon-BfojSyAx.js";import"./TooltipTrigger-CAoKksEs.js";import"./floating-ui.react-BpKykoWh.js";import"./index-y6yHjhDE.js";import"./index-CeQEx3AN.js";import"./TooltipContent-B8GrLW0b.js";import"./useBrowserPreferences-DBJBLngY.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
