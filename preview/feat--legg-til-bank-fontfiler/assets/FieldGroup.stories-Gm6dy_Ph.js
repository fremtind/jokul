import{j as p,r as a}from"./iframe-C72mq8sh.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Do4zRBTx.js";import{H as s,m as n}from"./Help.stories-B1f4pvGh.js";import c from"./RadioButton.stories-Bjt3AdwH.js";import{F as d}from"./FieldGroup-D2yKQdKd.js";import{R as l}from"./RadioButton-BWLipQaH.js";import{C as u}from"./Checkbox-DtiZVN73.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CryekSjM.js";import"./Label-BYLoNrFV.js";import"./SupportLabel-BGqzvBzi.js";import"./WarningIcon-BdAZB8hq.js";import"./Icon-CP6593Vk.js";import"./Button-DRobm1kz.js";import"./usePreviousValue-Dtp0ENEL.js";import"./Loader-RwHEtEFI.js";import"./useDelayedRender-DQzRw0G2.js";/* empty css               *//* empty css               */import"./Flex-DARJNSb9.js";import"./SlotComponent-DLsMY-JP.js";import"./mergeRefs-DPY3aWvU.js";import"./BaseRadioButton.stories-D35uJev6.js";import"./BaseRadioButton-BLIP70dC.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,o as RadioGroup,w as __namedExportsOrder,q as default};
