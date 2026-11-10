import{r as n,j as i}from"./iframe-CH2VyE4e.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Ceuj-XP4.js";import{CheckboxStory as c}from"./Checkbox.stories-DyE5RUr5.js";import d from"./Help.stories-5xvSCvjF.js";import k from"./RadioButton.stories-Cn9OiTpo.js";import{RadioPanel as u}from"./RadioPanel.stories-Cbo6tPfA.js";import{F as g}from"./FieldGroup-Dxq0Aquc.js";import{C as h}from"./Checkbox-CfD9YlCR.js";import{R as b}from"./RadioPanel-DzXZ8P04.js";import{H as x}from"./Help-Bh9J20uy.js";import{R as C}from"./RadioButton-ChjJrOjN.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CmY-3pAt.js";import"./clsx-B-dksMZM.js";import"./Flex-BQDxGHtk.js";import"./SlotComponent-DmpouJUd.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-3MIRHbU_.js";import"./usePreviousValue-DrUvKPU7.js";import"./Loader-BJrKnhRY.js";import"./useDelayedRender-DOQT8zUm.js";import"./useId-Dk7NFz5b.js";import"./Label-_Jt-63FO.js";import"./SupportLabel-CmDlvFWu.js";import"./SuccessIcon-baPG9Orm.js";import"./Icon-B3cN5la8.js";import"./WarningIcon-j7pJGLZZ.js";import"./BaseRadioButton.stories-2HDy7aHv.js";import"./BaseRadioButton-B0jnvyOi.js";import"./Title-D7PBjzjD.js";import"./Card-yLc0cALy.js";import"./Text-BZTawrG0.js";import"./Tag-CdNa8BwT.js";import"./ExpandablePanel-9QizVy3y.js";import"./useAnimatedHeightBetween-Bzi5E43Z.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D9Be54eH.js";import"./Expander-B0qXD1N9.js";import"./ChevronUpIcon-EtWC0UVo.js";import"./ListItem-DROwu8DG.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
