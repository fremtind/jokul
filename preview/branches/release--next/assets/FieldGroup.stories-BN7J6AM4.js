import{j as p,r as a}from"./iframe-Cctb1Kvl.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C1cWzBKk.js";import{H as s,m as n}from"./Help.stories-D8gWN2po.js";import c from"./RadioButton.stories-BjtjM9q6.js";import{F as d}from"./FieldGroup-BA2sLOAR.js";import{R as l}from"./RadioButton-DWpREa5p.js";import{C as u}from"./Checkbox-DdAsK8bf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CctrPzOJ.js";import"./Label-CXG75kHH.js";import"./SupportLabel-CWgfUex9.js";import"./WarningIcon-DzSkjTES.js";import"./Icon-DI_-hc84.js";import"./Button-DHoF4MX4.js";import"./usePreviousValue-QdYekAaJ.js";import"./Loader-D4FzcK_2.js";import"./useDelayedRender-DPE_eTuc.js";/* empty css               *//* empty css               */import"./Flex-B1j4SP-z.js";import"./SlotComponent-vv_Np6Q5.js";import"./mergeRefs-CipCj4iM.js";import"./BaseRadioButton.stories-9ixbF5m_.js";import"./BaseRadioButton-DHpUGY5Z.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
