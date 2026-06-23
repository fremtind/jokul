import{r as a,j as p}from"./iframe-Dr1UPJtt.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DsChlbr3.js";import s from"./Help.stories-CFjY-mT5.js";import n from"./RadioButton.stories-Cr9v4OBc.js";import{F as c}from"./FieldGroup-Cebl-AWv.js";import{C as d}from"./Checkbox-u5KRHn-t.js";import{H as l}from"./Help-JO78GR63.js";import{R as u}from"./RadioButton-DN2p9eDi.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BrEXZrcU.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-B_lWOdgJ.js";import"./mergeRefs-BY9abGS1.js";import"./BaseRadioButton.stories-DUm8lCmJ.js";import"./BaseRadioButton-dGr01T08.js";import"./useId-qc5a6cGU.js";import"./Label-Dy_Df6wg.js";import"./SupportLabel-D3yCHFW7.js";import"./SuccessIcon-DEjSlgbp.js";import"./Icon-BpYOlmuK.js";import"./WarningIcon-Dz8coMW5.js";import"./Button-BW0Yz6Ma.js";import"./usePreviousValue-DrUHmmqx.js";import"./Loader-CfXkNJQ6.js";import"./useDelayedRender-JK1UBSJm.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,A as __namedExportsOrder,z as default};
