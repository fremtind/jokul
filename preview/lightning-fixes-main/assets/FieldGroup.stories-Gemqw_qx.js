import{j as m,r as a}from"./iframe-Ij3yGqIt.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-Bf50xEMr.js";import i from"./RadioButton.stories-D6-eQcpo.js";import{P as s}from"./PopupTip-DOCh5Fmm.js";import c from"./Popuptip.stories-ChzwLnwE.js";import{F as d}from"./FieldGroup-BCkCt7gq.js";import{R as l}from"./RadioButton-DjTCmhYk.js";import{C as u}from"./Checkbox-D0eKEKYp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BiZoHpfM.js";import"./Label-Ni-CNFBg.js";import"./SupportLabel-Bmo50R8F.js";import"./WarningIcon-BIQXuiQm.js";import"./Icon-CnEch3nk.js";import"./BaseRadioButton.stories-0jAzKrU7.js";import"./BaseRadioButton-ChP6qliY.js";import"./QuestionIcon-K_ARLH-g.js";import"./TooltipTrigger-CXkTpQm9.js";import"./floating-ui.react-CydMU7fi.js";import"./index-Dh9_rFTd.js";import"./index-BE79uZ86.js";import"./TooltipContent-DJEo1y-c.js";import"./useBrowserPreferences-DE01cgFR.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
