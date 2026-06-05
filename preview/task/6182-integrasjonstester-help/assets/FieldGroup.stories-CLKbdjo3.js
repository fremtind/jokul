import{r as a,j as p}from"./iframe-DG2z7F0f.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Cc4yFlhA.js";import{H as s,m as n}from"./Help.stories-B9h_YMyD.js";import c from"./RadioButton.stories-BrbmPb60.js";import{F as d}from"./FieldGroup-DZUiwP9g.js";import{C as l}from"./Checkbox-DHkNdkrr.js";import{R as u}from"./RadioButton-Du3B9l11.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DY6lulXa.js";import"./Button-CixaW7jC.js";import"./usePreviousValue-Ed2K8f_z.js";import"./Loader-CF99sOip.js";import"./useDelayedRender-FepoRm43.js";/* empty css               *//* empty css               */import"./Flex-6tGaA2PJ.js";import"./SlotComponent-BwJ3hQuC.js";import"./mergeRefs-B5RuiWs0.js";import"./BaseRadioButton.stories-BYfsK7Wr.js";import"./BaseRadioButton-MsJvx6Q0.js";import"./useId-B9J_SAca.js";/* empty css               */import"./Label-BQ1mbtSY.js";import"./SupportLabel-CVRpnw4w.js";import"./WarningIcon-DG9jaouR.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
