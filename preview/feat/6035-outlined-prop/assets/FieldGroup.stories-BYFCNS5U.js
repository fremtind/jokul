import{r as a,j as p}from"./iframe-BNIBxLN8.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BDp-tcwb.js";import{H as s,m as n}from"./Help.stories-BXPc4oZd.js";import c from"./RadioButton.stories-DDpJFb2f.js";import{F as d}from"./FieldGroup-Czz2xnRS.js";import{C as l}from"./Checkbox-BlJ2HGcw.js";import{R as u}from"./RadioButton-BzmAx5Eh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CozNIhmW.js";import"./Button-BeIOQNpE.js";import"./usePreviousValue-Cb8weRzy.js";import"./Loader-C3MXfCZq.js";import"./useDelayedRender-BaURwnXM.js";/* empty css               *//* empty css               */import"./Flex-C9DVVorx.js";import"./SlotComponent-CZvAl3w7.js";import"./mergeRefs-Ck2yYb6C.js";import"./BaseRadioButton.stories-BJT6MIRV.js";import"./BaseRadioButton-CsM8Xncp.js";import"./useId-CbKRMrAU.js";import"./Label-JneS_bVH.js";import"./SupportLabel-BQhjRrvK.js";import"./WarningIcon-C9AHjYzm.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(u,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
