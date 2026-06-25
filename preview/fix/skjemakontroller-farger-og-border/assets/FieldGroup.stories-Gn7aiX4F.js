import{r as a,j as p}from"./iframe-BnGY5X41.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C0yv0oRt.js";import s from"./Help.stories-DTkR_B9V.js";import n from"./RadioButton.stories-DfVt_Ojs.js";import{F as c}from"./FieldGroup-BPcybJyw.js";import{C as d}from"./Checkbox-D4MAIUzR.js";import{H as l}from"./Help-DxzDUvgP.js";import{R as u}from"./RadioButton-D_Ux2dNH.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-Bh_eYOCv.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BTA376es.js";import"./mergeRefs-CtupaBJK.js";import"./BaseRadioButton.stories-f1zHpCgv.js";import"./BaseRadioButton-3S5Xa6j_.js";import"./useId-B5LPZB8u.js";import"./Label-Qvk7BtU4.js";import"./SupportLabel-BHyajh5v.js";import"./SuccessIcon-DemxqsKh.js";import"./Icon-BDncuAWp.js";import"./WarningIcon-CNLCTvIB.js";import"./Button-Bp4pFp1k.js";import"./usePreviousValue-Cecnm_7y.js";import"./Loader-BLvL1UXz.js";import"./useDelayedRender-Caxd6mF7.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
