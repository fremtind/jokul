import{r as a,j as p}from"./iframe-D3hA9N4T.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Cwgw55m1.js";import{H as s,m as n}from"./Help.stories-D61-3z4b.js";import c from"./RadioButton.stories-ZYyav6gM.js";import{F as d}from"./FieldGroup-CHkNPf4z.js";import{C as l}from"./Checkbox-DQ-cKwIa.js";import{R as u}from"./RadioButton-DWINyPc5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-yBmoOvAX.js";import"./Button-jxYGs3MF.js";import"./usePreviousValue-BJCq1dC0.js";import"./Loader-BgxMDlK4.js";import"./useDelayedRender-Deua3OWy.js";/* empty css               *//* empty css               */import"./Flex-kzEXovVg.js";import"./SlotComponent-BkjO0ors.js";import"./mergeRefs-CbZvNlI4.js";import"./BaseRadioButton.stories-CfYJ38mM.js";import"./BaseRadioButton-NuLaaTxs.js";import"./useId-CPlBK1o9.js";/* empty css               */import"./Label-CXvXJ3_C.js";import"./SupportLabel-CsclqNQb.js";import"./WarningIcon-B2Sl5R19.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
