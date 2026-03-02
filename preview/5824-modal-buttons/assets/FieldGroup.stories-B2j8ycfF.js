import{j as m,r as a}from"./iframe-DqQMv5SD.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-B5MQAxLE.js";import i from"./RadioButton.stories-B2Q8vHTo.js";import{P as s}from"./PopupTip-SAZ6Lpk6.js";import c from"./Popuptip.stories-69GvjAYb.js";import{F as d}from"./FieldGroup-BGPKgnqj.js";import{R as l}from"./RadioButton-werCEXSm.js";import{C as u}from"./Checkbox-B1lFNuvH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BxjsbKCx.js";import"./Label-BgTNaY6p.js";import"./SupportLabel-VGk3bkHb.js";import"./WarningIcon-Bn4gMZmz.js";import"./Icon-DGhhyRo8.js";import"./BaseRadioButton.stories-CUolM2TT.js";import"./BaseRadioButton-BQPZ2VBr.js";import"./QuestionIcon-DQTqvPAd.js";import"./TooltipTrigger-CJlMhDWo.js";import"./floating-ui.react-CgmB1uZs.js";import"./index-veLARZ5l.js";import"./index-D_8bYCfB.js";import"./TooltipContent-BTqeqgzP.js";import"./useBrowserPreferences-D-s4ASDl.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
