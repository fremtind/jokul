import{r as a,j as p}from"./iframe-gVRbMT1N.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-difdIrPM.js";import{H as s,m as n}from"./Help.stories-D1Fx5T_K.js";import c from"./RadioButton.stories-BqmaDpkB.js";import{F as d}from"./FieldGroup-DZ51f7Fy.js";import{C as l}from"./Checkbox-DbAvriRp.js";import{R as u}from"./RadioButton-Gh--PQ8m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-C_5cFtPz.js";import"./Button-Cz71Gc1v.js";import"./usePreviousValue-DqV66FdG.js";import"./Loader-DzJwkgpU.js";import"./useDelayedRender-B_B3xIVl.js";/* empty css               *//* empty css               */import"./Flex-f2ORrSaY.js";import"./SlotComponent-BBa6POOd.js";import"./mergeRefs-jn8_Ji0U.js";import"./BaseRadioButton.stories-C43z6Ahx.js";import"./BaseRadioButton-DvkFE_ti.js";import"./useId-CzUpCoL2.js";/* empty css               */import"./Label-yz4I4TX9.js";import"./SupportLabel-C_QdnWJx.js";import"./WarningIcon-CtoZgKvg.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
