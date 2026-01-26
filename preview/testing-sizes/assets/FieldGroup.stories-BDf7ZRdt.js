import{j as m,r as a}from"./iframe-DEZQE8n-.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DQi3NohE.js";import i from"./RadioButton.stories-CPCkQov0.js";import{P as s}from"./PopupTip-D0tkgJkx.js";import c from"./Popuptip.stories-tFL0R0jN.js";import{F as d}from"./FieldGroup-BtUrRrZf.js";import{R as l}from"./RadioButton-gxmB1_x7.js";import{C as u}from"./Checkbox-DlM9ygVV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Dg_yHtSQ.js";import"./Label-DN-j4i4E.js";import"./SupportLabel-u95zAf0j.js";import"./WarningIcon-BnsfOap9.js";import"./Icon-CpQt9UdP.js";import"./BaseRadioButton.stories-LMZ1aJAH.js";import"./BaseRadioButton-su88sug-.js";import"./QuestionIcon-4rwjqEpM.js";import"./TooltipTrigger-C5ksk1WK.js";import"./floating-ui.react-DRKucc_F.js";import"./index-cehhS4TI.js";import"./index-B1UL1cr3.js";import"./TooltipContent-DcPntsKW.js";import"./useBrowserPreferences-DY_14-MH.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
