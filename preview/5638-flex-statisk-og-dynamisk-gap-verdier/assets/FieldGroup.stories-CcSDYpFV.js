import{j as m,r as a}from"./iframe-B0LixYhc.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-BBQ0i106.js";import i from"./RadioButton.stories-tRD1sLxB.js";import{P as s}from"./PopupTip-wgMLhVY3.js";import c from"./Popuptip.stories-dwFqSE-j.js";import{F as d}from"./FieldGroup-CiQ6pEhH.js";import{R as l}from"./RadioButton-CAhehliF.js";import{C as u}from"./Checkbox-Dp3b1Rls.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CL4mtLyv.js";import"./Label-D7HXu_CA.js";import"./SupportLabel-Bx8YjgUc.js";import"./WarningIcon-1Gd1nxfv.js";import"./Icon-qLGx8tNT.js";import"./BaseRadioButton.stories-Y-gSsgh2.js";import"./BaseRadioButton-Bk_pRoCx.js";import"./QuestionIcon-DrSftK2x.js";import"./TooltipTrigger-_xXxqIKq.js";import"./floating-ui.react-DgVwBfDn.js";import"./index-zA_KbRRa.js";import"./index-C0HTDiDZ.js";import"./TooltipContent-CZ9dHi8J.js";import"./useBrowserPreferences-bF2Qf4wX.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
