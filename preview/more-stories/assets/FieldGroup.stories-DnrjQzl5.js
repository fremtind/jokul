import{j as m,r as a}from"./iframe-eu7EW-jD.js";import{CheckboxStory as n}from"./Checkbox.stories-Dz8X8bEP.js";import i from"./RadioButton.stories-DK5JuorM.js";import{P as s}from"./PopupTip-lw8oc7-B.js";import c from"./Popuptip.stories-DAGI_bKG.js";import{F as d}from"./FieldGroup-eEGahbXl.js";import{R as l}from"./RadioButton-n74cJ-zA.js";import{C as u}from"./Checkbox-d8OMnZ6e.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-kk7sLMq5.js";import"./Label-BB1tIrMe.js";import"./SupportLabel-CXqTXbHw.js";import"./WarningIcon-Dxif9M-S.js";import"./Icon-kXuHUYXu.js";import"./BaseRadioButton.stories-kHZCV8RO.js";import"./BaseRadioButton-DRtG9LnP.js";import"./QuestionIcon-BfCf8wl1.js";import"./TooltipTrigger-C-vbNO2S.js";import"./floating-ui.react-C6N4Q2Kq.js";import"./index-DbCuUQCI.js";import"./index-vnbwcarA.js";import"./TooltipContent-B44eg2Cx.js";import"./useBrowserPreferences-pg7OO3HD.js";import"./getThemeAndDensity-v_O0Epee.js";/* empty css               */const p=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,o as RadioGroup,w as __namedExportsOrder,q as default};
