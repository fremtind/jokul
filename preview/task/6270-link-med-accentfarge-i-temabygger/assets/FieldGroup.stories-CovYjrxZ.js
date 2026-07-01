import{r as a,j as p}from"./iframe-BvHTgxVf.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D69eDwzF.js";import s from"./Help.stories-CUbbX_AM.js";import n from"./RadioButton.stories-BdyNbNyv.js";import{F as c}from"./FieldGroup-Xk4j8_Rq.js";import{C as d}from"./Checkbox-D5EdKuft.js";import{H as l}from"./Help-BaKyXlHo.js";import{R as u}from"./RadioButton-C3kP1Iwu.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BXoafQpB.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-FlBHsOhL.js";import"./mergeRefs-CpICqYht.js";import"./BaseRadioButton.stories-DA-CWJgi.js";import"./BaseRadioButton-EN2OsmjH.js";import"./useId-BcDliOnK.js";import"./Label-Nsvcgbrn.js";import"./SupportLabel-C7SPnNtJ.js";import"./SuccessIcon-Cb_Ap58Q.js";import"./Icon-hAZLsZ_N.js";import"./WarningIcon-vJgonrR6.js";import"./Button-pUBYDWd7.js";import"./usePreviousValue-DYNa9HUN.js";import"./Loader-D1Xxl-Se.js";import"./useDelayedRender-BY0nA9C4.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
