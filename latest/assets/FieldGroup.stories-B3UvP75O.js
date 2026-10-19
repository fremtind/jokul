import{r as n,j as i}from"./iframe-P2uUjS8i.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Dely4Sdd.js";import{CheckboxStory as c}from"./Checkbox.stories-c75RAfWP.js";import d from"./Help.stories-DsuPT_Ms.js";import k from"./RadioButton.stories-DOqT0vDs.js";import{RadioPanel as u}from"./RadioPanel.stories-BoLVGwLd.js";import{F as g}from"./FieldGroup-D8DnRea8.js";import{C as h}from"./Checkbox-CTwKyrQp.js";import{R as b}from"./RadioPanel-CbI3SzU1.js";import{H as x}from"./Help-Dbch4EEV.js";import{R as C}from"./RadioButton-BuqhLO_2.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-ol36-gjA.js";import"./clsx-B-dksMZM.js";import"./Flex-Ch9RuTHq.js";import"./SlotComponent-DENEyUez.js";import"./mergeRefs-Boz_IXRb.js";import"./Button-ucqgG9gB.js";import"./usePreviousValue-CPHONeJk.js";import"./Loader-CbVZUr5Q.js";import"./useDelayedRender-XucGk48g.js";import"./useId-C-yvCJEj.js";import"./Label-BBFAdii4.js";import"./SupportLabel-Y3lqP5va.js";import"./SuccessIcon-q6UkWopF.js";import"./Icon-D1srZfcx.js";import"./WarningIcon-rvGngnUn.js";import"./BaseRadioButton.stories-mEvCHMQg.js";import"./BaseRadioButton-C4zvXYbP.js";import"./Title-xTetwwm2.js";import"./Card-DlbcNJAY.js";import"./Text-DrgILHyS.js";import"./Tag-M7BdMCEH.js";import"./ExpandablePanel-Cq_lc16Q.js";import"./useAnimatedHeightBetween-eQIVJf-b.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C11esbn0.js";import"./Expander-CRI88BOR.js";import"./ChevronUpIcon-Dok1e10e.js";import"./ListItem-yH2-7rZh.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
