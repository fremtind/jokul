import{j as m,r as a}from"./iframe-DJWmC8DY.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DVz29GZT.js";import i from"./RadioButton.stories-KUgz71wO.js";import{P as s}from"./PopupTip-CTViykrx.js";import c from"./Popuptip.stories-DHxDrkGo.js";import{F as d}from"./FieldGroup-BdFgRWQL.js";import{R as l}from"./RadioButton-D3VHNgcH.js";import{C as u}from"./Checkbox-BqIB1d_b.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-C7FGvi6F.js";import"./Label-YVNx8RhF.js";import"./SupportLabel-Pv_MGKDj.js";import"./WarningIcon-CzyDSudv.js";import"./Icon-CU0s3i34.js";import"./BaseRadioButton.stories-D9-DgnBU.js";import"./BaseRadioButton-BjF35u_0.js";import"./QuestionIcon-D0-d2M3V.js";import"./TooltipTrigger-Bxc3JnGi.js";import"./floating-ui.react-Bzv2D3qJ.js";import"./index--I8GmXm9.js";import"./index-CYpeD7n_.js";import"./TooltipContent-DjmPvoY1.js";import"./useBrowserPreferences-BRWA3ql6.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
