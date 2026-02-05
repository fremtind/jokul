import{j as m,r as a}from"./iframe-Ddrx5a8p.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-BkXVagV6.js";import i from"./RadioButton.stories-C_IgYzml.js";import{P as s}from"./PopupTip-Bz60Wavf.js";import c from"./Popuptip.stories-AJCXTI_j.js";import{F as d}from"./FieldGroup-HoxWgD6S.js";import{R as l}from"./RadioButton-oLbg18Sg.js";import{C as u}from"./Checkbox-CKhAxeJv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Bsz1B0fT.js";import"./Label-CpnlBhtf.js";import"./SupportLabel-B1R3q1sh.js";import"./WarningIcon-BfST62SR.js";import"./Icon-CKG-T-fJ.js";import"./BaseRadioButton.stories-CRbGI094.js";import"./BaseRadioButton-DEGl_dHe.js";import"./QuestionIcon-D-Gs5Fze.js";import"./TooltipTrigger-DQ6pgmCa.js";import"./floating-ui.react-Cxb1dWkI.js";import"./index-RYkYIJyx.js";import"./index-DajBAQBL.js";import"./TooltipContent-CudAMz7d.js";import"./useBrowserPreferences-DGH6ZOnO.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
