import{r as a,j as p}from"./iframe-GUEk6o9Q.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BUVHVczI.js";import s from"./Help.stories-D14l-4v1.js";import n from"./RadioButton.stories-C6ou_ncg.js";import{F as c}from"./FieldGroup-BUVD2f6J.js";import{C as d}from"./Checkbox-BflIdYuh.js";import{H as l}from"./Help-CXgc5E0o.js";import{R as u}from"./RadioButton-BJWrQZbI.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BiyIqgnA.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-Bl51-84j.js";import"./mergeRefs-B0UYpluP.js";import"./BaseRadioButton.stories-BYXG5VNj.js";import"./BaseRadioButton-BJilJ3nZ.js";import"./useId-Bg_u2xkg.js";import"./Label-CX1DrEs8.js";import"./SupportLabel-D839Bww_.js";import"./SuccessIcon-BTexI83u.js";import"./Icon-DzOhMDjM.js";import"./WarningIcon-BqdZQG6e.js";import"./Button-Dj1aLKFh.js";import"./usePreviousValue-BJ0cwXaz.js";import"./Loader-JSJElD53.js";import"./useDelayedRender-TjbCa-b7.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
