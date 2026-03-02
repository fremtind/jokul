import{j as m,r as a}from"./iframe-BhHaSnlQ.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-RVLkMoAd.js";import i from"./RadioButton.stories-BZQRtoYm.js";import{P as s}from"./PopupTip-BrFTtID7.js";import c from"./Popuptip.stories-BNnMArtx.js";import{F as d}from"./FieldGroup-Z7vDOJ1n.js";import{R as l}from"./RadioButton-K4gV_m_x.js";import{C as u}from"./Checkbox-D3wAUybp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-3400H-RR.js";import"./Label-Lhv05DnF.js";import"./SupportLabel-Dmc2z6yK.js";import"./WarningIcon-CA8pG99d.js";import"./Icon-BB0MoTOA.js";import"./BaseRadioButton.stories-75Wsckmv.js";import"./BaseRadioButton-BzqgPhd4.js";import"./QuestionIcon-BV2kSNY7.js";import"./TooltipTrigger-CBQm6cfm.js";import"./floating-ui.react-BecXMTNl.js";import"./index-Cxat7fm5.js";import"./index-DcSmjWjb.js";import"./TooltipContent-iYNJ2PEQ.js";import"./useBrowserPreferences-Cxa_y07g.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
