import{r as p,j as i}from"./iframe-CT96bI_e.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CGsaXshX.js";import{CheckboxStory as c}from"./Checkbox.stories-CWX5kHg0.js";import d from"./Help.stories-Cp6J-TxL.js";import k from"./RadioButton.stories-CdN47Hiz.js";import{RadioPanel as u}from"./RadioPanel.stories-C1Zfpflc.js";import{F as g}from"./FieldGroup-D7u0NXPD.js";import{C as h}from"./Checkbox-DB80DGCH.js";import{R as b}from"./RadioPanel-BRBeTSfE.js";import{H as x}from"./Help-DZwNOj_X.js";import{R as C}from"./RadioButton-BmbtgoW1.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Ca5mK5e6.js";import"./clsx-B-dksMZM.js";import"./Flex-ldzqaPrh.js";import"./SlotComponent-eH1P9dVM.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-xaf0K7ND.js";import"./usePreviousValue-4NiBmqxh.js";import"./Loader-B7ZSW0QE.js";import"./useDelayedRender-Bnk-hECQ.js";import"./BaseRadioButton.stories-Dv15kGIG.js";import"./BaseRadioButton-C9OqqnDJ.js";import"./useId-BJO-s8Ax.js";import"./Title-Dj0hfmx1.js";import"./Card-C119bnO2.js";import"./Text-CoR9rCn6.js";import"./Tag-BnzXZqFG.js";import"./ExpandablePanel-BiZ8S6eP.js";import"./useAnimatedHeightBetween-BwBc6ucT.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CCPPWg9x.js";import"./Expander-Xz8aO3HT.js";import"./ChevronDownIcon-BVrtDl_o.js";import"./Icon-hbz4p5Zk.js";import"./ChevronUpIcon-BDErgtiJ.js";import"./ListItem-Cu5z0mkz.js";import"./Label-mGwZHayP.js";import"./SupportLabel-TZHTTMFf.js";import"./SuccessIcon-CfoBP64e.js";import"./WarningIcon-X4HfGa2r.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
