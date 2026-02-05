import{j as m,r as a}from"./iframe-BhubLQQy.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DDowAft2.js";import i from"./RadioButton.stories-DmLaigJE.js";import{P as s}from"./PopupTip-BWPkcnsK.js";import c from"./Popuptip.stories-BX9mSKHV.js";import{F as d}from"./FieldGroup-CkjYthrz.js";import{R as l}from"./RadioButton-DloG1QfU.js";import{C as u}from"./Checkbox-C_1oDTf-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CW4kDxe0.js";import"./Label-DjehJg7P.js";import"./SupportLabel-eO-8q2t3.js";import"./WarningIcon-C60gL7Pf.js";import"./Icon-GnO8EJ0p.js";import"./BaseRadioButton.stories-BZPZwFUa.js";import"./BaseRadioButton-B-gcDxH1.js";import"./QuestionIcon-C3eyj2gU.js";import"./TooltipTrigger-DiXbHAzk.js";import"./floating-ui.react-qVTMpMGo.js";import"./index-CMVVl6qC.js";import"./index-CsQ1Z1TV.js";import"./TooltipContent-Bh9VrnW8.js";import"./useBrowserPreferences-D-cF4wEv.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
