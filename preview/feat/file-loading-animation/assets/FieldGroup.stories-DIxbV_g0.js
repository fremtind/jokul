import{j as m,r as a}from"./iframe-CPFMEoFO.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-BtSfG4B7.js";import i from"./RadioButton.stories-BLHyGXwt.js";import{P as s}from"./PopupTip-C3dMoz84.js";import c from"./Popuptip.stories-C5tOg3EV.js";import{F as d}from"./FieldGroup-DJ2IB6fY.js";import{R as l}from"./RadioButton-BP9ZEqxh.js";import{C as u}from"./Checkbox-CvPX_zsE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BZMfV5z7.js";import"./Label-JT7rNpii.js";import"./SupportLabel-gYHvt_NB.js";import"./WarningIcon-CTOFyPAT.js";import"./Icon-B5G_E87h.js";import"./BaseRadioButton.stories-F7uTskUL.js";import"./BaseRadioButton-DvB5A6iY.js";import"./QuestionIcon-BfQqlfY7.js";import"./TooltipTrigger-lRSEaR1z.js";import"./floating-ui.react-biJIQjyE.js";import"./index-C2nNCr9N.js";import"./index-BY28kHzX.js";import"./TooltipContent-BLFNP602.js";import"./useBrowserPreferences-DjJRmIpX.js";import"./getThemeAndDensity-v_O0Epee.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
