import{j as p,r as a}from"./iframe-D_SF6v9z.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-s68xsBM2.js";import{H as s,m as n}from"./Help.stories-BBVj84yo.js";import c from"./RadioButton.stories-BspCloai.js";import{F as d}from"./FieldGroup-CKSjwkWm.js";import{R as l}from"./RadioButton-BwkMrII5.js";import{C as u}from"./Checkbox-BhTVgFT_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DVXZdZry.js";import"./Label-CvbS6kVO.js";import"./SupportLabel-BuWo1P9H.js";import"./WarningIcon-CTz9tXYw.js";import"./Icon-CY4nf_ru.js";import"./Button-UXc950Z_.js";import"./usePreviousValue-BCMFpE_i.js";import"./Loader-B43IYr_N.js";import"./useDelayedRender-34U5tRwA.js";/* empty css               *//* empty css               */import"./Flex-BAgp3Sc4.js";import"./SlotComponent-D4s7fSzs.js";import"./mergeRefs-T8CwIIFE.js";import"./BaseRadioButton.stories-BOpbFLxC.js";import"./BaseRadioButton-DeWWl5_-.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
