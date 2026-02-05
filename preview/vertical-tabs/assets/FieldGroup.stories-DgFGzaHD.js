import{j as m,r as a}from"./iframe-BGQwfLfY.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-8o8IFWRd.js";import i from"./RadioButton.stories-CIViVUD1.js";import{P as s}from"./PopupTip-CCnEjqZm.js";import c from"./Popuptip.stories-DV0WDUmr.js";import{F as d}from"./FieldGroup-D0oS59L_.js";import{R as l}from"./RadioButton-C1quLYYS.js";import{C as u}from"./Checkbox-Cr932fZj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CtuyGIcb.js";import"./Label-Bbi5wBOT.js";import"./SupportLabel-fnTwxidH.js";import"./WarningIcon-DiLIL_1E.js";import"./Icon-BmFAD_jH.js";import"./BaseRadioButton.stories-Dubd0bgx.js";import"./BaseRadioButton-BBZkjLCd.js";import"./QuestionIcon-B8siToK8.js";import"./TooltipTrigger-B8f54wZx.js";import"./floating-ui.react-CXS0Hn8f.js";import"./index-D8BksbYn.js";import"./index-CvrpKoPp.js";import"./TooltipContent-Bm0gjxPx.js";import"./useBrowserPreferences-DE63Fv_8.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
