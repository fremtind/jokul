import{j as m,r as a}from"./iframe-BtPvKFLs.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-B4hE2pyX.js";import i from"./RadioButton.stories-CL5nxLje.js";import{P as s}from"./PopupTip-DAsg1x3Y.js";import c from"./Popuptip.stories-BJlGiJY9.js";import{F as d}from"./FieldGroup-BgqXSM3w.js";import{R as l}from"./RadioButton-Lv_HyXs5.js";import{C as u}from"./Checkbox-C-Euj1_o.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-C0s_F9Bw.js";import"./Label-C1geftoh.js";import"./SupportLabel-DK15kcL_.js";import"./WarningIcon-9lGXMgTH.js";import"./Icon-BCfwUH_f.js";import"./BaseRadioButton.stories-o6tLM3nt.js";import"./BaseRadioButton-BrkRxROJ.js";import"./QuestionIcon-DeuSaSxU.js";import"./TooltipTrigger-9bLnsXpR.js";import"./floating-ui.react-Dj2vJ21H.js";import"./index-K54xvwXz.js";import"./index-CPbZDObB.js";import"./TooltipContent-I9tSrvyK.js";import"./useBrowserPreferences-CDMiGSkg.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
