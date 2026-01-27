import{j as m,r as a}from"./iframe-Cku2L_FL.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CCpQjcmv.js";import i from"./RadioButton.stories-DJpiJ-iE.js";import{P as s}from"./PopupTip-BBrpk1Up.js";import c from"./Popuptip.stories-BsM7ELZu.js";import{F as d}from"./FieldGroup-B7QlIQ3D.js";import{R as l}from"./RadioButton-D8S35lYP.js";import{C as u}from"./Checkbox-CeU8pZsa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-D-WBTAHK.js";import"./Label-BQW4ltkw.js";import"./SupportLabel-8BiqiUR2.js";import"./WarningIcon-DqofvW6q.js";import"./Icon-D0_M5keq.js";import"./BaseRadioButton.stories-aRwAxHVe.js";import"./BaseRadioButton-iPX7PZdL.js";import"./QuestionIcon-R5CgrwGB.js";import"./TooltipTrigger-BlnzxkQq.js";import"./floating-ui.react-C3DR0P0B.js";import"./index-DM8SPm38.js";import"./index-D4wg58fg.js";import"./TooltipContent-BqxZpXAT.js";import"./useBrowserPreferences-C6MCaVJA.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
