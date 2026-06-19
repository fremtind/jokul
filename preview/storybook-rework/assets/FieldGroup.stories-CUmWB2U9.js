import{r as a,j as p}from"./iframe-2cjfxI8U.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DAVXFIXJ.js";import s from"./Help.stories-COn3vnuC.js";import n from"./RadioButton.stories-DgL9rcCy.js";import{F as c}from"./FieldGroup-CWKmWIV2.js";import{C as d}from"./Checkbox-CyMt0mJM.js";import{H as l}from"./Help-m02qYKKp.js";import{R as u}from"./RadioButton-lKvdxx-f.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-DmTVwvUc.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BHPkml4b.js";import"./mergeRefs-D_Ph_gFB.js";import"./BaseRadioButton.stories-DP5woXrh.js";import"./BaseRadioButton-nxRugjHv.js";import"./useId-xYyGFk01.js";/* empty css               */import"./Label-25enJFIX.js";import"./SupportLabel-Q8nZiujB.js";import"./SuccessIcon-CfoBPrrq.js";import"./Icon-BodlVgTg.js";import"./WarningIcon-DDkHZmXj.js";import"./Button-wPXrixWs.js";import"./usePreviousValue-JN_C6zxt.js";import"./Loader-qRtsKbtZ.js";import"./useDelayedRender-CotPnVTC.js";const A={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const D=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,D as __namedExportsOrder,A as default};
