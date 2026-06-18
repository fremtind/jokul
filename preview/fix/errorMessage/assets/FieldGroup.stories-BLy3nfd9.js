import{r as a,j as p}from"./iframe-C6cw858C.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DvCmeOMZ.js";import{H as s,m as n}from"./Help.stories-CX1lh-La.js";import c from"./RadioButton.stories-B0aX1SWJ.js";import{F as d}from"./FieldGroup-1p9hO5rV.js";import{C as l}from"./Checkbox-lIV6qJlG.js";import{R as u}from"./RadioButton-DTTg5fVd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DlkrbHjF.js";import"./Button-DMT52haf.js";import"./usePreviousValue-UFPyu8w9.js";import"./Loader-DA0RbnIn.js";import"./useDelayedRender-D0CwEOzn.js";/* empty css               *//* empty css               */import"./Flex-D-PrVzHy.js";import"./SlotComponent-Br7AaOcD.js";import"./mergeRefs-DSdRbafR.js";import"./BaseRadioButton.stories-cpF_z89_.js";import"./BaseRadioButton-Bl2ClpHz.js";import"./useId-C5hLgcHx.js";import"./Label-Bj5GNkY3.js";import"./SupportLabel-g6aGXEIX.js";import"./SuccessIcon-YZNnMhuU.js";import"./WarningIcon-nL3Nkoza.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
