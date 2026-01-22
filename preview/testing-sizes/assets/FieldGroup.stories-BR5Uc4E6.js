import{j as m,r as a}from"./iframe-Bm92r4tw.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-tdYBx_NL.js";import i from"./RadioButton.stories-BX9pvraM.js";import{P as s}from"./PopupTip-DknnGECS.js";import c from"./Popuptip.stories-ZyT6zoSl.js";import{F as d}from"./FieldGroup-Ch13bM8b.js";import{R as l}from"./RadioButton-VEkQw9iq.js";import{C as u}from"./Checkbox-NmF0GD-v.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId--Ijawa63.js";import"./Label-XWqpo5U2.js";import"./SupportLabel-BnrEHXtE.js";import"./WarningIcon-B66g_dJ7.js";import"./Icon-Deu_cC2I.js";import"./BaseRadioButton.stories-DN1T1C9s.js";import"./BaseRadioButton-Dfcpxyol.js";import"./QuestionIcon-Da32Qdvp.js";import"./TooltipTrigger-BlUdEWc8.js";import"./floating-ui.react-3OloBvGu.js";import"./index-DSQtnS0t.js";import"./index-O3r671Hc.js";import"./TooltipContent-D7-3hXD8.js";import"./useBrowserPreferences-D85RW2hZ.js";import"./getThemeAndDensity-v_O0Epee.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
