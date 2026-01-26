import{j as m,r as a}from"./iframe-C4HFfLA6.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DNiCXDvi.js";import i from"./RadioButton.stories-BJ4VB4Mw.js";import{P as s}from"./PopupTip-C9pbcLfi.js";import c from"./Popuptip.stories-A2xoQhj5.js";import{F as d}from"./FieldGroup-B-5K1p_M.js";import{R as l}from"./RadioButton-XNWApll5.js";import{C as u}from"./Checkbox-CAfrwHiA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DC6qAwyH.js";import"./Label-c8oyiAcg.js";import"./SupportLabel-CxLl5vcv.js";import"./WarningIcon-BnzyzgJ1.js";import"./Icon-BAk8PW5T.js";import"./BaseRadioButton.stories-DXaj9eXG.js";import"./BaseRadioButton-9sdKZazj.js";import"./QuestionIcon-D6t7qgdB.js";import"./TooltipTrigger-B-hJtWax.js";import"./floating-ui.react-C7bKfh9l.js";import"./index-CXstum-W.js";import"./index-CZlIr_b0.js";import"./TooltipContent-DHt6UYJR.js";import"./useBrowserPreferences-DXI477_E.js";import"./getThemeAndDensity-v_O0Epee.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
