import{j as m,r as a}from"./iframe-Dj21Fc3v.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-iqgpWy4e.js";import i from"./RadioButton.stories-CYY_qfPY.js";import{P as s}from"./PopupTip-BFw95lDJ.js";import c from"./Popuptip.stories-vmwmkOpn.js";import{F as d}from"./FieldGroup-mmDg3Grr.js";import{R as l}from"./RadioButton-CJ3Rmw9N.js";import{C as u}from"./Checkbox-15Afw-D4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DE7Dmv8g.js";import"./Label-LD949fRX.js";import"./SupportLabel-6HDchEWi.js";import"./WarningIcon-DAWin-dq.js";import"./Icon-B9R5IrPc.js";import"./BaseRadioButton.stories-DLm_WCpx.js";import"./BaseRadioButton-BjxkViB0.js";import"./QuestionIcon-CE9O4A7a.js";import"./TooltipTrigger-C2z9Bwyc.js";import"./floating-ui.react-BuUJLTiS.js";import"./index-DJTY0qTU.js";import"./index-BitHNmUn.js";import"./TooltipContent-DSTYXEFA.js";import"./useBrowserPreferences-CLsdzE6F.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
