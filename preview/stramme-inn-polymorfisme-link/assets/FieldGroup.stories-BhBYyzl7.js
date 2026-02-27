import{j as m,r as a}from"./iframe-ecGRySA7.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CtJUk00S.js";import i from"./RadioButton.stories-D4YP7rqL.js";import{P as s}from"./PopupTip-C-kS1-CY.js";import c from"./Popuptip.stories-G4hZ3Pv8.js";import{F as d}from"./FieldGroup-CVZcqGsy.js";import{R as l}from"./RadioButton-CfORm0P_.js";import{C as u}from"./Checkbox-lAYHU1FO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-D-SEfuAR.js";import"./Label-BBCkIuiQ.js";import"./SupportLabel-C7oJ5bYi.js";import"./WarningIcon-jSKp5uen.js";import"./Icon-BGyewak1.js";import"./BaseRadioButton.stories-CR71NNKf.js";import"./BaseRadioButton-5_RG9wY6.js";import"./QuestionIcon-D3jrHsBN.js";import"./TooltipTrigger-B0c0rO6G.js";import"./floating-ui.react-D5VDDnk1.js";import"./index-iIbduf8I.js";import"./index-C8lhyhIQ.js";import"./TooltipContent-BfVDeawm.js";import"./useBrowserPreferences-CfRGeSk0.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
