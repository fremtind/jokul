import{j as m,r as a}from"./iframe-BuzkJpq5.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CFBGfmPY.js";import i from"./RadioButton.stories-whGVqekV.js";import{P as s}from"./PopupTip-Dp01b1L3.js";import c from"./Popuptip.stories-C5R-vFNW.js";import{F as d}from"./FieldGroup-4zzaqFFh.js";import{R as l}from"./RadioButton-DhSDPK8B.js";import{C as u}from"./Checkbox-BWV0FVrp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DEWfdHei.js";import"./Label-QGk13oiq.js";import"./SupportLabel-CbF-LpVb.js";import"./WarningIcon-DiAvpBS5.js";import"./Icon-BLi4neT7.js";import"./BaseRadioButton.stories-fhUSi476.js";import"./BaseRadioButton-BPKzkrAq.js";import"./QuestionIcon-CDC5g6bA.js";import"./TooltipTrigger-CJy9vlZ0.js";import"./floating-ui.react-BmNyKUxn.js";import"./index-BZDc5Sfk.js";import"./index-DbstwcHG.js";import"./TooltipContent-BcYhlL3G.js";import"./useBrowserPreferences-DcZpXs-x.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
