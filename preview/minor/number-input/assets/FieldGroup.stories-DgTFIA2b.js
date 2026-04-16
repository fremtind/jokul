import{j as p,r as a}from"./iframe-DlK-yrS2.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-fdM8JRPj.js";import{H as s,m as n}from"./Help.stories-DHLGdoAG.js";import c from"./RadioButton.stories-BeBE53R6.js";import{F as d}from"./FieldGroup-B9W41hV0.js";import{R as l}from"./RadioButton-pyDCxzg1.js";import{C as u}from"./Checkbox-Cux78v3j.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Blr-lK5N.js";import"./Label-BZnb_4h9.js";import"./SupportLabel-BRgRL6Ni.js";import"./WarningIcon-BcDCbGg2.js";import"./Icon-cI81DBuh.js";import"./Button-CG2JCdVS.js";import"./usePreviousValue-BJMiXRDL.js";import"./Loader-CIMey_Nh.js";import"./useDelayedRender-BxSuNTzg.js";/* empty css               *//* empty css               */import"./Flex-CnDuwEbz.js";import"./SlotComponent-DlJjMPLM.js";import"./mergeRefs-_UajqyUr.js";import"./BaseRadioButton.stories-ml_eNXQZ.js";import"./BaseRadioButton-CLCS6h7g.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
