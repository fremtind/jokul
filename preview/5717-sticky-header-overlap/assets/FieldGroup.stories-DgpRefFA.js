import{j as m,r as a}from"./iframe-CT1xRnJu.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-C42--EMF.js";import i from"./RadioButton.stories-WNbRucN8.js";import{P as s}from"./PopupTip-B48b07dq.js";import c from"./Popuptip.stories-B_YunEam.js";import{F as d}from"./FieldGroup-ByOYd_aN.js";import{R as l}from"./RadioButton-B4JIhzp1.js";import{C as u}from"./Checkbox-B-6UgBDu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DPDAENdl.js";import"./Label-PmZuEZ-E.js";import"./SupportLabel-LRTR9BdO.js";import"./WarningIcon-JmnR-9by.js";import"./Icon-CyM5hleO.js";import"./BaseRadioButton.stories-XWY0Qnep.js";import"./BaseRadioButton-8UXd2MT8.js";import"./QuestionIcon-jF4U1bY6.js";import"./TooltipTrigger-BW_JLEJD.js";import"./floating-ui.react-DxalkGgD.js";import"./index-CgwybmSm.js";import"./index-BS15ueu2.js";import"./TooltipContent-Y41LFdcg.js";import"./useBrowserPreferences-CaMAAbQI.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
