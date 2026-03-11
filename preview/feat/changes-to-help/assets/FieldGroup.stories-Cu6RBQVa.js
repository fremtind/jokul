import{j as p,r as a}from"./iframe-GXXZ68Zg.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D5Tg_Uxr.js";import s from"./Help.stories-Dg8krFJf.js";import n from"./RadioButton.stories-3wuhYGrR.js";import{F as c}from"./FieldGroup-CuJYeSWA.js";import{R as d}from"./RadioButton-kzz8jHW7.js";import{C as l}from"./Checkbox-BtWDj2FT.js";import{H as u}from"./Help-DXi82w_y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BlYjqR5I.js";import"./Label-Ckn67wrJ.js";import"./SupportLabel-C9JeSVjS.js";import"./WarningIcon-C2rSq6ip.js";import"./Icon-D72tbed5.js";/* empty css               *//* empty css               */import"./Flex-CHeWhyPs.js";import"./SlotComponent-Ca0SlmFG.js";import"./mergeRefs-C9oCcbeh.js";import"./BaseRadioButton.stories-BeQHMvFx.js";import"./BaseRadioButton-CrA2jbVx.js";import"./Button-BP7AMkJr.js";import"./usePreviousValue-Ctmy_MnQ.js";import"./Loader-DlF5ycSc.js";import"./useDelayedRender-B8bmFBVx.js";const w={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(d,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(u,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
