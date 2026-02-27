import{j as m,r as a}from"./iframe-Daokkzje.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DnTFTSEl.js";import i from"./RadioButton.stories-BAJWAcUP.js";import{P as s}from"./PopupTip-NwRZv-L9.js";import c from"./Popuptip.stories-D2JOstKF.js";import{F as d}from"./FieldGroup-DTMnBykD.js";import{R as l}from"./RadioButton-wgP5ebga.js";import{C as u}from"./Checkbox-DZyIxtGI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CcTo1XKY.js";import"./Label-BbH5AdtB.js";import"./SupportLabel-C6IUWGPT.js";import"./WarningIcon-B1SecvYt.js";import"./Icon-CuKH_F47.js";import"./BaseRadioButton.stories-Cqt7Ho3S.js";import"./BaseRadioButton-DyxnvPir.js";import"./QuestionIcon-zKGvb-kU.js";import"./TooltipTrigger-DnTS39FQ.js";import"./floating-ui.react-J_nY-VOi.js";import"./index-DXst-XSO.js";import"./index-BaUN-QWd.js";import"./TooltipContent-BNk-N3O0.js";import"./useBrowserPreferences-BBaJx6RP.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
