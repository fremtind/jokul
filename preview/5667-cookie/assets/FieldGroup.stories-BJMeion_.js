import{j as m,r as a}from"./iframe-9wltoutx.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-Bd0CslKM.js";import i from"./RadioButton.stories-DgWT__Ds.js";import{P as s}from"./PopupTip-ChBmNrEN.js";import c from"./Popuptip.stories-DOv4Pq0g.js";import{F as d}from"./FieldGroup-BuqrsGV5.js";import{R as l}from"./RadioButton-BANS59QJ.js";import{C as u}from"./Checkbox-BjL1dPUj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CJSuIauK.js";import"./Label-HG_IrEoF.js";import"./SupportLabel-NPUgEB33.js";import"./WarningIcon-fIyQznU6.js";import"./Icon-Bauk2dJ7.js";import"./BaseRadioButton.stories-BnUhQ1J0.js";import"./BaseRadioButton-BauPnJTb.js";import"./QuestionIcon-B1odkyak.js";import"./TooltipTrigger-Bm75bWqF.js";import"./floating-ui.react-BhV7evJ6.js";import"./index-D4NsW9dd.js";import"./index-Cfty6ksi.js";import"./TooltipContent-D4rsnlXa.js";import"./useBrowserPreferences-CwnjaT0D.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
