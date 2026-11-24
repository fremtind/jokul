import{r as p,j as i}from"./iframe-iV1sGcN7.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CgTTsbbn.js";import{CheckboxStory as c}from"./Checkbox.stories-ClM3evV_.js";import d from"./Help.stories-CclEubGD.js";import k from"./RadioButton.stories-fTNFnV4r.js";import{RadioPanel as u}from"./RadioPanel.stories-Ry-Bxfu4.js";import{F as g}from"./FieldGroup-C8901IFP.js";import{C as h}from"./Checkbox-B5WDZbPl.js";import{R as b}from"./RadioPanel-3-hT08wd.js";import{H as x}from"./Help-v8tbd5cY.js";import{R as C}from"./RadioButton-DQv4uLfT.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CDmviFJV.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-4nPArlYP.js";import"./SlotComponent-qmQI1ML8.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BHCzLUIh.js";import"./usePreviousValue-C_zEqtt0.js";import"./Loader-B-ug88o0.js";import"./useDelayedRender-20A3aIkJ.js";import"./useId-rND0VVge.js";import"./Label-BrDlJVjw.js";import"./SupportLabel-QejYcZs9.js";import"./SuccessIcon-Bv2iZNmj.js";import"./Icon-BpgnOPZg.js";import"./WarningIcon-BcBxnkqe.js";import"./BaseRadioButton.stories-BAhYZBTC.js";import"./BaseRadioButton-Du1u7esP.js";import"./Title-CQRULQ9W.js";import"./Card-Cai3Avdv.js";import"./Text-BjQrLwbf.js";import"./Tag-C7Txxk77.js";import"./ExpandablePanel-BGnOpecZ.js";import"./useAnimatedHeightBetween-DnvmG5ac.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CvbplPGw.js";import"./Expander-Ce4amto-.js";import"./ChevronUpIcon-BcXCkR6s.js";import"./ListItem-DD8rDnhL.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
