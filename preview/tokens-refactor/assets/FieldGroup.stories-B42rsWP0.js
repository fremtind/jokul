import{j as m,r as a}from"./iframe-B4RKRyfp.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CumYKIrI.js";import i from"./RadioButton.stories-DipRTrSV.js";import{P as s}from"./PopupTip-BcJcwKWg.js";import c from"./Popuptip.stories-4Qjdh1qz.js";import{F as d}from"./FieldGroup-DIQpRoRv.js";import{R as l}from"./RadioButton-qyXtD-p7.js";import{C as u}from"./Checkbox-DuG0IxZu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CihR2nHh.js";import"./Label-9DhqONS2.js";import"./SupportLabel-DWWRoy2I.js";import"./WarningIcon-ChK9MKSR.js";import"./Icon-Dc6saxim.js";import"./BaseRadioButton.stories-kOGrviao.js";import"./BaseRadioButton-Cv1ANBlJ.js";import"./QuestionIcon-qWAdiXO2.js";import"./TooltipTrigger-JRTW1Wpz.js";import"./floating-ui.react-jDAKdUwU.js";import"./index-DPkdIF4P.js";import"./index-J7ryeNzA.js";import"./TooltipContent-Sx37NotR.js";import"./useBrowserPreferences-ZbhcWLma.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
