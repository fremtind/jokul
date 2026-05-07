import{j as p,r as a}from"./iframe-BRpS3s-k.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CcDy27Rz.js";import{H as s,m as n}from"./Help.stories-8CXm-yn9.js";import c from"./RadioButton.stories-BxSsKy15.js";import{F as d}from"./FieldGroup-C-df67jr.js";import{R as l}from"./RadioButton-BoKvIO76.js";import{C as u}from"./Checkbox-CN-0omyJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-qKbigmD7.js";import"./Label-NaxYQnFe.js";import"./SupportLabel-LcuDXQMV.js";import"./WarningIcon-CuniiuPA.js";import"./Icon-DOB_92r_.js";import"./Button-B664Bm5D.js";import"./usePreviousValue-mkTKdss3.js";import"./Loader-BKVwoFfS.js";import"./useDelayedRender-DWaw11zy.js";/* empty css               *//* empty css               */import"./Flex-CaVXIqi3.js";import"./SlotComponent-CGbOK7br.js";import"./mergeRefs-myM-JpbJ.js";import"./BaseRadioButton.stories-C6c0PWbi.js";import"./BaseRadioButton-CeGm7u8Z.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
