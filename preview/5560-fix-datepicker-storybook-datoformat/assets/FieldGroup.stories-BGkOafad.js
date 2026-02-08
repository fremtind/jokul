import{j as m,r as a}from"./iframe-DjGGBRHa.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-D28WbPX6.js";import i from"./RadioButton.stories-Z38gdoig.js";import{P as s}from"./PopupTip-rYtKn3_A.js";import c from"./Popuptip.stories-DssZrtZ4.js";import{F as d}from"./FieldGroup-B4T0mpyi.js";import{R as l}from"./RadioButton-_59CMLgO.js";import{C as u}from"./Checkbox-CAGd_NO9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-D7PxPySb.js";import"./Label-Dl1rztBl.js";import"./SupportLabel-B8vWOWmi.js";import"./WarningIcon-Dwa2HNUU.js";import"./Icon-DguMtUG2.js";import"./BaseRadioButton.stories-D3blW-SI.js";import"./BaseRadioButton-B2glDvry.js";import"./QuestionIcon-CrgUn--6.js";import"./TooltipTrigger-Cz4OCFNu.js";import"./floating-ui.react-BZoDgqi5.js";import"./index-BvNdNSgG.js";import"./index-RRRSgMzJ.js";import"./TooltipContent-L7ZoR-Av.js";import"./useBrowserPreferences-D13XF9fw.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
