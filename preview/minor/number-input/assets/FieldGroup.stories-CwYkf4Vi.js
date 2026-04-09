import{j as p,r as a}from"./iframe-CHUBw1f3.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DkVYtt2x.js";import{H as s,m as n}from"./Help.stories-DWVCUznF.js";import c from"./RadioButton.stories-CtSk0IK-.js";import{F as d}from"./FieldGroup-jMzSCXFG.js";import{R as l}from"./RadioButton-DhBDelJ3.js";import{C as u}from"./Checkbox-DtHXgg4P.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-n9ItmfG5.js";import"./Label-gvvQLaIz.js";import"./SupportLabel-D8QtH34J.js";import"./WarningIcon-D3EDGG0R.js";import"./Icon-C01bq3--.js";import"./Button-Bf-f3nlK.js";import"./usePreviousValue-DnZ8IwLa.js";import"./Loader-BnPt7SyZ.js";import"./useDelayedRender-C7iQ35lb.js";/* empty css               *//* empty css               */import"./Flex-BbZFZPDF.js";import"./SlotComponent-f9tKS35U.js";import"./mergeRefs-BgXfVPEO.js";import"./BaseRadioButton.stories-BJJRh67f.js";import"./BaseRadioButton-MZwpsB9N.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
