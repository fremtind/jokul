import{j as m,r as a}from"./iframe-DtM7RXj6.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CLmI29wc.js";import i from"./RadioButton.stories-BLorp4ks.js";import{P as s}from"./PopupTip-CvNa4bif.js";import c from"./Popuptip.stories-CV8gsj9A.js";import{F as d}from"./FieldGroup-CwRx3Awk.js";import{R as l}from"./RadioButton-BDd8q_CW.js";import{C as u}from"./Checkbox-DL-Ydsk_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CC-388Ss.js";import"./Label-ByAl5DiS.js";import"./SupportLabel-DyJuzdLr.js";import"./WarningIcon-Bz0badf_.js";import"./Icon-DEBh_q2D.js";import"./BaseRadioButton.stories-CIVH8C3F.js";import"./BaseRadioButton-ri6ICuV4.js";import"./QuestionIcon-D3fLsE1E.js";import"./TooltipTrigger-C78cbnoc.js";import"./floating-ui.react-DbgLv6yT.js";import"./index-C5GIev4G.js";import"./index-BK5QRlWO.js";import"./TooltipContent-Cpwhhg2g.js";import"./useBrowserPreferences-BGezIPJn.js";import"./getThemeAndDensity-v_O0Epee.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
