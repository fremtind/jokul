import{j as m,r as a}from"./iframe-KbORsCiT.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-C_mJl1z_.js";import i from"./RadioButton.stories-BeGU90QC.js";import{P as s}from"./PopupTip-54dcuOyq.js";import c from"./Popuptip.stories-BRzoJCld.js";import{F as d}from"./FieldGroup-CEXjklWl.js";import{R as l}from"./RadioButton-CaGhzlbX.js";import{C as u}from"./Checkbox-B2-48qIx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-SGkDPlhg.js";import"./SupportLabel-D4XCd4hh.js";import"./WarningIcon-Rjd63akh.js";import"./Icon-DI1Inwwd.js";import"./BaseRadioButton.stories-F8EbTXYo.js";import"./BaseRadioButton-Csxhg-as.js";import"./QuestionIcon-BQOOjjRo.js";import"./TooltipTrigger-BeYv3O4p.js";import"./floating-ui.react-s1XHA3D0.js";import"./index-CqMa49Mv.js";import"./index-BxQC0I0m.js";import"./TooltipContent-CcKvB0uS.js";import"./useBrowserPreferences-CWqEPUC7.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",legendProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
