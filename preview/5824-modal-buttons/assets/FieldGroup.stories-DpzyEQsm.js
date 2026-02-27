import{j as m,r as a}from"./iframe-BNRMIAKF.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-rnRS8RKH.js";import i from"./RadioButton.stories-D6Xl-LZA.js";import{P as s}from"./PopupTip-Csp9bMK0.js";import c from"./Popuptip.stories-Do23eLyY.js";import{F as d}from"./FieldGroup-B2YMayT-.js";import{R as l}from"./RadioButton-D7wBuOOE.js";import{C as u}from"./Checkbox-BHKwUl2h.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CbaOJCXX.js";import"./Label-DvkvPFwF.js";import"./SupportLabel-zRB4-SlY.js";import"./WarningIcon-Ce62f7j9.js";import"./Icon-BecDbs86.js";import"./BaseRadioButton.stories-BqVcDyDs.js";import"./BaseRadioButton-BtVNpjM7.js";import"./QuestionIcon-DmTKV9iD.js";import"./TooltipTrigger-h6oKFsIK.js";import"./floating-ui.react-BYThjpgl.js";import"./index-Cg6ZAla8.js";import"./index-LlLbEURV.js";import"./TooltipContent-C5LYi5Ip.js";import"./useBrowserPreferences-Bl-PD6QI.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
