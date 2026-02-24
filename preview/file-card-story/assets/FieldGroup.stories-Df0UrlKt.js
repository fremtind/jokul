import{j as m,r as a}from"./iframe-W1L3_kCc.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DNWefceq.js";import i from"./RadioButton.stories-COeFoHwC.js";import{P as s}from"./PopupTip-DiYO2fcj.js";import c from"./Popuptip.stories-DnUGcQKe.js";import{F as d}from"./FieldGroup-CVY2hQVz.js";import{R as l}from"./RadioButton-DeBHwNdD.js";import{C as u}from"./Checkbox--jaw_aLe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-g4vTlDH9.js";import"./Label-BrHRIpvu.js";import"./SupportLabel-BNzItH4O.js";import"./WarningIcon-DcfTl-Xy.js";import"./Icon-CI82agv1.js";import"./BaseRadioButton.stories-BiE82sY4.js";import"./BaseRadioButton-VNM5gcMD.js";import"./QuestionIcon-DoMjiDoq.js";import"./TooltipTrigger-zKfnBlpt.js";import"./floating-ui.react-C-_BeJeG.js";import"./index-BDS3zBGe.js";import"./index-CTcB456S.js";import"./TooltipContent-DVn6W717.js";import"./useBrowserPreferences-Df-w1xY5.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
