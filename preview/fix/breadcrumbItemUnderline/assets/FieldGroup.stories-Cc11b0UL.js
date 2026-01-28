import{j as m,r as a}from"./iframe-oEhxffOk.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-gLb_PEH3.js";import i from"./RadioButton.stories-zHvFSV35.js";import{P as s}from"./PopupTip-C51PRMSB.js";import c from"./Popuptip.stories-CePLWzDU.js";import{F as d}from"./FieldGroup-DhC0AiM1.js";import{R as l}from"./RadioButton-D133RL0C.js";import{C as u}from"./Checkbox-HKXkbnMI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-WCMXYjw3.js";import"./Label-CZL0Ikw5.js";import"./SupportLabel-CfTqhkZ7.js";import"./WarningIcon-BgzkEbtc.js";import"./Icon-C1IxoU5h.js";import"./BaseRadioButton.stories-DiJHwUM5.js";import"./BaseRadioButton-bcxkZ06u.js";import"./QuestionIcon-pBtKmMjW.js";import"./TooltipTrigger-zppykq_d.js";import"./floating-ui.react-DvTE6RFv.js";import"./index-BO2xLEpi.js";import"./index-DvREX24G.js";import"./TooltipContent-DQvx6m0T.js";import"./useBrowserPreferences-DkjlqWtk.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
