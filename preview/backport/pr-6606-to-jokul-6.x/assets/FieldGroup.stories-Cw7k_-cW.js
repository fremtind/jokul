import{r as p,j as i}from"./iframe-DfRMJqQG.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DQ8i4ONR.js";import{CheckboxStory as c}from"./Checkbox.stories-OLJchMaB.js";import d from"./Help.stories-M624UW8p.js";import k from"./RadioButton.stories-BysAOBTH.js";import{RadioPanel as u}from"./RadioPanel.stories-DkyqFDrr.js";import{F as g}from"./FieldGroup-DUtejXFM.js";import{C as h}from"./Checkbox-yIV3pbr6.js";import{R as b}from"./RadioPanel-BN-zuROF.js";import{H as x}from"./Help-CJhkrDRC.js";import{R as C}from"./RadioButton-DNggyI5I.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D5XCzwf9.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CSvSmOtW.js";import"./SlotComponent-CqiBxTZV.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DJioIEou.js";import"./usePreviousValue-B4TtORcl.js";import"./Loader-BWFXwCOk.js";import"./useDelayedRender-DqsT2ME-.js";import"./useId-9euHN0Lj.js";import"./Label-Df5eJIpF.js";import"./SupportLabel-CvXUfG2K.js";import"./SuccessIcon-DAlEwuTK.js";import"./Icon-Bb1JmFOR.js";import"./WarningIcon-CoACJujz.js";import"./BaseRadioButton.stories-Bt6b8OfW.js";import"./BaseRadioButton-BvU0y2nn.js";import"./Title-D4oULGFF.js";import"./Card-B88VRIPS.js";import"./Text-B-aEHaQJ.js";import"./Tag-FCP_OnaG.js";import"./ExpandablePanel-DeMML8vS.js";import"./useAnimatedHeightBetween-K0ULQPmJ.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DGVKPOUX.js";import"./Expander-C6klY9vQ.js";import"./ChevronUpIcon-BFLxRZYa.js";import"./ListItem-GoeINhj5.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
