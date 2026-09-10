import{r as n,j as i}from"./iframe-Clh-zdRB.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-_1OL5VYC.js";import{CheckboxStory as c}from"./Checkbox.stories-Ddo06mg0.js";import d from"./Help.stories-ZGVIdO-K.js";import k from"./RadioButton.stories-22cdz7sZ.js";import{RadioPanel as u}from"./RadioPanel.stories-Dc9fh7wN.js";import{F as g}from"./FieldGroup-BDsdx1yl.js";import{C as h}from"./Checkbox-CS5m38UW.js";import{R as b}from"./RadioPanel-DwhsV77K.js";import{H as x}from"./Help-He1npD0M.js";import{R as C}from"./RadioButton-N5EUhiaA.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DfqQkhUm.js";import"./clsx-B-dksMZM.js";import"./Flex-DVsL7F0y.js";import"./SlotComponent-D7dM_OLc.js";import"./mergeRefs-BiGu2lC_.js";import"./Button-AFELRHV-.js";import"./usePreviousValue-Gmv7JjS1.js";import"./Loader-DW-9j6xd.js";import"./useDelayedRender-n6xM1LgK.js";import"./useId-DAigUxJv.js";import"./Label-B62bVx9z.js";import"./SupportLabel-C2F7Ph2X.js";import"./SuccessIcon-J6tmFMdB.js";import"./Icon-1FYWhicE.js";import"./WarningIcon-DZanq2Ec.js";import"./BaseRadioButton.stories-PoNJhA39.js";import"./BaseRadioButton-CWvZ3HJM.js";import"./Title-DGCIJaDT.js";import"./Card-B_BrOIzp.js";import"./Text-xnt9htlG.js";import"./Tag-C1Ma4QxT.js";import"./ExpandablePanel-BT2CSHCE.js";import"./useAnimatedHeightBetween-C4-awI8h.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CFCqMFZI.js";import"./Expander-B5FmmVK8.js";import"./ChevronUpIcon-C59BbY23.js";import"./ListItem-BzoGXSNJ.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
