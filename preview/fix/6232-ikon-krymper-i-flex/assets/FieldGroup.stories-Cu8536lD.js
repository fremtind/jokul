import{r as a,j as p}from"./iframe-Cy3ZE_Dj.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DPVinBf6.js";import{H as s,m as n}from"./Help.stories-D5A1NDPL.js";import c from"./RadioButton.stories-Iy_nf6jn.js";import{F as d}from"./FieldGroup-BvfR3ZtS.js";import{C as l}from"./Checkbox-ZL14e1-k.js";import{R as u}from"./RadioButton-D22OH3E4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-5stEi46y.js";import"./Button-GhUN-PUr.js";import"./usePreviousValue-BCRkXc1u.js";import"./Loader-R_JNwQmT.js";import"./useDelayedRender-drYc_Hkm.js";/* empty css               *//* empty css               */import"./Flex-DY-v2W_d.js";import"./SlotComponent-DjfAHsQH.js";import"./mergeRefs-D6e-_BXq.js";import"./BaseRadioButton.stories-CwdCA8V_.js";import"./BaseRadioButton-BFBgF1zl.js";import"./useId-CsdcmMGa.js";/* empty css               */import"./Label-ClV_-zPI.js";import"./SupportLabel-DeTBmsef.js";import"./SuccessIcon-Cy10oD_r.js";import"./WarningIcon-Bu1ToPt0.js";const z={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,A as __namedExportsOrder,z as default};
