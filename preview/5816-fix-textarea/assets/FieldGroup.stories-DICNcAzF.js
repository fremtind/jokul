import{j as m,r as a}from"./iframe-FOGmXTkF.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DYllXEa4.js";import i from"./RadioButton.stories-DmOK-Sq5.js";import{P as s}from"./PopupTip-BIaw_h42.js";import c from"./Popuptip.stories-CnxkjTly.js";import{F as d}from"./FieldGroup-DUquyNR1.js";import{R as l}from"./RadioButton-wzrD_ypN.js";import{C as u}from"./Checkbox-CCHFPIn-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CSrbytHI.js";import"./Label-DTHmbE4p.js";import"./SupportLabel-DdzR1PFh.js";import"./WarningIcon-BvOlfpnX.js";import"./Icon-3MCil2qv.js";import"./BaseRadioButton.stories-xJYKdECS.js";import"./BaseRadioButton-i5y28PDi.js";import"./QuestionIcon-CociUt_Y.js";import"./TooltipTrigger-ggO1PJcB.js";import"./floating-ui.react-it9_QXep.js";import"./index-C1qa9MlC.js";import"./index-FSSaI7zv.js";import"./TooltipContent-D06i25Ht.js";import"./useBrowserPreferences-sJ1atHXg.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
