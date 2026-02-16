import{j as m,r as a}from"./iframe-YkJBrcal.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-Cpn0IP-Q.js";import i from"./RadioButton.stories-CnXEgUvS.js";import{P as s}from"./PopupTip-C8Ncn411.js";import c from"./Popuptip.stories-CYIEFAkR.js";import{F as d}from"./FieldGroup-D-ggTOLJ.js";import{R as l}from"./RadioButton-DzoWMnYP.js";import{C as u}from"./Checkbox-DUsjsFvu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BbpECfXt.js";import"./Label-DYTON9XT.js";import"./SupportLabel-Drstkqi2.js";import"./WarningIcon-DtTHPDDT.js";import"./Icon-ktp84Cki.js";import"./BaseRadioButton.stories-yymK5S7k.js";import"./BaseRadioButton-DU0IL1GY.js";import"./QuestionIcon-DFbl1GJ1.js";import"./TooltipTrigger-i2mzct2F.js";import"./floating-ui.react-J87QK3U_.js";import"./index-BO8mFE4y.js";import"./index-BErdrZss.js";import"./TooltipContent-CHxU76wN.js";import"./useBrowserPreferences-DgM64Zm7.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
