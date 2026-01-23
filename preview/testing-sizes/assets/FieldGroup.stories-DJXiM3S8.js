import{j as m,r as a}from"./iframe-DtrDw6re.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-D-OUC7W2.js";import i from"./RadioButton.stories-DBBNBxxW.js";import{P as s}from"./PopupTip-Cd_PE3_u.js";import c from"./Popuptip.stories-8_vQkFi6.js";import{F as d}from"./FieldGroup-Chm_8PDL.js";import{R as l}from"./RadioButton-JniU2omM.js";import{C as u}from"./Checkbox-DP4W-o29.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-wAog_8fJ.js";import"./Label-kCyIIQJ4.js";import"./SupportLabel-Snixp2C2.js";import"./WarningIcon-eIGVKAxW.js";import"./Icon-BqM7H6w8.js";import"./BaseRadioButton.stories-yIX5MlyV.js";import"./BaseRadioButton-DdtWzvA1.js";import"./QuestionIcon-DAVDvRjQ.js";import"./TooltipTrigger-Cc0stWnD.js";import"./floating-ui.react-CkO_YZfP.js";import"./index-Cn2_vnU5.js";import"./index-CQ79wjnq.js";import"./TooltipContent-Dse-ys7X.js";import"./useBrowserPreferences-_LHz4MwW.js";import"./getThemeAndDensity-v_O0Epee.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
