import{r as n,j as i}from"./iframe-DyXZgdMt.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Czj0vZG4.js";import{CheckboxStory as c}from"./Checkbox.stories-D5HN6VRE.js";import d from"./Help.stories-1AJSEvqz.js";import k from"./RadioButton.stories-BYIQ6rOS.js";import{RadioPanel as u}from"./RadioPanel.stories-C26G8ASo.js";import{F as g}from"./FieldGroup-90fpa6GZ.js";import{C as h}from"./Checkbox-B_LJ5ljG.js";import{R as b}from"./RadioPanel-UuGtRqKm.js";import{H as x}from"./Help-D-X_c-eN.js";import{R as C}from"./RadioButton-CndTA1k_.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DglxQqL4.js";import"./clsx-B-dksMZM.js";import"./Flex-CakwdaM1.js";import"./SlotComponent-DQJmODQ8.js";import"./mergeRefs-D8jKCULl.js";import"./Button-Cv1XuYmk.js";import"./usePreviousValue-ou8LXt_3.js";import"./Loader-DkDBey3n.js";import"./useDelayedRender-WwNzHuBd.js";import"./useId-5lIUKqkD.js";import"./Label-B4E0kpuz.js";import"./SupportLabel-BwuODeWr.js";import"./SuccessIcon-DN1jTQOG.js";import"./Icon-BYJ5CBOm.js";import"./WarningIcon-O9H6woes.js";import"./BaseRadioButton.stories-8YfXigvX.js";import"./BaseRadioButton-D6ZjToMB.js";import"./Title-DVN6Iq5h.js";import"./Card-B8wdu0x7.js";import"./Text-C3C90um3.js";import"./Tag-DrH7owgy.js";import"./ExpandablePanel-MUtvPQns.js";import"./useAnimatedHeightBetween-CW75Y7C6.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BedfQHVf.js";import"./Expander-uhJMLKtX.js";import"./ChevronUpIcon-Dv7vkVGc.js";import"./ListItem-DG9gAWYY.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
