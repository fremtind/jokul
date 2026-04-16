import{j as p,r as a}from"./iframe-CieSfS-s.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-B9k5s_5L.js";import{H as s,m as n}from"./Help.stories-BT_ktity.js";import c from"./RadioButton.stories-DvgLtgLY.js";import{F as d}from"./FieldGroup-BeipjCKE.js";import{R as l}from"./RadioButton-COlwsxQP.js";import{C as u}from"./Checkbox-D34d8opD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-wNnCf9NV.js";import"./Label-CHaHdk_c.js";import"./SupportLabel-D8vc4u7I.js";import"./WarningIcon-DLZF4wih.js";import"./Icon-YECgz6N-.js";import"./Button-1RO0JexK.js";import"./usePreviousValue-DNJDyo_-.js";import"./Loader-mCg85FsZ.js";import"./useDelayedRender-BcBjfM_T.js";/* empty css               *//* empty css               */import"./Flex-nyPwUf4Q.js";import"./SlotComponent-l-qd3LOk.js";import"./mergeRefs-BAyfdB9Y.js";import"./BaseRadioButton.stories-Dx0n4itg.js";import"./BaseRadioButton-CR_GHnAN.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
