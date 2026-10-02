import{r as n,j as i}from"./iframe-Dof2-brO.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Dqg11kWJ.js";import{CheckboxStory as c}from"./Checkbox.stories-zGMGHWOX.js";import d from"./Help.stories-DTh0CfWX.js";import k from"./RadioButton.stories-Bc-G1TzQ.js";import{RadioPanel as u}from"./RadioPanel.stories-CRVe5y9p.js";import{F as g}from"./FieldGroup-hFmaBG63.js";import{C as h}from"./Checkbox-B78-iaxU.js";import{R as b}from"./RadioPanel-BA4V2kU6.js";import{H as x}from"./Help-MesMe5Pp.js";import{R as C}from"./RadioButton-piKXV-6B.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DDIsomG_.js";import"./clsx-B-dksMZM.js";import"./Flex-C6Zd6rL3.js";import"./SlotComponent-ByqHDUtN.js";import"./mergeRefs-AXWqBysJ.js";import"./Button-BNJ6vKIf.js";import"./usePreviousValue-BV6U9hHx.js";import"./Loader-LptFY11H.js";import"./useDelayedRender-DeOCxG4x.js";import"./useId-BWup3LHY.js";import"./Label-DYjybdt8.js";import"./SupportLabel-hLfrDTUu.js";import"./SuccessIcon-CA1pZnus.js";import"./Icon-CCr1xMKd.js";import"./WarningIcon-C6-QZrqP.js";import"./BaseRadioButton.stories-f8z8hqWm.js";import"./BaseRadioButton-DPi8GeHp.js";import"./Title-BCzHyoi8.js";import"./Card-B9WjOizA.js";import"./Text-CSViRbZs.js";import"./Tag-DcWh44nT.js";import"./ExpandablePanel-BZv6oax_.js";import"./useAnimatedHeightBetween-29RS8202.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-w9CXIFAr.js";import"./Expander-iZ4teJgH.js";import"./ChevronUpIcon-cH0PHS8I.js";import"./ListItem-B_m80ts_.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
