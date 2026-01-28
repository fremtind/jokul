import{j as m,r as a}from"./iframe-DX9D7YYS.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-Q4KCqDyS.js";import i from"./RadioButton.stories-CG2_ifhY.js";import{P as s}from"./PopupTip-uSgbd4YC.js";import c from"./Popuptip.stories-hH5EH-8l.js";import{F as d}from"./FieldGroup-D9X22Z1E.js";import{R as l}from"./RadioButton-CCJkl61P.js";import{C as u}from"./Checkbox-xpmhzWgo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DrBIWBXz.js";import"./Label-0yXzyVGT.js";import"./SupportLabel-BBUd_JYr.js";import"./WarningIcon-C3V2ghJy.js";import"./Icon-joQ_tE4D.js";import"./BaseRadioButton.stories-vFVODLwQ.js";import"./BaseRadioButton-BlSItsC5.js";import"./QuestionIcon-QV7kNAZw.js";import"./TooltipTrigger-CNLi5jAU.js";import"./floating-ui.react-C9QIurpL.js";import"./index-Bu-69vDe.js";import"./index-xpqzFBos.js";import"./TooltipContent-2ijP6KIF.js";import"./useBrowserPreferences-CfNR63la.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
