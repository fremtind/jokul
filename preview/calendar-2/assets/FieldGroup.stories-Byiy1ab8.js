import{r as p,j as i}from"./iframe-_FbqnM0t.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CAW4cz70.js";import l from"./Help.stories-Dmu2onSY.js";import c from"./RadioButton.stories-D_HQKQyt.js";import{F as d}from"./FieldGroup-Cr8Td4-b.js";import{C as k,a as u}from"./CheckboxPanel.stories-Cs6odapT.js";import{RadioPanel as g}from"./RadioPanel.stories-DhF8juUd.js";import{C as h}from"./Checkbox-CwdNEgGa.js";import{R as b}from"./RadioPanel-BwGvybi6.js";import{H as x}from"./Help-Clbkcp7c.js";import{R as C}from"./RadioButton-BuiReGhd.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BMronpXF.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-uqUteRuV.js";import"./mergeRefs-B6F2ecWK.js";import"./BaseRadioButton.stories-BV6UZcZ_.js";import"./BaseRadioButton-Cm55dEBC.js";import"./useId-BazUWtdC.js";import"./Label-DvCKCHCr.js";import"./SupportLabel-B3pYR1lf.js";import"./SuccessIcon-BV3Ybpgs.js";import"./Icon-DQEQLOwb.js";import"./WarningIcon-DzHBKJ9H.js";import"./InputPanel-BoA3XDcB.js";import"./Button-BG_iH0eJ.js";import"./usePreviousValue-DQsDZLi6.js";import"./Loader-dntcr9VU.js";import"./useDelayedRender-DXEUWubj.js";import"./Title-4GBc46V6.js";import"./Card-jYtQ0sef.js";import"./Text-j7h9P65a.js";import"./Tag-DMOl7Pc3.js";import"./ExpandablePanel-B4OnWCaG.js";import"./useAnimatedHeightBetween-dftnE-zA.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BFR05W3E.js";import"./Expander-ALfJgJ19.js";import"./ChevronUpIcon-xpZRcDJa.js";import"./ListItem-PupgaCRu.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
