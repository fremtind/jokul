import{r as p,j as i}from"./iframe-DP4uPROL.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-C8_T_kTP.js";import{CheckboxStory as c}from"./Checkbox.stories-Z_F1AGAx.js";import d from"./Help.stories-cvhVuD4r.js";import k from"./RadioButton.stories-Doa3i10x.js";import{RadioPanel as u}from"./RadioPanel.stories-CXpcWaCN.js";import{F as g}from"./FieldGroup-I5NQPYAW.js";import{C as h}from"./Checkbox-D30HbEce.js";import{R as b}from"./RadioPanel-BKK-ZMOx.js";import{H as x}from"./Help-epWm3CdM.js";import{R as C}from"./RadioButton-Dg0gEksS.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-B5kyL8xp.js";import"./clsx-B-dksMZM.js";import"./Flex-DYEDcWeU.js";import"./SlotComponent-Dt6Js32T.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-5R-FPME6.js";import"./usePreviousValue-NMVE0Cto.js";import"./Loader-COodOtEX.js";import"./useDelayedRender-CDwuU-DK.js";import"./BaseRadioButton.stories-2F9F-vPh.js";import"./BaseRadioButton-BnFDHEWX.js";import"./useId-BKR7rdEV.js";import"./Title-BBcBHnQV.js";import"./Card-D2ImU11I.js";import"./Text-BXiwXOHV.js";import"./Tag-BsGQyOsQ.js";import"./ExpandablePanel-Cdu-6cjE.js";import"./useAnimatedHeightBetween-EQ-Sga5E.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-l0vaM-i-.js";import"./Expander-CoPMP9fY.js";import"./ChevronDownIcon-CoivzwGZ.js";import"./Icon-CSbOr9gQ.js";import"./ChevronUpIcon-B72dnMwy.js";import"./ListItem-Dc3HOrFj.js";import"./Label-CrjClzO8.js";import"./SupportLabel-Yuh3sYTS.js";import"./SuccessIcon-EzxEEpaW.js";import"./WarningIcon-Bh0rJE6K.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
