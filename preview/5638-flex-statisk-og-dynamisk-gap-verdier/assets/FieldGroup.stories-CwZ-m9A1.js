import{j as m,r as a}from"./iframe-BhXnxIvV.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-iYUieiWE.js";import i from"./RadioButton.stories-CgnwVvgr.js";import{P as s}from"./PopupTip-BWko7LrC.js";import c from"./Popuptip.stories-CIjUeUBR.js";import{F as d}from"./FieldGroup-DMj2RqR-.js";import{R as l}from"./RadioButton-BUyny9sZ.js";import{C as u}from"./Checkbox-Ck4L5XWb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-C7VN9xNZ.js";import"./Label-DsE_zl55.js";import"./SupportLabel-BCbBVCJK.js";import"./WarningIcon-Cyg47eh_.js";import"./Icon-BxtqtHRq.js";import"./BaseRadioButton.stories-D4Vpjg_G.js";import"./BaseRadioButton-CFY0YX4E.js";import"./QuestionIcon-BJvFGUwl.js";import"./TooltipTrigger-BsBRKfAH.js";import"./floating-ui.react-BmfjtYWt.js";import"./index-Cw_gIOBh.js";import"./index-erHxuEoX.js";import"./TooltipContent-COp5rNh3.js";import"./useBrowserPreferences-3d_6zrpm.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
