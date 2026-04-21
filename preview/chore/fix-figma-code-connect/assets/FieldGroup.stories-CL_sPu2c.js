import{j as p,r as a}from"./iframe-BCYt9nZ-.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CT4ki7xV.js";import{H as s,m as n}from"./Help.stories-C5-TsweZ.js";import c from"./RadioButton.stories-r0S63gsj.js";import{F as d}from"./FieldGroup-DhihU2u1.js";import{R as l}from"./RadioButton-7JmC89kn.js";import{C as u}from"./Checkbox-l3Aqq66e.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-mdqVX9yK.js";import"./Label-nGPCti1p.js";import"./SupportLabel-Ljr2TW67.js";import"./WarningIcon-Cz8TSNid.js";import"./Icon-DzTWcPhq.js";import"./Button-BfZPxMWA.js";import"./usePreviousValue-BzyWaNE6.js";import"./Loader-D8fEZwwq.js";import"./useDelayedRender-7uSHEZjB.js";/* empty css               *//* empty css               */import"./Flex-D_bQBf1e.js";import"./SlotComponent-Cbn7vDrS.js";import"./mergeRefs-DUv30Vb3.js";import"./BaseRadioButton.stories-BZQRg1n6.js";import"./BaseRadioButton-CNL8gDvC.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
