import{r as p,j as i}from"./iframe-DeSfocgQ.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Dd6raOXM.js";import{CheckboxStory as c}from"./Checkbox.stories-D3DYsKqo.js";import d from"./Help.stories-D2KfQiH4.js";import k from"./RadioButton.stories-D0NiEOwO.js";import{RadioPanel as u}from"./RadioPanel.stories-CmeoIqUP.js";import{F as g}from"./FieldGroup-Cs4yGJys.js";import{C as h}from"./Checkbox-U1pWaM1N.js";import{R as b}from"./RadioPanel-C6vLkmam.js";import{H as x}from"./Help-vTsWTKxF.js";import{R as C}from"./RadioButton-gQT0e0By.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DcJkUFZg.js";import"./clsx-B-dksMZM.js";import"./Flex-BQVERUic.js";import"./SlotComponent-BJYZAE6C.js";import"./mergeRefs-NXIC-F_0.js";import"./Button-DmJ4Ui0p.js";import"./usePreviousValue-B_VZuqDu.js";import"./serializeTracking-CnAc4iKu.js";import"./Loader-ecfToCpj.js";import"./useDelayedRender-CkIj1wpW.js";import"./useId-HdsHRNi4.js";import"./Label-CNKHvCqb.js";import"./SupportLabel-Bsd_Jdi_.js";import"./SuccessIcon-NYoup3pz.js";import"./Icon-J-LIvZH4.js";import"./WarningIcon-DHLA2Hvc.js";import"./BaseRadioButton.stories-D4YCHl0D.js";import"./BaseRadioButton-BHIBT-OI.js";import"./Title-zvWqgJZ8.js";import"./Card-CoaTbRu5.js";import"./Text-DIRGvS4o.js";import"./Tag-uQmZimY-.js";import"./ExpandablePanel-WOKmcB0R.js";import"./useAnimatedHeightBetween-YErNtfyF.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CU0Kb1Yv.js";import"./Expander-B1u2tnGB.js";import"./ChevronUpIcon-DkjP4U6i.js";import"./ListItem-DUyxxODI.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
