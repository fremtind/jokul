import{j as m,r as a}from"./iframe-Br_2NVko.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-BU10gdsE.js";import i from"./RadioButton.stories-DGRxbDju.js";import{P as s}from"./PopupTip-D2VXGiQE.js";import c from"./Popuptip.stories-B4PpMZcG.js";import{F as d}from"./FieldGroup-D4_ogqWJ.js";import{R as l}from"./RadioButton-BGXhTlK8.js";import{C as u}from"./Checkbox-DPkASvL2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BrfxZxSu.js";import"./Label-CsHYAR6U.js";import"./SupportLabel-Bu_PU1MA.js";import"./WarningIcon-DEK719Zk.js";import"./Icon-oNCAqGla.js";import"./BaseRadioButton.stories-DyFl1Aww.js";import"./BaseRadioButton-Cjz093bt.js";import"./QuestionIcon-Bg3L1N8-.js";import"./TooltipTrigger-D7WdnBQe.js";import"./floating-ui.react-BLk1RL1R.js";import"./index-BhWJUx7n.js";import"./index-CG3r1Yyn.js";import"./TooltipContent-L2rj3pD5.js";import"./useBrowserPreferences-B7hrkXHo.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
