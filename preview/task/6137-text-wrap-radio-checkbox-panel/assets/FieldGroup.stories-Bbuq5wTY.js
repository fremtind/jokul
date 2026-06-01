import{r as a,j as p}from"./iframe-59W4j_RD.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BfMbOtIG.js";import{H as s,m as n}from"./Help.stories-CFo0PZ6E.js";import c from"./RadioButton.stories-cYhaS1pt.js";import{F as d}from"./FieldGroup-BJeReQ8Y.js";import{C as l}from"./Checkbox-DDvKfZcq.js";import{R as u}from"./RadioButton-CLEKdv3O.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BsZ5anWK.js";import"./Button-DQp0r1ha.js";import"./usePreviousValue-BoYUOQHS.js";import"./Loader-DKujBd4N.js";import"./useDelayedRender-C40tDrQT.js";/* empty css               *//* empty css               */import"./Flex-DkKEhD6N.js";import"./SlotComponent-Y-ZqYHY6.js";import"./mergeRefs-CbU-TT0g.js";import"./BaseRadioButton.stories-B3rxvKaa.js";import"./BaseRadioButton-iJkUxGQT.js";import"./useId-BHnwwCE8.js";/* empty css               */import"./Label-BNNZeqmN.js";import"./SupportLabel-DODySQ9m.js";import"./WarningIcon-DKkI0ldE.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
