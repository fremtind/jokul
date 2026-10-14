import{r as n,j as i}from"./iframe-DlE7KeBx.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-MCu8vU7Z.js";import{CheckboxStory as c}from"./Checkbox.stories-liGyW4fz.js";import d from"./Help.stories-Uyk__8Ga.js";import k from"./RadioButton.stories-COF4fgW3.js";import{RadioPanel as u}from"./RadioPanel.stories-Due0BI7B.js";import{F as g}from"./FieldGroup-BzASNOf_.js";import{C as h}from"./Checkbox-DkijfXwN.js";import{R as b}from"./RadioPanel-DOZghsex.js";import{H as x}from"./Help-kO_We4VH.js";import{R as C}from"./RadioButton-DkmBAkJv.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CUW82MbU.js";import"./clsx-B-dksMZM.js";import"./Flex-BfKB9hoK.js";import"./SlotComponent-C_WPnrrP.js";import"./mergeRefs-Cn8AZLfr.js";import"./Button-DiB5VkCj.js";import"./usePreviousValue-Co53D6aX.js";import"./Loader-C9h_oqo6.js";import"./useDelayedRender-BsuEYDEB.js";import"./useId-Bd13nfB3.js";import"./Label-CpefJmFB.js";import"./SupportLabel-B4QK7xGJ.js";import"./SuccessIcon-DEjnxb-w.js";import"./Icon-Cf7uEQ-T.js";import"./WarningIcon-C9Kwf_ER.js";import"./BaseRadioButton.stories-DRmJ1iYV.js";import"./BaseRadioButton-BN9e--c0.js";import"./Title-D_OzEafF.js";import"./Card-Cc8L3qN5.js";import"./Text-POecls-r.js";import"./Tag-DXnK0Og_.js";import"./ExpandablePanel-Bsy9kXBS.js";import"./useAnimatedHeightBetween-BQw-hQFE.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-COrl05QW.js";import"./Expander-BVukfyzl.js";import"./ChevronUpIcon-BOG-zomq.js";import"./ListItem-jkgqjSuy.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
