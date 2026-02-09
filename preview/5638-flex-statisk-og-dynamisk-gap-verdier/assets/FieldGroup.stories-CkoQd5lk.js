import{j as m,r as a}from"./iframe-6ywf5xmB.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-Cbx8za8_.js";import i from"./RadioButton.stories-C2rftwvt.js";import{P as s}from"./PopupTip-CQO0ZjxT.js";import c from"./Popuptip.stories-DXbUpqKu.js";import{F as d}from"./FieldGroup-Djv0TEYY.js";import{R as l}from"./RadioButton-CUv0RxZY.js";import{C as u}from"./Checkbox-dPK3cxkw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CuZVPcZi.js";import"./Label-DyXKFnDs.js";import"./SupportLabel-CePpN6Y6.js";import"./WarningIcon-DSYg1vYY.js";import"./Icon-BfqNN8ed.js";import"./BaseRadioButton.stories-FbE_1OeD.js";import"./BaseRadioButton-X81XpFMV.js";import"./QuestionIcon-D4PZvUHl.js";import"./TooltipTrigger-CwiJpG7f.js";import"./floating-ui.react-Bc4PNffM.js";import"./index-Csj0jET7.js";import"./index-Dpwfs3fs.js";import"./TooltipContent-D7tfEFwm.js";import"./useBrowserPreferences-CK7Z4jnd.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
