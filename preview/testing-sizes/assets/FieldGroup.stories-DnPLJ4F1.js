import{j as m,r as a}from"./iframe-DWrx-pWR.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CPfO15yT.js";import i from"./RadioButton.stories-4aeYoz0f.js";import{P as s}from"./PopupTip-BdXWX3OR.js";import c from"./Popuptip.stories-DGdccogy.js";import{F as d}from"./FieldGroup-D0maFwdc.js";import{R as l}from"./RadioButton-BiRW492R.js";import{C as u}from"./Checkbox-BQSGNSoC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-D9URpKpz.js";import"./Label-BbabvezF.js";import"./SupportLabel-ChJYVA22.js";import"./WarningIcon-Bkns4XRq.js";import"./Icon-DDdpCIjM.js";import"./BaseRadioButton.stories-BRSSYklg.js";import"./BaseRadioButton-3JpVKqAD.js";import"./QuestionIcon-BY1P5Bh1.js";import"./TooltipTrigger-4-zzoCM4.js";import"./floating-ui.react-BNJro-23.js";import"./index-4uCmwb7L.js";import"./index-C6TzgD0G.js";import"./TooltipContent-aeSITmJW.js";import"./useBrowserPreferences-7I3ijGNk.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
