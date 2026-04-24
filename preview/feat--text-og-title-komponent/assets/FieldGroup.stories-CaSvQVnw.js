import{j as p,r as a}from"./iframe-CdMBQode.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C4hfIEha.js";import{H as s,m as n}from"./Help.stories-Chf3_Ehn.js";import c from"./RadioButton.stories-D4-oSnfi.js";import{F as d}from"./FieldGroup-C8pexKPE.js";import{R as l}from"./RadioButton-8cnMJczM.js";import{C as u}from"./Checkbox-CE1FCdtB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-h225ykP6.js";import"./Label-nyUvZJnR.js";import"./SupportLabel-9MAu-Rny.js";import"./WarningIcon-DCokgduR.js";import"./Icon-ByJav2If.js";import"./Button-R8v7xarA.js";import"./usePreviousValue-CqcQf1Io.js";import"./Loader-BSER4w-J.js";import"./useDelayedRender-CFkuvuWP.js";/* empty css               *//* empty css               */import"./Flex-CimmCvSY.js";import"./SlotComponent-cvaRma8Z.js";import"./mergeRefs-gOb-_29c.js";import"./BaseRadioButton.stories-BAP4s5eL.js";import"./BaseRadioButton-N2HTqN_0.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
