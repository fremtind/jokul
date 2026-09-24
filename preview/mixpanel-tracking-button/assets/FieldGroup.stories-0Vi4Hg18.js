import{r as n,j as i}from"./iframe-C3kYsIHh.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DYeNKF-W.js";import{CheckboxStory as c}from"./Checkbox.stories-qVAOSxZN.js";import d from"./Help.stories-BS7Ha2wY.js";import k from"./RadioButton.stories-CHvM2Q9d.js";import{RadioPanel as u}from"./RadioPanel.stories-BFtwUGhd.js";import{F as g}from"./FieldGroup-DLXXAhAA.js";import{C as h}from"./Checkbox-DM7BBQVb.js";import{R as b}from"./RadioPanel-CkuwrLmD.js";import{H as x}from"./Help-Ds8rvauV.js";import{R as C}from"./RadioButton-BrHcAIeS.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-OBjAvpST.js";import"./clsx-B-dksMZM.js";import"./Flex--nuDi5CB.js";import"./SlotComponent-CBrmqtKM.js";import"./mergeRefs-DpWGkHBw.js";import"./Button-CcXsQf0F.js";import"./usePreviousValue-_4YImjm6.js";import"./Loader-DVCTo6Rw.js";import"./useDelayedRender-BV2M65IW.js";import"./useId-2r5NKHv8.js";import"./Label-CU6Y_UTG.js";import"./SupportLabel-BG1Lbt55.js";import"./SuccessIcon-C11QbNIe.js";import"./Icon-Cy3VvqMK.js";import"./WarningIcon-Dmp1vMvv.js";import"./BaseRadioButton.stories-Cqch6f6e.js";import"./BaseRadioButton-yb4OSqft.js";import"./Title-gx4pqkja.js";import"./Card-QLIiUBhd.js";import"./Text-BRbO15mb.js";import"./Tag-BMlr4imk.js";import"./ExpandablePanel-Cp2rz9Vd.js";import"./useAnimatedHeightBetween-Y0W3Glbz.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-q9VB7tPK.js";import"./Expander-k161I6cB.js";import"./ChevronUpIcon-WwF5YQbw.js";import"./ListItem-DttFkodo.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
