import{j as m,r as a}from"./iframe-rOKMGclQ.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CvVyFLvC.js";import i from"./RadioButton.stories-Dynd9i6a.js";import{P as s}from"./PopupTip-lRqWXA_v.js";import c from"./Popuptip.stories-CCAsxAD0.js";import{F as d}from"./FieldGroup-Bo428QDM.js";import{R as l}from"./RadioButton-BEAn4G0o.js";import{C as u}from"./Checkbox-IUJjjyES.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CBnP05n3.js";import"./Label-D1Gjok3_.js";import"./SupportLabel-w7Nvr05u.js";import"./WarningIcon-BG9uJQpv.js";import"./Icon-B2v-MAqb.js";import"./BaseRadioButton.stories-H8B4PCMv.js";import"./BaseRadioButton-BgkLDIYY.js";import"./QuestionIcon-CHrt4sTz.js";import"./TooltipTrigger-BPve_14e.js";import"./floating-ui.react-D5vdn2TN.js";import"./index-CChi026B.js";import"./index-CBR44bYw.js";import"./TooltipContent-Aso08qiH.js";import"./useBrowserPreferences-Be1KScKy.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
