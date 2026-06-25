import{r as a,j as p}from"./iframe-DSIcDLeC.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Ilr9DrY6.js";import s from"./Help.stories-yfUP4Hx5.js";import n from"./RadioButton.stories-BwwCej8l.js";import{F as c}from"./FieldGroup-Dk_n5PJj.js";import{C as d}from"./Checkbox-BBkwIw08.js";import{H as l}from"./Help-sf7CJmm3.js";import{R as u}from"./RadioButton-BtNidWnf.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-vhlyPrMF.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DEaOCoV2.js";import"./mergeRefs-njVnX7le.js";import"./BaseRadioButton.stories-zeaBka3f.js";import"./BaseRadioButton-Cux_g5KE.js";import"./useId-CNjgfnja.js";import"./Label-D-WAj2g1.js";import"./SupportLabel-BPn_mVs2.js";import"./SuccessIcon-Qm_MD47y.js";import"./Icon-B8fBmajg.js";import"./WarningIcon-BWxpFuB3.js";import"./Button-DZBrJlHm.js";import"./usePreviousValue-0ijt8A52.js";import"./Loader-DF9YC_6R.js";import"./useDelayedRender-B75-btHl.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
