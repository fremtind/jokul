import{r as a,j as p}from"./iframe-D8oV_p7Q.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D3ur9eEA.js";import{H as s,m as n}from"./Help.stories-5wQWFrgP.js";import c from"./RadioButton.stories-DGw_x8w8.js";import{F as d}from"./FieldGroup-4q-icMtQ.js";import{C as l}from"./Checkbox-BDdbRPn6.js";import{R as u}from"./RadioButton-BEZas0Tx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DM47H2oM.js";import"./Button-BWoel_py.js";import"./usePreviousValue-Bx45_aX_.js";import"./Loader-D2yfDRUc.js";import"./useDelayedRender-CpM9ZaUw.js";/* empty css               *//* empty css               */import"./Flex-7lvqn4AT.js";import"./SlotComponent-BuDl82Gp.js";import"./mergeRefs-reyuWcQl.js";import"./BaseRadioButton.stories-BcawnyLk.js";import"./BaseRadioButton-CmeMoVby.js";import"./useId-BvCHke3i.js";/* empty css               */import"./Label-DzoD-MIn.js";import"./SupportLabel-PecUJOWM.js";import"./WarningIcon-TgRSw1BW.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
