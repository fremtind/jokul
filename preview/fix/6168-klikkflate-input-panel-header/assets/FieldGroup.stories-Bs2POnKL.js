import{r as a,j as p}from"./iframe-BesKik0N.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CIvNClka.js";import s from"./Help.stories-Cud3fvd1.js";import n from"./RadioButton.stories-Cei5fukd.js";import{F as c}from"./FieldGroup-n-6Ebtfo.js";import{C as d}from"./Checkbox-CEJVNuv2.js";import{H as l}from"./Help-BpRR1Lc6.js";import{R as u}from"./RadioButton-DI1HxpvW.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BWEFoxv_.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-Bl-CTqtH.js";import"./mergeRefs-Dp5nsvAa.js";import"./BaseRadioButton.stories-CoohefRl.js";import"./BaseRadioButton-C7ipTo7T.js";import"./useId-C1oYgKes.js";import"./Label-BdnDTWTJ.js";import"./SupportLabel-CBZvoOnH.js";import"./SuccessIcon-xwg1odsj.js";import"./Icon-Dxx1mCYg.js";import"./WarningIcon-BdazMg1f.js";import"./Button-cKISQptB.js";import"./usePreviousValue-CeNpKPMG.js";import"./Loader-xFUce2No.js";import"./useDelayedRender-Dq-xdTgN.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
