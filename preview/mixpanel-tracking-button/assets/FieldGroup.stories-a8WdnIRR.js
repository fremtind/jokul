import{r as p,j as i}from"./iframe-A5c2Wqvk.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-O2XvzT1_.js";import{CheckboxStory as c}from"./Checkbox.stories-Bi_1D2jm.js";import d from"./Help.stories-BANVMqdk.js";import k from"./RadioButton.stories-BENG6qoR.js";import{RadioPanel as u}from"./RadioPanel.stories-Bh1b7Gab.js";import{F as g}from"./FieldGroup-CRltiMYq.js";import{C as h}from"./Checkbox-DefGNEWD.js";import{R as b}from"./RadioPanel-C4rkzMnI.js";import{H as x}from"./Help-BjkrYEvC.js";import{R as C}from"./RadioButton-Wt9zCBFl.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BK62h5oE.js";import"./clsx-B-dksMZM.js";import"./Flex-4q2H_Iw0.js";import"./SlotComponent-RUIXAPm3.js";import"./mergeRefs-C1zYPesy.js";import"./Button-CFV1ExI7.js";import"./usePreviousValue-BpHgvnAJ.js";import"./serializeTracking-CnAc4iKu.js";import"./Loader-DB4OEe16.js";import"./useDelayedRender-k-4tZbkM.js";import"./useId-BqJ3Mudq.js";import"./Label-B8MgGNDM.js";import"./SupportLabel-CkMYJ3oD.js";import"./SuccessIcon-PvcmUODX.js";import"./Icon-aN8z_x5R.js";import"./WarningIcon-BGoIXnrD.js";import"./BaseRadioButton.stories-Bj4VYy6y.js";import"./BaseRadioButton-Dp4QPNXk.js";import"./Title-DHd5KV4g.js";import"./Card-B48Q6bQ1.js";import"./Text-DChhKQum.js";import"./Tag-p-x_1BKF.js";import"./ExpandablePanel-CJy5i908.js";import"./useAnimatedHeightBetween-JikCsOI7.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DzshHhbr.js";import"./Expander-BXk0xJ02.js";import"./ChevronUpIcon-Dk_V3XqI.js";import"./ListItem-DvSCzo9Z.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
