import{r as a,j as p}from"./iframe-ILnvEMX0.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D6ePzPXA.js";import{H as s,m as n}from"./Help.stories-DMPTScoN.js";import c from"./RadioButton.stories-ChFDyo5y.js";import{F as d}from"./FieldGroup-BPck5Z0p.js";import{C as l}from"./Checkbox-CoFVI5mI.js";import{R as u}from"./RadioButton-Bz3IqBjg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BoIlNhxQ.js";import"./Button-C56KNixP.js";import"./usePreviousValue-CvjmLS7b.js";import"./Loader-D50Xm6oj.js";import"./useDelayedRender-CSXXonYa.js";/* empty css               *//* empty css               */import"./Flex-8sR2zqcN.js";import"./SlotComponent-C0T-fFpa.js";import"./mergeRefs-6x0SeRw7.js";import"./BaseRadioButton.stories-BViBNIc2.js";import"./BaseRadioButton-CUebGrmq.js";import"./useId-a_Vczvik.js";/* empty css               */import"./Label-WJfE8pAY.js";import"./SupportLabel-BpFLQIQk.js";import"./SuccessIcon-jWCr2URv.js";import"./WarningIcon-CFAKMJIF.js";const z={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
