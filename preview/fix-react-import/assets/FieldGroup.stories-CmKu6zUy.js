import{j as m,r as a}from"./iframe-D3NZeAZO.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories--MbBC0r4.js";import i from"./RadioButton.stories-DTpPMUax.js";import{P as s}from"./PopupTip-BObKLZ53.js";import c from"./Popuptip.stories-M49FI622.js";import{F as d}from"./FieldGroup-CQ_HF1ju.js";import{R as l}from"./RadioButton-BVQmIcq3.js";import{C as u}from"./Checkbox-BNTHe7uX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DJy5_EP-.js";import"./Label-D3BMuMPJ.js";import"./SupportLabel-DhXqvoSw.js";import"./WarningIcon-BjGcRtPn.js";import"./Icon-C8DLjc1-.js";import"./BaseRadioButton.stories-xhxbMISc.js";import"./BaseRadioButton-BJyrECYZ.js";import"./QuestionIcon-BpuQanef.js";import"./TooltipTrigger-gVRxXEAC.js";import"./floating-ui.react-C4ElhLmS.js";import"./index-N1_OaLbJ.js";import"./index-CuOds2lU.js";import"./TooltipContent-Dpt3HHYj.js";import"./useBrowserPreferences-BS6lY9cw.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
