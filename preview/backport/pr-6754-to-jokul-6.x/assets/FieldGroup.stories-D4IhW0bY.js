import{r as n,j as i}from"./iframe-C4kGW9ed.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CCF_SFrz.js";import{CheckboxStory as c}from"./Checkbox.stories-DEbl-rRM.js";import d from"./Help.stories-CBRaPQzy.js";import k from"./RadioButton.stories-D0ubqEu2.js";import{RadioPanel as u}from"./RadioPanel.stories-CCQj7fT3.js";import{F as g}from"./FieldGroup-Baz4GZbp.js";import{C as h}from"./Checkbox-6vzcHXyO.js";import{R as b}from"./RadioPanel-DmbE5rlH.js";import{H as x}from"./Help-BCrIPNu_.js";import{R as C}from"./RadioButton-byStc7Uu.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D2QtQ-tV.js";import"./clsx-B-dksMZM.js";import"./Flex-C8P7A3VN.js";import"./SlotComponent-B6_yjTdd.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BnYVB22u.js";import"./usePreviousValue-B32xC7P2.js";import"./Loader-Bpv6g_Jo.js";import"./useDelayedRender-BXZPG15M.js";import"./useId-DqDMNHRO.js";import"./Label-CEQ1o7T-.js";import"./SupportLabel-sUm11pRi.js";import"./SuccessIcon-GsSOcH16.js";import"./Icon-D9_b2G3l.js";import"./WarningIcon-BmoWrLuU.js";import"./BaseRadioButton.stories-Bbxx7QFF.js";import"./BaseRadioButton-BK3UGLmp.js";import"./Title-Dot7BV75.js";import"./Card-BY4SS5rH.js";import"./Text-y8N4AjKA.js";import"./Tag-Cz47MCgj.js";import"./ExpandablePanel-BlheJeNx.js";import"./useAnimatedHeightBetween-BW4WSpS7.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DLmypqo3.js";import"./Expander-Bofmbq8e.js";import"./ChevronUpIcon-U1e-sVV4.js";import"./ListItem-C9MSDyLd.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
