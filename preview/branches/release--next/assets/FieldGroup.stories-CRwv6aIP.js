import{j as p,r as a}from"./iframe-BOrF9nqU.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BpOYqokM.js";import{H as s,m as n}from"./Help.stories-DqNbnylO.js";import c from"./RadioButton.stories-DXGUqYf2.js";import{F as d}from"./FieldGroup-33yiuhLE.js";import{R as l}from"./RadioButton-BnqrrIb-.js";import{C as u}from"./Checkbox-BkqlkZlq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-UEbAqbSi.js";import"./Label-vX5y3Zld.js";import"./SupportLabel-B1rmKIxk.js";import"./WarningIcon-CstKp5IL.js";import"./Icon-C5fNV8qg.js";import"./Button-COep8p7o.js";import"./usePreviousValue-BF2Ry_x_.js";import"./Loader-OB5j8Itx.js";import"./useDelayedRender-Nyh3Rj9X.js";/* empty css               *//* empty css               */import"./Flex-CrUE-Anq.js";import"./SlotComponent-BtjfG4wz.js";import"./mergeRefs-CD90VgBN.js";import"./BaseRadioButton.stories-DRCnnrvm.js";import"./BaseRadioButton-CIdW0frY.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
