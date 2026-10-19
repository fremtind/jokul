import{r as n,j as i}from"./iframe-PjpZD5-H.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-B12-HY84.js";import{CheckboxStory as c}from"./Checkbox.stories-BVDrM78y.js";import d from"./Help.stories-D0h8IyHV.js";import k from"./RadioButton.stories-BobsKv-V.js";import{RadioPanel as u}from"./RadioPanel.stories-BRj1C4e8.js";import{F as g}from"./FieldGroup-CaaM3MXU.js";import{C as h}from"./Checkbox-C4ezBvcy.js";import{R as b}from"./RadioPanel-DeXhEsGy.js";import{H as x}from"./Help-fY8aEM9s.js";import{R as C}from"./RadioButton-CmqjrKeZ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C9eox9vH.js";import"./clsx-B-dksMZM.js";import"./Flex-BQ3aJE-k.js";import"./SlotComponent-Bp3SakMu.js";import"./mergeRefs-DQn8pcDi.js";import"./Button-DkVNdff5.js";import"./usePreviousValue-BqOkMWMZ.js";import"./Loader-CvjMV3bM.js";import"./useDelayedRender-BmhkSb_0.js";import"./useId-CDZA533e.js";import"./Label-BoPnH_nD.js";import"./SupportLabel-BplxrB8K.js";import"./SuccessIcon-DTLXJvKy.js";import"./Icon-D-weVA-_.js";import"./WarningIcon-DwpxPog3.js";import"./BaseRadioButton.stories-SakKEvsk.js";import"./BaseRadioButton-pqxQoqeE.js";import"./Title-DtSGnCQQ.js";import"./Card-D_V3jQG9.js";import"./Text-B2GKnSok.js";import"./Tag-kl2BZZcw.js";import"./ExpandablePanel-BYvXI-Ku.js";import"./useAnimatedHeightBetween--77q9HNl.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D7YYc0uQ.js";import"./Expander-B9b_hy-j.js";import"./ChevronUpIcon-Uei75oZB.js";import"./ListItem-Dv1wZOdF.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
