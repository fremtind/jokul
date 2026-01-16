import{j as m,r as a}from"./iframe-DVEDpXBm.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-q0Jfw-kU.js";import i from"./RadioButton.stories-bVLumUQy.js";import{P as s}from"./PopupTip-iBW_khZ7.js";import c from"./Popuptip.stories-C2rilJ_j.js";import{F as d}from"./FieldGroup-CjgYhNWE.js";import{R as l}from"./RadioButton-B4OSosuF.js";import{C as u}from"./Checkbox-MpE8dNP5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BmLwIRUs.js";import"./Label-BhdGESsQ.js";import"./SupportLabel-DrnxFu4e.js";import"./WarningIcon-CfBq8oWj.js";import"./Icon-C-HwJC3C.js";import"./BaseRadioButton.stories-HlM7mVRA.js";import"./BaseRadioButton-BodevOxe.js";import"./QuestionIcon-C-OJjcpd.js";import"./TooltipTrigger-YaE6x7UD.js";import"./floating-ui.react-CpvBEONE.js";import"./index-CEqsLl4U.js";import"./index-iZl3wiVo.js";import"./TooltipContent-D2i0YKwX.js";import"./useBrowserPreferences-B_Crx14B.js";import"./getThemeAndDensity-v_O0Epee.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
