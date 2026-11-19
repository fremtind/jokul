import{r as a,j as p}from"./iframe-C3OIBCy8.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-nW7alFvM.js";import{H as s,m as n}from"./Help.stories-DzNbNWXw.js";import c from"./RadioButton.stories-DcVTB2d5.js";import{F as d}from"./FieldGroup-T5Cc_L8k.js";import{C as l}from"./Checkbox-BaV577vl.js";import{R as u}from"./RadioButton-wls6QRd_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CL2psXRr.js";import"./Button-kYKXD4I-.js";import"./usePreviousValue-PzxsM6Wp.js";import"./Loader-Sy20-Uti.js";import"./useDelayedRender-Dw6b0_Lf.js";/* empty css               *//* empty css               */import"./Flex-DAxhwf4L.js";import"./SlotComponent-BlLzm27Z.js";import"./mergeRefs-_7lZvp9j.js";import"./BaseRadioButton.stories-DSH2LpZA.js";import"./BaseRadioButton-Eg3m_W43.js";import"./useId-D_OAlMoq.js";/* empty css               */import"./Label-BXHOY9H-.js";import"./SupportLabel-CV9qnb-O.js";import"./WarningIcon-D9nOVAYE.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}},z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,z as __namedExportsOrder,w as default};
