import{j as m,r as a}from"./iframe-B0MNav0O.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CM2FqdlS.js";import i from"./RadioButton.stories-DqSyGhgH.js";import{P as s}from"./PopupTip-Gt3dXrF7.js";import c from"./Popuptip.stories-DxP2nyGr.js";import{F as d}from"./FieldGroup-CeKzeeC-.js";import{R as l}from"./RadioButton-CodozGMF.js";import{C as u}from"./Checkbox-DUg36FJ6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DCQUK6ZR.js";import"./Label-DJ_Bjnio.js";import"./SupportLabel-BgIQMcxB.js";import"./WarningIcon-DVjXcwDV.js";import"./Icon-DCmnYsxc.js";import"./BaseRadioButton.stories-C8qvf1nQ.js";import"./BaseRadioButton-SuJC2Q-f.js";import"./QuestionIcon-CZTqHfGX.js";import"./TooltipTrigger-Bvl53UgU.js";import"./floating-ui.react-rHGq48la.js";import"./index-qtFPYHk5.js";import"./index-BarYyNKK.js";import"./TooltipContent-DmvqzL-Y.js";import"./useBrowserPreferences-Dei5XKNL.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
