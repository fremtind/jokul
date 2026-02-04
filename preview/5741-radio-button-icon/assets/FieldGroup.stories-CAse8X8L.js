import{j as m,r as a}from"./iframe-CrJ0lt5j.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DfS1mFrR.js";import i from"./RadioButton.stories-Btkxs_Aq.js";import{P as s}from"./PopupTip-BbtOQJQp.js";import c from"./Popuptip.stories-DIN0lIw1.js";import{F as d}from"./FieldGroup-B57JFWcQ.js";import{R as l}from"./RadioButton-BxAIhHLw.js";import{C as u}from"./Checkbox-C_ApBC6x.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CsNjwyA-.js";import"./Label-DqvLFkh5.js";import"./SupportLabel-CnciDgrG.js";import"./WarningIcon-CiCSqK69.js";import"./Icon-DGmVWH6s.js";import"./BaseRadioButton.stories-ChjYf-gH.js";import"./BaseRadioButton-DZP4v6Zn.js";import"./QuestionIcon-U63T9I0x.js";import"./TooltipTrigger-HpHH2IO6.js";import"./floating-ui.react-Dthd5uDm.js";import"./index-CxbIjaM6.js";import"./index-b4W607Pr.js";import"./TooltipContent-B2NT1qjg.js";import"./useBrowserPreferences-BLI8U_gS.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
