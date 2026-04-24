import{j as p,r as a}from"./iframe-Bk9iiEIc.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CLJz_gd4.js";import{H as s,m as n}from"./Help.stories-CvAFhdcn.js";import c from"./RadioButton.stories-lHPzyUrc.js";import{F as d}from"./FieldGroup-aKQb9P8m.js";import{R as l}from"./RadioButton-B1z7WmIL.js";import{C as u}from"./Checkbox-DFaOVrOY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DyROgchr.js";import"./Label-5L8w1Xir.js";import"./SupportLabel-BadqYmpe.js";import"./WarningIcon-BmC69aXI.js";import"./Icon-Br4Ue-uZ.js";import"./Button-Cl22G8yg.js";import"./usePreviousValue-BaqyGZJT.js";import"./Loader-CMiAPgHr.js";import"./useDelayedRender-DDcrvvnP.js";/* empty css               *//* empty css               */import"./Flex-Hd8fGePT.js";import"./SlotComponent-RlGBD3IS.js";import"./mergeRefs-1ye1SzKE.js";import"./BaseRadioButton.stories-D1Wu92hz.js";import"./BaseRadioButton-CqtinQrN.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
