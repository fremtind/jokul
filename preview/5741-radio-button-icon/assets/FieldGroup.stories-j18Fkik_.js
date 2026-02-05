import{j as m,r as a}from"./iframe-wkS5hHqP.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CAVa29u6.js";import i from"./RadioButton.stories-BdLAztAY.js";import{P as s}from"./PopupTip-C1TD4jXk.js";import c from"./Popuptip.stories-K2uPD9VU.js";import{F as d}from"./FieldGroup-RMF1Rchk.js";import{R as l}from"./RadioButton-BSRiS1BS.js";import{C as u}from"./Checkbox-Dz96J85x.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CogXoQoi.js";import"./Label-_-1SW9Gg.js";import"./SupportLabel-BKAMwWwm.js";import"./WarningIcon-D1ybgE4I.js";import"./Icon-plitN43K.js";import"./BaseRadioButton.stories-DqsDnSww.js";import"./BaseRadioButton-DEGdbnew.js";import"./QuestionIcon-BVlNT7xJ.js";import"./TooltipTrigger-CsxJOvUV.js";import"./floating-ui.react-BI9ptEax.js";import"./index-HlsZeyYa.js";import"./index-Da7qp6qj.js";import"./TooltipContent-CrNFQCRk.js";import"./useBrowserPreferences-CKh_LLdO.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
