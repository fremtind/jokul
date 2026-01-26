import{j as m,r as a}from"./iframe-wGytpD59.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-DLbiJihi.js";import i from"./RadioButton.stories-Cse3dBsz.js";import{P as s}from"./PopupTip-BKgmm0Np.js";import c from"./Popuptip.stories-DDCsG7LF.js";import{F as d}from"./FieldGroup-Dp9qyJ6W.js";import{R as l}from"./RadioButton-B4Qd-d78.js";import{C as u}from"./Checkbox-5chPiN9K.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Bo3Wrbvr.js";import"./Label-CrmB_f_e.js";import"./SupportLabel-DtXg2nDL.js";import"./WarningIcon-CM3z6qLv.js";import"./Icon-CmJnPYMG.js";import"./BaseRadioButton.stories-DtQAzEqL.js";import"./BaseRadioButton-BpokYQm8.js";import"./QuestionIcon-BEBTfUGV.js";import"./TooltipTrigger-CF0bbDyl.js";import"./floating-ui.react-1O-Gbu89.js";import"./index-S4MCW0kr.js";import"./index-fGvA6FjC.js";import"./TooltipContent-CadtYBBA.js";import"./useBrowserPreferences-D1s1D8RJ.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
