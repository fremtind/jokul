import{j as m,r as a}from"./iframe-DWDf04O7.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-Cw8nX7Pp.js";import i from"./RadioButton.stories-BjiMf1lp.js";import{P as s}from"./PopupTip-bQKYrtDH.js";import c from"./Popuptip.stories-Ck0L2vbe.js";import{F as d}from"./FieldGroup-DMM6SWMX.js";import{R as l}from"./RadioButton-DMGLjvpo.js";import{C as u}from"./Checkbox-CNhumsVA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BnRe4JeL.js";import"./Label-Dg8pv617.js";import"./SupportLabel-DGl8dLbw.js";import"./WarningIcon-bqKp9toA.js";import"./Icon-DPaN_3jL.js";import"./BaseRadioButton.stories-D1qudNMp.js";import"./BaseRadioButton-C4GTF4pY.js";import"./QuestionIcon-CVdIrvPz.js";import"./TooltipTrigger-CTu0Jt-s.js";import"./floating-ui.react-C3lgaxh3.js";import"./index-C2FWto2w.js";import"./index-BD9tJiHr.js";import"./TooltipContent-Dweo--do.js";import"./useBrowserPreferences-CSZYlxgQ.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
