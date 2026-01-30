import{j as m,r as a}from"./iframe-C5z_sbDv.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-Bt3wq1ng.js";import i from"./RadioButton.stories-BqiWEOQt.js";import{P as s}from"./PopupTip-Brc3hIWq.js";import c from"./Popuptip.stories-MUpDX2b3.js";import{F as d}from"./FieldGroup-DQpTdCPj.js";import{R as l}from"./RadioButton-Eh65OTf6.js";import{C as u}from"./Checkbox-CmOLsqsW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B4-yetQ_.js";import"./Label-BUOOjVnO.js";import"./SupportLabel-C-FIS_r_.js";import"./WarningIcon-CpBSpxC0.js";import"./Icon-CoEfuoEs.js";import"./BaseRadioButton.stories-CFtqhM1M.js";import"./BaseRadioButton-B6dZb2Pc.js";import"./QuestionIcon-oc9K5uQc.js";import"./TooltipTrigger-sgGoYoEm.js";import"./floating-ui.react-D41hpQ0l.js";import"./index-DoFc71xX.js";import"./index-CDAG9SNa.js";import"./TooltipContent-BSNFxbTd.js";import"./useBrowserPreferences-kmbjsrgn.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
