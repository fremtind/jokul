import{r as n,j as i}from"./iframe-B1BcyvN2.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DI07g5Ty.js";import{CheckboxStory as c}from"./Checkbox.stories-C3Wtzs2j.js";import d from"./Help.stories-C5bBeFWT.js";import k from"./RadioButton.stories-CGoiiz2g.js";import{RadioPanel as u}from"./RadioPanel.stories-DSECZOgj.js";import{F as g}from"./FieldGroup-C-ANjulK.js";import{C as h}from"./Checkbox-Du2zxSjb.js";import{R as b}from"./RadioPanel-BTIzzCvy.js";import{H as x}from"./Help-DNQD5BHL.js";import{R as C}from"./RadioButton-DvHejdX8.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CcECNe0i.js";import"./clsx-B-dksMZM.js";import"./Flex-D4ZXUsWR.js";import"./SlotComponent-4Qw0ex-p.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Dh33MYp-.js";import"./usePreviousValue-CD4aQsFW.js";import"./Loader-NLJ6wLQp.js";import"./useDelayedRender-BQkUsN3p.js";import"./useId-CdK77Ikq.js";import"./Label-yfMfDkJi.js";import"./SupportLabel-C_ob5oWt.js";import"./SuccessIcon-BKRi1kFF.js";import"./Icon-MgODGWcQ.js";import"./WarningIcon-BlIm9EkN.js";import"./BaseRadioButton.stories-CyoYYnnY.js";import"./BaseRadioButton-CUAopd-p.js";import"./Title-C-kxvUTg.js";import"./Card-CtoYxA7A.js";import"./Text-Ci_ovIiL.js";import"./Tag-Ceep5rQ-.js";import"./ExpandablePanel-z6FEMjfW.js";import"./useAnimatedHeightBetween-CqY78sJa.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Dw7E7Rw4.js";import"./Expander-NN0SQxfs.js";import"./ChevronUpIcon-CqakHzNf.js";import"./ListItem-6kAYZUZl.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
