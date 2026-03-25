import{j as p,r as a}from"./iframe-C00D7x2n.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-6HdW68KO.js";import{H as s,m as n}from"./Help.stories-Ca0HwHGD.js";import c from"./RadioButton.stories-DY6cuKtQ.js";import{F as d}from"./FieldGroup-BvZmcrJU.js";import{R as l}from"./RadioButton-Dxw24EEh.js";import{C as u}from"./Checkbox-C0H87ixp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Jl6tKbTB.js";import"./Label-YzP4DYZy.js";import"./SupportLabel-DUal16Hu.js";import"./WarningIcon-DiHbR5Nj.js";import"./Icon-ChH1clju.js";import"./Button-DhbPJuBA.js";import"./usePreviousValue-BCC9uXiV.js";import"./Loader-DJgLSE2p.js";import"./useDelayedRender-BpMA9cB8.js";/* empty css               *//* empty css               */import"./Flex-D9xWdn63.js";import"./SlotComponent-BHOm69sE.js";import"./mergeRefs-DZg8w7p4.js";import"./BaseRadioButton.stories-8ZBY3RFh.js";import"./BaseRadioButton-Bq7lmRvp.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
