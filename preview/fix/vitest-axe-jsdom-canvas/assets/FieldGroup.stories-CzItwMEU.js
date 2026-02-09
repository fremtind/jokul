import{j as m,r as a}from"./iframe-kKdVED43.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-yU9pcHtD.js";import i from"./RadioButton.stories-CRTnM2PL.js";import{P as s}from"./PopupTip-D3CYCa3D.js";import c from"./Popuptip.stories-hfdeKJ_y.js";import{F as d}from"./FieldGroup-CBG2QsEX.js";import{R as l}from"./RadioButton-Ce9MfShT.js";import{C as u}from"./Checkbox-C3TWn-5Y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CQMp5ms0.js";import"./Label-C2B5jYYn.js";import"./SupportLabel-DzhOTjHy.js";import"./WarningIcon-Dd4Lk6Uv.js";import"./Icon-fmOI86Nh.js";import"./BaseRadioButton.stories-CZF-bpzL.js";import"./BaseRadioButton-wRntV9IU.js";import"./QuestionIcon-C0cKG_bl.js";import"./TooltipTrigger-CRgP-6RB.js";import"./floating-ui.react-BWpjm3_3.js";import"./index-G4xBI6pL.js";import"./index-BQDYqDky.js";import"./TooltipContent-7GeG_xTT.js";import"./useBrowserPreferences-CsiogRkX.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
