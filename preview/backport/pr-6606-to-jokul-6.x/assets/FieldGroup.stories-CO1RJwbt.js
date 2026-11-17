import{r as p,j as i}from"./iframe-BSOWj6-v.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-c48Wa-ps.js";import{CheckboxStory as c}from"./Checkbox.stories-7Y1iMzTe.js";import d from"./Help.stories-DhW2t0pR.js";import k from"./RadioButton.stories-DU_DyIhz.js";import{RadioPanel as u}from"./RadioPanel.stories-DvY6crLP.js";import{F as g}from"./FieldGroup-CWc_XqNS.js";import{C as h}from"./Checkbox-C7YqcJxJ.js";import{R as b}from"./RadioPanel-DJQwad_I.js";import{H as x}from"./Help-Cv9lDbvP.js";import{R as C}from"./RadioButton-312CEvbv.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Dhb7QcJf.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-B6SUsl39.js";import"./SlotComponent-BBmygZMP.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DESXrPTI.js";import"./usePreviousValue-C2KZs_zs.js";import"./Loader-UNwgI0Bh.js";import"./useDelayedRender-CjE7jHI7.js";import"./useId-CeGlSt-h.js";import"./Label-DO_kdEPk.js";import"./SupportLabel-b-7SeMRT.js";import"./SuccessIcon-4GMyiaev.js";import"./Icon-C365w0L3.js";import"./WarningIcon-BduEda9f.js";import"./BaseRadioButton.stories-1zf_5ukp.js";import"./BaseRadioButton-vCX9uxxr.js";import"./Title-CyuQQDHC.js";import"./Card-Crfmismn.js";import"./Text-FnklKJ1t.js";import"./Tag-CIzpureS.js";import"./ExpandablePanel-AwA6p3d-.js";import"./useAnimatedHeightBetween-Bb3-g7cm.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DCc0iddb.js";import"./Expander-BZBXgGBT.js";import"./ChevronUpIcon-qukr0iJN.js";import"./ListItem-BnBEOCGY.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Checkbox gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <Checkbox {...CheckboxStory.args} key={value} value={value} name="kontaktmetode">
                {value}
            </Checkbox>)
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Checkbox panel gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <CheckboxPanel {...CheckboxPanelStory.args} key={value} value={value} name="kontaktmetode" label={value}>
                {value}
            </CheckboxPanel>)
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Radio panel gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <RadioPanel {...RadioPanelStory.args} key={value} value={value} name="kontaktmetode" label={value} />)
  }
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
