import{j as m,r as a}from"./iframe-BrNtw50k.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-D9TIgSOf.js";import i from"./RadioButton.stories-DFcavSMD.js";import{P as s}from"./PopupTip-BWLFPCA5.js";import c from"./Popuptip.stories-7YaH597X.js";import{F as d}from"./FieldGroup-BRo0J-5T.js";import{R as l}from"./RadioButton-BliGLo2u.js";import{C as u}from"./Checkbox-CKmiFcSc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BeQ_DQ32.js";import"./Label-DFhw044x.js";import"./SupportLabel-KIAeb1Ts.js";import"./WarningIcon-BC1RgzsN.js";import"./Icon-5AbHA9Gm.js";import"./BaseRadioButton.stories-DDNirYto.js";import"./BaseRadioButton-Br_4z7cE.js";import"./QuestionIcon-Jc71m5-a.js";import"./TooltipTrigger-CbY2iT_7.js";import"./floating-ui.react-BeMPK7l-.js";import"./index-By3vEyP2.js";import"./index-UTLEf2mJ.js";import"./TooltipContent-Dz1swd04.js";import"./useBrowserPreferences-DDGP3hJh.js";import"./getThemeAndDensity-v_O0Epee.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
