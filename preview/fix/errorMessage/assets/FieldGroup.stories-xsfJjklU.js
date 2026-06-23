import{r as a,j as p}from"./iframe-CaPtmoGU.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-92eansJC.js";import s from"./Help.stories-ac2EedVy.js";import n from"./RadioButton.stories-Bg55WQvS.js";import{F as c}from"./FieldGroup-D4zbCHgG.js";import{C as d}from"./Checkbox-C6zKfPxW.js";import{H as l}from"./Help-De5WlVmd.js";import{R as u}from"./RadioButton-DO6MebtQ.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-D8V_I-zZ.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-RjMYw6BI.js";import"./mergeRefs-Btckm8Ol.js";import"./BaseRadioButton.stories-DaRpeku0.js";import"./BaseRadioButton-Dm2twXkE.js";import"./useId-U5pO9hlJ.js";import"./Label-l4avpaDB.js";import"./SupportLabel-DQkfx1n_.js";import"./SuccessIcon-CQ2dKSAH.js";import"./Icon-lVLBpDot.js";import"./WarningIcon-z6lRjb0k.js";import"./Button-VN1epCr0.js";import"./usePreviousValue-D6x-rG03.js";import"./Loader-BqMx3oW_.js";import"./useDelayedRender-BHc-Whd2.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
