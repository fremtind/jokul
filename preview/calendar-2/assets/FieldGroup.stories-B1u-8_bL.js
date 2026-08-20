import{r as n,j as i}from"./iframe-CyrJbBlo.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-B8SBZZ8g.js";import l from"./Help.stories-DgjjhCeK.js";import c from"./RadioButton.stories-DhrhHH7O.js";import{F as d}from"./FieldGroup-DDMfY21Q.js";import{C as k,a as u}from"./CheckboxPanel.stories-DtM8A8Qc.js";import{RadioPanel as g}from"./RadioPanel.stories-CnJUO_y2.js";import{C as h}from"./Checkbox-BJ4gfYsQ.js";import{R as b}from"./RadioPanel-Uz4-f4Zc.js";import{H as x}from"./Help-CUIaM9ZZ.js";import{R as C}from"./RadioButton-C67WzjJV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-neBOdzM_.js";import"./Label-BemHmtrl.js";import"./SupportLabel-dJKsD1aS.js";import"./SuccessIcon-Cw02K339.js";import"./Icon-BYjPRixs.js";import"./WarningIcon-CQqoM3EL.js";import"./BaseRadioButton.stories-r6_a0Atw.js";import"./BaseRadioButton-BtKSxHwA.js";import"./InputPanel-DOOGSILc.js";import"./Flex-Byj1CJ6K.js";import"./SlotComponent-CUzbrRlE.js";import"./mergeRefs-CT5vwrg5.js";import"./Button-B-DtqlXv.js";import"./usePreviousValue-DInnFQmh.js";import"./Loader-C0s6KtRr.js";import"./useDelayedRender-C6CUE9CL.js";import"./Title-DMVODo0Y.js";import"./Card-wII7D4i5.js";import"./Text-Byii7RZs.js";import"./Tag-CPbFqJo2.js";import"./ExpandablePanel-CFLZifqp.js";import"./useAnimatedHeightBetween-BiPMLZ4V.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BFi-4lji.js";import"./Expander-COL64hw1.js";import"./ChevronUpIcon--gGswejP.js";import"./ListItem-BrcHPBEs.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
