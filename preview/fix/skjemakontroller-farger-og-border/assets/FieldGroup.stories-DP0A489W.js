import{r as a,j as p}from"./iframe-hSphLxly.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-RHG_ZhhA.js";import s from"./Help.stories-CjN2aWFR.js";import n from"./RadioButton.stories-BGRIV7g1.js";import{F as c}from"./FieldGroup-C1_ybTOh.js";import{C as d}from"./Checkbox-B2JVA7GU.js";import{H as l}from"./Help-CwNRV-z2.js";import{R as u}from"./RadioButton-DasuFBZN.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-C5BN7esl.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BbaKz7Rz.js";import"./mergeRefs-BK5tBROb.js";import"./BaseRadioButton.stories-BlpY8_Uc.js";import"./BaseRadioButton-C8zMzJqt.js";import"./useId-BxhAQGol.js";import"./Label-CYGDvZjI.js";import"./SupportLabel-Clf4G6Nx.js";import"./SuccessIcon-CB5C7l0K.js";import"./Icon-Clp0c9CT.js";import"./WarningIcon-CGDcbmGj.js";import"./Button-Cpgyl110.js";import"./usePreviousValue-Dloe6Uh8.js";import"./Loader-CrvF0aHX.js";import"./useDelayedRender-DsBWCsyy.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
