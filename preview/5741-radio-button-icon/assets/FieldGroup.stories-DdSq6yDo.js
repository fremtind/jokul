import{j as m,r as a}from"./iframe-Bd9jJ03_.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-0s6mbT9B.js";import i from"./RadioButton.stories-BgCSBZm4.js";import{P as s}from"./PopupTip-Djm9JGko.js";import c from"./Popuptip.stories-oAmlJ064.js";import{F as d}from"./FieldGroup-DEIksdOx.js";import{R as l}from"./RadioButton-sATv88LD.js";import{C as u}from"./Checkbox-BA8voBSA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DkCvPqzq.js";import"./Label-DnG3AGPF.js";import"./SupportLabel-BO4d3sxD.js";import"./WarningIcon-1B-NxNrn.js";import"./Icon-BMPLUX3C.js";import"./BaseRadioButton.stories-DbHf0_yA.js";import"./BaseRadioButton-C_B5yd5u.js";import"./QuestionIcon-CU2wqpnp.js";import"./TooltipTrigger-BWxpW89L.js";import"./floating-ui.react-DPp1BBNW.js";import"./index-De4qVEY0.js";import"./index-DH6hbZKE.js";import"./TooltipContent-D1IcjsCq.js";import"./useBrowserPreferences-9o2DUpIl.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
