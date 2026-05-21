import{r as a,j as p}from"./iframe-M5fduR9m.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C2iSRcgq.js";import{H as s,m as n}from"./Help.stories-DnpLvdZ_.js";import c from"./RadioButton.stories-CK88WAxK.js";import{F as d}from"./FieldGroup-Cge5KJdE.js";import{C as l}from"./Checkbox-tXy3GbHf.js";import{R as u}from"./RadioButton-Dhpv86Ie.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-t8YR3Hpe.js";import"./Button-ByP7p5zg.js";import"./usePreviousValue-CZy9BET4.js";import"./Loader-C6mmqZMR.js";import"./useDelayedRender-2HUbY5Bu.js";/* empty css               *//* empty css               */import"./Flex-CdDtiyGa.js";import"./SlotComponent-DjKhOGnJ.js";import"./mergeRefs-BWPIsQAh.js";import"./BaseRadioButton.stories-CKrM65pk.js";import"./BaseRadioButton-DF8I1U50.js";import"./useId-DVZZp5w1.js";/* empty css               */import"./Label-CO-qkPxu.js";import"./SupportLabel-D6TmO4L1.js";import"./WarningIcon-B-uzR7KS.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
