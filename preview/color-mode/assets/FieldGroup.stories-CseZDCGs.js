import{r as n,j as i}from"./iframe-BNW8fljy.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DKRGTMRX.js";import{CheckboxStory as c}from"./Checkbox.stories-Rb3AxxsJ.js";import d from"./Help.stories-DdJ_vsAp.js";import k from"./RadioButton.stories-DUQHGarz.js";import{RadioPanel as u}from"./RadioPanel.stories-CEuW0uFM.js";import{F as g}from"./FieldGroup-DxnsclNd.js";import{C as h}from"./Checkbox-BPGbmHvq.js";import{R as b}from"./RadioPanel-B4d5_m24.js";import{H as x}from"./Help-BRWJuXu7.js";import{R as C}from"./RadioButton-D_35mjZ7.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Bwxpyyxb.js";import"./clsx-B-dksMZM.js";import"./Flex-Qw6oex1D.js";import"./SlotComponent-RJKkPso_.js";import"./mergeRefs-BXFYMn7m.js";import"./Button-BTYi6rGa.js";import"./usePreviousValue-Dvi41Vsc.js";import"./Loader-CG4redwx.js";import"./useDelayedRender-C5gQq-I-.js";import"./useId-28BnomT8.js";import"./Label-BZi7i9PB.js";import"./SupportLabel-CI4poD9G.js";import"./SuccessIcon-BSJnWh_n.js";import"./Icon-Dwa6cxo_.js";import"./WarningIcon-CnTPlKxt.js";import"./BaseRadioButton.stories-CQpYvBkY.js";import"./BaseRadioButton--lWFOzsO.js";import"./Title-zWglKWyN.js";import"./Card-D8dOlk3W.js";import"./Text-B1rSU3hd.js";import"./Tag-dbHtci1_.js";import"./ExpandablePanel-DVZpAlps.js";import"./useAnimatedHeightBetween-yq8ADHpG.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-pKWT686h.js";import"./Expander-DONXOjbG.js";import"./ChevronUpIcon-DUV-kqEA.js";import"./ListItem-DYvnSp7J.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
