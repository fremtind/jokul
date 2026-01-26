import{j as m,r as a}from"./iframe-B2o9WWXz.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-B-KFn4He.js";import i from"./RadioButton.stories-ymniAj1i.js";import{P as s}from"./PopupTip-DQWIbFA5.js";import c from"./Popuptip.stories-qg-PkS7P.js";import{F as d}from"./FieldGroup-D7eFsubW.js";import{R as l}from"./RadioButton-DWa1sSs0.js";import{C as u}from"./Checkbox-D6DRFqfA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-ByDnD02B.js";import"./Label-DpWe9Puc.js";import"./SupportLabel-HQ87Jwym.js";import"./WarningIcon-BzL-NAoq.js";import"./Icon-CFeldJ8q.js";import"./BaseRadioButton.stories-BA_9JFb_.js";import"./BaseRadioButton-CCMW1-d9.js";import"./QuestionIcon-B8RJL8i0.js";import"./TooltipTrigger-DYZv8HFK.js";import"./floating-ui.react-o6C93e-I.js";import"./index-BEVWar5k.js";import"./index-Ur-wJ65n.js";import"./TooltipContent-BhbS0n3v.js";import"./useBrowserPreferences-Cq5s4Ma0.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
