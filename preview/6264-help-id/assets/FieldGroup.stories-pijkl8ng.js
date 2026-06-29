import{r as a,j as p}from"./iframe-B_vDuAt9.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-AEf1BnVO.js";import s from"./Help.stories-z3AqaR0r.js";import n from"./RadioButton.stories-CXpHrPrG.js";import{F as c}from"./FieldGroup-DF5wpxve.js";import{C as d}from"./Checkbox-of5_tnEn.js";import{H as l}from"./Help-XlC-TtqE.js";import{R as u}from"./RadioButton-DZb0jhEa.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-Dd3DBvZU.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DALaatHS.js";import"./mergeRefs-B7Rylphl.js";import"./BaseRadioButton.stories-CSNh8Xuj.js";import"./BaseRadioButton-CmVvL-f0.js";import"./useId-CCYEuVdd.js";import"./Label-_yP0K2n2.js";import"./SupportLabel-KfybnHXi.js";import"./SuccessIcon-D08pXGan.js";import"./Icon-yEi_PDN6.js";import"./WarningIcon-Bjh_QgTS.js";import"./Button-YC07x802.js";import"./usePreviousValue-aWeeoWV7.js";import"./Loader-nh1OPU95.js";import"./useDelayedRender-BBO-g6Fu.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
