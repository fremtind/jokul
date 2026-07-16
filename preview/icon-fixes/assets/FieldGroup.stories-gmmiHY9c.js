import{r as p,j as i}from"./iframe-kxqBbjs9.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-C8_FxFHw.js";import l from"./Help.stories-ajm70cNt.js";import c from"./RadioButton.stories-Og8yU4_P.js";import{F as d}from"./FieldGroup-vZs80dXV.js";import{C as k,a as u}from"./CheckboxPanel.stories-CTULieEY.js";import{RadioPanel as g}from"./RadioPanel.stories-C1lSF7we.js";import{C as h}from"./Checkbox-Bmr2WEMw.js";import{R as b}from"./RadioPanel-C5ZLD6mn.js";import{H as x}from"./Help-BBBZ4XJb.js";import{R as C}from"./RadioButton-B3P1JVh5.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-C1C6R8pD.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-C7G9qjA1.js";import"./mergeRefs-ZERAuhGd.js";import"./BaseRadioButton.stories-7eLZREdJ.js";import"./BaseRadioButton-CafpZJu5.js";import"./useId-DJCH1UiK.js";import"./Label-CkBpjvV5.js";import"./SupportLabel-DYVsWrPN.js";import"./SuccessIcon-CBmmoVdR.js";import"./Icon-dP-atOhF.js";import"./WarningIcon-B7_Gc7Fd.js";import"./InputPanel-Tk1__VzD.js";import"./Button-D8zLm7Gp.js";import"./usePreviousValue-DMRrOnF-.js";import"./Loader-Dg8r7VPx.js";import"./useDelayedRender-IGWHt5b-.js";import"./Title-D9S0JWGx.js";import"./Card-CJqOXOJ4.js";import"./Text-CSkCmUYA.js";import"./Tag-BPY5yf05.js";import"./ExpandablePanel-Dwy2Vf9M.js";import"./useAnimatedHeightBetween-Evqnjqtd.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CZMj0uo-.js";import"./Expander-Dg5bPCqt.js";import"./ChevronDownIcon-CV9wpa5T.js";import"./ChevronUpIcon-Rq-rvoGE.js";import"./ListItem-aSBRXfH1.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
