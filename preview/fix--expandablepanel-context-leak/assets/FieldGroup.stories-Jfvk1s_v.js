import{r as a,j as p}from"./iframe-DDLJpcLL.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-B727zyrz.js";import{H as s,m as n}from"./Help.stories-Dfi0kfyW.js";import c from"./RadioButton.stories-B2p_Uqb2.js";import{F as d}from"./FieldGroup-DGEGsMHf.js";import{C as l}from"./Checkbox-DbM8jXxL.js";import{R as u}from"./RadioButton-HxVTnAVS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CQwKXeG_.js";import"./Button-C8VCpMif.js";import"./usePreviousValue-B7d_63uO.js";import"./Loader-CCg6xLKH.js";import"./useDelayedRender-CQlDLjLy.js";/* empty css               *//* empty css               */import"./Flex-BpfzIfhT.js";import"./SlotComponent-uzXrXuB3.js";import"./mergeRefs-CXw-yqoX.js";import"./BaseRadioButton.stories-D3Dru6xw.js";import"./BaseRadioButton-Cc2SwfE2.js";import"./useId-CUQVZ8Po.js";/* empty css               */import"./Label-BkUZNkHb.js";import"./SupportLabel-B4k82mPU.js";import"./WarningIcon-C2W3ltWv.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
