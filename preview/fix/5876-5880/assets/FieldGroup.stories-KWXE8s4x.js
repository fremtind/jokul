import{j as p,r as a}from"./iframe-DtVTaHEz.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CAWncZa4.js";import{H as s,m as n}from"./Help.stories-Bt-TcoBs.js";import c from"./RadioButton.stories-r68d22cp.js";import{F as d}from"./FieldGroup-CSprs4JL.js";import{R as l}from"./RadioButton-BY5CdADM.js";import{C as u}from"./Checkbox-if0WiJ4M.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Bso6mp_u.js";import"./Label-BvNQaK1Y.js";import"./SupportLabel-CG6lzJpq.js";import"./WarningIcon-IPpaJyeY.js";import"./Icon-CxhUVzbg.js";import"./Button-BQWyPn60.js";import"./usePreviousValue-mqWrcEyo.js";import"./Loader-TnRei5sH.js";import"./useDelayedRender-B0Sx4ftk.js";/* empty css               *//* empty css               */import"./Flex-DMS2gSK6.js";import"./SlotComponent-HVOSVgUh.js";import"./mergeRefs-CNaRCpLu.js";import"./BaseRadioButton.stories-Bp8l7-Ly.js";import"./BaseRadioButton-BzVSuIav.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
