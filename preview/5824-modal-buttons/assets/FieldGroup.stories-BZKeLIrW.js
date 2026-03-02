import{j as m,r as a}from"./iframe-DcJp3R4E.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-BdXZfkdz.js";import i from"./RadioButton.stories-CYHQft44.js";import{P as s}from"./PopupTip-DKKypuRl.js";import c from"./Popuptip.stories-CATwudCX.js";import{F as d}from"./FieldGroup-Jh2rpO7i.js";import{R as l}from"./RadioButton-BnU-qNNS.js";import{C as u}from"./Checkbox-BPBR_xuo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Dc8WJCbM.js";import"./Label-NG44WkBA.js";import"./SupportLabel-hfHDPOR2.js";import"./WarningIcon-4VI8NK86.js";import"./Icon-Ckbr9r7j.js";import"./BaseRadioButton.stories-CPCcXH1v.js";import"./BaseRadioButton-BwqwG-_4.js";import"./QuestionIcon-C1Tail3g.js";import"./TooltipTrigger-CxVaOJiK.js";import"./floating-ui.react-DiSn3TKz.js";import"./index-g1fCsXVG.js";import"./index-CGhsBWdt.js";import"./TooltipContent-DMTLywDN.js";import"./useBrowserPreferences-DK-lFWnT.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
