import{r as a,j as p}from"./iframe-DFiIBc-Y.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-V91Hx7T4.js";import{H as s,m as n}from"./Help.stories-Po17YBaX.js";import c from"./RadioButton.stories-D98CRgtt.js";import{F as d}from"./FieldGroup-CtsOiJLh.js";import{C as l}from"./Checkbox-BFDQ-cl9.js";import{R as u}from"./RadioButton-BaI0Dlgg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-oOOVHLiG.js";import"./Button-B_-igRAs.js";import"./usePreviousValue-ByIPQbWJ.js";import"./Loader-eyppmoks.js";import"./useDelayedRender-CUxHsPf3.js";/* empty css               *//* empty css               */import"./Flex-aDKldnKS.js";import"./SlotComponent-CcccCE5y.js";import"./mergeRefs-XpTM_Pd-.js";import"./BaseRadioButton.stories-C4_E-tV9.js";import"./BaseRadioButton-BN53tX2u.js";import"./useId-DBvHPgB5.js";/* empty css               */import"./Label-DjNJiR81.js";import"./SupportLabel-qjuIUcTx.js";import"./WarningIcon-DQlv8Msp.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,z as __namedExportsOrder,w as default};
