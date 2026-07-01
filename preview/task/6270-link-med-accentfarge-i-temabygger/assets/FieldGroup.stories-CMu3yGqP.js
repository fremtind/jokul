import{r as a,j as p}from"./iframe-C-ZRAbH0.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-A78EYrwY.js";import s from"./Help.stories-BMgXD_uW.js";import n from"./RadioButton.stories-gMhe3k5_.js";import{F as c}from"./FieldGroup-DkU4IiF4.js";import{C as d}from"./Checkbox-CzGBhffd.js";import{H as l}from"./Help-Cej18WxL.js";import{R as u}from"./RadioButton-KFOg_cVa.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CLxNPzaG.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CZyS8yI5.js";import"./mergeRefs-b4fmCA2B.js";import"./BaseRadioButton.stories-BH9iCcIJ.js";import"./BaseRadioButton-B6OqzP8Z.js";import"./useId-Cq2le9pd.js";import"./Label-GauxLuHT.js";import"./SupportLabel-BUM7_b8K.js";import"./SuccessIcon-Ce-QLctt.js";import"./Icon-BUGym6cF.js";import"./WarningIcon-BUE_9ayF.js";import"./Button-BlaycbDd.js";import"./usePreviousValue-RlFsrWlG.js";import"./Loader-BYgAmPO_.js";import"./useDelayedRender-2O-vQeL3.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
