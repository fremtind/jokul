import{r as n,j as i}from"./iframe-BM5Tk-7K.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-WZPiCa5O.js";import l from"./Help.stories-C5RJ8Xo-.js";import c from"./RadioButton.stories-C4iRqveJ.js";import{F as d}from"./FieldGroup-Cnp10eG0.js";import{C as k,a as u}from"./CheckboxPanel.stories-BGkzmMWh.js";import{RadioPanel as g}from"./RadioPanel.stories-BCRr6w8t.js";import{C as h}from"./Checkbox-Cc953Wwk.js";import{R as b}from"./RadioPanel-Ca_5Rr1P.js";import{H as x}from"./Help-DaoSS6Aw.js";import{R as C}from"./RadioButton-BrjkwIRG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BpXa5wQ4.js";import"./Label-C59R4ceN.js";import"./SupportLabel-Dfr6JS5t.js";import"./SuccessIcon-qKKMID0L.js";import"./Icon-CaXfkIdf.js";import"./WarningIcon-Biwm9-GU.js";import"./BaseRadioButton.stories-CPE1z9vF.js";import"./BaseRadioButton-DJ8_q_hn.js";import"./InputPanel-CSflEXO5.js";import"./Flex-Bb8cXgJc.js";import"./SlotComponent-DH5upaxE.js";import"./mergeRefs-uMJ1gt5p.js";import"./Button-CqF2kU4m.js";import"./usePreviousValue-Cig1jiQz.js";import"./Loader-DGPTzZYD.js";import"./useDelayedRender-gdtrS9px.js";import"./Title-DyvxLreL.js";import"./Card-C4drliLC.js";import"./Text-98fwSiQO.js";import"./Tag-2YMSZBp_.js";import"./ExpandablePanel-zYctOAFz.js";import"./useAnimatedHeightBetween-C228zQkt.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-hf0fjyIl.js";import"./Expander-Dl8aM_-l.js";import"./ChevronUpIcon-NDj2cdz_.js";import"./ListItem-hbO71Xqf.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
