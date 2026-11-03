import{r as a,j as p}from"./iframe-2ssKPK5p.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-LS77PGUH.js";import{H as s,m as n}from"./Help.stories-xtqGlphd.js";import c from"./RadioButton.stories-CXso383h.js";import{F as d}from"./FieldGroup-ClkklsgD.js";import{C as l}from"./Checkbox-CmFkRnHA.js";import{R as u}from"./RadioButton-DF4dzdt5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Bux7J4HQ.js";import"./Button-Dfx7NEXn.js";import"./usePreviousValue-40IPykvW.js";import"./Loader-CU44qFfz.js";import"./useDelayedRender-DMhxLC6f.js";/* empty css               *//* empty css               */import"./Flex-wXdaxfYF.js";import"./SlotComponent-CsDwB1zn.js";import"./mergeRefs-_7lZvp9j.js";import"./BaseRadioButton.stories-UMfxUVWg.js";import"./BaseRadioButton-D3BrXwGD.js";import"./useId-y4WqJUQb.js";/* empty css               */import"./Label-Bg48KiXx.js";import"./SupportLabel-CQnfgEX3.js";import"./WarningIcon-CajbV473.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}},z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
