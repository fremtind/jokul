import{j as m,r as a}from"./iframe-D3Lv_WI2.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-D1HTXN0M.js";import i from"./RadioButton.stories-Dty0aWSV.js";import{P as s}from"./PopupTip-CyqE4Lob.js";import c from"./Popuptip.stories-BVRZvypd.js";import{F as d}from"./FieldGroup-DIQ6v1Xv.js";import{R as l}from"./RadioButton-NcLqMiHS.js";import{C as u}from"./Checkbox-DDYvW3S_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-aqw_VwLw.js";import"./Label-CpncKAf4.js";import"./SupportLabel-CitaAmyH.js";import"./WarningIcon-Cn3XzSRF.js";import"./Icon-WCV8x0nX.js";import"./BaseRadioButton.stories-DFjcBipU.js";import"./BaseRadioButton-Bugsd6Me.js";import"./QuestionIcon-b37ZF0pE.js";import"./TooltipTrigger-B5ruQQcd.js";import"./floating-ui.react-CighhNPb.js";import"./index-BUm-J4Uk.js";import"./index-By2GKmZQ.js";import"./TooltipContent-DDKxSyPy.js";import"./useBrowserPreferences-CIor3qCH.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
