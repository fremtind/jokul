import{r as a,j as p}from"./iframe-BxXaD8ps.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CZxKGQmB.js";import{H as s,m as n}from"./Help.stories-CvUZOMgL.js";import c from"./RadioButton.stories-DtEdUn0e.js";import{F as d}from"./FieldGroup-_x-h5o20.js";import{C as l}from"./Checkbox-qt403ez8.js";import{R as u}from"./RadioButton-CDBzVt3V.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BJE0_aGK.js";import"./Button-dcZaOL4L.js";import"./usePreviousValue-ZXdX_0A6.js";import"./Loader-Al1mhMfe.js";import"./useDelayedRender-CwsuZqzJ.js";/* empty css               *//* empty css               */import"./Flex-CNHh0V7Q.js";import"./SlotComponent-EnP8apa9.js";import"./mergeRefs-_7lZvp9j.js";import"./BaseRadioButton.stories-B1RkvBE3.js";import"./BaseRadioButton-D-1NFUcc.js";import"./useId-BwlWezat.js";/* empty css               */import"./Label-BN4wka2_.js";import"./SupportLabel-C3ht4Mws.js";import"./WarningIcon-iv-hHFrn.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}},z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
