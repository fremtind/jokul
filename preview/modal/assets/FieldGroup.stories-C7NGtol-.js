import{j as p,r as a}from"./iframe-Cb79oK8k.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Bg5xhUc2.js";import{H as s,m as n}from"./Help.stories-BjpNBJ7w.js";import c from"./RadioButton.stories-DYkoypFX.js";import{F as d}from"./FieldGroup-DWk6bY64.js";import{R as l}from"./RadioButton-EvGgsuFk.js";import{C as u}from"./Checkbox-kr4RjagK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CCUY4xWL.js";import"./Label-C5Ec6fla.js";import"./SupportLabel-D4Rkbh9T.js";import"./WarningIcon-C2Y64yVe.js";import"./Icon-t2ZFZrhp.js";import"./Button-bO8FSAuu.js";import"./usePreviousValue-DdEcDlQR.js";import"./Loader-DHH-9oOL.js";import"./useDelayedRender-BgE-JL32.js";/* empty css               *//* empty css               */import"./Flex-D3ziTyOd.js";import"./SlotComponent-CRhlbxqB.js";import"./mergeRefs-DhFJqiwZ.js";import"./BaseRadioButton.stories-C_8yclAF.js";import"./BaseRadioButton-D259jUu_.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    tooltip: <Help {...HelpStories.args} />
  }
}`,...t.parameters?.docs?.source}}};const w=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,o as RadioGroup,w as __namedExportsOrder,q as default};
