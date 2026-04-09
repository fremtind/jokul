import{j as p,r as a}from"./iframe-C1ZkCZ_7.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C0x76Mvb.js";import{H as s,m as n}from"./Help.stories-CbwXAs5m.js";import c from"./RadioButton.stories-CDLP1ky6.js";import{F as d}from"./FieldGroup-D0Dz1sU5.js";import{R as l}from"./RadioButton-Ds_Hu1Qo.js";import{C as u}from"./Checkbox-CPa1Ap6s.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CRvxeqzD.js";import"./Label-C0lFyyB8.js";import"./SupportLabel-UKFXnvVO.js";import"./WarningIcon-wRkRRGEq.js";import"./Icon-Ddf8TYMD.js";import"./Button-BV0sb4Yp.js";import"./usePreviousValue-QVSUzJYV.js";import"./Loader-zGkXW1rV.js";import"./useDelayedRender-C61Cj9Ws.js";/* empty css               *//* empty css               */import"./Flex-Cqb0wD9o.js";import"./SlotComponent-D5Jf3UcS.js";import"./mergeRefs-CN3Xt5qZ.js";import"./BaseRadioButton.stories-BtG4Fqak.js";import"./BaseRadioButton-9BGFlvJm.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
