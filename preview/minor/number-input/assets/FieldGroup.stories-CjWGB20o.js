import{j as p,r as a}from"./iframe-Cz3xcnfU.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BMcINtBe.js";import{H as s,m as n}from"./Help.stories-Bil65nU8.js";import c from"./RadioButton.stories-Cu8ZAyV4.js";import{F as d}from"./FieldGroup-CIolUwCU.js";import{R as l}from"./RadioButton-Bz-dFKJm.js";import{C as u}from"./Checkbox-BcXmnNTV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BXMlKgX0.js";import"./Label-DVWD2eIN.js";import"./SupportLabel-B7ljEzuK.js";import"./WarningIcon-D0rYcyAU.js";import"./Icon-D8AEtHtL.js";import"./Button-BOf1Pg7E.js";import"./usePreviousValue-DjGLxm5_.js";import"./Loader-DYXXa8-k.js";import"./useDelayedRender-sKp_NfsA.js";/* empty css               *//* empty css               */import"./Flex-4nK4b4aW.js";import"./SlotComponent-C8jCA0oG.js";import"./mergeRefs-CZF3VeSr.js";import"./BaseRadioButton.stories-BNOa9Yzs.js";import"./BaseRadioButton-CpZ4ALai.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
