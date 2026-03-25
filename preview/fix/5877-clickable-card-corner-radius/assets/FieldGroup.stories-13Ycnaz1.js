import{j as p,r as a}from"./iframe-DjcnNaUf.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C94jsgA7.js";import{H as s,m as n}from"./Help.stories-DKFuBlFI.js";import c from"./RadioButton.stories-nWPQvYyJ.js";import{F as d}from"./FieldGroup-DNyGtKhb.js";import{R as l}from"./RadioButton-B-AfuKsi.js";import{C as u}from"./Checkbox-bP0f9B8M.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-A-amUX4h.js";import"./Label-DDPEKHnH.js";import"./SupportLabel-BF-U0Y9O.js";import"./WarningIcon-CMvEsfg5.js";import"./Icon-B8q_qvXa.js";import"./Button-DEX_fno-.js";import"./usePreviousValue-C5iXlFlg.js";import"./Loader-yFuJPWrQ.js";import"./useDelayedRender-DbMSRPCo.js";/* empty css               *//* empty css               */import"./Flex-Hmx0qnQ8.js";import"./SlotComponent-Cj_s2Ixl.js";import"./mergeRefs-DAf688KE.js";import"./BaseRadioButton.stories-C66qsthQ.js";import"./BaseRadioButton-tEbDXGWP.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
