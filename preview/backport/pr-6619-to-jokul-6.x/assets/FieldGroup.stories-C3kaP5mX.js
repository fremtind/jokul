import{r as n,j as i}from"./iframe-DVdARoXG.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-D2OddZUE.js";import{CheckboxStory as c}from"./Checkbox.stories-DNUA7LA4.js";import d from"./Help.stories-xdxTPF8x.js";import k from"./RadioButton.stories-BK9Sc_6X.js";import{RadioPanel as u}from"./RadioPanel.stories-9vFKq_6t.js";import{F as g}from"./FieldGroup-9iCvLvXP.js";import{C as h}from"./Checkbox-BgfDMkzc.js";import{R as b}from"./RadioPanel-BhCJ0w2J.js";import{H as x}from"./Help-_J4T0vlZ.js";import{R as C}from"./RadioButton-CnEsQQwI.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-avWudsXa.js";import"./clsx-B-dksMZM.js";import"./Flex-CCpu7a-R.js";import"./SlotComponent-DSj0NG2p.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-enJqUy6U.js";import"./usePreviousValue-BuVZ3InM.js";import"./Loader-DCjCro3l.js";import"./useDelayedRender-Be5Dfv3o.js";import"./useId-dfs2t7lU.js";import"./Label-Cr8FRJ8N.js";import"./SupportLabel-CTIdXkD-.js";import"./SuccessIcon-DliUF6gI.js";import"./Icon-Sy3tFS9h.js";import"./WarningIcon-DRDdMsBw.js";import"./BaseRadioButton.stories-B2iTPr0U.js";import"./BaseRadioButton-C50pYcTf.js";import"./Title-D6bMJx7P.js";import"./Card-COyIJCwJ.js";import"./Text-B7B4Ka2d.js";import"./Tag-DgTSzMY8.js";import"./ExpandablePanel-10-I1MgY.js";import"./useAnimatedHeightBetween-Df2DHK1e.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DokWst7b.js";import"./Expander-DobWFGty.js";import"./ChevronUpIcon-_LmF028u.js";import"./ListItem-DDMD5n0X.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
